import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ClientState {
    clients : any []
}

const initialState: ClientState = {
    clients: []
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient : (state,action: PayloadAction<any[]>)=> {
            state.clients = action.payload
        },
        addReduxClient : (state,action: PayloadAction<any>)=> {
            state.clients.push(action.payload)
        },
    },
});

export const { addReduxClient,setClient } = clientSlice.actions



