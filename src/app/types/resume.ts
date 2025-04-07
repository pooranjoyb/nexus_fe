export interface Resume {
  _id: string;
  file_name: string;
  file_path: string;
  resume_id: string;
  status: string;
  uploaded_at: string;
  user_id: string;
}

export interface ResumeData {
  grammar_analysis: {
    "recommendations": string[];
    "score": number,
    "section_scores": {
      "action_verbs": {
        "category": "Very Low",
        "details": {
          "avg_verb_strength_score": 0.25,
          "bullet_count": 10,
          "diversity_ratio": 0.5,
          "missing_verb_bullet_examples": [
            "Software development on Spring MVC based projects",
            "Working on automation softwares like Katalon and Jenkins",
            "Understanding of Java, SQL and build tools like Gradle and Maven."
          ],
          "missing_verb_ratio": 0.3,
          "weak_verb_examples": {
            "contributed": "Contributed to the development of the user interface of Iveye React Native App, ...",
            "worked": "Worked on a project named TaxLabs, which was based on React FE & Nestjs BE"
          }
        },
        "score": 20
      },
      "active_voice": {
        "category": "Medium",
        "details": {
          "passive_ratio": 0.12,
          "passive_sentence_count": 3,
          "passive_sentence_examples": [
            "Understanding of Java, SQL and build tools like Gradle and Maven.\nFrontend Engin...",
            "Projects\nC++ SDK support for Appwrite /external-link-alt Github /external-link-a..."
          ],
          "sentence_count": 24
        },
        "score": 70
      },
      "bullet_points": {
        "category": "High",
        "details": {
          "avg_bullet_word_length": 14.6,
          "avg_bullets_per_job": 3.3,
          "jobs_with_zero_bullets": 0,
          "long_bullet_examples": [],
          "percent_bullets_starting_verb": 40,
          "short_bullet_examples": [
            "\"Software development on Spring MVC based projects\" (7 words)"
          ],
          "total_bullets": 10,
          "total_jobs_analyzed": 3
        },
        "score": 85
      },
      "completeness": {
        "category": "Very High",
        "details": {
          "missing_essential_sections": [],
          "missing_recommended_sections": [
            "awards",
            "certifications",
            "summary"
          ],
          "present_recommended_count": 1,
          "present_sections": [
            "education",
            "keywords",
            "personal_info",
            "projects",
            "skills",
            "work_experience"
          ]
        },
        "score": 100
      },
      "industry_fit": {
        "category": "High",
        "details": {
          "boost_reason": "Boosted to High based on absolute match count (47)",
          "keywords_found_in_skills": [
            "base",
            "c#",
            "css",
            "next.js",
            "node.js",
            "orm",
            "pair programming",
            "python",
            "react native",
            "sql",
            "typescript"
          ],
          "match_ratio": 0.09,
          "matched_keyword_count": 47,
          "target_industry": "tech",
          "total_industry_keywords": 522
        },
        "score": 85
      },
      "length": {
        "category": "Medium",
        "details": {
          "total_bullet_meaningful_word_count": 146
        },
        "score": 70
      },
      "quantifiable": {
        "category": "Very Low",
        "details": {
          "impact_keywords_without_metrics_count": 1,
          "non_quantified_impact_examples": [
            "Identified, debugged, and resolved issues within the application, contributing t..."
          ],
          "quantified_bullet_count": 0,
          "quantified_bullet_examples": [],
          "quantified_ratio": 0.0,
          "total_bullets": 10
        },
        "score": 20
      },
      "sentence_structure": {
        "category": "High",
        "details": {
          "avg_sentence_length_tokens": 16.7,
          "long_sentence_count (>40 tokens)": 0,
          "long_sentence_examples": [],
          "sentence_count": 10,
          "short_sentence_count (<8 tokens)": 1,
          "short_sentence_examples": [
            "\"Software development on Spring MVC based projects\" (7 tokens)"
          ],
          "std_dev_sentence_length": 7.9
        },
        "score": 85
      },
      "skills_format": {
        "category": "High",
        "details": {
          "detected_categorization_heuristic": false,
          "skill_count": 12,
          "verbose_skill_examples": []
        },
        "score": 85
      }
    }
  },
  "justifications": "Overall Score: 56/100.\nAssessment: Needs Significant Revision. This reflects the analysis across key resume components:\n\n--- Detailed Analysis ---\n\n* Action Verbs (Category: Very Low, Score: 20/100):  - Outcome: Significantly below expectations; requires major attention.  - Detail: Weak verbs noted, e.g., 'worked' in \"Worked on a project named TaxLabs, which was based on React FE & Nestjs BE\"\n\n* Active Voice (Category: Medium, Score: 70/100):  - Outcome: Adequate, meets baseline expectations but could be improved.  - Detail: Passive voice used, e.g., \"Understanding of Java, SQL and build tools like Gradle and Maven.\nFrontend Engin...\"\n\n* Bullet Points (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.  - Detail: Very brief bullet points found, e.g., \"Software development on Spring MVC based projects\" (7 words)\n\n* Completeness (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Industry Fit (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n* Length (Category: Medium, Score: 70/100):  - Outcome: Adequate, meets baseline expectations but could be improved.\n\n* Quantifiable (Category: Very Low, Score: 20/100):  - Outcome: Significantly below expectations; requires major attention.  - Detail: Impact statements lack metrics, e.g., \"Identified, debugged, and resolved issues within the application, contributing t...\"\n\n* Sentence Structure (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.  - Detail: Very short/choppy sentences found, e.g., \"Software development on Spring MVC based projects\" (7 tokens)\n\n* Skills Format (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n--- Overall Recommendation ---\nA comprehensive revision focusing on 'Very Low' and 'Low' rated sections is necessary.",
  "overall_score": 48.8,
  "resume_data": {
    "certifications": [],
    "education": [
      {
        "degree": "Bachelors of Technology in Computer Science & Engineering",
        "graduation_date": "",
        "institution": "Sikkim Manipal Institute of Technology Majitar, Sikkim"
      },
      {
        "degree": "Higher Secondary Education",
        "graduation_date": "",
        "institution": "Salt Brook Academy Dibrugarh, Assam"
      }
    ],
    "keywords": [
      "Spring MVC",
      "Katalon",
      "Jenkins",
      "Java",
      "SQL",
      "Gradle",
      "Maven",
      "React",
      "Nestjs",
      "React Queries",
      "Web3",
      "React Native",
      "Firebase SDK",
      "Async-Storage",
      "Expo",
      "Supabase",
      "Redux",
      "Firebase Authentication",
      "Firebase Storage",
      "Tailwind CSS",
      "Framer Motion",
      "Web Development",
      "Machine Learning",
      "Operating System",
      "UNIX",
      "System Design",
      "Computer Architecture",
      "Comparison of Learning Algorithms",
      "Computational Theory"
    ],
    "personal_info": [
      {
        "email": "pooranjoyb2016@gmail.com",
        "name": "Pooranjoy Bhattacharya",
        "phone": ""
      }
    ],
    "projects": [
      {
        "description": "C++ SDK is built from scratch as a prototype for interacting with Appwrite’s back-end services. It allows users to perform a limited set of functionalities as of now, including the creation of databases, collections, and documents, while also enabling the retrieval of usage statistics and management of storage and account health. Tools Used: C++, Libcurl, CMake, Conan 2.0",
        "name": "C++ SDK support for Appwrite"
      },
      {
        "description": "StreeSaksham, an Expo React-Native App created to empower women by providing them with a platform, legal reforms, help forums and many more. Added the real-time SOS Assistance that can be used in emergency situations. Offers skill-building and therapy resources to enhance women’s capabilities. Tools Used: React Native, Firebase SDK, Async-Storage",
        "name": "Stree Saksham"
      },
      {
        "description": "PopShop is an eCommerce Website based on React TypeScript and Daisy UI, integrating Supabase for Backend and Database. Admin Dashboard to track user-onboarding & product analytics. Managing Orders & Cart functionalities. Integrated Checkout and Payment Management. Successfully setup the CI/CD pipeline with GitHub actions. Tools Used: TypeScript, React, Redux, Supabase",
        "name": "PopShop"
      },
      {
        "description": "Developed and deployed the official website for GDSC using ReactJS and Tailwind CSS, ensuring a responsive and visually appealing user interface. Implemented Firebase Authentication for secure login and registration, enhancing user experience with session management. Integrated Firebase Storage for efficient media and file management, enabling smooth uploads and downloads of assets. Tools Used: TypeScript, React, Firebase SDK, Tailwind CSS, Framer Motion",
        "name": "GDSC-SMIT Official Website"
      }
    ],
    "skills": [
      "Typescript",
      "Python",
      "C/C++",
      "R Programming",
      "React/Next.js",
      "React-Native/Electron",
      "Tailwind CSS/Daisy UI",
      "Node.js/Flask/Nest.js",
      "Appwrite/Firebase",
      "MongoDB/MySQL/Postgres",
      "Supabase",
      "Prisma ORM"
    ],
    "work_experience": [
      {
        "company": "Noruma Research Institute Financial Technologies Pvt. Ltd.",
        "dates": "Aug’24 – Present",
        "job_title": "Associate Software Engineer Intern",
        "responsibilities": [
          "Software development on Spring MVC based projects",
          "Working on automation softwares like Katalon and Jenkins",
          "Understanding of Java, SQL and build tools like Gradle and Maven."
        ]
      },
      {
        "company": "Webknot Technologies",
        "dates": "May – July’24",
        "job_title": "Frontend Engineer Intern",
        "responsibilities": [
          "Worked on a project named TaxLabs, which was based on React FE & Nestjs BE",
          "Completing the User Onboarding module for the Super Admin Portal, enhancing the user experience and streamlining the onboarding process.",
          "API integrations and state management using React Queries.",
          "Identified, debugged, and resolved issues within the application, contributing to its stability and performance improvements."
        ]
      },
      {
        "company": "Trikara Technologies Pvt. Ltd.",
        "dates": "Mar – May’24",
        "job_title": "Full Stack Developer Intern",
        "responsibilities": [
          "Worked on the development of VersoView App, the first decentralized Web3 Social Media Platform.",
          "Contributed to the development of the user interface of Iveye React Native App, enhancing the app’s visual appeal and user experience.",
          "Worked on a module where I utilized webhooks and APIs to facilitate direct communication with applications like Slack, Teams, Discord, Jira, and Asana, streamlining workflow and integration processes."
        ]
      }
    ]
  },
  "technical_score": {
    "justification": {
      "experience_and_projects": "Compared 3 work experience entries. Compared 4 project entries. Compared against JD title 'Software Developer' and 3 key responsibilities.",
      "overall": "Job classified as technical: True. Using technical weights: Experience/Projects=45%, Skills=55%. Weighted average score before bonus: 43.27%. Keyword match bonus (15.0% factor applied to weighted score * keyword match %): +0.72%. Final Score (Weighted Avg + Bonus, capped at 100%): 44.0%. Pass: False.",
      "skills": "Resume skills considered: 12 JD required skills: 9, preferred skills: 0 Required skills found (1/9): ['python']. Required skills missing: ['c', 'databases', 'java', 'javascript', 'nosql', 'software development frameworks', 'sql', 'writing unit tests']. Preferred skills found (0/0): None. Keyword match (required only): 11.11%. Final Skills Score: 37.78%."
    },
    "keyword_match_percentage": 11.11,
    "keywords_found_count": 1,
    "keywords_missing": [
      "c",
      "databases",
      "java",
      "javascript",
      "nosql",
      "software development frameworks",
      "sql",
      "writing unit tests"
    ],
    "notes": "Dict-Compare Score based on sentence-transformers/all-mpnet-base-v2. Pass Threshold: 80.0%. Tech job: True.",
    "pass": false,
    "section_scores": {
      "experience_and_projects": 49.99,
      "skills": 37.78
    },
    "similarity_score": 44.0,
    "total_keywords_in_jd": 9
  }
}

