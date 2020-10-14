import React, { useState, useEffect } from 'react';
import { Console, Hook, Unhook } from 'console-feed';

const PREFIX = '[LogsViewer]';

const LogsViewer = React.memo(() => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    Hook(window.console, (log) => setLogs((currLogs) => [...currLogs, log]), false);
    return () => Unhook(window.console);
  }, []);

  const logFilter = ({ data }) => {
    const firstItem = data[0];

    if (typeof firstItem !== 'string') {
      return false;
    }

    return firstItem.includes(PREFIX);
  };

  return (
    <div style={{ backgroundColor: '#242424' }}>
      <Console logs={logs} variant="dark" logFilter={logFilter} />
    </div>
  );
});

export default LogsViewer;
