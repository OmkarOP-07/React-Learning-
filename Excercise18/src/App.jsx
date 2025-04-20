import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [click, setclick] = useState(0);
  const [cards, setcards] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //fetch request to call an api
      .then((response) => response.json()) // then is used used to handle the promise
      //response obj contains meta data
      .then((json) => {
        //.json is a method used to convert the obj body to javascript obj
        console.log(json);
        setcards(json);
      });
  }, [click]);

  // completed: false;
  // id: 1;
  // title: "delectus aut autem";
  // userId: 1;

  return (
    <>
      <main >
        <div className="headline justify-center flex">
          <button className="count border bg-blue-500 text-white p-2 rounded-2xl w-fit content-center mt-2"onClick={() => {setclick((click) => click + 1);}}>
            Welcome Back Chief !
          </button>
        </div>
      
        <div className="container flex flex-wrap gap-5 justify-center text-white w-[200rem]">
          {cards.length > 0 ? (
            cards.map((card) => (
              <div
                key={card.id}
                className="card border  p-2 my-2 inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[25%] mx-3 rounded-2xl hover:scale-105 transition-transform duration-300 hover:from-purple-600 hover:to-pink-600 animate-gradient"
              >
                <p className="text-center text-2xl">
                  <strong>Title:</strong> {card.title}
                </p>
                <div className="info m-2">
                  <p>
                    <strong>Id:</strong> {card.id}
                  </p>
                  <p>
                    <strong>User ID:</strong> {card.userId}
                  </p>
                  <p>
                    <strong>Body:</strong> {card.body}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No Data Available</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
