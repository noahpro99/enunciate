import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import {AuthContext} from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";



const Enunciate = () => {
  const [dailyGoal, setDailyGoal] = React.useState({ text: "This is a test", date: 1 });
  const user = React.useContext(AuthContext);
  const navigate = useNavigate();
  
  console.log(user?.currentUser.uid);
  
  if (!user?.currentUser.uid){
    navigate("/login");
  }
  
  React.useEffect(() => {
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
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [user?.currentUser.uid]);



  const now = new Date();
  console.log(now.getDate());

  if (true) {
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