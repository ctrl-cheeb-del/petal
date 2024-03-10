const navbutton = document.getElementById("navbutton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebarContent = document.getElementById("sidebarcontent");

let menuOpen = false;

function openMenu() {
	if (window.matchMedia("(max-width: 1000px)").matches) {
		menuOpen = true;
		overlay.style.display = "block";
		sidebar.style.width = "100%";
	} else {
		menuOpen = true;
		overlay.style.display = "block";
		sidebar.style.width = "30%";
	}
	setTimeout(function () {
		sidebarContent.style.right = "0px";
		sidebarContent.style.opacity = "100%";
	}, 500);
}

function closeMenu() {
	menuOpen = false;
	overlay.style.display = "none";
	sidebar.style.width = "0px";
	sidebarContent.style.opacity = "0%";
	setTimeout(function () {
		sidebarContent.style.right = "250%";
	}, 200);
}

navbutton.addEventListener("click", function () {
	if (!menuOpen) {
		openMenu();
		open.style.right = "-250%";
		close.style.right = "0px";
	} else {
		closeMenu();
		open.style.right = "0px";
		close.style.right = "-250%";
	}
});

overlay.addEventListener("click", function () {
	if (menuOpen) {
		closeMenu();
		open.style.right = "0px";
		close.style.right = "-250%";
	} else {
		open.style.right = "-250%";
		close.style.right = "0px";
	}
});
