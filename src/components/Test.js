import React, { Component } from 'react';

class Test extends Component {

    state = {
        pies: [
                {
                    name: "Pie1"
                },
                {
                    name: "Pie2"
                }
        ]
    }

    render() {

        console.log(this.state)

        return (
            <div>
                <h1>{this.state.pies.map(pie => <li>{pie.name}</li>)}</h1>
            </div>
        );
    }
}

export default Test;