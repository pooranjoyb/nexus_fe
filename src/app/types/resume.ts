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
    recommendations: string[];
    score: number;
    section_scores: {
      action_verbs: number;
      active_voice: number;
      bullet_points: number;
      completeness: number;
      industry_fit: number;
      length: number;
      quantifiable: number;
      sentence_structure: number;
      skills_format: number;
    };
  };
  overall_score: number;
  resume_data: {
    certifications: string[];
    education: [
      {
        degree: string;
        graduation_date: string;
        institution: string;
      }[]
    ];
    keywords: string[];
    personal_info: [
      {
        email: string;
        name: string;
        phone: string;
      }
    ];
    projects: [
      {
        description: string;
        name: string;
      }[]
    ];
    skills: string[];
    work_experience: {
      company: string;
      dates: string;
      job_title: string;
      responsibilities: string[];
    }[];
  };
}
