import React, { useState } from 'react'
import ArticleChild from './ArticleChild.js'

const Article = () => {
    const [data,setData] = useState(0)
  return (
    <>
    <div className='App'>Article</div>
    <div>
        <ul>
            <li key="1" className='myCss'>C++</li>
            <li key="2" className='myCss'>C</li>
            <li key="3" className='myCss'>Java</li>
        </ul>
    </div>
    <div className='myCss2'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
    <button onClick={()=>setData(prev =>prev+1)}>Click Me</button>
    <p className={`click${data}`}>{data}</p>
    <ArticleChild/>
    </>
  )
}

export default Article