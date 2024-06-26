/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
//============================================================================================================================================
// let magicians : string [] = ["Naseer", "Kashif", "Jamal"]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function make_great(magicianList : string[]):void
// {magicianList.forEach((magicians) => {console.log(`${magicians} the great`)})}
// make_great(magicians)
//-------------------------------------------------------------------------------------------------------------
var magicians = ["Naseer", "Kashif", "Jamal"];
function make_great(magicianList) { return magicianList.map(function (magician) { return "the Great ".concat(magician); }); }
function show_magicians(magicianList) { magicianList.forEach(function (magician) { console.log(magician); }); }
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
