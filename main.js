const btn = document.querySelector("button");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const formMessage = document.querySelector("#formMessage");
username.value = localStorage.getItem("username") || "";
password.value = localStorage.getItem("password") || "";

btn.addEventListener("click" , (e) => {
   e.preventDefault();
   formMessage.classList.remove("error", "success");
   if(username.value === "" || password.value === "") {
    formMessage.textContent = 'فیلدهای خالی را پر کنید'
    formMessage.classList.add("error")
   } else {
    formMessage.textContent = 'داده ها با موفقیت ارسال شد';
    formMessage.classList.add("success")
    console.log(`یوزر : ${username.value}`);    
    console.log(`پسورد : ${password.value}`);
    
    username.value = "";
    password.value = "";    
    
    
   }
   localStorage.setItem("username" , username.value);
   localStorage.setItem('password' , password.value);

    
})
   
