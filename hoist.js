//1. output will be 'hello'
console.log('hello');
var hello = 'world'

//2. my guess was 'haystack' output was 'magnet'
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// 3. output is going to be 'only okay' & 'super cool'. output was 'super cool'. function was not called. if function was called output would of been 'only okay'x2.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//4.output is 'chicken' & half-chicken.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//5. output is 'fish'x2. out was an error 'mean is not a function'
mean();
console.log(food);
var mean = function(){
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
console.log(food);

//6. ouput was 'rock', r&b, and 'disco. correct output was 'unidentined', 'rock', r&b, and 'disco.
console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre);

//7. output is going to be 'san jose', 'seattle, & 'burbank'
dojo = 'san jose'
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}

//8. bonus - output was an error due to dojo being set with const
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = 'closed for now';
    }
    return dojo;
}