import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({users:'adiii',age:20});
   
  const btnClicked = () => {
    // const newNum = {...num};
    // newNum.users ="madhav"
    // newNum.age =19
    // console.log(newNum);
    // setnum(newNum)

    setnum((prev) => ({...prev,age:30,}));

  }

  const [arr, setarr] = useState([10, 20, 30, 40]);

  const click = () => {
    const newArr = [...arr];
    newArr.push(99)
    setarr(newArr);
  }

  //batch update
  const [a, seta] = useState(10)
  const btnClickBatch = () => {
    seta(prev => (prev+1))
    seta(prev => (prev+1))
    seta(prev => (prev+1))
  }
  return (
    <div>
      <h1>{num.users}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
      
      <br/><br/>

      <h1>{arr}</h1>
      <button onClick={click}>click this</button>
      
      <br /> <br/>
      <h1>{a}</h1>
      <button onClick={btnClickBatch}>click them</button>
    
    </div>
  )
}

export default App;