console.log("ADDRESS BOOK USING JAVaSCRIPT")
class AddressBook{
   

    constructor(firstName, lastName, address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName(){ return this._firstName; }
    set firstName(firstName){ this._firstName = firstName; }

    toString(){
        return "firstName: "+this.firstName+"\nlastName: "+this.lastName+"\naddress:"+this.address+
        "\ncity:"+this.city+"\nstate:"+this.state+"\nzip:"+this.zip+"\nphoneNumber:"+this.phoneNumber+"\nemail:"+this.email;
    }
}
let addressBook = new AddressBook("Sneha","Bhokare","Baramati","Pune","Maharashtra",413102,9762689841,"bhokare@gmail.com");
console.log(addressBook.toString());
