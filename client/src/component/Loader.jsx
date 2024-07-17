import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div>
      <div className="wrapper">
        <section>
          <div class="spinner-container">
            <div class="spinner spinner-1 "></div>
            <div class="spinner spinner-2 "></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Loader