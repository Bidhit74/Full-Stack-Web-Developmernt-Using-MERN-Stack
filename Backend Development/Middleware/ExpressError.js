//** Custom Error Class*/
// Inheritance of Error class
class ExpressError extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}
}

export default ExpressError;
