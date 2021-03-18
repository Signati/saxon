import {commandSync} from 'execa'
import {existsSync} from 'fs';
import {platform} from 'os';

export class Transform {
    public commandline = '';
    public commandlineArray: string[] = [];
    private saxonBin: string = 'openssl';

    constructor() {
        this.saxonBin = this.getOS();
        this.commandline = this.saxonBin
    }

    public a(options: 'on' | 'off') {
        this.commandline += ` -a:${options}`;
        this.commandlineArray.push(`-a:${options}`);
        return this;
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

    public ea(options: 'on' | 'off') {
        this.commandline += ` -ea:${options}`;
        this.commandlineArray.push(`-ea:${options}`);
        return this;
    }

    public expand(options: 'on' | 'off') {
        this.commandline += ` -expand:${options}`;
        this.commandlineArray.push(`-expand:${options}`);
        return this;
    }

    public explain(filename: any) {
        this.commandline += ` -explain:${filename}`;
        this.commandlineArray.push(`-explain:${filename}`);
        return this;
    }

    public export(filename: any) {
        this.commandline += ` -export:${filename}`;
        this.commandlineArray.push(`-export:${filename}`);
        return this;
    }

    public ext(options: 'on' | 'off') {
        this.commandline += ` -ext:${options}`;
        this.commandlineArray.push(`-ext:${options}`);
        return this;
    }

    public im(modename: any) {
        this.commandline += ` -im:${modename}`;
        this.commandlineArray.push(`-im:${modename}`);
        return this;
    }

    public init(initializer: any) {
        this.commandline += ` -init:${initializer}`;
        this.commandlineArray.push(`-init:${initializer}`);
        return this;
    }

    public it(template: any) {
        this.commandline += ` -it:${template}`;
        this.commandlineArray.push(`-it:${template}`);
        return this;
    }


    public jit(options: 'on' | 'off') {
        this.commandline += ` -jit:${options}`;
        this.commandlineArray.push(`-jit:${options}`);
        return this;
    }

    public l(options: 'on' | 'off') {
        this.commandline += ` -l:${options}`;
        this.commandlineArray.push(`-l:${options}`);
        return this;
    }

    public lib(filenames: any) {
        this.commandline += ` -lib:${filenames}`;
        this.commandlineArray.push(`-lib:${filenames}`);
        return this;
    }

    public license(options: 'on' | 'off') {
        this.commandline += ` -license:${options}`;
        this.commandlineArray.push(`-license:${options}`);
        return this;
    }

    public m(classname: any) {
        this.commandline += ` -m:${classname}`;
        this.commandlineArray.push(`-m:${classname}`);
        return this;
    }

    public nogo() {
        this.commandline += ` -nogo`;
        this.commandlineArray.push(`-nogo`);
        return this;
    }

    public now(format: any) {
        this.commandline += ` -now:${format}`;
        this.commandlineArray.push(`-now:${format}`);
        return this;
    }

    public ns(options: 'uri' | '##any' | '##html5') {
        this.commandline += ` -ns:${options}`;
        this.commandlineArray.push(`-ns:${options}`);
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

    public or(classname: any) {
        this.commandline += ` -or:${classname}`;
        this.commandlineArray.push(`-or:${classname}`);
        return this;
    }

    public outval(options: 'recover' | 'fatal') {
        this.commandline += ` -outval:${options}`;
        this.commandlineArray.push(`-outval:${options}`);
        return this;
    }

    public p(options: 'on' | 'off') {
        this.commandline += ` -p:${options}`;
        this.commandlineArray.push(`-p:${options}`);
        return this;
    }

    public quit(options: 'on' | 'off') {
        this.commandline += ` -quit:${options}`;
        this.commandlineArray.push(`-quit:${options}`);
        return this;
    }

    public r(classname: any) {
        this.commandline += ` -r:${classname}`;
        this.commandlineArray.push(`-r:${classname}`);
        return this;
    }

    public relocate(options: 'on' | 'off') {
        this.commandline += ` -relocate:${options}`;
        this.commandlineArray.push(`-relocate:${options}`);
        return this;
    }

    public repeat(integer: number) {
        this.commandline += ` -repeat:${integer}`;
        this.commandlineArray.push(`-repeat:${integer}`);
        return this;
    }

    public s(filename: string) {
        if (!existsSync(filename)) {
            throw new Error('No se puede encontrar el xml processar.');
        }
        this.commandline += ` -s:${filename}`;
        this.commandlineArray.push(`-s:${filename}`);
        return this;
    }

    public sa() {
        this.commandline += ` -sa`;
        this.commandlineArray.push(`-sa`);
        return this;
    }

    public scmin(filename: string) {
        this.commandline += ` -scmin:${filename}`;
        this.commandlineArray.push(`-scmin:${filename}`);
        return this;
    }

    public strip(options: 'all' | 'none' | 'ignorable') {
        this.commandline += ` -relocate:${options}`;
        this.commandlineArray.push(`-relocate:${options}`);
        return this;
    }

    public t() {
        this.commandline += ` -t`;
        this.commandlineArray.push(`-t`);
        return this;
    }

    public T(classname: any) {
        this.commandline += ` -T:${classname}`;
        this.commandlineArray.push(`-T:${classname}`);
        return this;
    }

    public target(target: 'EE' | 'PE' | 'HE' | 'JS') {
        this.commandline += ` -target:${target}`;
        this.commandlineArray.push(`-target:${target}`);
        return this;
    }

    public TB(filename: string) {
        this.commandline += ` -TB:${filename}`;
        this.commandlineArray.push(`-TB:${filename}`);
        return this;
    }

    public threads(N: number) {
        // todo only -S is activate
        this.commandline += ` -threads:${N}`;
        this.commandlineArray.push(`-threads:${N}`);
        return this;
    }

    public TJ() {
        this.commandline += ` -TJ`;
        this.commandlineArray.push(`-TJ`);
        return this;
    }

    public Tlevel(level: 'none' | 'low' | 'normal' | 'high') {
        this.commandline += ` -Tlevel:${level}`;
        this.commandlineArray.push(`-Tlevel:${level}`);
        return this;
    }

    public Tout(filename: string) {
        this.commandline += ` -Tout:${filename}`;
        this.commandlineArray.push(`-Tout:${filename}`);
        return this;
    }

    public TP(filename: string) {
        this.commandline += ` -TP:${filename}`;
        this.commandlineArray.push(`-TP:${filename}`);
        return this;
    }

    public traceout(filename: string) {
        this.commandline += ` -traceout:${filename}`;
        this.commandlineArray.push(`-traceout:${filename}`);
        return this;
    }

    public tree(level: 'linked' | 'tiny' | 'tinyc') {
        this.commandline += ` -tree:${level}`;
        this.commandlineArray.push(`-tree:${level}`);
        return this;
    }

    public u() {
        this.commandline += ` -u`;
        this.commandlineArray.push(`-u`);
        return this;
    }

    public val(validation: 'strict' | 'lax') {
        this.commandline += ` -val:${validation}`;
        this.commandlineArray.push(`-val:${validation}`);
        return this;
    }

    public warnings(validation: 'silent' | 'recover' | 'fatal') {
        this.commandline += ` -warnings:${validation}`;
        this.commandlineArray.push(`-warnings:${validation}`);
        return this;
    }

    public x(classname: any) {
        this.commandline += ` -x:${classname}`;
        this.commandlineArray.push(`-x:${classname}`);
        return this;
    }

    public xi(options: 'on' | 'off') {
        this.commandline += ` -xi:${options}`;
        this.commandlineArray.push(`-xi:${options}`);
        return this;
    }

    public xmlversion(options: '1.0' | '1.1') {
        this.commandline += ` -xmlversion:${options}`;
        this.commandlineArray.push(`-xmlversion:${options}`);
        return this;
    }

    public xsd(file: string) {
        this.commandline += ` -xsd:${file}`;
        this.commandlineArray.push(`-xsd:${file}`);
        return this;
    }

    public xsdversion(options: '1.0' | '1.1') {
        this.commandline += ` -xsdversion:${options}`;
        this.commandlineArray.push(`-xsdversion:${options}`);
        return this;
    }

    public xsiloc(options: 'on' | 'off') {
        this.commandline += ` -xsiloc:${options}`;
        this.commandlineArray.push(`-xsiloc:${options}`);
        return this;
    }

    public xsl(filename: string) {
        if (!existsSync(filename)) {
            throw new Error('No se puede encontrar el archivo para la cadena original!.');
        }
        this.commandline += ` -xsl:${filename}`;
        this.commandlineArray.push(`-xsl:${filename}`);
        return this;
    }

    public y(filename: string) {
        this.commandline += ` -y:${filename}`;
        this.commandlineArray.push(`-y:${filename}`);
        return this;
    }

    public feature(value: any) {
        this.commandline += ` --feature:${value}`;
        this.commandlineArray.push(`--feature:${value}`);
        return this;
    }

    public params(value: any) {
        // todo
    }

    public  run() {
        try {
            const saxonProc = commandSync(this.commandline).stdout;
            return saxonProc;
        } catch (e) {
            throw new Error(e.message);

        }
    }

    private getOS(): string {
        if (platform() === 'win32') {
            return 'transform.exe';
        } else if (platform() === 'linux') {
            return 'transform';
        } else if (platform() === 'darwin') {
            return 'transform';
            // var chilkat = require('@chilkat/ck-node11-macosx');
        }
        return 'transform';
    }
}