import React from "react";

const AddMovieForm = (props) => {
  const handleForm = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const openingText = e.target.elements.openingText.value;
    const releaseDate = e.target.elements.releaseDate.value;

    const newMovie = {
      title: title,
      opening_crawl: openingText,
      release_date: releaseDate,
    };

    await fetch(
      "https://react-ecom-8f790-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    props.toggleForm();
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="text"
          name="openingText"
          placeholder="Opening Text"
        />
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="text"
          name="releaseDate"
          placeholder="Release: YYYY-MM-DD"
        />
        <button
          className="border-2 m-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
