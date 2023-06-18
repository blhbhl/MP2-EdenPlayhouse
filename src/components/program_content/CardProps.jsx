import React from 'react'

const CardContent = (props) => {
  return (
    <div className='container'>
    <div className="card-container">
          <img src={props.imgSrc}  alt={props.alt}/>
          <h2>{props.category}</h2>
          <p className="text"><b>Age:</b> {props.age}</p>
          <p className="text"><b>Class size:</b> {props.class_size}</p>
          <p className="text"><b>Time: </b>{props.time}</p>
    </div>
    </div>
  )
}

export default CardContent