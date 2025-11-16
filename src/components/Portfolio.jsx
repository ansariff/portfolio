import { useState } from "react";

const projects = [
  {
    title: "Nike Store",
    image: "/assets/images/project-1.jpg",
    category: "frontend",
    alt: "Nike Store",
    link: "https://github.com/ansariff/Nike-Store",
    description: "Nike Store completed with React + Tailwind CSS."
  },
  {
    title: "Dashboard",
    image: "/assets/images/project-2.png",
    category: "frontend",
    alt: "Dashboard",
    link: "https://github.com/ansariff/Dashboard",
    description: "Student Progress Dashboard."
  },
  {
    title: "Restaurant",
    image: "/assets/images/project-3.jpg",
    category: "frontend",
    alt: "Restaurant",
    link: "https://github.com/ansariff/Restaurant",
    description: "Simple Restaurant Food Ordering Site."
  },
  {
    title: "Pokemon Card",
    image: "/assets/images/project-4.png",
    category: "frontend",
    alt: "Pokemon Card",
    link: "https://github.com/ansariff/Pokemon-Card",
    description: "Generate Pokemon Random Card."
  },
  {
    title: "Password Strength Checker",
    image: "/assets/images/project-5.png",
    category: "python",
    alt: "Password Strength Checker",
    link: "https://github.com/ansariff/Password-Strength-Checker",
    description: "Python-based GUI app to evaluate password strength."
  },
  {
    title: "Tic Tac Toe Game",
    image: "/assets/images/project-6.png",
    category: "android",
    alt: "Tic Tac Toe Game",
    link: "https://github.com/ansariff/Tic-Tac-Toe-Game",
    description: "Tic Tac Toe Android Game."
  },
  {
    title: "INGO",
    image: "/assets/images/project-7.png",
    category: "frontend",
    alt: "INGO",
    link: "https://github.com/ansariff/INGO",
    description: "Website for motors."
  },
  {
    title: "Portfolio",
    image: "/assets/images/project-9.png",
    category: "frontend",
    alt: "Portfolio",
    link: "https://github.com/ansariff/portfolio",
    description: "Personal portfolio website."
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Python", value: "python" },
  { label: "Android", value: "android" },
];

export default function Portfolio() {
  const [selected, setSelected] = useState("all");

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat.value}>
              <button
                className={
                  "" + (selected === cat.value ? "active" : "")
                }
                data-filter-btn
                onClick={() => setSelected(cat.value)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              {categories.find((c) => c.value === selected)?.label || "Select category"}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            {categories.map((cat) => (
              <li className="select-item" key={cat.value}>
                <button data-select-item onClick={() => setSelected(cat.value)}>
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className={"project-item active"}
              data-filter-item
              data-category={project.category}
              key={index}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{categories.find(c => c.value === project.category)?.label || project.category}</p>
                <p className="project-desc" style={{color: '#aaa', fontSize: '13px', marginTop: '5px'}}>{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
