const express = require('express');
const router = express.Router();
const { User, mongoose } = require('../db/index');

router.delete("/:id", async (req, res) => {
    console.log("inside delete");
    try {
        let _id = req.params.id;

        _id = mongoose.Types.ObjectId(_id);

        User.deleteOne(
            { _id: _id },

            (err, msg) => {
                if (err) {
                    console.log("ERROR: ", err);
                    res.send(err);
                } else {
                    if (msg.deletedCount == 0) {
                        console.log(`No matching document found`);
                        res.send(`No matching document found`);
                    } else {
                        console.log(`Successfully deleted ${msg.deletedCount} document`);
                        res.send(`Successfully deletedd ${msg.deletedCount} document`);
                    }
                    // mongoose.connection.close();
                }
            }
        );
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
});

module.exports = router;