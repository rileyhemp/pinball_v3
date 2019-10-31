const config = {
    type: Phaser.AUTO,
    width: 440,
    height: 800,
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    scene: {
        preload: preload, 
        create: create,
        update: update 
    }
}

const Bodies = Phaser.Physics.Matter.Matter.Bodies

let 
    balls, 
    spacebar, 
    left,
    right,
    ball, 
    bounds, 
    leftFlipper, 
    leftBlock, 
    leftPivot, 
    leftFlipperPin, 
    rightFlipper, 
    rightBlock, 
    rightPivot, 
    rightFlipperPin

const game = new Phaser.Game(config)



function preload() {
    this.load.image('ball', 'dist/assets/sprites/wizball.png')
    this.load.image('rectA', 'dist/assets/solids/grey-solid.svg')
    this.load.image('schematic', 'dist/assets/schematic.jpg')
}


//***************************************************************************************//


function create() {
    bounds = this.matter.world.setBounds(0, 0, 440, 800, 30, true, true, true, true)
    this.matter.world.setGravity(0,1)

    left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    
    let schematic = this.add.image(220,400, 'schematic')
    schematic.scale = 0.8
    
    class Ball extends Phaser.Physics.Matter.Image {
        constructor(scene, x, y, texture) {
            super(scene.matter.world, x, y, texture)
            super.setScale(.17)
            super.setCircle(8.657)
            scene.sys.displayList.add(this)
        }
        launch(){
            super.setVelocityY(-30)
        }
    }
    
    class Bumper extends Phaser.Physics.Matter.Sprite {
        constructor(scene, x, y, texture){
            super(scene.matter.world, x, y, texture)
            super.setStatic(true)
            scene.sys.displayList.add(this)
        }
    }

    class Flipper extends Phaser.Physics.Matter.Image {
        constructor(scene, x, y, texture, orientation) {
            super(scene.matter.world, x, y, texture)
           // super.setStatic(true)
            super.setFriction(.2)
            scene.sys.displayList.add(this)
            this.setScale(0.15, .15)
            this.rotation = 0.55
            console.log(this.width)
        }
    }
    
    //Create the ball
    ball = new Ball(this, 152, 625, 'ball') 
    ball.setFrictionStatic(0.02)
    ball.setMass(.25)
    ball.setFrictionAir(0)
    ball.setBounce(0.25)



    //Left flipper mechanism
    
    //Create bottom block to stop flipper from going too low
    leftBlock = this.matter.add.image(170,727 ,'rectA', this, {
        isStatic: true
    })
    leftBlock.scaleX = .1,
    leftBlock.scaleY = .1,
    leftBlock.rotation = .55
    
    //Create a pivot point to attach the constraint to
    leftPivot = this.matter.add.image(145, 695, null, this)
    leftPivot.setScale(.2)
    leftPivot.setCircle(1)
    leftPivot.setStatic(true)

    //Create the left flipper components 
    let rectA = Bodies.rectangle(170 , 699, 70, 16)
    let circleA = Bodies.circle(150, 699, 5)
    circleA.mass = 2
    let circleB = Bodies.circle(188, 695, 4)

    
    //Create left flipper compound body
    leftFlipper = Phaser.Physics.Matter.Matter.Body.create({
        parts: [ circleA, circleB, rectA  ]
    });
    this.matter.add.image(150, 0, null).setScale(0.2).setExistingBody(leftFlipper)

    //Add the pivot constraint
    leftFlipperPin = this.matter.add.constraint(leftPivot, leftFlipper)    
    leftFlipperPin.stiffness = .9
    leftFlipperPin.length = 0
    leftFlipperPin.pointA = {
        x: 5, 
        y: 5
    }
    leftFlipperPin.pointB = {
        x: -15, 
        y: 0
    }

    //Right flipper mechanism
    
    //Create bottom block to stop flipper from going too low
    rightBlock = this.matter.add.image(260,727 ,'rectA', this, {
        isStatic: true
    })
    rightBlock.scaleX = .1,
    rightBlock.scaleY = .1,
    rightBlock.rotation = -.55
    //345 286
    //Create a pivot point to attach the flipper to
    rightPivot = this.matter.add.image(286, 695, null, this)
    rightPivot.setScale(.2)
    rightPivot.setCircle(1)
    rightPivot.setStatic(true)

    //Create the right flipper components 
    let rectB = Bodies.rectangle(250 , 699, 70, 16)
    let circleC = Bodies.circle(270, 699, 5)
    circleC.mass = 2
    let circleD = Bodies.circle(229, 695, 4)

    
    //Create right flipper compound body
    rightFlipper = Phaser.Physics.Matter.Matter.Body.create({
        parts: [ circleC, circleD, rectB  ]
    });
    this.matter.add.image(350, 0, null).setScale(0.2).setExistingBody(rightFlipper)

    //Add the pivot constraint
    rightFlipperPin = this.matter.add.constraint(rightPivot, rightFlipper)    
    rightFlipperPin.stiffness = .9
    rightFlipperPin.length = 0
    rightFlipperPin.pointA = {
        x: -5, 
        y: 5
    }
    rightFlipperPin.pointB = {
        x: 15, 
        y: 0
    }

    //Increase mass of the flippers
    leftFlipper.mass = 50

    //rightFlipper.isStatic = true

}

function update() {
    
    //Input control of left flipper
    if (Phaser.Input.Keyboard.JustDown(left)){
        leftFlipper.torque = -3
    } 
    //Apply torque in opposite direction after left flipper reaches max angle
    if(leftFlipper.angle <= -.5 ){
        leftFlipper.torque = 1
    } 

    //Input control of right flipper
    if (Phaser.Input.Keyboard.JustDown(right)){
        rightFlipper.torque = 3
    } 
    //Apply torque in opposite direction after right flipper reaches max angle
    if(rightFlipper.angle >= .5 ){
         rightFlipper.torque = -1
     } 
    
    //This function lowers the gravity when the ball is going up and raises it on the way down.
    if(ball.body.velocity.y < 0){
        this.matter.world.setGravity(0,0.2)
    } else {
        this.matter.world.setGravity(0,.35)
    }

} 





///The base of the flipper is a 15mm diameter circle, sloping down to a 5mm diameter circle at the tip. Overall length is 71mm, 