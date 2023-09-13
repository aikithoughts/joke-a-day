export async function getJoke() {
    const fetchOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json", // Specify the Accept header
            "Content-Type": "application/json",
        },
    }

    try {
        const readJoke = await fetch('https://icanhazdadjoke.com/', {
            ...fetchOptions
          }
        );
        const readJokeJson = await readJoke.json();
        console.log("readJokeJson", readJokeJson);
        return readJokeJson;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}