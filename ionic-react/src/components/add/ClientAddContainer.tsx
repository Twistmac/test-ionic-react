import React, {useState} from "react";
import {IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";
import {personAdd, document as ionDocument} from "ionicons/icons";
import './ClientAdd.css'
import {useMutation} from "@apollo/client";
import {ADD_CLIENT} from "../../data/query";
import {useAppDispatch} from "../../app/hooks";
import {addReduxClient} from "../../features/client/clientSlice";

interface ContainerProps {
    goBack?: () => void
}

const ClientAddContainer: React.FC<ContainerProps> = ({goBack}) => {

    const [name, setName] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const [addClient, addClientQuery] = useMutation<{ createClient: string }>(ADD_CLIENT);
    const dispatch = useAppDispatch()

    const addClientPost = () => {
        addClient({
            variables: {
                input: {
                    name,
                    note: parseInt(note)
                }
            }
        }).then(r => {
            if (r.data?.createClient) {
                dispatch(addReduxClient(r.data.createClient))
            }
            if (goBack) {
                goBack()
            }
        })
    }

    return (
        <IonContent>
            <IonList>
                <IonItem className={'margin-item'}>
                    <IonLabel>
                        <IonIcon slot="icon-only" icon={personAdd}/>
                    </IonLabel>
                    <IonInput className={'input-size'} value={name} placeholder="Name"
                              onIonChange={e => setName(e.detail.value!)}/>
                </IonItem>
                <IonItem className={'margin-item'}>
                    <IonLabel>
                        <IonIcon slot="icon-only" icon={ionDocument}/>
                    </IonLabel>
                    <IonInput className={'input-size'} value={note} placeholder="Note"
                              onIonChange={e => setNote(e.detail.value!)}/>
                </IonItem>
                <IonButton className="btn-save" expand="block" onClick={addClientPost}>Save</IonButton>
            </IonList>
        </IonContent>
    );
};

export default ClientAddContainer;
