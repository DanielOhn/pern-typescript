import { useState, SyntheticEvent } from 'react'

const InputPost = () => {
    const [text, setText] = useState("")

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            console.log(text)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h4>Input Post</h4>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button>Add</button>
            </form>
        </>
    )
}

export default InputPost