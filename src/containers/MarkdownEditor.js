import React, { Component, PropTypes } from 'react';
import { MarkedPreview } from 'react-markdown-area';
import Textarea from '../components/Textarea';


class MarkdownEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.values
    };
  }

  handleTextChange = text => {
    this.setState({ value: text });
  };

  render() {
    const { label, classNames } = this.props;
    const { value } = this.state;
    return (
      <div className="markdown-area col-xs-12">
        <div className="row">
          <div className="col-xs-12">
            <p>Title:</p>
            <h3>{label}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p>Content:</p>
            <Textarea
              className="text-input"
              onTextChange={this.handleTextChange}
              value={value}
            />
          </div>
          <div className=" col-xs-6">
            <p>Preview:</p>
            <MarkedPreview
              classNames={classNames}
              value={value}
            />
          </div>

        </div>
      </div>
    );
  }
}

MarkdownEditor.defaultProps = {
  label: '',
  values: '### Start editing by typing here',
  classNames: {
    root: 'marked-area',
    header: 'marked-area-header',
    activeButton: 'marked-area-button active',
    defaultButton: 'marked-area-button',
    helpLink: 'marked-area-help-link',
    textContainer: 'text-container',
    liveDivider: 'marked-area-live-divider'
  }
};

MarkdownEditor.propTypes = {
  label: PropTypes.string,
  values: PropTypes.string,
  classNames: PropTypes.object


}

export default MarkdownEditor;
