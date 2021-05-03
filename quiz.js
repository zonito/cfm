// Uncomment console.log lines to start debugging.

var items = {
    "00000000-0000-0000-0000-000000000001": {r: false, index: -1, score: 0},
    "00000000-0000-0000-0000-000000000002": {r: false, index: -1, score: 0},
    "00000000-0000-0000-0000-000000000003": {r: false, index: -1, score: 0},
    "103781b4-a57e-4ab2-93ec-d33769c8d6e6": {r: true, index: -1, score: 0},
    "170ba6f7-534f-43dc-87f1-da1757f14282": {r: true, index: -1, score: 0},
    "2f861568-12d0-4d17-bd3d-c68179b8d03a": {r: true, index: -1, score: 0},
    "36447044-093e-4c15-a4df-562488beb192": {r: false, index: -1, score: 0},
    "614e9d1e-f939-4e3a-af5e-d102fc5aacaf": {r: false, index: -1, score: 0},
    "63b1e0fa-2a6e-44b5-ab4f-7d06e7f503ab": {r: false, index: -1, score: 0},
    "7165649e-cab4-4aa4-b95a-8ba1c04344d2": {r: true, index: -1, score: 0},
    "895c00e1-e22f-4d37-9009-557cd3517c18": {r: false, index: -1, score: 0},
    "8d0d5c27-22ad-4338-8d0b-dbb8980ecca6": {r: true, index: -1, score: 0},
    "8fcbba3a-077a-420f-86ca-bd80a669baff": {r: true, index: -1, score: 0},
    "964fac2d-9e5a-43f1-8fa6-6242211668ae": {r: false, index: -1, score: 0},
    "b80761c6-991d-4449-8676-1241f26a37d3": {r: false, index: -1, score: 0},
    "bff6f111-e6c1-4432-ba7c-e5c4878e07ec": {r: true, index: -1, score: 0},
    "c54b3546-0ac4-4919-b733-43cdee35256c": {r: true, index: -1, score: 0},
    "cd977615-0c74-4c52-8e99-f8ce97ccc8e1": {r: true, index: -1, score: 0},
    "d4a700c4-a11e-451b-a114-4c2ef0ea3986": {r: false, index: -1, score: 0},
    "f59b62f1-ce0e-4495-bb43-dc9671a66249": {r: true, index: -1, score: 0},
};

/**
*	Adds an event handler that runs when an input element's value is changed.
*	 @param {$w.Event} event
*/
export function radioGroup1_change(event) {
    // When any option changes, record it's index and score
    // console.log(event);
    var selectedIndex = $w.at(event.context)("#radioGroup1").selectedIndex;
    var itemScore = items[event.context.itemId].r ? 5 - selectedIndex : selectedIndex + 1;
    items[event.context.itemId].index = selectedIndex;
    items[event.context.itemId].score = itemScore;
    // console.log("selectedIndex: ", selectedIndex, " itemScore: ", itemScore);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function button25_click(event) {
    // Validate and show result to user.
    // console.log(items);
    var score = 0;
    for (var itemId in items) {
        score += items[itemId].score;
        if (items[itemId].index === -1) {
            $w("#text69").text = "Please answer all questions to get score."
            return;
        }
    }
    $w("#text69").text = "Your score is " + score + ". \n\n";
    if (score >= 20 && score <= 50) {
        $w("#text69").text += " Your mindfulness score suggests that you are less likely to be practicing mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life.";
    } else if (score > 50 && score <= 75) {
        $w("#text69").text += " Your mindfulness score suggests that your dispositional mindfulness is moderate and also possess a moderate tendency to practice mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life.";
    } else if (score > 75) {
        $w("#text69").text += " Your mindfulness score suggests that your dispositional mindfulness is strong and also possess a strong tendency to practice mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life."
    }
}
