import { Genre } from './types';

export const getGenreNames = (ids: number[], genres: Genre[]) => {
    const genreNames = ids.slice(0, 2).map(id => {
        const genre = genres.find(genre => genre.id === id);
        return genre ? genre.name : '';
    });

    return genreNames.length > 1 ? genreNames.join(', ') : genreNames[0] || '';
};

export const truncate = (str: string = '', maxLength: number = 50) =>
    str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;