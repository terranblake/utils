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

export const logs = function logs() {
    console.log(arguments);
}

export const warns = function warns() {
    console.warn(arguments);
}

export const errors = function errors() {
    console.error(arguments)
}