"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Currencies",
      [
        {
          currency_name: "tinkoff rub",
          currency_ticker: "tscrub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          currency_name: "sber rub",
          currency_ticker: "sbrub",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          currency_name: "dollar",
          currency_ticker: "dol",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          currency_name: "euro",
          currency_ticker: "eur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    // Add commands to revert seed here.

    await queryInterface.bulkDelete("Currencies", null, {});
  },
};
