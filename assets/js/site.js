// write cool JS hwere!!




function toggleTheme(value) {

    // find alle link tag
    let sheets = document.querySelectorAll('link');

    // loop igennem dem med foreach
    sheets.forEach(myLink => {
   
          // er det et stylesheet link vi har fat i?
    if (myLink.rel.includes("stylesheet")) {
      
     // byg relativ sti til stylesheet
        myLink.href = 'assets/css/'+value;
    }
    
  });
    
}