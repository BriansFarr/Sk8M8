const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

// Get All
router.get('/', async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

// Get One
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await LogEntry.findOne({
      _id: id,
    });
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

// Create One
router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

// Update One
router.get('/:id', async (req, res, next) => {
  try {
    const item = await LogEntry.findOneAndUpdate({
    });
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

// Delete One
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await LogEntry.deleteOne({
      _id: id,
    });
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
