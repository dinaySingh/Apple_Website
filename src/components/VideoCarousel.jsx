import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import gsap from 'gsap'

const VideoCarousel = () => {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])
    const [video, setvideo] = useState({
isEnd:false,
startplay:false,
videoId:0,
isLastVideo:false,
isPlaying:0,
    })

    const  [loadedData, setloadedData] = useState([])
const {isEnd, startplay, videoId, isLastVideo, isPlaying} = video;

useEffect(() => {
 if(loadedData.length > 3){
    if(!isPlaying){
        videoRef.current[videoId].pause()
    }else{
        startplay && videoRef.current[videoId].play()
    }
 }
}, [startplay, videoId, isPlaying, loadedData])

useEffect(()=> {
const currentProgress = 0;
let span = videoDivRef.current;

if(span[videoId]){
    // Animate the progress of the video 
    let anim = gsap.to(span[videoId],{
onUpdate: ()=>{

},

onComplete: () => {

}
    })
}
},[videoId,startplay])

    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((list, i) => (
                    // here we area implement immediately. for that we use () perentises not curly brases   
                    <div key={list.id} id='slider' className='sm:pr-10 pr-20'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center rounded 3xl overflow-hidden bg-white'>
                                <video 
                                id='video' 
                                muted 
                                playsInline={true} 
                                preload='auto'
                                ref={(element) => (videoRef.current[i] = element)}

                                onPlay={()=>{
                                    setvideo((preVideo)=>({
                                        ...preVideo, isPlaying:true
                                    }))
                                }}
                                >
                                    <source src={list.video} type='video/mp4' />
                                </video>
                            </div>
{/* Overlay Text Section  */}
                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text) => (
                                     <p key={text} className='md:text-2xl text-xl font-medium'>
                                        {text}
                                    </p>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

{/* video Progress Indicator  */}

            <div className="relative flex-center mt-10">
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop:blur rounded-full'>
                    {hightlightsSlides.map((_ , i) =>(
                        <span 
                    key={i}
                    ref={(element)=>(videoDivRef.current[i] = element)}
                    className="mx-2 w-3  h-3 bg-gray-200 rounded-full relative cursor-pointer"
                    >
                        <span className='absolute h-full w-full rounded-full'
                            ref={(element)=>(videoSpanRef.current[i] = element)}/>
                    </span>
                    ))}
                </div>

            </div>
        </>
    )
}

export default VideoCarousel