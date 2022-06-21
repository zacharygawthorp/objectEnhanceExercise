/**In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”. */

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}

/** Write an ES2015 Version */

function createInstructor(first, last){
    return {
       first,
       last
    }    
}

/** Computed Property Names */
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/** Write an ES2015 Version */

let favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

/** Object Methods */

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName  +  "says bye!";
    }
}

/** Write an ES2015 Version */

const instructor = {
    firstName: 'Colt',
    sayHi() {
        return 'HI!';
    },
    sayBye() {
        return this.firstName + "Says Bye!"
    }
}
/** createAnimal Function */

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

/** Write an ES2015 Version */

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() { 
        return noise;
        }
    }

}