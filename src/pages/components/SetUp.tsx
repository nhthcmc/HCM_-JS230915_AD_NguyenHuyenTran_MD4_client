import React from 'react'

export default function SetUp() {
    async function handleStartQuiz(e: any) {
        e.preventDefault();

    }
    return (
        <div className='setup'>
            <h2>Setup Quiz</h2>
            <form onSubmit={(e) => {
                handleStartQuiz(e)
            }}>
                <label>
                    <span>Number Of Questions</span>
                    <input ></input>
                </label>
                <label>
                    <span>Category</span>
                    <select>
                        {/* <option value="">Select a category</option> */}
                        <option value="option1">sports</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                <label>
                    <span>Difficulty</span>
                    <select>
                        {/* <option value="">Select a level</option> */}
                        <option value="option1">easy</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                <button type='submit' name='start'>Start</button>
            </form>
        </div>
    )
}
