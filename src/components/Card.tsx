import React from 'react'

interface CardProps{
    color: string,
    icon: any,
    name: string,
    number: number
}

const Card = ({color, icon, name, number}: CardProps) => {
  return (
    <div className={`bg-[${color}] gap-2 flex flex-col p-10 w-full rounded-lg`}>
        <div className='flex flex-col gap-2'>
            <div className='text-2xl'>{icon}</div>
            <div>{name}</div>
        </div>
        <div className='self-end font-bold'>{number}</div>
    </div>
  )
}

export default Card