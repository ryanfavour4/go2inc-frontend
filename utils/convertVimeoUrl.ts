export function convertVimeoUrl(originalUrl: string) {
    if (!originalUrl) return null; // Return null if originalUrl is falsy

    const regex = /vimeo\.com\/(\d+)\/([\w]+)/;
    const match = originalUrl.match(regex);

    if (!match) return null; // Return null if URL doesn't match expected pattern

    const videoId = match[1];
    const hash = match[2];

    return `https://player.vimeo.com/video/${videoId}?h=${hash}&badge=0&autopause=0&player_id=0&app_id=58479`;
}
