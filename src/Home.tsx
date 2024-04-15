import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMedia } from './components/useMedia';
import Media from './components/Media';
import MediaLists from './components/MediaLists';
import { genres } from './genres';
import { getGenreNames, truncate } from './utils';

import './css/shows.css'
import './css/reactTabs.css'

const Home = () => {
    const { data, isLoading, error } = useMedia();

    const movieData = data?.movies ?? [];
    const tvShowData = data?.tvShows ?? [];

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h2>Tendances du moment</h2>
            {error instanceof Error && <p>Une erreur s'est produite : {error.message}</p>}

            <Tabs>
                <TabList>
                    <Tab>Films et séries</Tab>
                    <Tab>À regarder</Tab>
                    <Tab>Vu</Tab>
                </TabList>

                <TabPanel>
                    <Media mediaType="movie" mediaData={movieData} genres={genres} getGenreNames={getGenreNames} truncate={truncate} />
                    <Media mediaType="tvShow" mediaData={tvShowData} genres={genres} getGenreNames={getGenreNames} truncate={truncate} />
                </TabPanel>

                <TabPanel>
                    <MediaLists listType="watchList" title="À regarder" />
                </TabPanel>

                <TabPanel>
                    <MediaLists listType="watched" title="Vu" />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Home;