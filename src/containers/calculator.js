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
        return a + b;
    }
    subtractNumbers = (a, b) => {
        return a - b;
    }
    multiplyNumbers = (a, b) => {
        return a * b;
    }
    divideNumbers = (a, b) => {
        return a / b;
    }
    percentage = (num) => {
        return num / 100;
    }
    clear = (num) => {
        return '';
    }
    posAndNeg = (num) => {
        return num;
    }

    handleButtonEvent = (e) => {
        const displayIsFalsy = !Number(this.state.displayValue);
        const value = e.target.value;
        const operation = ['addition', 'subtract', 'divide', 'multiply', 'percent', 'abs', 'equal', 'decimal'];

        if( operation.includes(value) ) {
            // checks if event was an operation
            this.handleOperationEvent(e);
            return;
        }
        if ( displayIsFalsy ) {
            this.setState({
                displayValue: value,
            })
            return;
        }
        let tempStr = this.state.displayValue;
        tempStr += value;
        this.setState({
            displayValue: tempStr,
        })
        // console.log(e.target.value)
    }

    handleOperationEvent = (e) => {
        const value = e.target.value;

        switch (value) {

            case 'addition':
            // this.addNumbers()
            break;

            case 'subtract': 
            // this.subtractNumbers()
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
        }
    };

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