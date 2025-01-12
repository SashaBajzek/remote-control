module.exports = {
  serverPort: 3231,
  heartBeat: 10000,
  liveStatusInterval: 15000,
  reCaptchaSecretKey: "6Lfg_KYUAAAAAILikAGmfmaR3IvYw3eeucDBp-TU",
  secret: "temp_secret",
  maxTimeout: 15768000, //6 months
  loadMessages: 25, //number of messages chatroom will get on load
  currentAPIVersion: "/dev",
  passResetExpires: Date.now() + 900000 //about 15 minutes
};
