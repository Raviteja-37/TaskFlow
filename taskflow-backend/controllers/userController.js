const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { name, avatar } = req.body;

  // Optional: validate avatar values
  const allowedAvatars = [
    'male1',
    'male2',
    'male3',
    'male4',
    'female1',
    'female2',
  ];

  if (avatar && !allowedAvatars.includes(avatar)) {
    return res.status(400).json({ message: 'Invalid avatar selection' });
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name, avatar },
    { new: true },
  ).select('-password');

  res.json({
    message: 'Profile updated successfully',
    user,
  });
};
