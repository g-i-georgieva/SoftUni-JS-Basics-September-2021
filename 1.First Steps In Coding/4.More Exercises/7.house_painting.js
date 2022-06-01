function solve (input){
    let houseHeight=Number(input[0]);
    let sideWallLength=Number(input[1]);
    let heightTriangularWall=Number(input[2]);

    let sizeFrontWalls=(houseHeight*houseHeight)-(1.2*2)+(houseHeight*houseHeight)
    let sizeSideWalls=2*(houseHeight*sideWallLength)-2*(1.5*1.5)
    let sizeRoof=2*(houseHeight*sideWallLength)+2*(houseHeight*heightTriangularWall/2)

    let greenPaint=(sizeFrontWalls+sizeSideWalls)/3.4
    let redPaint=sizeRoof/4.3

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

solve ([6, 10, 5.2])