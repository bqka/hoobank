import React from 'react'

import { quotes} from '../assets'
import styles from '../styles'

const FeedbackCard = ({id, content, name, title, img}) => {
  return (
    <div id={id} className='flex flex-col flex-1 h-[395px] w-[370px] feedback-card rounded-[20px] px-14 py-8 gap-5 justify-between'>
      <img src={quotes} alt="quotes" className='h-[27px] w-[42px] relative top-0 mt-5' />
      <p className={`${styles.paragraph} text-white h-[45%]`}>{content}</p>
      <div className='flex flex-row items-center  '>
        <img src={img} className='size-[64px]'/>
        <p className={`font-poppins text-dimWhite text-[16px] ml-4 relative bottom-0`}>
          <span className='text-white text-[20px]'>{name}</span> <br />
          {title}
        </p>
      </div>
    </div>
  )
}

export default FeedbackCard