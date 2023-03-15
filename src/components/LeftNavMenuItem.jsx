import React from 'react'

const LeftNavMenuItem = (props) => {
  return (
    <div className={'text-white text-sm h-10  hover:bg-white/[0.15] flex item-center rounded-lg cursor-pointer p-3 mb-[1px]' +
              props.className }
              onClick={props.action}>
      <span className='mr-5 text-xl'>{props.icon}</span>
      {props.text}
      
    </div>
  )
}

export default LeftNavMenuItem
