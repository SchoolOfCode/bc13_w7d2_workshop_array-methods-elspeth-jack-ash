let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let people = ["bruce", "kameron", "billy", "jack", "ash", "elspeth", "bob"];

function bObject(object) {
  return object.startsWith("b");
}

let bListAnimals = animals.filter(function (animal) {
  return animal.startsWith("b");
});

// let bListAnimals = animals.filter(bAnimal);

let bPeople = people.filter(bObject);

console.log(bListAnimals);
console.log(bPeople);
