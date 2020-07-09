class Player{

  constructor(){
  this.index=null;
  //this.distance=0;
  this.name=null;
  this.q1=null;
  this.q2=null;
  this.q3=null;
  this.email=null;


  
  }

  getCount(){

      var playerCountRef=database.ref('userCount');
      playerCountRef.on("value",(data)=>{
          playerCount=data.val();
      })
  }

  updateCount(count){

      database.ref('/').update({
          userCount:count
      })
  }

  update(){

      var playerIndex="users/user"+this.index;
      database.ref(playerIndex).set({
          name:this.name,
          q1:this.q1,
          q2:this.q2,
          q3:this.q3,
          email:this.email
      })
  }

  static getPlayerInfo(){

      var getPlayerInfoRef=database.ref('players');
      getPlayerInfoRef.on("value",(data)=>{
          allPlayers=data.val();
      });
  }
}

