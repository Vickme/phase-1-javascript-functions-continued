//saturdayFun
function saturdayFun (activity = "roller-skate") {
    return "This saturday, I want to ${activity}!";
}


//mondayWork
function mondayWork (task= "go to the office") {
    return "This Monday, I will ${task}.";
}


//wrapAdjective
function wrapAdjective(adjective="special",prompt= "*") {
    return function (param= "good") {
        return  "You are ${prompt}${adjective}${prompt}${param}${prompt}${adjective}${prompt}";
    };
}
