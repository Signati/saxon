import {platform} from "os";

export class Query {
    public commandline = '';
    public commandlineArray: string[] = [];
    private saxonBin: string = '';

    constructor() {
        this.saxonBin = this.getOS();
        this.commandline = this.saxonBin
    }

    private getOS(): string {
        if (platform() === 'win32') {
            return 'query.exe';
        } else if (platform() === 'linux') {
            return 'saxon-xquery';
        } else if (platform() === 'darwin') {
            return 'saxon-xquery';
            // var chilkat = require('@chilkat/ck-node11-macosx');
        }
        return 'saxon-xquery';
    }
}