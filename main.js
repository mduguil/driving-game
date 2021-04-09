var car = {
  direction: 'east',
}

var $car = document.querySelector('.car')

window.addEventListener('keydown', turnCar)

function turnCar (event) {
  if (event.keyCode === 39) {
    car.direction = 'east';
    $car.className = 'car east'
  }
  if (event.keyCode === 37) {
    car.direction = 'west';
    $car.className = 'car west'
  }
  if (event.keyCode === 38) {
    car.direction = 'north';
    $car.className = 'car north'
  }
  if (event.keyCode === 40) {
    car.direction = 'south';
    $car.className = 'car south'
  }
}
