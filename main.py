Bilangan_betul = 0
Nombor_1 = 0
Nombor_2 = 0
Jawapan = 0

def on_button_pressed_a():
    global Bilangan_betul, Nombor_1, Nombor_2, Jawapan
    Bilangan_betul = 0
    Nombor_1 = 0
    Nombor_2 = 0
    Jawapan = 0
input.on_button_pressed(Button.A, on_button_pressed_a)
