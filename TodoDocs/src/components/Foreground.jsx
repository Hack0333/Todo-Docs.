import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            user: "Deepak",
            text:"This is Deepak Card",
            tag: {
            tagTitle: "Download",
            tagColor: "green"
            }
        },
        {
            user : "Adil",
            text:"This is Adil's Card",
            tag :{
            tagTitle: "Upload",
            tagColor: "blue"
            }
        },
        {
            user : "Rohan",
            text:"This is Rohan's Card",
            tag :{
            tagTitle: "Paste",
            tagColor: "green"
            }
        },
        {
            user : "Faiz",
            text:"This is Faiz's Card",
            tag :{
            tagTitle: "Paste",
            tagColor: "green"
            }
        }
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[2] w-full h-full m-5 flex gap-6 flex-wrap">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground