import React from 'react'
import Card from './Card'
import {MdOutlinePayments} from 'react-icons/md'

const PaymentCard = () => {
  return (
    <Card color='#F6C762' iconColor={'amber-100'} icon={<MdOutlinePayments />} name={'Payments'} number={556.000} />
  )
}

export default PaymentCard