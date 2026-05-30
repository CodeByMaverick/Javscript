const marvel = ["ironman", "spiderman", "thor"]
const dc = ["batman", "superman", "flash"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const heros = marvel.concat(dc)
// console.log(heros);

// const all_heros = [...marvel, ...dc]       // spread operator
// console.log(all_heros);

const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const final_array = array.flat(Infinity)

console.log(final_array);



console.log(Array.isArray("maverick"));
console.log(Array.from("maverick"));       // from method converts any given thing into array

console.log(Array.from({name: "maverick"}));    // intresting case

score1 = 100
score2 = 200
score3 = 300

console.log(Array.of(score1, score2, score3));