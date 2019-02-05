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

    render() {
        return (
            <>
                <div className='row'>
                    <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={'0'} />

                    <Buttons className='col-3' name={'AC'} />
                    <Buttons className='col-3' name={'%'} />
                    <Buttons className='col-3' name={'±'} />
                    <Buttons className='col-3' name={'÷'} color={'orange'} />

                    <Buttons className='col-3' name={'7'} />
                    <Buttons className='col-3' name={'8'} />
                    <Buttons className='col-3' name={'9'} />
                    <Buttons className='col-3' name={'x'} color={'orange'} />

                    <Buttons className='col-3' name={'4'} />
                    <Buttons className='col-3' name={'5'} />
                    <Buttons className='col-3' name={'6'} />
                    <Buttons className='col-3' name={'-'} color={'orange'} />

                    <Buttons className='col-6' name={'0'} />
                    <Buttons className='col-3' name={'.'} />
                    <Buttons className='col-3' name={'='} color={'orange'} />
                </div>
            </>
        )
    }
}

export default Calculator;