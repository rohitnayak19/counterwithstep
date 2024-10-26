import React,{useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const handleStep = (e) =>{
        setStep(Number(e.target.value))
    }

    const handleIncrease = () =>{
        setCount(count + step)
    }

    const handleDecrease = () =>{
        if (count > 0) {
            setCount(count - step)
        }
    }
  return (
   <>
   <div>
    <h1>Create counter app with step</h1>
    <input type="text" placeholder='add step' onChange={handleStep} value={step}/>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    <h2>{count}</h2>
   </div>
   </>
  )
}

export default App