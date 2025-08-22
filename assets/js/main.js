/*
 * Main JavaScript for Zheen Heart Department website
 *
 * This script adds a simple handler to the appointment form on the contact
 * page so that submitting the form does not reload the page.  Instead, it
 * displays a thank‑you alert and clears the fields.  Additional interactive
 * behaviours (e.g. future API integration) can be added here without
 * modifying the markup.
 */

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#appointment-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Read form values (not sent anywhere yet)
      var name = form.querySelector('#name').value;
      // Show a simple confirmation message
      alert('Thank you, ' + (name || 'patient') + '. Your appointment request has been sent. We will contact you shortly.');
      // Clear the form fields
      form.reset();
    });
  }
});