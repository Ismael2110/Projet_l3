"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Notifications",
            [
                {
                    title: "Confirmer la participation à l'événement",
                    content:
                        "Vous avez été confirmé comme collaborateur pour l'événement IT GenZ Festival organisé par la Fédération de la Faculté des Technologies de l'Information.", dateTime: "2023-11-13 22:02:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701833770/Mobile/m5vrtfownudiov4jg1ai.jpg",
                },
                {
                    title: "Un nouveau message",
                    content: "Un nouveau message de @minh_dac",
                    dateTime: "2023-10-13 14:02:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "L'événement est sur le point de commencer",
                    content:
                        "Le 11ème événement Uni Hack Danang a commencé, inscrivez-vous vite pour devenir collaborateur pour soutenir l'événement et recevoir des points de formation ainsi que du « fun » !",
                    dateTime: "2023-12-13 00:00:59",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Mission non terminée",
                    content:
                        "Le plan global de l’événement IT GenZ Festival n’est pas terminé. Dépêchez-vous et faites-le !",
                    dateTime: "2023-12-13 00:00:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930750/Mobile/ssexsqpii09nrwfnudi8.jpg",
                },
                {
                    title: "Avis important",
                    content: "Un nouveau message de @mautruongconaitei",
                    dateTime: "2023-11-18 10:30:00",
                    isRead: true,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Informations sur l'inscription à l'événement",
                    content:
                        "Veuillez vous inscrire à l'événement Uni Hack Danang avant le 25 novembre 2023 pour vous assurer d'avoir une chance de participer.",
                    dateTime: "2023-11-22 15:45:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
                {
                    title: "Invitation à participer à l'événement",
                    content:
                        "Vous recevez une invitation à participer à une conférence pour partager des expériences d'experts du secteur des technologies de l'information.",
                    dateTime: "2023-11-20 08:00:00",
                    isRead: true,
                    image: null,
                },
                {
                    title: "Notification des résultats de l'inscription",
                    content:
                        "Les résultats des inscriptions à l'événement Uni Hack Danang seront annoncés le 27 novembre 2023. Bonne chance!",
                    dateTime: "2023-11-25 18:30:00",
                    isRead: false,
                    image: "http://res.cloudinary.com/deei5izfg/image/upload/v1701930619/Mobile/og0zhmgcxco0a76pfhee.png",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Notifications", null, {});
    },
};
