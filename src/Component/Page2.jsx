import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap';
import adventure_image from '../assets/adventure_image.jpg'
// import scrollTrigger from 'gsap/ScrollTrigger';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Page2() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP( ()=> {
    gsap.from('.left-container h1', {
      y: 50,
      duration: 2,
      // ease: 'power2.inOut',
      opacity: 0,
      scrollTrigger : {
        // markers : true,
        trigger: '.left-container',
        start: 'top 50%',
        end: 'bottom 90%',
        // scrub: true,

      }
    })
  })
  useGSAP( ()=> {
    gsap.from('img', {
      x: 100,
      duration: 2,
      opacity : 0,
      scrollTrigger : {
        // markers : true,
        trigger: 'body',
        start: 'top 20%',
        end: 'bottom 90%',
        scrub: true
      }
    })
  })
  return (
    <div className='h-[70vh] w-full bg-slate-100 flex flex-row px-20 py-10'>
      {/* this is the left container */}
        <div className='left-container h-full w-1/2 flex flex-col bg-slate-00'>
            <h1 className='text-2xl tracking-widest underline leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur repudiandae possimus architecto totam incidunt maxime mollitia id, odio voluptatibus itaque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia maiores magni tempora doloribus reprehenderit molestias odio adipisci. Commodi, numquam facere.</h1>
            <button className='bg-blue-400 my-10 rounded-md py-2'>Click</button>
        </div>

        {/* this is the right contianer */}
        <div className='right-contianer flex justify-center px-44 py-5'>
            <img className='h-[50vh] w-[30vw]' src={adventure_image} alt="this is the adventure pic for sec page"/>
        </div>
    </div>
  )
}

export default Page2

