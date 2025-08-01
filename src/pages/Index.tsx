import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, Github, Linkedin, Code, Brain, Database, Rocket, Star, ExternalLink, 
  Download, Award, Calendar, MapPin, Phone, Globe, BookOpen, Trophy,
  Target, Zap, Coffee, Users, TrendingUp, ChevronDown, Menu, X,
  Terminal, Server, Cloud, GitBranch, Cpu, Eye, BarChart3
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Machine Learning Engineer",
    "AI Developer", 
    "Data Scientist",
    "Python Developer",
    "Future Tech Innovator"
  ];

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole];
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(role.slice(0, i));
      i++;
      if (i > role.length) {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [currentRole]);

  const skills = [
    { name: "Python", level: 90, category: "Programming", icon: "🐍" },
    { name: "Machine Learning", level: 85, category: "AI/ML", icon: "🤖" },
    { name: "TensorFlow", level: 80, category: "Framework", icon: "🧠" },
    { name: "PyTorch", level: 78, category: "Framework", icon: "🔥" },
    { name: "Data Science", level: 85, category: "Analytics", icon: "📊" },
    { name: "Deep Learning", level: 82, category: "AI/ML", icon: "🔬" },
    { name: "NLP", level: 75, category: "AI/ML", icon: "💬" },
    { name: "Computer Vision", level: 80, category: "AI/ML", icon: "👁️" },
    { name: "Django", level: 85, category: "Web Dev", icon: "🌐" },
    { name: "Flask", level: 88, category: "Web Dev", icon: "⚡" },
    { name: "NumPy", level: 90, category: "Library", icon: "🔢" },
    { name: "Pandas", level: 92, category: "Library", icon: "🐼" },
    { name: "Scikit-learn", level: 88, category: "Library", icon: "📈" },
    { name: "SQL", level: 85, category: "Database", icon: "🗄️" },
    { name: "Git", level: 80, category: "Tools", icon: "📝" },
    { name: "Docker", level: 70, category: "DevOps", icon: "🐳" }
  ];

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a sophisticated recommendation engine using collaborative filtering and deep learning, achieving 94% accuracy for user preferences prediction.",
      tech: ["Python", "TensorFlow", "Pandas", "Flask", "MongoDB"],
      type: "Machine Learning",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { users: "10K+", accuracy: "94%", performance: "2x faster" }
    },
    {
      title: "Computer Vision Object Detection",
      description: "Developed real-time object detection system using YOLO v8, capable of identifying 80+ objects with 89% mAP accuracy.",
      tech: ["PyTorch", "OpenCV", "YOLO", "Python", "FastAPI"],
      type: "Computer Vision", 
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { objects: "80+", accuracy: "89%", fps: "30 FPS" }
    },
    {
      title: "NLP Sentiment Analysis Platform",
      description: "Created advanced sentiment analysis tool for social media monitoring using BERT and transformer models.",
      tech: ["BERT", "Transformers", "Python", "Django", "PostgreSQL"],
      type: "Natural Language Processing",
      status: "In Progress", 
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { languages: "5+", accuracy: "91%", speed: "1000/sec" }
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Built interactive dashboard for business intelligence with real-time data visualization and predictive modeling.",
      tech: ["Python", "Streamlit", "Plotly", "Scikit-learn", "MySQL"],
      type: "Data Science",
      status: "Completed",
      demo: "#", 
      github: "https://github.com/Ratheesh-DP",
      featured: false,
      metrics: { accuracy: "87%", queries: "1M+", time: "Real-time" }
    },
    {
      title: "Chatbot with RAG Architecture",
      description: "Developed intelligent chatbot using Retrieval-Augmented Generation for customer support automation.",
      tech: ["LangChain", "Vector DB", "OpenAI", "Python", "FastAPI"],
      type: "AI/NLP",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP", 
      featured: false,
      metrics: { resolution: "85%", response: "< 2s", satisfaction: "4.7/5" }
    }
  ];

  const experience = [
    {
      role: "Machine Learning Engineer Intern",
      company: "Tech Innovation Labs",
      period: "Jun 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      description: "Developed and deployed ML models for predictive analytics, contributing to a 25% improvement in model accuracy.",
      achievements: [
        "Built recommendation systems using collaborative filtering",
        "Implemented computer vision models for object detection",
        "Optimized model performance reducing inference time by 35%"
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Digital Solutions Corp",
      period: "Dec 2023 - May 2024", 
      location: "Coimbatore, India",
      type: "Internship",
      description: "Developed web applications and APIs using Python frameworks, serving 10K+ active users.",
      achievements: [
        "Built scalable Flask applications with RESTful APIs",
        "Implemented data processing pipelines using Pandas",
        "Created automated testing suites improving code quality"
      ]
    },
    {
      role: "AI Research Assistant",
      company: "Sri Shakthi Institute of Engineering",
      period: "Jan 2024 - Present",
      location: "Coimbatore, India", 
      type: "Research",
      description: "Conducting research on deep learning applications in computer vision and NLP.",
      achievements: [
        "Published research on novel CNN architectures",
        "Developed sentiment analysis models with 92% accuracy",
        "Mentored junior students in ML projects"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      period: "2023 - 2027",
      gpa: "8.5/10",
      status: "3rd Year Student",
      coursework: [
        "Machine Learning & Deep Learning",
        "Computer Vision & Image Processing", 
        "Natural Language Processing",
        "Data Structures & Algorithms",
        "Statistics & Probability Theory",
        "Database Management Systems",
        "Software Engineering & Design Patterns",
        "Neural Networks & AI Ethics"
      ],
      projects: [
        "Final Year Project: Advanced Computer Vision System",
        "Research: Deep Learning for Medical Image Analysis",
        "Capstone: AI-Powered Smart Agriculture System"
      ]
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Government Higher Secondary School",
      period: "2021 - 2023",
      gpa: "92%",
      status: "Completed",
      coursework: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science"
      ]
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      organization: "Government of India",
      date: "2024",
      description: "Selected among top 10 teams nationwide for AI-based solution",
      icon: "🏆"
    },
    {
      title: "Python Programming Certification", 
      organization: "HackerRank",
      date: "2024",
      description: "5-star rating in Python with top 5% performance",
      icon: "🎓"
    },
    {
      title: "Machine Learning Specialization",
      organization: "Coursera (Stanford)",
      date: "2024", 
      description: "Completed Andrew Ng's ML course with 98% score",
      icon: "📄"
    },
    {
      title: "College Technical Symposium Winner",
      organization: "Sri Shakthi Institute",
      date: "2024",
      description: "1st place in AI/ML project competition",
      icon: "🚀"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2023-Present",
      description: "Contributing to ML libraries and frameworks",
      icon: "💻"
    },
    {
      title: "Dean's List Recognition",
      organization: "Sri Shakthi Institute",
      date: "2023-2024",
      description: "Academic excellence recognition for consecutive semesters",
      icon: "⭐"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", icon: "📈" },
    { label: "Lines of Code", value: "50K+", icon: "💻" },
    { label: "Models Trained", value: "30+", icon: "🤖" },
    { label: "Problems Solved", value: "500+", icon: "🧩" }
  ];

  const navigationSections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-starfield">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Ratheesh D P
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="min-h-screen flex items-center justify-center bg-gradient-nebula pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 animate-pulse">
                <Star className="w-4 h-4 mr-2" />
                Available for FAANG Opportunities
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Ratheesh D P
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-4xl text-muted-foreground">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                Building the future with AI and Machine Learning. Passionate about creating intelligent solutions 
                that solve real-world problems and drive innovation in technology.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("projects")}>
                  <Rocket className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        {activeSection === "about" && (
          <section className="mb-16">
            <Card className="border-primary/20 overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">About Me</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Transforming ideas into intelligent solutions
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      I'm a passionate B.Tech student specializing in Artificial Intelligence and Data Science, 
                      with a deep fascination for machine learning and its transformative potential. My journey 
                      began with curiosity about how machines can learn and make decisions, and has evolved into 
                      a mission to build intelligent systems that solve complex real-world problems.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Currently pursuing advanced studies in AI/ML, I've developed expertise in deep learning, 
                      computer vision, and natural language processing. I believe in the power of data-driven 
                      solutions and am committed to creating technology that makes a positive impact on society.
                    </p>
                    <p className="text-lg leading-relaxed">
                      My goal is to join a leading technology company where I can contribute to cutting-edge AI 
                      research and development while continuing to learn from the best minds in the industry.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-primary" />
                          Current Focus
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Advanced Deep Learning Architectures</li>
                          <li>• Computer Vision & Image Processing</li>
                          <li>• Natural Language Processing</li>
                          <li>• MLOps & Model Deployment</li>
                          <li>• AI Ethics & Responsible AI</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Coffee className="w-5 h-5 mr-2 text-primary" />
                          When I'm Not Coding
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Reading AI research papers</li>
                          <li>• Contributing to open source</li>
                          <li>• Participating in ML competitions</li>
                          <li>• Mentoring fellow students</li>
                          <li>• Exploring new technologies</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Technical Expertise</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Comprehensive skill set across AI/ML and software development
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="Programming">Programming</TabsTrigger>
                    <TabsTrigger value="AI/ML">AI/ML</TabsTrigger>
                    <TabsTrigger value="Framework">Frameworks</TabsTrigger>
                    <TabsTrigger value="Tools">Tools</TabsTrigger>
                    <TabsTrigger value="Database">Database</TabsTrigger>
                  </TabsList>
                  
                  {["all", "Programming", "AI/ML", "Framework", "Tools", "Database"].map((category) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills
                          .filter(skill => category === "all" || skill.category === category)
                          .map((skill, index) => (
                            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <span className="text-2xl">{skill.icon}</span>
                                    <div>
                                      <h3 className="font-semibold">{skill.name}</h3>
                                      <Badge variant="outline" className="text-xs">
                                        {skill.category}
                                      </Badge>
                                    </div>
                                  </div>
                                  <span className="text-sm font-medium text-primary">
                                    {skill.level}%
                                  </span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                              </CardContent>
                            </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Featured Projects</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Innovative solutions showcasing my technical expertise
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="featured" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="ml">Machine Learning</TabsTrigger>
                    <TabsTrigger value="ai">AI/NLP</TabsTrigger>
                    <TabsTrigger value="all">All Projects</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="featured" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {projects.filter(p => p.featured).map((project, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                  {project.status}
                                </Badge>
                              </div>
                              <Badge variant="outline">{project.type}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="font-semibold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex gap-3">
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source Code
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Other project tabs would be similar */}
                  <TabsContent value="all" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <Badge variant="outline" className="w-fit">{project.type}</Badge>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.slice(0, 3).map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.tech.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{project.tech.length - 3} more
                                </Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Professional Experience</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Building expertise through hands-on projects and internships
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                            <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                            <p className="text-muted-foreground mb-2">{exp.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">{exp.type}</Badge>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <TrendingUp className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Education</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Strong foundation in AI/ML and Computer Science
                </p>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-4">
                            <BookOpen className="w-8 h-8 text-primary mr-3" />
                            <div>
                              <h3 className="text-2xl font-bold">{edu.degree}</h3>
                              <p className="text-lg text-primary">{edu.institution}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <Award className="w-4 h-4 mr-2 text-primary" />
                              <span className="font-semibold">GPA: {edu.gpa}</span>
                            </div>
                            <Badge variant="secondary">{edu.status}</Badge>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-4">Relevant Coursework:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <div key={courseIndex} className="flex items-center p-2 bg-muted rounded">
                                <Zap className="w-3 h-3 text-primary mr-2" />
                                <span className="text-sm">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Achievements Section */}
        {activeSection === "achievements" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Achievements & Recognition</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Recognition for excellence in AI/ML and competitive programming
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                            <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                            <Badge variant="outline" className="text-xs">
                              {achievement.date}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4">Let's Connect</CardTitle>
                <p className="text-xl text-muted-foreground">
                  Ready to contribute to your next breakthrough AI project
                </p>
              </CardHeader>
              <CardContent>
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          I'm actively seeking opportunities to work on cutting-edge AI/ML projects at leading 
                          technology companies. Whether it's a full-time role, internship, or collaboration, 
                          I'm excited to discuss how I can contribute to your team's success.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <Mail className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Email</p>
                              <a 
                                href="mailto:d.p.ratheesh007@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                d.p.ratheesh007@gmail.com
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <Phone className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <p className="text-muted-foreground">Available upon request</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <MapPin className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-muted-foreground">India (Open to relocation)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Professional Links</h3>
                        <div className="space-y-4">
                          <Card className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                              <a 
                                href="https://github.com/Ratheesh-DP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4"
                              >
                                <Github className="w-8 h-8 text-primary" />
                                <div>
                                  <p className="font-semibold">GitHub</p>
                                  <p className="text-muted-foreground text-sm">View my code and projects</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                              </a>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                              <a 
                                href="https://www.linkedin.com/in/ratheesh-d-p-83b030294"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4"
                              >
                                <Linkedin className="w-8 h-8 text-primary" />
                                <div>
                                  <p className="font-semibold">LinkedIn</p>
                                  <p className="text-muted-foreground text-sm">Professional network</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                              </a>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                              <div className="flex items-center space-x-4">
                                <Download className="w-8 h-8 text-primary" />
                                <div>
                                  <p className="font-semibold">Resume</p>
                                  <p className="text-muted-foreground text-sm">Download my latest resume</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity">
                          <Mail className="w-5 h-5 mr-2" />
                          Start a Conversation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              &copy; 2024 Ratheesh D P. Building the future with AI.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Ratheesh-DP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ratheesh-d-p-83b030294" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:d.p.ratheesh007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
