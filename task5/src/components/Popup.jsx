import React from 'react'

const Popup = ({ close }) => {
  return (
    <div className="popup-wrapper">
      <div className="popup-box popup-anim">
        <h3>This is Popup Component</h3>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Popup
