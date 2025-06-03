import { useState } from "react";
import { validateEmail } from "../../utils/Login/LoginValidate";

export const LoginPage=()=>{

    const [Isemail, setIsEmail]=useState("");
    const [error, setError]=useState("");
    const handleContinue=()=>{
        if(!validateEmail(Isemail)){
            setError("Please enter a  valid email address!")
return ;
        }
        setError("");
        console.log("Email hợp lệ:", Isemail);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
            <div className="rounded-xl shadow-md p-8 w-full  bg-white max-w-md">
                <h2 className="text-center text-2xl font-medium mb-6">
                    {" "}
                    May Coffee Crew
                </h2>
                <h3 className="text-lg font-semibold mb-1">Log in</h3>
                <div className="div">
                    <p className="text-sm text-gray-600 mb-4">
                        Choose how you'd like to log in
                    </p>
                </div>
                <button className=" cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg  font-semibold mb-4">
                    Sign in with shop
                </button>

                <div className="flex items-center mb-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-sm text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <input
                    value={Isemail}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setIsEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

                <button onClick={handleContinue} className="w-full bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-md cursor-pointer">
                    Continue
                </button>

                <div className="mt-6 text-sm text-center text-blue-600 underline cursor-pointer">
                    Privacy
                </div>
            </div>
        </div>
    );
}