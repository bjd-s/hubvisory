import React from 'react';
import { useWatchContext } from '../context/WatchContext';
import { Movie, TvShow, Genre } from '../types';
import { FaStar } from "react-icons/fa";

interface MediaProps {
    mediaData?: (Movie | TvShow)[];
    genres: Genre[];
    getGenreNames: (ids: number[], genres: Genre[]) => string;
    truncate: (str: string, maxLength: number) => string;
    mediaType: 'movie' | 'tvShow';
}

const Media: React.FC<MediaProps> = ({ mediaData, genres, getGenreNames, truncate, mediaType }) => {
    const { addToWatchList, setWatched } = useWatchContext();

    return (
        <>
            <h2>{mediaType === 'movie' ? 'Films :' : 'Séries télé :'}</h2>
            <div className='shows'>
                {mediaData && mediaData.map(media => (
                    <div key={media.id} className='shows_card'>
                        <div className='shows_img'>
                            <img src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`} />
                        </div>

                        <div className='shows_info'>
                        <h3>{mediaType === 'movie' ? (media as Movie).title : (media as TvShow).name}</h3>
                        <span>{getGenreNames(media.genre_ids, genres)}</span>

                            <div className='shows_rating'>
                                <FaStar color='gold' />
                                <span>{media.vote_average}</span>
                            </div>

                            <p>{truncate(media.overview, 50)}</p>

                            <div className='shows_buttons'>
                                <button onClick={() => addToWatchList(media)}>À regarder</button>
                                <button onClick={() => setWatched(media)}>Vu</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Media;