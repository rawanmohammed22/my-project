function getav(num1,num2,num3,o){

 let sum =num1+num2+num3+o;


 let avg = sum/3;
 console.log(avg)



}
let nums=[40,50,60,70];

getav(...nums)








function getav(...nums){

 let sum= 0
 for(const num of nums){
    sum=+num;

 }
let avg = sum/nums.length;
console.log(avg)


}

getav=(30,40,50,60)




 let obj1={
    name :"rawan",
    age :"20"

}
let obj2= {
    salary :"6000",
    ...obj1

}
console.log(obj2)