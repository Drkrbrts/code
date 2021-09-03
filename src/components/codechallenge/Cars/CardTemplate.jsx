import React from 'react'

let CardTemplate = (props, index) => {
  return (
    <div className="card col-md-3 m-1" key={props.index}>
      <div className="card-body">
          <h5 className="card-title">{props.make}</h5>
          <h5 className="card-text">{props.model}</h5>
          <h5 className="card-text">{props.year}</h5>
      </div>
    </div>
  )
}

export default CardTemplate