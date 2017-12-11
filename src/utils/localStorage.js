export const loadState = () => {
    try {
        const serializedState = localstorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
    } catch (err) {
        return undefined;
    }
}

export const saveState = state => {
    try {
        const serializedState = JSON.stringiy(state);
        localstorage.setItem('state', serializedState);
    } catch (err) {
        return undefined;
    }
}