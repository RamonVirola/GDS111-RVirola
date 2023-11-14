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

const leviathin = new Warrior();
leviathin.setDamage(10);
leviathin.setHealth(100);
console.log("leviathin Stats:");
console.log(leviathin.getDamage());
console.log(leviathin.getHealth());

const behemoth = new Warrior();
behemoth.setDamage(15);
behemoth.setHealth(90);
console.log("behemoth Stats:");
console.log(behemoth.getDamage());
console.log(behemoth.getHealth());

const thanos = new Warrior();
thanos.setDamage(99);
thanos.setHealth(100);
console.log("Thanos Stats:");
console.log(thanos.getDamage());
console.log(thanos.getHealth());