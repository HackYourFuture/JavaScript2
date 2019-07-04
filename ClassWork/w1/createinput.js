{
  const createForm = () => {
    const form = document.createElement("form");            // CREATE a form element
              
    const firstName = document.createElement("input");     // CREATE an HTML imput element for First Name
    form.appendChild(firstName);                          // ADD input element to form
    firstName.placeholder = "First Name";  

    const lastName = document.createElement("input");     // CREATE an HTML imput element for Last Name
    lastName.setAttribute('placeholder',"Last Name");
    form.appendChild(lastName);                          // ADD input element to form
   
   
    const myButton = document.createElement("button");         // CREATE an HTML button element
    myButton.innerText = "Click Me!";                         // ADD button element to form
    myButton.setAttribute('id','button');                         
    myButton.setAttribute('type','button');
    form.appendChild(myButton);   
    
    const mainElement = document.getElementById("main")    // FIND main element
    mainElement.appendChild(form);                        // ADD form to main element
    console.log(form);
  };

  const formSubmittedListener = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      console.log('clicked');
    const inputs = [...document.getElementsByTagName('input')];
    console.log(inputs);
    });
  };

  const main = () => {
    createForm();
    formSubmittedListener();
  };

window.onload = () => main();
}