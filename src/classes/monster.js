import Card from './card'

export default class Monster extends Card {
    constructor({ name, description, ability, manaRecover, type, attack = 0, defense = 0, effectsAffects = true, manaCost, isFliped, subEffect = [] }) {
        super(name, description, ability, manaRecover, type, manaCost, isFliped, id, subEffect)

        this.id = `${Date.now()}${Math.random()}`
        this.name = name;
        this.description = description;
        this.ability = ability;
        this.manaRecover = manaRecover;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.effectsAffects = effectsAffects;
        this.manaCost = manaCost
        this.isFliped = isFliped
        this.subEffect = subEffect
    }
}
