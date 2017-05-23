import * as types from '../actions/actionTypes';

const initialState = {
  siteContent: {
    title: '',
    content: []
  }
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_SITE_CONTENT:
      return state;
    case types.REQUEST_SITE_CONTENT_SUCCESS:
      return {
        ...state,
        siteContent: action.siteContent
      };
    default:
      return state;
  }
}
