import {platform} from "os";
import {CliShare} from "./cliShare";

export class Query extends CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public saxonBin: string = '';

    constructor() {
        super();
        this.saxonBin = this.getOS();
        this.commandline = this.saxonBin
    }

    public backup(options: 'on' | 'off') {
        this.commandline += ` -a:${options}`;
        this.commandlineArray.push(`-a:${options}`);
        return this;
    }

    public config(filenames: any) {
        this.commandline += ` -config:${filenames}`;
        this.commandlineArray.push(`-config:${filenames}`);
        return this;
    }

    public mr(classname: any) {
        this.commandline += ` -mr:${classname}`;
        this.commandlineArray.push(`-mr:${classname}`);
        return this;
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
