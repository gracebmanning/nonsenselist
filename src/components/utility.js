export function formatTextForPath(title){
    var result = title.replaceAll(' ', '-');
    result = result.replaceAll('...', '-');
    result = result.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '');
    return result;
}
