
 function sendMail(){
    let parms = {
    name: document.getElementById('inputName').value,
    email: document.getElementById('inputEmail').value,
    message:document.getElementById("textArea").value,
    }
    emailjs.send('service_y8l1mx2','template_pbhw7zn',parms)
        .then(function(response){
            document.getElementById('inputName').value = '';
            document.getElementById('inputEmail').value = '';
            document.getElementById('textArea').value = '';
        })
        .catch(function(error) {
            console.log('FAILED...', error);
        });
        
    
 }   


function scrollToSection(sectionId){
    const section = document.getElementById('Projects')
    if(section){
        section.scrollIntoView({behavior: 'smooth'})
    }
}