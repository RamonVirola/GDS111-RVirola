class Player {
    constructor() {
        this.name = "";
        this.level = 0;
    }
    setName(temp) {
        this.name = temp;
    }
    getName() {
        return this.name;
    }
    setLevel(newLevel) {
        this.level = newLevel;
    }
    getLevel() {
        return this.level;
    }
}

const mario = new Player();
mario.setName("Mario");
mario.setLevel(9);

const luigi = new Player();
luigi.setName("Luigi");
luigi.setLevel(11);

const peach = new Player();
peach.setName("Peach");
peach.setLevel(1);

const arrayOfObjects = [mario, luigi, peach];
console.log(arrayOfObjects[1].getName());