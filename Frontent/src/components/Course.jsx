import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-20">
        {/* Header */}
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 leading-relaxed">
            Welcome to our online bookstore, a place made for every reader who loves to learn and grow.
            Here you will find a wide range of useful guides, inspiring stories, and helpful resources
            that can make your journey easier and more enjoyable. We believe that books are not only
            for study but also for fun, growth, and new ideas. Take a moment to explore the titles that
            match your needs and interests. Every book is carefully chosen to bring value, knowledge, and
            a little joy to your life. Start exploring today and enjoy your reading journey with us.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Books */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book
            .filter((item) => item.category === "Paid") // ✅ sirf Paid books
            .map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Course;
