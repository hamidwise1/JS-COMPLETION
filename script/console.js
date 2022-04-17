//different console methods
console.time('loging timing');
const profileInfo = 'created at saturday 15';
console.log(profileInfo);
console.debug(profileInfo);
console.error(profileInfo);
console.warn(profileInfo);
console.timeLog('loging timing');
console.log(
  '%c this message is styled log',
  'color:red;background-color:green;font-size:24px;'
);
console.clear();
const container = document.querySelector('.container');
// console.dir(container);
console.timeEnd('loging timing');
