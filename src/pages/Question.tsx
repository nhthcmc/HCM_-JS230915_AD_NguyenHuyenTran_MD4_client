import React, { useState } from "react";
import { question } from "../common/question.interface";
import { useSelector } from "react-redux";
import { Store } from "../store";
import './home.scss'

export default function Question() {
    const questionStore = useSelector((store: Store) => store.questionStore)
    let question: question[] = [];
    if (questionStore.data) { question = questionStore.data }
    const [questionId, setQuestionId] = useState<number | null>(question[0]?.id)
    const [position, setPosition] = useState(1)
    const [totalOfCorrectAnswer, setTotalOfCorrectAnswer] = useState(0)
    const [display, setDisplay] = useState(false)
    const handleAnswer = (is_answer: boolean) => {
        if (is_answer) {
            setTotalOfCorrectAnswer(totalOfCorrectAnswer + 1)
        }
        setPosition(position + 1)
        if (position <= question?.length - 1) {
            setQuestionId(question[position]?.id)
        } else {
            setQuestionId(null)
        }
        if (position == question?.length) {
            setDisplay(true)
        }
    }
    return (
        <div className='question'>
            {
                question?.map((item) => (<div className="container" key={Date.now() * Math.random()}>
                    {questionId == item?.id && <>
                        <span>{`Correct Answers: ${totalOfCorrectAnswer}/${question?.length}`}</span>
                        <p>{item?.content}</p>
                        {item?.answers?.map(answer => {
                            return (
                                <div className="answer" key={Date.now() * Math.random()}>
                                    <button onClick={() => {
                                        handleAnswer(answer?.is_answer)
                                    }}>{answer?.content}</button>
                                </div>
                            )
                        })}
                        <button className="next"
                            onClick={() => {
                                handleAnswer(false)
                            }}
                        >Next Questions</button>
                    </>}
                </div>))
            }
            {display && <>
                <div className='popup'>
                    <h2>Congrats</h2>
                    <span>{`You answered: ${(totalOfCorrectAnswer * 100 / question?.length)}%`}</span>
                    <button
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    >Play Again</button>
                </div>
            </>}
        </div >
    )
}


