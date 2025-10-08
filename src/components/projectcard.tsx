"use client";
import { Project } from "@/data/project";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Heart } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.a
      href={project.behanceUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl aspect-[9/8] sm:aspect-[16/10] cursor-pointer block"
    >
      {/* Project Image */}
      <div className="absolute inset-0">
        <Image
          src={project.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={project.title}
          className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Persistent Black Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className=" transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className=" text-sm font-medium text-white/80 mb-2">
            {project.category}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{project.appreciations}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{project.views}</span>
            </div>
          </div>
        </div>

        {/* Hover Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>

      {/* Border Animation */}
      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-2xl transition-all duration-300" />
    </motion.a>
  );
};
