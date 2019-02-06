import React from 'react';


class Buttons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            'backgroundColor': '#E0E0E6',
            'fontSize': '40px',
            'textAlign': 'center',
            'color': '#666666',
            'borderLeft': '1px solid #666666',
            'borderBottom': '1px solid #666666',
            'userSelect': 'none',
            'cursor': 'pointer',
            'outline': 'none',
            // '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
            'display': 'block',

        }
    }

    componentWillMount = () => {
        if (this.props.color) {
            
            switch(this.props.color) {

                case 'orange':
                this.setState({'backgroundColor': '#EE9B3E','color': '#fff',})
                break;

                default:
                break;
            }
        }
        return;
    }


    clickedOn = () => {
        if (!this.state['boxShadow']) {
            this.setState({'boxShadow': 'inset 0px 0px 80px 0px rgba(0,0,0,0.25)'});
        } else {
            return;
        }

    }

    clickedOff = () => {
        if (this.state['boxShadow']) {
            this.setState({'boxShadow': undefined});
        } else {
            return;
        }
    }




    render() {
        return (
            <>
                <button type='button' className={this.props.className}  onMouseDown={this.clickedOn} onMouseUp={this.clickedOff} style={this.state} onClick={this.props.getValue} value={this.props.value}>{this.props.name}</button>
            </>
        )
    }
}

export default Buttons;