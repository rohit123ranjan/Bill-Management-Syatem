export const formatSubscribersCount = (n) =>
  ((Math.log10(n) / 3) | 0) == 0
    ? n
    : Number((n / Math.pow(10, ((Math.log10(n) / 3) | 0) * 3)).toFixed(1)) +
      ["", "K", "M", "B", "T"][(Math.log10(n) / 3) | 0];

export const convertSecs = (num) => {
  const minutes = Math.floor(num / 60);
  let seconds = num % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  // var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";
  return hDisplay + mDisplay;
};
