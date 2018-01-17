// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

var enterFrameEventFunct;

var ENTER_FRAME = function()
{
	this.enterFrame_list = new Array();

	this.enterFrame_live = false;
};

ENTER_FRAME.prototype.addEF = function(funct)
{
	this.enterFrame_list.push(funct);
};

ENTER_FRAME.prototype.applyEF = function(run)
{
	trace(window);


	if(run)
	{
		this.enterFrame_live = true;

		with(this)
		{
			trace(this);
			window.requestAnimationFrame(this.eventEF);
		}
	}

	else
	{
		this.enterFrame_live = false;

		with(this)
		{
			window.cancelAnimationFrame(this.eventEF);
		}
	}
};

ENTER_FRAME.prototype.eventEF = function()
{
	for(let i in this.enterFrame_list)
	{
		this.enterFrame_list[i]();
	}

	if(this.enterFrame_live)
	{
		with(this)
		{
			window.requestAnimationFrame(this.eventEF);
		}
	}
};