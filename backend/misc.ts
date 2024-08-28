// miscellaneous backend functions

const debug = require('debug')('ea:lib:misc');
debug.log = console.log.bind(console);
import * as fs from "fs";
import * as express from "express";



// handle endpoint error.
export function endpointError(err: RequestError, req: express.Request, res: express.Response) {
    debug('error in endpoint: ', req.url, '\n', err);
    if (err && err.errMsg) return res.status(400).send(err);
    return res.status(500).send('Something went wrong. Please try later');
}
