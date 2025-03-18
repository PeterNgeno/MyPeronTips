function sendWhatsApp() {
    let service = document.getElementById("service").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value || "Not Provided";

    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
    }

    let message = `Hello, I need the following service:\n\n` +
                  `*Service:* ${service}\n` +
                  `*Name:* ${name}\n` +
                  `*Email:* ${email}\n` +
                  `*Phone:* ${phone}\n` +
                  `*LinkedIn:* ${linkedin}\n\n` +
                  `Please guide me on the next steps.`;

    let whatsappURL = `https://wa.me/254715719644?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}
