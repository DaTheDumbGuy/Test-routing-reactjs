import { Component } from "react";

export default class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    }

    handleFirstNameCHange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
        console.log(`This is he first name: ${this.state.firstname}`);
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value,
        });
        console.log(`This is the last name: ${this.state.lastname}`)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fName: this.state.firstname,
            lName: this.state.lastname
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" onChange={this.handleFirstNameCHange} value={this.state.firstname} />
                    <label>Last Name</label>
                    <input type="text" onChange={this.handleLastNameChange} value={this.state.lastname} />

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}