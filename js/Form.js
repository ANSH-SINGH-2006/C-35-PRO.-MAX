class Form{
  constructor(){
      this.input=createInput("name");
      
     
      
      this.greeting=createElement('h3')

      this.input0 = createInput("yes/no");
    this.input1 = createInput("yes/no");
    this.input2= createInput("amount/N.A.")
    this.input3= createInput("name")
    this.input4= createInput("email")
    this.button = createButton('Submit');
  }
  

  display(){
 //this. title=createElement('h2');
 this. title = createElement('h2')
   this. title1 = createElement('h2')
   this. title2 = createElement('h2')
   this. title3 = createElement('h4')
   this. title4 = createElement('h4')
 //this.title.html("CAR RACING GAME");
 //this.title.position(displayWidth/2-50,0);
 
this.title.html("Q1- Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
this.title.position(100, 0);
 
this.title1.html("Q2- Would you be willing to contribute a small amount every month for such a program?")
this.title1.position(100, 100);

this.title2.html("Q3- How much per month would you be willing to pay?")
this.title2.position(100, 200);

this.title3.html("Mention your NAME");
this.title3.position(100, 420);

this.title4.html("Mention your Email ID");
this.title4.position(100, 520);


    this.input0.position(130,60)

    this.input1.position(130, 160);

    this.input2.position(130,260);

    this.input3.position(130,480)

    this.input4.position(130,580)
    
    this.button.position(130, 700);
 //this.button.position(displayWidth/2+30,displayHeight/2);
 

 this.button.mousePressed(()=>{   
     

     player.name=this.input3.value();
     player.q1=this.input0.value();
     player.q2=this.input1.value();
     player.q3=this.input2.value();
     player.email=this.input4.value();



     playerCount+=1;
     player.index=playerCount;

     player.update();
     player.updateCount(playerCount);

     
 })
 
  }

}