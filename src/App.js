import "./App.css";
import CardList from "./components/CardList";

function App() {
  const cardData = [
    {
      id: "1",
      title: "Sedans",
      desc: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      img: process.env.PUBLIC_URL + "./images/icon-sedans.svg",
    },
    {
      id: "2",
      title: "SUVs",
      desc: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      img: process.env.PUBLIC_URL + "./images/icon-suvs.svg",
    },
    {
      id: "3",
      title: "Luxury",
      desc: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      img: process.env.PUBLIC_URL + "./images/icon-luxury.svg",
    },
  ];
  return (
    <div className="App">
      <CardList cardData={cardData} />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
