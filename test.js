
function testing(a,b){
  return a+b;
}

if(testing(10,20)===30)
{
    process.exit(0)
}
else{
    process.exit(1)
}