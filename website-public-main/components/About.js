import aboutStyle from "../styles/Home.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={aboutStyle.container}>
        <div className={aboutStyle.header}>
          <h1>Who I am?</h1>
          <p>
  Hi! I&#39;m currently a fourth-year Computer Science student at Gdańsk University of Technology, and I love staying active both mentally and physically. Whether it&#39;s hitting the gym, playing football, or discovering new places while traveling, I believe in keeping life dynamic and full of learning.

  At 18, I made the big decision to move abroad for my studies, which has helped me grow into an independent and adaptable person. This experience has shaped not only my language skills but also my ability to embrace challenges with creativity and resilience.

  When it comes to my work, I enjoy solving problems, whether it&#39;s debugging code or brainstorming new solutions. I&#39;m always eager to take on real-world projects and contribute in meaningful ways. Outside of coding, I find balance by staying active and exploring new things, which keeps me motivated and energized.

  If you&#39;re looking for someone who&#39;s driven, quick to learn, and passionate about growth—both personally and professionally—I&#39;m excited to see where we can collaborate!
</p>

          <div className={aboutStyle.footContainer}>
  <div className={aboutStyle.block}>
    <h3>Skills and technologies</h3>
    <ul>
      <li><strong>C/C++</strong> - x86 Computer architecture</li>
      <li><strong>Java</strong> - Spring</li>
      <li><strong>Python</strong> - Numpy, Pandas</li>
      <li><strong>JavaScript</strong> - React</li>
      <li><strong>C#</strong> - .NET</li>
      <li><strong>Bash scripting</strong></li>
      <li><strong>Algorithms and Data Structures</strong> + O notation</li>
    </ul>
  </div>
  <div className={aboutStyle.block}>
    <h3>Other Technologies</h3>
    <ul>
      <li><strong>Linux and Windows</strong></li>
      <li><strong>Docker</strong></li>
      <li><strong>Git</strong></li>
      <li><strong>Databases</strong> (MySQL, Postgres)</li>
      <li><strong>Web Services architecture</strong></li>
      <li><strong>Kubernetes</strong></li>
      <li><strong>Testing techniques</strong></li>
      <li><strong>OOP</strong></li>
    </ul>
  </div>
  <div className={aboutStyle.block}>
    <h3>Soft skills and personal characteristics</h3>
    <ul>
      <li><strong>Effective communication</strong></li>
      <li><strong>Problem-solving and analytical thinking</strong></li>
      <li><strong>Adaptability</strong></li>
      <li><strong>Teamwork and Collaboration</strong></li>
      <li><strong>Curiosity and Willingness to Learn</strong></li>
      <li><strong>Critical Thinking</strong></li>
      <li><strong>Always try to be positive and smile</strong></li>
    </ul>
  </div>
</div>

          {/* <div className={aboutStyle.buttonContainerAbout}>
            <button className={aboutStyle.myButtonAbout}>
              <Link href="/about">Узнать больше</Link>
            </button>
          </div> */}
        </div>
      </div>
  );
};

export default About;
