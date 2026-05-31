window.showResultPopup = function(winDiamonds, totalDiamonds) {
    // সরাসরি body-তে যুক্ত করুন
    const container = document.createElement("div");
    container.id = "result-popup";
    // z-index আরও বাড়ানো হলো
    container.style.cssText = `
        position: fixed; 
        top: 0; left: 0; width: 100vw; height: 100vh; 
        background: rgba(0, 0, 0, 0.9); 
        display: flex; flex-direction: column; 
        justify-content: center; align-items: center; 
        z-index: 99999999; color: white;
    `;
    
    container.innerHTML = `
        <h1 style="font-size: 24px;">Game Over!</h1>
        <p style="font-size: 18px;">Won Diamonds: ${winDiamonds}</p>
        <p style="font-size: 18px;">Total Balance: ${totalDiamonds}</p>
        <button id="replay-btn" style="padding: 15px 30px; font-size: 20px; border-radius: 10px; background: #00CC83; color: white; border: none;">Replay</button>
    `;
    
    document.body.appendChild(container);

    document.getElementById("replay-btn").onclick = function() { 
        window.location.reload(); 
    };
};
