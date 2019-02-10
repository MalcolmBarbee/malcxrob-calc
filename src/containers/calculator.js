import React from 'react'
import Buttons from '../components/buttons';
import Display from '../components/display';



class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayValue: 0,
            previousValue: null,
            operation: null,
            waitingForNewValue: false
        }
    }
    addNumbers = (a, b) => {
        const num = a + b
        return num;
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
    percent = (num, previous) => {
        if (previous === 0) {
            previous = 1;
        }
        return (num * previous) / 100;
    }
    posAndNeg = (num) => {
        return num * -1;
    }
    decimal = (num) => {
        return num + '.';
    }
    handleButtonEvent = (e) => {
        const displayIsFalsy = !Number(this.state.displayValue);
        const value = e.target.value;
        const operation = ['addition', 'subtract', 'divide', 'multiply', 'percent', 'abs', 'equal', 'decimal'];

        if (value === 'C') {
            if (!this.state.previousValue && this.state.operation) {
                this.setState({
                    operation: null,
                })
                return;
            }
            this.setState({
                displayValue: 0,
            })
            return;
        }
        if (value === 'AC') {
            this.setState({
                displayValue: 0,
                previousValue: null,
                operation: null,
                waitingForNewValue: false
            })
            return;
        }
        if (operation.includes(value)) {
            this.handleOperationEvent(e);
            return;
        }
        if (this.state.displayValue === '0' || this.state.displayValue === 0) {
            // if (displayIsFalsy) {
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
    }
    handleOperationEvent = (e) => {
        const previous = Number(this.state.previousValue);
        const display = Number(this.state.displayValue);
        const value = e.target.value;
        const operate = this.state.operation;
        // check if this.state.operation has an operation -> If it does, execute old operation FIRST
        // ****** after above is complete 
        // setState({  current operation and store it in this.state.operation && set waitingForNewValue to true  })
        if (value === 'decimal') {
            if (this.state.waitingForNewValue) {
                this.setState({
                    displayValue: '0.',
                    waitingForNewValue: false,
                })
                return;
            }
            let tempStr = '';
            if (!this.state.displayValue) {
                tempStr = '0'
            } else {
                tempStr = this.state.displayValue;
            }
            if (tempStr.includes('.')) {
                return;
            }
            tempStr += '.'
            this.setState({
                displayValue: tempStr,
            })
            return;
        }
        if (operate === 'equal' && value === 'equal') {
            return;
        }
        if (!operate && value === 'equal') {
            return;
        }
        if (value === 'percent') {
            const num = this.percent(display, previous).toString();
            this.setState({
                displayValue: num,
                waitingForNewValue: true
            })
            return;
        }
        if (value === 'abs') {
            const num = this.posAndNeg(display, previous).toString();
            this.setState({
                displayValue: num,
            })
            return;
        }
        if (this.state.waitingForNewValue && !this.state.previousValue) {
            console.log(`here!`)
            this.setState({
                operation: value,
                waitingForNewValue: true,
            })
            return;
        }
        if (!operate) {
            this.setState({
                operation: value,
                waitingForNewValue: true,
            })
            return;
        }
        switch (operate) {

            case 'addition':

                const sum = this.addNumbers(previous, display).toString();

                this.setState({
                    displayValue: sum,
                    previousValue: null,
                    operation: value,
                    waitingForNewValue: true,
                })
                break;

            case 'subtract':

                const difference = this.subtractNumbers(previous, display).toString();

                this.setState({
                    displayValue: difference,
                    previousValue: null,
                    operation: value,
                    waitingForNewValue: true,
                })
                break;

            case 'divide':

                const quotient = this.divideNumbers(previous, display).toString();

                this.setState({
                    displayValue: quotient,
                    previousValue: null,
                    operation: value,
                    waitingForNewValue: true,
                })

                break;

            case 'multiply':

                const product = this.multiplyNumbers(previous, display).toString();

                this.setState({
                    displayValue: product,
                    previousValue: null,
                    operation: value,
                    waitingForNewValue: true,
                })

                break;

            case 'equal':

                this.setState({
                    previousValue: this.state.displayValue,
                    operation: value,
                    waitingForNewValue: true,
                })
                break;


            default:

                break;
        }
    };
    handleClearButton = () => {
        const display = this.state.displayValue

        if (this.state.operation === 'equal' && !this.state.previousValue){

            return (
                <Buttons className='col-3' name={'AC'} value={'AC'} getValue={this.handleButtonEvent} />
            )
        }
        if (display) {
            return (
                <Buttons className='col-3' name={'C'} value={'C'} getValue={this.handleButtonEvent} />
            )
        }
        else {
            return (
                <Buttons className='col-3' name={'AC'} value={'AC'} getValue={this.handleButtonEvent} />
            )
        }

    }
    handleDynamicDisplay = () => {
        const length = this.state.displayValue.length;
        console.log(length)
        switch (length) {

            case 11 || 12:
                return <Display className={'text-right py-3 px-3 bg-dark overflow-auto display-3 text-light p-1 col-12'} value={this.state.displayValue} />

            case 13 || 14 || 15:
                return <Display className={'text-right py-4 px-3 bg-dark overflow-auto display-4 text-light p-1 col-12'} value={this.state.displayValue} />

            case 17:
                return <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-3 text-light p-1 col-12'} value={this.state.displayValue} />


            default:
                return <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={this.state.displayValue} />

        }

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('previous state: ', prevState)
        console.log('current state: ', this.state)
    }

    logState = () => console.log(this.state);
    // <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={this.state.displayValue} />
    render() {


        return (
            <>
                <div className='row'>

                    {this.handleDynamicDisplay()}

                    {this.handleClearButton()}
                    <Buttons className='col-3' name={'%'} value={'percent'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'±'} value={'abs'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'÷'} color={'orange'} value='divide' getValue={this.handleButtonEvent} />

                    <Buttons className='col-3' name={'7'} value={'7'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'8'} value={'8'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'9'} value={'9'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'×'} color={'orange'} value='multiply' getValue={this.handleButtonEvent} />

                    <Buttons className='col-3' name={'4'} value={'4'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'5'} value={'5'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'6'} value={'6'} getValue={this.handleButtonEvent} />
                    <Buttons className='col-3' name={'−'} color={'orange'} value='subtract' getValue={this.handleButtonEvent} />

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