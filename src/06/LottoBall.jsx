import React from 'react'
import TailButton from '../component/TailButton'

export default function LottoBall() {
    const mixBalls = () => {

    };

    return (
        <div>
            <span className='bg-yellow-300 text-center'>1</span>
            <TailButton color = {"blue"} caption = {"로또번호생성"} onHandle={mixBalls}/>
        </div>
    )
}
