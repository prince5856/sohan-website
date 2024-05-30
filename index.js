document.addEventListener('DOMContentLoaded', () => {
    const modify = document.querySelectorAll('.modify');
    const modifyArray = Array.from(modify);
  
    // Restore the state from localStorage
    modifyArray.forEach((element, index) => {
      const savedState = localStorage.getItem(`cell-${index}`);
      if (savedState) {
        element.innerText = savedState === 'Taken' ? 'Taken' : 'Scheduled';
        element.style.backgroundColor = savedState === 'Taken' ? 'green' : '';
      }
    });
  
    // Add event listener to each cell
    modifyArray.forEach((element, index) => {
      element.addEventListener('click', () => {
        element.innerText = "Taken";
        element.style.backgroundColor = "green";
        // Save the state to localStorage
        localStorage.setItem(`cell-${index}`, "Taken");
      });
    });
  });
  