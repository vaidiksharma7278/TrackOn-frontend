import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <main className="flex flex-col items-center justify-center p-10 rounded-3xl">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="mb-4 text-3xl font-bold text-center lg:text-5xl">
             About Us
            </h1>
            <p className="text-lg font-medium text-center">
              This platform is build for the help of many developers
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center -m-4">
            <div className="w-full p-4 lg:w-1/4">
              <div className="flex flex-col items-center h-full text-center">
                <img
                  alt="vaidik sharma"
                  className="flex-shrink-0 object-cover object-center w-full h-56 mb-4 rounded-lg"
                  src="https://media.licdn.com/dms/image/C5603AQEy58bA1Di6eA/profile-displayphoto-shrink_200_200/0/1629308884013?e=1715817600&v=beta&t=t3bAQjWiUc4qYuNwPd7V7wEKXgLi2sbHfinTKa0uZK0"
                />
                <div className="w-full">
                  <h2 className="text-lg font-medium title-font textWhite">
                    Vaidik Sharma
                  </h2>
                  <h3 className="mb-3 text-gray-500">Full-Stack Developer</h3>
                  <p className="mb-4">
                    Friendly neighborhood developer. Helping people turn their
                    ideas into sites & apps that work.
                  </p>
                  <span className="flex flex-wrap items-center justify-center gap-2 text-xl">
                    <a
                      href="https://github.com/vaidiksharma7278"
                      target="_blan"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vaidik10/"
                      target="_blan"
                    >
                      <FaLinkedinIn />
                    </a>
                    
                  </span>
                </div>
              </div>
            </div>
           
             
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
