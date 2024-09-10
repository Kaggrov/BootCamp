import React,{useState} from 'react'
import Button from './Button.js'
import Article from './Article.js';

const Day7Demo = () => {
    const [disp,setDisp] = useState(false);

  return (
    <div>
        <Button disp={disp} setDisp={setDisp}/>
        <Article/>
    </div>
  )
}

export default Day7Demo