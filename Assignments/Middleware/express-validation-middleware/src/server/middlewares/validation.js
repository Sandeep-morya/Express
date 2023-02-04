export const isNumber = (param) => typeof param === "number"; 

export const isString = (param) => typeof param === "string";

export const isStringArray = (param) => {
	if (!param || !Array.isArray(param) /* || !param.length */) {
		return false;
	}
	let ans = true;
	param.forEach((el) => {
		if (!isString(el)) {
			ans = false;
			// return false is not working i dont know why ?
		}
	});
	return ans;
};

const validation = (req, res, next) => {

	// const start = new Date().getTime();
	
	if (req.url === "/" && req.method === "POST") {
		const {
			body: { ID, Name, Rating, Description, Genre, Cast },
		} = req;
		try {
			if (
				isNumber(ID) &&
				isString(Name) &&
				isNumber(Rating) &&
				isString(Description) &&
				isString(Genre) &&
				isStringArray(Cast)
			) {
				res.status(201).send();
			} else {
				throw new Error();
			}
		} catch {
			res.status(400).send();
		}
	}
	
	next();

	// const end = new Date().getTime();
	// console.log(`Total Time Taken ${end - start} ms`);
};

export default validation;

/* 
{
"ID":5,
"Name":"Hero",
"Rating": 7.5,
"Description": "Good Movie",
"Genre": "Action Thriller",
"Cast":["Suraj","Athiya"]
}
 */
