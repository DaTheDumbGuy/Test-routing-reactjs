import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
        //Event Binding
        this.decrement = this.decrement.bind(this);
    }
    //recommended
    increment = () => {
        console.log(this);
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }


    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter} </h3>
                <button type="button" onClick={this.increment} >Increment</button>
                <button type="button" onClick={this.decrement} >Decrement</button>
            </div>
        )
    }
}
export default Counter;