import Card from "./Card";
import Carousel from "./Carousel";
import jsonData from "./data.json";

function App() {
  
  const { slides } = jsonData;
  const card = slides.map((slide, index) => ({
    key: index.toString(), // Use index as key, converted to string'
    content: (
      <Card
        props = {slide}
      />
    )
  }));
  return (
    <>
      <h1>FOOD MENU</h1>
   
      <div className="">
        <Carousel
          cards={card}
          height="0"
          width="80%"
          margin="100px"
          offset={90}
          showArrows={true}
        />
    
      </div>
    </>
  );
}

export default App;
