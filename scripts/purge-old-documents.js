var now = new Date();
// Remove documents more than 30 days old
var old = new Date(now - 1000*60*60*24*30);
var query = {
	t: { $lt: old }
};
db.mobile_events.remove(query);
