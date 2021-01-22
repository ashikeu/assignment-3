
// https://github.com/ashikeu/assignment-3

/*
Purpose : Convert kilometer to meter
Input : take kilometer value
*/
function kilometerToMeter(num){
    //input validation
    if(isNaN(num))
    {
        return "please give a valid number";
    }
    return num*1000;
}

/*
Purpose : calculate total cost for given items
Input : no of watch, no of phone, no of laptop
*/
function budgetCalculator(noOfWatch,noOfPhone,noOfLaptop){
    //input validation
    if (typeof(noOfWatch) == "undefined" || isNaN(noOfWatch))
    {
        return "please give valid watch number";
    }
    if (typeof(noOfPhone) == "undefined" || isNaN(noOfPhone))
    {
        return "please give valid phone number";
    }
    if (typeof(noOfLaptop) == "undefined" || isNaN(noOfLaptop))
    {
        return "please give valid laptop number";
    }

    //find the value
    var watchPrice=noOfWatch*50;
    var phonePrice=noOfPhone*100;
    var laptopPrice=noOfLaptop*500;
    return watchPrice+phonePrice+laptopPrice;
}

/*
Purpose : calculate total hotel stay cost for given days
Input : no of days
*/
function hotelCost(noOfDays){
    //input validation
    if(isNaN(noOfDays))
    {
        return "please give a valid days";
    }

    //find the value
    var totalBill=0;
    for( i=1; i<=noOfDays; i++)
    {
        if(i>=1 && i<=10)
        {
            totalBill=totalBill+100;
        }
        else if(i>=11 && i<=20)
        {
            totalBill=totalBill+80;
        }
        else
        {
            totalBill=totalBill+50;
        }        
    }
    return totalBill;
}

/*
Purpose : find the largest name from a given array list
Input : array list of names
*/
function megaFriend(friendList){
    //input validation
    if(!Array.isArray(friendList))
    {
        return "Not a valid array";
    }
    if(friendList.length==0)
    {
        return "empty array is not allowed";
    }

    //find the value
    var megaName=friendList[0];
    for(i=1 ; i<friendList.length ;i++)
    {
        if(megaName.length<friendList[i].length)
        {
            megaName=friendList[i];
        }
    }
    return megaName;
}
