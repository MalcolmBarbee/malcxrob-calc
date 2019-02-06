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
    percentage = (num) => {
        return num / 100;
    }
    clear = (num) => {
        return '';
    }
    // posAndNeg = (num) => {
    //     const num = num * -1
    //     return num;
    // }

    handleButtonEvent = (e) => {

        if(!Number(this.state.displayValue)){
            this.setState({
                displayValue: e.target.value,
            })
            return this.newMethod(e);
        
        }
    
    }


    newMethod(e) {
        let tempStr = this.state.displayValue;
        tempStr += e.target.value;
        this.setState({ displayValue: tempStr });
    }

    render() {


        return (
            <>
                <div className='row'>
                    <Display className={'text-right py-2 px-3 bg-dark overflow-auto display-2 text-light p-1 col-12'} value={this.state.displayValue} />

                    <Buttons className='col-3' name={'AC'} value={'AC'}  getValue={this.handleButtonEvent}/>
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