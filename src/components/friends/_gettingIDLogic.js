let id = this.props.match.params.XXXID;

// Check if id passed from route has changed.
// If so, execute a new call
if (id && preProps.match.params.XXXID !== id) {
  // Make a new AJAX call
}
