import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ThreeCanvas } from './components/Canvas'

function App() {
  const [ index, setIndex ] = useState<number>(0)
  
  const listTexts = ["world", "you", "night"]

  return (
    <div className="bg-slate-500 h-screen relative">
      <ul className="fixed inset-0 z-10 flex flex-col items-center justify-evenly py-10 mix-blend-exclusion">
        { listTexts.map((text,idx)=>(
          <li className="font-serif text-9xl text-white italic capitalize" key={idx} onMouseOver={()=> setIndex(idx) } >
            { text }
          </li>
        )) }
      </ul>
      <ThreeCanvas className="fixed inset-0 bg-slate-100" index={ index } />
    </div>
  )
}

export default App
