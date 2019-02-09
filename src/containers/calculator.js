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
        if(previous === 0) {
            previous = 1;
        }
        return (num * previous) / 100;
    }

    posAndNeg = (num) => {
        return num * -1;
    }

    decimal = (num) => {
       return num + '.' ;
    }

    handleButtonEvent = (e) => {
        const displayIsFalsy = !Number(this.state.displayValue);
        const value = e.target.value;
        const operation = ['addition', 'subtract', 'divide', 'multiply', 'percent', 'abs', 'equal', 'decimal'];

        if (operation.includes(value)) {
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
    }

    

    handleOperationEvent = (e) => {
        const previous = Number(this.state.previousValue);
        const display = Number(this.state.displayValue);
        const value = e.target.value;
        const operate = this.state.operation;
        // check if this.state.operation has an operation -> If it does, execute old operation FIRST
        // ****** after above is complete 
        // setState({  current operation and store it in this.state.operation && set waitingForNewValue to true  })
        if(operate === 'equal' && value === 'equal'){
            return;
        }
        if(!operate && value === 'equal') {
            return;
        }
        if(value === 'percent') {
            const num = this.percent(display, previous).toString();
            this.setState ({
                displayValue: num,
                waitingForNewValue: true
            })
            return;
        }
        if(value === 'abs') {
            const num = this.posAndNeg(display, previous).toString();
            this.setState ({
                displayValue: num,
                waitingForNewValue: true
            })
            return;
        }
        if(value === 'decimal') {

            const num = this.decimal(display).toString();
            this.setState ({
                displayValue: num,
                waitingForNewValue: true
            })
            return;
        }
        if ( !operate ) {
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

            case 'percent':

            const margin = this.percent(display, previous).toString();

            this.setState({
                displayValue: margin,
                operation: value,
                waitingForNewValue: true,
            })
                break;

            case 'abs':

            const negative = this.posAndNeg(display).toString();

            this.setState({
                displayValue: negative,
                previousValue: null,
                operation: value,
                waitingForNewValue: true,
            })
                break;

            case 'decimal':

            const decimal = this.decimal(display).toString();

            this.setState({
                displayValue: decimal,
                previousvalue: null,
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