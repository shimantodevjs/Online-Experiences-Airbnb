import Logo from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import img from "./image/work.png"

function App() {
  return ( <div className="app">
                <Logo />
                <Hero />
                <Card 
                img={img}
                ratings={4.98}
                reviews={928}
                address="Portugal"
                title="Software Development,
                       Best Design with rafael"
                price={4621}
                />
           </div>  
  );
}



export default App;
