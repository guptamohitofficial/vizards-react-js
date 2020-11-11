import { Cookies } from 'react-cookie';

export const cookies = new Cookies();

export function apiRequest(url, body = {}, type = "POST") {

    const requestOptions = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookies.get('token')}`,
        },
        body: JSON.stringify(body),
    };

    console.log('being fetched', url, requestOptions);


    fetch(`http://localhost:8000${url}`, requestOptions)
        .then(response => response.json())
        //.then(response => setState({ data: response }));
}