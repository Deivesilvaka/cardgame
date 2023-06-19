import Game from './classes/game.mjs'
import { deck } from './mock/monsterMock.mjs'

const game = new Game()

const { room, player } = game.addPlayer({
    name: 'Colchão',
    deck
})

const playerTwo = game.addPlayer({
    name: 'Colchão',
    deck
})

game.drawCard({
    roomId: room.id,
    playerId: player.id
})

game.addManaToPlayer({
    roomId: room.id,
    playerId: player.id
})

game.addManaToPlayer({
    roomId: room.id,
    playerId: player.id,
    quantity: 2
})

// console.log(game.ROOMS.get(room.id).players.get(player.id))
// console.log(game.ROOMS.get(room.id).players.get(playerTwo.player.id))

console.log(game)