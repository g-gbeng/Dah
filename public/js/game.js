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

const categoryOptions = document.getElementById("categoryOptions");
const adultMode = document.getElementById("adultMode");
const ageWarning = document.getElementById("ageWarning");
const ageRatingCard = document.getElementById("ageRatingCard");

const startGameBtn = document.getElementById("startGameBtn");
const configurationError = document.getElementById("configurationError");

const gameplaySection = document.getElementById("gameplaySection");
const playGameName = document.getElementById("playGameName");
const playCategory = document.getElementById("playCategory");
const playIntensity = document.getElementById("playIntensity");

const contentCard = document.getElementById("contentCard");
const contentType = document.getElementById("contentType");
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
let selectedCategory = null;
let currentCardNumber = 0;

let usedContentIds = [];
let quickPlayMode = false;


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

        console.error("Game loading error:", error);

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

            showError("No games are currently available.");

            return;

        }

        const randomIndex = Math.floor(
            Math.random() * data.games.length
        );

        selectedGame = data.games[randomIndex];

        renderGameConfiguration();

    } catch (error) {

        console.error("Quick Play error:", error);

        showError(
            "Unable to start Quick Play. Please try again."
        );

    }

}


/* =========================================
   RENDER CONFIGURATION
========================================= */

function renderGameConfiguration() {

    gameIcon.textContent = selectedGame.icon || "🎲";

    gameName.textContent = selectedGame.name;

    gameDescription.textContent =
        selectedGame.description ||
        "Get ready to play and have some fun.";

    renderCategories();

    configureAgeRating();

    hideLoading();

}


/* =========================================
   RENDER CATEGORIES
========================================= */

function renderCategories() {

    categoryOptions.innerHTML = "";

 let categories = selectedGame.categories || [
    "general",
    "funny",
    "deep",
    "dating",
    "spicy"
];

if (!adultMode.checked) {

    categories = categories.filter(
        category => category !== "18+"
    );

} else {

    categories = ["18+"];

}

if (categories.length === 0) {

    categories = ["general"];

}

    categories.forEach((category, index) => {

        const wrapper = document.createElement("div");

        wrapper.className = "category-option";

        const inputId = `category-${index}`;

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "category";
        input.id = inputId;
        input.value = category;

        const label = document.createElement("label");

        label.htmlFor = inputId;

        label.textContent =
            categoryLabels[category] ||
            formatCategory(category);

        input.addEventListener("change", () => {

            selectedCategory = category;

            configurationError.classList.add("hidden");

        });

        wrapper.appendChild(input);
        wrapper.appendChild(label);

        categoryOptions.appendChild(wrapper);

    });

    const firstCategory = categoryOptions.querySelector(
        'input[type="radio"]'
    );

    if (firstCategory) {

        firstCategory.checked = true;

        selectedCategory = firstCategory.value;

    }

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

    renderCategories();

});


/* =========================================
   START GAME
========================================= */

startGameBtn.addEventListener("click", () => {

    if (!selectedGame) {

        return;

    }

    if (!selectedCategory) {

        configurationError.textContent =
            "Please select a category first.";

        configurationError.classList.remove("hidden");

        return;

    }

    const selectedIntensity = document.querySelector(
        'input[name="intensity"]:checked'
    );

    const intensity = selectedIntensity
        ? Number(selectedIntensity.value)
        : 3;

    const ageRating = adultMode.checked
        ? "18+"
        : "general";

    const gameSettings = {

        game: selectedGame.id,
        category: selectedCategory,
        intensity,
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

    const savedSettings = sessionStorage.getItem(
        "dahGameSettings"
    );

    if (!savedSettings) {

        window.location.href = "games.html";

        return;

    }

    try {

        const settings = JSON.parse(savedSettings);

        if (
            !settings.game ||
            !settings.category ||
            !settings.intensity ||
            !settings.ageRating
        ) {

            throw new Error("Invalid game settings.");

        }

        startGameplay(settings);

    } catch (error) {

        console.error("Play mode initialization error:", error);

        sessionStorage.removeItem("dahGameSettings");

        window.location.href = "games.html";

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

    playGameName.textContent = formatCategory(
        settings.game
    );

    playCategory.textContent =
        categoryLabels[settings.category] ||
        formatCategory(settings.category);

    playIntensity.textContent =
        `Level ${settings.intensity}`;

    currentCardNumber = 0;
    usedContentIds = [];
    await fetchNextContent(settings);

}


/* =========================================
   FETCH NEXT CONTENT
========================================= */

async function fetchNextContent(settings) {

    showContentLoading();

    const queryParams = new URLSearchParams();

    queryParams.set("game", settings.game);
    queryParams.set("category", settings.category);
    queryParams.set("intensity", settings.intensity);
    queryParams.set("ageRating", settings.ageRating);

    if (usedContentIds.length > 0) {

        queryParams.set(
            "exclude",
            usedContentIds.join(",")
        );

    }

    const requestUrl =
        `/api/games/random?${queryParams.toString()}`;

    console.log("=================================");
    console.log("FETCHING NEXT CONTENT");
    console.log("Used IDs:", usedContentIds);
    console.log("Request URL:", requestUrl);

    try {

        const response = await fetch(requestUrl);

        const data = await response.json();

        console.log("Server response:", data);

        if (response.status === 404 && data.exhausted) {

            showContentError(
                "You've reached the end of the available cards for these settings."
            );

            nextContentBtn.disabled = true;

            return;
        }

        if (!response.ok || !data.success) {

            throw new Error(
                data.message ||
                "Unable to load game content."
            );

        }

        if (!data.content) {

            throw new Error(
                "The server returned no game content."
            );

        }

        /* =========================================
           STORE CONTENT ID
        ========================================= */

        const contentId = String(
            data.content._id
        );

        if (!usedContentIds.includes(contentId)) {

            usedContentIds.push(contentId);

        }

        console.log(
            "Received ID:",
            contentId
        );

        console.log(
            "Updated used IDs:",
            usedContentIds
        );

        currentCardNumber++;

        renderContent(data.content);

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

    contentType.textContent =
        formatCategory(content.type || "question")
        .toUpperCase();

    contentText.textContent = content.text;

    contentNumber.textContent =
        `CARD ${String(currentCardNumber).padStart(2, "0")}`;

    contentCard.style.animation = "none";

    void contentCard.offsetWidth;

    contentCard.style.animation =
        "scaleIn 0.4s ease both";

}


/* =========================================
   NEXT CONTENT
========================================= */

nextContentBtn.addEventListener("click", async () => {

    const savedSettings = sessionStorage.getItem(
        "dahGameSettings"
    );

    if (!savedSettings) {

        window.location.href = "games.html";

        return;

    }

    const settings = JSON.parse(savedSettings);

    await fetchNextContent(settings);

});


/* =========================================
   RETRY CONTENT
========================================= */

retryContentBtn.addEventListener("click", async () => {

    const savedSettings = sessionStorage.getItem(
        "dahGameSettings"
    );

    if (!savedSettings) {

        window.location.href = "games.html";

        return;

    }

    const settings = JSON.parse(savedSettings);

    await fetchNextContent(settings);

});


/* =========================================
   QUIT GAME
========================================= */

quitGameBtn.addEventListener("click", () => {

    sessionStorage.removeItem("dahGameSettings");

    window.location.href = "games.html";

});


/* =========================================
   CONTENT UI STATES
========================================= */

function showContentLoading() {

    contentCard.classList.add("hidden");

    contentError.classList.add("hidden");

    contentLoading.classList.remove("hidden");

}

function showContentError(message) {

    contentCard.classList.add("hidden");

    contentLoading.classList.add("hidden");

    contentError.classList.remove("hidden");

    contentErrorMessage.textContent =
        message || "Unable to load content.";

}


/* =========================================
   GENERAL UI HELPERS
========================================= */

function showLoading() {

    gameLoading.classList.remove("hidden");

    gameError.classList.add("hidden");

    gameConfig.classList.add("hidden");

}

function hideLoading() {

    gameLoading.classList.add("hidden");

    gameError.classList.add("hidden");

    gameConfig.classList.remove("hidden");

}

function showError(message) {

    gameLoading.classList.add("hidden");

    gameConfig.classList.add("hidden");

    gameError.classList.remove("hidden");

    gameErrorMessage.textContent = message;

}

function formatCategory(category) {

    return String(category)
        .replaceAll("-", " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());

}


/* =========================================
   START PAGE
========================================= */

initializeGamePage();