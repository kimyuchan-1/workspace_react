import React from 'react'
import TailButton from '../component/TailButton'

export default function LottoBalls() {
    const mixBalls = () => {

    };


    return (
        <div>
            
            <TailButton color = {"blue"} caption = {"로또번호생성"} onHandle={mixBalls}/>
        </div>
    )
}
