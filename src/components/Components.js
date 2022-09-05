import React, {useState, useEffect,useRef} from 'react'
//import NavBar from './navbar'
import SideBar from './sidebar'
//import {Introduction} from './Intro'
import {BodyElement} from './Body'
import {Footer} from './Footer'


export const Components = () =>{

   const imgSrc = ["./assests/Octocat.png" , "./assests/linkdln.png"];
   const url = ["https://github.com/hoquesumya", "https://www.linkedin.com/in/sumyahoque/"];

  return (

  <div className = "components">

  <SideBar imgSrc = {imgSrc} url = {url}/>
  <BodyElement />  
  <Footer />
  </div>


  );


}

