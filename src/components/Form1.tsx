import { useState } from "react"

const Form1 = () => {


    const [isSubmitted, setisSubmitted] = useState(false)
    const [allValid, setallValid] = useState(false)
    const [formState, setFormState] = useState({
        fullName: "",
        userName: "",
        passWord: "",
    })

    const fullNameHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, fullName: e.target.value})
    }

    const userNameHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, userName: e.target.value})
    }

    const passWordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({...formState, passWord: e.target.value})

    }


    const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        setisSubmitted(true)

        const {passWord, userName, fullName} = formState

        if (passWord && userName && fullName) {
            setallValid(true)
        }

        setTimeout( () => {
            setallValid(false)
        }, 3000)

        console.log("onsubmit")
    }
    return (
        <>
            <div className="h-screen md:flex">
                <div
                    className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-slate-500 to-purple-500 justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                        <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                        {allValid && <span className="text-white text-xl">lets fucking goooo</span>}
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white z-30">
                    <form onSubmit={onsubmit} className="bg-white">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                        {isSubmitted && formState.fullName.length===0 && <span className="pl-3 text-red-400 text-xs">not valid</span>}
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" name="" id="" value={formState.fullName} onChange={fullNameHandler} placeholder="Full name" />
                            
                        </div>
                        {isSubmitted && formState.userName.length===0 && <span className="pl-3 text-red-400 text-xs">not valid</span>}
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" name="" id="" value={formState.userName} onChange={userNameHandler} placeholder="Username" />
                        </div>
                        {isSubmitted && formState.passWord.length===0 && <span className="pl-3 text-red-400 text-xs">not valid</span>}
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" name="" id="" value={formState.passWord} onChange={passWordHandler} placeholder="Password" />
                        </div>
                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form1