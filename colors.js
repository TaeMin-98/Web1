
    var Links = {
      setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while( i < alist.length){
          alist[i].style.color = color;
          i = i + 1;
        }
      }
    }
    var Body={
      setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
      },
      setColor:function(color){
        document.querySelector('body').style.color = color;
      }
    }
    function NightModeSwitch(self){
      var target = document.querySelector('body');
      if(self.value === 'Night Mode'){
          Body.setBackgroundColor('black');
          Body.setColor('white');
          self.value = 'Night Mode Off';
          Links.setColor('#B0E0E6');
      }
      else{
          Body.setBackgroundColor('white');
          Body.setColor('black');
          self.value = 'Night Mode';
          Links.setColor('#588c7e');
      }
    }
