const formatLogs = (args: any[]) => {
    return args.join(' ');
}

function info(...args: any[]) {
    const formatted = formatLogs(args);
    console.log(formatted);
}

function warn(...args: any[]) {
    const formatted = formatLogs(args);
    console.warn(formatted);
}

function error(...args: any[]) {
    const formatted = formatLogs(args);
    console.error(formatted)
}

export default { info, warn, error }