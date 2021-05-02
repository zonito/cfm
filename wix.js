// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function() {
    // var items = {};
    var items = [
        "00000000-0000-0000-0000-000000000001",
        "00000000-0000-0000-0000-000000000002",
        "00000000-0000-0000-0000-000000000003",
        "103781b4-a57e-4ab2-93ec-d33769c8d6e6",
        "170ba6f7-534f-43dc-87f1-da1757f14282",
        "2f861568-12d0-4d17-bd3d-c68179b8d03a",
        "36447044-093e-4c15-a4df-562488beb192",
        "614e9d1e-f939-4e3a-af5e-d102fc5aacaf",
        "63b1e0fa-2a6e-44b5-ab4f-7d06e7f503ab",
        "7165649e-cab4-4aa4-b95a-8ba1c04344d2",
        "895c00e1-e22f-4d37-9009-557cd3517c18",
        "8d0d5c27-22ad-4338-8d0b-dbb8980ecca6",
        "8fcbba3a-077a-420f-86ca-bd80a669baff",
        "964fac2d-9e5a-43f1-8fa6-6242211668ae",
        "b80761c6-991d-4449-8676-1241f26a37d3",
        "bff6f111-e6c1-4432-ba7c-e5c4878e07ec",
        "c54b3546-0ac4-4919-b733-43cdee35256c",
        "cd977615-0c74-4c52-8e99-f8ce97ccc8e1",
        "d4a700c4-a11e-451b-a114-4c2ef0ea3986",
        "f59b62f1-ce0e-4495-bb43-dc9671a66249"
    ];
    var reverseRatingItems = [
        "cd977615-0c74-4c52-8e99-f8ce97ccc8e1",
        "2f861568-12d0-4d17-bd3d-c68179b8d03a",
        "103781b4-a57e-4ab2-93ec-d33769c8d6e6",
        "8d0d5c27-22ad-4338-8d0b-dbb8980ecca6",
        "c54b3546-0ac4-4919-b733-43cdee35256c",
        "7165649e-cab4-4aa4-b95a-8ba1c04344d2",
        "170ba6f7-534f-43dc-87f1-da1757f14282",
        "bff6f111-e6c1-4432-ba7c-e5c4878e07ec",
        "f59b62f1-ce0e-4495-bb43-dc9671a66249",
        "8fcbba3a-077a-420f-86ca-bd80a669baff"
    ];
    var handler = function(obj) {
        console.log(items);
        if (Object.keys(items).length !== 20) {
            $w("#text69").text = "Please answer all questions to get score."
            return;
        }
        var score = 0;
        for (var itemId in items) {
            score += items[itemId];
        }
        $w("#text69").text = "Your score is " + score + ". \n\n";
        if (score >= 20 && score <= 50) {
            $w("#text69").text += "Your mindfulness score suggests that you are less likely to be practicing mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life.";
        } else if (score > 50 && score <= 75) {
            $w("#text69").text += "Your mindfulness score suggests that your dispositional mindfulness is moderate and also possess a moderate tendency to practice mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life.";
        } else if (score > 75) {
            $w("#text69").text += "Your mindfulness score suggests that your dispositional mindfulness is strong and also possess a strong tendency to practice mindfulness. This score presents 1. your awareness of your thoughts, feelings, and environment moment-to-moment, and 2. your acceptance of the aspects of your life."
        }
    }

    var rhandler = function(event) {
        var itemId = event.context["itemId"];
        var index = $w.at(event.context)("#radioGroup1").selectedIndex;
        var itemScore = reverseRatingItems.indexOf(itemId) > -1 ? 5 - index : index + 1;
        console.log(
            itemId, itemScore, index,
            $w.at(event.context)("#radioGroup1")["selectedIndex"],
            $w.at(event.context)("#radioGroup1")["value"],
            $w.at(event.context)("#radioGroup1").value,
            $w.at(event.context)("#radioGroup1")
        );
        if (!isNaN(itemScore)) {
            items[itemId] = itemScore;
            console.log(items[itemId]);
        }
    }

    // To select an element by ID use: $w("#elementID")
    $w("#button25").onClick(handler);
    $w("#radioGroup1").onClick(rhandler);

    // Click "Preview" to run your code
});
