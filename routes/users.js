const NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    let route = app.route('/users');

    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((error, users) => {
            if (error) {
                app.utils.error.send(error, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
            }
        });
    });

    route.post((req, res) => {

        db.insert(req.body, (error, user) => {
            if (error) {
                app.utils.error.send(error, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });
};