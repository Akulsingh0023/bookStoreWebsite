import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" 
            alt="Bookstore"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">About Our Bookstore</h1>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to <span className="font-semibold">BookNest</span>, your one-stop
            destination for books of all genres. We believe books are more than just
            pages – they are gateways to imagination, knowledge, and growth.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our mission is to provide readers with a cozy space to discover stories,
            learn new ideas, and connect with the love of reading. Whether you are a
            student, a professional, or a casual reader, we have something special for you.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Explore our wide collection of novels, educational books, self-help,
            and rare editions. At BookNest, we turn reading into an unforgettable experience.
          </p>

          {/* Highlight Box */}
          <div className="p-4 bg-primary text-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">📚 Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Wide range of books across genres</li>
              <li>Affordable pricing & discounts</li>
              <li>Cozy reading environment</li>
              <li>Passionate about literature & learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
