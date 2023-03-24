import React from 'react'
import Card from './Card'
import {BiUser} from 'react-icons/bi'

const Usercard = () => {
  return (
    <Card color={'#F8D442'} iconColor={'yellow-100'} icon={<BiUser />} name={'Users'} number={3} />
  )
}

export default Usercard