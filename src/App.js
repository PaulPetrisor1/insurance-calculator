import React from 'react';
import './App.css';
import Button from './Objects/Button';
import Insert from './Objects/Insert';
import Clear from './Objects/Clear';
import * as math from 'mathjs';


class App extends React.Component {

    constructor(props) {

        super(props);
        // setting initial state  to an empty string
        this.state = {insert: ""};
    }

    //function to  adding a value to the current state
    insertInput = value => {
        console.log("jsandkjsandkjsa")
        if (value === '^' || value === '%' || value === '+' || value === '-' || value === '*' || value === '/') {
            if (value === this.state.insert[this.state.insert.length - 1]) {
                value = ""
            }
        }
        this.setState({insert: this.state.insert + value})

    };

    insertEqual = () => {
        // created a function that uses the mathjs library in order to do the calculations
        this.setState({insert: math.evaluate(this.state.insert)})

    };


    render() {

        return (<div className="application">

            <div className="container">

                <Insert insert={this.state.insert}/>

                <div className="row">
                    <Clear clearPrompt={() => this.setState({insert: ""})}>AC</Clear>
                    <Button Click={this.insertInput}>^</Button>
                    <Button Click={this.insertInput}>%</Button>
                    <Button Click={this.insertInput}>+</Button>
                </div>


                <div className="row">
                    <Button Click={this.insertInput}>1</Button>
                    <Button Click={this.insertInput}>2</Button>
                    <Button Click={this.insertInput}>3</Button>
                    <Button Click={this.insertInput}>-</Button>

                </div>


                <div className="row">
                    <Button Click={this.insertInput}>4</Button>
                    <Button Click={this.insertInput}>5</Button>
                    <Button Click={this.insertInput}>6</Button>
                    <Button Click={this.insertInput}>*</Button>
                </div>


                <div className="row">
                    <Button Click={this.insertInput}>7</Button>
                    <Button Click={this.insertInput}>8</Button>
                    <Button Click={this.insertInput}>9</Button>
                    <Button Click={this.insertInput}>/</Button>
                </div>


                <div className="row">
                    <Button Click={this.insertInput}>.</Button>
                    <Button Click={this.insertInput}>0</Button>
                    <Button Click={() => this.insertEqual()}>=</Button>
                </div>

            </div>

        </div>);

    }
}

export default App;
