module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  getErrorObj(error) {
    const errObj = {};
    error.errors.map(err => {
      errObj[err.path] = err.message;
    })
    return Object.keys(errObj).length ? errObj : null
  }
}
