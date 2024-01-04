function mergeTwoArray(element1:number[],element2:number[]){
    let start1 = 0;
    let start2 =0;
    const n = element1.length;
    const m = element2.length;
    const result : number[] = [];
    
    while( (start1 < n) || (start2 < m)){
        if(start1 == n){ //element2 is empty
            result.push(element2[start2]);
            start2+=1;
        }
        else if(start2 == m){ //element1 is empty
            result.push(element1[start1]);
            start1+=1;
        }
        else{
            if(element1[start1] < element2[start2]){
                result.push(element1[start1]);
                start1+=1;
            }else{
                result.push(element2[start2]);
                start2+=1;
            }
        }
    }
    return result; // O(n+m)
}

const collection1 = [1, 3, 5, 7];
const collection2 = [2, 4, 6, 8];
const expectedTest1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Test 1")
console.log("Element1 : ",collection1);
console.log("Element2 : ",collection2);
console.log("Result For Test1 : ",mergeTwoArray(collection1,collection2));

const collection3: number[] = [];
const collection4 = [2, 4, 6, 8];
const expectedTest2 = [2, 4, 6, 8];
console.log("Test 2")
console.log("Element1 : ",collection3);
console.log("Element2 : ",collection4);
console.log("Result For Test2 : ",mergeTwoArray(collection3,collection4));

const collection5: number[] = [];
const collection6: number[] = [];
const expectedTest3: number[] = [];
console.log("Test 3")
console.log("Element1 : ",collection5);
console.log("Element2 : ",collection6);
console.log("Result For Test3 : ",mergeTwoArray(collection5,collection6));

