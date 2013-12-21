function map()
{
	tri = $("#triangle")[0]
	tri.style.left = '95px';
	tri.style.borderBottom=" 25px solid #F0EDE5";
	$('#map_card')[0].style.top = '0%';
	$('#home_card')[0].style.top = '100%';
	$('#contact_card')[0].style.top = '100%';
};

function home()
{
	tri = $("#triangle")[0]
	tri.style.left = '-95px';
	tri.style.borderBottom=" 25px solid #FFF";
	$('#map_card')[0].style.top = '100%';
	$('#home_card')[0].style.top = '0%';
	$('#contact_card')[0].style.top = '100%';
};

function contact()
{
	tri = $("#triangle")[0]
	tri.style.left = '0px';
	tri.style.borderBottom=" 25px solid #FFF";
	$('#map_card')[0].style.top = '100%';
	$('#home_card')[0].style.top = '100%';
	$('#contact_card')[0].style.top = '0%';
};

function set_click_actions()
{
	$('#contact').click(contact)
	$('#map').click(map)
	$('#home').click(home)
	$('#maplink').click(map)

};


