const storage = require('node-persist');
const feedback = require('./data/customerData.json');
const staffMembers = require('./data/staffData.json');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require("uuid");
const express = require('express');
const cors = require('cors');
const { response } = require('express');

(async () => {

    // await storage.init({ dir: './data' });

    // for (let f of feedback) {
    //     let fuuid = uuidv4()
    //     let feedback = { feedbackId: fuuid, ...f }
    //     let feedbackStorageKey = `feedback-${fuuid}`
    //     await storage.setItem(feedbackStorageKey, feedback)
    // }


    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use(bodyParser.json());

    server.get('/feedback', async (request, response) => {
        let feedback = await storage.valuesWithKeyMatch(/feedback-/)
        response.json(feedback)
    }) // gets feedbacks


    server.get('/staff-members', async (request, response) => {
        let employees = await storage.valuesWithKeyMatch(/staffmember-/);
        response.json(employees);
    });// gets staff members

    server.post('/feedback', async (request, response) => {
        let addFeedback = { feedBackId: uuidv4(), time: new Date().toISOString.slice(0, 17), ...request.body }
        await storage.setItem(`feedback-${addFeedback.feedBackId}`, addFeedback)
        response.json(addFeedback)
    })// adds a feedback


    server.put('/feedback/view', async (request, response) => {
        let feedbackId = request.body.feedBackId
        let key = `feedback-${feedbackId}`
        let updatedFeedback = await storage.updateItem(key, request.body)
        response.json(updatedFeedback)
    }) // specific feedback



    // server.get('/feedback/view', async (request, response) => {
    //     let feedback = await storage.valuesWithKeyMatch(/feedback-/)
    //     response.json(feedback)
    // }) // gets specific feedback

    // server.post('/action-feedback', async (request, response) => {
    //     let feedback = await storage.getItem(`feedback-${request.body.feedBackId}`)
    //     if (feedback === undefined) {
    //         response.json({ status: 400, message: 'feedback ID not found' })
    //         return
    //     }
    //     let staffmember
    // })



    server.listen(4000, () => { console.log("server going at http://localhost:4000") })

})();


