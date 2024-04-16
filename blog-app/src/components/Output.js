import React, { useContext, useEffect } from "react";
import { Context } from "./Context";

const Output = () => {
  const { blog, setBlog } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-ecom-8f790-default-rtdb.firebaseio.com/blog.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const loadedBlogs = [];

        for (const key in json) {
          loadedBlogs.push({
            blog_id: key,
            img_URL: json[key].img_URL,
            title: json[key].title,
            desc: json[key].desc,
          });
        }

        setBlog(loadedBlogs);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [setBlog, blog]);

  const handleDelete = async (blog_id) => {
    try {
      await fetch(
        `https://react-ecom-8f790-default-rtdb.firebaseio.com/blog/${blog_id}.json`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="flex flex-wrap p-20 h-screen">
      {blog ? (
        blog.map((item) => (
          <li className="p-10 list-none mx-auto" key={item.blog_id}>
            <div className="text-xl font-semibold py-2">{item.title}</div>
            <img
              className="w-56 h-56 rounded-lg"
              src={item.img_URL}
              alt="logo"
            ></img>
            <div className="py-2">{item.desc}</div>
            <div className="flex justify-between">
              <button className="bg-green-500 text-white font-semibold w-20 p-2 rounded-md shadow-md">
                Edit
              </button>
              <button
                className="bg-red-500 text-white font-semibol w-20 p-2 rounded-md shadow-md"
                onClick={() => handleDelete(item.blog_id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="text-6xl mx-auto">Loading Blogs...</p>
      )}
    </div>
  );
};

export default Output;
