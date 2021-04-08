export class CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public saxonBin: string = '';

    constructor() {
        this.commandline = this.saxonBin
    }

    public catalog(filenames: any) {
        this.commandline += ` -catalog:${filenames}`;
        this.commandlineArray.push(`-catalog:${filenames}`);
        return this;
    }

    public dtd(options: 'on' | 'off' | 'recover') {
        this.commandline += ` -dtd:${options}`;
        this.commandlineArray.push(`-dtd:${options}`);
        return this;
    }

    public expand(options: 'on' | 'off') {
        this.commandline += ` -expand:${options}`;
        this.commandlineArray.push(`-expand:${options}`);
        return this;
    }

    public ext(options: 'on' | 'off') {
        this.commandline += ` -ext:${options}`;
        this.commandlineArray.push(`-ext:${options}`);
        return this;
    }

    public init(initializer: any) {
        this.commandline += ` -init:${initializer}`;
        this.commandlineArray.push(`-init:${initializer}`);
        return this;
    }

    public l(options: 'on' | 'off') {
        this.commandline += ` -l:${options}`;
        this.commandlineArray.push(`-l:${options}`);
        return this;
    }

    public now(format: any) {
        this.commandline += ` -now:${format}`;
        this.commandlineArray.push(`-now:${format}`);
        return this;
    }

    public o(filename: string) {
        this.commandline += ` -o:${filename}`;
        this.commandlineArray.push(`-o:${filename}`);
        return this;
    }


    public opt(flags: 'c' | 'd' | 'e' | 'f' | 'g' | 'j' | 'k' | 'l' | 'm' | 'n' | 'r' | 's' | 't' | 'v' | 'w' | 'x') {
        this.commandline += ` -opt:-${flags}`;
        this.commandlineArray.push(`-opt:-${flags}`);
        return this;
    }
}
