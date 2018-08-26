import {
  CREATE_BALA,
  DELETE_BALA,
  CHANGE_BALA_TITLE,
  CHANGE_BALA_CONTENT
} from '../constant/bala';

const balaReducer = {
  [CREATE_BALA]: (state, action) => {
    console.log('create bala ~ ', state, action);
    return {
      ...state
    };
  },
  [DELETE_BALA]: (state, action) => {
    console.log('delete bala ~ ', state, action);
    return {
      ...state
    };
  },
  [CHANGE_BALA_TITLE]: (state, action) => {
    console.log('change bala title ~ ', state, action);
    return {
      ...state,
      title: action.title
    };
  },
  [CHANGE_BALA_CONTENT]: (state, action) => {
    console.log('change bala content ~ ', state, action);
    return {
      ...state,
      content: action.content
    };
  }
};

export default balaReducer;