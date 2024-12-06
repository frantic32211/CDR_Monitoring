import React from 'react';
import telgoo5Logo from "../assets/telgoo5_logo.png"

const Login = () => {

    return (
        <div className='w-screen h-screen flex-col justify-center '>
            <div className="">
                <img src={telgoo5Logo} className='mx-auto pt-32 pb-10' alt="Telgoo5 logo" />
            </div>

            <div className='w-5/12 h-2/3 text-center mx-auto pt-4 rounded-md'>

                <div className="bg-white mx-16 rounded-md">
                    <h3 className='text-4xl font-bold pb-10 pt-20'>Sign Into Your Account</h3>
                    <form onSubmit={true}>
                        <div className="pt-14 pb-8">
                            <input
                                type="text"
                                name="login_id"
                                className=" h-12 w-2/3 px-2 border border-slate-500 rounded-md"
                                placeholder="Login ID"
                            />
                        </div>
                        <div className="pb-14 pt-8">
                            <input
                                type={true}
                                name="passwd"
                                className="h-12 w-2/3 px-2 border border-slate-500 rounded-md"
                                placeholder="Password"
                                id="password"
                            />
                            <span
                                id="eyetogglePassword"
                                className=""
                                onClick={true}
                            >

                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                                    <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
                                </svg> */}

                            </span>
                        </div>
                        <div className="pb-10 ">
                            <button type="submit" name="login" value="Login" className="w-2/3 h-16 bg-[#5366cb] text-white rounded-3xl border border-slate-500">
                                Sign In
                            </button>
                        </div>
                    </form>

                </div>
                <p className='font-thin italic mt-5'>
                    <span className='font-semibold'>Copyright </span > © <span className='font-semibold'> 2020-{new Date().getFullYear()} </span>
                    <a href="https://www.telgoo5.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">
                        TELGOO5.
                    </a>&nbsp;
                    All rights reserved.
                </p>
            </div >
        </div>
    );
};

export default Login;
