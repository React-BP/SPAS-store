const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API/api-routes");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
if (process.env === 'PRODUCTION') {
    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
} 

module.exports = router;