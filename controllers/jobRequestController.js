const JobRequest = require('../models/JobRequest');

const addJobRequest = async (req, res) => {
  try {
    const userId = req.user.userId;
    const jobRequestData = req.body;
    const jobRequest = new JobRequest({ ...jobRequestData, userId });
    await jobRequest.save();
    res.status(201).json({ success: true, message: 'Job request added successfully', jobRequest });
  } catch (error) {
    console.error('Error adding job request:', error);
    res.status(500).json({ success: false, message: 'Failed to add job request' });
  }
};

const updateJobRequest = async (req, res) => {
  try {
    const userId = req.user.userId;
    const requestId = req.params.id;
    const updateData = req.body;
    const updatedJobRequest = await JobRequest.findOneAndUpdate({ userId, _id: requestId }, updateData, { new: true });
    if (!updatedJobRequest) {
      return res.status(404).json({ success: false, message: 'Job request not found' });
    }
    res.json({ success: true, message: 'Job request updated successfully', jobRequest: updatedJobRequest });
  } catch (error) {
    console.error('Error updating job request:', error);
    res.status(500).json({ success: false, message: 'Failed to update job request' });
  }
};

const deleteJobRequest = async (req, res) => {
  try {
    const userId = req.user.userId;
    const requestId = req.params.id;
    const deletedJobRequest = await JobRequest.findOneAndDelete({ userId, _id: requestId });
    if (!deletedJobRequest) {
      return res.status(404).json({ success: false, message: 'Job request not found' });
    }
    res.json({ success: true, message: 'Job request deleted successfully', jobRequest: deletedJobRequest });
  } catch (error) {
    console.error('Error deleting job request:', error);
    res.status(500).json({ success: false, message: 'Failed to delete job request' });
  }
};

module.exports = { addJobRequest, updateJobRequest, deleteJobRequest };
