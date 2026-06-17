export interface RoadmapMonth {
  month: number;
  technology: string;
  topics: string[];
  estimatedDuration: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  projects: string[];
  youtubeChannels: YoutubeChannel[];
}

export interface YoutubeChannel {
  name: string;
  url: string;
  description: string;
}

export interface Career {
  id: string;
  name: string;
  description: string;
  icon: string;
  roadmap: RoadmapMonth[];
  resources: string[];
  totalMonths: number;
}

export interface CareerProgress {
  careerId: string;
  completedMonths: number[];
  startDate: string;
}

export interface Resource {
  title: string;
  type: 'youtube' | 'course' | 'documentation' | 'github';
  url: string;
  description: string;
}
