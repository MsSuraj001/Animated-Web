import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap';
import adventure_image from '../assets/adventure_image.jpg'

function Page2() {
  useGSAP( ()=> {
    gsap.from('.left-container h1', {
      y: 50,
      duration: 1,
      // ease: 'power2.inOut',
      opacity: 0,
      scrub:2,
      // stagger:0.5
    })
  })
  useGSAP( ()=> {
    gsap.from('img', {
      x: 100,
      duration: 2,
      opacity : 0,
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
            <img className='h-[50vh] w-[30vw]' src={adventure_image} alt="" />
        </div>
    </div>
  )
}

export default Page2

