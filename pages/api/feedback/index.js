function handler(request, response) {
    console.log("handler", {
        "request Body": request.body,
        method: request.method,
    });
    if (request.method === "POST") {
        if (
            request.body.email === undefined ||
            request.body.feedback === undefined ||
            request.body.email === "" ||
            request.body.feedback === ""
        ) {
            response
                .status(500)
                .json({ message: "email or feedback value is missing" });
        }

        response.status(200).send({ message: "Feedback Received" });
    }

    if (request.method === "GET") {
        response.status(200).send({ message: "Get Request Received" });
    }
}

export default handler;
