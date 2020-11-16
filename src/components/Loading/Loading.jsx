import React from 'react'
import './loadingStyles.scss'

const Loading = () => {
  return (
    <div id="contentLoading">
      <div className="content">
        <div className="loading">
          <p>Cargando...</p>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Loading
