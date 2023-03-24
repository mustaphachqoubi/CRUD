import React from "react";
import Card from "../Card";
import {TbSchool} from 'react-icons/tb'

const StudentsCard = () => {
  return (
    <Card color={'#74C1ED'} icon={<TbSchool />} name={'Students'} number={243} />
  )
};

export default StudentsCard;
