let a = document.getElementById('loginForm');
a.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === "" || password === "") {
        alert("Enter the values");
    } else {
        if (email === '2211CS010324@mallareddyuniversity.ac.in' && password === '123') {
            window.location.href = 'https://www.youtube.com';
        } else {
            window.location.reload();
        }
    }
});
