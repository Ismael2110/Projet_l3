'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Notifications",
      [
          {
	          event_id : 1,
	          title : "K23 - Né du feu",
	          content : "Vous avez créé avec succès l'événement 'K23 - Born of Fire'",
	          dateTime : "2024-12-10",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356652/Mobile/bjkk2sou1qnbq6pv81t1.png?fbclid=IwAR03tvGHj1fcCkDKxvwpT6n2rvZMiaa2vZv07zCWAjJAwpngje5DRTcTYdc", 
	          category : 1,
          },
          {
	          event_id : 2,
	          title : "IT - GEN Z FESTIVAL",
	          content : "Vous avez créé avec succès l'événement 'IT - GEN Z FESTIVAL'",
	          dateTime : "2024-01-10",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356652/Mobile/bjkk2sou1qnbq6pv81t1.png?fbclid=IwAR03tvGHj1fcCkDKxvwpT6n2rvZMiaa2vZv07zCWAjJAwpngje5DRTcTYdc", 
	          category : 1, 
          },
          {
	          event_id : 3,
	          title : "IT LEAGUE 2024",
	          content : "Vous avez créé avec succès l'événement 'IT LEAGUE 2024'",
	          dateTime : "2024-02-20",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356652/Mobile/bjkk2sou1qnbq6pv81t1.png?fbclid=IwAR03tvGHj1fcCkDKxvwpT6n2rvZMiaa2vZv07zCWAjJAwpngje5DRTcTYdc", 
	          category : 1, 
          },
          {
	          event_id : 3,
	          title : "IT LEAGUE 2024",
	          content : "Vous avez été accepté pour participer à l'événement 'IT LEAGUE 2024'",
	          dateTime : "2024-02-25",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png?fbclid=IwAR0XkjByZqTO2XRZ-MYSreuXuc4U_E7eJEZMGDgAkU88kUQLKMJhgF4ofOc", 
	          category : 1, 
          },
          {
	          event_id : 2,
	          title : "IT - GEN Z FESTIVAL",
	          content : "Vous avez été accepté pour participer à l'événement 'IT - GEN Z FESTIVAL'",
	          dateTime : "2024-01-14",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png?fbclid=IwAR0XkjByZqTO2XRZ-MYSreuXuc4U_E7eJEZMGDgAkU88kUQLKMJhgF4ofOc", 
	          category : 1, 
          },
          {
	          event_id : 1,
	          title : "K23 - Bén lửa sinh ra",
	          content : "Vous avez été accepté pour participer à l'événement 'K23 - Bén lửa sinh ra'",
	          dateTime : "2024-12-12",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702183107/Mobile/pssybhsldjimufloxwk5.png?fbclid=IwAR0XkjByZqTO2XRZ-MYSreuXuc4U_E7eJEZMGDgAkU88kUQLKMJhgF4ofOc", 
	          category : 1, 
          },
          {
	          event_id : 1,
	          title : "K23 - Bén lửa sinh ra",
	          content : "Une tâche vous a été assignée dans l'événement 'K23 - Bén lửa sinh ra'",
	          dateTime : "2024-06-13",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356562/Mobile/dhqtbbdg9uo1ooqwraig.png?fbclid=IwAR3LqUW3ZlZYxquELMNbC90EJzwty310Zs2rVHZoH6bD-edF88Y6JQDeg-I", 
	          category : 2, 
          },
          {
	          event_id : 2,
	          title : "IT - GEN Z FESTIVAL",
	          content : "Une tâche vous a été assignée dans l'événement 'IT - GEN Z FESTIVAL'",
	          dateTime : "2024-02-20",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356562/Mobile/dhqtbbdg9uo1ooqwraig.png?fbclid=IwAR3LqUW3ZlZYxquELMNbC90EJzwty310Zs2rVHZoH6bD-edF88Y6JQDeg-I", 
	          category : 2, 
          },
          {
	          event_id : 2,
	          title : "IT LEAGUE 2024",
	          content : "Une tâche vous a été assignée dans l'événement 'IT LEAGUE 2024'",
	          dateTime : "2024-02-20",
	          isRead : false,
	          image : "https://res.cloudinary.com/deei5izfg/image/upload/v1702356562/Mobile/dhqtbbdg9uo1ooqwraig.png?fbclid=IwAR3LqUW3ZlZYxquELMNbC90EJzwty310Zs2rVHZoH6bD-edF88Y6JQDeg-I", 
	          category : 2, 
          },
      ],

      {}
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notifications", null, {});
  }
};
