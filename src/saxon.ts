import {commandSync} from 'execa'
import * as fs from 'fs';

export function saxon(stylepath: string, xmlpath: string): string {
    try {
        if (!fs.existsSync(stylepath)) {
            throw new Error('No se puede encontrar el archivo para la cadena original!.');
        }
        if (!fs.existsSync(xmlpath)) {
            throw new Error('No se puede encontrar el xml processar.');
        }
        const saxonProc = commandSync(`saxon -s:${xmlpath} -xsl:${stylepath} -warnings:silent`).stdout;
        return saxonProc;
    } catch (e) {
        throw new Error(e.message);

    }

}
