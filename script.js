document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "System Breach Detected...",
        "Initiating bypass protocols...",
        "Accessing external server...",
        "Decrypting firewall...",
        "Establishing remote connection...",
        "Bypassing authentication...",
        "Injecting malicious packets...",
        "Retrieving confidential data...",
        "Remote access granted!",
        "WARNING: Unauthorized access detected!"
    ];

    const outputDiv = document.querySelector('.output');
    let index = 0;

    function typeMessage(text, callback) {
        let p = document.createElement('p');
        outputDiv.appendChild(p);
        let i = 0;

        function type() {
            if (i < text.length) {
                p.textContent += text[i];
                i++;
                setTimeout(type, 50);
            } else {
                if (callback) setTimeout(callback, 1000);
            }
        }
        type();
    }

    function simulateHack() {
        if (index < messages.length) {
            typeMessage(messages[index], function() {
                index++;
                simulateHack();
            });
        }
    }

    simulateHack();
});
