import React from 'react'

interface CardProps{
    color: string,
    icon: any,
    name: string,
    number: number,
    iconColor: string
}

const Card = ({color, icon, name, number, iconColor}: CardProps) => {
  return (
    <div className={`bg-[${color}] gap-2 flex flex-col p-10 w-full rounded-lg`}>
        <div className='flex flex-col gap-2'>
            <div className={`text-2xl text-${iconColor}`}>{icon}</div>
            <div className='text-[#FDFDFD] text-sm'>{name}</div>
        </div>
        <div className='self-end font-bold text-xl'>{number}</div>
    </div>
  )
}

export default Card