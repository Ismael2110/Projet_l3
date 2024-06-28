const hashHelper = require(process.cwd() + "/helpers/password-encrypter");
// const jwt = require("jsonwebtoken");

const { getUserByAccount } = require("../CRUD/user");

async function login(req, res) {
    try {
        const { gmail, password } = req.body;

        const user = await getUserByAccount(gmail);

        if (!user) {
            return res.status(404).json({ message: "Compte non trouvé" });
        }

        const isPasswordValid = await hashHelper.compare(
            password,
            user.password.trim()
        );
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Mauvais mot de passe",
            });
        }

        res.status(200).json({
            message: "connexion réussie !!",
            user : user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = login;
