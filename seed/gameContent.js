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

    {
        text: "Never have I ever pretended to be busy to avoid talking to someone.",
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
        text: "Never have I ever stayed awake all night because I was watching or playing something.",
        type: "vote",
        game: "never-have-i-ever",
        category: "general",
        ageRating: "general",
        intensity: 1,
        active: true
    },


    /* =========================================
       MOST LIKELY TO
    ========================================= */

    {
        text: "Who is most likely to become famous?",
        type: "vote",
        game: "most-likely-to",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Who is most likely to forget where they put their phone?",
        type: "vote",
        game: "most-likely-to",
        category: "funny",
        ageRating: "general",
        intensity: 1,
        active: true
    },

    {
        text: "Who is most likely to move to another country on a sudden decision?",
        type: "vote",
        game: "most-likely-to",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
    },


    /* =========================================
       HOT SEAT
    ========================================= */

    {
        text: "What is one thing you wish people understood about you?",
        type: "truth",
        game: "hot-seat",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },

    {
        text: "What is a goal you really want to achieve in the next few years?",
        type: "truth",
        game: "hot-seat",
        category: "deep",
        ageRating: "general",
        intensity: 3,
        active: true
    },


    /* =========================================
       RAPID FIRE
    ========================================= */

    {
        text: "Name three things you would take to a deserted island.",
        type: "challenge",
        game: "rapid-fire",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Name five foods you could eat every week without getting tired of them.",
        type: "challenge",
        game: "rapid-fire",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },


    /* =========================================
       TWO TRUTHS AND A LIE
    ========================================= */

    {
        text: "Tell the group three statements about yourself: two must be true and one must be a lie. Let everyone guess the lie.",
        type: "challenge",
        game: "two-truths-and-a-lie",
        category: "general",
        ageRating: "general",
        intensity: 2,
        active: true
    },


    /* =========================================
       RANDOM CHALLENGE
    ========================================= */

    {
        text: "Speak in a dramatic movie-trailer voice for the next 30 seconds.",
        type: "challenge",
        game: "random-challenge",
        category: "funny",
        ageRating: "general",
        intensity: 2,
        active: true
    },

    {
        text: "Create a ridiculous product advertisement using an object within reach.",
        type: "challenge",
        game: "random-challenge",
        category: "funny",
        ageRating: "general",
        intensity: 3,
        active: true
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