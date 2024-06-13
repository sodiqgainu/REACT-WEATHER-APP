import "./App.css";
import {useState, useEffect} from "react"
import { CSSTransition } from 'react-transition-group';

function App() {
  const [weather, setWeather] = useState([])
  const [input, setInput] = useState('')
  const [showData, setShowData] = useState(false);

  const ApiKey = '8f109fefc6c64e2a81a130342240706'
 

const HandleSearch = async () => {
  if (input === '') {
    return alert('Please enter a city')
  }
  const url =  `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${input}`
  const response = await fetch(url)
  const data = await response.json()
  setWeather(data)
  setInput('')
  console.log(data)

  setShowData(true)
 
}

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="relative  bg-opacity-20 backdrop-blur-lg p-10  shadow-lg   transition-all duration-300">
        <img className="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1498462335304-e7263fe3925a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1cnJ5fGVufDB8fDB8fHww" alt="" />
        <div className="relative">
          <h1 className="text-2xl font-bold mb-4 text-white">Weather App</h1>
          <input className="w-full p-2 mb-4 border rounded text-white bg-transparent focus:outline-none bg-opacity-20 backdrop-blur-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="w-full p-2 mb-4 bg-blue-900 backdrop-blur-lg text-white rounded" onClick={HandleSearch}>Search</button>
          <CSSTransition in={showData} timeout={300} classNames="fade" unmountOnExit>
          <div className="transition-all duration-300">
                  <h2 className="text-white">{weather.location ? weather.location.country : ''}</h2>
                  <h3 className="text-white">{weather.location ? weather.location.region : ''}</h3>
                  <p className="text-white">{weather.current ? `Temperature: ${weather.current.temp_c}` : ''}</p>
                  <img src={ weather.current && weather.current.condition ? weather.current.condition.icon : ''} alt="" />
                  <p className="text-white">{weather.current ? `Condition: ${weather.current.condition.text}` : ''}</p>
                  </div>
          </CSSTransition>
        </div>
      </div>
    </div>
    </>
  )
}


export default App
