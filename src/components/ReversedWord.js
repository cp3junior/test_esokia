import React from 'react'

const ReversedWord = ({wordReversed, submitWord}) => {
    return (
        <>
            <h2>Reversed Word : {wordReversed} </h2>
            <button onClick={submitWord}>add</button>
            <hr />
        </>
    )
}

export default ReversedWord
