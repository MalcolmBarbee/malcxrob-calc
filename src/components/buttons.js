import React from 'react';


class Buttons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            'background-color': '#E0E0E6',
            'fontSize': '40px',
            'text-align': 'center',
            'color': '#666666',
            'border-left': '1px solid #666666',
            'border-bottom': '1px solid #666666',
            'user-select': 'none',
            'cursor': 'pointer',
            'outline': 'none',
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
            'display': 'block',
            'focus': {'Outline': '0'},

        }
    }

    componentWillMount = () => {
        if (this.props.color) {
            
            switch(this.props.color) {

                case 'orange':
                this.setState({'background-color': '#EE9B3E','color': '#fff',})
                break;

                default:
                break;
            }
        }
        return;
    }


    clickedOn = () => {
        if (!this.state['box-shadow']) {
            this.setState({'box-shadow': 'inset 0px 0px 80px 0px rgba(0,0,0,0.25)'});
        } else {
            return;
        }

    }

    clickedOff = () => {
        if (this.state['box-shadow']) {
            this.setState({'box-shadow': undefined});
        } else {
            return;
        }
    }


    render() {
        return (
            <>
                <button type='button' className={this.props.className}  onMouseDown={this.clickedOn} onMouseUp={this.clickedOff} style={this.state}>{this.props.name}</button>
            </>
        )
    }
}

export default Buttons;