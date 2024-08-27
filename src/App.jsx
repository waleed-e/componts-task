
import './App.css'
import BoxOfButtons from './componts/BoxOfButtons'
import Header from './componts/Header'
import Post from './componts/Post'

function App() {

  return (
    <div >
    <Header/>
    <div style={{display:"flex",justifyContent:"space-between"}} > 
    <div style={{display:"flex",flexDirection:"column"}}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
    <BoxOfButtons/>
    </div>
    </div>
  )
}

export default App
