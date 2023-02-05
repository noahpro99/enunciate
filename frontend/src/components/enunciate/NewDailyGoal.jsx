import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';

const NewDailyTask = (props) => {

    const [prompt, setPrompt] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [goal, setGoal] = React.useState("");

    React.useEffect(() => {
        if (props.userObj.completed) {
            setPrompt("If the goal is completed, enter a new goal");
        }
        else {
            setPrompt("If the goal is not completed from yesterday, create a new smaller version of the goal");
        }
    }, [props.userObj.completed]);


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            updateDoc(doc(db, "users", props.userObj.uid), {
                goal: goal,
                lastUpdated: new Date(),
                completed: false
            });
            console.log("Added new goal to database");
            props.setUserObj({
                ...props.userObj,
                goal: goal,
                completed: false
            });
            props.setUpdatedToday(true);

        } catch (error) {
            console.log(error);
            setError(error.message);
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div className='flex flex-col' >
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    Goal
                </div>
                <div>
                    <hr className='m-0.5'></hr>
                </div>
                <p>{prompt}</p>
                <hr className='m-0.5'></hr>
                <input type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="Enter goal here!" />
                <button
                    type='submit'
                    className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Next
                </button>
            </form>
        </div>
    );
}

export default NewDailyTask