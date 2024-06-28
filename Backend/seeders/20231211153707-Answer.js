'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Answers",
      [
          {
            question_id : 1,
            user_id  : 4,
            answer : "Je n'ai assisté à aucun événement auparavant"
          },
          {
            question_id : 2,
            user_id  : 4,
            answer : "Je veux savoir si l'événement utilise des médias pour partager des informations et interagir avec les participants."
          },
          
          {
            question_id : 3,
            user_id  : 4,
            answer : "Je l'ai su grâce à l'introduction d'un ami"
          },
          
          {
            question_id : 4,
            user_id  : 4,
            answer : "Mon objectif en participant est d'échanger, d'apprendre et de me développer"
          },
          
          {
            question_id : 5,
            user_id  : 4,
            answer : "Tableau de communication"
          },
          {
            question_id : 1,
            user_id  : 3,
            answer : "Je n'ai assisté à aucun événement auparavant"
          },
          {
            question_id : 2,
            user_id  : 3,
            answer : "Je veux savoir si l'événement utilise des médias pour partager des informations et interagir avec les participants."
          },
          
          {
            question_id : 3,
            user_id  : 3,
            answer : "Je l'ai su grâce à l'introduction d'un ami"
          },
          
          {
            question_id : 4,
            user_id  : 3,
            answer : "Mon objectif en participant est d'échanger, d'apprendre et de me développer"
          },
          
          {
            question_id : 5,
            user_id  : 3,
            answer : "Tableau de communication"
          },
          {
            question_id : 6,
            user_id  : 2,
            answer : "Je n'ai assisté à aucun événement auparavant"
          },
          {
            question_id : 7,
            user_id  : 2,
            answer : "Je veux savoir si l'événement utilise des médias pour partager des informations et interagir avec les participants."
          },
          
          {
            question_id : 8,
            user_id  : 2,
            answer : "Je l'ai su grâce à l'introduction d'un ami"
          },
          
          {
            question_id : 9,
            user_id  : 2,
            answer : "Bureau technique"
          },
          
          {
            question_id : 10,
            user_id  : 2,
            answer : "J'aimerais participer et rencontrer d'autres personnes mais je n'ai pas encore de projets"
          },
          {
            question_id : 11,
            user_id  : 3,
            answer : "Je n'ai assisté à aucun événement auparavant"
          },
          {
            question_id : 12,
            user_id  : 3,
            answer : "Je veux savoir si l'événement utilise des médias pour partager des informations et interagir avec les participants."
          },
            
          {
            question_id : 13,
            user_id  : 3,
            answer : "Je l'ai su grâce à l'introduction d'un ami"
          },
          
          {
            question_id : 14,
            user_id  : 3,
            answer : "Mon objectif en participant est d'échanger, d'apprendre et de me développer"
          },
          
          {
            question_id : 15,
            user_id  : 3,
            answer : "Tableau de communication"
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  }
};
