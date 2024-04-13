import React from 'react';
import { useWatchContext } from '../context/WatchContext';

interface MediaListsProps {
    listType: 'watchList' | 'watched';
    title: string;
}

const MediaLists: React.FC<MediaListsProps> = ({ listType, title }) => {
    const { watchList, watched } = useWatchContext();
    const list = listType === 'watchList' ? watchList : watched;

    return (
        <div>
            <h2>{title} :</h2>
            <ul>
                {list.map(media => (
                    <li key={media.id}>
                        {media.title || media.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MediaLists;