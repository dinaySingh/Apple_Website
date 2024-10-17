import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// First we installled by open node ,split it, npm install gsap @gsap/react 
// then we imported above to lines (import gsap from "gsap"),(import {useGSAP } from "@gsap/react"); 
import { heroVideo, smallHeroVideo  } from "../utils";
// we imported 2 videos 1 for big screen &  2 for small screen
import { useEffect, useState } from "react";


const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = ()=>{
    if(window.innerWidth < 760){
      setvideoSrc(smallHeroVideo)
    }else{
      setvideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
window.addEventListener("resize",handleVideoSrcSet);

// in react its very important to clean up EventListener
return()=>{
  window.removeEventListener("resize",handleVideoSrcSet)
}
  },[])

  // in Hero section we used useGSAP() give call back function used gsap.to() and give values like in which id or call we have to provide animation {#hero} , what kind of animation {opacity:1}, when it will run {delay:1.5 sec}
  useGSAP(()=>{
gsap.to('#hero', {opacity:1, delay:1.5});
gsap.to('#cta', {opacity:1,translateY:-75, delay:2});
  }, [])
  
  return (
<section className="w-full nav-height bg-black relative">
  <div className="h-5/6 w-full flex-center flex-col my-5">
<p id="hero" className="hero-title">iPhone 16 Pro</p>
<p id="hero" className="text-center font-semibold sm:text-3xl text-2xl text-white opacity-0 max-md:mb-10">Hello, Apple Intelligence.</p>
<div>

  {/* we gave it (clsssname pointer-events-none) so no body can play around this and give some properties autoplay,muted, playsInline=true, key=videdoSrc. */}
  <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>

{/* type should be video/mp4     */}
    <source src={videoSrc} type="video/mp4" />
</video>
</div>
  </div>

  <div id="cta"
  className="flex flex-col items-center opacity-0 translate-y-20">
    <div className="flex flex-1 gap-4">

<a href="#highlights" className=" px-5 py-2 rounded-3xl bg-blue my-5  border border-transparent ">Learn more</a>
<a href="#highlights" className="px-5 py-2 rounded-3xl  my-5 bg-transparent border text-blue border-blue hover:bg-blue hover:text-white">Buy</a>
    </div>
<p className="font-normal text-xl text-gray">From $999 or $41.62/mo. for 24 month</p>
<p className="font-normal text-lg text-gray">Apple Intelligence coming this fall</p>
  </div>
</section>
  )
}

export default Hero