import { Component } from "react"

export default class ClassEvent extends Component {

    handleClick() {
        console.log("Class Event works!")
    }

    render() {
        return (
            <div>
                Class Base handling Component
                <button type="button" onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}