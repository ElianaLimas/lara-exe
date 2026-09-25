const screens = document.querySelectorAll(".screen");
const player = document.getElementById("player");
const gameText = document.getElementById("game-text");

let bedroomExplorationComplete = false;

const sprites = {
    normal: "assets/characters/player.png",
    sad: "assets/characters/player_sad.png",
    affectionate: "assets/characters/player_affectionate.png",
    nervous: "assets/characters/player_nervous.png"
};

const dialogue = [
    {
        emotion: "normal",
        text: "Ugh... my head hurts."
    },
    {
        emotion: "normal",
        text: "I've been staring at this student council project for hours."
    },
    {
        emotion: "normal",
        text: "Why did I think I could finish all of this in one night?"
    },
    {
        emotion: "normal",
        text: "...Okay."
    },
    {
        emotion: "normal",
        text: "One last thing, then I'm sleeping."
    },
    {
        emotion: "normal",
        text: "Actually... there is something else I wanted to show you."
    },
    {
        emotion: "normal",
        text: "It's something I've been thinking about for a while."
    },
    {
        emotion: "sad",
        text: "And I think it all started with something very simple."
    },
    {
        emotion: "normal",
        text: "The first time we talked."
    },
    {
        emotion: "normal",
        text: "August 23, 2026."
    },
    {
        emotion: "normal",
        text: "I didn't know then how much that date would end up meaning to me."
    }
];

let dialogueIndex = 0;

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

function changeSprite(emotion) {
    player.src = sprites[emotion];
}

function showDialogue() {
    const scene = dialogue[dialogueIndex];

    changeSprite(scene.emotion);
    gameText.textContent = scene.text;

    const indicator = document.querySelector(".continue-indicator");

    if (dialogueIndex === 4 && !bedroomExplorationComplete) {
        indicator.textContent = "EXPLORE THE ROOM";
        indicator.style.display = "none";
    } else {
        indicator.textContent = "▼";
        indicator.style.display = "block";
    }
}

function nextDialogue() {

    // Stop the story until all four bedroom objects are explored
    if (dialogueIndex === 4 && !bedroomExplorationComplete) {

        objectMessage.textContent =
            "There's still something left to look at.";

        objectMessage.classList.add("visible");

        setTimeout(() => {
            objectMessage.classList.remove("visible");
        }, 2500);

        return;
    }

    if (dialogueIndex < dialogue.length - 1) {

        dialogueIndex++;
        showDialogue();

    } else {

        showScreen("instagram-screen");

    }
}



function previousDialogue() {
    if (dialogueIndex > 0) {
        dialogueIndex--;
        showDialogue();
    }
}



/* =========================
   GAME CONTROLS
========================= */

document.getElementById("interact-button").addEventListener("click", () => {
    nextDialogue();
});

document.getElementById("right-button").addEventListener("click", () => {
    nextDialogue();
});

document.getElementById("left-button").addEventListener("click", () => {
    previousDialogue();
});


/* =========================
   INSTAGRAM SCENE
========================= */

document.getElementById("instagram-button").addEventListener("click", () => {
    showScreen("timeline-screen");
});

const timelineMoments = [
    {
        date: "AUGUST 23, 2026",
        text: "The first time we talked."
    },
    {
        date: "AUGUST 29, 2026",
        text: "I finally admitted that I liked you."
    },
    {
        date: "SEPTEMBER 1, 2026",
        text: "And somehow... your feelings became deeper too."
    },
    {
        date: "SOMEWHERE ALONG THE WAY",
        text: "Casual. Exclusive. Friends.\nWhatever we called it...\n\nI just knew I wanted you in my life."
    }
];

let timelineIndex = 0;

const timelineDate =
    document.getElementById("timeline-date");

const timelineText =
    document.getElementById("timeline-text");

const timelineCard =
    document.querySelector(".timeline-card");

const timelineButton =
    document.getElementById("timeline-button");


function showTimelineMoment() {

    const moment =
        timelineMoments[timelineIndex];

    timelineDate.textContent =
        moment.date;

    timelineText.innerHTML =
        moment.text.replace(/\n/g, "<br>");
}


timelineButton.addEventListener("click", () => {

    if (timelineIndex < timelineMoments.length - 1) {

        timelineCard.classList.add("fade-out");

        setTimeout(() => {

            timelineIndex++;

            showTimelineMoment();

            timelineCard.classList.remove("fade-out");

        }, 350);

    } else {

        reactionIndex = 0;

        showScreen("lara-reaction-screen");

        showMemory();
    }

});

const memories = [

    {
        image: "assets/memories/memory01.jpeg",
        caption:
            "I didn't know it then, but this was the beginning of something."
    },

    {
        image: "assets/memories/memory02.jpeg",
        caption:
            "A conversation became another conversation... and then another."
    },

    {
        image: "assets/memories/memory03.jpeg",
        caption:
            "Somewhere along the way, I started wanting to be someone you could lean on."
    },

    {
        image: "assets/memories/memory04.jpeg",
        caption:
            "I wanted to know the little things, too. The stories that made you you."
    },

    {
        image: "assets/memories/memory05.jpeg",
        caption:
            "And eventually, the way we talked started feeling a little more like us."
    },

    {
        image: "assets/memories/memory06.jpeg",
        caption:
            "There were soft moments hidden between all the random conversations."
    },

    {
        image: "assets/memories/memory07.jpeg",
        caption:
            "And, of course... the bullying. A very important part of our relationship."
    },

    {
        image: "assets/memories/memory08.jpeg",
        caption:
            "You trusted me with parts of yourself that mattered."
    },

    {
        image: "assets/memories/memory09.jpeg",
        caption:
            "And I found myself writing things I didn't know how to say out loud."
    },

    {
        image: "assets/memories/memory10.jpeg",
        caption:
            "Because somewhere between all our conversations, I realized I didn't want this to be just a memory."
    }

];

let memoryIndex = 0;

const memoryImage =
    document.getElementById("memory-image");

const memoryNumber =
    document.getElementById("memory-number");

const memoryCaption =
    document.getElementById("memory-caption-text");

const memoryContainer =
    document.querySelector(".memory-image-container");

const memoryNext =
    document.getElementById("memory-next");


function showMemory() {

    const memory = memories[memoryIndex];

    memoryImage.src = memory.image;

    memoryNumber.textContent =
        `MEMORY ${String(memoryIndex + 1).padStart(2, "0")}`;

    memoryCaption.textContent =
        memory.caption;
}


memoryNext.addEventListener("click", () => {

    if (memoryIndex < memories.length - 1) {

        memoryContainer.classList.add("fade-out");

        setTimeout(() => {

            memoryIndex++;

            showMemory();

            memoryContainer.classList.remove("fade-out");

        }, 350);

    } else {

        showScreen("relationship-screen");

    }

});

/* RELATIONSHIP SCENE */

const relationshipPlayer =
    document.getElementById("relationship-player");

const relationshipText =
    document.getElementById("relationship-text");

const relationshipOptions =
    document.getElementById("relationship-options");

const relationshipNext =
    document.getElementById("relationship-next");


let relationshipStep = 0;


const relationshipScenes = [

    {
        emotion: "affectionate",

        text:
            "Somewhere along the way... you became someone I really wanted to keep around.\n\nSo... what should I call you?"
    },

    {
        emotion: "affectionate",

        text:
            "I like the little things. The random chika. The teasing. The way we somehow always have something to talk about."
    },

    {
        emotion: "nervous",

        text:
            "And then there are the things that make me a little more nervous to admit."
    },

    {
        emotion: "nervous",

        text:
            "Like how much I actually like being able to call you..."
    }

];


function showRelationshipScene() {

    const scene =
        relationshipScenes[relationshipStep];

    relationshipPlayer.src =
        sprites[scene.emotion];

    relationshipText.innerHTML =
        scene.text.replace(/\n/g, "<br>");

    relationshipOptions.style.display =
        relationshipStep === 0 ? "flex" : "none";

    relationshipNext.style.display =
        relationshipStep === 0 ? "none" : "block";
}


document
    .querySelectorAll(".relationship-options button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const choice =
                button.dataset.choice;

            if (choice === "Lara") {

                relationshipText.textContent =
                    "Lara. Obviously. ♡";

            } else if (choice === "favorite") {

                relationshipText.textContent =
                    "My favorite person. That one feels more accurate.";

            } else {

                relationshipText.textContent =
                    "Baby. ♡ I really like being able to call you that.";

            }

            relationshipOptions.style.display =
                "none";

            relationshipNext.style.display =
                "block";

            relationshipPlayer.src =
                sprites.affectionate;

        });

    });


relationshipNext.addEventListener("click",()=>{
    if(relationshipStep<relationshipScenes.length-1){
        relationshipStep++;
        showRelationshipScene();
    } else {
        letterPage=0;
        showScreen("letter-screen");
        showLetterPage();
        changeMusic("assets/music/iris.mp3")

    }
});

/* =========================
   LETTER
========================= */

const questionButton = document.getElementById("question-button");

if (questionButton) {
    questionButton.addEventListener("click", () => {
        showScreen("final-screen");
        changeMusic("assets/music/ending.mp3")
    });
}

/* LETTER */

const letterPages = [

    // PAGE 1
    `
    <p class="letter-opening">
        To my favorite person to 'bully', annoy, tease,
        and somehow love more every day, Lara.
    </p>

    <p>
        Sabi ng iba sa'kin, workaholic ako.
    </p>

    <p>
        Totoo naman. It's 12:43 AM, September 24,
        at ayokong tumigil.
    </p>

    <p>
        Nababalisa man ang aking damdamin,
        hindi ako titigil.<br>
        Bumigay man ang aking mga kamay,
        hindi ako titigil.<br>
        Mahulog man ang aking ulo,
        hindi ako titigil.<br>
        Sabihin mo man sa'kin na ubod ng pagod
        ang hakbang ng bawat salita ko,
        hindi ako titigil.
    </p>

    <p>
        Walang duda sa aking puso't isipan na ako'y
        isang "workaholic"; duwag sa harapan ng pahinga,
        alipin ng takbo ng mundo.
    </p>

    <p>
        Subalit hindi ako baliw. Hindi ako mangmang.
    </p>

    <p>
        Ako'y taong nagmamahal lamang.
    </p>
    `,

    // PAGE 2
    `
    <p>
        One of my fondest memories with you happened
        in between a cup of coffee and a half-eaten donut.
        Kausap kita noon, and just like every other day
        na kinakausap kita, I was just there.
        Existing. Breathing.
    </p>

    <p>
        Sabi ng iba sa'kin, workaholic ako.
    </p>

    <p>
        But it is hard to be consumed by ambitions,
        when I am consumed by you.
    </p>

    <p>
        May chika ka ulit. Araw-araw nalang,
        naghahanap ka ng chika.
    </p>

    <p>
        Sa araw na 'yon, nagkwento ako sa'yo tungkol
        sa naranasan ko bilang taong nagmahal.
        I told you how much effort, reassurance,
        and time I poured into one person.
    </p>

    <p>
        "Hays mga people na inlove talaga,
        mga tanga talaga kayo"
    </p>

    <p>
        Napapatawa mo'ko, dahil ikaw na mismo
        ang nagsasabi;
    </p>

    <p>
        "But if you'll let me, I want to learn them
        with you. I want to grow with you, not because
        I think either of us needs fixing, but because
        I want to see where this takes us when we both
        choose to understand, communicate, and make an effort."
    </p>

    <p>
        Ahah, tanga. Gustong-gusto kong magWMWAHAHAHHAHAHSS
        dito kaso formal letter dapat 'to, ahem ahem.
    </p>
    `,

    // PAGE 3
    `
    <p>
        Ang sumpa ng pag-ibig ay hindi sakit.
        Hindi mo 'to malalaman sa panahong iiwanan
        o sasaktan ka.
    </p>

    <p>
        Ang sumpa ay sakripisyo.
    </p>

    <p>
        Lara, you know how I feel.
        It is time that I show it.
    </p>

    <p>
        Ito ang aking simpleng alay sa'yo—
        more than 5,000 lines of code, 14 hours,
        and a few words, embedded onto here,
        to show that you are breathtaking.
    </p>

    <p>
        Nabighani ako sa'yo. Kahanga-hanga ka.
        At sana, tuwing kumikinang-kinang ang buwan
        at bituin, mahahanap pa rin kita sa kawalan
        ng kalawakan.
    </p>

    <p>
        And as much as I want na ibuhos ngayon lahat
        ng aking nararamdaman, I want to tell you
        these things gradually.
    </p>

    <p>
        Good days, bad days, gusto kitang samahan.
        Gusto kitang makasama hangga't hindi pa huli.
    </p>
    `,

    // PAGE 4
    `
    <p>
        I honestly don't know why, or how.
        Unfortunately, love does not need any reason.
    </p>

    <p>
        Magtanong ka kung bakit, hindi ko alam.
        Pero alam ng bawat bahagi ng pagkatao ko
        na ika'y karapat-dapat mahalin.
    </p>

    <p class="letter-opening">
        Mahal kita, Lara.
    </p>

    <p>
        Maaari ba kitang tanungin?
    </p>

    <p>
    And if there is one thing I know for certain,
    it is that I want to be your girlfriend.
</p>

<p>
    Not because I think I have everything figured out,
    but because I want to be there for the things we
    have yet to figure out together.
</p>

<p>
    If love is a place, then I hope I can keep finding
    my way back to you.
    
    If it is a story, I hope we get to write more of it.
    
    And if it is simply a choice, then I choose you.
</p>

<p>
    So, Lara...
</p>
    `,

    // PAGE 5
    `
    <p>
        I just want you to know that I made all of this
        because you matter to me.
    </p>

    <p>
        I don't know exactly where this takes us.
        I just know that I want to find out with you.
    </p>

    <p class="letter-opening">
    Lara, may I be your girlfriend?
</p>

<p>
    I don't know what tomorrow looks like,
    or where all of this will take us.
    But I'd really like to find out.
</p>

<p>
    With you.
</p>

    <p>
        P.S. sobrang nakakahiya na i-drawing ka,
        'di ko alam kung accurate siya para sa'yo or not
        HUWUAHSHAHS
    </p>

    <p>
        PPS, miss na kitang tawaging baby huhu
    </p>

    <p>
        PPPS, hindi ako yun
    </p>

    <p>
        Sa'yong sa'yo,<br>
        Limas
    </p>
    `
];

let letterPage = 0;

const letterContent =
    document.getElementById("letter-page-content");

const letterPageNumber =
    document.getElementById("letter-page-number");

const letterPaper =
    document.querySelector(".letter-paper");

const letterNext =
    document.getElementById("letter-next");


 function showLetterPage() {

    letterContent.innerHTML =
        letterPages[letterPage];

    letterPageNumber.textContent =
        `PAGE ${letterPage + 1} / ${letterPages.length}`;

    letterContent.scrollTop = 0;

    const textNodes = [];

    const walker = document.createTreeWalker(
        letterContent,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while (node = walker.nextNode()) {
        if (node.textContent.trim() !== "") {
            textNodes.push({
                node: node,
                text: node.textContent
            });

            node.textContent = "";
        }
    }

    let nodeIndex = 0;
    let charIndex = 0;

    function typeNextCharacter() {

        if (nodeIndex >= textNodes.length) {
            return;
        }

        const current = textNodes[nodeIndex];

        if (charIndex < current.text.length) {

            current.node.textContent +=
                current.text.charAt(charIndex);

            charIndex++;

            letterContent.scrollTop =
                letterContent.scrollHeight;

            setTimeout(typeNextCharacter, 35);

        } else {

            nodeIndex++;
            charIndex = 0;

            setTimeout(typeNextCharacter, 40);
        }
    }

    typeNextCharacter();

    letterNext.textContent = "Continue ♡";
}

if (letterNext) {
    letterNext.addEventListener("click", () => {
        if (letterPage < letterPages.length - 1) {
            letterPaper.classList.add("fade-out");

            setTimeout(() => {
                letterPage++;
                showLetterPage();
                letterPaper.classList.remove("fade-out");
            }, 350);
        } else {
            showScreen("final-screen");
            changeMusic("assets/music/ending.mp3");
        }
    });
}
/* =========================
   FINAL QUESTION
========================= */

let yesConfirmationStep = 0;

const questionText =
    document.querySelector("#final-screen h1") ||
    document.querySelector("#final-screen h2");
const yesButton = document.getElementById("yes-button");
const momentButton = document.getElementById("moment-button");

const yesQuestions = [
    {
        question: "Are you sure?",
        button: "YES ♡"
    },
    {
        question: "Super duper sure?",
        button: "YES, I'M SURE ♡"
    },
    {
        question: "Super duper duper super realllyy sure?",
        button: "YES YES YES ♡"
    },
    {
        question: "Like... REALLY really sure?",
        button: "YESSS ♡"
    },
    {
        question: "No take-backsies?",
        button: "NO TAKE-BACKSIES ♡"
    },
    {
        question: "You are 100% absolutely positively sure?",
        button: "I'M 100% SURE ♡"
    },
    {
        question: "Okay but what if I ask you one more time?",
        button: "ASK ME AGAIN THEN ♡"
    },
    {
        question: "Lara... are you REALLY, REALLY, REALLY sure?",
        button: "YES. NOW LET ME IN. ♡"
    }
];

yesButton.addEventListener("click", () => {

    if (yesConfirmationStep < yesQuestions.length) {

        const step = yesQuestions[yesConfirmationStep];

        questionText.textContent = step.question;
        yesButton.textContent = step.button;

        yesConfirmationStep++;

        if (momentButton) {
            momentButton.style.display = "none";
        }

    } else {

        showScreen("success-screen");
        startConfetti();

        setTimeout(() => {
            startYayEnding();
        }, 2500);

    }

});


document.getElementById("moment-button").addEventListener("click", () => {

    const button = document.getElementById("moment-button");

    button.textContent = "Take all the time you need ♡";

    setTimeout(() => {
        button.textContent = "I'm still here. ♡";
    }, 2500);

});
/* =========================
   CONFETTI
========================= */

function startConfetti() {
    const container = document.querySelector(".confetti-container");

    if (!container) return;

    function createConfetti() {
        const piece = document.createElement("span");

        piece.classList.add("confetti");
        piece.textContent = Math.random() > 0.5 ? "♥" : "✦";

        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";

        container.appendChild(piece);

        // Remove it after it finishes falling
        setTimeout(() => {
            piece.remove();
        }, 5000);
    }

    // Start with a bunch immediately
    for (let i = 0; i < 70; i++) {
        createConfetti();
    }

    // Keep creating new pieces forever
    setInterval(() => {
        createConfetti();
    }, 120);
}

            function startYayEnding() {

                const overlay =
                    document.getElementById("yay-overlay");

                if (!overlay) return;

                overlay.classList.add("active");

                // Let the giant YAAAAAYYY take over the screen.
                setTimeout(() => {

                    overlay.classList.add("finished");

                }, 4500);

                // After "ay, napaos", reveal the actual ending.
                setTimeout(() => {

                    overlay.classList.add("final-fade");

                }, 6500);
            }

/* OPENING */

const openingResponse =
    document.getElementById("opening-response");

function enterGame() {
    openingResponse.textContent =
        "Good. I made something for you. ♡";

    setTimeout(() => {
        showScreen("game-screen");

        dialogueIndex = 0;
        showDialogue();

        const music = document.getElementById("bg-music");

        if (music) {
            music.src = "assets/music/opening.mp3";
            music.volume = 0.35;
            music.play().catch(error => {
                console.error("Opening music failed:", error);
            });
        }
    }, 1200);
}

function changeMusic(file, fadeTime = 800) {

    const music = document.getElementById("bg-music");

    if (!music) return;

    const targetVolume = 0.35;

    // Fade current song out
    let volume = music.volume;

    const fadeOut = setInterval(() => {

        volume -= 0.05;

        if (volume <= 0) {

            volume = 0;
            music.volume = 0;

            clearInterval(fadeOut);

            // Switch song
            music.src = file;
            music.load();

            // Start new song
            music.play().then(() => {

                // Fade new song in
                let newVolume = 0;

                const fadeIn = setInterval(() => {

                    newVolume += 0.05;

                    if (newVolume >= targetVolume) {

                        newVolume = targetVolume;
                        clearInterval(fadeIn);

                    }

                    music.volume = newVolume;

                }, fadeTime / 7);

            }).catch(error => {

                console.error("Music failed to play:", error);

            });

        }

        music.volume = volume;

    }, fadeTime / 7);
}

document.getElementById("lara-yes").addEventListener("click", () => {
    enterGame();
});

document.getElementById("lara-obviously").addEventListener("click", () => {
    openingResponse.textContent =
        "Right. Sorry. Continue. ♡";

    setTimeout(() => {
        enterGame();
    }, 1000);
});

/* BEDROOM OBJECTS */

const objectMessage =
    document.getElementById("object-message");

let objectsFound = new Set();

function checkBedroomCompletion() {

    if (objectsFound.size === 5 && !bedroomExplorationComplete) {

        bedroomExplorationComplete = true;

        objectMessage.textContent =
            "ROOM EXPLORED - 5/5 memories found.";

        objectMessage.classList.add("visible");

        setTimeout(() => {

            objectMessage.classList.remove("visible");

            dialogueIndex++;

            showDialogue();

        }, 1800);
    }
}

document.getElementById("music-player-object").addEventListener("click", () => {

    inspectObject(
        "music-player-object",
        "ELIANA'S VERY NORMAL PLAYLIST ♫  Paninindigan Kita • Iris • [REDACTED]"
    );

});

function inspectObject(id, message) {

    const object = document.getElementById(id);

    if (!object || !objectMessage) return;

    objectMessage.textContent = message;
    objectMessage.classList.add("visible");

    objectsFound.add(id);

    object.classList.add("found");

    checkBedroomCompletion();

    setTimeout(() => {
        objectMessage.classList.remove("visible");
    }, 10000);
}


document.getElementById("computer-object").addEventListener("click", () => {

    inspectObject(
        "computer-object",
        "PROJECTS: 47. DEADLINES: 13. SLEEP: ERROR."
    );

});


document.getElementById("coffee-object").addEventListener("click", () => {

    inspectObject(
        "coffee-object",
        "Cold coffee. Forgotten again. Classic."
    );

});


document.getElementById("bookshelf-object").addEventListener("click", () => {

    inspectObject(
        "bookshelf-object",
        "Books, notes, folders... and approximately zero evidence of organization."
    );

});


document.getElementById("bed-object").addEventListener("click", () => {

    inspectObject(
        "bed-object",
        "Honestly? I could just go to sleep."
    );

});