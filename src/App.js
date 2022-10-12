import './App.css';
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
          key={item.id}
          item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="cards-row">
          {cards}
      </section>
    </div>
  );
}

export default App;
