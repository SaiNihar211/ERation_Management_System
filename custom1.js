// Function to initialize the page
function initializeSettingsPage() {
  // Load saved settings
  loadSavedSettings();

  // Event listener for form submission
  const settingsForm = document.querySelector('form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', function(event) {
      event.preventDefault();
      saveSettings();
    });
  }
}

// Function to load saved settings (dummy implementation)
function loadSavedSettings() {
  // Simulated data - replace with actual data retrieval logic
  const savedSettings = {
    riceWeight: 30,
    wheatWeight: 50,
    sugarWeight: 40,
    email: 'example@example.com',
    sms: '+1234567890',
    emailNotifications: true,
    smsNotifications: false,
    autoUpdateEnabled: true,
    updateFrequency: 'Daily'
  };

  // Populate form fields with saved settings
  document.querySelector('#riceWeight').value = savedSettings.riceWeight;
  document.querySelector('#wheatWeight').value = savedSettings.wheatWeight;
  document.querySelector('#sugarWeight').value = savedSettings.sugarWeight;
  document.querySelector('#emailAddress').value = savedSettings.email;
  document.querySelector('#phoneNumber').value = savedSettings.sms;
  document.querySelector('#emailNotifications').checked = savedSettings.emailNotifications;
  document.querySelector('#smsNotifications').checked = savedSettings.smsNotifications;
  document.querySelector('#autoUpdateEnabled').checked = savedSettings.autoUpdateEnabled;
  document.querySelector('#updateFrequency').value = savedSettings.updateFrequency;
}

// Function to save settings
function saveSettings() {
  // Gather values from form
  const riceWeight = document.querySelector('#riceWeight').value;
  const wheatWeight = document.querySelector('#wheatWeight').value;
  const sugarWeight = document.querySelector('#sugarWeight').value;
  const email = document.querySelector('#emailAddress').value;
  const sms = document.querySelector('#phoneNumber').value;
  const emailNotifications = document.querySelector('#emailNotifications').checked;
  const smsNotifications = document.querySelector('#smsNotifications').checked;
  const autoUpdateEnabled = document.querySelector('#autoUpdateEnabled').checked;
  const updateFrequency = document.querySelector('#updateFrequency').value;

  // Simulate saving settings - replace with actual save logic
  console.log('Settings saved', {
    riceWeight,
    wheatWeight,
    sugarWeight,
    email,
    sms,
    emailNotifications,
    smsNotifications,
    autoUpdateEnabled,
    updateFrequency
  });
}

// Initialize the settings page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeSettingsPage);
