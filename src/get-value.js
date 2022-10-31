let value = 'default';

module.exports = {
  getValue() {
    return value;
  },

  setValue(newValue) {
    value = newValue;
  }
}
