export default function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">IIT Delhi — B.Tech Civil Engineering</h4>
            <span>2022 — Present</span>
            <p className="timeline-text">
              Currently pursuing my Bachelor's degree at IIT Delhi with a passion for software development alongside core engineering.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Secondary School</h4>
            <span>2020 — 2022</span>
            <p className="timeline-text">
              Completed 12th grade with Physics, Chemistry, and Mathematics from New Delhi.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Freelance Web Developer</h4>
            <span>2023 — Present</span>
            <p className="timeline-text">
              Designed and developed custom websites and full-stack applications for small businesses and student-led startups.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Open Source Contributor</h4>
            <span>2023 — Present</span>
            <p className="timeline-text">
              Contributed to frontend and backend features on GitHub-based React, Node.js, and Python projects.
            </p>
          </li>
        </ol>
      </section>

      <section className="skills">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {[
            { name: 'HTML/CSS', level: '95%' },
            { name: 'JavaScript', level: '90%' },
            { name: 'React.js', level: '85%' },
            { name: 'Node.js & Express', level: '80%' },
            { name: 'MongoDB / SQL', level: '75%' },
            { name: 'C++ / Python', level: '80%' },
            { name: 'Git & GitHub', level: '90%' }
          ].map((skill, i) => (
            <li className="skills-item" key={i}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
