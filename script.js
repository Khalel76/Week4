
//------------------------------ TASK 1 -----------------------------
function sumArray(arr) {
    let x = 0;
    arr.forEach(element => {
        x += element;
    });
    return x;
}
const numbers = [1, 2, 3, 4];
console.log(sumArray(numbers));

//------------------------------ TASK 2 -----------------------------
function longName(names) {
    return names.filter(name => name.length > 4);
}

const names = ["Ali", "Sara", "Omar", "Lina", "Mohammed"];
console.log(longName(names));

//------------------------------ TASK 3 -----------------------------

function countWords(str) {

    const cleanStr = str.trim();

    if (cleanStr.length === 0) {
        return {};
    }

    const words = cleanStr.split(/\s+/);

    const counts = {};

    for (let word of words) {
        if (counts[word]) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }

    return counts;
}
console.log(countWords("  hello   world  hello  "));





