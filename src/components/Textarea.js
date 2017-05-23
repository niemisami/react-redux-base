import React, { PropTypes } from 'react';

const Textarea = ({
  value,
  onTextChange
}) => {
  //FIXME: after tab pressed the cursor moves to the end of the textarea
  //FIXME: tab breaks editor history (ctrl+z)
  const handleKeyEvent = event => {
    // Prevent default tab behaviour
    if (event.keyCode === 9) {
      // get the position where tab was pressed and add \t in between

      const selectionStart = event.target.selectionStart;
      const selectionEnd = event.target.selectionEnd;
      const tabbedString = event.target.value.substring(0, selectionStart) +
        '\t' +
        event.target.value.substring(selectionEnd);
      onTextChange(tabbedString);
      event.preventDefault()
    }
  };

  return (
    <textarea
      className='text-input'
      value={value}
      onChange={e => onTextChange(e.target.value)}
      onKeyDown={handleKeyEvent}
    />
  );
}

Textarea.defaultProps = {
  value: ''
}

Textarea.propTypes = {
  value: PropTypes.string,
  onTextChange: PropTypes.func.isRequired
}

export default Textarea;
