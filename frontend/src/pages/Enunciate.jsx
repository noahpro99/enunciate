import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';


const Enunciate = () => {
  const [ dailyGoal, setDailyGoal ] = React.useState({text: "This is a test", date: 1});

  const now = new Date();
  console.log(now.getDate());

  if(now.getDate() > dailyGoal.date) {
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