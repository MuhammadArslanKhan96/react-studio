// "use client"
import { Avatar } from '@nextui-org/react'
import React, { useRef } from 'react'
import { FaPlay, FaVolumeUp } from 'react-icons/fa'
import { MdFullscreen } from 'react-icons/md'
import ReactPlayer from 'react-player/lazy'

const Share = () => {

  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && videoRef.current) {
      videoRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };


  return (
    <div className='flex items-center justify-center h-[100vh] w-full'>
      <div ref={videoRef} className='relative flex-1 h-full rounded-[0.75rem] bg-[#242427] max-w-[64vw] max-h-[36vw] group'>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            alt="audio player thumbnail"
            src="https://genny.lovo.ai/assets/icons/audioPreviewImage.svg"
            className="chakra-image css-0"
          />
        </div>
        <div className='over hidden group-hover:block'>
          <div className='flex top-0 right-0 left-0 bottom-0 absolute bg-[#000] rounded-[0.75rem] opacity-[0.3]'></div>

          <div className='flex gap-[10] absolute top-[0.5rem] p-2'>
            <Avatar size='2rem' />
            <div>
              <div className='text-[#F5F6F7] text-[1rem] font-[600]'>hello</div>
              <div className='text-[#B6B8BF] text-[0.8rem] font-[500]'>Arslan Khan • Jan 02, 2024</div>
            </div>
          </div>

          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><FaPlay size={50} /></button>

          <div className='absolute bottom-0 p-3 font-[400] text-[0.8rem] w-full'>
            <div className='flex w-full justify-between items-center '>
              <div>00:00 / 00:01</div>
              <div className='flex items-center gap-[10px] z-10'>
                <button className='p-1'><FaVolumeUp size={17} /></button>
                <button className='p-1 pl-0' onClick={toggleFullScreen}><MdFullscreen size={19} /></button>
              </div>
            </div>
            <div className='w-full'>
              <input
                className='w-full'
                type="range"
                min="0"
                max="100"
                defaultValue={50}
              />
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full'>
          <video controls={false} className='h-full rounded-[0.75rem]'></video>
        </div>

      </div>
      {/* <button onClick={toggleFullScreen}>full screen</button> */}
      {/* <ReactPlayer url='https://youtu.be/uIQDNVbaQn8?si=lklIjgj0uuxboCNw' /> */}
      {/* <video controls className='w-[36vw] h-full'>
        <source src="https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-admiration.wav" type="audio/wav" />
        <img
            alt="audio player thumbnail"
            src="https://genny.lovo.ai/assets/icons/audioPreviewImage.svg"
            // className="chakra-image css-0"
          />
      </video> */}
    </div>
  )
}

export default Share