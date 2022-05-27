import React from "react";
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {ApolloProvider} from '@apollo/client';
import {Provider as ReduxProvider} from 'react-redux';
import {apolloClient} from './data/apolloClient';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AddClient from "./pages/AddClient";
import {store} from "./app/store";


setupIonicReact();

const App: React.FC = () => (
    <ReduxProvider store={store}>
        <ApolloProvider client={apolloClient}>
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/home">
                            <Home/>
                        </Route>
                        <Route exact path="/add">
                            <AddClient/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        </ApolloProvider>
    </ReduxProvider>
);

export default App;
