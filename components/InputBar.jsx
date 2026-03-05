import {useState} from 'react'

function InputBar({onSendInput}) {
    const [input, setInput] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        onSendInput(input)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) =>setInput(e.target.value)} />
        </form>
    )
}

export default InputBar;