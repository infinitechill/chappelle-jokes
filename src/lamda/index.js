'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;
var SKILL_NAME = "dave jokes";
var GET_JOKE_MESSAGE = "Here's your joke: ";
var HELP_MESSAGE = "You can say tell me a dave joke, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    "Hey, baby! Stop selling weed, all right, you've got your whole life ahead of you. He goes, Fuck you, nigga. I got kids to feed!",
    "All I'll say about Elian is thank God he's Cuban. 'Cause if he was Haitian you'd've never heard about his ass. If Elian Gonzales was Elian Mumumbo from Haiti, they would've pushed that little rubber tube right back in the water. Sorry little fella, all full. Good luck!",
    "They got a character on there named Oscar, they treat this guy like shit the entire show. They judge him right in his face, Oscar you are so mean! Isn't he kids?, Yeah Oscar! Your a grouch!, its like BITCH! I LIVE IN A FUCKING TRASHCAN!",
    "Dave! Relax! Close your buttcheeks!",
    "Wow. ... That's a good question. ... Is `I don't know' an acceptable answer?",
    "I think every group of black guys should have at least one white guy in it.",
    "The language you are about to hear... is disturbing.",
    "The old baby on the corner trick a, not gonna fall for that shit.",
    "What did the five fingers say to the face? SLAP!!!!",
    "Have you ever watched, like, a cartoon that you used to watch when you were little, as an adult? I was sittin' there with my nephew. I turned it on Sesame Street. And I was, like, Oh, good. Sesame Street. Now he'll learn how to count and spell. But now I'm watching it as an adult and I realize that Sesame Street teaches kids other things. It teaches kids how to judge people and label people. That's right. They got this one character named Oscar. They treat this guy like shit the entire show. They judge him right to his face. Oscar, you are so mean. Isn't he, kids? Yeah. Oscar, you're a grouch! He's, like, Bitch, I live in a fucking trash can! I'm the poorest motherfucker on Sesame Street. Nobody's helping me. Now you wonder why your kids grow up and step over homeless people, like, Get it together, grouch. Get a job, grouch.",
    "White people do not like to talk about their political affiliations. It's a secret. You ask a white guy who's he votin' for, like, Hey, Bob, who you gonna vote for? Dave! Dave! Whoa, whoa, whoa! Take it easy. So I was fuckin' my wife in her ass, right? And let me tell you, it was something else. Yeah, yeah, but who are you gonna vote for? Dave! Dave, come on with the voting! I'm trying to tell you about fucking my wife in the ass, and you're asking me all these personal questions.",
    "Just cuz I eat Chicken and Watermelon they think that something’s wrong with me. Let me tell you somethin if you don’t like chicken and watermelon, something is wrong with you, there is something wrong with you! Where are all these people who don't like Chicken and Watermelon? I'm sick of hearing about how bad it is, it's great! I'm waiting for Chicken to approach me to do a commercial nigga, I'll do it for free Chicken! It's the least I can do.",
    "Like, see, I'd never vote for George Bush Junior, but I don't know anything about his politics. All I know about that George Bush Junior is that that guy sniffed cocaine. That's right. Now, listen, we can't have that shit in the White House. That may be fine for a mayor; but goddammit, not the White House! The stakes are too high. He'd be sellin' nuclear secrets for 20 or 30 dollars and shit."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewJokeIntent');
    },
    'GetNewJokeIntent': function () {
        var jokeArr = data;
        var jokeIndex = Math.floor(Math.random() * jokeArr.length);
        var randomJoke = jokeArr[jokeIndex];
        var speechOutput = GET_JOKE_MESSAGE + randomJoke;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomJoke)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};