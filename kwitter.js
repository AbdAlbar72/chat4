function handleLogin() {
    const username = document.getElementById("username").value;

    if (username.trim() !== "") {
        localStorage.setItem("username", username);

        window.location.href = "kwitter_room.html";
    } else {
        alert("Please enter a valid username");
    }
}
