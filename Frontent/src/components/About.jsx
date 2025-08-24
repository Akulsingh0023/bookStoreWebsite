import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white px-6 py-16 space-y-24 font-serif">

      {/* Section 1: Image Left, Content Right */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Courses"
            className="rounded-3xl shadow-xl w-full max-w-xl md:max-w-2xl"
          />
        </div>
        <div className="text-[16px] md:text-[18px] leading-relaxed">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-primary"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            About Our Courses
          </h1>
          <p className="mb-4">
            At <span className="font-semibold">BookNest</span>, we provide a carefully curated collection of both paid and free learning resources, designed to support students, professionals, and lifelong learners in achieving their educational goals.
          </p>
          <p className="mb-4">
            Our <strong>paid courses</strong> cover essential computer science subjects as well as advanced topics such as <em>Operating Systems, Computer Networks, Artificial Intelligence, Web Development,</em> and <em>Data Analytics</em>. These courses are structured for learners seeking in-depth knowledge at affordable pricing.
          </p>
          <p className="mb-6">
            Additionally, our <strong>free resources</strong> focus on emerging areas like <em>Machine Learning, Cyber Security, Cloud Computing, Mobile Development,</em> and <em>Mathematics for Computer Science</em>, enabling students to explore modern technologies without financial barriers.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="order-1 md:order-1 flex flex-col justify-center text-[16px] md:text-[18px] leading-relaxed">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            🎓 Why Choose Our Courses?
          </h2>
          <p className="mb-5">
            Diverse learning paths – from C Programming to AI & Data Analytics
          </p>
          <p className="mb-5">
            Affordable & transparent pricing (starting at just $150)
          </p>
          <p className="mb-5">
            Free access to modern technologies like ML, Cloud & Cyber Security
          </p>
          <p className="mb-5">
            Future-ready skills curated for industry & academics
          </p>
          <p>
            Passion for making learning accessible and enjoyable
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Modern Classroom"
            className="rounded-3xl shadow-xl w-full max-w-xl md:max-w-2xl"
          />
        </div>
      </div>

    </div>
  );
}

export default About;
