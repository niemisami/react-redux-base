import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Home = ({ content }) => (
  <div className="row">
    {content.map((contentRow, index) => (
      <div key={index} className="col-xs-12 site-content" id={contentRow.title.toLowerCase()}>
        <div className="container">
          <h1>{contentRow.title}</h1>
          <p>{contentRow.content}</p>
        </div>
      </div>
    ))}
  </div>
)

Home.defaultProps = {
  content: []
}

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
