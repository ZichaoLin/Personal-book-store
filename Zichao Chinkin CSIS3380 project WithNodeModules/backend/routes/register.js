const express = require('express');
const router = express.Router();
const valid = require('../valid/valid');
const { registerSchema } = require('../schema/register');
const { User } = require('../db/index');


router.post('/', valid(registerSchema), async (req, res) => {
    //check user name is exists

    const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password });

    let exist = await User.exists({ email: user.email });

    if (exist != null) {

        console.log("Email already exists");
        return res.send({
            status: 1,
            msg: ["email", 'Email already exists']

        });
    }
    user.save(err => {
        if (err) {
            console.log("ERROR: ", err);
        }
        else {
            console.log("Document inserted successfully.")
            res.send({

                status: 0,
                msg: 'Success'
            })

        }
    })


});

module.exports = router;