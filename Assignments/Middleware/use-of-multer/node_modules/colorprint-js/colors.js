const regularColors = {
	Black: "\x1b[0;30m",
	Red: "\x1b[0;31m",
	Green: "\x1b[0;32m",
	Yellow: "\x1b[0;33m",
	Blue: "\x1b[0;34m",
	Purple: "\x1b[0;35m",
	Cyan: "\x1b[0;36m",
	White: "\x1b[0;37m",
};

const boldColors = {
	Black: "\x1b[1;30m",
	Red: "\x1b[1;31m",
	Green: "\x1b[1;32m",
	Yellow: "\x1b[1;33m",
	Blue: "\x1b[1;34m",
	Purple: "\x1b[1;35m",
	Cyan: "\x1b[1;36m",
	White: "\x1b[1;37m",
};

const underlineColors = {
	Black: "\x1b[4;30m",
	Red: "\x1b[4;31m",
	Green: "\x1b[4;32m",
	Yellow: "\x1b[4;33m",
	Blue: "\x1b[4;34m",
	Purple: "\x1b[4;35m",
	Cyan: "\x1b[4;36m",
	White: "\x1b[4;37m",
};

const boldUnderlineColors = {
	Black: "\x1b[4;30m\x1b[1;30m",
	Red: "\x1b[4;31m\x1b[1;31m",
	Green: "\x1b[4;32m\x1b[1;32m",
	Yellow: "\x1b[4;33m\x1b[1;33m",
	Blue: "\x1b[4;34m\x1b[1;34m",
	Purple: "\x1b[4;35m\x1b[1;35m",
	Cyan: "\x1b[4;36m\x1b[1;36m",
	White: "\x1b[4;37m\x1b[1;37m",
};

const brightColor = {
	Red: "\x1b[0;91m",
	Green: "\x1b[0;92m",
	Yellow: "\x1b[0;93m",
	Blue: "\x1b[0;94m",
	Purple: "\x1b[0;95m",
	Cyan: "\x1b[0;96m",
	White: "\x1b[0;97m",
};

const brightUnderlineColor = {
	Red: "\x1b[0;91m\x1b[4;31m",
	Green: "\x1b[0;92m\x1b[4;32m",
	Yellow: "\x1b[0;93m\x1b[4;33m",
	Blue: "\x1b[0;94m\x1b[4;34m",
	Purple: "\x1b[0;95m\x1b[4;35m",
	Cyan: "\x1b[0;96m\x1b[4;36m",
	White: "\x1b[0;97m\x1b[4;37m",
};

const boldBrightColor = {
	Black: "\x1b[1;90m",
	Red: "\x1b[1;91m",
	Green: "\x1b[1;92m",
	Yellow: "\x1b[1;93m",
	Blue: "\x1b[1;94m",
	Purple: "\x1b[1;95m",
	Cyan: "\x1b[1;96m",
	White: "\x1b[1;97m",
};

const backgroundColor = {
	Black: "\x1b[40m",
	Red: "\x1b[41m",
	Green: "\x1b[42m",
	Yellow: "\x1b[43m",
	Blue: "\x1b[44m",
	Purple: "\x1b[45m",
	Cyan: "\x1b[46m",
	White: "\x1b[47m",
};

const boldBackgroundColor = {
	Black: "\x1b[40m\x1b[1;30m",
	Red: "\x1b[41m\x1b[1;31m",
	Green: "\x1b[42m\x1b[1;32m",
	Yellow: "\x1b[43m\x1b[1;33m",
	Blue: "\x1b[44m\x1b[1;34m",
	Purple: "\x1b[45m\x1b[1;35m",
	Cyan: "\x1b[46m\x1b[1;36m",
	White: "\x1b[47m\x1b[1;37m",
};

const brightBackgroundColors = {
	Black: "\x1b[0;100m",
	Red: "\x1b[0;101m",
	Green: "\x1b[0;102m",
	Yellow: "\x1b[0;103m",
	Blue: "\x1b[0;104m",
	Purple: "\x1b[0;105m",
	Cyan: "\x1b[0;106m",
	White: "\x1b[0;107m",
};

module.exports = {
	regularColors,
	boldBrightColor,
	boldColors,
	backgroundColor,
    boldBackgroundColor,
	brightBackgroundColors,
	brightColor,
	brightUnderlineColor,
	underlineColors,
	boldUnderlineColors,
};
