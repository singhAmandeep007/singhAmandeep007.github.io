import React from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Pages/HomePage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const ArticlesPage = React.lazy(() => import('./Pages/ArticlesPage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage'));
const PortfolioPage = React.lazy(() => import('./Pages/PortfolioPage'));
const ResumePage = React.lazy(() => import('./Pages/ResumePage'));

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/about">
            <AboutPage />
         </Route>
         <Route exact path="/articles">
            <ArticlesPage />
         </Route>
         <Route exact path="/contact">
            <ContactPage />
         </Route>
         <Route exact path="/portfolio">
            <PortfolioPage />
         </Route>
         <Route exact path="/resume">
            <ResumePage />
         </Route>
         <Route exact path="/">
            <HomePage />
         </Route>
      </Switch>
   );
};

export default Routes;
