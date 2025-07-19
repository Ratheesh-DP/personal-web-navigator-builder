import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, Brain, Database, Rocket, Star, ExternalLink } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    { name: "Python", level: "Advanced", category: "Language" },
    { name: "Machine Learning", level: "Intermediate", category: "AI/ML" },
    { name: "Data Science", level: "Intermediate", category: "AI/ML" },
    { name: "TensorFlow", level: "Intermediate", category: "Framework" },
    { name: "PyTorch", level: "Intermediate", category: "Framework" },
    { name: "Django", level: "Intermediate", category: "Framework" },
    { name: "Flask", level: "Intermediate", category: "Framework" },
    { name: "NumPy", level: "Advanced", category: "Library" },
    { name: "Pandas", level: "Advanced", category: "Library" },
    { name: "Scikit-learn", level: "Intermediate", category: "Library" }
  ];

  const projects = [
    {
      title: "Available for Collaboration",
      description: "I'm actively seeking exciting machine learning projects to collaborate on. Whether it's computer vision, NLP, or data analysis, I'm ready to contribute my skills to innovative solutions.",
      tech: ["Python", "ML", "Data Science"],
      status: "Open for Projects"
    },
    {
      title: "AI Model Development",
      description: "Experienced in developing and training machine learning models for various applications including predictive analytics and pattern recognition.",
      tech: ["TensorFlow", "PyTorch", "Scikit-learn"],
      status: "Available"
    },
    {
      title: "Data Analysis Solutions",
      description: "Specialized in extracting insights from complex datasets using advanced statistical methods and visualization techniques.",
      tech: ["Pandas", "NumPy", "Matplotlib"],
      status: "Available"
    }
  ];

  const education = {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "Engineering College",
    status: "Student",
    focus: "AI/ML, Data Science, Python Development"
  };

  return (
    <div className="min-h-screen bg-gradient-starfield">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-nebula">
        <div className="absolute inset-0 bg-gradient-starfield opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-cosmic bg-clip-text text-transparent mb-4">
              Ratheesh D P
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Brain className="text-primary w-6 h-6" />
              <p className="text-2xl md:text-3xl text-muted-foreground">Machine Learning Engineer</p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2 mb-8">
              <Star className="w-4 h-4 mr-2" />
              Student & Future AI Innovator
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
            Passionate about artificial intelligence and data science. Building the future through machine learning, 
            one algorithm at a time. Ready to collaborate on innovative projects that push the boundaries of technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity">
              <Rocket className="w-5 h-5 mr-2" />
              Let's Collaborate
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-8">
            {["about", "skills", "projects", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-all capitalize ${
                  activeSection === section 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        {activeSection === "about" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  I'm a dedicated B.Tech student specializing in Artificial Intelligence and Data Science, 
                  with a passion for machine learning and Python development. My journey in AI has been 
                  driven by curiosity and a desire to solve real-world problems through intelligent solutions.
                </p>
                <p>
                  Currently focused on expanding my expertise in machine learning frameworks like TensorFlow 
                  and PyTorch, while developing practical skills in data analysis and model deployment. 
                  I believe in the power of collaboration and am always eager to work on innovative projects 
                  that challenge conventional thinking.
                </p>
                <p>
                  My goal is to contribute to the advancement of AI technology while building solutions that 
                  make a positive impact on society. I'm particularly interested in computer vision, natural 
                  language processing, and predictive analytics.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-8">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-background rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-cosmic ${
                              skill.level === "Advanced" ? "w-5/6" : 
                              skill.level === "Intermediate" ? "w-2/3" : "w-1/2"
                            }`}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-8">Projects & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <Badge 
                            variant={project.status === "Open for Projects" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Collaborate
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-8">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-2xl mx-auto">
                  <Card className="border-border">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <Database className="w-16 h-16 mx-auto text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                        <p className="text-lg text-muted-foreground mb-4">{education.institution}</p>
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                          {education.status}
                        </Badge>
                      </div>
                      <div className="border-t border-border pt-6">
                        <h4 className="font-semibold mb-3">Areas of Focus</h4>
                        <p className="text-muted-foreground">{education.focus}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-8">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg text-muted-foreground mb-8">
                    Ready to collaborate on exciting machine learning projects? Let's connect and build something amazing together!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Mail className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a 
                          href="mailto:d.p.ratheesh007@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          d.p.ratheesh007@gmail.com
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Github className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h3 className="font-semibold mb-2">GitHub</h3>
                        <a 
                          href="https://github.com/Ratheesh-DP"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Ratheesh-DP
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Linkedin className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/ratheesh-d-p-83b030294"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Connect with me
                        </a>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity">
                      <Mail className="w-5 h-5 mr-2" />
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
