import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" 
            alt="Courses"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">About Our Courses</h1>
          <p className="text-lg mb-4 leading-relaxed">
            At <span className="font-semibold">BookNest</span>, we offer a balanced collection of <strong>paid and free learning resources</strong> 
            to support students, professionals, and lifelong learners.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Our <strong>paid collection</strong> includes core computer science and advanced topics like 
            <em> Operating Systems, Computer Networks, Artificial Intelligence, Web Development,</em> and 
            <em> Data Analytics</em>. These are designed for learners who want in-depth structured knowledge 
            at affordable pricing.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Alongside, our <strong>free resources</strong> focus on <em>Machine Learning, Cyber Security, 
            Cloud Computing, Mobile Development,</em> and <em>Mathematics for Computer Science</em>, empowering 
            students to explore emerging technologies without cost barriers.
          </p>

          {/* Highlight Box for Courses */}
          <div className="p-4 bg-primary text-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">🎓 Why Choose Our Courses?</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Diverse learning paths – from C Programming to AI & Data Analytics</li>
              <li>Affordable & transparent pricing (starting at just $150)</li>
              <li>Free access to modern technologies like ML, Cloud & Cyber Security</li>
              <li>Future-ready skills curated for industry & academics</li>
              <li>Passion for making learning accessible and enjoyable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
