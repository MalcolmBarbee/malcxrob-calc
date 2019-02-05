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

    logVal = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <>
                <div className='row'>
                    <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={'0'} />

                    <Buttons className='col-3' name={'AC'} value='AC' onClick={this.logVal} />
                    <Buttons className='col-3' name={'%'} value='percent' onClick={this.logVal} />
                    <Buttons className='col-3' name={'±'} value='abs' onClick={this.logVal} />
                    <Buttons className='col-3' name={'÷'} color={'orange'} value='divide' onClick={this.logVal} />

                    <Buttons className='col-3' name={'7'} value='7' onClick={this.logVal} />
                    <Buttons className='col-3' name={'8'} value='8' onClick={this.logVal} />
                    <Buttons className='col-3' name={'9'} value='9' onClick={this.logVal} />
                    <Buttons className='col-3' name={'x'} color={'orange'} value='multiply' onClick={this.logVal} />

                    <Buttons className='col-3' name={'4'} value='4' onClick={this.logVal} />
                    <Buttons className='col-3' name={'5'} value='5' onClick={this.logVal} />
                    <Buttons className='col-3' name={'6'} value='6' onClick={this.logVal} />
                    <Buttons className='col-3' name={'-'} color={'orange'} value='subtract' onClick={this.logVal} />

                    <Buttons className='col-3' name={'1'} value='1' onClick={this.logVal} />
                    <Buttons className='col-3' name={'2'} value='2' onClick={this.logVal} />
                    <Buttons className='col-3' name={'3'} value='3' onClick={this.logVal} />
                    <Buttons className='col-3' name={'+'} color={'orange'} value='addition' onClick={this.logVal} />

                    <Buttons className='col-6' name={'0'} value='0' onClick={this.logVal} />
                    <Buttons className='col-3' name={'.'} value='decimal' onClick={this.logVal} />
                    <Buttons className='col-3' name={'='} color={'orange'} value='equal' onClick={this.logVal} />
                </div>
            </>
        )
    }
}

export default Calculator;