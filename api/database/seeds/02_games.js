/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex("games")
    .truncate()

    .then(function () {
      return knex("games").insert([
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },

        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },

        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },

        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },

        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
        {
          opponent_name: "Kracken",
          opponent_score: 4,
          home_score: 13,
        },
      ]);
    });
};
