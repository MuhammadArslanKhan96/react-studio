import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '@nextui-org/react';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { MdFullscreen } from 'react-icons/md';

const Share = () => {
  const screenRef = useRef(null);
  const videoRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // let timeoutId;

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && screenRef.current) {
      screenRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  // const showDiv = () => {
  //   clearTimeout(timeoutId);
  //   setIsVisible(true);
  //   timeoutId = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);
  // };

  // const hideDiv = () => {
  //   clearTimeout(timeoutId);
  //   setIsVisible(false);
  // };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      handleLoadedMetadata();
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnd);
    }
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);


  const handleSliderChange = (e) => {
    const newTime = (duration * e.target.value) / 100;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex items-center justify-center h-[100vh] w-full'>
      <div ref={screenRef} className='relative flex-1 h-full rounded-[0.75rem] bg-[#242427] max-w-[64vw] max-h-[36vw] group'>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            alt="audio player thumbnail"
            src="https://genny.lovo.ai/assets/icons/audioPreviewImage.svg"
            className="chakra-image css-0"
          />
        </div>

        <div className="hover relative h-full w-full hidden group-hover:block">
          <div className='flex top-0 right-0 left-0 bottom-0 absolute bg-[#000] rounded-[0.75rem] opacity-[0.3]'></div>

          <div className='flex gap-[10] absolute top-[0.5rem] p-2'>
            <Avatar size='2rem' />
            <div>
              <div className='text-[#F5F6F7] text-[1rem] font-[600]'>hello</div>
              <div className='text-[#B6B8BF] text-[0.8rem] font-[500]'>Arslan Khan • Jan 02, 2024</div>
            </div>
          </div>

          <button onClick={togglePlay} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {!isPlaying ? <FaPlay size={50} /> : <FaPause size={50} />}
          </button>

          <div className='absolute bottom-0 p-3 font-[400] text-[0.8rem] w-full'>
            <div className='flex w-full justify-between items-center '>
              <div>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</div>
              <div className='flex items-center gap-[10px] z-10'>
                <button className='p-1' onClick={toggleMute}>{!isMuted ? <FaVolumeUp size={17} /> : <FaVolumeMute size={17} />}</button>
                <button className='p-1 pl-0' onClick={toggleFullScreen}><MdFullscreen size={19} /></button>
              </div>
            </div>
            <div className='w-full'>
              <input
                className='w-full'
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={((currentTime / duration) * 100) || 0}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </div>

        <div className='absolute h-full w-full'>
          <video ref={videoRef} controls={false} className='h-full w-full rounded-[0.75rem]' src='https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-admiration.wav' type='audio/wav'>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Share;
