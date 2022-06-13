/* Async/Await
Method flatMap() forEach() Oject.entries()
*/ 
const getPlanets = async (url) => {

    const transformData = (planet) => {
        return {
            name: planet.name,
            diameter:planet.diameter,
            climate: planet.climate,
        };
    };
    const response = await axios({
        url,
        method: 'GET',
    }).then(data => data.data.results.map(transformData))
    .catch(error => console.log(error.message));

    const planetsList = response.map((planet) => Object.entries(planet))
    const planets = planetsList.flatMap((item) => {
        item.forEach(([key, value]) => {
            console.log(key, value);
        });
        return item
    });
    return response;

}
/* Method Object.seal() Object.frezze()
*/
const response =  await getPlanets('https://swapi.dev/api/planets/');
const planet = response.shift();

Object.seal(planet);
if ( Object.isExtensible(planet)) {
    planet.period = 23;
} else {
    planet.name = 'Naboo';
}

Object.freeze(planet);
if (Object.isFrozen(planet)) {
    console.log('planet is frozen')
};





/*Method concat() and join()

Get the full list of the participants of the infinity war in string

*/

const avengers = ["Iron Man", "Captain America", "Thor Odinson","Natasha Romanoff", "The Hulk", "James Rhodes", "The Falcon", "Wanda Maximoff", "Vision", "Peter Parker", "Bucky"];
const guardiansOfGalaxy = ["Star Lord", "Gamora", "Drax", "Rocket", "Nebula"];
const wakanda = ["Shuri", "Okoye", "Ayo", "M'Baku", "T'Challa"];
const thanosForses = [ "Thanos", "Corvus Glaive", "Proxima Midnight", "Ebony Maw", "Cull Obsidian", "The Chitauri", "Leviathans", "Outriders"];

const allParticipants = avengers.concat(guardiansOfGalaxy, wakanda, thanosForses).join(', ');

/*Method every() and some()

Check the all values are over 18 and check if any age is over 18*/

const ages = [16, 20, 56, 42];

ages.every((age) => age > 18);
ages.some((age) => age > 18);

/*Method filter() and includes()

Filter list of teams by champions*/

const teams = ['United', 'Burnley', 'Liverpool', 'City'];
const champs = ['United', 'Liverpool', 'City', 'Chelsea'];

const champsTeams = teams.filter((team) => champs.includes(team));


/* Method from()
Make an array from the string
*/
const str = 'ABCDEFGHIJ'
const alphabetArray = Array.from(str);

/* Method map()
Get the square root of each element of the given numbers array  
*/  

const numbers = [25, 100, 121, 169, 625];
const squareRoot = numbers.map(num => Math.sqrt(num));

/* Method sort() pop() shift()
Get the max element and min element of the given numbers array  
*/ 

const digits = [25, 4, 69, 55, 73];
const sorted = digits.sort((a, b) => a - b);
const max = sorted.pop();
const min = sorted.shift();

/* Method reduce()
Return the result of multiplying the values together
*/ 

const nums = [1, 2, 3, 4, 5];
const multiplying = nums.reduce((previousValue, currentValue) => previousValue * currentValue);


/* Method fill() indexOf() splice() reverse()
Changing/Adding goods in the shopping list and sorting them
*/ 

const shoppingList = ['milk', 'bread', 'water'];

const updatedShoppingList = shoppingList.fill('juice', shoppingList.indexOf('water'));
updatedShoppingList.splice(0, 0, 'cheese');
const reverse = updatedShoppingList.reverse();

/* Method find()
Find the first element by specified letter
*/ 
const birds = ["Woodpecker", "Owl", "Crow", "Kite", "Eagle"];
const specifiedBird = birds.find((bird) => bird.toLocaleLowerCase().startsWith('o'));

/* Method slice() isArray()
Get the copy of the given array and check the type of the copy
*/ 
const trees = ["Ebony", "Cactus", "Guava", "Coconut", "Apricot"];
const treesCopy = trees.slice();
const isArray = (arr) => Array.isArray(arr) ? "Oh this is an array!" : "This is not array";

/* Method flat()
Get the new array with all the elements of the subarrays
*/ 
const subarrAnimals = ["Bee", ["Drone", "Queen"], "Chicken", ["Rooster", "Hen"], "Panda", ["Boar", "Sow"]];
const flatAnimals = subarrAnimals.flat();


/* Method reverse()
Get ascending/descending list
*/ 

const price = [100, 200, 330, 440, 666];
price.reverse()



/* Method push() unshift()
*/ 

const children = ['jack', 'aviva', 'john', 'obi', 'karen'];

const amount = children.push('genry');
// const amount = children.unshift('genry');

