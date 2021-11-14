// To check the number is prime or not

function isPrime(num) {
    for(var n = 2; n < num; n++)
        {
        if(num % n === 0) 
            {
             return false;    
            }
        }
        return num > 1; 
  }
  console.log(isPrime(7));