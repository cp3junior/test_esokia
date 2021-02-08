import React from 'react'

const ReversedList = ({wordList, clearList}) => {
    return (
        <>
            <h2>Reversed word list:</h2>
            <ul>
                {
                    wordList.map((word, i) => <li key={i}>{word}</li>)
                }
            </ul>
            <button onClick={clearList} >Clear List</button>
            <hr />
        </>
    )
}

export default ReversedList
