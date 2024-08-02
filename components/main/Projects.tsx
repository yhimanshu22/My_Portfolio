import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          githubUrl="https://justwrite-yhimanshu220456.vercel.app/"
          src="/NextWebsite.png"
          title="JustWrite App"
          description="Unleash your creativity! Share your ideas, thoughts, and knowledge with a vibrant community."
        />
        <ProjectCard
          githubUrl="https://blood-bank-henna.vercel.app/login"
          src="/CardImage.png"
          title="Blood Bank App"
          description="Make a difference today! Donate blood and help those in need with just a few clicks."
        />
        <ProjectCard
          githubUrl="https://github.com/yhimanshu22/feedback_taker"
          src="/SpaceWebsite.png"
          title="FeedBack Taker App"
          description="Voice your thoughts anonymously! Provide honest feedback and help others improve."
        />
        <ProjectCard
          githubUrl="https://github.com/yhimanshu22/feedback_taker"
          src="/SpaceWebsite.png"
          title="TrendFit App"
          description="Stay ahead of the curve! Discover and track the latest fitness trends and tips."
        />
        <ProjectCard
          githubUrl="https://github.com/yhimanshu22/feedback_taker"
          src="/SpaceWebsite.png"
          title="NavaRatna Bank"
          description="Manage your finances with ease! Securely handle your transactions and account details."
        />
      </div>

    </div>
  );
};

export default Projects;
