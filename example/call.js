function animal(name, weight){
    this.name = name;
    this.weight = weight;
}

function bird(name, weight,wing){
    animal.call(this, name , weight);
    this.wing = wing;
}

const chicken = new bird('tuan', 66,2)
console.log(chicken)