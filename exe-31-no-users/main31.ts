/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//==========================================================================================================================================
let users1 : string [] = []
if(users1.length === 0){console.log("We need to find some users")}
else{
    for(let i = 0 ; i < users1.length ; i++){console.log(users1[i])}
}

let users2 : string [] = ["Shabbir", "Zaheer", "Ijaz", "Sarfraz"]
if(users2.length === 0){console.log("We need to find some users")}
else{
    for(let i = 0 ; i < users2.length ; i++){console.log(users2[i])}
}