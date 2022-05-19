/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex("players")
      .truncate()
      // .del()
      .then(function () {
        return knex("players").insert([
          {
            first_name: "Alex",
            last_initial: "B",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Alex",
            last_initial: "F",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Bentley",
            last_initial: "O",
            defense: 0,
            assists: 0,
            points: 0,
          },

          {
            first_name: "Henry",
            last_initial: "B",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Jacob",
            last_initial: "B",
            defense: 0,
            assists: 0,
            points: 0,
          },

          {
            first_name: "Luke",
            last_initial: "S",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Luke",
            last_initial: "W",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Mason",
            last_initial: "G",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Mason",
            last_initial: "H",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Quinn",
            last_initial: "G",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Quinn",
            last_initial: "J",
            defense: 0,
            assists: 0,
            points: 0,
          },

          {
            first_name: "Skyler",
            last_initial: "H",
            defense: 0,
            assists: 0,
            points: 0,
          },

          {
            first_name: "Tyson",
            last_initial: "Y",
            defense: 0,
            assists: 0,
            points: 0,
          },
          {
            first_name: "Wyatt",
            last_initial: "S",
            defense: 0,
            assists: 0,
            points: 0,
          },
        ]);
      })
  );
};
