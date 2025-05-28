export interface Resume {
  _id: string;
  file_name: string;
  file_path: string;
  resume_id: string;
  status: string;
  uploaded_at: string;
  user_id: string;
}

export interface RootResume {
  grammar_analysis: GrammarAnalysis
  justifications: string
  overall_score: number
  refined_justifications: string[]
  refined_recommendations: string[]
  resume_data: ResumeData
  technical_score: TechnicalScore
}

export interface GrammarAnalysis {
  recommendations: string[]
  score: number
  section_scores: SectionScores
}

export interface SectionScores {
  action_verbs: ActionVerbs
  active_voice: ActiveVoice
  bullet_points: BulletPoints
  completeness: Completeness
  industry_fit: IndustryFit
  length: Length
  quantifiable: Quantifiable
  sentence_structure: SentenceStructure
  skills_format: SkillsFormat
}

export interface ActionVerbs {
  category: string
  details: Details
  score: number
}

export interface Details {
  avg_verb_strength_score: number
  bullet_count: number
  diversity_ratio: number
  missing_verb_bullet_examples: string[]
  missing_verb_ratio: number
  weak_verb_examples: string[]
}

export interface ActiveVoice {
  category: string
  details: Details2
  score: number
}

export interface Details2 {
  passive_ratio: number
  passive_sentence_count: number
  passive_sentence_examples: string[]
  sentence_count: number
}

export interface BulletPoints {
  category: string
  details: Details3
  score: number
}

export interface Details3 {
  avg_bullet_word_length: number
  avg_bullets_per_job: number
  jobs_with_zero_bullets: number
  long_bullet_examples: string[]
  percent_bullets_starting_verb: number
  short_bullet_examples: string[]
  total_bullets: number
  total_jobs_analyzed: number
}

export interface Completeness {
  category: string
  details: Details4
  score: number
}

export interface Details4 {
  missing_essential_sections: string[]
  missing_recommended_sections: string[]
  present_recommended_count: number
  present_sections: string[]
}

export interface IndustryFit {
  category: string
  details: Details5
  score: number
}

export interface Details5 {
  boost_reason: string
  keywords_found_in_skills: string[]
  match_ratio: number
  matched_keyword_count: number
  target_industry: string
  total_industry_keywords: number
}

export interface Length {
  category: string
  details: Details6
  score: number
}

export interface Details6 {
  total_bullet_meaningful_word_count: number
}

export interface Quantifiable {
  category: string
  details: Details7
  score: number
}

export interface Details7 {
  impact_keywords_without_metrics_count: number
  non_quantified_impact_examples: string[]
  quantified_bullet_count: number
  quantified_bullet_examples: string[]
  quantified_ratio: number
  total_bullets: number
}

export interface SentenceStructure {
  category: string
  details: Details8
  score: number
}

export interface Details8 {
  avg_sentence_length_tokens: number
  "long_sentence_count (>40 tokens)": number
  long_sentence_examples: string[]
  sentence_count: number
  "short_sentence_count (<8 tokens)": number
  short_sentence_examples: string[]
  std_dev_sentence_length: number
}

export interface SkillsFormat {
  category: string
  details: Details9
  score: number
}

export interface Details9 {
  detected_categorization_heuristic: boolean
  skill_count: number
  verbose_skill_examples: string[]
}

export interface ResumeData {
  certifications: string[]
  education: Education[]
  keywords: string[]
  personal_info: PersonalInfo[]
  projects: Project[]
  summary: string
  work_experience: WorkExperience[]
}

export interface Education {
  degree: string
  graduation_date: string
  institution: string
}

export interface PersonalInfo {
  email: string
  name: string
  phone: string
}

export interface Project {
  description: string[]
  name: string
}

export interface WorkExperience {
  company: string
  dates: string
  job_title: string
  responsibilities: string[]
}

export interface TechnicalScore {
  job_description_responsibilities: string
  justification: Justification
  key_responsibilities_comparison: {
    match_percentage: number
    matched_responsibilities: string[]
    missing_responsibilities: string[]
    possibly_matched_responsibilities: string[]
  }
  notes: string
  pass: boolean
  preferred_skills_found: string[]
  required_skill_match_percentage: number
  required_skills_found: string[]
  required_skills_found_count: number
  required_skills_missing: string[]
  section_scores: SectionScores2
  similarity_score: number
  skill_match_details: SkillMatchDetails
  total_required_skills_in_jd: number
}

export interface Justification {
  experience_and_projects: string
  overall: string
  skills: string
}

export interface SectionScores2 {
  work_experience_projects: number
  skills: number
}

export interface SkillMatchDetails {
  "analytical reasoning": [string, number]
  "deep learning": [string, number]
  java: [string, number]
  jenkins: [string, number]
  "machine learning": [string, number]
  mongodb: [string, number]
  python: [string, number]
  pytorch: [string, number]
  r: [string, number]
  "scikit-learn": [string, number]
  sql: [string, number]
  "team collaboration": [string, number]
  tensorflow: [string, number]
}

