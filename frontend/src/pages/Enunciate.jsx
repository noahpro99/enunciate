import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";
import { Configuration, OpenAIApi } from "openai";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const Enunciate = () => {

  const [userObj, setUserObj] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [loadingOPENAI, setLoadingOPENAI] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [suggestion, setSuggestion] = React.useState("");
  const user = React.useContext(AuthContext);
  const messaging = getMessaging();
  const navigate = useNavigate();
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);


  React.useEffect(() => {
    setLoading(true);

    // declare the data fetching function
    const fetchData = async () => {
      const docRef = doc(db, "users", user?.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserObj(docSnap.data());
      }
      else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      setLoading(false);

    }
    // call the function
    fetchData().catch(console.error);

    console.log(user?.currentUser.uid);

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    getToken(messaging, { vapidKey: 'BIMuzoFpjoJZF8-jxZWt8Gbt7wHLxKSQ1J4W2c21VbafkmIBHw11diSebsNO3qPVUAAVi4eh6KAi1witLbY459w' }).then((currentToken) => {
      const docRef = doc(db, "users", user?.currentUser.uid);
      if (currentToken) {
        console.log('currentToken', currentToken);
        // update if token is different
        if (currentToken !== userObj.token) {
          updateDoc(docRef, {
            token: currentToken
          });
        }

      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');


          } else {
            console.log('Unable to get permission to notify.');
          }
        });
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

    if (!user?.currentUser.uid) {
      navigate("/login");
    }

    async function getSuggestion() {
      setLoadingOPENAI(true);

      let message = `Please suggest a very strong willed statement that I can say to ${userObj.requestPerson} to request that they ${userObj.request}. This statement should be an assertive way to articulate my goal.\n\nAssertive statement:`;
      console.log(message);

      // const completion = await openai.createCompletion({
      //   model: 'text-davinci-003',
      //   prompt: message,
      //   temperature: 0.6,
      //   max_tokens: 20,
      // });

      // const response = completion.data.choices[0].text;

      // setSuggestion(response);
      // console.log(response);

      setLoadingOPENAI(false);
    }


    if (userObj.goal && (userObj.lastUpdated.toDate().getDate() === new Date().getDate() || submitted)) {
      getSuggestion();
    }
  }, [user?.currentUser.uid, navigate, messaging]);



  const currentDashboardJsx = () => {

    if (loading) {
      return (
        <div className='flex justify-center items-center'>
          <div className="animate-spin rounded-full h-16 w-16 m-4 border-b-2 border-white"></div>
        </div>
      );
    } else if (userObj.goal && (userObj.lastUpdated.toDate().getDate() === new Date().getDate() || submitted)) {


      return (
        <>
          <h1 className='m-2 mb-3 text-2xl'>Today's Goal</h1>
          <div className='m-2 mb-2 text-xl'>Request that {userObj.requestPerson} {userObj.request}</div>
          <hr className='bg-white my-4 h-0.5 rounded-full'></hr>
          <h1 className='m-2 mb-3 text-2xl'>Suggested Conversation</h1>
          {
            loadingOPENAI ? <div className='m-2 mb-2 text-xl'>Loading...</div> : <div className='m-2 mb-2'>{suggestion}</div>
          }
          <hr className='bg-white my-4 h-0.5 rounded-full'></hr>
          <h1 className='m-2 mb-3 text-2xl'>Weekly Summary</h1>
          <div className='m-2 mb-2 text-xl'>Coming Soon</div>
        </>);


    } else {
      return (
        <NewDailyGoal userObj={userObj} setUserObj={setUserObj} setSubmitted={setSubmitted} />
      );
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 to-purple-200'>
      <div className='flex flex-col items-center justify-between min-h-screen'>
        <div className='flex flex-col items-center p-6 w-full pb-12'>
          <div className='text-5xl font-bold font-mono text-white mb-4 p-4'
          >☰nunciate
          </div>
          <div className='backdrop:blur-sm bg-white bg-opacity-20 shadow-2xl p-2 rounded-2xl w-full font-bold'>
            {currentDashboardJsx()}
          </div>
        </div>

        <div className='flex flex-row items-center justify-between w-full'>
          <button className='bg-white bg-opacity-20 shadow-2xl p-2 rounded-2xl font-bold self-end m-4'
            onClick={() => {
              signOut(auth);
              navigate("/login");
            }}
          >Sign Out</button>

          <button className='bg-white bg-opacity-20 shadow-2xl p-2 rounded-2xl font-bold self-end m-4'
            onClick={() => {
              const docRef = doc(db, "users", user?.currentUser.uid);
              updateDoc(docRef, {
                // put in yesterday's date
                lastUpdated: new Date(new Date().setDate(new Date().getDate() - 1))

              });
              setSubmitted(!submitted);
              console.log('skipped back a day');
            }}
          >Skip forward a Day for Testing</button>
        </div>

      </div>
    </div>
  );

}

export default Enunciate