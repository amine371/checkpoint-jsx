import React from 'react';
import './App.css';
import './style.css';
import imageInSrc from  '...../orange.jpg';
import './la  vidéo  from  '../react-player';
function App() {
  return (
    < div  style = { { border : "solid 1px black" , maxWidth : "100vw" } }>  
 
        < h1  className = { "title red" } > orange </ h1 >  

        < Br / >  

        <img  src = {imageInSrc}  alt = "orange" />
       
        < Br / > 

        < img  src = { "imageInPublic.jpg" }  alt = "orange" />  

      < / div >  

      < Video   url = { "../myVideo.mp4" }  width = { 320 }  height = { 240 }  contrôles />  
    < / div >
  ) ;
}

exporter l' application par défaut;