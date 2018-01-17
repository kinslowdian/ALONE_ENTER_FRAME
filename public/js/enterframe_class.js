// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

class ENTER_FRAME_CL
{
	constructor()
	{
		this.enterFrame_list = new Array();

		this.enterFrame_live = false;
	}

	addEF(funct)
	{
		this.enterFrame_list.push(funct);
	}
}

class Refresh extends ENTER_FRAME_CL
{
	constructor(attach)
	{
		this.attach = attach;
	}

	applyEF(run)
	{
		trace(this.attach);


		if(run)
		{
			super.enterFrame_live = true;

			// with(this)
			// {
				trace(this);
				this.attach.requestAnimationFrame(this.eventEF);
			// }
		}

		else
		{
			super.enterFrame_live = false;

			// with(this)
			// {
				this.attach.cancelAnimationFrame(this.eventEF);
			// }
		}
	}

	eventEF()
	{
		for(let i in super.enterFrame_list)
		{
			super.enterFrame_list[i]();
		}

		if(super.enterFrame_live)
		{
			// with(this)
			// {
				this.attach.requestAnimationFrame(this.eventEF);
			// }
		}
	}
}


// var enterFrame_list;
// var enterFrame_live;

// function ENTER_FRAME_init()
// {
// 	enterFrame_list = new Array();

// 	enterFrame_live = false;
// }

// function ENTER_FRAME_add(funct)
// {
// 	enterFrame_list.push(funct);
// }

// function ENTER_FRAME_apply(run)
// {
// 	if(run)
// 	{
// 		enterFrame_live = true;

// 		window.requestAnimationFrame(ENTER_FRAME_event);
// 	}

// 	else
// 	{
// 		enterFrame_live = false;

// 		window.cancelAnimationFrame(ENTER_FRAME_event);
// 	}
// }

// function ENTER_FRAME_event()
// {
// 	for(let i in enterFrame_list)
// 	{
// 		enterFrame_list[i]();
// 	}

// 	if(enterFrame_live)
// 	{
// 		window.requestAnimationFrame(ENTER_FRAME_event);
// 	}
// }






