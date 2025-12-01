import Navber from './componont/Navber'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'
import { fetchCatFact } from './redux/counter/catfact'
import { useEffect, useState } from 'react'
import { marks } from './Data/studentMarks'
import ResutlTable from './componont/ResultTable'

function App() {
  const count = useSelector((state) => state.counter.value)
  const { value, loading, error } = useSelector((state) => state.fact);
  const dispatch = useDispatch()


  const [rollNo, setRollNo] = useState("")
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(true)
  const [ Resulterror, setError ] = useState('')

  const handleChange = (e) => {
    setRollNo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const detail = marks.find((i) => rollNo === i.presonalInfo.rollNo)
    if (!detail) {
      setError("Enter Correct RollNo")
    } else {
      setResult(detail)
      setShowResult(false)
    }

  }

  const anotherResult = ()=>{
    setError("")
    setShowResult(true)
  }

  return (
    <>
      <Navber />
      <div className="cantainer">
        <button onClick={() => dispatch(increment())}>+</button>
        <div>count is {count}</div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>++</button>

      </div>

      <div>
        <h2>🐱 Random Cat Fact</h2>
        <p>{value ? value : error}</p>
        <button onClick={() => dispatch(fetchCatFact())}>Get Another Fact</button>
      </div>

      <div>{showResult ? <form onSubmit={handleSubmit}>
        <input type='number' placeholder='Enter Roll No' onChange={handleChange} value={rollNo} required />

        <button type='submit'>Get Result</button>
          <p>{Resulterror}</p>
      </form> :
        <div>
          <ResutlTable result={result} />
          <p>Show Another Student Result</p>
          <button onClick={() => anotherResult()}>Show</button>
        </div>}


      </div>

    </>
  )
}

export default App
