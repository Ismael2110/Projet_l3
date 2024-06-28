Backend-Side
# Gestion Evènement
Application mobile de gestion d'événements 

1. Créer des Node_modules
-> npm i

2. Créer un modèle avec sequelize :

-> en utilisant npm

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

->  en utilisant yarn

yarn sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

=> Créer 2 fichiers : modèle et migration

3. Migrations:

-   Créer des migrations:

-> en utilisant npm 

npx sequelize-cli migration:generate --name demo-user

-> en utilisant yarn

yarn sequelize-cli migration:generate --name demo-user

-   Exécuter des migrations:

-> en utilisant npm

npx sequelize-cli db:migrate // auto chạy môi trường development

npx sequelize db:migrate --env test --config config/config.json  // Chạy môi trường test

-> en utilisant yarn

yarn sequelize-cli db:migrate

-   Supprimer les migrations:

-> en utilisant npm

npx sequelize-cli db:migrate:undo:all

-> en utilisant yarn

yarn sequelize-cli db:migrate:undo:all

4. Créer seeders:

-   Créer seeder:

-> en utilisant npm

npx sequelize-cli seed:generate --name demo-user

-> en utilisant yarn

yarn sequelize-cli seed:generate --name demo-user

-   Chạy seeder:

-> en utilisant npm

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed --seed 20211116123456-demo-seeder.js

-> en utilisant yarn

yarn sequelize-cli db:seed:all

-   Annuler le semoir:

-> en utilisant npm

npx sequelize-cli db:seed:undo:all

-> en utilisant yarn

yarn sequelize-cli db:seed:undo:all