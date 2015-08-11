angular.module('app').filter('timeFilter', function()
{
    return function(time)
    {
        if(!time){
            return "No data!";
        }

        var formattedTime = ""+(""+time).split(".")[0]+" hours";
        if((""+time).split(".")[1]) formattedTime+=" and "+(""+time).split(".")[1]+" minutes";
        return formattedTime;

    };
});