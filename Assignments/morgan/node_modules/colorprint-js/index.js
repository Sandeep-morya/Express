const colors = require("./colors");
const reset = (str) => {
	return str + "\x1b[0m";
};

const Use = require("./use");

class BetterLogs extends Use {
	/* Regular Colors */

	green(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Green + str;
		console.log(reset(str));
	}

	red(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Red + str;
		console.log(reset(str));
	}

	black(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Black + str;
		console.log(reset(str));
	}

	blue(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Blue + str;
		console.log(reset(str));
	}

	yellow(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Yellow + str;
		console.log(reset(str));
	}

	purple(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Purple + str;
		console.log(reset(str));
	}

	cyan(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.Cyan + str;
		console.log(reset(str));
	}

	white(str) {
		str = JSON.stringify(str);
		str = colors.regularColors.White + str;
		console.log(reset(str));
	}

	/* Bold Colors */

	bGreen(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Green + str;
		console.log(reset(str));
	}

	bRed(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Red + str;
		console.log(reset(str));
	}

	bBlack(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Black + str;
		console.log(reset(str));
	}

	bBlue(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Blue + str;
		console.log(reset(str));
	}

	bYellow(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Yellow + str;
		console.log(reset(str));
	}

	bPurple(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Purple + str;
		console.log(reset(str));
	}

	bCyan(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.Cyan + str;
		console.log(reset(str));
	}

	bWhite(str) {
		str = JSON.stringify(str);
		str = colors.boldColors.White + str;
		console.log(reset(str));
	}

	/* Underline Colors */

	uGreen(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Green + str;
		console.log(reset(str));
	}

	uRed(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Red + str;
		console.log(reset(str));
	}

	uBlack(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Black + str;
		console.log(reset(str));
	}

	uBlue(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Blue + str;
		console.log(reset(str));
	}

	uYellow(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Yellow + str;
		console.log(reset(str));
	}

	uPurple(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Purple + str;
		console.log(reset(str));
	}

	uCyan(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.Cyan + str;
		console.log(reset(str));
	}

	uWhite(str) {
		str = JSON.stringify(str);
		str = colors.underlineColors.White + str;
		console.log(reset(str));
	}

	/* Bold underline */

	ubGreen(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Green + str;
		console.log(reset(str));
	}

	ubRed(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Red + str;
		console.log(reset(str));
	}

	ubBlack(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Black + str;
		console.log(reset(str));
	}

	ubBlue(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Blue + str;
		console.log(reset(str));
	}

	ubYellow(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Yellow + str;
		console.log(reset(str));
	}

	ubPurple(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Purple + str;
		console.log(reset(str));
	}

	ubCyan(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.Cyan + str;
		console.log(reset(str));
	}

	ubWhite(str) {
		str = JSON.stringify(str);
		str = colors.boldUnderlineColors.White + str;
		console.log(reset(str));
	}

	/* Bright Colors */

	lGreen(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Green + str;
		console.log(reset(str));
	}

	lRed(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Red + str;
		console.log(reset(str));
	}

	lBlue(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Blue + str;
		console.log(reset(str));
	}

	lYellow(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Yellow + str;
		console.log(reset(str));
	}

	lPurple(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Purple + str;
		console.log(reset(str));
	}

	lCyan(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.Cyan + str;
		console.log(reset(str));
	}

	lWhite(str) {
		str = JSON.stringify(str);
		str = colors.brightColor.White + str;
		console.log(reset(str));
	}

	/* Bright Undeline */

	ulGreen(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Green + str;
		console.log(reset(str));
	}

	ulRed(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Red + str;
		console.log(reset(str));
	}

	ulBlue(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Blue + str;
		console.log(reset(str));
	}

	ulYellow(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Yellow + str;
		console.log(reset(str));
	}

	ulPurple(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Purple + str;
		console.log(reset(str));
	}

	ulCyan(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.Cyan + str;
		console.log(reset(str));
	}

	ulWhite(str) {
		str = JSON.stringify(str);
		str = colors.brightUnderlineColor.White + str;
		console.log(reset(str));
	}

	/* Bold Bright Colors */

	blGreen(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Green + str;
		console.log(reset(str));
	}

	blRed(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Red + str;
		console.log(reset(str));
	}

	blBlack(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Black + str;
		console.log(reset(str));
	}

	blBlue(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Blue + str;
		console.log(reset(str));
	}

	blYellow(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Yellow + str;
		console.log(reset(str));
	}

	blPurple(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Purple + str;
		console.log(reset(str));
	}

	blCyan(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.Cyan + str;
		console.log(reset(str));
	}

	blWhite(str) {
		str = JSON.stringify(str);
		str = colors.boldBrightColor.White + str;
		console.log(reset(str));
	}

	/* Background */

	bgGreen(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Green + str;
		console.log(reset(str));
	}

	bgRed(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Red + str;
		console.log(reset(str));
	}

	bgBlack(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Black + str;
		console.log(reset(str));
	}

	bgBlue(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Blue + str;
		console.log(reset(str));
	}

	bgYellow(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Yellow + str;
		console.log(reset(str));
	}

	bgPurple(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Purple + str;
		console.log(reset(str));
	}

	bgCyan(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.Cyan + str;
		console.log(reset(str));
	}

	bgWhite(str) {
		str = JSON.stringify(str);
		str = colors.backgroundColor.White + str;
		console.log(reset(str));
	}

	/* Bold Background */

	bgbGreen(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Green + str;
		console.log(reset(str));
	}

	bgbRed(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Red + str;
		console.log(reset(str));
	}

	bgbBlack(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Black + str;
		console.log(reset(str));
	}

	bgbBlue(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Blue + str;
		console.log(reset(str));
	}

	bgbYellow(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Yellow + str;
		console.log(reset(str));
	}

	bgbPurple(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Purple + str;
		console.log(reset(str));
	}

	bgbCyan(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.Cyan + str;
		console.log(reset(str));
	}

	bgbWhite(str) {
		str = JSON.stringify(str);
		str = colors.boldBackgroundColor.White + str;
		console.log(reset(str));
	}

	/* Bright Background */

	bglGreen(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Green + str;
		console.log(reset(str));
	}

	bglRed(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Red + str;
		console.log(reset(str));
	}

	bglBlack(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Black + str;
		console.log(reset(str));
	}

	bglBlue(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Blue + str;
		console.log(reset(str));
	}

	bglYellow(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Yellow + str;
		console.log(reset(str));
	}

	bglPurple(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Purple + str;
		console.log(reset(str));
	}

	bglCyan(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.Cyan + str;
		console.log(reset(str));
	}

	bglWhite(str) {
		str = JSON.stringify(str);
		str = colors.brightBackgroundColors.White + str;
		console.log(reset(str));
	}
}

const betterLogs = new BetterLogs();

module.exports = betterLogs;
