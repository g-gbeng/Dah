const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const GameContent = require("../models/GameContent");

/* =========================================
   DAH! GAMES
========================================= */

const games = [

    {
        id: "truth-or-dare",
        name: "Truth or Dare",
        description: "The truth or a dare?, let Dah! decide.",
        icon: "🎲",

        contentTypes: [
            "truth",
            "dare"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],

        supportsRandom: true,
        requiresPlayers: false
    },


    {
        id: "would-you-rather",
        name: "Would You Rather",
        description: "Pick your side and defend your choice.",
        icon: "🤔",

        contentTypes: [
            "choice"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],

        supportsRandom: false,
        requiresPlayers: false
    },


    {
        id: "never-have-i-ever",
        name: "Never Have I Ever",
        description: "Find out what everyone has or hasn't done.",
        icon: "🙈",

        contentTypes: [
            "vote"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],

        supportsRandom: false,
        requiresPlayers: true
    },


    {
        id: "most-likely-to",
        name: "Most Likely To",
        description: "Point fingers and find out who the group agrees on.",
        icon: "👀",

        contentTypes: [
            "vote"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],

        supportsRandom: false,
        requiresPlayers: true
    },


    {
        id: "hot-seat",
        name: "Hot Seat",
        description: "One person answers. Everyone else gets curious.",
        icon: "🔥",

        contentTypes: [
            "truth"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],

        supportsRandom: false,
        requiresPlayers: true
    },


    {
        id: "rapid-fire",
        name: "Rapid Fire",
        description: "Think fast. Answer faster.",
        icon: "⚡",

        contentTypes: [
            "challenge"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy"
        ],

        supportsRandom: false,
        requiresPlayers: false
    },


    {
        id: "two-truths-and-a-lie",
        name: "Two Truths & A Lie",
        description: "Tell three statements and see who catches the lie.",
        icon: "🃏",

        contentTypes: [
            "challenge"
        ],

        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy"
        ],

        supportsRandom: false,
        requiresPlayers: true
    },


    {
        id: "random-challenge",
        name: "Random Challenge",
        description: "You don't know what's coming. That's the point.",
        icon: "🎯",

        contentTypes: [
            "challenge"
        ],

        categories: [
            "general",
            "funny",
            "spicy",
            "18+"
        ],

        supportsRandom: false,
        requiresPlayers: false
    }

];

/* =========================================
   GET ALL DAH! GAMES
========================================= */

router.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        count: games.length,
        games
    });

});


/* =========================================
   GET GAME CONTENT
   Supports filtering by:

   game
   category
   intensity
   ageRating
========================================= */

router.get("/content", async (req, res) => {

    try {

        const {
            game,
            category,
            intensity,
            ageRating
        } = req.query;


        /* -----------------------------------------
           BUILD FILTER
        ----------------------------------------- */

        const filter = {
            active: true,
            ageRating: "general"
        };


        /* -----------------------------------------
           GAME FILTER
        ----------------------------------------- */

        if (game) {

            filter.game = game;

        }


        /* -----------------------------------------
           CATEGORY FILTER
        ----------------------------------------- */
if (category) {

    if (
        ageRating === "18+" &&
        category !== "18+"
    ) {

        return res.status(400).json({
            success: false,
            message:
                "18+ mode can only use 18+ content."
        });

    }

    if (
        ageRating === "general" &&
        category === "18+"
    ) {

        return res.status(400).json({
            success: false,
            message:
                "18+ content is not available in general mode."
        });

    }

    filter.category = category;

}


        /* -----------------------------------------
           INTENSITY FILTER
        ----------------------------------------- */

        if (intensity) {

            const intensityNumber = Number(intensity);

            if (
                Number.isNaN(intensityNumber) ||
                intensityNumber < 1 ||
                intensityNumber > 5
            ) {

                return res.status(400).json({
                    success: false,
                    message: "Intensity must be a number between 1 and 5"
                });

            }

            filter.intensity = intensityNumber;

        }


        /* -----------------------------------------
           AGE RATING FILTER
        ----------------------------------------- */

        /* -----------------------------------------
   AGE RATING FILTER
----------------------------------------- */

if (ageRating) {

    if (
        ageRating !== "general" &&
        ageRating !== "18+"
    ) {

        return res.status(400).json({
            success: false,
            message: "Invalid age rating"
        });

    }

    filter.ageRating = ageRating;

}


        /* -----------------------------------------
           FETCH CONTENT
        ----------------------------------------- */

        const content = await GameContent.find(filter);


        /* -----------------------------------------
           RESPONSE
        ----------------------------------------- */

        res.status(200).json({
            success: true,
            count: content.length,
            filters: {
                game: game || null,
                category: category || null,
                intensity: intensity ? Number(intensity) : null,
                ageRating: ageRating || null
            },
            content
        });

    } catch (error) {

        console.error("Failed to fetch game content:");
        console.error(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch game content"
        });

    }

});




/* =========================================
   GET RANDOM GAME CONTENT

   Selection rules:
   - Game is required for normal gameplay
   - Age rating is a hard boundary
   - Category does NOT restrict selection
   - Intensity does NOT restrict selection
   - Previously used cards are excluded
========================================= */

router.get("/random", async (req, res) => {

    try {

        const {
            game,
            ageRating = "general",
            exclude
        } = req.query;


        /* =========================================
           VALIDATE AGE RATING
        ========================================= */

        if (
            ageRating !== "general" &&
            ageRating !== "18+"
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid age rating."
            });

        }


        /* =========================================
           BUILD BASE FILTER
        ========================================= */

        const filter = {
            active: true,
            ageRating
        };


        /* =========================================
           GAME FILTER
        ========================================= */

        if (game) {

            filter.game = game;

        }


        /* =========================================
           AGE-SAFE CATEGORY FILTER
        ========================================= */

        /*
        General mode:
        - Allows every category except 18+

        18+ mode:
        - Allows only 18+ category
        */

        if (ageRating === "18+") {

            filter.category = "18+";

        } else {

            filter.category = {
                $ne: "18+"
            };

        }


        /* =========================================
           EXCLUDE PREVIOUS CONTENT
        ========================================= */

        let excludedIds = [];

        if (exclude) {

            excludedIds = exclude
                .split(",")
                .map(id => id.trim())
                .filter(id => mongoose.isValidObjectId(id));

            if (excludedIds.length > 0) {

                filter._id = {
                    $nin: excludedIds.map(
                        id => new mongoose.Types.ObjectId(id)
                    )
                };

            }

        }


        /* =========================================
           DEBUG
        ========================================= */

        console.log("-----------------------------------");
        console.log("RANDOM CONTENT REQUEST");
        console.log("Game:", game);
        console.log("Age Rating:", ageRating);
        console.log("Excluded IDs:", excludedIds);
        console.log("Mongo Filter:", filter);


        /* =========================================
           GET RANDOM CONTENT
        ========================================= */

        const content = await GameContent.aggregate([

            {
                $match: filter
            },

            {
                $sample: {
                    size: 1
                }
            }

        ]);


        /* =========================================
           NO CONTENT LEFT
        ========================================= */

        if (content.length === 0) {

            console.log("NO UNUSED CONTENT LEFT");

            return res.status(404).json({

                success: false,

                exhausted: true,

                message:
                    "No unused content is available for this game and age rating."

            });

        }


        /* =========================================
           LOG RESULT
        ========================================= */

        console.log(
            "RETURNED CONTENT ID:",
            content[0]._id
        );

        console.log(
            "RETURNED CONTENT:",
            content[0].text
        );

        console.log("-----------------------------------");


        /* =========================================
           RESPONSE
        ========================================= */

        res.status(200).json({

            success: true,

            exhausted: false,

            content: content[0]

        });

    } catch (error) {

        console.error(
            "Random content error:",
            error
        );

        res.status(500).json({

            success: false,

            message:
                "Failed to retrieve random game content."

        });

    }

});


/* =========================================
   QUICK PLAY
========================================= */

router.get("/quick", async (req, res) => {

    try {

        const ageRating =
            req.query.ageRating || "general";

        if (
            ageRating !== "general" &&
            ageRating !== "18+"
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid age rating."
            });

        }

        const availableContent =
            await GameContent.find({
                active: true,
                ageRating
            }).lean();

        if (availableContent.length === 0) {

            return res.status(404).json({
                success: false,
                message:
                    "No game content is currently available."
            });

        }

        /*
        =========================================
        RANDOM CONTENT
        =========================================
        */

        const randomContent =
            availableContent[
                Math.floor(
                    Math.random() *
                    availableContent.length
                )
            ];

        res.json({
            success: true,

            quickPlay: {
                game: randomContent.game,
                category: randomContent.category,
                intensity: randomContent.intensity,
                ageRating: randomContent.ageRating
            }
        });

    } catch (error) {

        console.error(
            "Quick Play error:",
            error
        );

        res.status(500).json({
            success: false,
            message:
                "Failed to start Quick Play."
        });

    }

});


/* =========================================
   GET CONTENT BY GAME
========================================= */

router.get("/content/:game", async (req, res) => {

    try {

        const content = await GameContent.find({
            game: req.params.game,
            active: true
        });

        res.status(200).json({
            success: true,
            count: content.length,
            content
        });

    } catch (error) {

        console.error("Failed to fetch game content:");
        console.error(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch game content"
        });

    }

});


module.exports = router;