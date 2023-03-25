import React from 'react'
import { StudentsCard, CourseCard, PaymentCard, Usercard  } from './cards/index'

const Cards = () => {
  return (
    <div className='p-8 flex flex-col md:flex-row justify-center items-center gap-4'>
        <StudentsCard />
        <CourseCard />
        <PaymentCard />
        <Usercard />
    </div>
  )
}

export default Cards