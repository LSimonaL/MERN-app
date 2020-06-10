import React, { Component } from 'react';

//accepting props in a function component
// const Test = (props) => {
//     return (
//         <div> test {props.value}</div>
//     )
// }

// export default Test;

//accepting props into a class component


export class Test extends Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

