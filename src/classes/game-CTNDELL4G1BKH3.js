import Room from './room.js'
import Player from './player.js'

export default class Game {
    constructor() {
        this.ROOMS = new Map()
        this.ROOMS_QUANTITY = this.ROOMS.size
    }

    #addRoom() {
        const room = new Room()
        this.ROOMS.set(room.id, room)
        this.ROOMS_QUANTITY = this.ROOMS.size
        return room
    }

    #removeRoom(roomId) {
        this.ROOMS.delete(roomId)
        this.ROOMS_QUANTITY = this.ROOMS.size
        return this.ROOMS
    }

    #getAvailableRoom() {
        const room = Array.from(this.ROOMS).find(room => this.ROOMS.get(room[0]).players.size < 2 )
        if(!room) return this.#addRoom()

        return this.ROOMS.get(room[0])
    }

    #getPlayer({ roomId, playerId }) {
        return this.ROOMS.get(roomId).players.get(playerId)
    }

    addPlayer({ name, deck, playerId = null }) {
        const room = this.#getAvailableRoom()
        const player = new Player({ name, deck, playerId })

        room.players.set(player.id, player)

        return { room, player }
    }

    addManaToPlayer({ roomId, playerId, quantity = 1 }) {
        const player = this.#getPlayer({ roomId, playerId })
        return player.increaseMana(quantity)
    }

    removePlayer({ roomId, playerId }) {
        const room = this.ROOMS.get(roomId)

        room.players.delete(playerId)
        if(room.players.size === 0) this.#removeRoom(room.id)

        return playerId
    }

    drawCard({ roomId, playerId, quantity = 1 }) {
        const player = this.#getPlayer({ roomId, playerId })
        return player.drawCard(quantity)
    }
}

