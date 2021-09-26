function ema(addr, sty) {
	var href = "mail" + "to:" + addr;
	document.write("<a class=\"" + sty + "\" href=" + href + ">");
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
function ema_athena() {
	return ema_addr("yannis.avrithis", "athenarc.gr");
}
function ema_inria() {
	return ema_addr("ioannis.avrithis", "inria.fr");
}
