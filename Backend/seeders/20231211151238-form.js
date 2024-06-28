'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Forms",
      [
           {
            category:0,
            title: "Recrutement de membres pour 'K23 - Born of fire'",
            event_id : 1,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'IT - GEN Z FESTIVAL'",
            event_id : 2,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour la « IT LEAGUE 2024 »",
            event_id : 3,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour le 'CodeFest 2023'",
            event_id :4,
           },
           {
            
            category:0,
            title: "Recruter des membres pour « TechXperience Expo »",
            event_id : 5,
           },
           {
            
            category:0,
            title: "Recruter des membres pour le « Data Crunch Challenge »",
            event_id : 6,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour « InnoHackathon 2023 »",
            event_id : 7,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour la « FutureTech Conference »",
            event_id : 8,
           },
           {
            
            category:0,
            title: "Recruter des membres pour 'IT VOLLEYBALL TEAM'",
            event_id : 9,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'UNIHACK 2023'",
            event_id : 10,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'IT LOL 2023'",
            event_id : 11,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'BKDN TECHSHOW 2023'",
            event_id : 12,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'K22 - LET'S COMPILE'",
            event_id : 13,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour « WE MIX, YOU MATCH – UN JOUR GAUCHE ! »'",
            event_id : 14,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour « LIGHT UP THE MID-AUTUMN »",
            event_id : 15,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour '[IC RE³] - RÉCAPITULATIF - NOS MEILLEURS SOUVENIRS !'",
            event_id : 16,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour '[5 DAYS CHALLENGE] - MIEUX PAR MON SOI - C'EST PARTI !'",
            event_id : 17,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'IT ESPORT - LOL'",
            event_id : 18,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour le 'DUT PROGRAMING CHALLENGE 2021''",
            event_id : 19,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'IT ESPORT - LEAGUE OF LEGENDS 2021'",
            event_id : 20,
           },
           {
            
            category:0,
            title: "Recrutement de membres pour 'BKDN TECHSHOW 2021'",
            event_id : 21,
           },
      ],
      {}
  );
},


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Forms", null, {});
  }
};
