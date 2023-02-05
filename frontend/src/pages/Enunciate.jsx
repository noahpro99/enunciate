import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';


const Enunciate = () => {
  const [dailyGoal, setDailyGoal] = React.useState({ text: "Assertive Suggestion", date: 10 });

  const currentGoal = () => {
    return (
      <><h1 className='font-bold mt-2 mb-2'>Current Goal</h1>
        <hr className='bg-white h-0.5'></hr>
        <div className='font-bold mt-2 mb-2'>{dailyGoal.text}</div></>);
  }

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
      <div className='min-h-screen bg-gradient-to-br from-purple-500 to-purple-200'>
        <div className='flex flex-col items-center p-8 w-full'>
          <div className='text-5xl font-bold font-mono text-white mb-4 p-4'
          >☰nunciate</div>
          <div className='backdrop:blur-sm bg-white bg-opacity-20 shadow-2xl p-2 rounded-2xl w-full'>
            {currentGoal()}
          </div>
        </div>
      </div>
    )
  }

}

export default Enunciate