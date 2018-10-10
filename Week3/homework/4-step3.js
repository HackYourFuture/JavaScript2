'use strict';
//----------1
{
  function Dog() {
    this.name = 'Jäger';
    this.color = 'black and white';
    this.numberOfLegs = 4;
  }

  const Hound = new Dog();

  console.log(Hound);

  const brownDog = new Dog();
  brownDog.name = 'Jackal';
  brownDog.color = 'brown';

  console.log(brownDog);
}
