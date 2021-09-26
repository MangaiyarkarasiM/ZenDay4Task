var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3/all',true);
req.send();
req.onload = function(){
    var result=JSON.parse(req.response);
    for(var i=0;i<result.length;i++)
    {
       console.log(result[i].flags);
    }
}
