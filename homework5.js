// // ex1

// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");
// const rand = function(num) {
// 	return Math.floor(Math.random() * num) + 1;
// };
// const colors= ['red','green','blue', 'black','yellow', 'Navy', 'aqua','orange','Chartreuse','Crimson','LawnGreen','BlueViolet '];
  
//   const createPoints = function(num, canvasWidth, canvasHeight){
// 	  const arr = [];
// 	  const rec = function(n){
// 		if(n<=0){
// 			return "";
// 		}  
// 		arr.push({
// 			x: rand(canvasWidth - 30),
// 			y: rand(canvasHeight - 30),
// 			width: 30,
// 			height: 30,
// 			xDelta: 5,
// 			yDelta: 5,
// 			color: colors[rand(12)-1]
// 		})
// 		rec(n-1);
// 	  }
// 	  rec(num);
// 	  return arr;
//   };
// //   console.log(createPoints(2,canvas.width,canvas.height));



//   //ex2
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
  
  
//   const rand = function(num) {
//     return Math.floor(Math.random() * num) + 1;
//   };
  
//   const colors= ['red','green','blue', 'black','yellow', 'Navy', 'aqua','orange','Chartreuse','Crimson','LawnGreen','BlueViolet '];
  
//   const createPoints = function(count, canvasWidth, canvasHeight) {
//     const arra = [];
//     const rec = function(n) {
//       if (n < 1) {
//         return '';
//       }
//       arra.push({
//         x: rand(canvasWidth - 30),
//         y: rand(canvasHeight - 30),
//         width: 30,
//         height: 30,
//         xDelta: 8,
//         yDelta: 8,
//         color: colors[rand(12)-1]
//       });
//       rec(n-1)
//     }
//     rec(count);
//     return arra;
//   };
  
//   const points = createPoints(120, canvas.width, canvas.height);	
  
  
//   const draw = function() {
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     const drawfor = function(arr, i) {
//       if(i === arr.length) {
//         return '';
//       }
      
//       ctx.fillStyle = arr[i].color;
//       ctx.fillRect(arr[i].x, arr[i].y, arr[i].width, arr[i].height);
//       drawfor(arr, i+1);
//     };
//     drawfor(points, 0);
//   };
  
//   const updateData = function() {
//     const updateEvery = function(arr, m){
//       if(m === arr.length) {
//         return;
//       }
      
//       if(arr[m].x >= canvas.width-arr[m].width || arr[m].x<=0){
//         arr[m].xDelta = -arr[m].xDelta;
// 		arr[m].color = colors[rand(12)-1];
//       }
      
//       if(arr[m].y >= canvas.height-arr[m].height || arr[m].y<=0){
//         arr[m].yDelta = -arr[m].yDelta;
// 		arr[m].color = colors[rand(12)-1];
//       }
      
//       arr[m].x = arr[m].x + arr[m].xDelta;
//       arr[m].y = arr[m].y + arr[m].yDelta;
//       updateEvery(arr, m+1);
//     };
//     updateEvery(points, 0)
//   };
  
//   const loop = function(){
    
//     draw();
//     updateData();
//     window.requestAnimationFrame(loop);
//   };
  
//   loop(); 


const backgroundImage = new Image();
  backgroundImage.src = 'http://www.powerpointhintergrund.com/uploads/desk-background-5.jpg';
  
  const pers = new Image();
  pers.src = 'http://pngimg.com/uploads/roach/roach_PNG12144.png';
  
  const badGuyImage = new Image();
  badGuyImage.src = 'http://www.polplex.ru/img/tapki/sp/solyariy/tapochki_dlya_solyariev_cena.png';

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const RectsIntersection = function(rect1X, rect1Y, rect1W, rext1H, rect2X, rect2Y, rect2W, rext2H) {
    return ((Math.max(rect1X, rect2X) - Math.min(rect1X, rect2X)) <= rect1W) && ((Math.max(rect1Y, rect2Y) - Math.min(rect1Y, rect2Y))<=rext1H);
  };
  

  
  const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  }; 
  const createPoints = function(num, canvasWidth, canvasHeight){
    const arra = [];
    const rec = function(n){
      if(n<=0){
        return "";
      }  
      arra.push({
        x: rand(canvasWidth - 100),
        y: rand(canvasHeight - 90),
        img: badGuyImage,
        width: 100,
        height: 100,
        xDelta: 5,
        yDelta: 5,
      })
      rec(n-1);
    }
    rec(num);
    return arra;
  };
  const points = createPoints(5, canvas.width,canvas.height);
  

  const draw = function(){  
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    const drawFor = function(arr,i){
      if(i === arr.length){
        return "";
      }
      ctx.drawImage(arr[i].img, arr[i].x, arr[i].y,arr[i].width, arr[i].height); 
      drawFor(arr,i+1);
    };
    drawFor(points,0);
  };
  const updateData = function(){
    const updateEvery = function(arr, i){
      if(i === arr.length){
        return "";
      }
      if(arr[i].x >= canvas.width-arr[i].width){
        arr[i].xDelta = -arr[i].xDelta;
      }else if(arr[i].x<=0){
        arr[i].xDelta = -arr[i].xDelta;
      }
      if(arr[i].y >= canvas.height-arr[i].height){
        arr[i].yDelta = -arr[i].yDelta;
      }else if(arr[i].y<=0){
        arr[i].yDelta = -arr[i].yDelta;
      }
      arr[i].x = arr[i].x + arr[i].xDelta;
      arr[i].y = arr[i].y + arr[i].yDelta;
      
      updateEvery(arr,i+1);
    };
    updateEvery(points,0);
  };
  const loop = function(){
    draw(); 
    updateData();
    window.requestAnimationFrame(loop);
  };
  
  loop();
  const floorY = canvas.height - 200;
  
  const gameData = {
    hero: {
      x: 50,
      y: floorY,
      img: pers,
      width: 200,
      height: 100,
      xD: 0,
      yD: 0
    },     
  };
  
  const draw1 = function() {
    
    const hero = gameData.hero;
    ctx.drawImage(hero.img, hero.x, hero.y, hero.width, hero.height); 
  };
  
  const updateData1 = function() {
    const hero = gameData.hero;
    const updateEvery = function(arr, i){
      if(i === arr.length -1){
        return;
      }
      
      if(RectsIntersection(hero.x, hero.y, hero.width, hero.height, arr[i].x, arr[i].y, arr[i].width, arr[i].height)){
        alert('game over');
        hero.x=50;
        hero.y = floorY;  
      }
      updateEvery(arr,i+1);
    };
    updateEvery(points,0);
  };
  
  
  const loop1 = function() {
    draw1();
    updateData1();
    requestAnimationFrame(loop1);
  };
  
  loop1();
  
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;
  
  document.addEventListener('keydown', function(event) {
    const hero = gameData.hero;
    if(event.keyCode === rightKey) {
      hero.x = hero.x + 10;
      if(hero.x >= canvas.width) {
        hero.x = 0-hero.width;
      }
    } 
    else if(event.keyCode === leftKey) {
      hero.x = hero.x - 10; 
      if(hero.x <= 0-hero.width) {
        hero.x = canvas.width;
      }     
    }
    else if(event.keyCode === upKey) {
      hero.y=  hero.y - 10;
      if(hero.y<= 0 ) {
        hero.y = canvas.height
      }   
    }
    else if(event.keyCode === downKey){

        hero.y= hero.y +  10; 
      if(hero.y>= canvas.height ) {  
      hero.y = 0 
        }
    }
  },);
