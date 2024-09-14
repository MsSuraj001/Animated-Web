import React from 'react'
import img from '../assets/images.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import './Home.js'
import vid from '../assets/backGroundV.mp4'

function Home() {
    // const mouse = document.querySelector('#mouseCursor')
    // const home = document.querySelector('#home')
    // home.addEventListener('mousemove', function(){
    //         console.log('kjdsjfkll')
    // })
    useGSAP(() => {
        gsap.from('#name', {
            y: -200,
            duration: 2,
            opacity: 0,
        })
    })

   useGSAP( ()=> {
    gsap.from('.menu li', {
        y: -100,
        duration: 1,
        opacity: 0,
        scrub: 2,
        stagger:0.3
    })
   })

//    useGSAP( ()=>{
//     gsap.from('h1 span', {
//         y:300,
//         opacity: 0,
//         duration: 2,
//         scrub:2,
//         stagger:0.3
//     })
//    })

   useGSAP( ()=>{
    gsap.from('h1 span', {
        y:-300,
        opacity: 0,
        duration: 3,
    })
   })


  return (
    <div className='h-[100vh] w-[100vw] relative overflow-hidden text-slate-200' id='home'>
        {/* this is the mouse cursor */}
        {/* <div className='h-16 w-16 rounded-full bg-red-400 fixed z-10' id='mouseCursor'>
        
        </div> */}
        {/* <img src={img} alt="" className='h-full w-full absolute'/> */}
        <video src={vid} className='absolute object-cover opacity-90' autoPlay loop muted></video>

        <div className='h-[100%] w-[100%] relative z-30 text-white' id='main_content'>
            <nav className='h-20 flex justify-between items-center md:px-16 px-8 border-b-2 '>
                <h1 id='name' className='font-bold text-2xl'>Ms Suraj</h1>
                <ul className='hidden md:flex gap-6 text-xl menu' id='menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contect</li>
                </ul>

                <h1 className='text-xl md:hidden menu border-2 px-3 py-1 rounded-md'>Menu</h1>
            </nav>

            <h1 className='relative top-28 sm:top-44 lg:top-72 left-16 text-[18vw] font-semibold text-slate-100' id='Bottom-text'>
                <span>a</span><span>d</span><span>v</span><span>e</span><span>n</span><span>t</span><span>u</span><span>r</span><span>e</span></h1>
        </div>
    </div>
  )
}

export default Home
