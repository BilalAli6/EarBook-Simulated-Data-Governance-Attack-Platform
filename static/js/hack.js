let typingSound = new Audio("/static/sounds/typing.mp3");
let successSound = new Audio("/static/sounds/success.mp3");

function playTyping(){ typingSound.currentTime=0; typingSound.play(); }
function playSuccess(){ successSound.play(); }

function typeLine(text, delay){
    return new Promise(resolve=>{
        setTimeout(()=>{
            let term=document.getElementById("terminal");
            term.innerHTML += text + "<br>";
            term.scrollTop = term.scrollHeight;
            playTyping();
            resolve();
        }, delay);
    });
}

async function startHack(){
    document.getElementById("terminal").innerHTML = "";
    await typeLine("[+] Scanning EarBook endpoints...",500);
    await typeLine("[+] Found: /api/users",800);
    await typeLine("[+] Found: /api/posts",1000);
    await typeLine("[✔] Hack Complete!",1200);
    playSuccess();
    setTimeout(()=>{ window.location.href="/hacker_dashboard"; },2000);
}