import { NextApiRequest, NextApiResponse } from 'next'


export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {ide: 1, name: "Lia"},
        {ide: 2, name: "Anna"},
        {ide: 3, name: "Mika"}
    ]
    return response.json(users)
}