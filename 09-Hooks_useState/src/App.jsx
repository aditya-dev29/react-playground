import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increseNum(){
    setNum(num+1);
  }
  function decreseNum(){
    setNum(num-1);
  }
  function jumpNum(){
    setNum(num+4)
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={increseNum}>Increase</button>

      <button onClick={decreseNum}>Decrease</button>
      
      <button onClick={jumpNum}>Jump by 4</button>
    
    </div>
  );
};

export default App;