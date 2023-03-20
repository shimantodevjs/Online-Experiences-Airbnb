
function Card(props){
    return ( <div className="card-container">
       <img src={props.img} alt="" />
       <div className="card-header">
        <span className="ratings"><i class="fa-solid fa-star"></i>{props.ratings}</span>
        <span className="reviews">({props.reviews})</span>
        <span className="address">&#x2022;  {props.address}</span>
       </div>
       <p className="title">{props.title}</p>
       <p className="price">from {props.price}<span>&#8381;</span> / person</p>
       </div>
       )
}

export default Card