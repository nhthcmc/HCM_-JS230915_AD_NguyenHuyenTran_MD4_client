import React, { useEffect, useState } from "react";
import { category } from "../common/category.interface";
import { api } from "../services/apis";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { questionAction } from "../store/slices/question.slice";
import './home.scss'

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [category, setCategory] = useState<category[]>([])
    let [display, setDisplay] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result: any = await api.category.findAll();
                if (result.status == 200) {
                    setCategory(result.data.data)
                }
            } catch (err) {
                console.log('err', err)
            }
        }
        fetchData()
    }, [])
    const handleStartQuiz = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            let result = await api.question.findWithCondition(Number((e.target as any).category.value), Number((e.target as any).level.value), Number((e.target as any).limit.value));
            if (result.status == 200) {
                dispatch(questionAction.setData(result.data.data))
                setDisplay(false)
                navigate('/questions')
            }
        } catch (err) {

        }
    }
    return (
        <div className='setup'>
            {
                display && <div className="container">
                    <form onSubmit={(e) => {
                        handleStartQuiz(e)
                    }}>
                        <h2>Setup Quiz</h2>
                        <label>
                            <span>Number Of Questions</span>
                            <input type="number" min='1' defaultValue={1} name="limit"></input>
                        </label>
                        <label>
                            <span>Category</span>
                            <select id='category' defaultValue={category[0]?.id}>
                                {category?.map(item => (
                                    <option key={Date.now() * Math.random()} value={item?.id}>{item?.name}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            <span>Difficulty</span>
                            <select id="level" defaultValue={1}>
                                <option value="1">easy</option>
                                <option value="2">medium</option>
                                <option value="3">difficult</option>
                            </select>
                        </label>
                        <button type='submit'>Start</button>
                    </form>
                </div>
            }
            <Outlet />
        </div>
    )
}