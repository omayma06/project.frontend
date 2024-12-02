const Qualification = require('../models/Qualification');

const addQualification = async (req, res) => {
  try {
    const userId = req.user.userId;
    const qualificationData = req.body;
    const qualification = new Qualification({ ...qualificationData, userId });
    await qualification.save();
    res.status(201).json({ success: true, message: 'Qualification added successfully', qualification });
  } catch (error) {
    console.error('Error adding qualification:', error);
    res.status(500).json({ success: false, message: 'Failed to add qualification' });
  }
};

const updateQualification = async (req, res) => {
  try {
    const userId = req.user.userId;
    const qualificationId = req.params.id;
    const updateData = req.body;
    const updatedQualification = await Qualification.findOneAndUpdate({ userId, _id: qualificationId }, updateData, { new: true });
    if (!updatedQualification) {
      return res.status(404).json({ success: false, message: 'Qualification not found' });
    }
    res.json({ success: true, message: 'Qualification updated successfully', qualification: updatedQualification });
  } catch (error) {
    console.error('Error updating qualification:', error);
    res.status(500).json({ success: false, message: 'Failed to update qualification' });
  }
};

const deleteQualification = async (req, res) => {
  try {
    const userId = req.user.userId;
    const qualificationId = req.params.id;
    const deletedQualification = await Qualification.findOneAndDelete({ userId, _id: qualificationId });
    if (!deletedQualification) {
      return res.status(404).json({ success: false, message: 'Qualification not found' });
    }
    res.json({ success: true, message: 'Qualification deleted successfully', qualification: deletedQualification });
  } catch (error) {
    console.error('Error deleting qualification:', error);
    res.status(500).json({ success: false, message: 'Failed to delete qualification' });
  }
};

module.exports = { addQualification, updateQualification, deleteQualification };
