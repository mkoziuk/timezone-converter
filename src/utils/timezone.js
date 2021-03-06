import moment from 'moment-timezone';

const timezoneUtils = {
  getTimezoneInfo(timezoneName) {
    if (!timezoneName || !moment.tz.zone(timezoneName)) {
      throw Error(`No such timezone: ${timezoneName}`);
    }

    const timezoneObj = moment().tz(timezoneName);
    const timezoneInf = timezoneName.replace('_', ' ').split('/');

    return {
      name: timezoneName,
      region: (timezoneInf.length > 1) ? timezoneInf[1] : timezoneInf[0],
      area: (timezoneInf.length > 1) ? `(${timezoneInf[0]})` : '',
      info: timezoneObj.format('z (Z)'),
    };
  },
};

export default timezoneUtils;
