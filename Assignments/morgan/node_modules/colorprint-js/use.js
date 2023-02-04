const colors = require("./colors");
const reset = (str) => str + "\x1b[0m";
class Use {
	manual() {
		console.log(`
        ${colors.regularColors.Cyan}Total colors are 8
        [black,red,blue,cyan,purple,white,yellow,green]
        Total Bright/light colors are 7
        [red,blue,cyan,purple,white,yellow,green]

        ******************
        - regularColors          ---> just write name of color,
        - boldColors             ---> "b"   +  ColorName,
        - boldBrightColor        ---> "bl"  +  ColorName,
        - backgroundColor        ---> "bg"  +  ColorName,
        - boldBackgroundColor    ---> "bgb" +  ColorName,
        - brightColor            ---> "l"   +  ColorName,
        - brightBackgroundColors ---> "bgl" +  ColorName,
        - underlineColors        ---> "u"   +  ColorName,
        - brightUnderlineColor   ---> "ul"  +  ColorName,
        - boldUnderlineColors    ---> "ub"  +  ColorName,
        \x1b[0m`);
	}
}
module.exports = Use;
