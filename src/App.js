import React, { Component } from 'react';
import Calculator from './containers/calculator';



class App extends Component {
  render() {
    return (
      <>
        <div className='container' style={{ 'margin': 'auto', 'width': '50%' }}>
          <Calculator />
        </div>
      </>
    );
  };
};

export default App;