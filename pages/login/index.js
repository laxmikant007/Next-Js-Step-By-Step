import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();
    const navigate = (name)=>{
        router.push(name)
    }
  return (
    <>


    <h1>Login page.. here!!</h1>
    <button onClick={()=>navigate("/")} >Go to HOme </button>
    <br/>
    <br/>

    <br/>

    <button onClick={()=>navigate("/about")}>Go to  About</button>
    <button onClick={()=>navigate("/about/aboutstudent")}>Go to  About Student</button>
    <button onClick={()=>navigate("/about/aboutteacher")}>Go to  About Teacher</button>
    </>
    
  )
}

export default Login