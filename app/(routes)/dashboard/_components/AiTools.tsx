import React from 'react'
import AiToolCard from './AiToolCard'

const aiToolList=[
    {
        name:'AI question aswer',
        desc:'chat with AI agent',
        icon:'',
        button:'Lets chat',
        path:'/ai-chat'
    },
    {
        name:'Resume Builder',
        desc:'chat with AI agent',
        icon:'',
        button:'Lets chat',
        path:'/ai-chat'
    },
    {
        name:'Cover Letter Generator',
        desc:'chat with AI agent',
        icon:'',
        button:'Lets chat',
        path:'/ai-chat'
    },
    {
        name:'Career Roadmap Generator',
        desc:'chat with AI agent',
        icon:'',
        button:'Lets chat',
        path:'/ai-chat'
    },
    {
        name:'Mock test',
        desc:'chat with AI agent',
        icon:'',
        button:'Lets chat',
        path:'/ai-chat'
    }
]

function AiTools  () {
  return (
    <div className='mt-5 p-5 bg-white border rounded-xl'>
        <h1>Available ai tools</h1>
        <p>start buiding your career</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                aiToolList.map((tool:any,index)=>(
                    <AiToolCard tool={tool} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default AiTools