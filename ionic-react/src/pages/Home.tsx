import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar, useIonAlert,
} from '@ionic/react';
import ClientListContainer from '../components/list/ClientListContainer';
import './Home.css';
import {addOutline, document as documentMean} from "ionicons/icons";
import {useHistory} from "react-router";
import React, {useEffect} from "react";
import {useApolloClient} from "@apollo/client";
import {GET_CLIENT, GET_MEAN} from "../data/query";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {setClient} from "../features/client/clientSlice";

const Home: React.FC = () => {
    const history = useHistory();
    const [present] = useIonAlert();
    const clientApi = useApolloClient();
    const clients = useAppSelector(state => state.client.clients);
    const dispatch = useAppDispatch()
    const goToAddPage = () => {
        history.push('/add')
    }
    const getMean = () => {
        clientApi.query<{ clientMean: any }>({
            query: GET_MEAN
        }).then(r => {
            present({
                cssClass: 'my-css',
                header: 'Mean',
                message: `Client mean : ${r.data.clientMean}`,
                buttons: [
                    'Cancel',
                ],
            })
        })
            .catch((e) => console.log(e))
    }

    const getClients = () => {
        clientApi.query<{ listClient: any[] }>({
            query: GET_CLIENT
        }).then(r => dispatch(setClient(r.data.listClient)))
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        getClients()
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Client</IonTitle>
                    <IonButtons slot="secondary">
                        <IonButton onClick={getMean}>
                            <IonIcon slot="icon-only" icon={documentMean}/>
                        </IonButton>
                        <IonButton onClick={goToAddPage}>
                            <IonIcon slot="icon-only" icon={addOutline}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Client</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ClientListContainer clients={clients}/>
            </IonContent>
        </IonPage>

    );
};

export default Home;
