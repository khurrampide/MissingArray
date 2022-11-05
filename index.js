let arr1 = [11, 15, 17, 18, 19];
arr1.sort((a,b)=> a-b);

start = arr1[0];
end = arr1[arr1.length - 1];
let i = 1;
while (start < end){
  if (arr1[i] != ++start){
    arr1.splice(i,0,start);
    i++;
    console.log(`Missing ${start} at [${i-1}]`);
  }else{
   
    i++;
  }
}