import { RootState } from "~/store";
import { GetterTree, MutationTree, ActionTree } from "vuex";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sold: number;
}

interface ProductState {
    [key:string]: Product
}

const state = ():ProductState => ({});

const getters:GetterTree<ProductState, RootState> = {

};

const mutations:MutationTree<ProductState> = {
    ADD(state, product: Product) {
        state[product.id] = product;
    }
};

const actions:ActionTree<ProductState, RootState> = {
    getProducts({ commit }) {
        return this.$axios.get<Array<Product>>(`/api/products`)
            .then(({ data }) => {
                data.forEach(product => {
                    commit("ADD", product);
                    console.log(product);
                });
            })
            .catch(e => {
                console.error(e);
            });
    }
};

export {
    state,
    ProductState,
    getters,
    mutations,
    actions
};