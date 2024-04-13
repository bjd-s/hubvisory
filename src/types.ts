export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    genre_ids: number[];
    vote_average: number;
    overview: string;
}

export interface TvShow {
    id: number;
    name: string;
    poster_path: string;
    genre_ids: number[];
    vote_average: number;
    overview: string;
}

export interface Genre {
    id: number;
    name: string;
}