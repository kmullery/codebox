// Requires

function status(req, res) {
    return res.send({
        status: "ok",
        uptime: process.uptime(),
    });
}

function setup(options, imports, register) {
    var app = imports.server.app;

    // Status
    app.get('/', status);

    register(null, {});
}

// Exports
module.exports = setup;