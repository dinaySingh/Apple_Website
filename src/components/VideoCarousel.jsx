import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
<>
<div className='flex items-center'>
    {hightlightsSlides.map((list,i)=>(
<div key={list.id} id='slider' className='sm:px-10 pr-20'>
    <div className='video-carousel_container'>
        <div className='w-full h-full flex-center rounded 3xl overflow-hidden bg-white'>
            <video  id='video' muted playsInline={true} preload='auto'><source src={list.video} type='video/mp4'/></video>
        </div>
        
    </div>
</div>
    ))}
</div>
</>
)
}

export default VideoCarousel