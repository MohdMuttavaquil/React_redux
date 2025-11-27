import Navber from './componont/Navber'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, passingMarks } from './redux/counter/counterSlice'
import { fetchCatFact } from './redux/counter/catfact'
import { useEffect, useState } from 'react'
import { marks } from './Data/studentMarks'

function App() {
  const count = useSelector((state) => state.counter.value)
  const { value, loading, error } = useSelector((state) => state.fact);
  const dispatch = useDispatch()


  const [rollNo, setRollNo] = useState("")
  const [result, setResult] = useState(null)
  useEffect(() => {
    console.log(result)
  }, [result])
  const handleChange = (e) => {
    setRollNo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const detail = marks.find((i) => rollNo === i.presonalInfo.rollNo)
    if (!detail) {
      setResult("Enter Correct RollNo")
    } else {
      setResult(detail)
    }

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


      <div>
        <form onSubmit={handleSubmit}>
          <input type='number' placeholder='Enter Roll No' onChange={handleChange} value={rollNo} required />

          <button type='submit'>Get Result</button>
        </form>

        <div>

          <div className='personalInfo'>
            <p><b>Name </b>{result?.presonalInfo?.name}</p>
            <p><b>Class </b>{result?.presonalInfo?.class}</p>
            <p><b>Roll No </b>{result?.presonalInfo?.rollNo}</p>
          </div>

          <div className='marks'>
            <table border="1" cellpadding="8" cellspacing="0">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Passing Marks</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>English</td>
                  <td>{result?.studentMarks?.english}</td>
                  <td>{passingMarks}</td>
                </tr>

                <tr>
                  <td>Hindi</td>
                  <td>{result?.studentMarks?.hindi}</td>
                  <td>{passingMarks}</td>
                </tr>

                <tr>
                  <td>Maths</td>
                  <td>{result?.studentMarks?.maths}</td>
                   <td>{passingMarks}</td>
                </tr>

                <tr>
                  <td>Science</td>
                  <td>{result?.studentMarks?.science}</td>
 <td>{passingMarks}</td>
                </tr>

                <tr>
                  <td>Socal Science</td>
                  <td>{result?.studentMarks?.socalScience}</td>
 <td>{passingMarks}</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>

      </div>
    </>
  )
}

export default App
