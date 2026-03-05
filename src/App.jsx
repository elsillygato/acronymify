import { useState, useEffect } from 'react'
import './App.css'
import InputBar from '../components/InputBar.jsx'
import AcronymBox from '../components/AcronymBox.jsx'
import MarkdownArea from '../components/MarkdownArea.jsx'

function App() {
  const [baseText, setBaseText] = useState('')
  function handleSendInput(input) {
    setBaseText(input)
  }
  return (
    <div>
      <h1>Acronymify</h1>
      <p><em>Make whatever quote you have niche ✌️🥹</em></p>
      <InputBar onSendInput={handleSendInput} />
      <div id="results">
        <AcronymBox text={baseText} />
        <MarkdownArea text={baseText} />
      </div>
    </div>
  )
}

export default App