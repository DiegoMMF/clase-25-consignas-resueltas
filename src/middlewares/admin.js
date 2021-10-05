let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

function admin(req, res, next){
    admins.includes(req.query.user) && next();
    res.send('No tienes los privilegios para ingresar');
};

module.exports = admin;
