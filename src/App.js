import Logo from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";
import About from "./components/about";

function App() {

  const cardComp = data.map(cards=>{
    return ( <Card
                key={cards.id}
                {...cards}
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
