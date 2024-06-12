const checkFields = (fields) => {
    let errors = ''
    for (const key in fields) {
        if(!fields[key])
            errors += `${key} `
    }
    if(errors)
        return errors
}

module.exports = {checkFields}