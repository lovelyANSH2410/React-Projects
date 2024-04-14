import React from "react";

const ContactUS = () => {
  const handleForm = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const contact = e.target.elements.contact.value;

    const contactData = {
      name: name,
      email: email,
      contact: contact,
    };

    await fetch(
      "https://react-ecom-8f790-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    alert('Thanks for reaching out to us, We will get back to you soon.')

    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.contact.value = "";
  };

  return (
    <div className="text-lg text-center text-white p-20 md:w-[70%] w-[100%] m-auto">
      <p className="text-3xl font-bold mb-10 md:mb-10 md:m-10">Contact Us</p>
      <form onSubmit={handleForm}>
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="bg-black text-white p-3 m-2 bg-opacity-50 border-2 border-white"
          type="number"
          name="contact"
          placeholder="Contact"
        />
        <button
          className="border-2 m-2 font-bold border-white p-2 rounded-md text-white hover:scale-105 duration-500 hover:opacity-80"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUS;
