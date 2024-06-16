# Car Leasing Calculator

## Approach

### Understanding the Problem
- Initially, I thoroughly reviewed the requirements to grasp the functionality needed for the calculator.

### Designing the UI
- The user interface was designed to be intuitive, featuring a form for selecting car type, entering car value, choosing lease period, and specifying down payment percentage. The design ensures ease of use across devices, with responsive adjustments for mobile screens.

### Implementing Functionality
- JavaScript functions were developed to handle user inputs, validate data, and calculate leasing details. These functions include:
  - `calculateLeasingDetails`: Computes the total leasing cost, down payment, monthly installment, and interest rate based on the inputs.
  - `updateLeasingDetails`: Updates the interest rate displayed based on the car type selection.
  - `syncCarValue` and `syncCarValueSlider`: Syncs the car value between the slider and input field.
  - `syncDownPayment` and `syncDownPaymentSlider`: Syncs the down payment between the slider and input field.

### Styling
- CSS was used to style the calculator, ensuring a clean and modern appearance. The styling is responsive, adapting to different screen sizes to enhance usability.
