// Your code goes here
  document.addEventListener("DOMContentLoaded", () => {
    console.log("After DOM loaded");
    console.log(document.querySelector('p'))
    const paragraph = document.querySelector('p');
  paragraph.textContent = "This is really cool!";
  });
  
  console.log("Before DOM loads");
  console.log(document.querySelector('p'))