import { Link } from "react-router-dom"
import Home from "./Home"

function Login() {
  
    return (
      <>
      <div className="login-con w-full h-screen bg-blue-950 flex justify-between items-center pr-56  pl-28">
      <img className="absolute bottom-0 right-0" src="/Vector.svg" alt="" />
      <img className="absolute bottom-0 right-0" src="/Vector2.svg" alt="" />
      <img className="absolute bottom-[20%] right-[35%]" src="/bg_icn_therd.svg" alt="" />
      <img className="z-[0] absolute top-[15%] left-[41%]" src="/bg_icn_first.svg" alt="" />
      <img className="z-[2] absolute top-[20%] left-[7%]" src="/bg_icn_sec.svg" alt="" />

        <div className="w-5/12 bg-indigo-950 h-3/4 flex flex-col items-center gap-5 pt-14 shadow-lg shadow-indigo-900/100 ">
            <h1 className="text-4xl text-white ">Welcome!</h1>
            <br />
            <input type="text" placeholder="E-mail or Login" className="inputs w-96 h-12 rounded-lg text-white pl-3" />
            <input type="text" placeholder="password" className="inputs w-96 h-12 rounded-lg text-white pl-3"/>
            <br />
            <div className="flex gap-7">
                <button className="sup  w-28 h-11 text-gray-500 font-bold rounded-lg">SIGN UP</button>
                <button className="sin w-28 h-11 text-white font-bold rounded-lg">SIGN IN</button>
                
            </div>
            <p className="text-blue-700 decoration-solid">Forgot your password?</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-sky-500 text-7xl font-bold">VALUET</h1>
            <div className="w-44 bg-sky-500 h-0.5"></div>
            
            <p className="text-gray-300 text-xl">Your currency dashboard</p>
        </div>
      </div>

      </>
    )
  }
  
  export default Login
  