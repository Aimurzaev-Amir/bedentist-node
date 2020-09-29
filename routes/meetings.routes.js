const { Router } = require("express");
const Meetings = require("../models/Meetings");
const router = Router();

// Creating main routes for Articles Model.

// /api/meetings/ (get all data about all meetings)
router.get("/", async (req, res) => {
  try {
    const allMeetings = await Meetings.find();
    res.json(allMeetings);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/meetings/:id (get meeting data by meeting id)
router.get("/getMeeting/:docName/:date/:month", async (req, res) => {
  try {
    console.log(req.params.id);
    const Meeting = await Meetings.find({
      docName: req.params.docName,
      date: req.params.date,
      month: req.params.month,
    });
    res.json(Meeting);
  } catch (e) {
    res.json([]);
  }
});

// /api/meetings/create
router.post("/create", async (req, res) => {
  try {
    const Meeting = new Meetings(req.body);
    await Meeting.save();

    res.status(201).json({ Meeting });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/meetings/:id (update data for current meeting(by id))
router.patch("/:id", async (req, res) => {
  try {
    const Meeting = await Meetings.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Meeting });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;
