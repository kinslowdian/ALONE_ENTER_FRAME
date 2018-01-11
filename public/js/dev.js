// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;

function pageLoad_init()
{
	trace("pageLoad_init();");

	project_init();
}

function project_init()
{
	displayList = {};

	displayList.btn0 = document.querySelector(".btn0");
	displayList.btn1 = document.querySelector(".btn1");
	displayList.btn2 = document.querySelector(".btn2");

	displayList.btn0.addEventListener("click", test0, false);
	displayList.btn1.addEventListener("click", test1, false);
	displayList.btn2.addEventListener("click", test2, false);

	displayList.box = {};
	displayList.box.link = document.querySelector(".box");
	displayList.box.deg = 0;
	displayList.box.speed = 0.4;


	ENTER_FRAME_init();
	ENTER_FRAME_add(updateBox);
	ENTER_FRAME_apply(true);
}

function test1(event)
{
	event.preventDefault();

	displayList.box.speed /= 1.2;
}

function test2(event)
{
	event.preventDefault();

	enterFrame_live ? ENTER_FRAME_apply(false) : ENTER_FRAME_apply(true);
}

function updateBox()
{
	displayList.box.deg += displayList.box.speed;
	displayList.box.link.style.transform = 'rotate(' + displayList.box.deg + 'deg)';
}