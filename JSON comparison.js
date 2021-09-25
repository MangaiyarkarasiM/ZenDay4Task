var sameprop=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            sameprop=false;
            break;
        }
    }
}
else {
    sameprop=false;
}
if(sameprop)
{
	console.log("Two JSON have the same properties");
}
else
{
	console.log("Two JSON have the different properties");
}