import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

function Contact() {
  // Spelling fix: Contact
  return (
    // 'flow-root' ya 'pt-1' lagane se margin collapse ruk jayega
    <div className="w-full min-h-screen bg-[#f1f1f1] flow-root ">
      <div className="container w-full lg:max-w-7xl px-4 mx-auto lg:px-10  my-10 ">
        <h1 className="text-center text-xl lg:text-5xl font-bold text-black">Contact</h1>
        <div>
          <h1 className="text-xl lg:text-4xl mt-15 text-blue-500 tracking-tight font-semibold mb-5">
            Connect with me
          </h1>
          <p className="text-xl text-gray-500">
            If you want to know more about me or my work, or if you would just{" "}
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <section className="flex flex-col sm:flex-col md:flex-row gap-5 justify-between items-center mt-5">
          <div className="left w-full md:w-1/2 px-3 border rounded-lg border-gray-200 pb-5">
            <form className="pr-6">
              <div className="my-6 ">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-gray-900 block mb-2 px-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" text-black outline-none bg-gray-50 border border-gray-700 px-2 py-2 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your name...."
                />
              </div>

              <div className="my-6 ">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-900 block mb-2 px-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" text-black  outline-none bg-gray-50 border border-gray-700 px-2 py-2 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your email...."
                />
              </div>

              <div className="my-6 ">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-900 block mb-2 px-2"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className=" text-black outline-none bg-gray-50 border border-gray-700 px-2 py-2 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your message...."
                />
              </div>
              <div className="flex items-center justify-between px-5">
                <a href="#" className="text-blue-600">
                  Send me email directly ?
                </a>
                <button className="px-8  cursor-pointer py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="right text-black w-full md:w-1/2 border border-gray-200 rounded-lg  flex  flex-col gap-6 items-end  py-11 px-8">
            <h1 className="text-3xl font-bold">Email</h1>
            <Link className="text-blue-600 ">vickyraj563065@gmail.com</Link>

            <h1 className="text-3xl font-bold">Adress</h1>
            <Link className="text-blue-600 flex  flex-col items-end  ">
              Saraswati Vihar, Chakkarpur, <br />
              <p>Mg Road, Guraon</p>
            </Link>

            <h2 className="text-3xl font-bold ">Social</h2>
            <SocialMedia />
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default Contact;
