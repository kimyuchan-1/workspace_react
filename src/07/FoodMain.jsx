import React from 'react'
import fooddata from './fooddata.json'
import FoodCard from './FoodCard'
import TailButton from '../component/TailButton'
import { useState } from 'react'

export default function FoodMain() {
    const [selectFoodData, setSelectFoodData] = useState(fooddata);

    const HandleInven = (event) => {
        
        const caption = event.target.innerText;
        /*
        let dataset = [{}];

        for (let items of fooddata) {
            if (caption == items['운영주체 분류'].replace(' ','')) {
                dataset.push(items);
            } else if (caption == "전체") {
                dataset.push(items);
            }
        }

        console.log(dataset);
        dataset.shift();
        setSelectFoodData(dataset);
        */
        
        if (caption != '전체') {
            let foodFilterData = fooddata.filter(item => caption == item['운영주체 분류'].replace(' ',''));
            console.log(foodFilterData);
            setSelectFoodData(foodFilterData);
        } else {
            setSelectFoodData(fooddata);
        }

    };

    const foodTags = selectFoodData.map((item, idx) =>
        <FoodCard name={item.사업장명}
            operator={item.운영주체명}
            address={item['사업장 소재지']}
            img={item.구분}
            phone={item['연락처(대표번호)']}
            fax={item.팩스번호}
            key={item['연락처(대표번호)'] + idx}
        />
    );

    const category = [
        ...new Set(fooddata.map(item =>item['운영주체 분류'].replace(' ','')))
    ];

    let btTags = [];

    for (let i in category) {
        btTags.push(<TailButton color={"blue"}
                                caption={category[i]}
                                onHandle={HandleInven} //onHandle ={()=>handleShowCaption(category[i])}
                                key={category[i]}/>)
    };

    return (
        <div>
            <div className='flex-wrap flex justify-center items-center
                            bg-gray-200 mt-10 p-2'>
                <TailButton color={"blue"}
                            caption={"전체"}
                            onHandle={HandleInven}/>
                {btTags}
            </div>

            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {foodTags}
            </div>
        </div>
    )
}
