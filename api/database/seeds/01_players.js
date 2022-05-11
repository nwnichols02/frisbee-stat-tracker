/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("players").truncate()
      // .del()
      .then(function () {
        return knex("players").insert([
          {
            first_name: 'Alex',
            last_initial: 'B',
            defense: 1,
            assists: 3,
            points: 1,
        },
        {
            first_name: 'Alex',
            last_initial: 'F',
            defense: 1,
            assists: 3,
            points: 1,
        },
        {
              first_name: 'Bentley',
              last_initial: 'O',
              defense: 1,
              assists: 3,
              points: 1,
            },
            {
              first_name: 'Corbin',
              last_initial: 'M',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Henry',
              last_initial: 'B',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Jacob',
              last_initial: 'B',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Jake',
              last_initial: 'M',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Luke',
              last_initial: 'S',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Luke',
              last_initial: 'W',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Mason',
              last_initial: 'G',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Mason',
              last_initial: 'H',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Nolan',
              last_initial: 'A',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Quinn',
              last_initial: 'G',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Quinn',
              last_initial: 'J',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Jordan',
              last_initial: 'K',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Skyler',
              last_initial: 'H',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Traver',
              last_initial: 'T',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Tyson',
              last_initial: 'Y',
              defense: 1,
              assists: 3,
              points: 1,
          },
            {
              first_name: 'Wyatt',
              last_initial: 'S',
              defense: 1,
              assists: 3,
              points: 1,
          },
        ]);
      });
  };