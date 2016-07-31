var main = function(){

$('#fullpage').fullpage({
      anchors: ['home', 'eventeral', 'twiser', 'wck', 'dinendash', 'dcck', 'experience'],
      navigation: true,
      navigationPosition: 'right',
      menu: '#menu',
      scrollingSpeed: 1000,
      paddingTop: '2em',
      loopBottom: true,
      fixedElements: 'experience'
    });
}

$(document).ready(main);
