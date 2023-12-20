document.getElementById('whatsappButton').addEventListener('click', function() {
    // Replace '1234567890' with your actual phone number, including the country code.
    var phoneNumber = '+254758235049';
    
    // Create a WhatsApp link.
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    
    // Open the WhatsApp link in a new tab.
    window.open(whatsappLink, '_blank');
});
