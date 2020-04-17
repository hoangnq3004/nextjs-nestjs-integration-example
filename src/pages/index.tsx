import {useState, useEffect} from "react";

function useRandomNumber() {
    const [number, setNumber] = useState<number>();

    useEffect(
        () => {
            fetch("/api/randomNumber", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    //     // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "Title": "a"
                })
            })
                .then(response => response.text())
                .then(text => setNumber(+text));
        },
        []
    );

    return number;
}

const Home = () => {
    const number = useRandomNumber();
    return (
        <p>
            Random Number: {number}
        </p>
    )
};

export default Home
