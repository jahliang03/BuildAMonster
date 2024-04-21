class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        //"294" y="1018"
        this.earRightX = 360; 
        this.earRightY = 270; 

        this.earLeftX = 250; 
        this.earLeftY = 270; 

        this.eyeX = 300;
        this.eyeY = 320;

        this.smileX = 300; 
        this.smileY = 380; 

        this.armRightX = 400; 
        this.armRightY = 380; 

        this.armLeftX = 200; 
        this.armLeftY = 380; 

        this.legRightX = 350; 
        this.legRightY = 470; 

        this.legLeftX = 250;
        this.legLeftY = 470;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowD.png");
        
        my.sprite.earRight = this.add.sprite(this.earRightX,this.earRightY, "monsterParts", "detail_yellow_ear_round.png");
        my.sprite.earLeft = this.add.sprite(this.earLeftX,this.earLeftY, "monsterParts", "detail_yellow_ear_round.png");
        my.sprite.earLeft.flipX = true

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts","eye_cute_light.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fang = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false
        
        my.sprite.armRight = this.add.sprite(this.armRightX, this.armRightY, "monsterParts", "arm_yellowE.png");
        my.sprite.armRight.angle = -30

        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armLeftY, "monsterParts", "arm_yellowE.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armLeft.angle = 30;

        my.sprite.legRight = this.add.sprite(this.legRightX, this.legRightY, "monsterParts", "leg_yellowC.png");
        my.sprite.legLeft= this.add.sprite(this.legLeftX, this.legLeftY, "monsterParts", "leg_yellowC.png");
        my.sprite.legLeft.flipX = true;

        this.input.keyboard.on('keydown-F', () => {
            this.smileType = 'Fang';
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        });

        //Event input: regular smile
        this.input.keyboard.on('keydown-S', () => {
            this.smileType = 'Smile';
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //my.sprite.earRight = this.add.sprite(this.earRightX, this.earRightY, "monsterParts", "detail_yellow_ear_round.png");
        const moveSpeed = 3; 

        //Move left with 'A'
        if(this.input.keyboard.addKey('A').isDown) {
            for (const key in my.sprite) {
                if (my.sprite.hasOwnProperty(key)) {
                    my.sprite[key].x -= moveSpeed;
                }
            }
        }
        //Move right with 'D'
        if(this.input.keyboard.addKey('D').isDown) {
            for (const key in my.sprite) {
                if (my.sprite.hasOwnProperty(key)) {
                    my.sprite[key].x += moveSpeed;
                }
            }
        }
        
    }

}