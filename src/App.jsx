import { useState } from 'react'
import './App.css'
import FormElement from './components/FormElement'
import TipButton from './components/TipButton'
import TipCalculatorSection from './components/TipCalculatorSection'

function App() {

  const [inputValue, setInputValue] = useState(0)
    console.log(event.target.value)



  return (
    <div className="bg-teal-100 border w-screen rounded-lg mx-auto">
      <h1 class="mt-20">SPLI</h1>
      <h1>TTER</h1>

      <div className="bg-white w-1/2 mx-auto my-20 flex rounded-lg p-4">
        <div class="w-1/2">
          <FormElement formInput={setInputValue} formLabel="Bill" />
          <h4>Select tip %</h4>
          <TipButton text="5%"/>
          <TipButton text="10%"/>
          <TipButton text="15%"/>
          <TipButton text="25%"/>
          <TipButton text="50%"/>
          <TipButton text="Custom"/>
          <FormElement formLabel="Number of People" />
        </div>

        <div class="w-1/2 my-auto">
          <TipCalculatorSection />
        </div>
      </div>

    </div>
  )
}

export default App
