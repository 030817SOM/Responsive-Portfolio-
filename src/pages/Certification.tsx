import Navbar from '@/components/Navbar'
import { Award } from "lucide-react";


const certifications = [
  {
    title: "Basics of Network Layer Protocols",
    issuer: "HUAWEI",
    date: "2025",
    description: "An introductory course covering fundamental network layer protocols, including IP, ICMP, and routing basics. This certification demonstrates a foundational understanding of how data is transmitted across networks and the role of key protocols in ensuring reliable communication.",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="container">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary text-glow text-center mb-4">
            My Certifications
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            A collection of certifications I've earned throughout my learning journey in software development, design, and machine learning.
          </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-card border border-border rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-[var(--glow-cyan-sm)] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {cert.description}
                </p>
                <p className="text-xs text-muted-foreground mt-4 pt-3 pl-4 pb-3 border-t border-border">
                  Earned: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
       </section>

       <footer className="bg-secondary py-4">
        <p className="text-center text-sm font-semibold text-foreground">
          Developed by Wanga Somhlaba
        </p>
      </footer>
    </div>
  )
}

export default Certifications;