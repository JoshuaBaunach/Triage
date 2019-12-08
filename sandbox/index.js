var myRect

var game = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480
        this.canvas.height = 270
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.interval = setInterval(updateGameArea, 20)
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

function component(width, height, imageSrc, x, y) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = 1
    this.speedY = 1
    this.image = document.createElement("img")
    this.image.src = imageSrc
    this.update = function() {
        ctx = game.context
        this.x += this.speedX
        this.y += this.speedY
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.hitEdge()
    }
    this.hitEdge = function() {
        if ((this.x + this.width) >= game.canvas.width || this.x <= 0) {
            this.speedX *= -1
        }
        if ((this.y + this.height) >= game.canvas.height || this.y <= 0) {
            this.speedY *= -1
        }
    }
}

function updateGameArea() {
    game.clear()
    myRect.update()
}

game.start()
myRect = new component(100, 60, "dvdLogo.png", 10, 120)