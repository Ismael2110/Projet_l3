const hashHelper = require(process.cwd() + "/helpers/password-encrypter");

const { getUserByAccount, create } = require("../CRUD/user");
const { getFacultyByName } = require("../CRUD/faculity");
const { DataTypes } = require("sequelize");

async function register(request, response) {
    try {
        if (
            !request.body.gmail ||
            !request.body.password ||
            !request.body.password2
        ) {
            return response.status(409).json({
                message: "Le manque d'information",
            });
        }

        if (request.body.password !== request.body.password2) {
            return response.status(409).json({
                message: "Le mot de passe 1 est différent du mot de passe 2",
            });
        }

        // Check if email already registered
        const dbUser = await getUserByAccount(request.body.gmail);
        if (dbUser) {
            return response.status(409).json({
                message: "ce courriel existe déjà",
            });
        }

        const {
            name,
            gmail,
            password,
            telephone,
            address,
            gender,
            birthday,
            faculity_name,
            university,
        } = request.body;

        const faculity_id = (await getFacultyByName(faculity_name)).id;

        // Create new user
        const newUser = {
            name: name,
            gmail: gmail,
            password: hashHelper.hash(password),
            telephone: telephone,
            address: address,
            gender: gender,
            avatar: "https://res.cloudinary.com/deei5izfg/image/upload/v1702623899/Mobile/x4h4tx79ple9mtecacf2.png",
            birthday: birthday,
            faculity_id: faculity_id,
            university: university,
        };

        create(newUser).then((result) => {
            // Create new wallet
            console.log(result.id)

            return response.status(200).json({
                message: "Créer un utilisateur avec succès!",
                result: result
            });
        });
    } catch (error) {
        return response.status(500).json({
            message: "Quelque chose s'est mal passé!",
            error: error,
        });
    }
}

module.exports = register;
