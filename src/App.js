import { useState, useEffect } from 'react'
import WordInput from './components/WordInput'
import ReversedList from './components/ReversedList'
import ReversedWord from './components/ReversedWord'

function App() {
  const [word, setWord] = useState('')
  const [wordReversed, setWordReversed] = useState('')
  const [wordList, setWordList] = useState([])

  useEffect(() => {
    setWordReversed(word.split('').reverse().join(''))
  }, [word])

  const handleChange = (e) => {
    setWord(e.target.value)
  }

  const submitWord = () => {
    if(wordReversed) {
      setWordList([...wordList, wordReversed])
      setWord('')
    }
  }

  const clearList = () => {
    setWordList([])
  }


  return (
    <div>
      <WordInput handleChange={handleChange} word={word}  />
      <ReversedWord wordReversed={wordReversed} submitWord={submitWord} />
      <ReversedList wordList={wordList} clearList={clearList} />
    </div>
  );
}

export default App;
