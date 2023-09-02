function fiboSeries(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
      return fiboSeries(n - 1) + fiboSeries(n - 2);
    }
  }
  

// 1

function *fiboNum(num){

while(num>0){
yield fiboSeries(num)
num--;
}
 }
const generator = fiboNum(10);

for (const element of generator) {
  console.log(element);
}

// 2
function *fiboMax(max){
    let i=0
    while(fiboSeries(i)<max){
        yield fiboSeries(i++)
    }
    }
    const generator2= fiboMax(160);

for (const element of generator2) {
  console.log(element);
}