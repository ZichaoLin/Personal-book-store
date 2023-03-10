const { User } = require('../../db/index');
const jwt = require('jsonwebtoken');
const config = require("../../config/index")
module.exports = async (req, res) => {

    let exist = await User.exists({ "email": req.body.email });

    console.log(req.body);

    if (exist == null) {
        return res.send({
            status: 1,
            msg: 'User not fount'
        })
    }
    $user = await User.findOne({ email: req.body.email })
    if (req.body.password != $user.password) {
        return res.send({
            status: 1,
            msg: 'Password incorrect'
        })
    }
    const token = jwt.sign({ name: $user.name, admin: $user.admin }, config.jwtKey, {
        expiresIn: '1h'
    })
    res.send({
        status: 0,
        msg: 'Login success',
        token
    })
};