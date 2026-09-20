/* =========================================
   DAH! GAME PAGE
========================================= */

const gameLoading = document.getElementById("gameLoading");
const gameError = document.getElementById("gameError");
const gameErrorMessage = document.getElementById("gameErrorMessage");
const gameConfig = document.getElementById("gameConfig");

const gameIcon = document.getElementById("gameIcon");
const gameName = document.getElementById("gameName");
const gameDescription = document.getElementById("gameDescription");

const adultMode = document.getElementById("adultMode");
const ageWarning = document.getElementById("ageWarning");
const ageRatingCard = document.getElementById("ageRatingCard");

const startGameBtn = document.getElementById("startGameBtn");

const gameplaySection = document.getElementById("gameplaySection");
const playGameName = document.getElementById("playGameName");

const contentCard = document.getElementById("contentCard");
const contentType = document.getElementById("contentType");
const contentMeta = document.getElementById("contentMeta");
const contentText = document.getElementById("contentText");
const contentNumber = document.getElementById("contentNumber");

const contentLoading = document.getElementById("contentLoading");
const contentError = document.getElementById("contentError");
const contentErrorMessage = document.getElementById("contentErrorMessage");

const nextContentBtn = document.getElementById("nextContentBtn");
const retryContentBtn = document.getElementById("retryContentBtn");
const quitGameBtn = document.getElementById("quitGameBtn");


/* =========================================
   URL AND STATE
========================================= */

const urlParams = new URLSearchParams(window.location.search);

const selectedGameId = urlParams.get("game");
const selectedMode = urlParams.get("mode") || "classic";
const isPlayMode = urlParams.get("play") === "true";

let selectedGame = null;
let currentCardNumber = 0;

let usedContentIds = [];


/* =========================================
   CATEGORY LABELS
========================================= */

const categoryLabels = {
    general: "General",
    funny: "Funny",
    deep: "Deep",
    dating: "Dating",
    spicy: "Spicy",
    "18+": "18+"
};


/* =========================================
   PAGE INITIALIZATION
========================================= */

async function initializeGamePage() {

    if (isPlayMode) {

        initializePlayMode();

        return;

    }

    showLoading();

    if (selectedMode === "quick") {

        await initializeQuickPlay();

        return;

    }

    if (!selectedGameId) {

        showError(
            "No game was selected. Please choose a game first."
        );

        return;

    }

    await fetchSelectedGame();

}


/* =========================================
   FETCH SELECTED GAME
========================================= */

async function fetchSelectedGame() {

    try {

        const response = await fetch("/api/games");
        const data = await response.json();

        if (!response.ok || !data.success) {

            throw new Error(
                data.message || "Unable to load games."
            );

        }

        selectedGame = data.games.find(
            game => game.id === selectedGameId
        );

        if (!selectedGame) {

            showError(
                "The selected game could not be found."
            );

            return;

        }

        renderGameConfiguration();

    } catch (error) {

        console.error(
            "Game loading error:",
            error
        );

        showError(
            "Unable to connect to the server. Please try again."
        );

    }

}


/* =========================================
   QUICK PLAY
========================================= */

async function initializeQuickPlay() {

    try {

        const response = await fetch("/api/games");
        const data = await response.json();

        if (!response.ok || !data.success) {

            throw new Error(
                data.message || "Unable to load games."
            );

        }

        if (!data.games || data.games.length === 0) {

            showError(
                "No games are currently available."
            );

            return;

        }

        const randomIndex = Math.floor(
            Math.random() * data.games.length
        );

        selectedGame = data.games[randomIndex];

        renderGameConfiguration();

    } catch (error) {

        console.error(
            "Quick Play error:",
            error
        );

        showError(
            "Unable to start Quick Play. Please try again."
        );

    }

}


/* =========================================
   RENDER CONFIGURATION
========================================= */

function renderGameConfiguration() {

    gameIcon.textContent =
        selectedGame.icon || "🎲";

    gameName.textContent =
        selectedGame.name;

    gameDescription.textContent =
        selectedGame.description ||
        "Get ready to play and have some fun.";

    configureAgeRating();

    hideLoading();

}


/* =========================================
   AGE RATING CONFIGURATION
========================================= */

function configureAgeRating() {

    const supportsAdultContent =
        (selectedGame.categories || []).includes("18+");

    if (!supportsAdultContent) {

        ageRatingCard.classList.add("hidden");

        adultMode.checked = false;

        ageWarning.classList.add("hidden");

        return;

    }

    ageRatingCard.classList.remove("hidden");

}


/* =========================================
   ADULT MODE TOGGLE
========================================= */

adultMode.addEventListener("change", () => {

    if (adultMode.checked) {

        ageWarning.classList.remove("hidden");

    } else {

        ageWarning.classList.add("hidden");

    }

});


/* =========================================
   START GAME
========================================= */

startGameBtn.addEventListener("click", () => {

    if (!selectedGame) {

        return;

    }

    const ageRating = adultMode.checked
        ? "18+"
        : "general";


    /*
    =========================================
    GAME SETTINGS

    Category and intensity are intentionally
    NOT selected here.

    The backend will randomly select from
    the entire eligible content pool.

    The selected card's category and
    intensity will be displayed during play.
    =========================================
    */

    const gameSettings = {

        game: selectedGame.id,

        ageRating,

        mode: selectedMode

    };


    sessionStorage.setItem(
        "dahGameSettings",
        JSON.stringify(gameSettings)
    );


    window.location.href =
        `game.html?game=${encodeURIComponent(selectedGame.id)}&play=true`;

});


/* =========================================
   INITIALIZE PLAY MODE
========================================= */

function initializePlayMode() {

    const savedSettings =
        sessionStorage.getItem("dahGameSettings");

    if (!savedSettings) {

        window.location.href = "games.html";

        return;

    }

    try {

        const settings =
            JSON.parse(savedSettings);


        /*
        =========================================
        ONLY GAME + AGE RATING ARE REQUIRED
        =========================================
        */

        if (
            !settings.game ||
            !settings.ageRating
        ) {

            throw new Error(
                "Invalid game settings."
            );

        }


        if (
            settings.ageRating !== "general" &&
            settings.ageRating !== "18+"
        ) {

            throw new Error(
                "Invalid age rating."
            );

        }


        startGameplay(settings);

    } catch (error) {

        console.error(
            "Play mode initialization error:",
            error
        );

        sessionStorage.removeItem(
            "dahGameSettings"
        );

        window.location.href =
            "games.html";

    }

}


/* =========================================
   START GAMEPLAY
========================================= */

async function startGameplay(settings) {

    gameConfig.classList.add("hidden");

    gameLoading.classList.add("hidden");

    gameError.classList.add("hidden");

    gameplaySection.classList.remove("hidden");


    playGameName.textContent =
        formatCategory(settings.game);


    /*
    =========================================
    RESET GAME SESSION
    =========================================
    */

    currentCardNumber = 0;

    usedContentIds = [];


    await fetchNextContent(settings);

}


/* =========================================
   FETCH NEXT CONTENT
========================================= */

async function fetchNextContent(settings) {

    showContentLoading();

    const queryParams =
        new URLSearchParams();


    /*
    =========================================
    CONTENT SELECTION

    Only these are sent:

    - game
    - ageRating
    - exclude

    Category and intensity are NOT sent
    because they should NOT filter the pool.
    =========================================
    */

    queryParams.set(
        "game",
        settings.game
    );

    queryParams.set(
        "ageRating",
        settings.ageRating
    );


    if (usedContentIds.length > 0) {

        queryParams.set(
            "exclude",
            usedContentIds.join(",")
        );

    }


    const requestUrl =
        `/api/games/random?${queryParams.toString()}`;


    console.log(
        "================================="
    );

    console.log(
        "FETCHING NEXT CONTENT"
    );

    console.log(
        "Used IDs:",
        usedContentIds
    );

    console.log(
        "Request URL:",
        requestUrl
    );


    try {

        const response =
            await fetch(requestUrl);

        const data =
            await response.json();


        console.log(
            "Server response:",
            data
        );


        /*
        =========================================
        CONTENT EXHAUSTED
        =========================================
        */

        if (
            response.status === 404 &&
            data.exhausted
        ) {

            showContentError(
                "You've reached the end of the available cards for this game."
            );

            nextContentBtn.disabled = true;

            return;

        }


        /*
        =========================================
        GENERAL SERVER ERROR
        =========================================
        */

        if (
            !response.ok ||
            !data.success
        ) {

            throw new Error(
                data.message ||
                "Unable to load game content."
            );

        }


        /*
        =========================================
        MAKE SURE CONTENT EXISTS
        =========================================
        */

        if (!data.content) {

            throw new Error(
                "The server returned no game content."
            );

        }


        /*
        =========================================
        STORE CONTENT ID
        =========================================
        */

        const contentId =
            String(data.content._id);


        if (
            !usedContentIds.includes(contentId)
        ) {

            usedContentIds.push(
                contentId
            );

        }


        console.log(
            "Received ID:",
            contentId
        );

        console.log(
            "Updated used IDs:",
            usedContentIds
        );


        /*
        =========================================
        INCREMENT CARD NUMBER
        =========================================
        */

        currentCardNumber++;


        /*
        =========================================
        RENDER CARD
        =========================================
        */

        renderContent(
            data.content
        );


    } catch (error) {

        console.error(
            "Content loading error:",
            error
        );

        showContentError(
            error.message ||
            "Unable to load content."
        );

    }

}


/* =========================================
   RENDER CONTENT
========================================= */

function renderContent(content) {

    contentLoading.classList.add("hidden");

    contentError.classList.add("hidden");

    contentCard.classList.remove("hidden");


    /*
    =========================================
    CONTENT TYPE
    =========================================
    */

    contentType.textContent =
        formatCategory(
            content.type || "question"
        ).toUpperCase();


    /*
    =========================================
    CONTENT METADATA

    Category and intensity now come directly
    from the database for the current card.
    =========================================
    */

    if (contentMeta) {

        const category =
            categoryLabels[content.category] ||
            formatCategory(
                content.category ||
                "general"
            );


        const intensity =
            content.intensity
                ? `Level ${content.intensity}`
                : "";


        if (intensity) {

            contentMeta.textContent =
                `${category} • ${intensity}`;

        } else {

            contentMeta.textContent =
                category;

        }

    }


    /*
    =========================================
    CONTENT TEXT
    =========================================
    */

    contentText.textContent =
        content.text;


    /*
    =========================================
    CARD NUMBER
    =========================================
    */

    contentNumber.textContent =
        `CARD ${String(
            currentCardNumber
        ).padStart(2, "0")}`;


    /*
    =========================================
    CARD ANIMATION
    =========================================
    */

    contentCard.style.animation =
        "none";

    void contentCard.offsetWidth;

    contentCard.style.animation =
        "scaleIn 0.4s ease both";

}


/* =========================================
   NEXT CONTENT
========================================= */

nextContentBtn.addEventListener(
    "click",
    async () => {

        const savedSettings =
            sessionStorage.getItem(
                "dahGameSettings"
            );


        if (!savedSettings) {

            window.location.href =
                "games.html";

            return;

        }


        try {

            const settings =
                JSON.parse(
                    savedSettings
                );

            await fetchNextContent(
                settings
            );

        } catch (error) {

            console.error(
                "Next content settings error:",
                error
            );

            window.location.href =
                "games.html";

        }

    }
);


/* =========================================
   RETRY CONTENT
========================================= */

retryContentBtn.addEventListener(
    "click",
    async () => {

        const savedSettings =
            sessionStorage.getItem(
                "dahGameSettings"
            );


        if (!savedSettings) {

            window.location.href =
                "games.html";

            return;

        }


        try {

            const settings =
                JSON.parse(
                    savedSettings
                );

            await fetchNextContent(
                settings
            );

        } catch (error) {

            console.error(
                "Retry settings error:",
                error
            );

            window.location.href =
                "games.html";

        }

    }
);


/* =========================================
   QUIT GAME
========================================= */

quitGameBtn.addEventListener(
    "click",
    () => {

        sessionStorage.removeItem(
            "dahGameSettings"
        );

        window.location.href =
            "games.html";

    }
);


/* =========================================
   CONTENT UI STATES
========================================= */

function showContentLoading() {

    contentCard.classList.add(
        "hidden"
    );

    contentError.classList.add(
        "hidden"
    );

    contentLoading.classList.remove(
        "hidden"
    );

}


function showContentError(message) {

    contentCard.classList.add(
        "hidden"
    );

    contentLoading.classList.add(
        "hidden"
    );

    contentError.classList.remove(
        "hidden"
    );

    contentErrorMessage.textContent =
        message ||
        "Unable to load content.";

}


/* =========================================
   GENERAL UI HELPERS
========================================= */

function showLoading() {

    gameLoading.classList.remove(
        "hidden"
    );

    gameError.classList.add(
        "hidden"
    );

    gameConfig.classList.add(
        "hidden"
    );

}


function hideLoading() {

    gameLoading.classList.add(
        "hidden"
    );

    gameError.classList.add(
        "hidden"
    );

    gameConfig.classList.remove(
        "hidden"
    );

}


function showError(message) {

    gameLoading.classList.add(
        "hidden"
    );

    gameConfig.classList.add(
        "hidden"
    );

    gameError.classList.remove(
        "hidden"
    );

    gameErrorMessage.textContent =
        message;

}


function formatCategory(category) {

    return String(category)
        .replaceAll("-", " ")
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );

}


/* =========================================
   START PAGE
========================================= */

initializeGamePage();