// 

function wallPaint(n, height, width) {   
    
    var areaofwall = height * width;    
    
    if (areaofwall % n == 0)          
        return areaofwall / n;
    
 else{
    return (areaofwall/n)+1;
}
}
let n = 10;
let height = 9;
let width = 10;

var totalWallPaint = wallPaint(n, height, width);  

console.log(totalWallPaint);