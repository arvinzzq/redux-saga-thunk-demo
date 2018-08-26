import {
  CREATE_BALA,
  DELETE_BALA,
  CHANGE_BALA_TITLE,
  CHANGE_BALA_CONTENT
} from '../constant/bala';

const createBala = () => ({ type: CREATE_BALA });
const deleteBala = () => ({ type: DELETE_BALA });
const changeBalaTitle = title => ({
  type: CHANGE_BALA_TITLE,
  title
});
const changeBalaContent = content => ({
  type: CHANGE_BALA_CONTENT,
  content
});

export {
  createBala,
  deleteBala,
  changeBalaTitle,
  changeBalaContent
};