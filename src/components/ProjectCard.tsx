import '@/index.css'

interface ProjectCardProps {
  title: string;
  image: string;
}

const ProjectCard = ({ title, image }: ProjectCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden border border-border hover:-translate-y-2 transition-all duration-300 hover:shadow-[var(--glow-cyan-sm)]">
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5 flex items-center justify-between">
      <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
      <button className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
        View
      </button>
    </div>
  </div>
);

export default ProjectCard;
