export interface Whoa {
  movie: string;
  year: number;
  release_date: string;
  director: string;
  character: string;
  movie_duration: string;
  timestamp: string;
  full_line: string;
  current_whoa_in_movie: number;
  total_whoas_in_movie: number;
  whoa_grouping: null | {
    movie_whoa_group_index: number;
    current_whoa_in_group: number;
    total_whoas_in_group: number;
  };
  poster: string;
  video: {
    "1080p": string;
    "720p": string;
    "480p": string;
    "360p": string;
  };
  audio: string;
}
