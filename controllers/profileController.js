const Profile = require('../models/Profile');

const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.json({ success: true, profile });
  } catch (error) {
    console.error('Error getting profile:', error);
    res.status(500).json({ success: false, message: 'Failed to get profile' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Utiliser l'ID de l'utilisateur à partir du jeton JWT
    const updateData = req.body;
    const updatedProfile = await Profile.findOneAndUpdate({ userId }, updateData, { new: true });
    if (!updatedProfile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.json({ success: true, message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
};

module.exports = { getProfile, updateProfile };
