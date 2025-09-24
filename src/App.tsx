import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="time">{time.toLocaleTimeString()}</div>
        <div className="date">{time.toLocaleDateString()}</div>
      </div>
    </div>
  )
}

export default App