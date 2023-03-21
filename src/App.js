import Logo from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";
import About from "./components/about";

function App() {

  const cardComp = data.map(cards=>{
    return ( <Card 
                img= {cards.coverImg}
                ratings={cards.stats.rating}
                reviews={cards.stats.reviewCount}
                location={cards.location}
                title={cards.title}
                price={cards.price}
                />
    )
  })

  return ( <div className="app">
                <Logo />
                <Hero />
                <section className="cards-list">
                {cardComp}
                </section>
                <About />
           </div>  
  );
}



export default App;
