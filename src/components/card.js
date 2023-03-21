
function Card(props){

    let badgeTxt

    if(props.openSpots===0){
        badgeTxt="SOLD OUT"
    }
    
    else if(props.location==="Online"){
        badgeTxt="ONLINE"
    }

    return ( <div className="card-container">
        {
            badgeTxt && <div className="card-badge">{badgeTxt}</div>
        }

       <img src={`./img/${props.coverImg}`} alt="" />

       <div className="card-header">
        <span className="ratings"><i class="fa-solid fa-star"></i>{props.stats.rating}</span>
        <span className="reviews">({props.stats.reviewCount})</span>
        <span className="address">&#x2022;  {props.location}</span>
       </div>

       <p className="title">{props.title}</p>

       <p className="price">from {props.price}<span>&#8381;</span> / person</p>
       </div>
       )
}

export default Card