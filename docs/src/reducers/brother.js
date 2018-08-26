import {
  CREATE_BROTHER,
  DELETE_BROTHER,
  CHANGE_BROTHER_TITLE,
  CHANGE_BROTHER_CONTENT,
  CHANGE_BROTHER_COLOR,
  CHANGE_BROTHER_COLOR_SUCCESS
} from '../constant/brother';

const brotherReducer = {
  [CREATE_BROTHER]: (state, action) => {
    console.log('create brother ~ ', state, action);
    return {
      ...state
    };
  },
  [DELETE_BROTHER]: (state, action) => {
    console.log('delete brother ~ ', state, action);
    return {
      ...state
    };
  },
  [CHANGE_BROTHER_TITLE]: (state, action) => {
    console.log('change brother title ~ ', state, action);
    return {
      ...state,
      title: action.title
    };
  },
  [CHANGE_BROTHER_CONTENT]: (state, action) => {
    console.log('change brother content ~ ', state, action);
    return {
      ...state,
      content: action.content
    };
  },
  [CHANGE_BROTHER_COLOR_SUCCESS]: (state, action) => {
    console.log('change brother color ~ ', state, action);
    console.log('state: ', state);
    console.log('action: ', action);
    return {
      ...state,
      color: action.color
    };
  }
};

export default brotherReducer;