import React, { PureComponent } from 'react';
import './spinner.css';

export class Spinner extends PureComponent {
    
  render() {
    
      
    return (
        
        
      <div className="spinner-container">
        
        <img src={"https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-17.jpg"} alt="spinner" style={{ width: '200px', height: '200px' }} />
        
      </div>
    )
  }
}

export default Spinner
