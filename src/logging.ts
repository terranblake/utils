import * as colors from 'colors';

colors.setTheme({
    // info (green, cyan, blue)
    infoPrimary: 'green',
    infoItem: 'cyan',

    // error (red, yellow, magenta)
    warnPrimary: 'orange',
    warnItem: 'yellow',

    // error (red, yellow, magenta)
    errorPrimary: 'red',
    errorItem: 'magenta',
});

const error = console.error.bind(console);
const warn = console.warn.bind(console);
const log = console.log.bind(console);

export const logs = function logs(obj) {
    // TODO :: pass object to persistent logging tool
    // log({ caller: logs.caller, obj });

    switch (obj.name) {
        default:
            log(
                (new Date()).toString(),
                `[server]`,
                typeof obj === 'object' ?
                    (`${obj.name}` || '', `${obj.message}` || '') :
                    `${obj}`
            );
    }
}

export const warns = function warns(obj) {
    // TODO :: pass object to persistent logging tool
    // log({ caller: logs.caller, obj });

    switch (obj.name) {
        default:
            warn(
                (new Date()).toString(),
                `[server]`,
                typeof obj === 'object' ?
                    (`${obj.name}` || '', `${obj.message}` || '') :
                    `${obj}`
            );
    }
}

export const errors = function errors(obj) {
    switch (obj.name) {
        case 'TypeError':
        case 'MongoError':
        case 'ValidationError':
            error(
                (new Date()).toString(),
                `[server]`,
                `${obj.name}`,
                `${obj.message}`
            );
            break;
        default:
            error(
                (new Date()).toString(),
                `[server]`,
                typeof obj === 'object' ?
                    (`${obj.name}` || '', `${obj.message}` || '') :
                    `${obj}`
            );
    }
}