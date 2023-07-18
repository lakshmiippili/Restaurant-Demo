import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [buttonTitle,setButtonTitle]=useState('Change to Descending Order')
  const [reverse,setReverse]=useState('true')
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const descendingHandler = useCallback(()=>{
    setReverse((prevState)=>!prevState)
    console.log(reverse)
    if(reverse){
      setButtonTitle('Change to Ascending Order')
    }else{
      setButtonTitle('Change to Descending Order')
    }
  },[reverse])

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} reverse={reverse}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={descendingHandler}>{buttonTitle}</Button>
    </div>
  );
}

export default App;