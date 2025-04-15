const analysisData = {
  grammar_analysis: {
    recommendations: [
      "Consider breaking down long bullet points into shorter, more digestible sentences.",
      'Examples of long sentences: "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)',
      "Missing personal information section with contact details.",
    ],
    score: 83,
    section_scores: {
      action_verbs: {
        category: "High",
        details: {
          avg_verb_strength_score: 0.87,
          bullet_count: 11,
          diversity_ratio: 1.0,
          missing_verb_bullet_examples: [],
          missing_verb_ratio: 0.0,
          weak_verb_examples: {},
        },
        score: 85,
      },
      active_voice: {
        category: "Very High",
        details: {
          passive_ratio: 0.0,
          passive_sentence_count: 0,
          passive_sentence_examples: [],
          sentence_count: 13,
        },
        score: 100,
      },
      bullet_points: {
        category: "Very High",
        details: {
          avg_bullet_word_length: 20.6,
          avg_bullets_per_job: 2.0,
          jobs_with_zero_bullets: 0,
          long_bullet_examples: [
            '"Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (31 words)',
          ],
          percent_bullets_starting_verb: 100,
          short_bullet_examples: [],
          total_bullets: 11,
          total_jobs_analyzed: 2,
        },
        score: 100,
      },
      completeness: {
        category: "Very High",
        details: {
          missing_essential_sections: [],
          missing_recommended_sections: ["certifications"],
          present_recommended_count: 2,
          present_sections: [
            "education",
            "keywords",
            "personal_info",
            "projects",
            "summary",
            "work_experience",
          ],
        },
        score: 100,
      },
      industry_fit: {
        category: "High",
        details: {
          boost_reason: "Boosted to High based on absolute match count (42)",
          keywords_found_in_skills: [
            "activemq",
            "ai",
            "flask",
            "git",
            "github",
            "java",
            "jenkins",
            "keras",
            "matplotlib",
            "ml",
            "mongodb",
            "nltk",
            "numpy",
            "pandas",
            "power bi",
            "puppet",
            "python",
            "pytorch",
            "r",
            "scikit-learn",
            "seaborn",
            "spark",
            "sql",
            "tableau",
            "tensorflow",
            "xgboost",
          ],
          match_ratio: 0.08,
          matched_keyword_count: 42,
          target_industry: "tech",
          total_industry_keywords: 522,
        },
        score: 85,
      },
      length: {
        category: "Very High",
        details: {
          total_bullet_meaningful_word_count: 227,
        },
        score: 100,
      },
      quantifiable: {
        category: "Very High",
        details: {
          impact_keywords_without_metrics_count: 0,
          non_quantified_impact_examples: [],
          quantified_bullet_count: 11,
          quantified_bullet_examples: [
            "Automated I-STAR/GV deployment using Jenkins, reducing manual intervention by 70...",
            "Collaborated on a state-of-the-art machine learning model to forecast COVID-19 s...",
          ],
          quantified_ratio: 1.0,
          total_bullets: 11,
        },
        score: 100,
      },
      sentence_structure: {
        category: "Medium",
        details: {
          avg_sentence_length_tokens: 26.9,
          "long_sentence_count (>40 tokens)": 1,
          long_sentence_examples: [
            '"Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)',
          ],
          sentence_count: 11,
          "short_sentence_count (<8 tokens)": 0,
          short_sentence_examples: [],
          std_dev_sentence_length: 6.9,
        },
        score: 70,
      },
      skills_format: {
        category: "High",
        details: {
          detected_categorization_heuristic: false,
          skill_count: 35,
          verbose_skill_examples: [],
        },
        score: 85,
      },
    },
  },
  justifications:
    'Overall Score: 83/100.\nAssessment: Strong. This reflects the analysis across key resume components:\n\n--- Detailed Analysis ---\n\n* Action Verbs (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n* Active Voice (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Bullet Points (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.  - Detail: Overly long bullet points found, e.g., "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (31 words)\n\n* Completeness (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Industry Fit (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n* Length (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Quantifiable (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Sentence Structure (Category: Medium, Score: 70/100):  - Outcome: Adequate, meets baseline expectations but could be improved.  - Detail: Overly long sentences found, e.g., "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)\n\n* Skills Format (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n--- Overall Recommendation ---\nFocus on minor refinements suggested.',
  overall_score: 78.4,
  resume_data: {
    certifications: [],
    education: [
      {
        degree: "B.Tech in Artificial Intelligence and Data Science",
        graduation_date: "2021 – 2025",
        institution: "Sikkim Manipal Institute of Technology",
      },
    ],
    keywords: [
      "Python",
      "Java",
      "R",
      "Power BI",
      "Tableau",
      "Looker",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-Learn",
      "XGBoost",
      "Prophet",
      "Spark",
      "Flask",
      "Streamlit",
      "Gradio",
      "NLTK",
      "Hugging Face",
      "LlamaIndex",
      "Plotly",
      "Matplotlib",
      "Seaborn",
      "Git",
      "GitHub",
      "Apache Tomcat",
      "ActiveMQ",
      "Pandas",
      "Numpy",
      "SQL",
      "MongoDB",
      "Jenkins",
      "Puppet",
      "Leadership",
      "Team Collaboration",
      "Analytical Reasoning",
    ],
    personal_info: [
      {
        email: "shivamsourav2003@gmail.com",
        name: "Shivam Sourav",
        phone: "8521846844",
      },
    ],
    projects: [
      {
        description: [
          "Innovated a tokenizer by training a SentencePiece model on the Nepali corpus, achieving an 80% reduction in token count.",
          "Optimized Google’s Gemma2 9B model for language comprehension through continual pretraining on a Nepali corpus with a trained SentencePiece tokenizer, achieving a 25% improvement in task accuracy.",
          "Engineered a chatbot enabling effective textual communication in Nepali, boosting user engagement by 30%.",
        ],
        name: "Nepali LLM - Advanced Nepali Language Model",
      },
      {
        description: [
          "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, HuggingFace embeddings, and the Groq platform, powered by Meta’s Llama-3.1 8B model, achieving a 40% improvement in resume and jd matching accuracy.",
          "Executed in-depth analysis using TF-IDF, reducing irrelevant data points by 30%.",
        ],
        name: "Khojo Bhai - AI-Powered Resume Analyzer Project",
      },
      {
        description: [
          "Refined the Mistral AI7B LLM model using QLoRA (Quantized Low-Rank Adapters), achieving 80% headline relevance accuracy.",
          "Mobilized Unsloth to fine-tune LLMs, improving their performance by 35% across diverse news topics and styles and reducing model training time by 50%.",
        ],
        name: "News Headline Generator",
      },
    ],
    summary:
      "Shivam Sourav is a highly skilled professional with experience in software engineering and data science. He has worked on multiple projects, including refining the Mistral AI7B LLM model using QLoRA, achieving 80% headline relevance accuracy and mobilizing Unsloth to fine-tune LLMs, improving their performance by 35% across diverse news topics and styles and reducing model training time by 50%. He has expertise in programming languages such as Python, Java, and R, and has experience with frameworks and technologies like TensorFlow, PyTorch, Keras, and Scikit-Learn. He has also worked with databases like SQL and MongoDB, and has experience with Jenkins, Puppet, and leadership. His work experience includes roles such as Associate Software Engineer Intern at Nomura Research Institute and Financial Technology, and Machine Learning Engineer at Omdena, where he contributed to various machine learning projects.",
    work_experience: [
      {
        company: "Nomura Research Institute and Financial Technology",
        dates: "08/2024 – Present",
        job_title: "Associate Software Engineer Intern",
        responsibilities: [
          "Automated I-STAR/GV deployment using Jenkins, reducing manual intervention by 70% and ensuring consistent deployment across environments.",
        ],
      },
      {
        company: "Omdena",
        dates: "11/2023 – 06/2024",
        job_title: "Machine Learning Engineer",
        responsibilities: [
          "Collaborated on a state-of-the-art machine learning model to forecast COVID-19 spread in Kitwe, Zambia, leveraging CatBoost and XGBoost, achieving a 95% prediction accuracy.",
          "Spearheaded the development of predictive models for flood prediction and waterbody forecasting in Bangladesh, utilizing XGBoost and LSTM, attaining a 92% prediction accuracy.",
          "Led a cross-functional subgroup of 10 members in data preprocessing and feature engineering, boosting overall team efficiency by 25% within a 40-member project team.",
        ],
      },
    ],
  },
  technical_score: {
    job_description_responsibilities:
      "The ideal candidate will leverage their expertise to design, develop, and deploy cutting-edge solutions, contributing to various projects from NLP to predictive modeling. In this role, you will be responsible for developing and fine-tuning language models, creating robust APIs for data processing, and building intuitive dashboards for data visualization. You will utilize your proficiency in Python, Java, and R, along with frameworks such as TensorFlow, PyTorch, and Scikit-learn, to implement machine learning and deep learning models. Strong experience with cloud technologies, CI/CD pipelines (Jenkins/Docker), and database management (SQL, MongoDB) is essential. The candidate should demonstrate excellent analytical reasoning, problem-solving skills, and the ability to collaborate effectively within a team.",
    justification: {
      experience_and_projects:
        "Calculated as semantic similarity between the Job Description text and the provided Resume Summary. Comparing Job Description against the overall Resume Summary. Similarity score between JD and resume summary: 0.468",
      overall:
        "Job classified as technical: True. Using technical weights: Summary/Experience=30%, Skills=70%. Weighted average score before bonus: 67.58%. Required keyword match bonus (15.0% factor applied to weighted score * required match %): +7.75%. Final Score (Weighted Avg + Bonus, capped at 100%): 75.34%. Pass: False.",
      skills:
        "Resume skills processed: 35 Required skills found (13/17) using similarity >=0.75: ['analytical reasoning', 'deep learning', 'java', 'jenkins', 'machine learning', 'mongodb', 'python', 'pytorch', 'r', 'scikit-learn', 'sql', 'team collaboration', 'tensorflow']. Required skills missing: ['ci/cd pipelines', 'cloud technologies', 'docker', 'problem-solving skills']. Required skill match percentage: 76.47%. Final Skills Score : 76.47%.",
    },
    notes: "Pass Threshold: 80.0%. Tech job: True.",
    pass: false,
    preferred_skills_found: [],
    required_skill_match_percentage: 76.47,
    required_skills_found: [
      "analytical reasoning",
      "deep learning",
      "java",
      "jenkins",
      "machine learning",
      "mongodb",
      "python",
      "pytorch",
      "r",
      "scikit-learn",
      "sql",
      "team collaboration",
      "tensorflow",
    ],
    required_skills_found_count: 13,
    required_skills_missing: [
      "ci/cd pipelines",
      "cloud technologies",
      "docker",
      "problem-solving skills",
    ],
    section_scores: {
      experience_and_projects: 46.85,
      skills: 76.47,
    },
    similarity_score: 75.34,
    skill_match_details: {
      "analytical reasoning": ["analytical reasoning", 1.0],
      "deep learning": ["tensorflow", 0.8282],
      java: ["java", 1.0],
      jenkins: ["jenkins", 1.0],
      "machine learning": ["tensorflow", 0.8121],
      mongodb: ["mongodb", 1.0],
      python: ["python", 1.0],
      pytorch: ["pytorch", 1.0],
      r: ["r", 1.0],
      "scikit-learn": ["scikit-learn", 1.0],
      sql: ["sql", 1.0],
      "team collaboration": ["team collaboration", 1.0],
      tensorflow: ["tensorflow", 0.9999],
    },
    total_required_skills_in_jd: 17,
  },
};

const jobDescriptionRef = [
  {
    jobType: "SDE (Full-Stack)",
    description: "Become a Future Shaper: Launch Your Software Engineering Career with Us. Are you a driven and inquisitive recent graduate eager to transform your passion for technology into a rewarding career? Do you envision yourself building innovative software solutions that impact the world? We are seeking bright and enthusiastic individuals to join our dynamic team as Software Engineer Developers, where you will be immersed in the complete software development lifecycle, gaining invaluable hands- on experience from conceptualization to deployment.This is an exceptional opportunity to build a robust foundation in full - stack development and contribute meaningfully to our team's success in a supportive and growth-oriented environment. As a Software Engineer Developer, you will actively participate in analyzing software requirements, collaborating on the design of scalable and efficient solutions, and contributing your fresh perspectives to real - world projects.You will develop robust and well - documented back - end services and APIs utilizing industry - standard technologies such as Python with powerful frameworks like Django or Flask, and Node.js leveraging the flexibility of Express.On the front end, you will build engaging and user - friendly interfaces using modern JavaScript frameworks like the component-based React or the comprehensive Angular, complemented by foundational technologies like HTML5 and CSS3.You will gain practical experience in designing and implementing database schemas, working with both relational databases(e.g., PostgreSQL, MySQL) for structured data and NoSQL databases(e.g., MongoDB) for flexible data models.Ensuring the quality and reliability of our software will be a key aspect of your role, involving writing comprehensive unit and integration tests.You will actively participate in code reviews, contributing to maintain high coding standards and fostering a culture of knowledge sharing within the team.Proficiency in version control using Git will be essential for collaborative development.Furthermore, you will have the opportunity to gain exposure to leading cloud platforms such as AWS, Azure, or GCP, understanding their services for deploying and scaling applications.We are committed to continuous improvement, and you will contribute to refining our development processes and tools.Staying updated with emerging technologies and industry best practices will be an integral part of your growth in this role.Effective communication of technical concepts and progress updates within the team will be highly valued.We are looking for individuals with a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field, coupled with a solid grasp of fundamental programming principles, data structures, and algorithms.Familiarity with at least one of the mentioned back - end languages and frameworks and a basic understanding of front - end development with an eagerness to learn modern frameworks are key.A proactive attitude, a strong aptitude for problem - solving, excellent communication and collaboration skills, and a genuine passion for learning and growth are highly desired.If you are ready to launch your software engineering career and contribute to impactful projects, we encourage you to apply and become a vital part of our innovative team."
  },
  {
    jobType: "SDE (Front-End)",
    description: "We are seeking passionate Frontend Engineers to join our team and become digital architects, crafting immersive web experiences with a focus on Next.js 14. This role is ideal for recent graduates who are excited about redefining user interaction and see the future of web development in technologies like React and server-side rendering. As a Frontend Engineer, you will be at the forefront of translating innovative designs into high-performance, user-centric applications. You will leverage the power of Next.js 14 to build blazing-fast, SEO-optimized web experiences, utilizing React Server Components, optimized routing, and advanced data fetching techniques. Your expertise will directly shape how users engage with our products, ensuring seamless navigation, interactive elements, and stunning visual presentation across all devices. In this collaborative environment, you'll work closely with designers and backend engineers, contributing to the entire product lifecycle. We highly value clean, maintainable code and seek individuals who will be instrumental in establishing and upholding best practices within our frontend development workflow. We are looking for someone who is not only proficient in the core web technologies of HTML, CSS, and JavaScript, but also possesses a deep understanding of the React ecosystem and has experience with Next.js 14. The ideal candidate will also be proficient in TypeScript, experienced with state management libraries such as Zustand or Recoil, and knowledgeable in modern frontend build tools like Vite. A passion for creating exceptional user experiences and pixel-perfect interfaces is essential, along with excellent problem-solving and communication skills. If you are ready to engineer the future of the web and push the boundaries of what's possible, we encourage you to apply and become a vital part of our innovative team. This Frontend Engineer role offers a unique opportunity to be part of a team that is dedicated to pushing the boundaries of web development. We are not just building websites; we are creating digital experiences that leave a lasting impact on our users. As a Frontend Engineer, you will be a key player in this process, responsible for translating complex designs and user requirements into elegant, efficient, and highly performant code. A core aspect of this role is the emphasis on Next.js 14. This cutting-edge framework is revolutionizing how we build web applications, and we are looking for engineers who are excited to be at the forefront of this technology. As a Frontend Engineer, your responsibilities will encompass a wide range of tasks, including developing user-facing features, ensuring technical feasibility, optimizing for performance, collaborating with cross-functional teams, maintaining code quality, and staying up-to-date with industry trends. We are looking for someone who is not only technically proficient but also passionate about creating exceptional user experiences. The ideal candidate will possess a strong foundation in core web technologies, proficiency in React and TypeScript, experience with Next.js 14, and knowledge of modern frontend build tools. A passion for creating exceptional user experiences and pixel-perfect interfaces is essential, along with excellent problem-solving and communication skills. If you are ready to engineer the future of the web and push the boundaries of what's possible, we encourage you to apply and become a vital part of our innovative team."
  },
  {
    jobType: "Data Scientist",
    description: "Unlock Insights and Drive Innovation: Become a Data Scientist Shaping the Future of AI. Are you a curious and analytical recent graduate with a strong foundation in mathematics, statistics, and programming? Do you dream of extracting meaningful insights from complex datasets and building intelligent systems that drive impactful decisions? If so, we invite you to embark on an exciting career journey with us as a Data Scientist, where you will be at the forefront of leveraging data to power Artificial Intelligence and Machine Learning initiatives. This is an exceptional opportunity to contribute to cutting-edge projects, working with vast amounts of data and advanced technologies in a collaborative and intellectually stimulating environment. As a Data Scientist, you will be instrumental in the entire data science lifecycle, from understanding business problems and formulating analytical frameworks to collecting, cleaning, and preprocessing data, building and deploying predictive models, and communicating findings to stakeholders. You will work with a rich array of key technologies essential for AI and Data Science, including proficiency in programming languages such as Python and R, along with their extensive libraries for data manipulation (Pandas, NumPy), statistical analysis (SciPy, statsmodels), and machine learning (Scikit-learn, TensorFlow, PyTorch). You will also gain experience with big data processing frameworks like Spark and Hadoop, and cloud platforms such as AWS, Azure, or GCP for scalable data storage and computation. Familiarity with database systems, both relational (e.g., SQL) and NoSQL (e.g., MongoDB), will be crucial for data retrieval and management. Furthermore, you will utilize data visualization tools like Matplotlib, Seaborn, and Tableau or Power BI to effectively communicate complex data insights.Key Responsibilities: Collaborate with cross-functional teams to understand business objectives and translate them into structured data science problems; design and implement data collection, cleaning, and preprocessing pipelines to ensure data quality and integrity; perform exploratory data analysis (EDA) to identify patterns, trends, and anomalies, and generate insightful visualizations; develop and evaluate a variety of machine learning models (e.g., regression, classification, clustering, deep learning) using appropriate algorithms and techniques; deploy and monitor machine learning models in production environments, ensuring their performance and scalability; communicate complex data findings and actionable insights to technical and non-technical audiences through clear presentations and reports; stay abreast of the latest advancements in AI, machine learning, and data science methodologies and technologies; contribute to the development of innovative data-driven solutions and improve existing processes.What We Are Looking For:A Bachelor's or Master's degree in Data Science, Statistics, Computer Science, Mathematics, or a related quantitative field; a strong foundation in statistical concepts, probability theory, and linear algebra; proficiency in at least one programming language (Python or R) and relevant data science libraries; familiarity with machine learning algorithms and their underlying principles; experience with data manipulation and cleaning techniques; exposure to database systems and SQL; strong analytical and problem-solving skills; excellent communication and data visualization abilities; a proactive attitude and a strong desire to learn and grow in the field of AI and Data Science; familiarity with big data technologies and cloud platforms is a plus.If you are a highly motivated and intellectually curious individual eager to leverage the power of data to drive innovation in Artificial Intelligence and Machine Learning, we encourage you to apply and become a key contributor to our data-driven future! We are committed to fostering a collaborative and growth-oriented environment where you can expand your skills and make a significant impact."
  }
]

export { analysisData, jobDescriptionRef };
