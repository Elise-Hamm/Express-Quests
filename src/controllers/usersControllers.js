const database = require("../../database");

const getUsers = (req, res) => {
    database
    .query("select * from users")
    .then(([users]) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    database
      .query("select * from users where id = ?", [id])
        .then(([users]) => {
        if (users[0] != null) {
            res.status(200).json(users);
        } else {
            res.sendStatus(404);
        }
        })
        .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        });
    };

    module.exports = {
        getUsers,
        getUserById,
    };