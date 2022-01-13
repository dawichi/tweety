const getUser = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(
        JSON.stringify({
            name: 'David',
        }),
    )
}

export default getUser
