import React from 'react';
import './App.css';
import './style.css';
import imageInSrc from  '...../orange.jpg';
import './la  vidéo  from  '../myVideo.mp4';
function App() {
  return(
    <div>
    <div style ={{border : "solid 1px black" ,maxWidth:"100vw"}}>  
        <h1 className={"title red"}>orange</h1>  
        <br/>  
        <img src={imageInSrc} alt ="orange"/>
        <br/> 
        <img src ={ "imageInPublic.jpg" } alt = "orange"/>  
      </div>  
      <Video url = { "../myVideo.mp4" } width ={ 320 } height ={ 240 }contrôles/>  
    </div>
  ) ;
}

export default App;
