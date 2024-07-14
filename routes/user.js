const { Router } = require("express");
const { User } = require("../db/db");

const router = Router();

// Define your user routes here
// For example:
router.get('/', (req, res) => {
    res.send("User route");
});

module.exports = router;