import * as tuitDao from "./tuits-dao.js"

const createTuit = async (req, res) => {
    const newTuit = req.body
    newTuit.likes = 0
    newTuit.dislikes = 0
    newTuit.replies = 0
    newTuit.retuits = 0
    newTuit.liked = false
    const insertedTuit = await tuitDao
        .createTuit(newTuit)
    res.json(insertedTuit)
}

const findTuits  = async (req, res) => {
    const tuits = await tuitDao.findTuits()
    res.json(tuits)
}

const updateTuit = async (req, res) => {
    const tid = req.params.tid
    const updates = req.body;
    const status = await tuitDao
        .updateTuit(tid, updates)
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tid = req.params.tid
    const status = await tuitDao
        .deleteTuit(tid)
    res.json(status)
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
