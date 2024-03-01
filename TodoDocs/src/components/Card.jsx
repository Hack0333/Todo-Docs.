import React from 'react'
import { motion } from "framer-motion"
// import { FaRegFileAlt } from "react-icons/fa";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}  dragElastic={1.1}  dragTransition={{ bounceStiffness: 500, bounceDamping:20 }} className='relative w-52 h-[15em] rounded-[40px] bg-zinc-700/[0.5px] overflow-hidden p-3 shadow-lg
    '>
        {/* <FaRegFileAlt/> */}
        <h1 className='mb-1 text-zinc-100'>{data.user}</h1>
        <p className='font-bold leading-tight tracking-tight'>{data.text}</p>
        <div className='footer absolute bottom-0 left-0 w-full h-12'>
            <div className={`tag ${data.tag.tagColor == "green" ? "bg-green-500" : "bg-blue-500"} w-full h-full flex items-center justify-center`}>
                <p className='text-md font-semibold tracking-wider'>{data.tag.tagTitle}</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Card