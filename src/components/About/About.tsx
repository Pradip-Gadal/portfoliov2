import { Container } from "./styles";
import PradipGadal from "../../assets/PradipGadal.png";
import mathematics from "../../assets/mathematics.png";
import webdevelopment from "../../assets/webdevelopment.png";
import physics from "../../assets/physics.png";
import computer from "../../assets/computer.png";
import science from "../../assets/science.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
         I have dedicated my career to inspiring students to explore the wonders of Physics and Mathematics. With 4 years of teaching experience, I have developed a comprehensive understanding of various learning styles and tailor my teaching methods to meet the diverse needs of my students.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Currnetly, I am a Master's students of Physics at Tribhuvan University, and committed to continuous professional development to stay updated with the latest educational practices and advancements in STEM. My teaching philosophy centers around fostering critical thinking, problem-solving skills, and a genuine curiosity for learning.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Beyond the classroom, I am actively involved in extracurricular activities, such as coaching a math/science club, organizing STEM events, etc further nurturing students' interests and helping them achieve their academic goals.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          <br>
          </br>So, if you need a professional teacher to make a positive impact on students' educational journeys, equipping them with the knowledge and skills they need to succeed in their future endeavors, I am always ready...</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={physics} alt="physics" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={science} alt="science" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={mathematics} alt="mathematics" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={computer} alt="computer" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={webdevelopment} alt="webdevelopment" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={PradipGadal} alt="Pradip Gadal" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
