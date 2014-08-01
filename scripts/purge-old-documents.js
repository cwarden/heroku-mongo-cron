// From http://stackoverflow.com/a/8753670/120731
var objectIdFromTimestamp = function(timestamp) {
	// Convert date object to hex seconds since Unix epoch
	var hexSeconds = Math.floor(timestamp/1000).toString(16);

	// Create an ObjectId with that hex timestamp
	return ObjectId(hexSeconds + "0000000000000000");
};

var now = new Date();
// Remove documents more than 30 days old
var old = new Date(now - 1000*60*60*24*30);
var query = {
	_id: { $lt: objectIdFromTimestamp(old) }
};
db.mobile_events.remove(query);
