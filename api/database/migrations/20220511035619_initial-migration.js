/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable("players", tbl => {
        tbl.increments('player_id')
        tbl.string("first_name")
        tbl.string("last_initial")
        tbl.integer("defense")
        tbl.integer("assists")
        tbl.integer("points")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("players")
};
