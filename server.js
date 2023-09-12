const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

const userRouter = require('./routes/users.router.js');
const postRouter = require('./routes/posts.router.js');

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use((req, res, next) => 
{
    const start = Date.now();
    console.log(`start: ${req.method} ${req.url}`);

    next();

    const diffTime = Date.now() - start;
    console.log(`end: ${req.method} ${req.url} in ${diffTime} ms`);
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.get("/", (req, res) => 
{
    res.render("index", 
    {
        imageTitle: "Image Title!!!!!!!!!!!!!!!"
    });
})

app.listen(port, () => 
{
    console.log(`Server running on port ${port}`);
})