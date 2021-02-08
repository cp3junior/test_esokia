import React from 'react'

const WordInput = ({word, handleChange}) => {
    return (
        <>
            <h2>Enter a word</h2>
            <input type="text" placeholder="Enter a word" value={word} onChange={handleChange} />
            <hr />
        </>
    )
}

export default WordInput
