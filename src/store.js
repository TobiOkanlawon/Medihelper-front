import { createStore } from 'vuex';

const store = createStore({
    state: {
        isLoggedIn: false,
        authenticationToken: '',
        role: '',
        user: {},
        prescriptions: []
    },
    mutations: {
        authUser(state, payload){
            state.authenticationToken = payload.token;
            state.user = payload.user
        },
        logoutUser(state){
            state.authenticationToken = ''
            state.user = {}
        },
        deleteDrug(state, payload){
            // payload is the id of the drug that is to be deleted
            state.prescriptions = state.prescriptions.filter( (entry)=> entry.id !== payload)
        },
        addDrugs(state, payload){
            state.prescriptions = payload
        }
    },

})

export default store;