import img from '../image/photogrid.png'

function Hero(){
    return <main>
           <img className='photo-grid' src={img} alt="" />
           <div className="txt">
           <h1>Online Experiences</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae sunt voluptas voluptatem nostrum nesciunt, odit quo, commodi unde saepe sapiente aut. Fugiat, omnis suscipit laboriosam ducimus esse maiores incidunt?</p>
           </div>
    </main>
}

export default Hero