import React from 'react'
import Card from '../Card'
import {BiBookmark} from 'react-icons/bi'

const CourseCard = () => {
  return (
    <Card color={'#EE95C5'} icon={<BiBookmark />} name={'Course'} number={13} />
  )
}

export default CourseCard