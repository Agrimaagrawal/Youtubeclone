import React from 'react';
import {Link} from 'react-router-dom';
import {BsFillCheckCircleFill} from "react-icons/bs";
import Videolength from '../shared/Videolength';
import { abbreviateNumber } from 'js-abbreviation-number';


const SearchResultVideo = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      < div className='flex mb-3 flex-col lg:flex-row'>
        <div className='relative h-26 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[128px] rounded-xl bg-slate-800 overflow-hidden'>
          <img className ="h-full w-full object-cover" src={video?.thumbnails?.[0]?.url  } alt="thumbnail"/>
           {video?.lengthSeconds&&(
             <Videolength time={video?.lengthSeconds}/>
           )}
        </div>
        <div  className='flex text-white ml-5 mt-3'>
          
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

export default SearchResultVideo
