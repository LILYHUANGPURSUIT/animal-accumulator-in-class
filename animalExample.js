// let animals = ["Wombat", "Lion", "Jaguar", "Dragon", "Anteater", "Capybara"];
// // // Combine all strings with comma and space
// function combineStr(animalArr){
//     let animalsStr = "";
//     for(let i=0; i<animalArr.length;i++){
//         animalsStr += animalArr[i];
//         if(i !== animalArr.length-1){
//             animalsStr += ", ";
//         }
//     }
//     return animalsStr;
// }
// console.log(combineStr(animals));


// // Is an certain animal in the array?
// function isAnimalInArr(animalArr, animalToFind){
//     let hasFoundAnimal = false;
//     for(let i=0;i<animalArr.length;i++){
//         let animalInArr = animalArr[i];
//         if(animalInArr === animalToFind){
//             hasFoundAnimal = true;
//         }
//     }
//     return hasFoundAnimal;
// }
// console.log(isAnimalInArr(animals, "Cat"));

const animalsObjArr = [
    { name: "Wombat", age: 1, species: "Vombatus ursinus"},
    { name: "Lion", age: 8, species: "Panthera leo"},
    { name: "Jaguar", age: 6, species: "Panthera onca"},
    { name: "Dragon", age: 100, species: "Hungarian horntail"},
    { name: "Anteater", age: 1, species: "Tridactyla"},
    { name: "Capybara", age: 3, species: "Hydrochoerinae"},
];


// Find oldest animal
    // Return the age
    // Return the animal    ---> return object
    // function findOldOne(numbers) {
    //         let oldestAge = 0;   //or let oldestAge = null;
    //         for (let i=0; i<numbers.length;i++) {
    //             let animalAge = numbers[i].age
    //             if (animalAge > oldestAge) {
    //                 oldestAge = animalAge;
    //             };
    //          }
    //         return oldestAge;
    //     }
    //      console.log(findOldOne(animalsObjArr));

// Return the animal    ---> return object
// function findanimal(wholeInfor) {
//     let animal = wholeInfor[0];
//     for (let i=0; i<wholeInfor.length;i++) {
//         let animalAge = wholeInfor[i].age
//         if (animalAge > animal.age) {
//             animal = wholeInfor[i];
//         };
//      }
//     return animal;
// }
//  console.log(findanimal(animalsObjArr));

// Find youngest animal
    // Return the age
// function findYoungOne(animalArr) {
//     let yongestAge = animalArr[0].age;   
//         for (let i=0; i<animalArr.length;i++) {
//             let animalAge = animalArr[i].age
//             if (animalAge < yongestAge) {
//             yongestAge = animalAge;
//             };
//         }
//     return yongestAge;
// }
// console.log(findYoungOne(animalsObjArr));
    
// Return the animal   --> Return an object
// function findYoungestAnimal(wholeArr) {
//     let newObj = wholeArr[0];
//     for (let i=1; i<wholeArr.length;i++){
//         let outPut = wholeArr[i].age
//         if (outPut < newObj.age) {  
//             newObj = wholeArr[i];
//         }
//     }

//     return newObj;
// }

// console.log(findYoungestAnimal(animalsObjArr));

    // // Combine all names of anmials into a string with comma and space between
// function detailInfo(information) {
//     let newDetailInfo = "";
//     for (let i = 0; i < information.length; i++) {
//         newDetailInfo += information[i].name;
//         if (i !== information.length-1) {
//             newDetailInfo += ", ";
//         }
//     }
//     return newDetailInfo;
// }
// console.log(detailinfo(animalsObjArr));

// Is a certain animal in the array?
    // Return true/false
    // Return the animal
    // function findAnimal(allInfo, animal) {
    //     let hasCertainAn = false;
    //     for (let i = 0; i < allInfo.length; i++) {
    //         let exactAnimal = allInfo[i].name;
    //         if (exactAnimal === animal) {
    //             hasCertainAn = true;
    //         }
    //     }
    //     return hasCertainAn ;
    // }
    // console.log(findAnimal(animalsObjArr));

    // function findAnimalObjInarr(animalArr, nameOfAnimal) {
    //     let foundAnimalObj = {};
    //     for (let i=0;i<animalArr.length;i++) {
    //         let nameOfAnimalInArr = animalArr[i].name;
    //         if (nameOfAnimal === nameOfAnimalInArr) {
    //             foundAnimalObj = animalArr[i];
    //         }
    //     }
    //     return foundAnimalObj;
    // }
    // console.log(findAnimalObjInarr(animalsObjArr),"Wombat");

    // Filter array by number of letters in animal name
// Example: Names longer than 5
// function filterName(providedInfo, minNumOfChars) {
//     let newArr = [];
//     for (let i=0; i<providedInfo.length;i++) {
//         let certainName = providedInfo[i].name;
//         if (certainName.length > minNumOfChars) {
//             newArr.push(providedInfo[i]);
//         }
//     }
//     return newArr;
// }
// console.log(filterName(animalsObjArr, 5));

//Filter animals older than given age
// Example: Animals older than 4
// function oldAnimals(originalInro,minAge) {
//         let newArray = [];
//         for (let i=0; i<originalInro.length;i++) {
//             let newAge = originalInro[i].age;
//             if (newAge > minAge) {
//                 newArray.push(originalInro[i]);
//             }
//         }
//         return newArray;
//     }
//     console.log(oldAnimals(animalsObjArr,4));

//Find the average age of the animals
// function calcuAge(inforNew) {
//     let age = 0;
//     for (let i=0; i<inforNew.length;i++) {
//         let toAddAge = inforNew[i].age;
//         age += toAddAge;
//      }
//     return age/inforNew.length;
// }
//  console.log(calcuAge(animalsObjArr));