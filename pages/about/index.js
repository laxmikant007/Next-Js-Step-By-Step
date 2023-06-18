import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
// useRouter




const About = () => {

  


  const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }
  return (
    <main className={styles.main}>


    <h1>About page testing  ....</h1>
    <Link href="/">Home Page</Link>

    <button onClick={()=>navigate("/")}>Go to Home </button>
    <button onClick={()=>navigate("/login")}>Go to Login</button>



    </main>
  )
}

export default About