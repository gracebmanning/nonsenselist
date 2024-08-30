export function formatTextForPath(title){
    var result = title.replaceAll(' ', '-');
    result = result.replaceAll('...', '-');
    return result;
}
