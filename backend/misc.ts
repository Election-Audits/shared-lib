// miscellaneous backend functions

const debug = require('debug')('ea:lib:misc');
debug.log = console.log.bind(console);
import * as fs from "fs";
import * as express from "express";



/**
 * Handle an error in an Express endpoint
 * @param err Error
 * @param req Express request
 * @param res Express response
 * @returns 
 */
export function endpointError(err: RequestError, req: express.Request, res: express.Response) {
    debug('error in endpoint: ', req.url, '\n', err);
    if (err && err.errMsg) return res.status(400).send(err);
    return res.status(500).send('Something went wrong. Please try later');
}


/**
 * Transform a Joi validation error to a human readable message
 * @param error 
 * @returns 
 */
export function getJoiError(error: any) {
    let msg = error.details[0].message;
    //debug('msg: ', msg);
    //if (msg.includes('empty')) return null; // ignore errors created by empty input
    //let field = msg.split(' ')[0];//.replace('"', '');
    //return {msg: `Invalid input: ${field}`};
    return msg;
}
