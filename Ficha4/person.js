// linha 3
//a) e b)
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname;
        this.greet = function() {
            return  'Hello' + this.firstname + this.lastname;
        };
    }
};
