const path = require('path');

function postMain(req, res)
{
   res.sendFile(path.join(__dirname, '..', 'public', 'images', 'image.png'));
}

function getPost(req, res)
{
    res.render("posts", 
    {
        templateName: "posts"
    });
}

module.exports = 
{
    postMain,
    getPost
};