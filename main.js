var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x, last_position_of_y;

var colour = "red";
width_of_line = 1;

canvas.addEventListener("mousedown", myMousedown );
function myMousedown(e){
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove );
function myMousemove(e){
    current_position_of_mousex = e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mousex, current_position_of_mousey);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mousex;
    last_position_of_y = current_position_of_mousey;

}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseEvent = "mouseleave";
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


var last_position_of_touch_x, last_position_of_touch_y;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
}

canvas.addEventListener("touchstart", myTouchstart );
function myTouchstart(e){
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clienty - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove );
function mytouchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    }
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;