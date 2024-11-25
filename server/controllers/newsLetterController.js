const Newsletter = require('../models/newsLetterModel');


const getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();  
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching newsletters', error });
  }
};


const createNewsletter = async (req, res) => {
  const { title, author, description, image } = req.body;

  if (!title || !author || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newNewsletter = new Newsletter({
      title,
      author,
      description,
      image,
    });

    await newNewsletter.save();  
    res.status(201).json({ message: 'Newsletter created', newNewsletter });
  } catch (error) {
    res.status(500).json({ message: 'Error creating newsletter', error });
  }
};


const updateNewsletter = async (req, res) => {
  const { title, author, description, image } = req.body;

  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(
      req.params.id, 
      { title, author, description, image },
      { new: true }  
    );

    if (!updatedNewsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }

    res.status(200).json({ message: 'Newsletter updated', updatedNewsletter });
  } catch (error) {
    res.status(500).json({ message: 'Error updating newsletter', error });
  }
};


const deleteNewsletter = async (req, res) => {
  try {
    const deletedNewsletter = await Newsletter.findByIdAndDelete(req.params.id);
    if (!deletedNewsletter) {
      return res.status(404).json({ message: 'Newsletter not found' });
    }

    res.status(200).json({ message: 'Newsletter deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting newsletter', error });
  }
};

module.exports = {getNewsletters, createNewsletter, updateNewsletter, deleteNewsletter};