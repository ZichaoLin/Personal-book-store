const express = require('express');
const router = express.Router();
const { User, mongoose } = require('../db/index');

router.put("/:id", async (req, res) => {
    console.log("inside update");
    console.log(req.body);
    try {
        //process request body
        const { name, email, password, admin } = req.body;
        console.log(name, email, password, admin);

        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);

        console.log("database connected");
        User.updateOne(
            { _id: _id },
            { name, email, password, admin },

            (err, msg) => {
                if (err) {
                    console.log("ERROR: ", err);
                    res.send(err);
                } else {
                    if (msg.modifiedCount == 0) {
                        console.log(`No matching document found`);
                        res.send(`No matching document found`);
                    } else {
                        console.log(`Successfully updated ${msg.modifiedCount} document`);
                        res.send(`Successfully updated ${msg.modifiedCount} document`);
                    }

                }
            }
        );
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
});

module.exports = router;