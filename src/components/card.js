
function Card(props){
    return ( <div className="card-container">
       <img src={props.img} alt="" />
       <div className="card-header">
        <span className="ratings"><i class="fa-solid fa-star">{props.ratings}</i></span>
        <span className="reviews">({props.reviews})</span>
        <span className="address">{props.address}</span>
       </div>
       <p className="title">{props.title}</p>
       <p className="price">from {props.price}<span>&#8381;</span> / person</p>
       </div>
       )
}

export default Card