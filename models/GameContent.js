const mongoose = require("mongoose");

const gameContentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            required: true,
            enum: [
                "truth",
                "dare",
                "challenge",
                "vote",
                "choice"
            ]
        },

        game: {
            type: String,
            required: true,
            enum: [
                "truth-or-dare",
                "would-you-rather",
                "never-have-i-ever",
                "most-likely-to",
                "hot-seat",
                "rapid-fire",
                "two-truths-and-a-lie",
                "random-challenge"
            ]
        },

        category: {
            type: String,
            required: true,
            enum: [
                "general",
                "funny",
                "deep",
                "dating",
                "spicy",
                "18+"
            ]
        },

        ageRating: {
    type: String,
    required: true,
    enum: [
        "general",
        "18+"
    ],
    default: "general"
},

        intensity: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "GameContent",
    gameContentSchema
);

/* =========================================
   AGE RATING VALIDATION
========================================= */

gameContentSchema.pre("validate", function(next) {

    if (
        this.category === "18+" &&
        this.ageRating !== "18+"
    ) {

        return next(
            new Error(
                "18+ category content must have an 18+ age rating"
            )
        );

    }

    if (
        this.ageRating === "18+" &&
        this.category !== "18+"
    ) {

        return next(
            new Error(
                "18+ content must use the 18+ category"
            )
        );

    }

    next();

});