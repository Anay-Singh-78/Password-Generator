import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { chngContext } from "./context/Toggle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { createPassword, password, setNumber, setChar, setLength, number, char, length , theme , setTheme } = useContext(chngContext);
  let [val, setVal] = useState(0);
  const passwordRef = useRef(null);
  const clickHandler = useCallback(() => {
    toast.success("Copied successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password])
  const clickPassword = () => {

    if (val > 7 && val < 101) {
      setLength(val);
      toast.success("Password created", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    else if (val < 8) {
      toast.warning("Length Should be larger than 8", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    else {
      toast.warning("Length should be smaller or equal to 100", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }
  const toggleTheme = () =>{
    setTheme((prev=> prev === "light" ? "dark" : "light"
    ))
  }
  const changeTheme = () =>{
    console.log(theme);
    // toggleTheme();
    // console.log(theme);
    document.querySelector('html').classList.remove("dark" , "light");
    document.querySelector('html').classList.add(theme
    )
  }
  useEffect(()=>{
    changeTheme();
  },[theme])
  useEffect(() => {
    createPassword();
  }, [length, number, char]);
  return (
    <div className="App bg-rose-900  dark:bg-zinc-700 min-h-screen flex justify-center items-center">
      <div className="bg-teal-600 dark:bg-teal-800 w-7/12 md:w-5/12 min-h-[200px] flex flex-col items-center rounded-xl ">
        <div className="w-full mb-2  bg-purple-500  dark:bg-indigo-900 relative rounded-tl-xl rounded-tr-xl">
          <h1 className='text-white font-semibold text-xl py-1 text-center' >
            Password Generator
          </h1>
          <button className="absolute right-3 top-[6px] w-6 h-6" onClick={toggleTheme}>
            {theme ==="light" ? ( <img src="https://cdn-icons-png.flaticon.com/128/10561/10561113.png" alt="Dark mode" title="Dark Mode Icon" />) : (<img src="https://cdn-icons-png.flaticon.com/128/10562/10562157.png" alt="Light mode"  title="Light Mode Icon" />)}
            
          </button>
        </div>
        <div className="flex items-baseline">
          <input
            type="text"
            value={password}
            placeholder="Your Generated password will come here"
            readOnly
            ref={passwordRef}
            className="rounded-tl-md rounded-bl-md pl-2 text-md h-7 bg-orange-600 dark:bg-red-900 outline-none text-white font-mono "
          />
          <button className="text-zinc-900 bg-cyan-500 font-mono h-7  px-2 rounded-tr-md rounded-br-md hover:bg-cyan-600" onClick={clickHandler}>
            Copy
          </button>
        </div>
        <div className="flex flex-col items-center mt-2 ">
          <div className="flex items-center">
            <p className=" mr-2 text-white ">8</p>
            <input type="range"
              min="8"
              value={length}
              max="100"
              className="cursor-pointer h-[4px]"
              onChange={(e) => { setLength(e.target.value) }} />
            <p className=" ml-2 text-white " >100</p>
          </div>
          <div className="flex">
            <p className=" text-amber-400  font-bold text-lg">Length : {length}</p>
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex gap-2 font-mono font-semibold ">
            <label htmlFor="Numb" className="text-white cursor-pointer"
              title="Wanna Include Number to your password"
            >Number</label>
            <input type="checkbox"
              value={number}
              onChange={() => setNumber(prev => !prev)}
              id="Numb"
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-2 font-mono font-semibold">
            <label htmlFor="char" className="text-white cursor-pointer"
              title="Wanna Include special chaaracters to your password"
            >Character</label>
            <input type="checkbox"
              value={number}
              onChange={() => setChar(prev => !prev)}
              id="char"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-4 mt-2">
          <div className="flex gap-4 ">
            <p className="font-bold text-sm text-emerald-100 font-mono text-center">Wanna type the exact <br />Length</p>
            <input type="number"
              placeholder="Between 8 and 100"
              className="h-7 bg-orange-700 dark:bg-red-900  outline-none font-mono bg- pl-2 opacity-90 rounded-lg text-white"
              value={val}
              onChange={(e) => setVal(e.target.value)} />
          </div>
          <div>
            <button className="px-8 hover:bg-zinc-950 rounded-lg text-white py-1  bg-zinc-800"
              onClick={clickPassword}>  Generate </button>
          </div>
        </div>
        <ToastContainer

          autoClose={1000}
          hideProgressBar={true}
        />
      </div>
    </div>
  );
}

export default App;
