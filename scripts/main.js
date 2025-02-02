// Open Enquiry Form
function openEnquiryForm() {
  document.getElementById('enquiryForm').style.display = 'block';
}

// Close Enquiry Form
function closeEnquiryForm() {
  document.getElementById('enquiryForm').style.display = 'none';
}

// Submit Enquiry Form
function submitForm(event) {
  event.preventDefault();
  alert('Thank you for your enquiry! We will contact you soon.');
  closeEnquiryForm();
}
