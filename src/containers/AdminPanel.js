import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MarkdownEditor from '../containers/MarkdownEditor';


const AdminPanel = ({ content }) => (
  <div className="row">
    <div className="col-xs-12 site-content" id="about">
      <div className="container">
        <h1>Hi! This is private stuff!</h1>
        <div className="row">
          {content[3] &&
            <MarkdownEditor
              id="markdowneditor"
              label={content[3].title}
              values={content[3].content}
            />
          }
        </div>
      </div>
    </div>
  </div>
)

AdminPanel.defaultProps = {
  content: []
}

AdminPanel.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  content: state.content.siteContent.content
});

export default connect(mapStateToProps)(AdminPanel);
