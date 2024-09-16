"use strict";
// miscellaneous backend functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointError = endpointError;
exports.getJoiError = getJoiError;
const debug = require('debug')('ea:lib:misc');
debug.log = console.log.bind(console);
/**
 * Handle an error in an Express endpoint
 * @param err Error
 * @param req Express request
 * @param res Express response
 * @returns
 */
function endpointError(err, req, res) {
    debug('error in endpoint: ', req.url, '\n', err);
    if (err && err.errMsg)
        return res.status(400).send(err);
    return res.status(500).send('Something went wrong. Please try later');
}
/**
 * Transform a Joi validation error to a human readable message
 * @param error
 * @returns
 */
function getJoiError(error) {
    let msg = error.details[0].message;
    //debug('msg: ', msg);
    //if (msg.includes('empty')) return null; // ignore errors created by empty input
    //let field = msg.split(' ')[0];//.replace('"', '');
    //return {msg: `Invalid input: ${field}`};
    return msg;
}
