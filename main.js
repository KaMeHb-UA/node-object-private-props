var private = [];

function getPrivate(context, name){
    var needle;
    private.forEach(prop => {
        if (prop.context === context && prop.name == name) needle = prop.value
    })
    return needle;
}
function setPrivate(context, name, value){
    var index = -1;
    private.forEach((prop, i) => {
        if (prop.context === context && prop.name == name) index = i
    })
    if (!(index + 1)) private.push({context,name,value}); else private[index].value = value;
}

module.exports = {getPrivate,setPrivate}
