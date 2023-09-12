const users = require("../models/users.model.js");

function getUsers(req, res)
{
    res.json(users);
}

function getUser(res, res)
{
    const userId = Number(req.params.userId);
    const user = user[userId];
    if (user)
    {
        res.status(200).json(user);
    }
    else
    {
        res.status(404).json({ message: "User not found" });
    }
}

function postUser(req, res)
{
    if (!req.body.name)
    {
        return res.status(400).json(
            {
                message: "Missing user name"
            }
        );
    }

    const newUser = 
    {
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);

    res.json(newUser);
}

module.exports = 
{
    getUsers,
    getUser,
    postUser
};