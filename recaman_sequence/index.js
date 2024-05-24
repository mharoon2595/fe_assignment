const scale = 10 // 0->1 = 10px

const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput')
const rangeValueDiv = document.querySelector('#rangeValue')

const CANVAS_DIMENSIONS = { height: canvas.height, width: canvas.width };

const ctx = canvas.getContext("2d");

function drawLine(){
    ctx.beginPath();
ctx.moveTo(0, CANVAS_DIMENSIONS.height/2);
ctx.lineTo(CANVAS_DIMENSIONS.width,CANVAS_DIMENSIONS.height/2);
ctx.stroke();
}


let currentValue=0;


const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91,
]
    .map(item => item * scale)



function drawArc(n=sequence.length-1){
    let currentPoint=5;
    let radius=5;
    let lastPoint;

    for(let i=0;i<=n;i++){
        if(i>=1){
            lastPoint=sequence[i-1]
        }
    if(i<=65 && i>1 ){
        radius=(Math.abs(sequence[i]-sequence[i-1]))/2;
        if(sequence[i]>sequence[i-1]){
            currentPoint=lastPoint+radius
            }
        else{
            currentPoint=lastPoint-radius
          
        }
    }


   
    if(i!==0){
    if(i%2===0){
    ctx.beginPath();
    ctx.arc(currentPoint, CANVAS_DIMENSIONS.height/2,radius,Math.PI,0);
    ctx.stroke()
    }
    else{
        ctx.beginPath();
        ctx.arc(currentPoint, CANVAS_DIMENSIONS.height/2,radius,0, Math.PI);
        ctx.stroke()  
    }
    }
 }
}
drawLine();
drawArc();


const onInputChangeHandler = (value) => {
    
    rangeValueDiv.innerText = value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine();
    drawArc(value);
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value))