var car = {
  direction: 'east'
};

var $car = document.querySelector('.car');

window.addEventListener('keydown', turnCar);
window.addEventListener('keydown', move);

function turnCar(event) {
  if (event.keyCode === 39) {
    car.direction = 'east';
    $car.className = 'car east';
  }
  if (event.keyCode === 37) {
    car.direction = 'west';
    $car.className = 'car west';
  }
  if (event.keyCode === 38) {
    car.direction = 'north';
    $car.className = 'car north';
  }
  if (event.keyCode === 40) {
    car.direction = 'south';
    $car.className = 'car south';
  }
}

var movement = [0, 0];

function move(event) {
  var isMoving = event.keyCode === 32;
  var carDirection = car.direction;

  if (isMoving && carDirection === 'east') {
    movement[0] += 3;
  }
  if (isMoving && carDirection === 'west') {
    movement[0] -= 3;
  }
  if (isMoving && carDirection === 'south') {
    movement[1] -= 3;
  }
  if (isMoving && carDirection === 'north') {
    movement[1] += 3;
  }
}

// $car.style.transform = 'translate(' + movement[0] + 'px, ' + movement[1] + 'px)';
