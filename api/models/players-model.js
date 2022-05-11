const db = require('../database/db-config');

function getAllPlayers(){
    return db('players')
}

function getPlayerById(id){
    return db('players').where('player_id', id).first()
}

async function addPlayer(player) {
    const [player_id] = await db('players')
        .insert(player)
    return getPlayerById(player_id)
}

function deletePlayer(id) {
    return db('players').where('player_id', id).del();
}

module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlayer,
    deletePlayer
}