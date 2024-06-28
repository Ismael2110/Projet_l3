"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Departments",
            [  //event1 
                {
                    name: "Tableau de communication",
                    description : "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes capables de créer des liens avec un large public.",
                    event_id: 1
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 1
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 1
                },
                // Event_2
                {
                    name: "Tableau de communication",
                    description : "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes capables de créer des liens avec un large public.",
                    event_id: 2
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 2
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 2
                },
                // Event_3
                {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 3
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 3
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 3
                },
                // Event_4
                {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 4
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 4
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 4
                },
                // Event_5
                {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 5
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 5
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 5
                },
                // Event_6
                {
                    name:"Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 6
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 6
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 6
                },
                // Event_7
                {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 7
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 7
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 7
                },
                // Event_8
                {
                    name:"Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 8
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 8
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 8
                },
                // Event_9
                {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 9
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 9
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 9
                },
                 // Event_10
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 10
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 10
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 10
                },
                 // Event_11
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 11
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 11
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 11
                },
                 // Event_12
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 12
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 12
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 12
                },
                 // Event_13
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 13
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 13
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 13
                },
                 // Event_14
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 14
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 14
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 14
                },
                 // Event_15
                 {
                    name:"Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 15
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 15
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 15
                },
                 // Event_16
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 16
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 16
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 16
                },
                 // Event_17
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 17
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 17
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 17
                },
                 // Event_18
                 {
                    name:"Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 18
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 18
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 18
                },
                 // Event_19
                 {
                    name:"Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 19
                },
                {
                    name: "Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 19
                },
                {
                    name:"Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 19
                },
                 // Event_20
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 20
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 20
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 20
                },
                 // Event_21
                 {
                    name: "Tableau de communication",
                    description: "Le service communication, ce ne sont pas seulement les personnes qui savent rendre le message intéressant, mais aussi les personnes qui sont capables de créer des liens avec un large public.",
                    event_id: 21
                },
                {
                    name:"Département du contenu",
                    description : "Le service de contenu ne comprend pas seulement des personnes dotées d'excellentes compétences rédactionnelles, mais également des personnes qui comprennent comment créer la meilleure expérience client. Nous sommes des passionnés de contenu. Créativité, de la proposition d'idées à la rédaction de textes créatifs et à la maîtrise du message principal du événement.",
                    event_id: 21
                },
                {
                    name: "Département technique",
                    description : "Le département technique est un groupe d'experts multidisciplinaires, depuis les ingénieurs logiciels, les experts en infrastructure réseau jusqu'aux experts en équipements de sonorisation et d'éclairage. Nous sommes prêts à relever tous les défis pour donner vie à l'événement. le vôtre à un nouveau niveau." ,
                    event_id: 21
                },

            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Departments", null, {});
    },
};
