// Type definitions for multipipe
// Project: https://github.com/juliangruber/multipipe
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "multipipe" {
    import {Readable, Duplex} from "stream";

    function pipe(...pipes:Duplex[]): Duplex;
    function pipe(inputStream: Readable, ...pipes:Duplex[]): Readable;
    function pipe(inputStream: Readable, ...pipes:Duplex[]): Readable;
    function pipe(...pipes:any[]): Duplex;

    namespace pipe {}
    export = pipe;
}
