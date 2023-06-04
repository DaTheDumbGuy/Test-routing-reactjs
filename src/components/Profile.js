import { Component } from "react"

function Profile(props) {
    const { fName, lName, age } = props;
    return (
        <div>
            {/* {props.children} */}
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default Profile

export class Message extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.messageContent} -- {this.props.messageCode}</h1>
                <p>{this.props.children}</p>
            </div>
        )

    }
}