import React, { useEffect, useRef, useState } from "react";

const Input = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const amount = useRef(null);
  const desc = useRef(null);
  const type = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://expense-tracker-dcfac-default-rtdb.firebaseio.com/expenses.json"
        );
        const data = await response.json();
        const loadedExpenses = [];

        for (const key in data) {
          loadedExpenses.push({
            key: data[key].price,
            price: data[key].price,
            description: data[key].description,
            category: data[key].category,
          });
        }
        setExpenses(loadedExpenses);
        setIsLoading(false);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      price: amount.current.value,
      description: desc.current.value,
      category: type.current.value,
    };

    try {
      const response = await fetch(
        "https://expense-tracker-dcfac-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify(newExpense),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save data to Firebase");
      }

      amount.current.value = "";
      desc.current.value = "";
      type.current.value = "";
    } catch (error) {
      console.error("Error saving data to Firebase:", error.message);
    }
  };

  return (
    <>
      <form
        className="w-[50%] flex justify-center mx-auto my-10"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 m-2 border border-gray-400"
          placeholder="Amount spent"
          type="number"
          ref={amount}
        />
        <input
          className="p-2 m-2 border border-gray-400"
          placeholder="Description"
          type="text"
          ref={desc}
        />
        <select ref={type} className="p-2 m-2 border border-gray-400">
          <option>Food</option>
          <option>Fuel</option>
          <option>Shopping</option>
          <option>Grocery</option>
        </select>
        <button className="bg-blue-500 text-white shadow-md rounded-md m-2 p-2 font-semibold">
          Add Expense
        </button>
      </form>
      {isLoading ? (
        <div className="text-3xl mt-10 text-center font-semibold">
          Loading...
        </div>
      ) : (
        <div className="w-[50%] mx-auto flex flex-wrap m-10 p-10">
          {expenses.map((item) => (
            <div
              className="m-5 w-[40%] mx-auto p-5 list-none border border-gray-400 text-xl font-semibold flex"
              key={item.price}
            >
              <div className="m-2 p-2">{item.description}</div>
              <div className="m-2 p-2">{item.category}</div>
              <div className="m-2 p-2">{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Input;
