class Player {
    constructor(health, weapon, armor, name) {
        this.health = health;
        this.weapon = weapon;
        this.armor = armor;
        this.name = name;
    }
    setHealth(x) {
        this.health = x;
    }
    getHealth() {
        return this.health;
    }
    setWeapon(equip) {
        this.weapon = equip;
    }
    getWeapon() {
        return this.weapon;
    }
    setArmor(defense) {
        this.armor = defense;
    }
    getArmor(){
        return this.armor;
    }
    setName(i) {
        this.name = i;
    }
    getName() {
        return this.name;
    }
}
const weapons = ["Sword", "Spear", "Axe", "Hammer"]

const dragonBorn = new Player(100, 1, 5, 'Dragon Born'); 
console.log("Player Health: " + dragonBorn.getHealth());
console.log("Player Armor: " + dragonBorn.getArmor());
console.log("Player Weapon: " + weapons[dragonBorn.getWeapon()]);
console.log("Player Name: " + dragonBorn.getName());