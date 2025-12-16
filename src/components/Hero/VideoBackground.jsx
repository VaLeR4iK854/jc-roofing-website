import React from 'react'
import heroVideo from '../../assets/videos/1201.mp4'

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 20%' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback for browsers that don't support video */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-80"></div>
    </div>
  )
}

export default VideoBackground
