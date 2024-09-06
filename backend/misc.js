"use strict";
// miscellaneous backend functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointError = endpointError;
const debug = require('debug')('ea:lib:misc');
debug.log = console.log.bind(console);
// handle endpoint error.
function endpointError(err, req, res) {
    debug('error in endpoint: ', req.url, '\n', err);
    if (err && err.errMsg)
        return res.status(400).send(err);
    return res.status(500).send('Something went wrong. Please try later');
}
