// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

var enterFrame_list;
var enterFrame_live;

function ENTER_FRAME_init()
{
	enterFrame_list = new Array();

	enterFrame_live = false;
}

function ENTER_FRAME_add(funct)
{
	enterFrame_list.push(funct);
}

function ENTER_FRAME_apply(run)
{
	if(run)
	{
		enterFrame_live = true;

		window.requestAnimationFrame(ENTER_FRAME_event);
	}

	else
	{
		enterFrame_live = false;

		window.cancelAnimationFrame(ENTER_FRAME_event);
	}
}

function ENTER_FRAME_event()
{
	for(let i in enterFrame_list)
	{
		enterFrame_list[i]();
	}

	if(enterFrame_live)
	{
		window.requestAnimationFrame(ENTER_FRAME_event);
	}
}






