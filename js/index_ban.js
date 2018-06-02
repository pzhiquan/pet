$(document).ready(function() {
var speed = 500;
function foucsSlide(container, j, w, numinner) {
  c = Math.abs(parseInt(container.css("margin-left"))/w);
  var n = container.find('li').length;
		if (container.is(':animated') == false) {
			c += j;
			if (c != -1 && c != n) {
				container.animate({
					'marginLeft': -c * w + 'px'
				},
				speed)
			} else if (c == -1) {
				c = n - 1;
				container.css({
					"marginLeft": -(w * (c - 1)) + "px"
				});
				container.animate({
					"marginLeft": -(w * c) + "px"
				},
				speed)
			} else if (c == n) {
				c = 0;
				container.css({
					"marginLeft": -w + "px"
				});
				container.animate({
					"marginLeft": 0 + "px"
				},
				speed)
			}
			cur(numinner.find('span').eq(c), 'on')
		}
	}
	
function cur(ele, currentClass) {
		ele = $(ele) ? $(ele) : ele;
		ele.addClass(currentClass).siblings().removeClass(currentClass)
	}

function fade(container, i, w) {
		if (container.css('marginLeft') != -i * w + 'px') {
			container.css('marginLeft', -i * w + 'px');
			container.fadeOut(0,
			function() {
				container.fadeIn(500)
			})
		}
	}
	
function start() {
		t = setInterval(function() {
			foucsSlide($('#actor'), 1, 650, $('#numinner'));
			foucsSlide($('#actor3'), 1, 270, $('#numinner3'))
		},
		5000)
	}
function stopt() {
		if (t) clearInterval(t)
	}
	
//今日焦点bnner	
$('#imgplay .next').click(function() {		
		foucsSlide($('#actor'), 1, 650, $('#numinner'))
	});
$('#imgplay .prev').click(function() {
		foucsSlide($('#actor'), - 1, 650, $('#numinner'))
	});
$('#numinner span').click(function() {
		c = $(this).index();
		fade($('#actor'), c, 650);
		cur($('#numinner span').eq(c), 'on')
	});
$("#imgplay").hover(function() {
		stopt()
	},
	function() {
		start()
	});

//相册	
	
$('#imgplay2 .next2').click(function() {
		foucsSlide($('#actor2'), 1, 300)
	});
$('#imgplay2 .prev2').click(function() {
		foucsSlide($('#actor2'), - 1, 300)
	});


//论坛焦点	
$('#numinner3 span').click(function() {
		c = $(this).index();
		fade($('#actor3'), c, 270);
		cur($('#numinner3 span').eq(c), 'on')
	});
$("#imgplay3").hover(function() {
		stopt()
	},
	function() {
		start()
	});


start()

});

//杂志
(function ($) {
    $.extend({
        'foucs': function (con) {
            var $container = $('#rzbox')
                , $imgs = $container.find('li.hero')
            , $leftBtn = $container.find('a.prev')
            , $rightBtn = $container.find('a.next')
            , config = {
                interval: con && con.interval || 3500,
                animateTime: con && con.animateTime || 500,
                direction: con && (con.direction === 'right'),
                _imgLen: $imgs.length
            }
            , i = 0
            , getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; }
            , getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; }
            , silde = function (d) {
                $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-368px' : '368px'))
                $imgs.animate({
                    'left': (d ? '+' : '-') + '=184px'
                }, config.animateTime);
                i = d ? getPrevIndex(1) : getNextIndex(1);
            };
            $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '184px').end().eq(i - 1).css('left', '-184px');
            $container.find('.rzimglist').add($leftBtn).add($rightBtn).hover(function () { clearInterval(s); }, function () { s = setInterval(function () { silde(config.direction); }, config.interval); });
            $leftBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(true);
                }
            });
            $rightBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(false);
                }
            });
        }
    });
}(jQuery));