import * as types from './actionTypes';

const timeoutLong = 3000;
const timeoutShort = 500;

export const fetchSiteContent = () => dispatch => {
  dispatch({
    type: types.REQUEST_SITE_CONTENT
  })

  // TODO: server side. Give a priority number for each content which determs
  //the order on the web site

  setTimeout(() => dispatch({
    type: types.REQUEST_SITE_CONTENT_SUCCESS,
    siteContent: {
      title: 'Sami Nieminen',
      content: [
        {
          title: 'About',
          content: 'Hi! My name is Sami Nieminen'
        },
        {
          title: 'Project',
          content: 'I have done different things'
        },
        {
          title: 'Contacts',
          content: 'Check my GitHub!'
        }
      ]
    }
  }), timeoutLong)
}
