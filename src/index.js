import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Root(){
  return   <div>
           <App />
       </div>
}

ReactDOM.render(<Root />,document.getElementById('root'));

