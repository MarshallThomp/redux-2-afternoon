import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUSET_USER_DATA = 'REQUSET_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUSET_USER_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    let {type, payload} = action
    switch(type) {
        case REQUSET_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = this.state.user
            return {email, firstName, lastName}
        default:
            return state
    }
}