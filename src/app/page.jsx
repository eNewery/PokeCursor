"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import Cursor from './assets/Cursor/Cursor';
/* Las clases "backgroundSnorlaxc backgroundSquirtlec y backgroundPikachuc" contienen el background que se va a utilizar para el cursor, con su respectiva foto y tamaño. */
export default function Home() {
/* Primero creamos un useState, para que cumpla la función de parámetro en el useEffect. */
const [background, setBackground] = useState("snorlax");
useEffect(() => {
  /* Seleccionamos el cursor */
const cursorPointer = document.querySelector("#cursor")

/* En caso de background (el useState) ser la string "pikachu" se reproduce el siguiente código */
if (background === "pikachu") {
  /* Se quitan las demás clases *(Linea 6) y se coloca la de Pikachu. Y así en los demás if con los otros 2 pokemon. (Snorlax y Squirtle) */
  cursorPointer.classList.remove("backgroundSnorlaxc")
  cursorPointer.classList.remove("backgroundSquirtlec")
  cursorPointer.classList.add("backgroundPikachuc")
}
if (background === "snorlax") {
  cursorPointer.classList.remove("backgroundSquirtlec")
  cursorPointer.classList.remove("backgroundPikachuc")
  cursorPointer.classList.add("backgroundSnorlaxc")
}
if (background === "squirtle") {
  cursorPointer.classList.remove("backgroundPikachuc")
  cursorPointer.classList.remove("backgroundSnorlaxc")
  cursorPointer.classList.add("backgroundSquirtlec")
}
/* Aquí como parámetro background, para que *(Linea 36) */
}, [background])

  return (
    <main className="cardsContainer">
{/* Al setear el useState "background" en cada uno de estos div (pokemons) se actualice el componente gracias al useEffect. */}
<div onClick={() => setBackground("pikachu")} className='cardCursor backgroundPikachu'></div>
<div onClick={() => setBackground("snorlax")} className='cardCursor backgroundSnorlax'></div>
<div onClick={() => setBackground("squirtle")} className='cardCursor backgroundSquirtle'></div>
    </main>
  )
}
