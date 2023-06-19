export default class Room {
    constructor() {
        this.id = `${Date.now()}${Math.random()}`
        this.players = new Map()
    }
}