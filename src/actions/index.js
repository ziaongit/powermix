import { countAction } from './count';
import { appActions } from './appActions';

const initialState = {
    globalValue: 0,
    globalInput: '',
    appActions: {
        
        add: {},
        minus: {},
        
    },
    
};
const actions = {
    ...appActions,
    ...countAction,
};
export { initialState, actions };
