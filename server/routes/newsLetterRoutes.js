const express = require('express');
const router = express.Router();
const {
  getNewsletters,
  getNewsletterById,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter
} = require('../controllers/newsLetterController');


router.get('/', getNewsletters);  
router.post('/', createNewsletter);  
router.put('/:id', updateNewsletter);  
router.delete('/:id', deleteNewsletter);  

module.exports = router;