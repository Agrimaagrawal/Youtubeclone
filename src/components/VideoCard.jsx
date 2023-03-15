import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import {Link} from "react-router-dom";
import {BsFillCheckCircleFill} from "react-icons/bs";
import Videolength from '../shared/Videolength';



const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      < div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img className ="h-full w-full object-cover" src={video?.thumbnails?.[0]?.url}/>
           {video.lengthSeconds&&(
             <Videolength time={video.lengthSeconds}/>
           )}
        </div>
        <div  className='flex text-white mt-3'>
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover" src={video?.author?.avatar[0].url}></img>
            
            </div>
        </div>
        <div className='flex flex-col ml-3 overflow-hidden'>
          <span className="text-sm font-bold line-clamp-2">
            {video?.title}
          </span>
          <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            {video?.author?.title}
            {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
            )}
          </span>
          <div className='flex text-[12px] font-semibold text-white/[0.7] turncate overflow-hidden'>
            <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
            
            <span className='turncate ml-2'>
              {video?.publishedTimeText}

            </span>
          </div>

        </div>
        </div>
      </div>
      
    </Link>
  )
}

export default VideoCard
