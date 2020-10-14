import React, { useEffect } from 'react';
import LogsViewer from './logs-viewer';

const App = React.memo(() => {
  useEffect(() => {
    console.log('[LogsViewer] This is a logs', { key: 'value' });
    console.warn('[LogsViewer] This is a warning', 'message');
    console.info('[LogsViewer] This is an info', 'message');
    console.debug('[LogsViewer] This is a debug', 'message');
  }, []);

  return (<LogsViewer />);
});

App.propTypes = {};

export default App;
