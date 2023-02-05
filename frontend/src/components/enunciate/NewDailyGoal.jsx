import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const NewDailyTask = (props) => {
    const text = "";
    const user = React.useContext(AuthContext);
    const navigate = useNavigate();

    if (props.dailyGoal.completed) {
        text = "If the goal is completed, enter a new goal"
    }
    function onSubmit() {
        const onSubmit = async () => {
            const ref = doc(db, "users", "user?.currentUser.uid");

            await updateDoc(ref, {
                capital: true
            });
        }
    }
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        function writeUserData(goal) {
            const db = getDatabase();
            setDoc(doc(db, "users", user.uid), {
                text: dailyGoal
            });
        }

    }

    return (
        <div className='bg-purple-500 min-h-screen'>
            <form>
                <div>
                    Goal
                </div>
                <input type="text"
                    id="Goal"
                    name="Goal"
                    placeholder="Enter new goal here!"
                    onChange={(e) => setDailyGoal(e.target.value)}
                    value={dailyGoal} />
                <button
                    onSubmit={onSubmit}
                    class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Next
                </button>
            </form>
        </div>
    );


}
export default NewDailyTask
