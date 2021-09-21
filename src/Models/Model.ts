export interface Music {
  genres?: GenresEntity[] | null;
  videos?: VideosEntity[] | null;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface VideosEntity {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

export interface selectGenresEntity {
  value: number;
  label: string;
}

export interface Video {
  video: VideosEntity;
}
