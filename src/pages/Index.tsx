import Navbar from "@/components/Navbar";
import SkillBar from "@/components/SkillBar";
import CircleSkill from "@/components/CircleSkill";
import ProjectCard from "@/components/ProjectCard";

import profilePhoto from "@/assets/profile-photo.jpg";
import flavourcraft from "@/assets/flavourcraft.jpg";
import fitquest from "@/assets/fitquest.jpg";
import community from "@/assets/community.jpg";
import nexus from "@/assets/nexus.png";
import resturent from "@/assets/resturent.png";
import '@/index.css'
import ContactForm from "@/components/ContactForm.tsx";


const techSkills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 80 },
  { name: "Tailwind", percent: 50},
  { name: "JavaScript", percent: 45 },
  { name: "Python", percent: 50 },
  { name: "React", percent: 75 },
  { name: "Java", percent: 75},
];

const proSkills = [
  { name: "Creativity", percent: 80 },
  { name: "Communication", percent: 90 },
  { name: "Problem Solving", percent: 76 },
  { name: "Team Working", percent: 85 },
];

const services = [
  {
    title: "UI/UX Design",
    desc: "Professional UI/UX design services focused on intuitive, aesthetic and functional user interfaces that are visually appealing and effective in achieving your business goals.",
  },
  {
    title: "Graphic Design",
    desc: "Creative graphic design services that bring your ideas to life into stunning visual masterpieces, ensuring each design effectively conveys your message.",
  },
  {
    title: "Frontend Dev",
    desc: "Frontend development focused on creating attractive, responsive user interfaces with HTML, CSS, JavaScript and React that function well across devices and browsers.",
  },
  {
    title: "Backend Dev",
    desc: "Backend development focused on building scalable RESTful APIs using Java and the Spring Boot, with CRUD operations, JPA for database management, secure authentication using JWT and Spring Security, and efficient data handling."
  },
];

const projects = [
  { title: "FlavourCraft", image: flavourcraft, link: "https://food-store-gamma.vercel.app/" },
  { title: "FitQuest", image: fitquest, link: "https://customer-fitness.vercel.app/" },
  { title: "UFH Community", image: community, link: "https://ufh-community.vercel.app/" },
  { title: "Nexus Store", image: nexus, link: "https://nexus-wanga-dev.vercel.app/"},
  { title: "Cafe Picobella", image: resturent, link: "https://picobella.netlify.app/"}
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <p className="text-muted-foreground text-lg mb-2">Hello, it's Me</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary text-glow mb-4">
              Wanga Somhlaba
            </h1>
            <p className="text-xl text-foreground font-medium mb-1">Data Science Enthusiast | Full Stack Web Developer</p>
            <p className="text-muted-foreground">Computer Science Student</p>
            <div>
              <a
                  href="https://github.com/030817SOM"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300 mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              <a
                  href="https://linkedin.com/in/https://www.linkedin.com/in/wanga-somhlaba/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300 mt-3 inline-flex items-center gap-2 text-sm font-semibold ml-6"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="/resume/Wanga Somhlaba Resume.pdf" download className="bg-primary rounded-full p-2  hover:text-primary transition-colors duration-300 mt-3 inline-flex items-center gap-2 text-sm font-bold ml-6">
                 Download CV
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Wanga Somhlaba"
              width={512}
              height={512}
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover animate-glow-pulse"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <img
            src={profilePhoto}
            alt="Wanga Somhlaba"
            loading="lazy"
            width={512}
            height={512}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-[var(--glow-cyan-sm)] flex-shrink-0"
          />
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hi, I'm <span className="text-foreground font-semibold">Wanga Somhlaba</span>, a Front-End Developer and Web Designer from <span className="text-foreground font-semibold">Bizana, Eastern Cape</span>. I focus on building clean, modern, and responsive websites using HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I started my journey through university and continued to grow by teaching myself outside the classroom — a combination that's given me both structure and flexibility in how I approach challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm often exploring topics like <span className="text-foreground font-semibold">machine learning</span>, or just experimenting with new tools and ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-center mb-14">
            My Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-[var(--glow-cyan-sm)]"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14 text-center">My Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-semibold text-foreground underline underline-offset-4 decoration-primary mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {techSkills.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground underline underline-offset-4 decoration-primary mb-8 text-center">
                Professional Skills
              </h3>
              <div className="grid grid-cols-2 gap-8 justify-items-center">
                {proSkills.map((s) => (
                  <CircleSkill key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-right mb-14">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-14">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-6">Contact Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Let's work together. </span>
                I'm glad you've visited my portfolio! If you have any questions, suggestions, or would like to collaborate, please feel free to contact me. I will endeavor to reply to your message as soon as possible.
              </p>
            </div>
            <ContactForm/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-4">
        <p className="text-center text-sm font-semibold text-foreground">
          Developed by Wanga Somhlaba
        </p>
      </footer>
    </div>
  );
};

export default Index;
