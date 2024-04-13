import { QueryClient, QueryClientProvider } from 'react-query';
import { WatchProvider } from './context/WatchContext';
import Home from './Home';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <WatchProvider>
            <Home />
        </WatchProvider>
    </QueryClientProvider>
);

export default App;