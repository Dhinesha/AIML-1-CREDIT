const { useMemo, useState } = React;

      function ReactFeaturesApp() {
        const baseSkills = [
          "HTML",
          "CSS",
          "Java",
          "Python",
          "SQL",
          "Power BI",
          "UiPath",
          "GitHub",
        ];

        const [query, setQuery] = useState("");
        const [tasks, setTasks] = useState([
          { id: 1, text: "Complete AI mini project", done: false },
          { id: 2, text: "Practice DSA 1 hour", done: true },
        ]);
        const [newTask, setNewTask] = useState("");

        const filteredSkills = useMemo(() => {
          const keyword = query.trim().toLowerCase();
          if (!keyword) {
            return baseSkills;
          }
          return baseSkills.filter((skill) =>
            skill.toLowerCase().includes(keyword),
          );
        }, [query]);

        const completedCount = tasks.filter((task) => task.done).length;

        const addTask = () => {
          const taskText = newTask.trim();
          if (!taskText) {
            return;
          }
          setTasks((prev) => [
            ...prev,
            { id: Date.now(), text: taskText, done: false },
          ]);
          setNewTask("");
        };

        const toggleTask = (id) => {
          setTasks((prev) =>
            prev.map((task) =>
              task.id === id ? { ...task, done: !task.done } : task,
            ),
          );
        };

        return (
          <div className="react-card-grid">
            <div className="react-card">
              <h3 className="react-card-title">Skill Search</h3>
              <p className="react-muted">Filter your skills instantly.</p>
              <input
                className="react-input"
                type="text"
                placeholder="Search a skill..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <ul className="react-list">
                {filteredSkills.map((skill) => (
                  <li className="react-list-item" key={skill}>
                    <span>{skill}</span>
                    <span className="react-pill">Matched</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="react-card">
              <h3 className="react-card-title">Progress Tracker</h3>
              <p className="react-muted">
                {completedCount} / {tasks.length} tasks completed
              </p>
              <input
                className="react-input"
                type="text"
                placeholder="Add a learning task"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
              />
              <button className="react-btn" type="button" onClick={addTask}>
                Add Task
              </button>
              <ul className="react-list">
                {tasks.map((task) => (
                  <li className="react-list-item" key={task.id}>
                    <span>{task.text}</span>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                      aria-label={"Toggle task " + task.text}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      }

      function ReactProjectsApp() {
        const projects = [
          {
            id: 1,
            title: "Screen Recorder Application",
            category: "web",
            summary:
              "Featured project that captures on-screen activity with simple controls.",
            stack: "HTML, CSS, JavaScript",
          },
          {
            id: 2,
            title: "DDoS Attack Prevention Website (OpenWeaver)",
            category: "web",
            summary:
              "Web security awareness and prevention flow for traffic attack scenarios.",
            stack: "Frontend + Security Concepts",
          },
          {
            id: 3,
            title: "AgrogaurdAi (Farmer deases predict Agent)",
            category: "ai",
            summary:
              "AI-driven farming support to assist early disease prediction workflows.",
            stack: "AI/ML, Data",
          },
          {
            id: 4,
            title: "Energy Consumption Dashboard",
            category: "data",
            summary:
              "Interactive Power BI dashboard for energy trend analysis.",
            stack: "Power BI",
          },
          {
            id: 5,
            title: "Background Remover Automation",
            category: "automation",
            summary:
              "UiPath automation flow for repetitive background removal tasks.",
            stack: "UiPath RPA",
          },
          {
            id: 6,
            title: "E-commerce Website Design",
            category: "web",
            summary: "Modern storefront wireframes and flows built in Figma.",
            stack: "Figma UX/UI",
          },
        ];

        const [filter, setFilter] = useState("all");
        const categories = ["all", "web", "ai", "data", "automation"];

        const visibleProjects =
          filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter);

        const featuredProject = projects[0];

        return (
          <div>
            <div className="react-project-highlight">
              <h3 className="react-card-title">
                Featured: {featuredProject.title}
              </h3>
              <p className="react-muted">{featuredProject.summary}</p>
              <p className="react-muted">Stack: {featuredProject.stack}</p>
            </div>

            <div className="react-project-toolbar">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    "react-chip" + (filter === category ? " active" : "")
                  }
                  onClick={() => setFilter(category)}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="react-project-grid">
              {visibleProjects.map((project) => (
                <div className="react-project-card" key={project.id}>
                  <h4>{project.title}</h4>
                  <p>{project.summary}</p>
                  <p className="react-muted">{project.stack}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }

      const reactRootElement = document.getElementById("react-features-root");
      if (reactRootElement) {
        const reactRoot = ReactDOM.createRoot(reactRootElement);
        reactRoot.render(<ReactFeaturesApp />);
      }

      const reactProjectsRootElement = document.getElementById(
        "react-projects-root",
      );
      if (reactProjectsRootElement) {
        const reactProjectsRoot = ReactDOM.createRoot(reactProjectsRootElement);
        reactProjectsRoot.render(<ReactProjectsApp />);
      }
