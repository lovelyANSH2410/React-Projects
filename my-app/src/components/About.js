import React from "react";

const About = () => {
  return (
    <div className="text-lg text-center text-white p-20 md:w-[70%] w-[100%] m-auto">
      <p className="text-3xl font-bold mb-10 md:mb-10 md:m-10">About SpaceX</p>
      <p>
        Our Mission SpaceX was founded in 2002 with the goal of revolutionizing
        space technology, making space exploration more accessible, and
        ultimately enabling humans to become a multi-planetary species. Our
        mission is to reduce the cost of space travel and enable the
        colonization of Mars.
      </p>
      <div className="flex flex-col justify-center">
        <img
          className="m-auto rounded-full w-[20%] mt-20"
          src="https://avatars.githubusercontent.com/u/110022447?v=4"
          alt="logo"
        ></img>
        <h1 className="text-3xl my-2">Shubham Kushwaha</h1>
        <p>Frontend Developer</p>
        <p>Tech Stack: C++, HTML, CSS, JS, REACT, TAILWIND, SQL</p>
        <a
          href="https://github.com/lovelyANSH2410"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            className="w-10 m-auto my-2"
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            href="https://github.com/lovelyANSH2410"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
