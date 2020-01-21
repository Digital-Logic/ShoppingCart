
const state = () => ({
    counter: 1
});

type RootState = ReturnType<typeof state>;

export {
    state,
    RootState
};