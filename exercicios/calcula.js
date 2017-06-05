module.exports = function ()
{
    return {
        somar: function (x, y) {
            console.log(x, " + ", y, " = ", x + y);
        },
        subtrair: function (x, y) {
            console.log(x, " - ", y, " = ", x - y);
        },
        multiplicar: function (x, y) {
            console.log(x, " * ", y, " = ", x * y);
        },
        dividir: function (x, y) {
            console.log(x, " / ", y, " = ", x / y);
        }
    };
};