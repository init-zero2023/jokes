import React, {useState} from "react";

function App() {

  const [jokes, setJokes] = useState({
    setup: "Click the button to get jokes",
    delivery: "",
  })


  function  getJokes(){
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(data => setJokes({setup: data.setup, delivery: data.delivery}))
      .catch(err => setJokes(err))
  }

  return (
    <div className="jokeCard">
      <div className="joke">
        <p>{jokes.setup}</p>
        <p>{jokes.delivery}</p>
      </div>
      <button className="moreJokes" onClick={getJokes}>Find Jokes</button>
    </div>
  );
}

export default App;
