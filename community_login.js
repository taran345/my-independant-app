function backToGalleryScreen(){
    window.location="gallery.html";
}

function adduser(){
    login_user= document.getElementById("username_input").value;
    localStorage.setItem("user_name" , login_user);
    window.location= "community.html";
}