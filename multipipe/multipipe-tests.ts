/// <reference path="./multipipe.d" />

import * as pipe from 'multipipe.d';
import {Readable, Writable, Duplex} from "stream";

let source: Readable;
let streamA: Duplex;
let streamB: Duplex;
let streamC: Duplex;
let dest: Writable;

// pipe streams
let stream:Duplex = pipe(streamA, streamB, streamC);

// centralized error handling
stream.on('error', (error: any) => {});

// creates a new stream
source.pipe(stream).pipe(dest);

// optional callback on finish or error
pipe(streamA, streamB, streamC, function(err: any){
    // ...
});

