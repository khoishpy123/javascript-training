const person = {
    points: 23,
    score: () => {
        this.points++;
    }
}

// console.log(person.score.value); 

var obj = {
    id: 42,
    counter: function counter() {
          setTimeout(() => {
            console.log(this.id);
          }, 1000);
    }
};


obj.counter();