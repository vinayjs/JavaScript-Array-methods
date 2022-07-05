// //-map()


// // // let jsArray = [1,2,3,4,5,6];
// // // let doubles = jsArray.map(x=>x*2);

// // // console.log(jsArray);
// // // console.log(doubles);


// // var lineup = [
// //     {
// //       id: 1,
// //       firstName: "Lionel ",
// //       lastName: "Messi"
// //     }, {
// //       id: 2,
// //       firstName: "Christiano",
// //       lastName: "Ronaldo"
// //     }, {
// //       id: 3,
// //       firstName: "Vinay",
// //       lastName: "Chandran"
// //     }, {
// //       id: 4,
// //       firstName: "Kareem",
// //       lastName: "Benzema"
// //     }, {
// //       id: 5,
// //       firstName: "Adarsh",
// //       lastName: "Chandran"
// //     }];



// // const fullName = lineup.map(player =>{
// //     let newObj = {};
// //     newObj["fullName"] = player.firstName + " " + player.lastName;
// //     return newObj;
// // });
// //  console.log(fullName);


// // const numArray = [1,2,3,4,5,6,7,8,9,10];
// // const divisibleBytwo = numArray.map((num) => {
// //  // if(num % 2 === 0 ){
// //  //   return num;
// // //  }
// // console.log(num); 


// // });

// //  console.log(divisibleBytwo);


// //- filter()

// const array = [1,2,3,4,5,6,7,8,];
// const newArray = array.filter(a => a%2 ===0);
// console.log(newArray);

const companies=[
    {  name : "company 1", category:"finanace", start:1991 , end :2002 },
    {  name : "company 2", category:"finanace", start:1996 , end :2018 },
    {  name : "company 3", category:"banking", start:1990 , end :2016 },
    {  name : "company 4", category:"medical", start:1987 , end :2021 },
    {  name : "company 5", category:"medical", start:1995 , end :2020 },
    {  name : "company 6", category:"banking", start:1988 , end :2019 },
];

// // const ages = [ 12,23,45,54,67,87,33];


// //forEach-


// // for (let i = 0; i <= companies.length;i ++){
// //     console.log(companies[i])};

// companies.forEach(function(i){
//     console.log(companies[i]);
// })

// // // //FILTER

// // // let canDrink =[];

// // // for (let i = 0 ; i <= ages.length; i ++){
// // //     if(ages[i]>=21){
// // //         canDrink.push(ages[i]);
// // //     }
// // // };
// // // console.log(canDrink);


// // // const canDrink = ages.filter(function(age){
// // //     if(age>=50){
// // //         return true;
// // //     }
// // // });
// // // console.log(canDrink);

// // // const canDrink = ages.filter(age => age>=21);
// // // console.log(canDrink);


// // // const retailComp = companies.filter(company => company.category==='medical');
// // // console.log(retailComp);



// // // //sort

// const sortCo = companies.sort(function(a,b){
//     if (a.start>b.start){
//         return 1;
//     }else {
//         return-1;
//     };
// })

//const sortCo = companies.sort((a,b)=> a.start>b.start? 1:-1);
const filter80s = companies.filter((a)=>a.start>=1980 && a.start<1990);


//console.log(sortCo);
console.log(filter80s);

