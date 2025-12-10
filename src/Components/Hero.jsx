import profile from "../assets/profile.jpg";
import resume from "../assets/Rithivik_Resume.pdf"; // <-- Add your resume file

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          {/* 1. Hello, I'm */}
          <h3 className="hello">Hello, I'm</h3>

          {/* 2. CHIVUKULA SAI RITHIVIK */}
          <h1 className="gradient-text hero-name">
            CHIVUKULA SAI RITHIVIK
          </h1>

          {/* 3. Aspiring AI & Machine Learning Engineer */}
          <p className="hero-role">
            Software Developer | Tech Enthusisast | Learning by Building
          </p>

          {/* 4. The summary paragraph (Moved from summary-section) */}
          <p>
            I'm a Computer Science student passionate about turning ideas into real applications. 
            With hands-on experience in <b>Deep Learning</b>, <b>Computer Vision</b>,
            <b> Time-Series Forecasting</b>, and <b>NLP</b>, I also build full-stack 
            <b> Web Development</b> applications and work with <b>object-oriented software design</b>. 
            I learn best by building — from predictive maintenance systems to scalable web apps and 
            autonomous navigation solutions. Every project helps me level up my engineering mindset 
            and explore what's possible when <b>clean code</b>, <b>smart algorithms</b>, 
            and <b>real-world challenges</b> come together.
          </p>

          {/* 5. Buttons (Now comes after the paragraph) */}
          <div className="hero-buttons">

            {/* DOWNLOAD RESUME BUTTON */}
            <a href={resume} download="Sai-Rithivik-Resume" className="btn-download">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="Profile" className="hero-img clean-img" />
        </div>
      </section>

      {

      }
    </>
  );
}