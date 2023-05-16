import React from 'react';
import './Card.css';

 
export default function Card(props){
  let {imgsrc, sname, slink} = props;
return(
<>
<div className="card" >
  <img src={imgsrc} className="card-img-top" alt="" />
  <div className="card-body">
    <h6 className="card-title">A Netflix Original Series</h6>
    <h5>{sname}</h5>
    <a href={slink} className="btn btn-green">WATCH NOW 😍</a>
  </div>
</div>
</>
);

}