import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';

const NewDailyTask = (props) => {

  const [prompt, setPrompt] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(null);
  const [request, setRequest] = React.useState("");
  const [goal, setGoal] = React.useState("");
  const [requestPerson, setrequestPerson] = React.useState("");

  React.useEffect(() => {
    if (props.userObj.completed) {
      setPrompt("Enter a new goal for today");
    }
    else {
      setPrompt("Create a smaller version of your goal to complete today");
    }
  }, [props.userObj.completed]);


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (goal === "") {
      setError("Please enter a goal");
      setLoading(false);
      return;
    }

    try {
      updateDoc(doc(db, "users", props.userObj.uid), {
        goal: goal,
        lastUpdated: new Date(),
        requestPerson: requestPerson,
        request: request,
      });
      console.log("Added new goal to database");
      props.setUserObj({
        ...props.userObj,
        goal: goal,
        requestPerson: requestPerson,
        request: request,
      });
      props.setSubmitted(true);

    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setLoading(false);
  };
  // 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
  if (loading) {
    // spinner
    <div className="flex justify-center items-center h-screen mt-4">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
    </div>

  }



  return (
    <div>
      <h1 className='m-2 mb-2 text-2xl'>Did You Complete the Previous Goal?</h1>
      {/* <hr className='bg-white h-0.5 rounded-full'></hr> */}
      < div className='m-2 mb-2 text-lg' > Previous Goal: Interact with {props.userObj.requestPerson} in order to {props.userObj.goal}</div >
      <div className='flex flex-row justify-center'>
        {/* white outline transperent button */}
        <button className='m-4  border-2 border-white rounded-full w-full p-2 bg-transparent text-white hover:bg-white hover:text-black transition duration-500 ease-in-out text-xl'
          onClick={() => {
            props.setUserObj({ ...props.userObj, completed: true, setCompleted: true });
          }}
        >Yes</button>
        <button className='m-4  border-2 border-white rounded-full w-full p-2 bg-transparent text-white hover:bg-white hover:text-black transition duration-500 ease-in-out text-xl'
          onClick={() => {
            props.setUserObj({ ...props.userObj, completed: false, setCompleted: true });
          }}
        >No</button>
      </div>
      <hr className='bg-white h-0.5 rounded-full'></hr>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="text-2xl font-bold m-2 mt-4"
        >Set Today's Goal</div>
        {/* <hr className='h-0.5 bg-white my-2 rounded-full' /> */}
        <p className="text-lg font-bold m-2"
        >{prompt}</p>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-2xl py-2 px-4 block w-full appearance-none leading-normal my-2"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter goal here!" />
        {/* <hr className='h-0.5 bg-white my-2 rounded-full' /> */}
        <p className="text-lg font-bold m-2 my-2"
        >What is something you can ask someone else to do that will make it easier to complete this goal by today?</p>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-2xl py-2 px-4 block w-full appearance-none leading-normal my-2"
          type="text"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Request From Someone Else" />
        <p className="text-lg font-bold m-2 my-2"
        >Who will you make this request to?</p>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-2xl py-2 px-4 block w-full appearance-none leading-normal my-2"
          type="text"
          value={requestPerson}
          onChange={(e) => setrequestPerson(e.target.value)}
          placeholder="Request Target" />
        <button
          type='submit'
          className='w-full p-2 border-2 border-white rounded-full bg-transparent text-white hover:bg-white hover:text-black transition duration-500 ease-in-out text-xl my-4'
        >Set Today's Goal
        </button>
        {error && <p className="text-red-500  italic mt-4 mb-4 text-center font-bold
        ">{error}</p>}
      </form>
    </div >
  );
}

export default NewDailyTask

