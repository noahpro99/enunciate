import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";


const Enunciate = () => {
  const [dailyGoal, setDailyGoal] = React.useState({ text: "This is a test", date: 1 });
  const user = React.useContext(AuthContext);
  const navigate = useNavigate();
  const messaging = getMessaging();



  React.useEffect(() => {

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
        setDailyGoal(docSnap.data());
      }
      else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    // call the function
    fetchData().catch(console.error);

    console.log(user?.currentUser.uid);

    if (!user?.currentUser.uid) {
      navigate("/login");
    }
  }, [user?.currentUser.uid]);



  const now = new Date();
  console.log(now.getDate());

  if (now.getDate() > dailyGoal.date) {
    return (
      <div>
        <NewDailyGoal dailyGoal={dailyGoal} setDailyGoal={setDailyGoal} />

      </div>
    );
  } else {
    return (
      <div>
        <div>Current Goal</div>
        <div>{dailyGoal.text}</div>
      </div>
    )
  }

}

export default Enunciate