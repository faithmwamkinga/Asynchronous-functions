// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.

// a promise
let promise = new Promise(function (resolve) {
    setTimeout(function () {
    resolve('Promise resolved')}, 5000); 
});

// async function
async function message() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('My name is Faith');
}

message();
    



//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
//when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID
//one by one, in sequence.

// function getUserData(id) {
    
// }

//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the
//task is successful and rejects if there's an error. Write a function that calls performTask() and 
//logs a custom success message if the task is successful, and a custom error message if there's an
//error.
// function performTask() {
    
// }
// let taskSuccessful = true;
// let promises = new Promise((resolve,reject)=>{
//     if (taskSuccessful){
//         setTimeout
//         {resolve("Task is successful")}
//     }
//     else{
//         reject("Error")
//     }


// }).then(()=>{console.log("I wil work hard");})
// .catch(()=>{
    // console.log("I will upskill");

// }).finally(()=>{console.log("I am worthy");})
// const student=async()=>{
//     let result= promise
//     console.log(result);
// }
// student()

