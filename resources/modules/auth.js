import Axios from 'axios'

export default {
    state: {
        permissions: [],
        roles: [],
        groups: [],
        users: []
    },
    actions: {
        postLogin: (context, payload) => {
            console.log(payload)
            let form = payload.target
            console.log(form, new FormData(form))
            return Axios.post(form.action, new FormData(form))
        },
        getPermissions: ({ commit, getters }, payload) => {
            Axios.get('/admin/security/permissions')
                .then(res => commit('PERMISSIONS', res.data))
                .catch(err => commit('PERMISSIONS', err.response.data))
        }
    },
    mutations: {
        PERMISSIONS: (state, payload) => (state.permissions = payload),
        ROLES: (state, payload) => (state.roles = payload),
        GROUPS: (state, payload) => (state.groups = payload),
        USERS: (state, payload) => (state.users = payload)
    },
    getters: {
        Permissions: state => state.permissions,
        Roles: state => state.roles,
        Groups: state => state.groups,
        Users: state => state.users
    }
}
