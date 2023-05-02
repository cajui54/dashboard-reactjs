import {useState, useEffect} from 'react'

const useFetch = () => {
    const url = 'http://localhost:3000/users'

    const [users, setUser] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
   
    const getPost = async (datas) => {
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datas)
        }

        const response = await fetch(url, requestOptions);

        setCallFetch(response);
    }
    useEffect(() => {
        const requestFetch = async () => {
            const response = await fetch(url);

            const dataJson = await response.json();
            
            setUser(dataJson);
        }
        requestFetch();
    },[url, callFetch]);
    
    return {getPost, users};
}

export default useFetch
