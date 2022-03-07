function saturdayFun(activity="roller-skate"){
    return "This Saturday, I want to "+activity+"!" 
}
function mondayWork(activity="go to the office"){
    return "This Monday, I will "+activity+"."
}
function wrapAdjective(value="*"){
    return function(value2="special"){
        return "You are "+value+value2+value+"!"

    }
}