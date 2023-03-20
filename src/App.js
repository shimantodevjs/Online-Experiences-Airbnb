import Logo from "./components/nav";
import Hero from "./components/hero";
import img from "./image/work.avif"
import Card from "./components/card";

function App() {
  return ( <div className="app">
                <Logo />
                <Hero />
                <Card 
                img={img}
                ratings={4.98}
                reviews={928}
                address="portugal"
                title="Software Development,
                       Best Design with rafael"
                price={1000}
                />
           </div>  
  );
}



export default App;
