export const daysBetween = (dt2, dt1) => {
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

export const pageArray = (current, last) => {
  const delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [];
  let l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};
