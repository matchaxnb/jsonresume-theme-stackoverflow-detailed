const moment = require('moment');

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY'),
  RIGHTDATE: date => { 
    const dS = date.toString();
    if (dS === '9999') { // special case for "Continuous"
      return "Continuous"
    }
    if (dS === '8999') { // special case for "Current"
      return "Current"
    } 
    if (dS.length <= 4) {
      return dateHelpers.Y(date)
    } else if (dS.length <= 7) {
      return dateHelpers.MY(date)
    }
    return dateHelpers.DMY(date);
  },
  DATESPANMY: (date1, date2) => {
    console.log("Foo", date1, date2);
    if (date1 === undefined && date2 === undefined) {
      return undefined;
    }
    else if (date1 === undefined || date2 === undefined) {
      return dateHelpers.RIGHTDATE((date1 || date2));
    }
    const my1 = dateHelpers.RIGHTDATE(date1);
    const my2 = dateHelpers.RIGHTDATE(date2);
    if (my1 != my2) {
      return my1 + " - " + my2;
    }
    return my1;
  }
};

module.exports = { dateHelpers };
