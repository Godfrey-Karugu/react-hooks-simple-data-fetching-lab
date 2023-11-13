// create your App component here
import React, {useEffect, useState} from "react";

//const API_URL = "https://dog.ceo/api/breeds/image/random"

function App(){
  const [image,setImage] = useState(null)

  // useEffect(()=>{
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //   .then(res=>res.json())
  //   .then(data=>setImage(data.image))
  // },[])

  useEffect(() => {
    //fetch("https://dog.ceo/api/breeds/image/random/")
    fetch("https://randomfox.ca/floof/")
      .then(r => r.json())
      .then(data => setImage(data.image))
}, [])

if(!image){
  return(
    <h2> loading ....</h2>
  )
}
  return(
    <>
  <p>Dog images randomly generated</p>
  <img src={image} alt="A Random Dog"/>
    </>
  );
}

export default App;