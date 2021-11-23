/* class Item {
    constructor(name, lore, strength, dexterity, intelligence, endurance){
        this.name = name
        this.lore = lore
        this.strength = strength
        this.dexterity = dexterity
        this.intelligence = intelligence
        this.endurance = endurance
    }
} */

class Entity {
    constructor(lvl, hp, dmg, dodge, crit, def, inv) {
        this.lvl = lvl
        this.hp = hp
        this.max_hp = hp
        this.inv = inv
        this.dmg = dmg
        this.dodge = dodge
        this.crit = crit
        this.def = def
        this.inv = inv
    }
}

class Player extends Entity {
    constructor() {
        super(1, 100, 1, 1, 1, 1, null)
        this.available = 4
        this.strength = 1
        this.dexterity = 1
        this.intelligence = 1
        this.endurance = 1
        this.balance = 10

        this.updateGold()
    }
    addPoint(stat){
        this[stat]++
        this.available--
        stats_view()
    }
    updateGold(){
        document.getElementById("gold").innerHTML = this.balance
    }
    get get_dmg(){
        return (5 + (this.lvl * 2) + (this.strength / 2)).toFixed(2)
    }
    get get_dodge(){
        return (-(50 / (1.025 ** this.dexterity)) + 50).toFixed(2)
    }
    get get_crit(){
        return (-(90 / (1.02 ** this.intelligence)) + 90).toFixed(2)
    }
    get get_def(){
        return (-(50 / (1.02 ** this.endurance)) + 50).toFixed(2)
    }
}


class Enemy extends Entity {

    constructor(hardness = 0) {
        this.name = this.#genName()
        this.hardness = this.#getHardness(hardness)
        super()
    }
    #genName(){
        return jelzo[Math.floor(Math.random() * jelzo.length)] + nev[Math.floor(Math.random() * nev.length)]
    }
    #getHardness(hardness){
        let intervall = (jatekos.lvl / 10) * 2
        let min = (jatekos.lvl - intervall / 2) + (hardness * intervall)
        let max = (jatekos.lvl + intervall / 2) + (hardness * intervall)
        return [min, max]
    }
}

