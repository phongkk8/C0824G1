function migratoryBirds(arr) {
    let frequency=[];
    for (let i = 0; i < arr.length; i++) {
      let count=0
        for (let j =i +1; j < arr.length; j++) {
            if(arr[i]===arr[j]) {
                count+=1
            }
        }
    }


}