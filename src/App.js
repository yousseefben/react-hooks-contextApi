import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import LoginPage from './components/login/LoginPage';

const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const HomePage = React.lazy(() => import('./components/Episodes/Home'));
const MyLayout = React.lazy(() => import('./components/Layout/MyLayout'));
const LayoutRoute = React.lazy(() => import('./components/Layout/LayoutRoute'));
const EmptyLayout = React.lazy(() => import('./components/Layout/EmptyLayout'));


const App = () => {


    return (
        <React.Suspense fallback={<div>Loading...</div>}>

            <BrowserRouter basename={getBasename()}>
                <Switch>

                    <LayoutRoute
                        exact
                        path="/"
                        layout={MyLayout}
                        component={HomePage}
                    />
                    <LayoutRoute
                        exact
                        path="/login"
                        layout={EmptyLayout}
                        component={LoginPage}
                    />
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        </React.Suspense>

    );
};

export default App;

