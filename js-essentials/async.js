const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

myPromise.then((value) => console.log(value));

const myPromiseFailure = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  } else {
    reject("Failure");
  }
});

myPromiseFailure
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

const o1 = {id: 1};
const o2 = {id: 2};
const o3 = {id: 3};

const myArr = [o1, o2, o3];
console.log('My Array = ', myArr);
console.log('Is Exist = ', myArr.includes(o1));