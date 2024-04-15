import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie, TvShow } from '../types';

export const useMedia = () => {
    const getTrendingData = async (): Promise<{movies: Movie[], tvShows: TvShow[]}> => {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const baseUrl = `${import.meta.env.VITE_REACT_APP_API_URL}trending/all/day`;

        const { data: { results } } = await axios.get(baseUrl, {
            params: {
                api_key: apiKey,
            }
        });

        interface ResultItem extends Partial<Movie & TvShow> {}

        const movies = results.filter((item: ResultItem) => item.title);
        const tvShows = results.filter((item: ResultItem) => item.name);

        return { movies, tvShows };
    }

    const { data, isLoading, error } = useQuery('trendingData', getTrendingData, {
        keepPreviousData: true,
    });

    return { data, isLoading, error };
};