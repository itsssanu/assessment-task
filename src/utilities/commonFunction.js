export const classNames = (...classes) => {
    return classes.join(' ').split(/\s+/).filter(Boolean).join(' ');
}

export const profileName = (name) => {
    let result = "";

    if (name) {
        let processedName = name.split(" ");

        if (processedName.length === 1 && processedName[0].length > 1) {
            result = processedName[0].charAt(0) + processedName[0].charAt(1);
        } else if (processedName.length >= 2) {
            result = processedName[0].charAt(0) + processedName[1].charAt(0);
        } else {
            result = processedName[0].charAt(0);
        }
    } else {
        result = "NA";
    }

    return result.toUpperCase();
};