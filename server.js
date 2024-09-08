var tools = require("./tools.js")

module.exports = {
    startServer: function () {
        console.log("Server started.")

        tools.getSite();
    }
};