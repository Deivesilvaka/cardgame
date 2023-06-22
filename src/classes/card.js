export default class Card {
    constructor({ name, description, ability, manaRecover, type, manaCost, isFliped, subEffect = [] }) {
        this.id = `${Date.now()}${Math.random()}`
        this.name = name;
        this.description = description;
        this.ability = ability;
        this.manaRecover = manaRecover;
        this.manaCost = manaCost;
        this.type = type;
        this.isFliped = isFliped;
        this.subEffect = subEffect;
    }

    useAbility({ room, playerId }) {
        return this.ability({ room, playerId })
    }
 }