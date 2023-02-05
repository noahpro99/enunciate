import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";


const Enunciate = () => {

  const [userObj, setUserObj] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [updatedToday, setUpdatedToday] = React.useState(false);
  const user = React.useContext(AuthContext);
  const messaging = getMessaging();
  const navigate = useNavigate();
  const currentGoal = () => {
    return (
      <><h1 className='font-bold mt-2 mb-2'>Current Goal</h1>
        <hr className='bg-white h-0.5'></hr>
        <div className='font-bold mt-2 mb-2'>{dailyGoal.text}</div></>);
  }

  React.useEffect(() => {
    setLoading(true);

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    getToken(messaging, { vapidKey: 'BIMuzoFpjoJZF8-jxZWt8Gbt7wHLxKSQ1J4W2c21VbafkmIBHw11diSebsNO3qPVUAAVi4eh6KAi1witLbY459w' }).then((currentToken) => {
      const docRef = doc(db, "users", user?.currentUser.uid);
      if (currentToken) {
        console.log('currentToken', currentToken);
        updateDoc(docRef, {
          token: currentToken
        });

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

    if (!user?.currentUser.uid) {
      navigate("/login");
    }
  }, [user?.currentUser.uid, navigate, messaging]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (userObj.goal && (userObj.lastUpdated.toDate().getDate() === new Date().getDate() || updatedToday)) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-purple-500 to-purple-200'>
        <div className='flex flex-col items-center p-8 w-full'>
          <div className='text-5xl font-bold font-mono text-white mb-4 p-4'
          >☰nunciate</div>
          <div className='backdrop:blur-sm bg-white bg-opacity-20 shadow-2xl p-2 rounded-2xl w-full'>
            {currentGoal()}
          </div>
        </div>
      <div>
    )
  } else {
    return (

        <NewDailyGoal userObj={userObj} setUserObj={setUserObj} setUpdatedToday={setUpdatedToday} />

    );
  }

}

export default Enunciate