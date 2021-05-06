import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './components/pages/AboutPage';
import LandingPage from './components/pages/LandingPage';
import MissionBoardPage from './components/pages/MissionBoardPage';
import PageNotFound from './components/pages/PageNotFound';
import ResourceManagementPage from './components/pages/ResourceManagementPage';

function App(): JSX.Element {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/mb">
                    <MissionBoardPage />
                </Route>
                <Route exact path="/rm">
                    <ResourceManagementPage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/404">
                    <PageNotFound />
                </Route>
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
