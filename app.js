
// set canvas id to a variable
var canvas = document.getElementById('draw');

//get canvas 2D context and resize(); it
var ctx=canvas.getContext('2d');

resize();

//resize canvas when window is resized
//This way the canvas will take over the whole broswer window
function resize(){
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}


//////////EVENT LISTENER///////////////
//add event listeners to specify when functions should be triggered

//a window event listener to trigger the resize function when window is resized
  window.addEventListener('resize',resize);
//a document event listener to trigger the draw() function when mouse is moved
  document.addEventListener('mousemove',draw);
//a document event listener to trigger the setPosition() (user’s mouse current position) function when mouse is clicked
  document.addEventListener('mousedown',setPosition);
//a document event listener to trigger the setPosition() (user’s mouse current position) function when mouse is moved over the canvas function
  document.addEventListener('mouseenter',setPosition);

  ///////setPosition() and draw() functions////////////

  // last known position
  var pos = { x: 0, y: 0 };

  // new position from mouse events
  function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

//Draw Function//
/*in the function, we need to have an if statement to make sure it runs only when mouse is clicked
set a variable to our input id’s value
write ctx.beginPath() to start a drawing path
specify the line width
specify the lineCap
specify the strokeStyle (color of line), which is set to our variable with the input id value
add the from(moveTo) and to (lineTo)functions for the line based on the position coordinates
begin the drawing path(stroke) of the line */

 function draw(e) {

   if (e.buttons !== 1) return; // if mouse is pressed.....

   var color = document.getElementById('hex').value;

   ctx.beginPath(); // begin the drawing path

   ctx.lineWidth = 20; // width of line
   ctx.lineCap = 'round'; // rounded end cap
   ctx.strokeStyle = color; // hex color of line

   ctx.moveTo(pos.x, pos.y); // from position
   setPosition(e);
   ctx.lineTo(pos.x, pos.y); // to position

   ctx.stroke(); // draw it!

  }
