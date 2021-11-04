$(document).ready(function() {
$("#regForm").validate({
    rules: {
    firstName : {
        required: true,
        minlength: 3
    },
    lastName: {
        required: true,
        minlength: 3,
    },
    email: {
        required: true,
        email: true
    },
    comments: {
        required: true,
    },
    phoneNumber: {
        required: true,
        number: true
    }
    },
    messages : {
    firstName: {
        required: "Please enter your First Name",
        minlength: "Name should be at least 3 characters"
    },
    lastName: {
        required: "Please enter your Last Name",
        minlength: "Name should be at least 3 characters"
    },
    email: {
        email: "The email should be in the format: abc@domain.tld"
    },
    comments: {
        required: "Write any note or quesions you have!"
    },
    phoneNumber: {
        required: "please enter your Phone Number",
        number: "Please enter your phone number as a numerical value"
    }
    }
});
});











// $('form[id="basic-form"]').validate({
//   rules: {
//     firstName: 'required',
//     lastName: 'required',

//     emailInfo: {
//       required: true,
//       email: true,
//     },
//     phoneNumber: {
//       required: true,
//       minlength: 11,
//     }
//   },
//   messages: {
//     firstName: 'This field is required',
//     lastName: 'This field is required',
//     emailInfo: 'Enter a valid email',
//     phoneNumber: {
//       minlength: 'Password must be at least 11 characters long'
//     }
//   },
//   submitHandler: function(form) {
//     form.submit();
//   }
// });