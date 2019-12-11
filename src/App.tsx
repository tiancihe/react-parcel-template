import React, { useState } from "react"
import { hot } from "react-hot-loader"

function App() {
    const [input, setInput] = useState("")

    return (
        <div>
            Hello
            {input}
            <input value={input} onChange={e => setInput(e.target.value)} />
        </div>
    )
}

export default hot(module)(App)
