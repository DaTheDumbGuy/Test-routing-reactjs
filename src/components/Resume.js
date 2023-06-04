import { Component } from "react";

export default class Resume extends Component {
    render() {
        const { name } = this.props;
        return (
            <h1>
                This is Header of a class Component {name}
            </h1>
        )


    }
}