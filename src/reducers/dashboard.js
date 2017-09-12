import moment from 'moment-timezone';

const initialState = {
  showingCustomTime: false, // inidicates that a custom (not current) time is displayed
  momentNow: moment(), // the time to be displayed on all clocks
  editedTimezone: null, // the name of the time zone that is now in edit mode
  editFieldValue: null, // the value of the input field for an edited time zone
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    // sets the time to be used for timezone adjusted display on all clocks
    case 'UPDATE_TIME':
      return Object.assign({}, state, {
        momentNow: action.momentNow,
        customTime: null,
      });

    // enables or disable edit mode on the specified timezone panel
    case 'TOGGLE_EDIT_MODE':
      return Object.assign({}, state, {
        editedTimezone: action.enable ? action.timezoneName : null,
        editFieldValue: action.enable ? action.fieldValue : null,
      });

    // updates state of the time input field while editing
    case 'UPDATE_EDIT_FIELD_VALUE':
      return Object.assign({}, state, {
        editFieldValue: action.fieldValue,
      });

    // sets the displayed time to the value specified as customTime, and sets
    // the showingCustomTime flag to indicate that clocks are not ticking
    case 'SHOW_CUSTOM_TIME':
      return Object.assign({}, state, {
        customTime: true,
        momentNow: action.customTime,
        editedTimezone: null,
        editFieldValue: null,
      });

    default:
      return state;
  }
};

export default dashboard;
