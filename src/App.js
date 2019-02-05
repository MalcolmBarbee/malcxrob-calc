import React, { Component } from 'react';
import Calculator from './containers/calulator';



class App extends Component {
  render() {
    return (
      <>
        <div className='container' style={{ 'margin': '30px auto', 'width': '50%' }}>
          <Calculator />
        </div>
      </>
    );
  };
};

export default App;