// @flow

const fs = require("fs");

exports.findIdItem = (paintings, id) => {
    for (let i = 0; i < paintings.length; i++) {
        if (paintings[i].id === id) {
            return paintings[i];
        }
    }
    return {};
}

exports.findNameItem = (item, name) => {
    for (let i = 0; i < item.length; i++) {
        if (item[i].name === name) {
            return item[i];
        }
    }
    return {};
}

exports.findNameIndex = (item, name) => {
    for (let i = 0; i < item.length; i++) {
        if (item[i].name === name)
            return i;
    }
    return -1;
};

exports.findIdIndex = (paintings, id) => {
    for (let i = 0; i < paintings.length; i++) {
        if (paintings[i].id === id)
            return i;
    }
    return -1;
};

exports.writeToFile = (file, data) => {
    data = JSON.stringify(data);
    try {
        fs.writeFile(file, data, (err) => {
            if (err) throw err;
            console.log('База данных успешно обновлена');
        });
    } catch (err) {
        console.error(err);
    }
}