const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const targets = {
    red:{
        x: 20 - parseInt(redBox.style.left), 
        y: 300 - parseInt(redBox.style.top)
    },
    blue:{
        x:400 - parseInt(blueBox.style.left),
        y:300 - parseInt(blueBox.style.top)
    },
    green:{
        x:400 - parseInt(greenBox.style.left),
        y:20 - parseInt(greenBox.style.top)
    }
}

async function translateOneByOne(){
    try{
    await moveElement(redBox,{x:targets.red.x, y: targets.red.y })
    console.log("Red circle moved")
    await moveElement(blueBox, {x:targets.blue.x, y: targets.blue.y})
    console.log("Blue circle moved")
    await moveElement(greenBox, {x: targets.green.x, y: targets.green.y})
    }catch(error){
        console.log(error.message)
    }
}
async function translateAllAtOnce(){
    Promise.all([
        moveElement(redBox,{x:targets.red.x, y: targets.red.y }),
        moveElement(blueBox, {x:targets.blue.x, y: targets.blue.y}),
        moveElement(greenBox, {x: targets.green.x, y: targets.green.y})
    ]).then(()=>console.log("All of the boxes have moved"))
}
translateOneByOne();
//translateAllAtOnce();
