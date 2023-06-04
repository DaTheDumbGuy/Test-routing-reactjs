import { Component } from "react"

const name = "Daryl";
const arr = [2, 2, 3, 4, 5];
const msg = () => {
    return "Hello!"
}
export default function Hello() {
    return (
        <>
            <h1>Hello World! {name}</h1>
            <ul>
                {arr.map((item, index) => {
                    return (<li key={index}>Item: {item} -- Index {index}</li>);
                })}
            </ul>
            <p>This is message: {msg()}</p>
        </>
    )
}

export const Test = () => {
    return <h1>Test</h1>
}

export class Message extends Component {
    render() {
        return <h1>This is class component</h1>
    }
}