export default async function handler(req, res) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key": process.env.MONGODB_DATA_API_KEY,
        },
    };
    const fetchBody = {
        dataSource: process.env.MONGODB_DATA_SOURCE,
        database: "jokeaday",
        collection: "jokes",
    };
    const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;

    try {
        switch (req.method) {
            case "GET":
                const readData = await fetch(`${baseUrl}/find`, {
                    ...fetchOptions,
                    body: JSON.stringify({
                        ...fetchBody,
                        sort: { postedAt: -1 },
                    }),
                });
                const readDataJson = await readData.json();
                res.status(200).json(readDataJson.documents);
                break;
            case "POST":
                const jokeObj = req.body;

                // Check to see if we added this joke already.
                const existingJoke = await fetch(`${baseUrl}/findOne`, {
                    ...fetchOptions,
                    body: JSON.stringify({
                        ...fetchBody,
                        filter: { id: jokeObj.id },
                    }),
                });

                const existingJokeJson = await existingJoke.json();

                if (existingJokeJson.document) {
                    res.status(409).json({ message: "Joke already exists" });
                } else {
                    const insertJoke = await fetch(`${baseUrl}/insertOne`, {
                        ...fetchOptions,
                        body: JSON.stringify({
                            ...fetchBody,
                            document: jokeObj,
                        }),
                    });
                    const insertJokeJson = await insertJoke.json();
                    res.status(200).json(insertJokeJson);
                    break;

                }
            default:
                res.status(405).end();
                break;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
}
