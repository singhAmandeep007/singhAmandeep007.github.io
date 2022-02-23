import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';
import './styles.css';

const GithubCalendar = () => {
  useEffect(() => {
    GitHubCalendar('.calendar', 'amandeepmicro', {
      responsive: true,
      tooltips: true,
      global_stats: false,
    });
  }, []);

  return <div className="calendar"></div>;
};

export default GithubCalendar;
