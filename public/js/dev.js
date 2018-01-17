// DEBUG
var trace = function(msg){ console.log(msg); };

var displayList;
var runProto = false;
var runClass = false;
var enterFrame;
var refresh;

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
	displayList.box.box0 = {};
	displayList.box.box1 = {};
	displayList.box.box2 = {};

	displayList.box.box0.link = document.querySelector(".box0");
	displayList.box.box1.link = document.querySelector(".box1");
	displayList.box.box2.link = document.querySelector(".box2");

	displayList.box.box0.deg = 0;
	displayList.box.box0.speed = 0.2;

	displayList.box.box1.deg = 0;
	displayList.box.box1.speed = 0.4;

	displayList.box.box2.deg = 0;
	displayList.box.box2.speed = 0.6;

	if(runProto)
	{
		enterFrame = new ENTER_FRAME();
		enterFrame.addEF(updateBox0);
		enterFrame.addEF(updateBox1);
		enterFrame.addEF(updateBox2);
		enterFrameEventFunct = enterFrame.eventEF;
		enterFrame.applyEF(true);
	}

	else if(runClass)
	{
		enterFrame = new ENTER_FRAME_CL();
		refresh = new Refresh(window);
		enterFrame.addEF(updateBox0);
		enterFrame.addEF(updateBox1);
		enterFrame.addEF(updateBox2);
		refresh.applyEF(true);
	}

	else
	{
		ENTER_FRAME_init();
		ENTER_FRAME_add(updateBox0);
		ENTER_FRAME_add(updateBox1);
		ENTER_FRAME_add(updateBox2);
		ENTER_FRAME_apply(true);
	}
}

function test0(event)
{
	event.preventDefault();

	displayList.box.box0.speed *= 1.2;
	displayList.box.box1.speed *= 1.2;
	displayList.box.box2.speed *= 1.2;
}

function test1(event)
{
	event.preventDefault();

	displayList.box.box0.speed /= 1.2;
	displayList.box.box1.speed /= 1.2;
	displayList.box.box2.speed /= 1.2;
}

function test2(event)
{
	event.preventDefault();

	enterFrame_live ? ENTER_FRAME_apply(false) : ENTER_FRAME_apply(true);
}

function updateBox0()
{
	displayList.box.box0.deg += displayList.box.box0.speed;
	displayList.box.box0.link.style.transform = 'rotate(' + displayList.box.box0.deg + 'deg)';
}

function updateBox1()
{
	displayList.box.box1.deg += displayList.box.box1.speed;
	displayList.box.box1.link.style.transform = 'rotate(' + displayList.box.box1.deg + 'deg)';
}

function updateBox2()
{
	displayList.box.box2.deg += displayList.box.box2.speed;
	displayList.box.box2.link.style.transform = 'rotate(' + displayList.box.box2.deg + 'deg)';
}