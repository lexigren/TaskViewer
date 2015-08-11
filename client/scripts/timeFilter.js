angular.module('app').filter('timeFilter', function()
{
    return function(time)
    {
        if(!time){
            return "No data!";
        }

        var formattedTime = ""+(""+time).split(".")[0]+" hours";
        if((""+time).split(".")[1]) {
            var minutes=Math.ceil(parseFloat("0."+(""+time).split(".")[1])*60);
            formattedTime+=" and "+minutes+" minutes";
        }
        return formattedTime;

    };
});