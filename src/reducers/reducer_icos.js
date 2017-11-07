import { FILTER_SELECTED, FETCH_ICOS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ICOS:
      const { data } = action.payload;
      return { ...state, data };
    case FILTER_SELECTED:
      const selectedFilter = action.payload;
      return { ...state, selectedFilter};
    default:
      return state;
  }
}