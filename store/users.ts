import Vue from "vue";
import { RootState } from "~/store";
import { GetterTree, ActionTree, MutationTree } from "vuex";


interface User {
    name: string;
    id: string;
}

interface UserState {
    [id: string]: User
}

const state = ():UserState => ({});

const getters:GetterTree<UserState, RootState> = {

};

const mutations:MutationTree<UserState> = {
    ADD(state, user: User) {
        state[user.id] = user;
    }
};

const actions:ActionTree<UserState, RootState> = {
    getUsers({ commit }) {
        return this.$axios.get<Array<User>>(`/api/users`)
            .then(({ data }) => {
                data.forEach(user => {
                    commit("ADD", user);
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
};

export {
    state,
    UserState,
    getters,
    mutations,
    actions
};
