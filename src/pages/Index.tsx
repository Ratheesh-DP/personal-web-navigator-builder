import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-space.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
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
    "Aspiring Data Scientist",
    "Software Developer",
    "AI Application Engineer",
    "Python Developer",
    "B.Tech AI & Data Science"
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
    { name: "SQL", level: 85, category: "Programming", icon: "🗄️" },
    { name: "Machine Learning Evaluation", level: 85, category: "AI/ML", icon: "🤖" },
    { name: "Deep Learning", level: 80, category: "AI/ML", icon: "🔬" },
    { name: "Reinforcement Learning", level: 70, category: "AI/ML", icon: "🎯" },
    { name: "Data Imputation & Outliers", level: 82, category: "AI/ML", icon: "📊" },
    { name: "ETL Processes", level: 80, category: "AI/ML", icon: "🔄" },
    { name: "TensorFlow", level: 78, category: "Framework", icon: "🧠" },
    { name: "Scikit-learn", level: 85, category: "Framework", icon: "📈" },
    { name: "Transformers", level: 78, category: "Framework", icon: "🔤" },
    { name: "LangChain / LangGraph", level: 82, category: "Framework", icon: "🔗" },
    { name: "FastAPI", level: 85, category: "Framework", icon: "⚡" },
    { name: "React JS", level: 80, category: "Framework", icon: "⚛️" },
    { name: "TailwindCSS", level: 82, category: "Framework", icon: "🎨" },
    { name: "Pandas", level: 90, category: "Framework", icon: "🐼" },
    { name: "NumPy", level: 88, category: "Framework", icon: "🔢" },
    { name: "PostgreSQL", level: 82, category: "Database", icon: "🐘" },
    { name: "MySQL", level: 80, category: "Database", icon: "💾" },
    { name: "MongoDB", level: 75, category: "Database", icon: "🍃" },
    { name: "ChromaDB", level: 78, category: "Database", icon: "🧬" },
    { name: "FAISS", level: 78, category: "Database", icon: "🔍" },
    { name: "Git", level: 85, category: "Tools", icon: "📝" },
    { name: "Docker", level: 72, category: "Tools", icon: "🐳" },
    { name: "Postman", level: 80, category: "Tools", icon: "📮" },
    { name: "Google Cloud Platform", level: 70, category: "Tools", icon: "☁️" },
    { name: "Groq & Gemini LLMs", level: 82, category: "Tools", icon: "✨" }
  ];

  type Project = {
    title: string;
    description: string;
    tech: string[];
    type: string;
    status: string;
    demo: string;
    github: string;
    featured?: boolean;
    metrics?: Record<string, string>;
  };

  const projects: Project[] = [
    {
      title: "Multi-Agent Blog Generator",
      description: "Multi-agent AI system that automates end-to-end content creation, mimicking a real-world editorial workflow with autonomous Research, Outline, Writer, SEO and Editor agents. Quality guardrails use structured Pydantic validation to review, refine and optimize drafts before output.",
      tech: ["Python", "LangGraph", "Gemini", "OpenAI", "Pydantic"],
      type: "Agentic AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { agents: "5", validation: "Pydantic", workflow: "End-to-end" }
    },
    {
      title: "DataCue AI Analytics Platform",
      description: "AI analytics platform enabling natural language queries over unstructured CSV/Excel data. An asynchronous FastAPI backend integrates Groq and Gemini LLMs for automated, safe SQL generation, surfaced through an interactive React dashboard with Plotly visualizations.",
      tech: ["React", "FastAPI", "PostgreSQL", "Groq", "Gemini", "Plotly"],
      type: "Data Science",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { input: "CSV/Excel", backend: "Async", queries: "Natural language" }
    },
    {
      title: "Brain Tumor Prediction & AI Assistant",
      description: "ResNet-50 based brain tumor classification model achieving 90% accuracy on MRI medical data, deployed as a FastAPI web application for real-time inference. A RAG-based medical assistant using tokenization and FAISS vector indices delivers reliable post-diagnosis guidance.",
      tech: ["Python", "Deep Learning", "ResNet-50", "FastAPI", "FAISS", "Scikit-learn"],
      type: "Deep Learning",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { accuracy: "90%", model: "ResNet-50", assistant: "RAG" }
    },
    {
      title: "Farm Assist",
      description: "AI-driven assistant delivering real-time crop disease classification and automated pest insights. Multi-modal RAG with ChromaDB + CLIP and Gemini 2.5-flash powers contextual retrieval, served by a FastAPI backend and a React Native app with multilingual voice translation.",
      tech: ["Python", "Gemini", "ChromaDB", "CLIP", "React Native", "FastAPI"],
      type: "AI/NLP",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP",
      featured: true,
      metrics: { rag: "Multi-modal", platform: "Mobile", languages: "Multilingual" }
    },

    /* ---------- Agentic AI & LLM Apps ---------- */
    {
      title: "SynthFlow Builder",
      description: "Visual workflow builder for composing and orchestrating multi-step AI pipelines with reusable nodes.",
      tech: ["TypeScript", "React", "LLM Orchestration"],
      type: "Agentic AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/synthflow-builder"
    },
    {
      title: "AI Companion",
      description: "Conversational AI companion with persistent memory and context-aware, persona-driven responses.",
      tech: ["TypeScript", "React", "LLM"],
      type: "Agentic AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/ai-companion"
    },
    {
      title: "AI Explorer Suite",
      description: "A suite of experimental AI tools for prompting, comparing models and exploring generative capabilities.",
      tech: ["TypeScript", "React", "Multi-model"],
      type: "Agentic AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/ai-explorer-suite"
    },
    {
      title: "Elastic Vector RAG",
      description: "Retrieval-augmented generation pipeline backed by Elasticsearch vector search for grounded answers over private documents.",
      tech: ["Python", "Elasticsearch", "RAG", "Embeddings"],
      type: "Agentic AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/elastic-vector-rag-"
    },

    /* ---------- Computer Vision & Deep Learning ---------- */
    {
      title: "VisionRec System",
      description: "Face and object recognition system built on classical CV plus deep feature embeddings for real-time detection.",
      tech: ["Python", "OpenCV", "Deep Learning"],
      type: "Computer Vision",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/VisionRec-system"
    },
    {
      title: "Leaf Health Guardian",
      description: "Plant leaf disease detection app that classifies crop illnesses from images and recommends treatment steps.",
      tech: ["TypeScript", "CNN", "Image Classification"],
      type: "Computer Vision",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/leaf-health-guardian"
    },
    {
      title: "Thron OCR Hub",
      description: "Document OCR workspace for extracting, structuring and exporting text from scanned files and images.",
      tech: ["TypeScript", "OCR", "Document AI"],
      type: "Computer Vision",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/thron-ocr-hub"
    },
    {
      title: "Shop Lens AI",
      description: "Visual shopping assistant that identifies products from photos and surfaces matching recommendations.",
      tech: ["TypeScript", "Vision LLM", "React"],
      type: "Computer Vision",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/shop-lens-ai"
    },
    {
      title: "PaperBanana Studio",
      description: "Creative image generation and editing studio built around modern multimodal image models.",
      tech: ["TypeScript", "Image Generation", "React"],
      type: "Computer Vision",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/paperbanana-studio"
    },

    /* ---------- Healthcare AI ---------- */
    {
      title: "Deep Med Fusion",
      description: "Multi-modal medical AI that fuses imaging and clinical signals for richer diagnostic support.",
      tech: ["TypeScript", "Deep Learning", "Multi-modal"],
      type: "Healthcare AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/deep-med-fusion"
    },
    {
      title: "Care Scan",
      description: "Medical scan triage interface that walks patients through AI-assisted report interpretation.",
      tech: ["TypeScript", "React", "Medical AI"],
      type: "Healthcare AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/care-scan"
    },
    {
      title: "Insightful Health AI",
      description: "Personal health analytics dashboard converting records and metrics into plain-language insights.",
      tech: ["TypeScript", "Analytics", "LLM"],
      type: "Healthcare AI",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/insightful-health-ai"
    },

    /* ---------- Data Science & Analytics ---------- */
    {
      title: "Data Analysis Streamlit App",
      description: "Interactive Streamlit workspace for EDA: profiling, cleaning, visualisation and quick statistical summaries.",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      type: "Data Science",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/data-analysis-streamlit-app"
    },
    {
      title: "Habitable Planet Hunter",
      description: "ML classifier that predicts planetary habitability from astronomical feature sets.",
      tech: ["Python", "Scikit-learn", "Classification"],
      type: "Data Science",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/habitable-planet-hunter"
    },
    {
      title: "Insight Compass",
      description: "Business intelligence explorer that turns raw datasets into guided, chart-driven narratives.",
      tech: ["TypeScript", "Data Viz", "React"],
      type: "Data Science",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/insight-compass"
    },
    {
      title: "Convolve — Document Extraction",
      description: "Production-ready document extraction pipeline with lightweight, VLM and hybrid strategies balancing cost, latency and accuracy.",
      tech: ["Python", "VLM", "OCR", "PDF Processing"],
      type: "Data Science",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/convolve"
    },

    /* ---------- FinTech ---------- */
    {
      title: "SmartSpend Wealth Builder",
      description: "Personal finance tracker with spending categorisation and AI-generated savings recommendations.",
      tech: ["TypeScript", "React", "Analytics"],
      type: "FinTech",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/smartspend-wealth-builder"
    },
    {
      title: "Otto — AI Wealth Guide",
      description: "Conversational wealth advisor offering goal planning and portfolio guidance through an LLM interface.",
      tech: ["TypeScript", "LLM", "React"],
      type: "FinTech",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/otto-your-ai-wealth-guide"
    },
    {
      title: "Wealth Navigator",
      description: "Investment planning dashboard with scenario modelling and long-term growth projections.",
      tech: ["TypeScript", "React", "Charts"],
      type: "FinTech",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/wealth-navigator"
    },

    /* ---------- Security ---------- */
    {
      title: "Security Toolkit",
      description: "Collection of practical security utilities for hashing, scanning and vulnerability awareness.",
      tech: ["TypeScript", "Security", "Web Crypto"],
      type: "Security",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/security-toolkit"
    },
    {
      title: "Secure Labs",
      description: "Hands-on lab environment for exploring common web vulnerabilities and their mitigations.",
      tech: ["TypeScript", "AppSec", "React"],
      type: "Security",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/secure-labs"
    },
    {
      title: "Crypto Art Compliance",
      description: "Compliance checker for digital art assets, validating provenance and regulatory requirements.",
      tech: ["TypeScript", "Web3", "Compliance"],
      type: "Security",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/crypto-art-compliance"
    },
    {
      title: "Safe Haven Helper",
      description: "Emergency assistance platform connecting people to nearby safe shelters and support resources.",
      tech: ["TypeScript", "React", "Geolocation"],
      type: "Security",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/safe-haven-helper"
    },

    /* ---------- Web & Full-Stack ---------- */
    {
      title: "Smart Wanderlust AI Trips",
      description: "AI travel planner generating personalised itineraries with budgets, routes and local recommendations.",
      tech: ["TypeScript", "React", "LLM"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/smart-wanderlust-ai-trips"
    },
    {
      title: "The FlashChat",
      description: "Realtime messaging app with instant delivery, presence and a clean responsive interface.",
      tech: ["TypeScript", "React", "Realtime"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/the-flashchat"
    },
    {
      title: "Smart Campus Management System",
      description: "Campus operations platform handling attendance, scheduling and student records end to end.",
      tech: ["Python", "Database", "Full-Stack"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/Smart-Campus-Management-System"
    },
    {
      title: "Smart Study AI",
      description: "Study assistant that summarises materials, generates quizzes and tracks learning progress.",
      tech: ["Python", "LLM", "EdTech"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/smart-study-ai-"
    },
    {
      title: "Skill Scout AI",
      description: "Career tool that maps résumés against job descriptions and highlights actionable skill gaps.",
      tech: ["TypeScript", "NLP", "React"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/skill-scout-ai"
    },
    {
      title: "Code Connect Hub",
      description: "Community hub for developers to share snippets, collaborate and discover projects.",
      tech: ["TypeScript", "React", "Community"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/code-connect-hub"
    },
    {
      title: "Citizen Connect",
      description: "Civic engagement portal for reporting local issues and tracking resolution transparently.",
      tech: ["TypeScript", "React", "Civic Tech"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/citizen-connect"
    },
    {
      title: "EV Harmony Hub",
      description: "EV charging companion for locating stations, planning routes and monitoring charging sessions.",
      tech: ["TypeScript", "React", "Maps"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/ev-harmony-hub"
    },
    {
      title: "Code Buddy Arena",
      description: "Competitive coding arena with practice challenges, matchmaking and progress tracking.",
      tech: ["TypeScript", "React", "DSA"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/code-buddy-arena"
    },
    {
      title: "Form Buddy",
      description: "Dynamic form builder with validation, conditional logic and shareable submissions.",
      tech: ["TypeScript", "React", "Forms"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/form-buddy"
    },
    {
      title: "Future Builders Hub",
      description: "Learning and mentorship platform connecting students with builders and project opportunities.",
      tech: ["TypeScript", "React", "EdTech"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/future-builders-hub"
    },
    {
      title: "Workout Jobs",
      description: "Fitness scheduling app pairing workout plans with routine tracking and reminders.",
      tech: ["TypeScript", "React", "Health"],
      type: "Web & Full-Stack",
      status: "Completed",
      demo: "#",
      github: "https://github.com/Ratheesh-DP/workout-jobs"
    }
  ];

  const projectCategories = Array.from(new Set(projects.map((p) => p.type)));

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      period: "2023 - 2027",
      gpa: "8.33 / 10.0",
      status: "Currently pursuing",
      coursework: [
        "Machine Learning & Deep Learning",
        "Relational Database Management",
        "Natural Language Processing",
        "Data Structures & Algorithms",
        "Statistics & Probability Theory",
        "Reinforcement Learning",
        "ETL & Data Modeling",
        "Software Engineering"
      ]
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Vidyaa Vikas Matric Higher Secondary School",
      period: "2022 - 2023",
      gpa: "76.17%",
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
      title: "Amazon ML Summer School",
      organization: "Amazon",
      date: "Selected",
      description: "Selected among the top 3,000 students nationwide for the competitive advanced machine learning cohort",
      icon: "🏆"
    },
    {
      title: "Horizon 25 Hackathon Finalist",
      organization: "Horizon 25",
      date: "Finalist",
      description: "Finalist with an AI Agrotech application",
      icon: "🚀"
    },
    {
      title: "Google GenAI Exchange & ISRO Hackathon",
      organization: "Google / ISRO",
      date: "Participant",
      description: "Participated in the Google GenAI Exchange and ISRO hackathons",
      icon: "🛰️"
    },
    {
      title: "500+ DSA Problems Solved",
      organization: "LeetCode & competitive platforms",
      date: "Ongoing",
      description: "Solved 500+ Data Structures & Algorithms problems across competitive platforms",
      icon: "🧩"
    },
    {
      title: "Introduction to Generative AI",
      organization: "Coursera / Google Cloud",
      date: "Certification",
      description: "Certified in the fundamentals of generative AI",
      icon: "🎓"
    },
    {
      title: "Artificial Intelligence Primer",
      organization: "Infosys Springboard",
      date: "Certification",
      description: "Artificial Intelligence Primer Certification",
      icon: "📄"
    },
    {
      title: "Introduction to Git",
      organization: "DataCamp",
      date: "Certification",
      description: "Certified in version control fundamentals with Git",
      icon: "🌿"
    }
  ];

  const stats = [
    { label: "DSA Problems Solved", value: "500+", icon: "🧩" },
    { label: "Major AI Projects", value: "4", icon: "📈" },
    { label: "CGPA", value: "8.33", icon: "🎓" },
    { label: "Model Accuracy", value: "90%", icon: "🤖" }
  ];

  const navigationSections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
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
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          {/* Cinematic background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Cosmic AI neural network landscape"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1088}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="border-primary/40 bg-background/50 backdrop-blur-sm px-3 py-1">
                  <Star className="w-3 h-3 mr-1.5 text-primary" />
                  AI portfolio online
                </Badge>
                <Badge variant="outline" className="border-primary/40 bg-background/50 backdrop-blur-sm px-3 py-1">
                  Resume ready
                </Badge>
              </div>

              {/* Category line */}
              <p className="text-sm md:text-base font-mono text-primary tracking-widest mb-6 uppercase">
                Data Science <span className="text-muted-foreground">/</span> Machine Learning <span className="text-muted-foreground">/</span> Full-Stack AI
              </p>

              {/* Massive name */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tight">
                <span className="block text-foreground">Ratheesh</span>
                <span className="block bg-gradient-cosmic bg-clip-text text-transparent">D P</span>
              </h1>

              {/* Rotating role */}
              <div className="h-10 mb-6">
                <p className="text-xl md:text-2xl text-primary font-mono">
                  &gt; {typedText}
                  <span className="animate-pulse">_</span>
                </p>
              </div>

              <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
                Aspiring Data Scientist and Software Developer from Coimbatore, building low-latency,
                full-stack AI applications with statistical rigor, clean data modeling and production-grade ML pipelines.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity rounded-full px-8" onClick={() => scrollToSection("projects")}>
                  View Projects
                  <Rocket className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-background/50 backdrop-blur-sm" asChild>
                  <a href={resumeAsset.url} download="Ratheesh_D_P_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-background/50 backdrop-blur-sm" asChild>
                  <a href="https://github.com/Ratheesh-DP" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

              {/* Hidden legacy content preserved semantically */}
              <p className="sr-only">
                Ratheesh D P — B.Tech Artificial Intelligence and Data Science student at Sri Shakthi Institute of
                Engineering and Technology, Coimbatore, building AI and data-driven applications.
              </p>

              {/* Stats strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-2 border-primary/50 pl-3 bg-background/30 backdrop-blur-sm rounded-r py-2">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
                  Engineering data into intelligent, production-ready systems
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      I'm an aspiring Data Scientist and Software Developer pursuing a B.Tech in Artificial
                      Intelligence &amp; Data Science at Sri Shakthi Institute of Engineering and Technology,
                      Coimbatore, with a CGPA of 8.33 and a strong engineering foundation in relational database
                      management, analytical programming and automated architectures.
                    </p>
                    <p className="text-lg leading-relaxed">
                      I work on optimizing production-grade machine learning lifecycles, debugging complex
                      pipelines and building low-latency, full-stack AI applications — from multi-agent systems
                      and RAG assistants to natural-language analytics platforms.
                    </p>
                    <p className="text-lg leading-relaxed">
                      I'm passionate about applying statistical rigor, data modeling and clean coding
                      methodologies to real-world operations, and I'm looking for roles where I can keep
                      shipping AI products that matter.
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
                          <li>• Multi-agent LLM systems (LangGraph)</li>
                          <li>• Retrieval-Augmented Generation &amp; vector search</li>
                          <li>• FastAPI backends for real-time inference</li>
                          <li>• ETL pipelines &amp; relational data modeling</li>
                          <li>• React + Tailwind analytics dashboards</li>
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
                          <li>• Solving DSA problems (500+ and counting)</li>
                          <li>• Competing in hackathons</li>
                          <li>• Exploring new LLM tooling</li>
                          <li>• Reading AI research papers</li>
                          <li>• Building side projects</li>
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
                          I'm actively seeking data science, machine learning and software development
                          opportunities. Whether it's a full-time role, an internship or a collaboration,
                          I'd be glad to talk about how I can contribute.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <Mail className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Email</p>
                              <a 
                                href="mailto:dpratheesh154@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                dpratheesh154@gmail.com
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <Phone className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <a href="tel:+916383053651" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 63830 53651
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-center p-4 bg-muted rounded-lg">
                            <MapPin className="w-6 h-6 text-primary mr-4" />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p>
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
                              <a
                                href={resumeAsset.url}
                                download="Ratheesh_D_P_Resume.pdf"
                                className="flex items-center space-x-4"
                              >
                                <Download className="w-8 h-8 text-primary" />
                                <div>
                                  <p className="font-semibold">Resume</p>
                                  <p className="text-muted-foreground text-sm">Download my latest resume</p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                              </a>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <Button size="lg" className="bg-gradient-cosmic hover:opacity-90 transition-opacity" asChild>
                          <a href="mailto:dpratheesh154@gmail.com">
                            <Mail className="w-5 h-5 mr-2" />
                            Start a Conversation
                          </a>
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
              &copy; {new Date().getFullYear()} Ratheesh D P. Building the future with AI.
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
                href="mailto:dpratheesh154@gmail.com"
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
