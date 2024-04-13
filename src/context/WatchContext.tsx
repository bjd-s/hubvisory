import React, { createContext, useContext, useState } from 'react';

interface Media {
    id: number;
    title?: string;
    name?: string;
}

interface WatchContextType {
    watchList: Media[];
    addToWatchList: (media: Media) => void;
    removeFromWatchList: (media: Media) => void;
    watched: Media[];
    setWatched: (media: Media) => void;
}

export const WatchContext = createContext<WatchContextType | undefined>(undefined);

export const useWatchContext = () => {
    const context = useContext(WatchContext);
    if (!context) {
        throw new Error('useWatchContext doit être utilisé dans un WatchProvider');
    }
    return context;
};

export const WatchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [watchList, setWatchList] = useState<Media[]>([]);
    const [watched, setWatchedState] = useState<Media[]>([]);

    const addToWatchList = (media: Media) => {
        setWatchedState(prev => prev.filter(item => item.id !== media.id));

        setWatchList(prev => {
            const isMediaInList = prev.some(item => item.id === media.id);
            if (!isMediaInList) {
                return [...prev, media];
            }
            return prev;
        });
    };

    const removeFromWatchList = (media: Media) => {
        setWatchList(prev => prev.filter(item => item.id !== media.id));
    };

    const setWatched = (media: Media) => {
        removeFromWatchList(media);

        setWatchedState(prev => {
            const isMediaInList = prev.some(item => item.id === media.id);
            if (!isMediaInList) {
                return [...prev, media];
            }
            return prev;
        });
    };

    return (
        <WatchContext.Provider value={{ watchList, addToWatchList, removeFromWatchList, watched, setWatched }}>
            {children}
        </WatchContext.Provider>
    );
};