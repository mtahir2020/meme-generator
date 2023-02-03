import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className='nav-container'>
        <div className='trollface-text'>
          <img src="trollface2.png" alt="trollface" height={50}/>
          <p>Meme Generator</p>
        </div>
        <div className="nav-rightside">
          <p>Mini React Project</p>
        </div>
      </div>
    </nav>
  )
}
