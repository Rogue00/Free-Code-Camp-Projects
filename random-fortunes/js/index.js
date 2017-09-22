$(document).ready(function() {
  function getFortune() {

    var fortune = ["Fortune: A friend asks only for your time not your money.", "Fortune: If you refuse to accept anything but the best, you very often get it.", "Fortune: A smile is your passport into the hearts of others.", "Fortune: A good way to keep healthy is to eat a balanced diet and exercise regularly.", "Fortune: Your high-minded principles spell success.", "Fortune: The right man in the wrong place can make all the difference in the world.", "Fortune: Hard work pays off in the future, laziness pays off now.", "Fortune: People are naturally attracted to you​.", "Fortune: Change can hurt, but it leads a path to something better.", "Fortune: Enjoy the good luck a companion brings you.", "Fortune: Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", "Fortune: A chance meeting opens new doors to success and friendship.", "Fortune: You learn from your mistakes... You will learn a lot today.", "Fortune: If you have something good in your life, don't let it go!", "Fortune: What ever you're goal is in life, embrace it visualize it, and for it will be yours.", "Fortune: Your shoes will make you happy today.", "Fortune: You cannot love life until you live the life you love.", "Fortune: Be on the lookout for coming events; They cast their shadows beforehand.", "Fortune: Land is always on the mind of a flying bird.", "Fortune: The man or woman you desire feels the same about you.", "Fortune: Meeting adversity well is the source of your strength.", "Fortune: A dream you have will come true.", "Fortune: Our deeds determine us, as much as we determine our deeds.", "Fortune: Never give up. You're not a failure if you don't give up.", "Fortune: You will become great if you believe in yourself.", "Fortune: There is no greater pleasure than seeing your loved ones prosper", "Fortune: You will marry your lover.", "Fortune: A very attractive person has a message for you.", "Fortune: You already know the answer to the questions lingering inside your head.", "Fortune: It is now, and in this world, that we must live.", "Fortune: You must try, or hate yourself for not trying.", "Fortune: You can make your own happiness.", "Fortune: The greatest risk is not taking one.", "Fortune: The love of your life is stepping into your planet this summer.", "Fortune: Love can last a lifetime, if you want it to.", "Fortune: Adversity is the parent of virtue.", "Fortune: Serious trouble will bypass you.", "Fortune: A short stranger will soon enter your life with blessings to share.", "Fortune: Now is the time to try something new.", "Fortune: Wealth awaits you very soon."];

    var topNum = 100;
    var number = [];

    for (var i = 1; i <= topNum; i++) {
      number.push(i);
    }

    var newFortune = Math.floor((Math.random() * fortune.length));

    var newFortune = fortune[newFortune];
    var newNum = Math.floor((Math.random() * number.length));
    var newNum = number[newNum];

    $(".fortune").text(newFortune);

    $('.number').text(newNum);
  }
  $(".btn").on("click", function() {
    getFortune();

  });
});