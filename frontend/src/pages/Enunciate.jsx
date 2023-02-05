import React from 'react'
import NewDailyGoal from '../components/enunciate/NewDailyGoal';


const Enunciate = () => {
  const [dailyGoal, setDailyGoal] = React.useState({ text: "Assertive Suggestion", date: 10 });

  
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
      <div className='min-h-screen bg-gradient-to-tr from-purple-500 to-purple-200'>
        <div className='flex flex-col items-center p-4'>
          <div className='flex justify-between p-2 bg-yellow-50 shadow-2xl text-lg font-semibold font-mono rounded-lg mb-4 w-56'>
            <div>☰nunciate</div>
            <div className=''>{dailyGoal.email} email</div>
          </div>
          <div className='backdrop:blur-sm bg-purple-300 bg-opacity-60 shadow-2xl p-2 rounded-2xl'>
            <h1 className='font-bold mt-2 mb-2'>Current Goal</h1>
            <hr className='bg-white h-0.5'></hr>
            <div className='font-bold mt-2 mb-2'>{dailyGoal.text}</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Enunciate