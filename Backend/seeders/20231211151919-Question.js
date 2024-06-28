'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
          {
	          form_id : 1,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 1,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 1,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 1,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 1,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
          {
	          form_id : 2,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 2,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 2,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 2,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 2,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
          //Event 3
          {
	          form_id : 3,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 3,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 3,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 3,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 3,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
          //Event 4
          {
	          form_id : 4,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 4,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 4,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 4,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 4,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
          //Event 5
          {
	          form_id : 5,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 5,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 5,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 5,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 5,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
          //Event 6
          {
	          form_id : 6,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 6,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 6,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 6,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 6,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 7
           {
	          form_id : 7,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 7,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 7,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 7,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 7,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 8
           {
	          form_id : 8,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 8,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 8,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 8,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 8,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 9
           {
	          form_id : 9,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 9,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 9,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 9,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 9,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 10
           {
	          form_id : 10,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 10,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 10,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 10,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 10,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 11
           {
	          form_id : 11,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 11,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 11,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 11,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 11,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 12
           {
	          form_id : 12,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 12,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 12,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 12,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 12,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 13
           {
	          form_id : 13,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 13,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 13,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 13,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 13,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 14
           {
	          form_id : 14,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 14,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 14,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 14,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 14,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 15
           {
	          form_id : 15,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 15,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 15,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 15,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 15,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 16
           {
	          form_id : 16,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 16,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 16,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 16,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 16,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 17
           {
	          form_id : 17,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 17,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 17,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 17,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 17,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 18
           {
	          form_id : 18,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 18,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 18,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 18,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 18,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 19
           {
	          form_id : 19,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 19,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 19,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 19,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 19,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 20
           {
	          form_id : 20,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 20,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 20,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 20,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 20,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
           //Event 21
           {
	          form_id : 21,
	          question : "Avez-vous déjà rejoint des clubs ?"
          },
          {
	          form_id : 21,
	          question : "Y a-t-il des aspects de l’événement sur lesquels vous aimeriez en savoir plus ?"
          },
          {
	          form_id : 21,
	          question : "Par quels moyens avez-vous eu connaissance de cet événement ?"
          },
          {
	          form_id : 21,
	          question : "Quel est votre objectif lorsque vous participez ?"
          },
          {
	          form_id : 21,
	          question : "Quel département souhaitez-vous rejoindre ?"
          },
      ],
      {}
  );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  }
};
