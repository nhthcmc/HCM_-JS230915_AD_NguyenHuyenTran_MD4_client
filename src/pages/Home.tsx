import React from 'react'
import SetUp from './components/SetUp'
import Question from './components/Question'
import PopUp from './components/PopUp'
import './home.scss'

export default function Home() {
    return (
        <div className='home'>
            <SetUp />
            <Question />
            <PopUp />
        </div>
    )
}
