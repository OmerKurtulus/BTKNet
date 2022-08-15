console.log("hello")
var i, sum = 0;
let a = "Dev-OmerKurtulus"

document.getElementById("root").innerHTML = 'Hellodev';
const arr = [
  {
  id:1,
  name: "Sude Akgün",
  age:19
  },
  {
    id:2,
    name: "Omer Kurtulus",
    age:21
    },
    {
      id:3,
      name: "Betul Samanci",
      age:21
      },
]

  for(let person of arr) {
  const element = document.createElement("div");
  element.innerHTML = `${person.id} ${person.name} ${person.age}`;
  document.getElementById("root").append(element);
}

 

