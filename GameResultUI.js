// GameResultUI.js - কাস্টম রেজাল্ট পপ-আপ
(function() {
    window.showResultPopup = function(winDiamonds, totalDiamonds) {
        // যদি পপ-আপ আগে থেকে থাকে, তবে সেটি সরিয়ে ফেলা
        const existing = document.getElementById("result-popup");
        if (existing) existing.remove();

        // পপ-আপ কন্টেইনার তৈরি
        const container = document.createElement("div");
        container.id = "result-popup";
        container.style.position = "absolute";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.zIndex = "9999";
        container.style.color = "white";
        container.style.fontFamily = "Arial, sans-serif";

        // কন্টেন্ট
        container.innerHTML = `
            <h1 style="margin-bottom: 20px;">Game Over!</h1>
            <p style="font-size: 20px;">Won Diamonds: ${winDiamonds}</p>
            <p style="font-size: 20px;">Total Balance: ${totalDiamonds}</p>
            <button id="replay-btn" style="padding: 10px 20px; font-size: 18px; cursor: pointer; border-radius: 5px; border: none; background: #00CC83; color: white; margin-top: 20px;">Replay</button>
        `;

        document.body.appendChild(container);

        // রিপ্লে বাটন লজিক
        document.getElementById("replay-btn").addEventListener("click", () => {
            container.remove();
            // গেম রিস্টার্ট করার লজিক (গেমের ইভেন্ট অনুযায়ী)
            window.location.reload(); 
        });
    };
})();
