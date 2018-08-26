import {
  CREATE_BROTHER,
  DELETE_BROTHER,
  CHANGE_BROTHER_TITLE,
  CHANGE_BROTHER_CONTENT,
  CHANGE_BROTHER_COLOR
} from '../constant/brother';

const createBrother = () => ({ type: CREATE_BROTHER });
const deleteBrother = () => ({ type: DELETE_BROTHER });
const changeBrotherTitle = title => ({
  type: CHANGE_BROTHER_TITLE,
  title
});
const changeBrotherContent = content => ({
  type: CHANGE_BROTHER_CONTENT,
  content
});

// const changeBrotherColor = color => (dispatch, getState) => {
//   console.log('state -> ', getState());
//   dispatch({
//     type: CHANGE_BROTHER_COLOR,
//     color
//   });
// };

const changeBrotherColor = color =>  ({ type: CHANGE_BROTHER_COLOR, color });

export {
  createBrother,
  deleteBrother,
  changeBrotherTitle,
  changeBrotherContent,
  changeBrotherColor
};