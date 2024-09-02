var a=[1,2,3,4]

for(var i of a){
    i=i*i
    console.log(i)
}

var b=['a','b','c','d']

for(var[index,i] of b.entries()){
    console.log(index+'->'+i)
}

var c='String'

for(var i of c)
    console.log(i)