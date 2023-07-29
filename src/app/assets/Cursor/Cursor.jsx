"use client"
import React, {useEffect} from 'react'
import "./Cursor.css"
function Cursor() {
useEffect(() => {
  let cursor = document.querySelector("#cursor");
  document.addEventListener("mousemove", function(e){
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
  })
}, [])

    


  return (
    <div id='cursor'></div>
  )
}

export default Cursor