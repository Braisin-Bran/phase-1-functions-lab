// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue<42){
        const distance = 42-someValue;

        return(distance);
    }else if(someValue>42){
        const distance =someValue-42;
        return(distance);
    }

    
}
function distanceFromHqInFeet(someValue){
    const distance = distanceFromHqInBlocks(someValue)*264;
    return(distance);

}
function distanceTravelledInFeet(start, destination){
    if(start>destination){
    const distance = (start-destination)*264;
    return (distance);
}
if(start<destination){
    const distance = (destination-start)*264;
    return (distance);
}
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
    if(distance<=400){
        return(0);
    }
    else if(distance>400 && distance<2000){
        return((distance-400)*0.02);
    }else if (distance>2500){
        return("cannot travel that far");
    }else if(2000<=distance<=2500){
        return(25);
    }
    
    
}