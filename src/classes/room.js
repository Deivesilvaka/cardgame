import { BOARD_TYPE } from '../helpers/types'
export default class Room {
    constructor() {
        this.id = `${Date.now()}${Math.random()}`
        this.maxMonsters = 3
        this.players = new Map()
    }

    getOpponent(playerId) {
        const opponentId = Array.from(this.players).find((player) => player[0] !== playerId)
        return this.players.get(opponentId[0])
    }

    removeCardFromTheBoard({ card, playerId, from }) {
        const player = this.player.get(playerId)
        const type = BOARD_TYPE[from]

        let position = 0
        player[type].map((boardCard, index) => {
            if(boardCard.name === card.name) position = index
            return
        })

        player[type][position] = null
    }
}