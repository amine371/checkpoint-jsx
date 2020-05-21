importer  React à  partir de  'react' ;
importer  imageInSrc  depuis  './assets/imageInSrc.png' ;
import  './assets/style.css' ;
import  './App.css' ;

fonction  App ( )  {
  retour  (
    
    < div >
    < div  style = { { border : 'solid 1px black' ,  maxWidth : '100vw' } } >  
      < h1  className = "title red"  style = { { whiteSpace : 'pre-line' } } > orange < / h1 >  
      
      < img  src = { imageInSrc }   width = { 320 }  style = { { display : 'orange' } } / > 
      < img  src = "/imageInPublic.png"   width = { 320 } / >  
    < / div >  
    < video  width = { 320 }  height = { 240 }  contrôles >  
      < source  src = "/myVideo.mp4"  type = "video / mp4" / > 
    < / vidéo >
  < / div >
  ) ;
}

exporter l'  application par défaut  ;
