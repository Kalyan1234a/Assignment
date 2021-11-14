// Calculate the volume and surface area of cylinder.

// for  find surface area of cylinder
function SurfaceAreaofCylinder(height, radius) {
    return(2* 3.14 * radius * height) + (2 * 3.14 * radius * radius);
}

// for find volume of cylinder

function volumeofcylinder(height, radius){
    return(2 * 3.14 * radius * radius * height);
}

let cylinder = {
    "height": 10, "radius": 6 
}

var surfacearea = SurfaceAreaofCylinder(cylinder.height, cylinder.radius);
var volume = volumeofcylinder(cylinder.height, cylinder.radius);
console.log(surfacearea,volume);