const formatLogs = (args: any[]) => {
    return args.join(' ');
}

function info(...args: any[]) {
    const formatted = formatLogs(args);
    console.log(arguments);
}

function warn(...args: any[]) {
    const formatted = formatLogs(args);
    console.warn(arguments);
}

function error(...args: any[]) {
    const formatted = formatLogs(args);
    console.error(arguments)
}

export default { info, warn, error }