import React from 'react';
import './App.css';
import Hello from './Hello';
import './Hello.css'

function App({name, age}) {
return <div align='center'>
        <p className='myname1'>Hello from <strong>{name}</strong> Age={age-4}
        </p> 
        <br/>
        <h1 className='myname2'>Learning Basics of React</h1>
        <h2 className='myname2'>Creating First React App</h2>
        <h3 className='body-text'>Languages:
        <ol>
          <li>C++</li>
          <li>Python</li>
          <li>Visual Basic</li>
        </ol>
        </h3>
        <h3 className='body-text'>Skills:  
        <ul>
          <li>WordPress</li>
          <li>Content Writing</li>
          <li>Account Managment</li>
        </ul>
        </h3>
        <Hello firstName={name}></Hello>
      </div>
  }

export default App;
