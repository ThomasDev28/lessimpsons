import React from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';


const defaultSimpsons = {quote:"Ahh! Sweet liquor eases the pain.",
character:"Troy McClure",
image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
characterDirection:"Right"};
 

function App() {
  const [MontreSimpson, setMontreSimpson] = React.useState(defaultSimpsons);
    const mySimpsons = () => {
    
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
     .then((response) => response.data)
    
        .then((data) => {
          console.log(data)
    
          setMontreSimpson(data[0]);
    
        });
    
    };
    
  return (
    <div className="App">
     <QuoteCard {...MontreSimpson} />
     <button onClick= {mySimpsons}>Famille Simpsons uniquement</button>
    </div>
  );
}

export default App;

