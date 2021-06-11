let array = [[10,10,2,0,20,4],[1,0,0,30,2,5],[0,10,4,0,2,0],[1,0,2,20,0,4]]
let max = Math.max(...array[0])
let a = 0;
let listA = []
listA.push(max)
let diagonal;
let anti_diagonal;
for (let i of array){
    let index = array[a].indexOf(max)
    a += 1
    if (index < i.length){
        diagonal = array[a][index-1]
    }
    if(diagonal === undefined){
        diagonal = 0
    }
    if (index < i.length){
        anti_diagonal = array[a][index+1]
    }
    if (anti_diagonal === undefined){
        anti_diagonal = 0
    }
    if (diagonal > anti_diagonal){
        max = diagonal
    }else{
        max = anti_diagonal
    }
    listA.push(max)
}
let result = listA.reduce((num1,num2) => (num1+num2))
console.log(result)