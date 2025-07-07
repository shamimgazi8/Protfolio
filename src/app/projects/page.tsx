import projects from "../../../data/projects";
import ProjectCard from "../@componants/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          All Projects
        </h1>
        <p className="text-gray-400 mt-4">Explore my full portfolio of work</p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
