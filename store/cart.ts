import { RootState } from "~/store";
import { GetterTree, ActionTree, MutationTree } from "vuex";

interface ChatItem {
    sku: string;
    quantity: number;
}

const state = () => ({

});

type ChatState = ReturnType<typeof state>;


export {
    state,
    ChatState
};