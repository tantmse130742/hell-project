function customerAccount(username,email,phonenumber,elevatorLocation){
    this.username = username;
    this.email = email;
    this.phonenumber = phonenumber;
    this.elevatorLocation = elevatorLocation;
}

const customerList = [];

// function submitInformation() {
//     const inforCustomer = [
//         new customerAccount (
//             document.getElementById('username').value,
//             document.getElementById('email').value,
//             document.getElementById('number').value,
//             document.getElementById('locationOfElevatorSystem').value,
//         )
//     ]
//     customerList.push(inforCustomer);
//     console.log(customerList);
// }



// document.getElementById('register-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const formData = new FormData(this);
    

//     const newCustomer = new customerAccount(
//         formData.get('username'),
//         formData.get('email'),
//         formData.get('phonenumber'),
//         formData.get('elevatorLocation')
//     );

//     customerList.push(newCustomer);

//     console.log(customerList);

//     this.reset();
// });


document.getElementById('register-form').addEventListener('submit', function(event){

    event.preventDefault();
    
    const formData = new FormData(this);

    const customerInfortion = new customerAccount (
        formData.get('username'),
        formData.get('email'),
        formData.get('phonenumber'),
        formData.get('elevatorLocation')
    );

    customerList.push(customerInfortion);

    console.log(customerList);
    

    this.reset();
    
})
