input.onButtonPressed(Button.A, function () {
    Sprite.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    Sprite.change(LedSpriteProperty.Y, 1)
})
let Sprite: game.LedSprite = null
basic.showIcon(IconNames.Skull)
Sprite = game.createSprite(0, 0)
