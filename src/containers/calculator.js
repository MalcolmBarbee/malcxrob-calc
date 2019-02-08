import React from 'react'
import Buttons from '../components/buttons';
import Display from '../components/display';



class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
        }
    }
    addNumbers = (tempStr) => {
        // let storedStr = []
        // const value = e.target.value;
        // const operation = ['addition', 'subtract', 'divide', 'multiply', 'percentage', 'abs', 'equal', 'decimal'];
        // // let tempStr = this.state.displayValue;
        // // tempStr += this.value;
        // // this.setState({
        // //     displayValue: tempStr,
        // //})

        // if(operation.includes(value) === 'addition'){
        // tempStr.push(storedStr);
        // }
        // const num = storedStr + tempStr
        return;
    }
    subtractNumbers = (a, b) => {
        const num = a - b
        return num;
    }
    multiplyNumbers = (a, b) => {
        const num = a * b
        return num;
    }
    divideNumbers = (a, b) => {
        const num = a / b
        return num;
    }
    percent = (num) => {
        return num / 100;
    }

    // posAndNeg = (num) => {
    //     const num = num * -1
    //     return num;
    // }

    equal = (num) => {

    }

    decimal = (num) => {

    }

    handleButtonEvent = (e) => {
        const displayIsFalsy = !Number(this.state.displayValue);
        const value = e.target.value;
        console.log(value)
        const operation = ['addition', 'subtract', 'divide', 'multiply', 'percentage', 'abs', 'equal', 'decimal'];

        if (operation.includes(value)) {
            // checks if event was an operation
            this.handleOperationEvent(e);
            return;
        }
        if (displayIsFalsy) {
            this.setState({
                displayValue: value,
            })
            return;
        }
        if (this.state.waitingForNewValue) {
            const currentDisplay = this.state.displayValue;
            this.logState()
            this.setState({
                previousValue: currentDisplay,
                displayValue: value,
                waitingForNewValue: false,
            }, this.logState)
        } else {
            let tempStr = this.state.displayValue;
            tempStr += value;
            this.setState({
                displayValue: tempStr,
            })
        }
        // console.log(e.target.value)
    }

    handleOperationEvent = (e) => {
        const value = e.target.value;
        const operate = this.state.operation;
        // check if this.state.operation has an operation -> If it does, execute old operation FIRST
        // ****** after above is complete 
        // setState({  current operation and store it in this.state.operation && set waitingForNewValue to true  })

        if ( operate ) {

        

        } else {

            // 1. Change this.state.operation to user input 
            // 2. Change  wFNV to True
            // 3. ???Profit
            this.setState({
                operation: value,
                waitingForNewValue: true,
            })
            return;
        }


        switch (operate) {

            case 'addition':
                //this.addNumbers()
                break;

            case 'subtract':

                break;

            case 'divide':
                // this.divideNumbers()
                break;

            case 'multiply':
                // this.multiplyNumbers()
                break;

            case 'percent':
                // this.percentage()
                break;

            case 'abs':
                // absolute
                break;

            case 'decimal':
                // decimal
                break;

            case 'equal':
                // equal
                break;

            default:
                break;
        }
    };

    logState = () => console.log(this.state);

    render() {


        return (
            <>
                <div className='row'>
                    <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={this.state.displayValue} />

                    <Buttons className='col-3' name={'AC'} value={'AC'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'%'} value={'percent'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'±'} value={'abs'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'÷'} color={'orange'} value='divide' getValue={this.handleButtonEvent} />

                    <Buttons className='col-3' name={'7'} value={'7'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'8'} value={'8'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'9'} value={'9'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'x'} color={'orange'} value='multiply' getValue={this.handleButtonEvent} />

                    <Buttons className='col-3' name={'4'} value={'4'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'5'} value={'5'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'6'} value={'6'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'-'} color={'orange'} value='subtract' getValue={this.handleButtonEvent} />

                    <Buttons className='col-3' name={'1'} value='1' getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'2'} value='2' getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'3'} value='3' getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'+'} color={'orange'} value='addition' getValue={this.handleButtonEvent} />

                    <Buttons className='col-6' name={'0'} value='0' getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'.'} value='decimal' getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'='} color={'orange'} value='equal' getValue={this.handleButtonEvent} />
                </div>
            </>
        )
    }
}

export default Calculator;