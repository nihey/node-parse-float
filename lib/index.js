module.exports = function(string) {
  string = string.replace(/\s/g, '').replace(/\./g, '').replace(/,/g, '.');
  return parseFloat(string);
}
