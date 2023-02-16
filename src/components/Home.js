import React from 'react'
import "../App.css"
import { useLocation } from 'react-router-dom'
function Home() {
const location = useLocation()
console.log(location)
  return (
    <div className='bg'>
      <div>
        <br/>
        <h1 className='ms-5'>
          Salam {location.state.frName} Sir 
        </h1>
<br/>
<br/>
      </div>
      <div className='ms-5 bg2'>
        <h3>
          Your Information For You Sir 
        </h3>
        <hr/>
        <h4>
          Your full Name : {location.state.frName}-{location.state.lsname}
          <hr/>
        </h4>
        <h4>
          Your Email login : {location.state.Email}
        </h4>
      </div>
    </div>
  )
}

export default Home