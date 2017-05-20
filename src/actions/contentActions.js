import * as types from './actionTypes';
import * as ui from './uiActions';

// const timeoutLong = 3000;
const timeoutShort = 500;

export const fetchSiteContent = () => dispatch => {
  dispatch({
    type: types.REQUEST_SITE_CONTENT
  })

  ui.displayLoader(true)(dispatch);

  // TODO: server side. Give a priority number for each content which determs
  //the order on the web site

  setTimeout(() => {
    ui.displayLoader(false)(dispatch);

    const siteContent = {
      title: 'Sami Nieminen',
      content: [
        {
          title: 'About',
          content: 'Hi! My name is Sami Nieminen',
          order: 0
        },
        {
          title: 'Project',
          content: 'I have done different things',
          order: 1
        },
        {
          title: 'Contacts',
          content: 'Check my GitHub!',
          order: 2
        }
      ]
    };

    const sortedContent = siteContent.content.sort(compareContentItems)
    const sortedSiteContent = {
      ...siteContent, content: sortedContent
    }
    dispatch({
      type: types.REQUEST_SITE_CONTENT_SUCCESS,
      siteContent: sortedSiteContent
    })
  }, timeoutShort)
}

const compareContentItems = (a, b) => {
  if (a.order < b.order) {
    return -1;
  } else if (a.order > b.order) {
    return 1;
  }
  return 0;
}
