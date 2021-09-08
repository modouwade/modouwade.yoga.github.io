const obj = {
  pseudo: "modou",
  ville: "thies",
  DireBonjour() {
    console.log("Bonjour je suis " + this.pseudo);
  },
};
obj.age = 24;
obj.note = 14;

obj.pseudo = "wade";
console.log(obj);

for (const key in obj) {
  console.log(obj[key]);
}
// console.log(obj.DireBonjour());

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("wade", " thies ");
const user2 = new User("bara", " dakar ");

// console.log(user2.getCity());

function UserFactory(pseudo, ville) {
  return {
    pseudo,
    ville,
    getCityFactory: function () {
      console.log(pseudo + " est à " + ville);
    },
  };
}

const user3 = UserFactory("modou", "louga");
console.log(user3);
