let Bilangan_betul = 0
let Nombor_1 = 0
let Nombor_2 = 0
let Jawapan = 0
basic.forever(function () {
    Bilangan_betul = 0
    Nombor_1 = 0
    Nombor_2 = 0
    Jawapan = 0
    basic.showNumber(Bilangan_betul)
    basic.showNumber(Nombor_1)
    basic.showNumber(Nombor_2)
    Nombor_1 = randint(1, 20)
    Nombor_2 = randint(1, 20)
    Jawapan = Nombor_1 * Nombor_2
})
