const HEADERS = {
  Accept: 'Accept',
  ContentType: 'Content-Type',
  Authorization: 'Authorization',
  ApplicationJson: 'application/json',
  Urlencoded: 'application/x-www-form-urlencoded',
  TimeZoneKey: 'TimeZone',
  TimeZone: (new Date().getTimezoneOffset() / (-60)).toString(),
};

export const TRANSLATION_HEADERS = {
  ApplicationId: 3
};

export default HEADERS;
