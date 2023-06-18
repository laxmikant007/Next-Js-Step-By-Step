import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link';

export default function Home() {
  const [punjab , setPunjab] = useState('Punjab');
  const apple =()=>{
    setPunjab("Rajasthan");
  } 

 


  return (
    <>



      <main className={styles.main}>
        <h1>Next JS Learning ...</h1>
        <h2>This is {punjab}</h2>

        <button onClick={()=>apple()}>Change State</button>
  

        <Link style={{marginTop:50}} href={"/about"}>About Page!</Link>

      </main>










    </>
  )
}


