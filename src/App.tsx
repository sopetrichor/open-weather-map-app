import React from 'react';

import SearchPanel from '@components/search-panel/container';
import DailyForecast from '@components/daily-forecast/container';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <SearchPanel />
      <DailyForecast />
    </React.Fragment>
  );
};

export default App;
