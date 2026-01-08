import { Button } from '@/components/ui/button'
import { Image } from 'lucide-react'
import React from 'react'

export interface TOOL{
    name:string,
    desc:string,
    icon:string,
    button:string,
    path:string

}

type AIToolProps={
    Tool:TOOL
}

function AiToolCard ({tool}:AIToolProps) {
  return (
    <div>
        <Image src={tool.icon} width={50} height={50} alt={tool.name} />
        <h2 className='font-medium'>{tool.name}</h2>
        <p className='text-gray-400'>{tool.desc}</p>
        <Button>{tool.button}</Button>
    </div>
  )
}

export default AiToolCard