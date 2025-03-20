export const getInitials = (fullName: string) => {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
        if (index === 0 || index === allNames.length - 1) {
            acc = `${acc}${curr.charAt(0).toUpperCase()}`;
        }
        return acc;
    }, "");
    return initials;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function objToQueryParams(obj: Record<string, any>): string {
    if (!obj) return "";
    return Object.keys(obj)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join("&");
}
