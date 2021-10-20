var Links ={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(1 < alist.length){
    //   alist[i].style.color=color;
    //   i = i + 1;
    // }
    $('a').css('color',color);
  }
}
var Body ={
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function lightDarkHandler(self){
    if(self.value ==='Dark'){
      Body.setBackgroundColor('#151313');
      Body.setColor('white');
      self.value = 'Light';

      Links.setColor('powderblue');
    }else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'Dark';

      Links.setColor('blue');
}
}
