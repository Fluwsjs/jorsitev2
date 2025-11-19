import Link from 'next/link';
import ProjectPlaceholder from './ProjectPlaceholder';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
  link = '#',
}: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="group block bg-card-bg rounded-2xl overflow-hidden border-glow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative h-64 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <ProjectPlaceholder
            category={category}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-gradient-to-r from-primary/90 to-accent/90 text-neutral-dark px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm glow-primary">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

