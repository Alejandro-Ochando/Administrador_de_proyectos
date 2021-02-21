const chalk = require('chalk');

exports.createUser = (req, res) => {
    console.log( chalk.cyan('Desde createuser'));
    console.log(req.body);
};
