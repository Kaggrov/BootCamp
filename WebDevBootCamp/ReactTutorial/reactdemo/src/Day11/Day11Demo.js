import React from 'react'
import ErrorBoundry from './ErrorBoundary.js'
import Hero from './Hero.js'
import MarkdownEditor from './LazyDemo.js'
import AppHOCDemo from './HoCDemo.js'

const Day11Demo = () => {
  return (
    <div>
        <ErrorBoundry>
       <Hero heroName={'Superman'}/>  </ErrorBoundry>
       <ErrorBoundry> <Hero heroName={'Bat man'}/> </ErrorBoundry>
       <ErrorBoundry><Hero heroName={'joker'}/> </ErrorBoundry>
       <MarkdownEditor/>
       <AppHOCDemo/>
    </div>
  )
}

export default Day11Demo