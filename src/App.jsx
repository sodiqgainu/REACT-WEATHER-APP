import "./App.css";
import {useState, useEffect} from "react"

function App() {

  const [users, setUsers] = useState([])
  const [theme, setTheme] = useState('🌞')
 
  const toggleTheme = () => {
    if (theme === '🌞') {
      setTheme('🌙')
      document.getElementById('body')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      const themeNav = document.querySelector('.Nav') 
      themeNav.style.backgroundColor = 'black'
      themeNav.style.color = 'white'
      const themeBtn = document.querySelector('.theme-btn')
      themeBtn.style.backgroundColor = 'transparent'

    

      const cardThemes = document.querySelectorAll('.card')
      cardThemes.forEach(cardTheme => {
        cardTheme.style.backgroundColor = 'black'
        cardTheme.style.border = '2px solid white'
        cardTheme.style.color = 'white'

        cardTheme.addEventListener('mouseenter', () => {
          cardTheme.style.boxShadow = '0 5px 10px white'
        })
        cardTheme.addEventListener('mouseleave', () => {
          cardTheme.style.boxShadow = 'none'
        })
      })



    } else {
      setTheme('🌞')
      document.getElementById('body')
      document.body.style.backgroundColor = 'white'
      const themeNav = document.querySelector('.Nav') 
      themeNav.style.backgroundColor = 'rgb(255, 255, 255)'
      themeNav.style.color = 'black'
      const themeBtn = document.querySelector('.theme-btn')
      themeBtn.style.backgroundColor = 'white'

     

      const cardThemes = document.querySelectorAll('.card')
    
      cardThemes.forEach(cardTheme => {
        cardTheme.style.backgroundColor = 'white'
        cardTheme.style.border = '2px solid black'
        cardTheme.style.color = 'black'
        //hover effect
        cardTheme.addEventListener('mouseenter', () => {
          cardTheme.style.boxShadow = '0 5px 10px black'
        })
        cardTheme.addEventListener('mouseleave', () => {
          cardTheme.style.boxShadow = 'none'
        })
      })

     
    }
  }
    const info = async () => {
     try{
      const response = await fetch('http://dummyjson.com/users')
      if (!response.ok) {
        const message =  alert(`an error has occured: ${response.status}`)
        throw new Error(message)
       }
      const data = await response.json()
      setUsers(data.users)
      console.log(data.users)
      } catch (error) {
      console.log(error)
      }
    }

    useEffect(() => {
      info()
    }, [])
  

  
  return (
    <>
    <nav className="Nav">
      <div className="text">
        <h1>info</h1>
      </div>
      <button onClick={toggleTheme} className="theme-btn">{theme}</button>
    </nav>
        <div className="container">
         {
           users.map((user) => (
               <div key={user.id} className="card">
                  <img src={user.image} alt="" className="img" />
                  <h1 className="text">{user.firstName}</h1>
                  <p className="para">{user.age}</p>

               </div>
           ))
         }
        </div>
    </>
  )
}

export default App
