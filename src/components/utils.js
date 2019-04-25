export const daysBetween = (dt2, dt1) => {
  console.log(dt2);
  let unit = "";
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 365;
  if (diff > 2) unit = "years";
  else if (diff > 1) unit = "year";
  else {
    diff *= 12;
    if (diff > 2) unit = "months";
    else if (diff > 1) unit = "month";
    else {
      diff /= 12;
      diff *= 365;
      console.log(dt2, dt1);
      if (diff > 2) unit = "days";
      else if (diff > 1) unit = "day";
      else {
        return "Today";
      }
    }
  }
  return Math.abs(Math.round(diff)) + " " + unit + " ago";
};

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
