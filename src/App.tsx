import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Scientist with 3+ years of experience delivering machine learning, predictive analytics, NLP, and large-scale data solutions across healthcare and enterprise datasets. Engineered PySpark and Databricks pipelines processing 20M+ records, reduced ETL runtime from 2+ hours to under 20 minutes, and built predictive models that improved segmentation, prioritization, and reporting efficiency. Hands-on expertise in Python, SQL, PySpark, Databricks, XGBoost, TensorFlow, NLP, Generative AI, LangChain, RAG, Tableau, Power BI, and cloud platforms including AWS and Azure.";

  const experience = [
    {
      company: "UnitedHealth Group",
      role: "Data Scientist",
      location: "Remote, USA",
      dates: "Aug. 2024 - Present",
      highlights: [
        "Engineered distributed data pipelines in Databricks using PySpark and Spark SQL to process 20M+ healthcare records, enabling scalable feature engineering for downstream machine learning models.",
        "Refactored legacy SQL-driven ETL workflows into Spark DataFrame transformations, reducing pipeline runtime from 2+ hours to under 20 minutes and improving scalability across production data volumes.",
        "Operationalized and deployed machine learning models and feature pipelines in Databricks, enabling scalable batch inference and production analytics workflows across 4 lines of business.",
        "Derived predictive features from claims, authorization, and engagement datasets and applied XGBoost to optimize feature weights, improving model lift and prioritization accuracy by 10%+.",
        "Implemented RFM-based segmentation models on engagement and utilization data to identify high-value member cohorts, improving prioritization accuracy by 15%+ and strengthening targeted analytics across healthcare workflows.",
        "Built a proof-of-concept Agentic AI analytics system powered by Generative AI using LangChain, LangGraph, and OpenAI APIs, enabling natural language querying across 10K+ structured healthcare records and reducing manual SQL analysis time by 40%+.",
        "Partnered with data engineers, analytics teams, and product stakeholders to deploy data pipelines, resolve data quality issues, and deliver scalable analytics infrastructure in Agile environments."
      ],
      highlightsLink: "",
      certificateLink: ""
    },
    {
      company: "Webster University",
      role: "Data Analyst - Student Assistant",
      location: "Saint Louis, Missouri",
      dates: "Jan. 2023 - Dec. 2023",
      highlights: [
        "Developed predictive analytics models using logistic regression and decision trees to forecast institutional metrics and evaluate program outcomes, improving forecast accuracy by 12%+.",
        "Examined datasets across 5+ university departments using SQL, Python, and R to identify trends in enrollment, program performance, and resource utilization.",
        "Automated recurring reporting workflows using SQL and Python, reducing manual report preparation time by 40%+ and improving reporting efficiency for administrative teams.",
        "Delivered Tableau and Power BI visualizations to track enrollment trends, program performance, and departmental KPIs, improving reporting accessibility for university stakeholders."
      ],
      highlightsLink: "",
      certificateLink: ""
    },
    {
      company: "NTT Data",
      role: "Data Analyst",
      location: "Hyderabad, India",
      dates: "Jan. 2021 - Aug. 2022",
      highlights: [
        "Streamlined complex SQL queries to extract, validate, and aggregate 5M+ healthcare records from enterprise data warehouses, improving query performance and reducing data retrieval time by 25%.",
        "Analyzed large-scale healthcare datasets including insurance claims, provider activity, and patient utilization records to identify operational inefficiencies and utilization trends across 10+ payer and hospital workflows.",
        "Architected automated reporting pipelines and Power BI dashboards to track claims volume, denial rates, and patient utilization metrics, improving KPI visibility for operations and analytics teams.",
        "Partnered with data engineering and business stakeholders to resolve data mapping issues, conduct root cause analysis on claims rejections, and improve data quality across multisource healthcare reporting workflows."
      ],
      highlightsLink: "",
      certificateLink: ""
    }
  ];

  const projects = [
    {
      title: "Mortgage Loan Risk Prediction and Segmentation",
      subtitle: "Machine Learning Project",
      category: "Predictive Modeling",
      introduction: "Built a machine learning solution to predict mortgage repayment outcomes and segment borrowers by risk level using classification, ensemble modeling, clustering, and robust feature engineering.",
      problem: "Lenders need a more accurate way to identify repayment risk across borrower segments and support data-driven credit strategy decisions.",
      objective: "Predict mortgage repayment behavior and create risk-based borrower segments that improve lending strategy and portfolio visibility.",
      methodology: [
        "Processed and analyzed thousands of loan records.",
        "Applied feature engineering and KNN imputation to prepare the dataset.",
        "Built supervised classification and ensemble models for repayment prediction.",
        "Used clustering to segment borrowers into risk tiers."
      ],
      results: [
        "Achieved 78% classification accuracy across borrower risk segments.",
        "Improved borrower segmentation for targeted lending strategies.",
        "Enabled clearer risk-tier insights for repayment forecasting."
      ],
      conclusion: "The project demonstrated practical machine learning, imputation, and clustering techniques for scalable credit risk prediction and segmentation.",
      link: ""
    },
    {
      title: "Customer Profitability and Purchase Prediction",
      subtitle: "Analytics & Forecasting Project",
      category: "Customer Analytics",
      introduction:
        "Developed customer analytics models to predict purchase probability, forecast spending behavior, and estimate profitability across customer segments using classification, regression, and simulation techniques.",
      problem:
        "Marketing teams need better visibility into which customers are most likely to purchase and which segments offer the highest profit potential.",
      objective:
        "Identify high-value customers, improve purchase prediction accuracy, and quantify revenue impact from optimized campaign targeting.",
      methodology: [
        "Built classification and regression models for purchase and spend prediction.",
        "Performed feature selection and dimensionality reduction.",
        "Ran profit simulation modeling to estimate campaign upside.",
        "Segmented customers to isolate high-value opportunities."
      ],
      results: [
        "Achieved 80% classification accuracy for purchase prediction.",
        "Estimated $1.5M+ in potential revenue through optimized marketing campaigns.",
        "Improved targeting clarity through segment-level profitability analysis."
      ],
      conclusion:
        "The project combined predictive modeling, revenue simulation, and customer segmentation to support smarter marketing and profitability decisions.",
      link: ""
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Programming',
      skills: ['Python', 'SQL', 'R', 'PySpark']
    },
    {
      icon: TrendingUp,
      title: 'Data Science & ML',
      skills: ['Predictive Modeling', 'Feature Engineering', 'Regression', 'Classification', 'Clustering', 'A/B Testing', 'Statistical Modeling', 'Statistical Inference', 'Hypothesis Testing', 'Bayesian Methods', 'Time Series Analysis', 'Data Mining', 'Exploratory Data Analysis', 'Deep Learning', 'Model Evaluation', 'Model Validation']
    },
    {
      icon: Users,
      title: 'Data Engineering',
      skills: ['Databricks', 'Spark SQL', 'ETL Pipelines', 'Data Transformation', 'Data Validation', 'Data Quality Checks', 'Snowflake', 'MySQL', 'MongoDB', 'Oracle', 'Microsoft SQL Server']
    },
    {
      icon: Lightbulb,
      title: 'AI, BI & Cloud',
      skills: ['Natural Language Processing', 'NLP', 'LangChain', 'LangGraph', 'OpenAI API', 'Retrieval-Augmented Generation', 'RAG', 'Vector Databases', 'Prompt Engineering', 'Generative AI', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'XGBoost', 'Power BI', 'Tableau', 'Excel', 'Azure Databricks', 'Azure Machine Learning', 'AWS S3', 'Amazon SageMaker', 'AWS Lambda', 'Amazon Redshift', 'Google Cloud Platform', 'Jupyter Notebook', 'Git', 'PyCharm', 'Airflow', 'Control-M', 'Jira']
    }
  ];

  const education = [
    {
      school: "Webster University",
      degree: "Master of Science in Data Analytics (Mathematics and Statistics)",
      location: "St. Louis, Missouri, USA",
      dates: "May 2024",
      details: "Graduate program focused on analytics, mathematics, and statistics."
    },
    {
      school: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      location: "Hyderabad, India",
      dates: "Jul 2021",
      details: "Undergraduate foundation in engineering, analytical thinking, and technical problem-solving."
    }
  ];
  const papers = [
    // Add your published papers below. Example format:
    // { title: "Paper Title", publication: "Journal/Conference Name", year: "2024", link: "https://..." },
  ];

  const certifications = [
    {
    title: "Google Advanced Data Analytics Professional Certificate",
    platform: "Google",
    description: "Professional certificate covering advanced analytics, predictive modeling, and practical data science workflows.",
    link: ""
    },
    {
    title: "IBM Machine Learning Professional Certificate",
    platform: "IBM",
    description: "Professional certificate focused on machine learning concepts, model development, and applied analytics.",
    link: ""
    }
    ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              PRIYANKA PULIPAKA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                { id: 'certifications', label: 'Certificate' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* <div className="mb-12">
              <img
                src="images/image.png"
                alt="Priyanka Pulipaka"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div> */}
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              PRIYANKA PULIPAKA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Scientist · Machine Learning · PySpark, Databricks · NLP & Generative AI
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              ATLANTA, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'DATA PROCESSED', value: '20M+', detail: 'Healthcare Records' },
              { label: 'ETL RUNTIME', value: '< 20 MIN', detail: 'From 2+ Hours' },
              { label: 'EXPERIENCE', value: '3+ YRS', detail: 'Data Science & Analytics' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data scientist specializing in machine learning, predictive analytics, healthcare data engineering, NLP, and Generative AI solutions across large-scale enterprise datasets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Data Engineering',
                detail: 'Built scalable PySpark and Databricks pipelines for 20M+ healthcare records, accelerating ETL and feature engineering workflows for production-scale analytics.'
              },
              {
                icon: Rocket,
                title: 'Machine Learning',
                detail: 'Developed predictive models, segmentation systems, and feature pipelines that improved prioritization accuracy, model lift, and reporting efficiency across healthcare and enterprise use cases.'
              },
              {
                icon: Lightbulb,
                title: 'Generative AI',
                detail: 'Applied LangChain, LangGraph, OpenAI APIs, and RAG concepts to build an Agentic AI analytics proof of concept that reduced manual SQL analysis time.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Experience across healthcare and academic analytics environments, spanning machine learning, reporting automation, scalable ETL, and business intelligence.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {role.highlightsLink && (
                  <div className="mt-4 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Highlights</span>
                    <a href={role.highlightsLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}

                {role.certificateLink && (
                  <div className="mt-2 flex items-center text-brown hover:text-black transition-colors hover:underline">
                    <span className="text-sm font-light">View Certificate</span>
                    <a href={role.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Applied machine learning and customer analytics projects focused on prediction, segmentation, and revenue impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or project walkthroughs?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for more project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'PRESENTATION DECK (PDF)' : 'LINK'}
                  </h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    {projects[selectedProject].subtitle?.includes('Capstone') ? 'View Presentation Deck (PDF)' : 'View Project'}
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Core strengths across data science, machine learning, data engineering, visualization, and cloud platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications can be added here later if needed.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's connect about data science, machine learning, analytics, Databricks, NLP, or Generative AI opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+16035509415"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (603) 550-9415
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/priyanka-pns07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:priyankapns72@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                priyankapns72@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Priyanka Pulipaka · Data Science & Machine Learning.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

