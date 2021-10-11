const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
    person.name = 'Fikri Al Ichsan'
    person.favDrinks[1] = "Tap Water"
    person.greeting = function(name){
        return `"hello ${name}"`
    }
  /// STOP

  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));
  