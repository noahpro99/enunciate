import React from 'react'

const NewDailyTask = (props) => {
    const text = "";
    if (props.dailyGoal.completed) {
        text = "If the goal is completed, enter a new goal"
    }
    return (
        <div className='bg-indigo-500 min-h-screen'>
            <form>
                <div>
                    Goal
                </div>
                <input type="text" id="Goal" name="Goal" placeholder="Enter goal here!" />
                <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Next
                </button>
            </form>
        </div>
    );
}

export default NewDailyTask