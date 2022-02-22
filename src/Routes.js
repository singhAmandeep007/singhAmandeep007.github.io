import React from 'react';
import { Switch, Route } from 'react-router-dom';

const FAKE_DELAY_TIME = 1200;

const HomePage = React.lazy(() =>
  fakeDelay(FAKE_DELAY_TIME)(import('./Pages/HomePage'))
);
const AboutPage = React.lazy(() =>
  fakeDelay(FAKE_DELAY_TIME)(import('./Pages/AboutPage'))
);
const ArticlesPage = React.lazy(() =>
  fakeDelay(FAKE_DELAY_TIME)(import('./Pages/ArticlesPage'))
);
const ProjectsPage = React.lazy(() =>
  fakeDelay(FAKE_DELAY_TIME)(import('./Pages/ProjectsPage'))
);

function fakeDelay(ms) {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
}

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
