// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.
function announceMachines(announce, ...machines) {
	let labelsCount = 0;
	for (let machine of machines) {
		let label = "";
		if (machine.label) {
			label = machine.label;
			labelsCount++;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}
		announce(label);
	}
	return labelsCount;
}

module.exports.announceMachines = announceMachines;
