const timeline = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/51042900?v=4',
        username: 'dawichi',
        message:
            'Más recientemente, el crecimiento del diseño web ha ayudado a proliferar Lorem Ipsum a través de Internet como un marcador de posición para la colocación de sitios web y blogs y en algunos casos el contenido final (no dejes que sea usted!).',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/51042900?v=4',
        username: 'dawichi',
        message:
            'Más recientemente, el crecimiento del diseño web ha ayudado a proliferar Lorem Ipsum a través de Internet como un marcador de posición para la colocación de sitios web y blogs y en algunos casos el contenido final (no dejes que sea usted!).',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/51042900?v=4',
        username: 'dawichi',
        message:
            'Más recientemente, el crecimiento del diseño web ha ayudado a proliferar Lorem Ipsum a través de Internet como un marcador de posición para la colocación de sitios web y blogs y en algunos casos el contenido final (no dejes que sea usted!).',
    },
]

const getTimeline = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(timeline))
}

export default getTimeline
