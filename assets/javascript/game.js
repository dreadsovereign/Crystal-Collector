var wins = 0;
var losses = 0;

var math = 0;

var number = Math.floor((Math.random()* 100) + 19);

var diamond = Math.floor((Math.random()* 12) + 1);
var emerald = Math.floor((Math.random()* 12) + 1);
var ruby = Math.floor((Math.random()* 12) + 1);
var topaz = Math.floor((Math.random()* 12) + 1);

var configmath = function(){
  $(".wins").empty();
  $(".wins").append("WINS: " + wins);
  $(".losses").empty();
  $(".losses").append("LOSSES: " + losses);
  $(".score").empty();
  $(".score").append("SCORE: " + math);
  
}

var reset = function(){
  math = 0;
  number = Math.floor((Math.random()* 100) + 19);

  $('.random-number').empty();
  $('.random-number').append(number);

  diamond = Math.floor((Math.random()* 12) + 1);
  emerald = Math.floor((Math.random()* 12) + 1);
  ruby = Math.floor((Math.random()* 12) + 1);
  topaz = Math.floor((Math.random()* 12) + 1);
  configmath();

}

var config = function (){
  if (math == number) {
    wins = wins + 1;
    reset();
}
  else if(math > number){
    losses = losses + 1;
    reset();
}
  else{
    configmath();
}}

  $('.score').append(math);
  $('.random-number').append(number);

  $(document).ready(function(){
  
  $(".diamond").click(function(){
    math = math + diamond;
    config();
  })
  
  $(".emerald").click(function(){
    math  = math  + emerald;
    config();
  })
  
  $(".ruby").click(function(){
    math  = math  + ruby;
    config();
  })
  
  $(".topaz").click(function(){
    math  = math  + topaz;
    config();
  })

});
