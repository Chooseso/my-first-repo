const update_card = document.getElementById("up_card");

update_card.addEventListener("click", function () {
    if (!validateInputs()) {
        return;
    }
    else {
        update_name();
        update_prof_img();
        update_bio();
        change_bg_color();
    }
});


function validateInputs() {
    let update_profile_img = document.getElementById("update_img_url").value.trim();
    let update_name = document.getElementById("update_name").value.trim();
    let update_bio = document.getElementById("update_bio").value.trim();
    let change_bg_color = document.getElementById("Change_bg_color").value.trim();

    if (update_name === "") {
        alert("Please Enter Updated Name!");
        return false;
    }
    if (update_bio === "") {
        alert("Please Enter Updated Bio!");
        return false;
    }
    if (update_profile_img === "") {
        alert("Please Enter Image URL!");
        return false;
    }
    if (change_bg_color === "") {
        alert("Please Enter Background Color!");
        return false;
    }

    return true;
}


function update_prof_img() {
    let profile_img = document.getElementById("profile_pic");
    let update_profile_img = document.getElementById("update_img_url").value.trim();
    profile_img.setAttribute("src", update_profile_img);
}


function update_name() {
    let name = document.getElementById("name");
    let update_name = document.getElementById("update_name").value.trim();
    name.innerText = update_name;
}


function update_bio() {
    let bio = document.getElementById("bio");
    let update_bio = document.getElementById("update_bio").value.trim();
    bio.innerText = update_bio;
}


function change_bg_color() {
    let bg_color = document.getElementById("profile_section");
    let change_bg_color = document.getElementById("Change_bg_color").value;
    bg_color.style.backgroundColor = change_bg_color;
}







