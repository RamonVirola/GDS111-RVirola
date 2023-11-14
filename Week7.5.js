class Warrior {
    // private data
    constructor() {
        this.health = 0;
        this.damage = 0;
    }

    //public behaviors
    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setDamage(newDamage) {
        this.damage = newDamage;
    }
    getDamage() {
        return this.damage;
    }
}

const Leviathin = new Warrior();
Leviathin.setDamage(10);
Leviathin.setHealth(100);
console.log("Leviathin Stats:");
console.log(Leviathin.getDamage());
console.log(Leviathin.getHealth());

const Behemoth = new Warrior();
Behemoth.setDamage(15);
Behemoth.setHealth(90);
console.log("Behemoth Stats:");
console.log(Behemoth.getDamage());
console.log(Behemoth.getHealth());

const thanos = new Warrior();
thanos.setDamage(99);
thanos.setHealth(100);
console.log("Thanos Stats:");
console.log(thanos.getDamage());
console.log(thanos.getHealth());