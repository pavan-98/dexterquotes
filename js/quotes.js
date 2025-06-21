function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// Updated color palette for a modern, cleaner theme
// Using Bootstrap's primary blue and a contrasting white for text when needed.
var colors = [
	'#007bff' // Primary blue
];

// If we want variations, we could add more, but for now, one primary color simplifies things.
// var secondaryColorsForText = ['#FFFFFF']; // Example if text color needs to change based on background

var quotes = [
    ["Weren't we all crazy in our sleep? What was sleep, after all, but the process by which we dumped our insanity into a dark subconscious pit and came out on the other side ready to eat cereal instead of our neighbor's children?","Dexter Morgan"],
    ["“I'm not sure what I am. I just know there's something dark in me. I hide it. I certainly don't talk about it, but it's there always, this Dark Passenger. ","Dexter Morgan"],
    ["Whatever made me the way I am left me hollow, empty inside, unable to feel. It doesn't seem like a big deal. I'm quite sure most people fake an awful lot of everyday human contact. I just fake it all. I fake it very well, and the feelings are never there","Dexter Morgan"],
	["I'm a very neat monster.","Dexter Morgan"],
	["I did not like this feeling of having feelings.","Dexter Morgan"],
	["Life's only obligation, afterall, was to be interesting.","Dexter Morgan"],
	["Anybody can be charming if they don't mind faking it, saying all the stupid, obvious, nauseating things that a conscience keeps most people from saying. Happily, I don't have a conscience. I say them.","Dexter Morgan"],
	["Really now: If you can't get me my newspaper on time, how can you expect me to refrain from killing people?","Dexter Morgan"],
	["Perhaps because I'll never be one, humans are interesting to me.","Dexter Morgan"],
	["I am unlovable...I have tried to involve myself in other people, in relationships, and even - in my sillier moments - in love. But it doesn't work. Something in me is broken or missing and sooner or later the other person catches me Acting or one of Those Nights comes along.","Dexter Morgan"],
	["Why do so many people start their messages with, It's me? Of course it is you. We all know that. But who the hell ARE you?","Dexter Morgan"],
	["I think people understand things different when they get older. It’s not a question of getting soft, or seeing things in the gray areas instead of black and white. I really believe I’m just understanding things different. Better.","Dexter Morgan"],
	["The mind picks some very bad times to take a walk doesn't it?","Dexter Morgan"],
	["It’s like, everything really is two ways, the way we all pretend it is and the way it really is","Dexter Morgan"],
	["I'm quite sure more people fake an awful lot of everyday human contact. I just fake all of it.","Dexter Morgan"],
	["Another beautiful Miami day. Mutilated corpses with a chance of afternoon showers. I got dressed and went to work.","Dexter Morgan"],
	["After a long moment I closed the freezer door. I wanted to lie down and press my cheek against the cool linoleum. Instead I reached out with my little finger and flipped the Barbie's head. It went thack thack against the door.","Dexter Morgan"],
	["And then more quiet, silence so deep it almost drowned out the roar of the night music that pounded away in my secret self.","Dexter Morgan"],
	["For the first time I could remember, I felt weak, woozy and stupid— like a human-being. Like a very small and helpless human-being.","Dexter Morgan"],
	["And here I always thought morality was useless","Dexter Morgan"],
	["Me, feeling. What a concept.","Dexter Morgan"],
	["Another dream. Another long-distance call on my phantom party line. No wonder i had steadfastly refused to have dreams for most of my life. So stupid; such pointless, obvious symbols. Totally uncontrollable anxiety soup, hateful, blatant nonsense.","Dexter Morgan"],
	["I let it ring. I wanted to breathe for a few minutes, and I could think of nothing that couldn't wait. Besides, I had paid almost $50 for an answering machine. Let it earn its keep","Dexter Morgan"],
	["Was insanity really easier to accept than unconsciousness?","Dexter Morgan"],
	["That's why I liked him, I think. Another guy pretending to be human, just like me.","Dexter Morgan"],
	["It happens; incompetence is rewarded more often than not.","Dexter Morgan"],
	["I was filled with dread at the thought my mind had skipped town and left me behind to pay the rent.","Dexter Morgan"],
	["In its own way the kiss had been an act of murder.","Dexter Morgan"],
	["It was almost enough to make me feel emotion.","Dexter Morgan"],
	["I had killed our careful relationship by driving my tongue through its heart and pushing it off a cliff.","Dexter Morgan"],
	["But what could I do? Be stupid for a while? I wasn't sure I knew how, even after so many years of careful observation.","Dexter Morgan"],
	["It was such an unexpected and genuine smile that if I only had a soul I'm sure I would have felt quite guilty.","Dexter Morgan"],
	["And I was having too much fun to stop now.","Dexter Morgan"],
	["There is a simple, logical explanation,' I said to myself. And because you never know who else is listening, I added, 'And there is nothing under the bed.'","Dexter Morgan"],
	["...she opened the door very slowly and carefully, half hiding behind it, as if badly frightened of what might be waiting for her on the other side. And considering that it was me waiting, this showed rare common sense.","Dexter Morgan"],
	["I nodded with genuine synthetic sympathy.","Dexter Morgan"],
	["Nothing else loves me, nor ever will. Not even - especially - me. I know what I am and that's not a thing to love.","Dexter Morgan"],
	["I rose to my knees, mouth dry and heart pounding, and paused to finger a rip in my beautiful Dacron bowling shirt. I pushed my fingertip through the hole and wiggled it at myself. Hello, Dexter, where are you going? Hello, Mr. Finger. I don't know, but I'm almost there. I hear my friends calling.","Dexter Morgan"],
	["I enjoyed watching good-looking idiots looking at each other. A great spectator sport.","Dexter Morgan"],
	["And so as much as I can, I care about her, dear Deborah. It's probably not love, but I would rather she were happy.","Dexter Morgan"],
	["And what did you do last night, Dexter? Oh, I played with my dolls while a friend chopped up my sister.","Dexter Morgan"],
	["...being torn apart by far too many loyalties that could not possibly live together in the same brain.","Dexter Morgan"],
	["She really did like me, the idiot.","Dexter Morgan"],
	["Now I know what it is like to feel like a total idiot.","Dexter Morgan"],
	["What, in all very seriousness, the hell was going on?","Dexter Morgan"],
	["I waved to everybody. Some of them even waved back. They knew me, had seen me go by before, always cheerful, a big hello for everybody. He was such a nice man. Very friendly. I can’t believe he did those horrible things . . .","Dexter Morgan"],
	["I was good at being charming, one of my very few vanities.","Dexter Morgan"],
	["I don't do my job to catch the bad guys. Why would I want to do that? No, I do my job to make order out of chaos.","Dexter Morgan"],
	["She looked up and ran her eyes over me,slowly, while I stood and wondered why. Had she forgotten what I looked like? But she finished with a big smile. She really did like me, the idiot.","Dexter Morgan"],
	["Dogs were always a problem. They don't like me and they quite often disapprove of what I do to their masters, especially since I don't share the good pieces.","Dexter Morgan"],
	["No blood at all. I could hear that phrase repeat itself in my head, louder each time. No sticky, hot, messy, awful blood. No splatter. NO BLOOD AT ALL. Why hadn't I thought of that?","Dexter Morgan"],
	["How bad could things be if my hair was neat?","Dexter Morgan"],
	["Or was he saying,Hi! Wanna play? And I did. Of course I did.","Dexter Morgan"],
	["In that tremendous flash of freedom, on my way to do The Thing for the first time, sanctioned by Almighty Harry, I receded, faded back into the scenery of my own dark self, whole the other me crouched and growled. I would do It at last, do what I had been created to do. And I did.","Dexter Morgan"],
	["Oh, the symphonic shriek of a thousand hiding voices, the cry of the need inside, the entity, the silent watcher, the cold quiet thing, the one that laughs, the moondancer. The me that was not me, the thing that mocked and laughed and calling with its hunger.","Dexter Morgan"],
	["I think that's nice, and if I could have feelings at all I would have them for Deb.","Dexter Morgan"],
	["I poked at the white paper bag. There was nothing left inside. Just like me: a clean crisp outside and nothing at all on the inside.","Dexter Morgan"],
	["Gimme the fucking creeps,” Doakes grumbled. I began to appreciate the man's finer qualities. Of course I gave him the fucking creeps. The only real question was why he was the only one in a room filled with cops who had the insight to get the fucking creeps from my presence.","Dexter Morgan"],
	["Every contact leaves a trace.Everything and everyone we touch is changed in some way.But the changes,they are never what we anticipate.","Dexter Morgan"],
	["Hurray—I was someone else. I was not completely crazy yet. Seriously antisocial, of course, and somewhat sporadically homicidal, nothing wrong with that. But not crazy.","Dexter Morgan"],
	["Talking to a shrink was out of the question, of course; I would frighten the poor thing to death, and he might feel honor bound to have me locked away somewhere. Certainly I could not argue with the wisdom of that idea.","Dexter Morgan"],
	["Quirky, funny, happy-go-lucky dead inside Dexter. No longer Dexter with the knife, Dexter the Avenger. Not until next time.","Dexter Morgan"],
	["This night it would happen, had to happen. Just as it had happened before. Just as it would happen again, and again.","Dexter Morgan"],
	["..the idea of sex is no idea at all. Imagine doing those things—How can you? Where's your sense of dignity?","Dexter Morgan"],
	["The more I heard it in my thoughts, the more sense it made. And beyond sense, it became a kind of seductive mantra.","Dexter Morgan"],
	["“carpe diem.” “What?” “It's Latin,” I said. “It means, complain in daylight.","Dexter Morgan"],
	["This was Miami, after all. People come home every day to find their TVs gone, their jewelry and electronics all taken away; their space violated, their possessions rifled, and their dog pregnant.","Dexter Morgan"],
	["It’s not that I have anything to hide—I’ve already hidden all of it—but","Dexter Morgan"],
	["I enjoy my work; sorry if that bothers you.","Dexter Morgan"],
	["Perhaps I should call the Guinness Book people. I wondered what the world record was for not being sure whether you committed a string of murders?","Dexter Morgan"],
	["...the Need was very strong now, very careful cold coiled creeping crackly cocked and ready, very strong, very much ready now—and still it waited and watched and it made me wait and watch.","Dexter Morgan"],
	["Another huge new development was going up to improve life for all of us by turning trees and animals into cement and old people from New Jersey.","Dexter Morgan"],
	["This whole business of telling the truth just never seems to work without some kind of awkward unpleasantness.","Dexter Morgan"],
	["Really, now: If you can't get me my newspaper on time, how can you expect me to refrain from killing people?","Dexter Morgan"],
	["It would be much too difficult for anyone to get in and out of this area, especially if they were carrying questionable loads of body parts and the like.","Dexter Morgan"],
	["I had done it all right, all the same, all the way it had to be done. It would be right.Now.","Dexter Morgan"],
	["Weren’t we all crazy in our sleep? What was sleep, after all, but the process by which we dumped our insanity into a dark subconscious pit and came out on the other side ready to eat cereal instead of the neighbor’s children?","Dexter Morgan"],
	["It was beautiful—in a terrible sort of way, of course. But still, the arrangement was perfect, compelling, beautifully bloodless.","Dexter Morgan"],
	["looked some more. Beside the ship, cargo cranes reared up into the night sky like abandoned props from Star Wars. A","Dexter Morgan"],
	["getting yelled at by a furious woman should be treated as a semiformal occasion.","Dexter Morgan"]
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	const tweetQuoteLink = document.getElementById('tweet-quote');
	if (inIframe()) {
		tweetQuoteLink.setAttribute('href',`https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=${encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)}`);
	}

	// Use the first (and currently only) color from the updated palette
	const selectedColor = colors[0];
	// The body background is light gray by default from CSS, so we don't need to change it here.
	// document.body.style.backgroundColor = selectedColor;
	// document.body.style.color = selectedColor; // This would make text blue, not ideal.

	const newQuoteButton = document.getElementById('newquote');
	const twitterIcon = document.querySelector('.social-icons .fa-twitter');
	const blockquoteFooter = document.querySelector('blockquote footer'); // This is blockquote-footer now
	const blockquote = document.querySelector('blockquote');

	// Elements that should adopt the primary color for their background or border
	if (newQuoteButton) newQuoteButton.style.backgroundColor = selectedColor;
	if (twitterIcon) twitterIcon.style.backgroundColor = selectedColor;
	// blockquote footer color is set by CSS to a muted gray, which is good.
	// if (blockquoteFooter) blockquoteFooter.style.color = selectedColor; // This would make it blue
	if (blockquote) blockquote.style.borderLeftColor = selectedColor;

	const quoteTextElement = document.getElementById('quotetext');
	if (quoteTextElement) quoteTextElement.textContent = currentQuote;

	const quoteSourceElement = document.getElementById('quotesource');
	if (quoteSourceElement) quoteSourceElement.textContent = currentAuthor;
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

document.addEventListener('DOMContentLoaded', function() {
    getQuote();
    const newQuoteButton = document.getElementById('newquote');
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', getQuote);
    }

    const tweetQuoteLink = document.getElementById('tweet-quote');
    if (tweetQuoteLink) {
        tweetQuoteLink.addEventListener('click', function () {
            if (!inIframe()) {
                openURL('https://twitter.com/intent/tweet?hashtags=dexterquotes&related=dexter&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
            }
        });
    }
});