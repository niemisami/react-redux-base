import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


import { MarkedPreview } from 'react-markdown-area';

const Home = ({ content, classNames }) => (
  <div className="row">
    {content.map((contentRow, index) => (
      <div key={index} className="col-xs-12 site-content" id={contentRow.title.toLowerCase()}>
        <div className="container">
          <div className="col-xs-12">
            <h1>{contentRow.title}</h1>
            <MarkedPreview
              classNames={classNames}
              value={contentRow.content}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
)


Home.defaultProps = {
  content: [],
  classNames: {
    textContainer: 'text-container'
  }
};


Home.propTypes = {
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

export default connect(mapStateToProps)(Home);
