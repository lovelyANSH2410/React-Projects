import React, { useContext } from "react";
import { Context } from "./Store/Context";

const Movie = () => {
  const { movies, setMovies } = useContext(Context);

  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/films/");
    const json = await data.json();
    const movieData = json?.results;
    setMovies(movieData);
  };

  return (
    <div className="text-center mt-20 mb-40">
      <button
        className="border-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
        onClick={fetchData}
      >
        Fetch Movie Data
      </button>
      {movies.map((item) => (
            <div key={item.episode_id}>
              <div className="text-white w-[50%] m-auto mt-10 hover:scale-105 duration-500 border-2 border-white p-6">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <h1 className="text-3xl font-bold">
                    Release: {item.release_date}
                  </h1>
                </div>
                <h3 className="p-2 m-2 w-full ">{item.opening_crawl}</h3>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Movie;
