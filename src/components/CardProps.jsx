import React from 'react'

const CardContent = (props) => {
  return (
    
    <div className="card-container">
          <img src={props.imgSrc}  alt={props.alt}/>
          <b><p className='category'>{props.category}</p></b>
          <p className="text"><b>Age:</b> {props.age}</p>
          <p className="text"><b>Class size:</b> {props.class_size}</p>
          <p className="text"><b>Time: </b>{props.time}</p>
    </div>
    
  )
}

export default CardContent