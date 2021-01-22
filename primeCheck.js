function isprime(n){
    for(i = 2; i<n; i++){
    
        if(n % i == 0){
           return ("not a prime number");
         }
         else{
             return("Is a prime number");
         }
    }
}
var result = isprime(13)
console.log(result)
