const express = require('express');
const router = express.Router();
const { User } = require('../db/index');

router.get("/", async (req, res) => {
    console.log("getuser");
    try {

        User.find((err, users) => {
            if (err) res.send(err);
            else {
                // console.log("user", users);
                res.send(users);
                // Close();
            }
        });
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
});

module.exports = router;