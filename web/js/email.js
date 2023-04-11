function ema2(addr, sty, title) {
	var href = "mail" + "to:" + addr;
	document.write("<a class=\"" + sty + "\" href=\"" + href + "\" title=\"" + title + "\">");
}
function ema(addr, sty) {
	var href = "mail" + "to:" + addr;
	document.write("<a class=\"" + sty + "\" href=\"" + href + "\">");
}
function txt(msg) {
	document.write(msg);
}
function ema_addr(name, dom) {
	return name + "@" + dom;
}
function ema_net() {
	return ema_addr("yannis", "avrithis.net");
}
function ema_inria() {
	return ema_addr("ioannis.avrithis", "inria.fr");
}
function ema_athena() {
	return ema_addr("iavr", "athenarc.gr");
}
function ema_iarai() {
	return ema_addr("yannis.avrithis", "iarai.ac.at");
}
