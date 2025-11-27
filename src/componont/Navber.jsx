import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navber = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      this is navber and count is {count}
    </div>
  )
}

export default Navber
