
import React from 'react';
import Counter from './components/Counter';
import Products from './components/Products';

const handleAddToCartClick = (title) => {
        alert("Add To Cart Clicked for " + title);
    }

function App() {
   const [count,setCount] = React.useState(5);
    const handleIncrement = () => {
        console.log("Increment called");
        setCount(count+1);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
  return (
    <div>
      <h1 style={{backgroundColor: "Red"}}>components example</h1>
      <Counter count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
      <Products  count={count} title="Audi" price="500" onAddToCart={handleAddToCartClick}/>
      <Products  count={count} title="Civic" price="800" onAddToCart={handleAddToCartClick}/>
      <Products  count={count} title="Suzuki" price="400" onAddToCart={handleAddToCartClick}/>
    </div>
  );
}

export default App;
