const mongoose = require("mongoose");
require("dotenv").config();

const GameContent = require("../models/GameContent");


/* =========================================
   GAME RULES
========================================= */

const gameRules = {

    "truth-or-dare": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],
        types: [
            "truth",
            "dare"
        ],
        allows18Plus: true
    },

    "would-you-rather": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],
        types: [
            "choice"
        ],
        allows18Plus: true
    },

    "never-have-i-ever": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],
        types: [
            "vote"
        ],
        allows18Plus: true
    },

    "most-likely-to": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],
        types: [
            "vote"
        ],
        allows18Plus: true
    },

    "hot-seat": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy",
            "18+"
        ],
        types: [
            "truth"
        ],
        allows18Plus: true
    },

    "rapid-fire": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy"
        ],
        types: [
            "challenge"
        ],
        allows18Plus: false
    },

    "two-truths-and-a-lie": {
        categories: [
            "general",
            "funny",
            "deep",
            "dating",
            "spicy"
        ],
        types: [
            "challenge"
        ],
        allows18Plus: false
    },

    "random-challenge": {
        categories: [
            "general",
            "funny",
            "spicy",
            "18+"
        ],
        types: [
            "challenge"
        ],
        allows18Plus: true
    }

};


/* =========================================
   GAME CONTENT
========================================= */

const gameContent = [

       /* =========================================
       TRUTH OR DARE
    ========================================= */

    /* -----------------------------------------
       GENERAL — LEVEL 1
    ----------------------------------------- */

    {
        text: "What's one small thing that always makes your day better?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's your go-to comfort food?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's one hobby you'd like to get better at?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's the last song you listened to?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Do your best impression of a famous person for 20 seconds.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 2
    ----------------------------------------- */

    {
        text: "What's one habit you have that your friends find funny?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's the strangest food combination you've actually enjoyed?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's something you were convinced was true when you were younger?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's the most embarrassing thing you've ever done in public?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Let another player choose a harmless pose for you and hold it for 20 seconds.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 3
    ----------------------------------------- */

    {
        text: "What's one decision you've made that surprised everyone around you?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What's something you've always wanted to try but haven't had the courage to do?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What's one opinion you have that most people in this group might disagree with?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Speak only in questions until your next turn.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Let the group choose a harmless word you must use in every sentence for the next three rounds.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 4
    ----------------------------------------- */

    {
        text: "What's a mistake you've made that taught you an important lesson?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's something you've done that you would probably never tell a stranger?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's one thing about yourself you'd genuinely like to change?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Give a completely serious motivational speech about a random object in the room.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 5
    ----------------------------------------- */

    {
        text: "What's a decision you would make differently if you could go back in time?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "What's something you've been avoiding that you know you eventually need to face?",
        type: "truth",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Let the group ask you one follow-up question about your previous answer, and answer honestly.",
        type: "dare",
        game: "truth-or-dare",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       FUNNY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "What's the weirdest nickname you've ever had?",
        type: "truth",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's the funniest thing you've ever misunderstood?",
        type: "truth",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's one thing you pretend to understand but actually don't?",
        type: "truth",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Do your best impression of someone in the group until they guess who you're copying.",
        type: "dare",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Act like a confused tourist asking the group for directions to somewhere ridiculous.",
        type: "dare",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What's the most ridiculous excuse you've ever used to get out of something?",
        type: "truth",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Pretend to be a news reporter and give a breaking-news report about something happening in the room.",
        type: "dare",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's the most awkward way you've ever tried to act cool?",
        type: "truth",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Recreate your most embarrassing moment using only facial expressions and gestures.",
        type: "dare",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Let the group invent a ridiculous character for you and stay in character until your next turn.",
        type: "dare",
        game: "truth-or-dare",
        category: "funny",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DEEP — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "What is something you're genuinely grateful for right now?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Who has had a positive influence on your life?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's one lesson you learned from a difficult experience?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What is one thing you wish people understood about you?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What fear has influenced one of your decisions?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's something you rarely admit about yourself?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's one part of your life you're currently trying to improve?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's a choice you've made that changed the direction of your life?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "What is something you wish you could say to your younger self?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "What's one truth about yourself that took you a long time to accept?",
        type: "truth",
        game: "truth-or-dare",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DATING — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "What is the first thing you usually notice about someone you're attracted to?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's your idea of a really good first date?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's a green flag you immediately appreciate in someone?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's a dating habit that would make you lose interest quickly?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Have you ever developed feelings for someone you didn't expect to like?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What's the boldest move you've ever made toward someone you liked?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Have you ever liked someone who was completely wrong for you?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's something you would never tolerate in a serious relationship?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Have you ever had feelings for someone you knew you probably shouldn't pursue?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "What's the hardest part of letting go of someone you've cared about?",
        type: "truth",
        game: "truth-or-dare",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       SPICY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "What's your biggest dating pet peeve?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "What's the most attractive personality trait someone can have?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Have you ever flirted with someone just for fun?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "What's the most memorable compliment you've received from someone you liked?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Have you ever had a crush on someone in this room?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Give someone in the group a sincere compliment that could make them blush.",
        type: "dare",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What's the boldest flirt you've ever attempted?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Tell the group what your biggest romantic weakness is.",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Choose someone in the group and give them your best playful pickup line.",
        type: "dare",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "What's something that can instantly make you attracted to someone?",
        type: "truth",
        game: "truth-or-dare",
        category: "spicy",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       18+ — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "What's a romantic experience you've always been curious about?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "What's a quality that makes someone especially attractive to you?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "What's the most memorable romantic moment you've experienced?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "What's something you find surprisingly attractive in another person?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "Have you ever been attracted to someone you knew was a bad idea?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "What's a romantic fantasy you've been comfortable admitting to yourself?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "What's something that instantly kills the mood for you?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Have you ever sent a flirtatious message and immediately regretted it?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Give someone a confident but tasteful compliment about their appearance.",
        type: "dare",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "What's the boldest romantic decision you've ever made?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Describe your ideal romantic atmosphere without naming a specific person.",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Tell the group about a time when the chemistry with someone caught you completely off guard.",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "What's a boundary you consider especially important in an intimate relationship?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    {
        text: "What's something intimate you've learned about yourself as an adult?",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    {
        text: "Describe the kind of chemistry that makes you unable to ignore someone.",
        type: "truth",
        game: "truth-or-dare",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

        /* =========================================
       WOULD YOU RATHER
    ========================================= */

    /* -----------------------------------------
       GENERAL — LEVEL 1
    ----------------------------------------- */

    {
        text: "Would you rather always be 10 minutes late or always arrive 30 minutes early?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather always have perfect weather or always have perfect Wi-Fi?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather never have to do laundry again or never have to wash dishes again?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather have unlimited snacks or unlimited drinks?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 2
    ----------------------------------------- */

    {
        text: "Would you rather be able to speak every language or play every musical instrument?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather have an extra two hours every day or an extra day every month?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather always know exactly what time it is or always know exactly where you left your belongings?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather have the ability to pause time for 10 minutes a day or rewind time by 10 minutes once a day?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 3
    ----------------------------------------- */

    {
        text: "Would you rather have a job you love with average pay or a job you dislike that makes you extremely wealthy?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather travel the world for one year or live in your dream home for the rest of your life?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather be extremely talented but unknown or moderately talented and famous?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have unlimited money but no free time, or unlimited free time but only enough money for the basics?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 4
    ----------------------------------------- */

    {
        text: "Would you rather know exactly how your life will end or never know what the future holds?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather erase one painful memory or relive one perfect memory whenever you want?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather be remembered by millions but misunderstood, or remembered by a few people who truly knew you?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 5
    ----------------------------------------- */

    {
        text: "Would you rather have the chance to change one decision from your past or see one major event from your future?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Would you rather achieve your biggest dream but lose all your current memories, or keep your memories and never achieve it?",
        type: "choice",
        game: "would-you-rather",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       FUNNY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Would you rather have a permanent clown laugh or sneeze every time someone says your name?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather have to sing everything you say or dance everywhere you walk?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather accidentally send your entire search history to your family or your entire photo gallery to your coworkers?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have your voice replaced by a cartoon character's voice or your laugh replaced by a baby's laugh?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have to narrate everything you do out loud or have someone else narrate your life for a day?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather have a video of your most embarrassing moment played before every first date or every job interview?",
        type: "choice",
        game: "would-you-rather",
        category: "funny",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DEEP — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Would you rather be deeply understood by one person or admired by many people?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather have the courage to say what you feel or the wisdom to know when to stay quiet?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather know the truth even when it hurts or remain happy without knowing everything?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have the opportunity to fix one mistake from your past or guarantee one success in your future?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather be completely honest about your feelings all the time or never have to reveal your feelings at all?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather know what everyone truly thinks about you or never know what anyone thinks about you?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather live a short life filled with meaningful experiences or a long life that is comfortable but ordinary?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Would you rather lose the ability to make new memories or lose every memory you currently have?",
        type: "choice",
        game: "would-you-rather",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DATING — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Would you rather go on a coffee date or a dinner date?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather date someone who texts constantly or someone who rarely texts?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather have amazing chemistry with someone who lives far away or average chemistry with someone who lives nearby?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather know immediately whether someone likes you or spend weeks figuring it out?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather date your best friend or someone you have instant chemistry with?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather discover your partner has lied about something small or discover they have hidden something important from you?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather stay with someone you love but know you have outgrown or leave and start over?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Would you rather know your partner's complete dating history or never know any of it?",
        type: "choice",
        game: "would-you-rather",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       SPICY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Would you rather receive a sweet compliment or a confident flirt?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather make the first move or have someone make the first move on you?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather have undeniable chemistry with someone or an effortless emotional connection?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather be caught flirting with someone or accidentally send them a message meant for someone else?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have someone know exactly what makes you blush or exactly what makes you jealous?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather admit your biggest crush to the group or let the group guess who it is?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather reveal your biggest romantic weakness or your biggest romantic fantasy?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Would you rather have everyone know who you're attracted to or know who you're secretly texting?",
        type: "choice",
        game: "would-you-rather",
        category: "spicy",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       18+ — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Would you rather have a romantic evening planned for you or plan one yourself?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather be with someone who is very affectionate or someone who is very mysterious?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "Would you rather be the person who makes the first move or the person who gets surprised?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather have strong physical chemistry or strong emotional chemistry?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "Would you rather reveal your biggest romantic fantasy or your biggest turn-off?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather be asked about your most adventurous romantic experience or your most unexpected one?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Would you rather have a partner who openly communicates every desire or one who enjoys keeping some things mysterious?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather reveal what instantly kills the mood for you or what instantly creates chemistry?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Would you rather discuss your most memorable intimate experience or the experience you've always wanted to have?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    {
        text: "Would you rather have your partner know every intimate preference you have or never know any of them?",
        type: "choice",
        game: "would-you-rather",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    
        /* =========================================
       NEVER HAVE I EVER
    ========================================= */

    /* -----------------------------------------
       GENERAL — LEVEL 1
    ----------------------------------------- */

    {
        text: "Never have I ever stayed awake all night because I was watching or playing something.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever forgotten where I left my phone.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever eaten the same meal several days in a row.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever fallen asleep while watching a movie.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 2
    ----------------------------------------- */

    {
        text: "Never have I ever pretended to understand something when I had no idea what was happening.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever started a hobby and abandoned it after a few days.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever spent money on something I immediately regretted buying.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever lied about being busy to avoid making plans.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 3
    ----------------------------------------- */

    {
        text: "Never have I ever seriously considered starting my life over somewhere completely different.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever made an important decision without telling anyone first.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever pretended to like something because everyone else liked it.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever taken a completely different path from the one I originally planned.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 3,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 4
    ----------------------------------------- */

    {
        text: "Never have I ever quit something because I was afraid I wouldn't be good enough.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever kept a major decision secret from people close to me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever regretted not taking an opportunity when I had the chance.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 4,
        active: true
    },


    /* -----------------------------------------
       GENERAL — LEVEL 5
    ----------------------------------------- */

    {
        text: "Never have I ever completely changed my plans because of one person.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Never have I ever walked away from something important because I knew it was no longer right for me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       FUNNY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Never have I ever waved back at someone who wasn't waving at me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever laughed at a joke I didn't understand.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever walked into the wrong room with complete confidence.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever sent a message to the wrong person.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever pretended to be on a phone call to avoid talking to someone.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever practiced a conversation in my head before actually having it.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever searched online for something incredibly obvious.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever blamed someone else for something I actually did.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever laughed at the worst possible moment.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever tried to look cool and made the situation dramatically worse.",
        type: "vote",
        game: "never-have-i-ever",
        category: "funny",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DEEP — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Never have I ever felt genuinely proud of myself for something nobody else noticed.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever changed my opinion about someone after getting to know them better.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever forgiven someone without telling them.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever hidden how I really felt because I didn't want to disappoint someone.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever stayed in a situation longer than I should have because I was afraid of change.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever wished I could apologize to someone but never got the chance.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever let fear stop me from pursuing something I genuinely wanted.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Never have I ever realized too late that I had taken someone important for granted.",
        type: "vote",
        game: "never-have-i-ever",
        category: "deep",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       DATING — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Never have I ever had a crush on someone I saw regularly.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever checked someone's social media because I liked them.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever rehearsed what I was going to say before approaching someone I liked.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever developed feelings for someone I originally considered just a friend.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever gone on a date even though I already knew I wasn't interested.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever pretended not to care about someone when I actually cared a lot.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever fallen for someone I knew wasn't good for me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever gone back to someone I knew I should have left behind.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },

    {
        text: "Never have I ever stayed in a relationship because I was afraid of being alone.",
        type: "vote",
        game: "never-have-i-ever",
        category: "dating",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       SPICY — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Never have I ever flirted with someone just because I enjoyed the attention.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever tried to make someone jealous.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever had a crush on someone I probably shouldn't have.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever sent a flirty message and immediately regretted it.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever flirted with someone I knew was already interested in someone else.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever intentionally dressed to get someone's attention.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever had undeniable chemistry with someone I barely knew.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever hidden a crush from my friends.",
        type: "vote",
        game: "never-have-i-ever",
        category: "spicy",
        ageRating: "general",
        intensity: 5,
        active: true
    },


    /* -----------------------------------------
       18+ — LEVEL 1–5
    ----------------------------------------- */

    {
        text: "Never have I ever had a romantic fantasy about someone I know.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever been attracted to someone purely because of their confidence.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 1,
        active: true
    },

    {
        text: "Never have I ever flirted with someone knowing there was strong chemistry between us.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever had a romantic experience that completely surprised me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 2,
        active: true
    },

    {
        text: "Never have I ever sent a suggestive message and immediately wondered whether I should have.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever kept a romantic or intimate secret from someone close to me.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 3,
        active: true
    },

    {
        text: "Never have I ever been attracted to someone I knew was completely off-limits.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever had chemistry with someone that made it difficult to think clearly.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 4,
        active: true
    },

    {
        text: "Never have I ever tried something intimate mainly because I was curious about it.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    {
        text: "Never have I ever kept thinking about an intimate experience long after it happened.",
        type: "vote",
        game: "never-have-i-ever",
        category: "18+",
        ageRating: "18+",
        intensity: 5,
        active: true
    },

    /* =========================================
   MOST LIKELY TO
========================================= */

// GENERAL — LEVEL 1
{
    text: "Who is most likely to fall asleep during a movie?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to forget where they put their phone?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to arrive late to a party?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 1
},

// GENERAL — LEVEL 2
{
    text: "Who is most likely to become friends with a complete stranger?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to plan the next group hangout?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to remember everyone's birthday?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 2
},

// GENERAL — LEVEL 3
{
    text: "Who is most likely to move to another country someday?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to start their own business?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to become famous?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 3
},

// GENERAL — LEVEL 4
{
    text: "Who is most likely to make a life-changing decision on impulse?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to disappear for a year and come back with an unbelievable story?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to completely change their career?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 4
},

// GENERAL — LEVEL 5
{
    text: "Who is most likely to leave everything behind and start over somewhere new?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to become the most successful person in this group?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to do something nobody here would expect?",
    type: "vote",
    game: "most-likely-to",
    category: "general",
    ageRating: "general",
    intensity: 5
},

// FUNNY — LEVEL 1
{
    text: "Who is most likely to laugh at their own joke before finishing it?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to walk into a room and forget why they came?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to send a message to the wrong person?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 1
},

// FUNNY — LEVEL 2
{
    text: "Who is most likely to trip over absolutely nothing?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to practice an argument in the shower?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to accidentally like an old post while stalking someone?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 2
},

// FUNNY — LEVEL 3
{
    text: "Who is most likely to survive the shortest time in a zombie apocalypse?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to become a meme without realizing it?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to lie about being five minutes away when they have not even left?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 3
},

// FUNNY — LEVEL 4
{
    text: "Who is most likely to get kicked out of a fancy event for doing something ridiculous?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to accidentally become the main character of a party?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to make a terrible decision and somehow make it work?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 4
},

// FUNNY — LEVEL 5
{
    text: "Who is most likely to go viral for the most embarrassing reason?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to accidentally start a completely unnecessary argument?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to become famous for doing something completely ridiculous?",
    type: "vote",
    game: "most-likely-to",
    category: "funny",
    ageRating: "general",
    intensity: 5
},

// DEEP — LEVEL 1
{
    text: "Who is most likely to give the best advice?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to keep a friend's secret?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to notice when someone is having a bad day?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 1
},

// DEEP — LEVEL 2
{
    text: "Who is most likely to forgive someone after an argument?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to put their friends before themselves?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to remember something meaningful someone said years ago?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 2
},

// DEEP — LEVEL 3
{
    text: "Who is most likely to completely reinvent themselves after a difficult experience?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to follow their heart even when it makes no sense?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to take the biggest risk for something they believe in?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 3
},

// DEEP — LEVEL 4
{
    text: "Who is most likely to hide their problems while helping everyone else with theirs?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to choose happiness over money?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to walk away from something they love because they know it is unhealthy?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 4
},

// DEEP — LEVEL 5
{
    text: "Who is most likely to make a major sacrifice for someone they love?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to completely change their life after one powerful realization?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to choose what is right over what is easy?",
    type: "vote",
    game: "most-likely-to",
    category: "deep",
    ageRating: "general",
    intensity: 5
},

// DATING — LEVEL 1
{
    text: "Who is most likely to have a crush and never tell anyone?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to get shy around someone they like?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to make the first move?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 1
},

// DATING — LEVEL 2
{
    text: "Who is most likely to fall for someone they initially disliked?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to send a risky first message?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to catch feelings first?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 2
},

// DATING — LEVEL 3
{
    text: "Who is most likely to fall for their best friend?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to stay in a relationship longer than they should?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to reconnect with an ex?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 3
},

// DATING — LEVEL 4
{
    text: "Who is most likely to date someone completely unexpected?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to secretly like someone in this group?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to fall for someone they were supposed to keep things casual with?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 4
},

// DATING — LEVEL 5
{
    text: "Who is most likely to risk a friendship for a romantic relationship?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to get back together with someone they swore they were done with?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to develop feelings for someone they definitely should not date?",
    type: "vote",
    game: "most-likely-to",
    category: "dating",
    ageRating: "general",
    intensity: 5
},

// SPICY — LEVEL 1
{
    text: "Who is most likely to flirt with someone just for fun?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to have the smoothest pickup line?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is most likely to make eye contact with their crush across the room?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},

// SPICY — LEVEL 2
{
    text: "Who is most likely to flirt with someone they just met?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to have a secret admirer?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Who is most likely to send a flirty message late at night?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},

// SPICY — LEVEL 3
{
    text: "Who is most likely to kiss someone on a first date?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to have chemistry with someone they just met?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Who is most likely to flirt with someone they know is trouble?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},

// SPICY — LEVEL 4
{
    text: "Who is most likely to make the first move when the chemistry is obvious?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to have a secret romantic history nobody knows about?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Who is most likely to flirt with someone they probably should not?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},

// SPICY — LEVEL 5
{
    text: "Who is most likely to turn a harmless conversation into obvious flirting?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to have the most unexpected romantic story?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Who is most likely to leave a party with a new romantic interest?",
    type: "vote",
    game: "most-likely-to",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},

// 18+ — LEVEL 1
{
    text: "Who is most likely to have the most adventurous dating life?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "Who is most likely to have a private side nobody in this group knows about?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "Who is most likely to keep their dating life completely private?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},

// 18+ — LEVEL 2
{
    text: "Who is most likely to have dated someone they met unexpectedly?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "Who is most likely to have a secret dating app story?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "Who is most likely to go on a date without telling their friends?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},

// 18+ — LEVEL 3
{
    text: "Who is most likely to have kissed someone they barely knew?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "Who is most likely to have a secret romantic connection?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "Who is most likely to keep seeing someone even after saying it was casual?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},

// 18+ — LEVEL 4
{
    text: "Who is most likely to have a secret crush they would never admit publicly?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "Who is most likely to have a romantic story they would never tell their parents?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "Who is most likely to get into a complicated relationship situation?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},

// 18+ — LEVEL 5
{
    text: "Who is most likely to have the wildest dating story in this group?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "Who is most likely to surprise everyone with their romantic history?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "Who is most likely to do something romantically unexpected on a night out?",
    type: "vote",
    game: "most-likely-to",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},

    /* =========================================
   HOT SEAT
========================================= */

// GENERAL — LEVEL 1
{
    text: "What is one food you could eat every week?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is your favorite way to spend a free afternoon?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is one thing you are surprisingly good at?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 1
},

// GENERAL — LEVEL 2
{
    text: "What is something you have always wanted to learn?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is the most spontaneous thing you have ever done?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is one place you would love to visit?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 2
},

// GENERAL — LEVEL 3
{
    text: "What is one decision that changed your life?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is something people often misunderstand about you?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is one goal you seriously want to accomplish?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 3
},

// GENERAL — LEVEL 4
{
    text: "What is a decision you would make differently if you had another chance?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is something you are currently trying to change about yourself?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is one dream you have never told most people about?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 4
},

// GENERAL — LEVEL 5
{
    text: "What is one thing you are afraid you might regret not doing?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is the biggest risk you would take for your future?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is something about your life you rarely talk about?",
    type: "truth",
    game: "hot-seat",
    category: "general",
    ageRating: "general",
    intensity: 5
},

// FUNNY — LEVEL 1
{
    text: "What is the weirdest thing you believed as a child?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is your most embarrassing everyday habit?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is the strangest food combination you actually enjoy?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 1
},

// FUNNY — LEVEL 2
{
    text: "What is the funniest excuse you have ever used?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is the most awkward thing you have done in public?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is the weirdest nickname you have ever had?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 2
},

// FUNNY — LEVEL 3
{
    text: "What is the most embarrassing message you have ever sent?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is the funniest misunderstanding you have ever been involved in?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is the dumbest reason you have ever been late?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 3
},

// FUNNY — LEVEL 4
{
    text: "What is the most embarrassing thing someone has caught you doing?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is a ridiculous lie you told that somehow worked?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is the funniest thing you have done because you thought nobody was watching?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 4
},

// FUNNY — LEVEL 5
{
    text: "What is your most embarrassing story that your friends still remember?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is the most ridiculous thing you have done to impress someone?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is one embarrassing thing you would never want recorded?",
    type: "truth",
    game: "hot-seat",
    category: "funny",
    ageRating: "general",
    intensity: 5
},

// DEEP — LEVEL 1
{
    text: "What is something that always makes you feel better?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Who is someone you really appreciate?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is one quality you value most in a friend?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 1
},

// DEEP — LEVEL 2
{
    text: "What is something you wish more people understood about you?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is one lesson life has taught you recently?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is something you are genuinely proud of?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 2
},

// DEEP — LEVEL 3
{
    text: "What is something you have outgrown?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is a mistake that taught you an important lesson?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is something you wish you had handled differently?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 3
},

// DEEP — LEVEL 4
{
    text: "What is one fear that has influenced your decisions?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "When was the last time you felt truly understood?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is something you are still learning to accept about yourself?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 4
},

// DEEP — LEVEL 5
{
    text: "What is a part of yourself you rarely let people see?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is something you are afraid to admit even to yourself?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is the hardest truth you have had to accept?",
    type: "truth",
    game: "hot-seat",
    category: "deep",
    ageRating: "general",
    intensity: 5
},

// DATING — LEVEL 1
{
    text: "What is your biggest green flag in someone you are dating?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is your favorite kind of first date?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is one thing that instantly makes someone attractive to you?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 1
},

// DATING — LEVEL 2
{
    text: "Have you ever liked someone who did not know you liked them?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is your biggest dating red flag?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Have you ever pretended not to like someone when you actually did?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 2
},

// DATING — LEVEL 3
{
    text: "What is the biggest mistake you have made while dating?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Have you ever caught feelings when you planned to keep things casual?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is something you would never tolerate in a relationship?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 3
},

// DATING — LEVEL 4
{
    text: "Have you ever fallen for someone you knew was a bad idea?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Have you ever checked someone's social media because you were jealous?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is the closest you have come to confessing feelings and backing out?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 4
},

// DATING — LEVEL 5
{
    text: "What is something about your romantic life you would never post online?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Have you ever stayed in a relationship longer than you knew you should?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is the most complicated romantic situation you have experienced?",
    type: "truth",
    game: "hot-seat",
    category: "dating",
    ageRating: "general",
    intensity: 5
},

// SPICY — LEVEL 1
{
    text: "What kind of flirting works on you every time?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is your favorite kind of romantic attention?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "What is the most attractive personality trait someone can have?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},

// SPICY — LEVEL 2
{
    text: "Have you ever flirted with someone just to see if they would flirt back?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "What is your favorite type of romantic compliment?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Have you ever had obvious chemistry with someone you barely knew?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},

// SPICY — LEVEL 3
{
    text: "Have you ever kissed someone when you did not expect to?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "What is the boldest move you have made on someone you liked?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Have you ever developed feelings for someone you were only supposed to flirt with?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},

// SPICY — LEVEL 4
{
    text: "What is the most daring thing you have done because you were attracted to someone?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Have you ever had a crush on someone you absolutely should not have?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "What is one romantic secret you have never told your friends?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},

// SPICY — LEVEL 5
{
    text: "What is the boldest romantic decision you have ever made?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Have you ever wanted someone you knew you should stay away from?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "What is one romantic experience you would probably never tell your family about?",
    type: "truth",
    game: "hot-seat",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},

// 18+ — LEVEL 1
{
    text: "What is your biggest turn-on in a romantic situation?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "What kind of romantic chemistry do you find hardest to resist?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "What is one adult dating experience you would like to have someday?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},

// 18+ — LEVEL 2
{
    text: "Have you ever had a crush on someone you knew was off-limits?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "Have you ever gone on a date mainly because you were physically attracted to the person?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "What is the most attractive thing someone can do without saying a word?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},

// 18+ — LEVEL 3
{
    text: "Have you ever had a romantic connection that was difficult to keep secret?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "What is the boldest thing you have done because you were strongly attracted to someone?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "Have you ever been attracted to someone you knew was completely wrong for you?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},

// 18+ — LEVEL 4
{
    text: "What is a romantic fantasy you are comfortable talking about?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "Have you ever kept seeing someone even though you knew it was complicated?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "What is something you have done in a relationship that surprised even you?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},

// 18+ — LEVEL 5
{
    text: "What is the most unexpected romantic experience you have had?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "What is one intimate experience you would consider adventurous but still comfortable discussing?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "What is a private side of your romantic life that most people would never guess?",
    type: "truth",
    game: "hot-seat",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},

   /* =========================================
   RAPID FIRE
========================================= */

// GENERAL — LEVEL 1
{
    text: "Name three things you cannot live without.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three countries you want to visit.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three foods you love.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 1
},

// GENERAL — LEVEL 2
{
    text: "Name five things you would take to a deserted island.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three things on your bucket list.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three skills you wish you had.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 2
},

// GENERAL — LEVEL 3
{
    text: "Name five things you would buy if you suddenly became rich.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name four places you would move to if you could live anywhere.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name five things you are grateful for.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 3
},

// GENERAL — LEVEL 4
{
    text: "Name five goals you want to accomplish before you turn 30.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name five things you would change about your daily routine.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name five things you would do if you had a completely free year.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 4
},

// GENERAL — LEVEL 5
{
    text: "Name five things you would risk everything to achieve.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five major changes you would make if you could restart your life.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five things you would do if you knew you could not fail.",
    type: "challenge",
    game: "rapid-fire",
    category: "general",
    ageRating: "general",
    intensity: 5
},

// FUNNY — LEVEL 1
{
    text: "Name three ridiculous excuses for being late.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three foods you would never eat.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three things that instantly annoy you.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 1
},

// FUNNY — LEVEL 2
{
    text: "Name five embarrassing things someone could do on a first date.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three terrible superpowers.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name five things you would never want your parents to see on your phone.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 2
},

// FUNNY — LEVEL 3
{
    text: "Name five ways someone could embarrass themselves at a party.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name five terrible excuses for not replying to a message.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name five things you would do if you woke up famous tomorrow.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 3
},

// FUNNY — LEVEL 4
{
    text: "Name five ways to ruin a perfectly good date.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name five ridiculous reasons someone could get kicked out of a party.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name five things you would do if you had to become a completely different person for one day.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 4
},

// FUNNY — LEVEL 5
{
    text: "Name five things you would do if you became invisible for 24 hours.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five ways you could become famous for something completely ridiculous.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five things you would do if everyone in this room had to obey you for one hour.",
    type: "challenge",
    game: "rapid-fire",
    category: "funny",
    ageRating: "general",
    intensity: 5
},

// DEEP — LEVEL 1
{
    text: "Name three people who have positively influenced your life.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three things that make you genuinely happy.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three qualities you value in people.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 1
},

// DEEP — LEVEL 2
{
    text: "Name three lessons you have learned from difficult experiences.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three things you are proud of yourself for.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three things you want to improve about yourself.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 2
},

// DEEP — LEVEL 3
{
    text: "Name three decisions that changed the direction of your life.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three things you would tell your younger self.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three things you are currently working toward.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 3
},

// DEEP — LEVEL 4
{
    text: "Name three fears you have overcome.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three things you would change about your past if you could.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three truths about yourself that you have only recently accepted.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 4
},

// DEEP — LEVEL 5
{
    text: "Name three things you are afraid to lose.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name three things you would change if you knew you only had one year to live.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name three things you have never told most people.",
    type: "challenge",
    game: "rapid-fire",
    category: "deep",
    ageRating: "general",
    intensity: 5
},

// DATING — LEVEL 1
{
    text: "Name three qualities you look for in someone you date.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three things that make a great first date.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three dating green flags.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 1
},

// DATING — LEVEL 2
{
    text: "Name three things that can instantly ruin a date.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three ways to tell someone is interested in you.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three reasons someone might lose interest after a date.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 2
},

// DATING — LEVEL 3
{
    text: "Name three signs that someone is catching feelings.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three reasons people stay in relationships they should leave.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three things you would never tolerate in a relationship.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 3
},

// DATING — LEVEL 4
{
    text: "Name three reasons someone might fall for the wrong person.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three things that can make a friendship turn romantic.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three reasons someone might go back to an ex.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 4
},

// DATING — LEVEL 5
{
    text: "Name five reasons someone might risk a friendship for love.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five signs that a relationship is becoming complicated.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name five reasons someone might fall for a person they should avoid.",
    type: "challenge",
    game: "rapid-fire",
    category: "dating",
    ageRating: "general",
    intensity: 5
},

// SPICY — LEVEL 1
{
    text: "Name three things that make someone instantly attractive.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three flirting techniques that actually work.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name three things that create romantic chemistry.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},

// SPICY — LEVEL 2
{
    text: "Name three things that can make a date unexpectedly exciting.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three ways someone can show they are flirting.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Name three things you find attractive that have nothing to do with appearance.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},

// SPICY — LEVEL 3
{
    text: "Name three places where an unexpected romantic moment could happen.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three signs that two people have chemistry.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Name three bold moves someone could make on a date.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},

// SPICY — LEVEL 4
{
    text: "Name three reasons someone might secretly flirt with a friend.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three things that can make a casual connection complicated.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Name three situations where attraction could completely change a friendship.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},

// SPICY — LEVEL 5
{
    text: "Name three things that could turn a harmless night into a memorable one.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name three reasons someone might develop unexpected feelings.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Name three things that could make a romantic situation seriously complicated.",
    type: "challenge",
    game: "rapid-fire",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},

    /* =========================================
   TWO TRUTHS & A LIE
========================================= */

// GENERAL — LEVEL 1
{
    text: "Share two true facts about your favorite foods and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true facts about places you have visited and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true facts about your hobbies and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 1
},

// GENERAL — LEVEL 2
{
    text: "Share two true facts about your childhood and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true facts about your biggest achievements and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true facts about your travel experiences and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 2
},

// GENERAL — LEVEL 3
{
    text: "Share two true facts about something adventurous you have done and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true facts about a difficult experience you overcame and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true facts about your future plans and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 3
},

// GENERAL — LEVEL 4
{
    text: "Share two true facts about something unexpected you have done and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true facts about a major decision you have made and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true facts about something most people would never guess about you and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 4
},

// GENERAL — LEVEL 5
{
    text: "Share two true facts about a life-changing experience and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true facts about something you have always wanted to do and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true facts about a secret ambition and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "general",
    ageRating: "general",
    intensity: 5
},

// FUNNY — LEVEL 1
{
    text: "Share two true funny habits you have and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true embarrassing childhood stories and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true facts about weird foods you have tried and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 1
},

// FUNNY — LEVEL 2
{
    text: "Share two true embarrassing moments and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true ridiculous excuses you have used and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true strange things you believed as a child and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 2
},

// FUNNY — LEVEL 3
{
    text: "Share two true stories about doing something embarrassing in public and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true stories about getting caught doing something silly and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true stories about awkward conversations and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 3
},

// FUNNY — LEVEL 4
{
    text: "Share two true stories about something ridiculous you did to impress someone and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true stories about getting into trouble and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true things that would make your friends laugh and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 4
},

// FUNNY — LEVEL 5
{
    text: "Share two true stories you would be embarrassed to have on video and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true stories about your most chaotic night and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true things you have done that nobody here would expect and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "funny",
    ageRating: "general",
    intensity: 5
},

// DEEP — LEVEL 1
{
    text: "Share two true things that make you happy and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true things you value in friendships and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true things you are grateful for and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 1
},

// DEEP — LEVEL 2
{
    text: "Share two true lessons life has taught you and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true things you are proud of and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true things you want to improve about yourself and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 2
},

// DEEP — LEVEL 3
{
    text: "Share two true experiences that changed how you see life and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true things you learned from a difficult experience and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true things you want your future self to remember and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 3
},

// DEEP — LEVEL 4
{
    text: "Share two true fears you have faced and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true things you have struggled to accept and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true decisions you sometimes question and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 4
},

// DEEP — LEVEL 5
{
    text: "Share two true things you rarely tell people about yourself and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true regrets or lessons from your past and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true things you are afraid to admit and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "deep",
    ageRating: "general",
    intensity: 5
},

// DATING — LEVEL 1
{
    text: "Share two true things you like about dating and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true dating green flags you look for and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true things about your ideal date and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 1
},

// DATING — LEVEL 2
{
    text: "Share two true things that can make you lose interest in someone and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true dating experiences and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true things you find annoying in someone and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 2
},

// DATING — LEVEL 3
{
    text: "Share two true stories about catching feelings and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true things about relationships you have learned and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true things you would never tolerate in a relationship and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 3
},

// DATING — LEVEL 4
{
    text: "Share two true stories about falling for the wrong person and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true romantic mistakes and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true things about someone you once had strong feelings for and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 4
},

// DATING — LEVEL 5
{
    text: "Share two true stories about a complicated romantic situation and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true things about a relationship decision you regret and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true things about someone you should never have fallen for and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "dating",
    ageRating: "general",
    intensity: 5
},

// SPICY — LEVEL 1
{
    text: "Share two true things you find attractive in someone and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true things about your flirting style and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Share two true things about your idea of romantic chemistry and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},

// SPICY — LEVEL 2
{
    text: "Share two true flirting experiences and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true things that make someone instantly attractive to you and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Share two true stories about someone making a bold move on you and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},

// SPICY — LEVEL 3
{
    text: "Share two true stories about unexpected chemistry and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true things about a bold romantic move you have made and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Share two true stories about flirting with someone unexpected and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},

// SPICY — LEVEL 4
{
    text: "Share two true stories about a complicated attraction and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true things about someone you secretly found attractive and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Share two true romantic situations that became unexpectedly intense and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},

// SPICY — LEVEL 5
{
    text: "Share two true stories about your boldest romantic decisions and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true things about a romantic situation you never expected and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Share two true stories about unexpected attraction and one lie.",
    type: "challenge",
    game: "two-truths-and-a-lie",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},

    /* =========================================
   RANDOM CHALLENGE
========================================= */

// GENERAL — LEVEL 1
{
    text: "Do your best impression of someone in this group.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Name five things in the room within five seconds.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 1
},
{
    text: "Give the person next to you a genuine compliment.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 1
},

// GENERAL — LEVEL 2
{
    text: "Tell the group one interesting fact about yourself.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Describe your dream vacation in exactly ten words.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 2
},
{
    text: "Act out your morning routine without speaking.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 2
},

// GENERAL — LEVEL 3
{
    text: "Tell the group about one goal you are currently working toward.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Choose someone and give them a compliment without mentioning their appearance.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 3
},
{
    text: "Tell a short story about one of your most memorable experiences.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 3
},

// GENERAL — LEVEL 4
{
    text: "Let the group choose a harmless nickname for you for the next three rounds.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Give a thirty-second motivational speech about something completely random.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 4
},
{
    text: "Tell the group something you have always wanted to try.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 4
},

// GENERAL — LEVEL 5
{
    text: "Let another player choose a harmless challenge for you.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Tell the group one thing you would change about your life if you had the chance.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 5
},
{
    text: "Give a one-minute speech convincing everyone to try something you love.",
    type: "challenge",
    game: "random-challenge",
    category: "general",
    ageRating: "general",
    intensity: 5
},

// FUNNY — LEVEL 1
{
    text: "Make your funniest face and hold it for five seconds.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Say your name like you are announcing yourself at a championship.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 1
},
{
    text: "Walk across the room like you are on a runway.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 1
},

// FUNNY — LEVEL 2
{
    text: "Pretend to be a news reporter covering what is happening in this room.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Talk in a dramatic movie-trailer voice for the next thirty seconds.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 2
},
{
    text: "Try to make everyone laugh without touching anyone.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 2
},

// FUNNY — LEVEL 3
{
    text: "Act like you are a celebrity being interviewed about your imaginary new movie.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Give the person opposite you an absurd but convincing compliment.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 3
},
{
    text: "Pretend to sell a random object in the room like it costs one million naira.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 3
},

// FUNNY — LEVEL 4
{
    text: "Act out a dramatic breakup with an imaginary person.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Create a ridiculous advertisement for the person sitting closest to you.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 4
},
{
    text: "Perform an imaginary acceptance speech for winning the world's strangest award.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 4
},

// FUNNY — LEVEL 5
{
    text: "Let the group choose a character you must act like for the next two rounds.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Perform a thirty-second dramatic monologue about losing something completely ordinary.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 5
},
{
    text: "Make up a ridiculous conspiracy theory about something in this room.",
    type: "challenge",
    game: "random-challenge",
    category: "funny",
    ageRating: "general",
    intensity: 5
},

// SPICY — LEVEL 1
{
    text: "Give someone in the group your best confident smile.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Give someone a playful compliment.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},
{
    text: "Hold eye contact with another player for five seconds.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 1
},

// SPICY — LEVEL 2
{
    text: "Give your best flirty introduction as if you just met someone at a party.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Give someone in the group a compliment about their personality.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},
{
    text: "Describe your ideal date in fifteen seconds.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 2
},

// SPICY — LEVEL 3
{
    text: "Give your best pickup line to another player.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Choose someone and give them your most charming compliment.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},
{
    text: "Describe your dream date without using the words love, romance, or relationship.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 3
},

// SPICY — LEVEL 4
{
    text: "Choose someone and tell them what makes their personality attractive.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Deliver a dramatic thirty-second confession to your imaginary crush.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},
{
    text: "Give someone your most confident attempt at a romantic introduction.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 4
},

// SPICY — LEVEL 5
{
    text: "Let another player choose who receives your most convincing pickup line.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Give a thirty-second speech about why someone would make an amazing date.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},
{
    text: "Choose someone and give them your boldest harmless compliment.",
    type: "challenge",
    game: "random-challenge",
    category: "spicy",
    ageRating: "general",
    intensity: 5
},

// 18+ — LEVEL 1
{
    text: "Describe your idea of an ideal adult date.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "Give a confident compliment to someone in the group.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},
{
    text: "Describe three qualities you find especially attractive in an adult partner.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 1
},

// 18+ — LEVEL 2
{
    text: "Give your best flirty introduction to another player.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "Describe your idea of a memorable romantic night.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},
{
    text: "Give someone a compliment that focuses on their personality and charm.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 2
},

// 18+ — LEVEL 3
{
    text: "Give your best pickup line to someone in the group.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "Describe your most memorable romantic date without naming the person.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},
{
    text: "Give a thirty-second speech explaining what makes someone irresistible to you.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 3
},

// 18+ — LEVEL 4
{
    text: "Give a playful romantic compliment to another consenting player.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "Describe a romantic scenario you would consider adventurous but comfortable.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},
{
    text: "Give your most convincing thirty-second flirtation without touching anyone.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 4
},

// 18+ — LEVEL 5
{
    text: "Give your boldest harmless pickup line to someone who agrees to receive it.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "Describe your wildest romantic date idea without getting explicit.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 5
},
{
    text: "Give a thirty-second speech about your ideal adult relationship.",
    type: "challenge",
    game: "random-challenge",
    category: "18+",
    ageRating: "18+",
    intensity: 5
}

];


/* =========================================
   VALIDATE CONTENT
========================================= */

function validateContent(content) {

    const errors = [];
    const duplicateTracker = new Set();

    content.forEach((item, index) => {

        const position = `Item ${index + 1}`;

        /* -----------------------------------------
           REQUIRED FIELDS
        ----------------------------------------- */

        if (!item.text || typeof item.text !== "string") {

            errors.push(
                `${position}: text is required.`
            );

        }

        if (!item.type) {

            errors.push(
                `${position}: type is required.`
            );

        }

        if (!item.game) {

            errors.push(
                `${position}: game is required.`
            );

        }

        if (!item.category) {

            errors.push(
                `${position}: category is required.`
            );

        }


        /* -----------------------------------------
           GAME VALIDATION
        ----------------------------------------- */

        const gameRule = gameRules[item.game];

        if (!gameRule) {

            errors.push(
                `${position}: unknown game "${item.game}".`
            );

            return;

        }


        /* -----------------------------------------
           TYPE VALIDATION
        ----------------------------------------- */

        if (!gameRule.types.includes(item.type)) {

            errors.push(
                `${position}: type "${item.type}" is not valid for ${item.game}.`
            );

        }


        /* -----------------------------------------
           CATEGORY VALIDATION
        ----------------------------------------- */

        if (!gameRule.categories.includes(item.category)) {

            errors.push(
                `${position}: category "${item.category}" is not supported by ${item.game}.`
            );

        }


        /* -----------------------------------------
           18+ VALIDATION
        ----------------------------------------- */

        if (
            item.category === "18+" &&
            item.ageRating !== "18+"
        ) {

            errors.push(
                `${position}: 18+ category must have 18+ ageRating.`
            );

        }

        if (
            item.category !== "18+" &&
            item.ageRating === "18+"
        ) {

            errors.push(
                `${position}: 18+ ageRating requires 18+ category.`
            );

        }

        if (
            item.category === "18+" &&
            !gameRule.allows18Plus
        ) {

            errors.push(
                `${position}: ${item.game} does not support 18+ content.`
            );

        }


        /* -----------------------------------------
           AGE RATING VALIDATION
        ----------------------------------------- */

        if (
            item.ageRating !== "general" &&
            item.ageRating !== "18+"
        ) {

            errors.push(
                `${position}: invalid ageRating "${item.ageRating}".`
            );

        }


        /* -----------------------------------------
           INTENSITY VALIDATION
        ----------------------------------------- */

        if (
            typeof item.intensity !== "number" ||
            item.intensity < 1 ||
            item.intensity > 5
        ) {

            errors.push(
                `${position}: intensity must be a number from 1 to 5.`
            );

        }


        /* -----------------------------------------
           DUPLICATE VALIDATION
        ----------------------------------------- */

        if (typeof item.text === "string") {

            const normalizedText =
                item.text.trim().toLowerCase();

            const duplicateKey =
                `${item.game}|${normalizedText}`;

           if (duplicateTracker.has(duplicateKey)) {
    errors.push(
        `${position}: duplicate content detected.`
    );

    console.error(
        `DUPLICATE FOUND: ${position}`
    );

    console.error(
        `Game: ${item.game}`
    );

    console.error(
        `Text: ${item.text}`
    );
}

duplicateTracker.add(duplicateKey);
        }

    });


    return errors;

}


/* =========================================
   DISPLAY CONTENT SUMMARY
========================================= */

function displaySummary(content) {

    const gameCounts = {};
    const categoryCounts = {};
    const intensityCounts = {};

    content.forEach(item => {

        gameCounts[item.game] =
            (gameCounts[item.game] || 0) + 1;

        categoryCounts[item.category] =
            (categoryCounts[item.category] || 0) + 1;

        intensityCounts[item.intensity] =
            (intensityCounts[item.intensity] || 0) + 1;

    });


    console.log("");
    console.log("=========================================");
    console.log("DAH! CONTENT SEED SUMMARY");
    console.log("=========================================");

    console.log("");
    console.log("TOTAL CONTENT:", content.length);

    console.log("");
    console.log("BY GAME:");

    Object.entries(gameCounts).forEach(
        ([game, count]) => {

            console.log(
                `  ${game}: ${count}`
            );

        }
    );


    console.log("");
    console.log("BY CATEGORY:");

    Object.entries(categoryCounts).forEach(
        ([category, count]) => {

            console.log(
                `  ${category}: ${count}`
            );

        }
    );


    console.log("");
    console.log("BY INTENSITY:");

    Object.entries(intensityCounts)
        .sort(([a], [b]) => Number(a) - Number(b))
        .forEach(([intensity, count]) => {

            console.log(
                `  Level ${intensity}: ${count}`
            );

        });


    console.log("");
    console.log("=========================================");
}


/* =========================================
   SEED DATABASE
========================================= */

const seedDatabase = async () => {

    try {

        console.log("");
        console.log("=========================================");
        console.log("DAH! CONTENT SEED");
        console.log("=========================================");


        /* -----------------------------------------
           VALIDATE BEFORE CONNECTING
        ----------------------------------------- */

        console.log("");
        console.log("Validating content...");

        const validationErrors =
            validateContent(gameContent);

        if (validationErrors.length > 0) {

            console.error("");
            console.error(
                "CONTENT VALIDATION FAILED"
            );

            validationErrors.forEach(error => {

                console.error(`- ${error}`);

            });

            console.error("");
            console.error(
                "Database was NOT modified."
            );

            process.exitCode = 1;

            return;

        }


        console.log(
            "✓ Content validation passed"
        );


        /* -----------------------------------------
           CONNECT TO DATABASE
        ----------------------------------------- */

        await mongoose.connect(
            process.env.MONGODB_URI
        );

        console.log(
            "✓ MongoDB connected successfully"
        );


        /* -----------------------------------------
           CLEAR EXISTING CONTENT
        ----------------------------------------- */

        console.log("");
        console.log(
            "Clearing existing game content..."
        );

        await GameContent.deleteMany({});

        console.log(
            "✓ Existing game content cleared"
        );


        /* -----------------------------------------
           INSERT CONTENT
        ----------------------------------------- */

        await GameContent.insertMany(
            gameContent
        );

        console.log(
            `✓ ${gameContent.length} content items inserted`
        );


        /* -----------------------------------------
           DISPLAY SUMMARY
        ----------------------------------------- */

        displaySummary(gameContent);


        console.log("");
        console.log(
            "✓ DAH! CONTENT SEED COMPLETED SUCCESSFULLY"
        );

    } catch (error) {

        console.error("");
        console.error(
            "Seeding failed:"
        );

        console.error(
            error.message
        );

        process.exitCode = 1;

    } finally {

        if (mongoose.connection.readyState !== 0) {

            await mongoose.connection.close();

            console.log(
                "Database connection closed"
            );

        }

    }

};


/* =========================================
   RUN SEED
========================================= */

seedDatabase();