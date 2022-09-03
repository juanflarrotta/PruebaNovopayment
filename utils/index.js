export function sortMenuList(list) {
    let result = [];
    if (list) {
        for (const item in list) {
            const content = {
                name: item,
                child: [],
            };
            if (list[item].length > 0) {
                content.child = sortMenuList(list[item][0]);
            }
            result.push(content);
        }
    }
    return result;
}

export function arrayHasElements(ar) {
    return !!ar && !!ar.length;
}
