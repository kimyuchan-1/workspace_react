import React from 'react'
import fooddata from './fooddata.json'
import FoodCard from './FoodCard'
import TailButton from '../component/TailButton'
import {useState} from 'react'

const [selectFoodData, setSelectFoodData] = useState();

const HandleInven = () => {

};

const foodTags = selectFoodData.map(item => 
    <FoodCard name = {item.사업장명}
              operator = {item.운영주체명}
              address = {item['사업장 소재지']}
              img = {item.구분}
              phone = {item['연락처(대표번호)']}
              fax ={item.팩스번호}
              key = {item.사업장명}
    />
);

const btTags = fooddata.map(item =>
    <TailButton color = {"blue"}
                caption = {item['운영주체 분류']}
                onHandle = {HandleInven}
                key = {item['운영주체 분류']}/>
);

export default function FoodMain() {
    return (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
            <div className='flex justify-center items-center p-3 bg-gray-200'>
                {btTags}
            </div>
            {foodTags}
        </div>
    )
}
