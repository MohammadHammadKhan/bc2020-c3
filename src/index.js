import React from 'react'
import ReactDOM from 'react-dom'
// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 function Room(props){
  let [isLit,setLit]=React.useState(false)
  let [count,setCount]=React.useState(10)

   return <div className={isLit? 'light':'dark'}>Room is {isLit? 'light':'dark'} count is {count}
   <br/>
          <button onClick={()=>setLit(!isLit)}>ON-OFF</button>
         <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
         </div>

}
ReactDOM.render(<div>
    <Room/>
    <Room/>
    <Room/>
    <Room/>
    </div>,document.getElementById('root'))

//ReactDOM.render(<App name='MHKkk' age={35}/>,document.getElementById('root'))
// const Gate=({isopen})=>isopen? 'Open':'Closed'
// const Hi=({name,age})=>{
//   return <div>Hello World <strong>{name}</strong> age is {age}</div>
// }
// ReactDOM.render(<Gate isopen={true}/>,document.getElementById('root'))
// ReactDOM.render(<Hi name='MHK' age={35}/>,document.getElementById('root'))
// ReactDOM.render(
//  <App name='MHK' age={35}/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
