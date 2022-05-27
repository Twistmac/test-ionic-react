import {IonList, IonItem, IonLabel, IonContent} from '@ionic/react';
import React from "react";

interface ContainerProps {
    clients: any[]
}

const ClientListContainer: React.FC<ContainerProps> = ({clients}) => {

    return (
        <IonContent>
            <IonList>
                {clients.map((e) => {
                    return (<IonItem key={e.id}>
                        <IonLabel>{e.name}</IonLabel>
                        <IonLabel slot="end">{e.note}</IonLabel>
                    </IonItem>)
                })}

            </IonList>
        </IonContent>
    );
};

export default ClientListContainer;
