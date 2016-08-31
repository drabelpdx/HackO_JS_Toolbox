//###### MONTHS ########

var month = function() {
var names = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return {
        name: function(number) { return names[number]; },
        number: function(name) { return names.indexOf(name); }
    };
}();

console.log(month.name(2));
console.log(month.number("November"));
console.log(month.name(month.number("November")));
console.log(month.name(month.number("November")-2));


// ##### EXPORT VERSION #####

(function(exports) {
var names = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.name = function(number) {
return names[number];
};
exports.number = function(name) {
return names.indexOf(name);
};
})(global.month = {});

console.log(month.name(month.number("March")));
console.log(month.name(month.number("March")+2));


//####### PHONE APP AGAIN ######
var phoneApp = {};

(function(exports) {

exports.buy = function(){
    var spending = 0;
    var phoneCount = 0;
    var accessCount = 0;

    // while loop
    while (spending < this.accountBalance() - this.addTax(this.phonePrice(), this.taxRate())) {
        var comboPrice = this.phonePrice() + this.accessPrice();
        if (spending + this.addTax(comboPrice, this.taxRate()) > this.accountBalance()) {
            spending += this.addTax(this.phonePrice(), this.taxRate());
            phoneCount++;
        } else {
            spending += this.addTax(comboPrice, this.taxRate());
            phoneCount++;
            accessCount++;
        }
        var funds = this.calcBalance(this.accountBalance(), spending);
    }
    // return value
    return this.formatFinal(phoneCount, accessCount, spending);
};

// functions called by buyPhone()
exports.phonePrice = function(){
    return 99.99;
}
exports.accessPrice = function(){
    return 29.99;
}
exports.taxRate = function(){
    return 1.08;
}
exports.accountBalance = function(){
    return 750;
}
exports.addTax = function(price, taxRate) {
    return price * taxRate;
}
exports.calcBalance = function (balance, spending) {
    return balance - spending;
}
exports.moneyFormat = function(amount) {
    return "$" + amount.toFixed(2);
}
exports.formatFinal = function(phoneCount, accessCount, spending){
    return "The total cost for " + phoneCount + " phones and " + accessCount + " accessories including tax is " + this.moneyFormat(spending);
}
})(phoneApp);

console.log(phoneApp.buy());
