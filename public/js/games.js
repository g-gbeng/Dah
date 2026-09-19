/* =========================================
   DAH! GAMES PAGE
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const gamesGrid = document.getElementById("gamesGrid");

const gamesLoading = document.getElementById("gamesLoading");

const gamesError = document.getElementById("gamesError");

const gamesEmpty = document.getElementById("gamesEmpty");

const gamesCount = document.getElementById("gamesCount");

const retryGames = document.getElementById("retryGames");


/* =========================================
   STATE
========================================= */

let games = [];


/* =========================================
   STATUS HANDLING
========================================= */

function showStatus(status) {

    gamesLoading.classList.add("hidden");

    gamesError.classList.add("hidden");

    gamesEmpty.classList.add("hidden");

    gamesGrid.classList.add("hidden");


    if (status === "loading") {

        gamesLoading.classList.remove("hidden");

    }

    if (status === "error") {

        gamesError.classList.remove("hidden");

    }

    if (status === "empty") {

        gamesEmpty.classList.remove("hidden");

    }

    if (status === "success") {

        gamesGrid.classList.remove("hidden");

    }

}


/* =========================================
   FETCH GAMES
========================================= */

async function fetchGames() {

    showStatus("loading");

    gamesCount.textContent = "Loading games...";


    try {

        const response = await fetch("/api/games");

        const data = await response.json();


        if (!response.ok || !data.success) {

            throw new Error(
                data.message || "Unable to load games"
            );

        }


        games = data.games || [];


        if (games.length === 0) {

            gamesCount.textContent = "0 games";

            showStatus("empty");

            return;

        }


        gamesCount.textContent =
            `${games.length} games available`;


        renderGames();

        showStatus("success");


    } catch (error) {

        console.error("Games loading error:", error);

        gamesCount.textContent = "Unable to load games";

        showStatus("error");

    }

}


/* =========================================
   RENDER GAMES
========================================= */

function renderGames() {

    gamesGrid.innerHTML = "";


    games.forEach((game, index) => {

        const gameCard = document.createElement("article");

        gameCard.className = "game-card";

        gameCard.style.animationDelay =
            `${index * 0.07}s`;


        gameCard.innerHTML = `

            <div class="game-card-icon">
                ${game.icon}
            </div>


            <h3>
                ${escapeHTML(game.name)}
            </h3>


            <p>
                ${escapeHTML(game.description)}
            </p>


            <div class="game-card-bottom">

                <span class="game-card-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>


                <a
                    href="game.html?game=${encodeURIComponent(game.id)}"
                    class="game-card-link"
                >
                    Play Game
                    <span aria-hidden="true">→</span>
                </a>

            </div>

        `;


        gamesGrid.appendChild(gameCard);

    });

}


/* =========================================
   BASIC HTML ESCAPING
========================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================
   RETRY BUTTON
========================================= */

if (retryGames) {

    retryGames.addEventListener("click", fetchGames);

}


/* =========================================
   INITIAL LOAD
========================================= */

if (gamesGrid) {

    fetchGames();

}