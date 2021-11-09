class Item {
    constructor(name, lore, strength, dexterity, intelligence, endurance){
        this.name = name
        this.lore = lore
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.endurance = endurance
    }
}

class Entity {
    constructor(lvl, hp, strength, dexterity, intelligence, endurance, inv) {
        this.lvl = lvl
        this.hp = hp
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.endurance = endurance
        this.inv = inv
    }
}

class Player extends Entity {
    constructor(name) {
        super(1, 100, 1, 1, 1, 1, null)
        this.name = name
        this.available = 0
    }
    addPoint(stat){
        this[stat]++
        this.available--
        stats_view()
    }
}

class Enemy {
    constructor(lvl, hp, strength, dexterity, intelligence, endurance, inv) {
        
    }
}