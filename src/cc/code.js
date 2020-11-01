export function is_auth() {
    //var token = Cookies.get("at");
    var token = "4f12f45301332e4a990e4fd127f12b07bc28aebf";
    if (token) {
        const response = fetch("http://localhost:8000/validate/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: token,
            }),
        }).then(
            response => response.json()
        );
        console.log(response.detail);
        return response['detail'];
    } else {
        return false;
    }
}