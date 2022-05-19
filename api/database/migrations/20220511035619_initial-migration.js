/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("players", (tbl) => {
      tbl.increments("player_id");
      tbl.string("first_name");
      tbl.string("last_initial");
      tbl.integer("defense");
      tbl.integer("assists");
      tbl.integer("points");
    })
    .createTable("games", (tbl) => {
      tbl.increments("game_id");
      tbl.string("opponent_name");
      tbl.integer("opponent_score");
      tbl.integer("home_score");
      tbl.string("first_name").unsigned().references("first_name");
      tbl.string("last_initial").unsigned().references("last_initial");
      tbl.integer("defense").unsigned().references("defense");
      tbl.integer("assists").unsigned().references("assists");
      tbl.integer("points").unsigned().references("points");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("players").dropTableIfExists("games");
};
