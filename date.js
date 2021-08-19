exports.getDay = function(){

    var today=new Date().getDay();
    var nameOfDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day=nameOfDay[today];
    return day;
    
}