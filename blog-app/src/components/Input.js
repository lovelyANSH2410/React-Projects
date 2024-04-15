import React, { useRef } from "react";

const Input = (props) => {
  const img_URL = useRef(null);
  const title = useRef(null);
  const desc = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBlog = {
      img_URL: img_URL.current.value,
      title: title.current.value,
      desc: desc.current.value,
    };

    await fetch(
      "https://react-ecom-8f790-default-rtdb.firebaseio.com/blog.json",
      {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    props.handleForm();
  };

  return (
    <div>
      <form
        className="text-center border-2 border-green-700 p-10 bg-green-300"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-green-700 bg-green-200 p-2 m-2"
          placeholder="Image URL"
          ref={img_URL}
        />
        <input
          className="border-2 border-green-700 bg-green-200 p-2 m-2"
          placeholder="Title"
          ref={title}
        />
        <input
          className="border-2 border-green-700 bg-green-200 p-2 m-2"
          placeholder="Description"
          ref={desc}
        />
        <button className="border-2 border-green-700 bg-green-500 p-2 m-2 font-semibold text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
