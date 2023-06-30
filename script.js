const generatePassword = () => {
    const length = 25; // You can adjust the password length here
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
  
  const displayPassword = () => {
    const passwordElement = document.getElementById("password");
    passwordElement.innerHTML = generatePassword();
  
    // Animation effect
    passwordElement.classList.add("fade-in");
    setTimeout(() => {
      passwordElement.classList.remove("fade-in");
    }, 500);
  };
  
  const generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", displayPassword);
  