import React from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const ArticlesPage = React.lazy(() => import('./Pages/ArticlesPage'));
const ProjectsPage = React.lazy(() => import('./Pages/ProjectsPage'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about">
        <AboutPage />
      </Route>

      <Route exact path="/articles">
        <ArticlesPage />
      </Route>

      <Route exact path="/projects">
        <ProjectsPage />
      </Route>

      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
