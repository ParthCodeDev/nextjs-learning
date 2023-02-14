function feedHandler(request, response) {
    if (request.method === "GET") {
        const queryParams = request.query;
        if (queryParams.feedId) {
            response.status(200).json({'message': 'Found the Feed'});
        }
    }
}

export default feedHandler;
