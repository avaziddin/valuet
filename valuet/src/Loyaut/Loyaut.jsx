import { Link } from "react-router-dom"

function Loyaut() {
    return (
        <>
        <div className="w-full h-screen bg-blue-950 flex ">


            <div className="w-1/6 h-screen bg-blue-950 shadow-lg shadow-indigo-900/100 flex flex-col gap-64 pl-9     pt-5 border-spacing-4">
                <div className="flex flex-col gap-10">
                    <div>
                        <div className="w-full flex flex-col pl-7">
                           <h1 className="text-sky-500 text-4xl font-bold mb-2">VALUET</h1>
                           <div className="w-32 bg-sky-500 h-0.5"></div>
                       </div>
                       <br />

                </div>
                <div className="flex flex-col gap-8">
                <div className="flex gap-4"><img src="/overwiev.svg" alt="" /><span className="text-white text-lg ">Overview</span></div>
                <div className="flex gap-4"><img src="/wallets.svg" alt="" /><span className="text-white text-lg">Wallets</span></div>
                <div className="flex gap-4"><img src="/transictions.svg" alt="" /><span className="text-white text-lg">Transictions</span></div>
                <div className="flex gap-4"><img src="/exchange.svg" alt="" /><span className="text-white text-lg">Exchange</span></div>
                </div>

                </div>
                <div className="flex flex-col gap-4">
                <div className="w-40 bg-sky-500 h-0.5 "></div>
                <div className="flex gap-4"><img src="/person.svg" alt="" /><span className="text-gray-500 text-lg">Mike Jakson</span></div>
        <Link to={"/Login"}>
                <div className="flex gap-4"><img src="/log out.svg" alt="" /><span className="text-gray-500 text-lg">Log out</span></div>
                </Link>
            </div>   
            </div>



            <div className="pt-[10px] w-5/6 px-[10px]">
                <header className="w-full p-[1%] flex flex-col  gap-[10px]" >
                    <div className="">
                    <div className="w-full flex justify-between items-center">
                        <div className="relative w-[25%]">
                        <input type="text" placeholder="searching..." className="z-[1] w-72 h-9 rounded-lg bg-indigo-950 shadow-sm outline-none text-white px-3"/>
                        <button className="z-[2] right-[5.5%] top-[15%] absolute all-unset">
                            <img src="/search.svg" alt="" />
                        </button>
                        </div>
                        <div className="flex justify-center gap-[20px] items-center">
                            <img className="w-[30px]" src="/message.svg"   alt=""/>
                            <img className=" w-[25px] " src="/bell.svg"   alt=""/>
                        </div>

                    </div> 
                    </div>
                <div className="w-full bg-sky-900 h-px"></div>
                </header>


                        {/* <input type="text" className="w-72 h-8 rounded-lg bg-indigo-950 shadow-sm"/>
                        <div className="flex items-center">
                            <img src="/gmail2.svg" className="w-[30px]" alt=""/>
                            <img src="/kala.svg" className="w-[25px]" alt=""/> 
                            </div> */}

            </div>


        </div>
        </>
    )
}

export default Loyaut