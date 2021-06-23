class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    if(gameState === 2){

    
    //write code here to hide question elements✔

    //write code to change the background color here✔
    background("white");

    //write code to show a heading for showing the result of Quiz✔
    textSize(40);
    text("Result of the Quiz", 150,100);
   
    //call getContestantInfo( ) here✔
    Contestant.getPlayerInfo();
   
    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      var display_position = 130;
      display_position = 20;
      textSize(15);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 120, display_position);
    }


    //write code to add a note here✔
    if( allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("Note: The contestants who answered correct are highlighted in green color", 130,240);
    }

    //write code to highlight contest who answered correctly✔
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
      fill("Green");
      } else {
      fill("red");
      }
    }
   
  }

  }
  }

