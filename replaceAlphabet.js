let str='javascript';

let n=2;

let newStr=''

function changeString(str,n,newStr){
  let m=0;
  for(let i=0;i<str.length;i++){
    if(i<=str.length-(n+1)){
      newStr+=str[i+n];
    }else{
      newStr+=str[m];
      m=m+1;
    }
  }
  
  return newStr
  
}

console.log(changeString(str,n,newStr));