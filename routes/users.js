const NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    app.get('/users', (req, res) => {

        db.find({}).sort({ name: 1 }).exec((error, users) => {
            if (error) {
                console.log(`Error: ${error}`);
                res.status(400).json({
                    error: error
                });
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        });
    });

    app.post('/users', (req, res) => {

        db.insert(req.body, (error, user) => {
            if (error) {
                console.log(`Error: ${error}`);
                res.status(400).json({
                    error: error
                });
            } else {
                res.status(200).json(user);
            }
        });
    });
};