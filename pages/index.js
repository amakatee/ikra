import Head from 'next/head'
import Image from 'next/image'
import gsap from 'gsap'
import Logo from '../components/logo'
import react, {useRef, useEffect, useState} from 'react'


export default function Home() {
  // const h1Ref = useRef()
  const lastRef = useRef()
  const secondRef = useRef()
  const firstRef = useRef()

  const svgRef =useRef()

  const lastIter = (svg) => {
    gsap.fromTo(lastRef.current, {y:0}, {y:"-100%"})
    gsap.to(lastRef.current, {y:"-200%",delay:0.1})
    gsap.to(lastRef.current, {y:"-900%",delay:.15})

    gsap.fromTo(secondRef.current, {y:0}, {y:"-100%", delay:.15})
 


  

    
    gsap.to(lastRef.current, {y:0,delay:0.2})
    gsap.to(lastRef.current, {y:"-500%",delay:.3})
    gsap.to(lastRef.current, {y:"-800%",delay:.35})

    gsap.to(secondRef.current, {y:"-300%", delay:.4})

    gsap.to(lastRef.current, {y:0, delay:.4})

    gsap.to(lastRef.current, {y:"-500%",delay:.5})
    gsap.to(lastRef.current, {y:"-800%",delay:.55})
    gsap.to(secondRef.current, {y:"-700%", delay:.6})


    gsap.to(lastRef.current, {y:0, delay:0.6})
    gsap.to(lastRef.current, {y:"-500%",delay:.7})
   

    gsap.to(lastRef.current, {y:0, delay:.8})
    gsap.to(secondRef.current, {y:0, delay:.85})
    gsap.to(firstRef.current, {y:"-90%", delay:.9})

    gsap.fromTo(lastRef.current,{opacity:1}, {opacity:0, delay:1.18})
    gsap.fromTo(secondRef.current,{opacity:1}, {opacity:0, delay:1.18})
    gsap.fromTo(firstRef.current,{opacity:1}, {opacity:0, delay:1.18})

    
    /* svg */
    gsap.fromTo(svg(".i"), {x:"-150%"}, {x:0,delay:1.20})
    gsap.fromTo(svg(".i-dot"), {y:"-150%"}, {y:0, delay:1.35})
    gsap.fromTo(svg(".k"), {y:"-150%"}, {y:0,delay:1.35})
    gsap.fromTo(svg(".r"), {y:"-150%"}, {y:0, delay:1.35})
    gsap.fromTo(svg(".a"), {y:"-150%"}, {y:0, delay:1.35})

    gsap.fromTo(svgRef.current, {scale:1}, {scale:1.1, delay:1.5})
    gsap.fromTo(svg(".a"), {opacity:1}, {opacity:0, delay:1.75})
    gsap.fromTo(svg(".r"), {opacity:1}, {opacity:0, delay:1.8})
    gsap.fromTo(svg(".k"), {opacity:1}, {opacity:0, delay:1.85})
    gsap.fromTo(svg(".i"), {opacity:1}, {opacity:0, delay:1.9})
    gsap.fromTo(svg(".i-dot"), {opacity:1}, {opacity:0, delay:1.9})
    



    
 
   

  }


  useEffect(() => {
    const svg = gsap.utils.selector(svgRef)
    lastIter(svg)
   }, [] )


  const arr =[0, 1, 2, 3,4,5,6, 7,8,9]
  return (
    <div className="home">



      
     <div className='cont'>
     <svg ref={svgRef} className='svg' width="90" height="30" viewBox="0 0 90 30" fill="#fff" xmlns="http://www.w3.org/2000/svg">
       <path className='i' d="M7.28332 24.5922L14.2378 7.41211H2.50224L0.9375 11.5985H8.41374L1.19809 29.6507H7.28332L16.15 21.7148L13.6291 18.6624L7.28332 24.5922Z"></path>
       <path className='i-dot' d="M10.5 5.14557H15.2811L17.3676 0H12.4128L10.5 5.14557Z"></path>
       <path className='k' d="M43.0986 7.41245H35.9704L27.2401 14.0328L32.3192 0H27.8855L17.541 29.651H22.0615L25.3213 19.9178L30.9282 29.651H36.0573L28.6679 17.5287L43.0986 7.41245Z"></path>
       <path className='r' d="M62.5706 7.41211H57.094L49.2437 15.9756L52.5735 7.41211H48.1398L39.8818 29.6507H44.3149L46.2952 23.9901L62.5706 7.41211Z"></path>
       <path className='a' d="M86.4779 10.9883L76.0465 22.4129L82.3923 7.50024H77.9587L76.979 10.1671C76.4977 8.04609 74.4226 6.88965 72.0472 6.88965C67.0924 6.88965 62.5719 11.9475 60.6591 18.4014C58.4857 25.8138 60.5722 30.0002 64.8315 30.0002C65.8745 30.0002 67.0049 29.7388 68.2216 28.9539C68.9919 28.4389 69.8563 27.6861 70.6411 26.8008L69.4389 29.6517H73.9594L89.1718 13.7799L86.4779 10.9883ZM66.658 25.9881C64.2241 25.9881 63.4417 23.0229 65.0064 18.4008C66.3975 14.3892 68.7446 11.0755 71.3523 11.0755C74.2212 11.0755 74.6555 13.8664 72.8301 18.8371C71.6997 22.0637 69.4395 25.9881 66.658 25.9881Z"></path>
    </svg>
     <div ref={firstRef} className='first-num cont-num'>
         {arr.map((a,i) => (
           <h1 key={i}><span>{a}</span></h1>
         ))}
       </div>
       <div ref={secondRef} className='second-num cont-num'>
         {arr.map((a,i) => (
           <h1 key={i}><span>{a}</span></h1>
         ))}
       </div>
       <div ref={lastRef} className='last-num cont-num'>
         {arr.map((a,i) => (
           <h1 key={i}><span>{a}</span></h1>
         ))}
       </div>
       {/* <div className='last-num cont-num'>
    
           <h1><span>%</span></h1>
         
       </div> */}
     </div>
     
    </div>
  )
}
