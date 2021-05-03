// Uncomment console.log lines to start debugging.

import wixData from 'wix-data';

var workshopTags = [];

/**
 *	Adds an workshop handler that runs when the dataset is ready.
 */
export function workshop_ready() {
	// console.log($w('#workshop').getTotalCount());
    var workshop = $w('#workshop').getCurrentItem();
    // console.log(workshop);
    workshopTags = workshop.tags;
}

/**
 *	Adds an event handler that runs when the dataset is ready.
 */
export async function events_ready() {
    if (!workshopTags) return;
    var events = $w('#events');
	$w('#events').setFilter(wixData.filter().hasSome('status', 'SCHEDULED'));
	// console.log('Total Events: ', events.getTotalCount());
    var eventIds = [], allEvents = await events.getItems(0, 50);
    // console.log('All Events: ', allEvents);
    for (var index = 0; index < allEvents.items.length; index++) {
        // console.log('Event: ', index, allEvents.items[index]);
        var event = allEvents.items[index];
        for (var tag in workshopTags) {
            if (event.about.indexOf(tag) === -1) continue;
            eventIds.push(event._id);
            break;
        }
    }
    console.log('Filtered EventIDs: ', eventIds);
	$w('#events').setFilter(wixData.filter().hasSome('_id', eventIds));
}
