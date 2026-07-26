import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Clicked");
  }

  function inputChange(val){
    console.log(val);
  }
  
  const pageScrolling = (val) => {
    if(val > 0){
      console.log('down scrolling');
    }else{
      console.log('up scrolling');
    }
  }

  return (
    <div>
      <h1>Hello, Madhav</h1>

      <button onDoubleClick={btnClicked} >Change user</button>
      <button onMouseEnter={function(){
        console.log("hello guyzz");
      }}>click here</button>

      <button onClick={() =>{
        console.log("jai yadav jai madhav");
      }}>Radhe</button>

      <input onChange={inputChange} type='text' placeholder='Enter Name' />


      <input onChange={function(elem){
        console.log(elem.target.value)
      }} type='text' placeholder='Enter Class' />

      {/* call a function in input */}
      <input onChange={function(elem){
        inputChange(elem.target.value);
      }} type='text' placeholder='Enter Class' />


      <div 
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
        className="box">

      </div>

      <div onWheel={function(elem){
        pageScrolling(elem.deltaY);
        }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>

      </div>
      
    </div>
  )
}

export default App