import React from 'react'
import './Sectionheader.css'
function Sectionheader({title,subtitule}) {
  return (

        <header className="section-header">
            <h1>{title}</h1>
            <p className="subtitle">{subtitule}</p>
          </header>

  )
}

export default Sectionheader