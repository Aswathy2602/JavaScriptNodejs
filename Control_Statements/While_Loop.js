var n=123
var s=0

while(n!=0){
    d=n%10
    s=s+d
    n=Math.floor(n/10)
}
console.log(s)

n=123
s=0

do{
    console.log(n)
}while(s!=0)