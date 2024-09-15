import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {

    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log("Some error occured: ", error)
    })

  }, [])

  return (
    <div>
      {jokes?.map((joke, index) => (
        <div key={joke.id}> 
            {joke.joke}
        </div>
      ))}
    </div>
  )
}

export default App
