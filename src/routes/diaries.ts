import express from "express";
import * as diaryServices from '../services/diaryService'
import toNewDiaryEntry from "../utils";

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById((Number(req.params.id)))
    res.send(diary?.comment)
})

router.post('/', (req, res) => {

    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    } catch (e) {
        res.status(400).send(e)
    }
})

export default router