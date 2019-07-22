function Prime(num) { //giving our function name prime//
  if(num < 2) return false;// if number is lees than 2 return false//
  for (var i = 2; i < num; i++) { //a loop to return values if divisible by 2 or not to return false if i is not and ifequal to return true//
      if(num%i==0)
          return false;
  }
  return true;
}
var array=[];// variable array to return prime less than 100 and are prime numbers//
for(i = 0; i < 100; i++){
  if(Prime(i))
   array.push(i);}
console.log(array)