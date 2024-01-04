const element1 : number[] = [1,2,9,11];
const element2 : number[] = [2,3,5,8,10,15,16,78];

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
console.log("Element1 : ",element1);
console.log("Element2 : ",element2);
console.log("Result : ",mergeTwoArray(element1,element2));