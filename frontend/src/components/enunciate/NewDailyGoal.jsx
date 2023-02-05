import React from 'react'

const NewDailyTask = (props) => {

    const [text, setText] = React.useState("");
    
    React.useEffect(() => {if (props.dailyGoal.completed) {
        setText("If the goal is completed, enter a new goal");
    }
    else{
        setText("If the goal is not completed from yesterday, create a new smaller version of the goal");
    }});

     
    return (
        <div className='flex flex-col' >
            <form>
                <div>
                    Goal
                </div>
                <div>
                    <hr className='m-0.5'></hr>
                </div>
                <p>{text}</p>
                <hr className='m-0.5'></hr>
                <input type="text" id="Goal" name="Goal" placeholder="Enter goal here!" />
                <hr></hr>
                <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Next
                </button>
            </form>
        </div>
    );
}

export default NewDailyTask