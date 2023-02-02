import { toast } from "react-hot-toast";

function App() {
  const notify = () => toast.success("Here is your toast.");
  return (
    <div className="text-xl text-gray-700 text-center font-extrabold mt-10">
      <h1>React APP</h1>
      <button onClick={notify} className="btn btn-xs">
        Toast
      </button>
    </div>
  );
}

export default App;
