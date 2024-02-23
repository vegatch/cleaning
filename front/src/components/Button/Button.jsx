import React from 'react';
import '../Button/button.css';


const ButtonApp = ({className, onClick, onSubmit, label}) =>{
    
    return (
        <div className='button'>
          <button 
            className={className} 
            id='btn-background' 
            onClick= {onClick} 
            onSubmit= {onSubmit}
            type="button">{label}
            </button>
        </div>
      );
}

export default ButtonApp;