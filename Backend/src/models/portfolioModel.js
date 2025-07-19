// Fake database
let projects = [
  { id: 1, title: "My Portfolio", stack: "MERN" },
  { id: 2, title: "Weather App", stack: "React + API" },
];

// Model functions simulate DB queries

const findAllProjects = () => {
  return projects;
};

const findProjectById = (id) => {
  return projects.find((p) => p.id === parseInt(id));
};

const createProject = (data) => {
  const newProject = {
    id: projects.length + 1,
    ...data,
  };
  projects.push(newProject);
  return newProject;
};

module.exports = {
  findAllProjects,
  findProjectById,
  createProject,
};
