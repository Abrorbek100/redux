import { useContext } from "react";
import { ProductContextApi } from "./context/productContext";

function App() {
  const { state, dispatch } = useContext(ProductContextApi);
  console.log(state);

  const myFunc = (e) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_NAME", payload: e.target[0].value });
  };
  const myFunc2 = () => {
    dispatch({ type: "CLICK", payload: true });
  };
  return (
    <div className="App">
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum?</h1>
      <form
        action=""
        onSubmit={myFunc}
        className="flex flex-col h-[100px] justify-between px-[300px] mt-[20px]"
      >
        <input type="text" className="border-[3px] border-black" />
        <button className="border-2 border-black px-3 py-2 text-[20px]">
          Get Data
        </button>
      </form>

      <button
        onClick={myFunc2}
        className="border-2 border-black px-3 py-2 text-[20px]"
      >
        Make True
      </button>
    </div>
  );
}

export default App;
