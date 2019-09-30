import React from 'react';

import SearchBar from './components/search-bar/container';
import SearchResult from './components/search-result/container';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <SearchBar />
            <SearchResult />
        </React.Fragment>
    )
}

export default App;