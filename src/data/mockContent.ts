export interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
  synopsis?: string;
  duration?: string;
  cast?: string[];
  // URL de streaming opcional (HLS u otro)
  streamUrl?: string;
}

export const mockMovies: ContentItem[] = [
  {
    id: 'Nadie 2',
    title: 'Nadie 2',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/aYPlrLJWjVkixwrJXA0f4V3D7Ab.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch sigue manteniendo con la organización criminal una deuda de 30 millones de dólares que trata de saldar poco a poco con una serie interminable de golpes contra matones internacionales. Pese a disfrutar como siempre de la faceta más trepidante y física de su «trabajo», Hutch y su esposa Becca se sienten agotados y distanciados. Para intentar remediarlo, deciden llevarse a sus hijos de escapada al mismo lugar al que Hutch iba de vacaciones con su hermano Harry cuando eran pequeños.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://2448396427.tapecontent.net/radosgw/4yQew0lV66TKK0V/EqzIo0Chg98zs-Ijpo7sNh9hfYRquS8R_K6aJw4W2L-Py6ivU6UgLqp-qG4kclYq37ipA9jSNmE4C4ogFQWuaLfGiAlGXHcpsLpdCJifVqAaIm6EUdjzubaVlyszKIPEl7OujAcJrWQF3nrIRyDsBrxhunBN8fYCm-H-Q7eBcYpiYmbYlmm_VqnReOB0hCkbiWV0qSz4ZZpFrrAlVMEC6-eTRT4WoFXUr5QxO7EmqKdNWwe0XS1yAS6glyWS7BYo6q87JB5fnw_nZdWb/Nadie+2.mp4?stream=1'
  },
  {
    id: '1',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://861515134.tapecontent.net/radosgw/XYY4xGlbzwIDD0B/obYuR7DxaB6ZswLfpw3TSvZv8g7DUD-94OLaOoZ8ttGCHb6G7SLlwqYq3OrrlUQCJfgTe0IxM8R2DmH4nKrz0qk0xcJzmZe2KWpi4ILzqe7t5wrgdpv7c3iUKEuCWR3h3rg65tmQE7NFmlv4HSu6NJbhKGUrk-doygD7eCYUeOR5FtO8YtUj9q07nff9FBZU0goyGi0QLIujcZfNNvIT1TVexe0sgZgTmPrRmg86OGQvNY2WYGDYMxgFoTd5V00-VFenJZ0lG_8OjYe6BnQSvTHkEGWaivXlcxlUJA/La+Hacienda.mp4?stream=1'
  },
  {
    id: '2',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://2475154960.tapecontent.net/radosgw/zbWOjWPYmmiYO9Y/b029MknMzZo_YjhF8unCWAolWAuReRUXqgWPFzR6qnlTEeA959dzEdYIt5eE5VPj2yFOeRffdLCFJv_rBRj1lRhvlJHTAK3r-WTHu_qq5WN6FiIupBb7yj1h1Dh13iaIJkMBBcHrMFGkRZlAbxA4jRdGMROWcelMGLXbf3mkplvKRhHNJdb09FPbr_cSUc0iAtAHEE_8Oq2g6LA3F7bT8ouEnGbL12ujjYDqgwzYAKABUKbQbWYA8FVCYaTjDo3Ou3vxTnNig4j-ykBXAiS8NeNEez45C3gXYL4wQ0RZG_Qrzat0HE-_EfJNk20/Pel%C3%ADcula+%C2%BFY+d%C3%B3nde+est%C3%A1+el+polic%C3%ADa.mp4?stream=1'
  },
  {
    id: '3',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://861134102.tapecontent.net/radosgw/vrp1oVM6KQi43RY/ki0a82M38t4Q0LRIc5GBBdDRxOPf20zKQN87_9OPUypER0s4yTOxwfO-NOCdg4ZNuHSsQA6OrERpWVmxEwqAz2pDacePxQ6bohWEUgVA31b6EsoLT7kD6Wm7VIXSf5gpT24T9DiEszRG7HaZqrghbyphPP-JDznagyVvFI7iPtlRjya7g1yoUeAew0c8lDb8nkHRDdiBe_XZJMz2ZSBE2700uCHYr08dekQ-EgVDcx01b2t3JnOcLQ2a9-kaXOVck1evk_d5Do_1mWj_opp5omPjNw5YXejwefnJQQ/Pel%C3%ADcula+Maa+2025.mp4?stream=1'
  },
  {
    id: '4',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://861134091.tapecontent.net/radosgw/LyRKQGLPediRjmB/hs-Ho0ellrDXGNA-dTNxcPbUQA-K3ciQjVl7vqNYhzR72Klka51Zpm5yBQpFOoidKpxrv-oLszhUyvAtC193-6Thlxq5YIoYaz080IhxwhiCRFNac9oAr5sJTD3ZSAvKzcp2TQbFFtV5NJh8OVmT6EZQ4HUpCKPoWksKBoimcWJFFE5m7nJMtIeRkmdDha4-Eiy7Mvie1IPyHoDCk8m4rGtGWEMGyxzASjnFYI4IvLjAakgfavEDIL-yP7r9Fe1re86wrh0oJ1pXGC-gjjebR6CH4uK9ql9Z3bHcS1FO2f4cYv3-CGSkT_2mnWQ/Pel%C3%ADcula+Hallow+Road+2025.mp4?stream=1'
  },
  {
    id: '5',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://2453340614.tapecontent.net/radosgw/zGYVRoq3VQfY3Q7/3ZMLQlMnzN5EK3x7KGPT9rDJkBakyq8eYswS6bufcx2dl9Wu68B4X2kSe5WyWu8VWHs4C1k-4WzikO-eRJ4BMjQF7fqcuTl4-UJfG0V5gC4nEheiu0rIzbDLns94QmnyVIo5vkJ4V-W5Zv26H4dmDzCYT0qpDJwWoRVnwMihLsdJIyI2xftVHBcV2l019hZpKV-PLQ7RQKT2QpVfa-eobXxHTtAj35fHT70JXM2mpFsJGShV-4qDPvrrLqv436t840I1sEx4PGS7j7qIc7fZsXtinrBVHUl3zC9oXOZHj_9lUs02mBouDVPZUEQ/Pel%C3%ADcula+Shadow+of+God+2025.mp4?stream=1'
  },
  {
    id: '6',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://2475154809.tapecontent.net/radosgw/8OWKwr8l6ju6jv/QRW9ur84tqdTh70xOubd861KpnG3xUBdEFbX-uQ9jnWdlu-aW9mAfcUBMbzhZoqDdag2SInAyPoH-Fr_ZAelr56zUB407nl_5vfuDrO6yZR9HnzjfTfCT8RLQku60nNTJ2kXTGmSuDPzVD5idgvEKb1XVHFVVs698HKTmLUxJq6TR8eDBNwArhy7iJ3hzLF3XUJ0fsfPR8KBxv3pGLg45D8701Nge6XkRqLdChGfxBbuA2z85szRMgBYPBXIUSZdyVOgICfV_1YIIWJyPXxKcU-oFIcq8VtBr5wWRyqiN01m5ELz54GV_ie6yFA/Pel%C3%ADcula+The+Damned+2025.mp4?stream=1'
  },
  {
    id: '7',
    title: 'Película Leyendas de los héroes Cóndor: Los valientes (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/fAfbtF0OuHU5TnAU7w8qeO0cnr7.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Guo Jing abandonó su ciudad natal y adquirió un enorme poder en las artes marciales para cambiar su destino. Aunque era valorado por los maestros de kung fu que transmitieron las artes marciales sin parangón en el mundo "Manual de los Nueve Yin" y "Dieciocho Palmas Subyugadoras del Dragón", se formaron celos hacia él por parte de todos, convirtiéndose en el blanco de las críticas públicas. Guo Jing y Huang Rong cambiaron las tornas y protegieron la frontera de la dinastía Song del Sur en medio de la lluvia de flechas.',
    duration: 'Duración: 2h 27m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://908373295.tapecontent.net/radosgw/r8eQJyR71bfbRQw/ynQsH-di9rOtDt5g3k4uuGCHQgwb7Hco4BHUldb5GnG1lBWESewN_pm3YmKpi9DaBFwpWgYO4vUYWnlmb1mU4MePOBYDIMHycz09PFMBOFr3hC6fkVUnYe-FFgBoy4qKq6wvwaHN30lxX0Q2tfTwdiP6znWya7MEmtp3Xq0QKsp_OqlmiFxuz7xNlagb-dWMufHDjsb1CTtwW2NZYs4G8nrfA1aFz8e2vd1Z-WKfnzgyvtw7d2RS3OKHl7lR-wiXr_T6FmZsdRElL1dcYZrV9mMVH7U0nqZFRXeEy3r3O2x6qlP88llqmAgm44Kxy_r980mp5ysxgILE0awD/Pel%C3%ADcula+Leyendas+de+los+h%C3%A9roes+C%C3%B3ndor+Los+valientes+2025.mp4?stream=1'
  },
  {
    id: '8',
    title: 'Película Screamboat La Masacre Del Ratón (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/jWgeW8ZW5gDQIPgFYZ24bt4pW6W.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un travieso ratón acecha a un grupo de neoyorquinos en un viaje nocturno en ferry, desatando un caos asesino en un viaje relajante. ¿Podrá la variopinta tripulación del barco encontrar la manera de detener a esta criatura asesina?',
    duration: 'Duración: 1h 42m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://861134113.tapecontent.net/radosgw/4DKWValMXwiKYjK/poNCdWUuxxzhUEJhJRe18KNQD0eDoEZ8C2s7oNEFJbO5BuE0FZyzamEuFVx1AK02L8PD08hqlgx6zJIlTUD4IvSmKvCCTiPg3c_kz4NmfpnG9fEPdPcerY13wXXhQ1DpTROTOdCJwB4GX0KfwkCEdrwwWb5G_OnNbmkEQLgYoH-RZwOAFbJwQWtJD4IhgEt39-_Q04adW-AzqLUOjgeqCScr5JEqC0n7hnvEmEtsB68SUolIfOyELo2xLmlEdeJy4SxTIPrvTd5I6woDaeQwIBLmWe8OpaDoMV6Bx_KVz-uw0xPBbMyyg2xullGRLIaKoYIpOdqZ2FrBEBni/Pel%C3%ADcula+Screamboat+La+Masacre+Del+Rat%C3%B3n+2025.mp4?stream=1'
  },
  {
    id: '9',
    title: 'Película Molt lluny (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/oF3noXatzftfCltE0iEDnzU5WIi.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"Sergio, que ha viajado a Utrecht con su familia para asistir a un partido de fútbol, ​​sufre un ataque de pánico justo antes de tomar el vuelo de regreso a Barcelona.',
    duration: 'Duración: 1h 40m',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://3652634740.tapecontent.net/radosgw/7wXqKoRvX7HALVr/-lmyk5FhwSQzKzJoVIlz8hr_UmyKPbUSFA2IlXBaZ6krkw3YhnHHVSUALTqrYDJjetm7os4Hc4yqPhfNaNxIy0gjUc4dSuPlV68M7meQBSkCKouxRjP_6Uuwsy7mTm6T1fsbjF3dThSmOLScARHUb_MN3kBH8zYFY1OQAekCOWcOuWgNhxLi4iA6-k9VKBS4SBExNk9s-Iyi3jA_VIl_bt2S_U2fjBx9Hg35q8EA03SkPehMUXho9npIPLskvbwPdFZVJdOgRUsmrd5d_Q0N4jY_rqPNZQNbK4-SWA/Pel%C3%ADcula+Molt+lluny+2025.mp4?stream=1'
  },
  {
    id: '10',
    title: 'Película El último encargo (2025)',
    year: 1972,
    genre: 'Película El último encargo (2025)',
    image: 'https://image.tmdb.org/t/p/w200/lbpyI9nwzSVDjS7OnE0uC41UciP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una recolección de dinero da un giro inesperado cuando dos incompatibles conductores de un camión blindado, Russell y Travis, son emboscados por unos delincuentes dirigidos por Zoe, una maestra del engaño. Al desatarse el caos, este extraño dúo debe lidiar con el peligro, sus personalidades opuestas, y un muy mal día que cada vez se sale más de control.',
    duration: 'Duración: 1h 34m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://860700784.tapecontent.net/radosgw/vYVd6aBZAef4xa0/Y27Fjigm3wYjd6j_krpoOEy1tO9Dx55ActNruLR4M07qxJT4iwhfHgmfttDskdAf2Xx5G-cmZVl6OIa2c_2mOKTYNnwNanfOnwgTUaPwzdmbnpoeJODCtpcRQJSDeTdTDQ5GjZRJbljNNa9ny4x1UhLJYgpYsR-pIhJ3amnA7bXXWaZu1UiabMtdOGjuNJctXuu-vTwWmkhLUeC2WPrGk3S88a8U9HO_nKvP3E33C6E2uEWuccT_1JAjs92ITYjmxyfEWBfvyhmGr1dHgfHJSFSb4zdvddZOyCALRoAR_W5_XtrC5vml8ax_XeI/Pel%C3%ADcula+El+%C3%BAltimo+encargo+2025.mp4?stream=1'
  },
  {
    id: '11',
    title: 'Película Hook (2025)',
    year: 2021,
    genre: 'Película Hook (2025)',
    image: 'https://image.tmdb.org/t/p/w200/64lztqd6GBGTyjxKxjnXYndBHVf.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Impulsado por una droga alucinógena y un deseo de venganza, James Hook asesina a John Darling y pierde su mano a manos de Peter Pan. Dieciocho años después, Wendy, ahora casada con Peter, tiene una hija, Lily. Lily descubre que Hook es su padre biológico, lo que la lleva a un retiro de cumpleaños remoto. Hook escapa de la prisión y se embarca en una matanza, teniendo como blanco a Lily y sus amigos en la mansión.',
    duration: 'Duración: 1h 18m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://2371821717.tapecontent.net/radosgw/0dwr6mY9wJT0Ye/C_R7faxX8QTJuTIDNQ2mvGHsf0a1OT_LeHP_YqYLxctcxslkPC1yWmNlQB66G4ofBawmWse4_75ooFntyOI66GBdot-jPg38sUM8RY36XKmdPPqpGkTxugjsm6-eXlqfW89rZ3Yrp0iSioagwiAjtA_gyf1ks_wZNW14or9IXoqfR_VV2JDJnozKq1cGJcFQ_pqIb-zOSmIXR8NVSoNENAHQmxZsrHu6Y8zhqkbshDvX7ssl51yy9dHm5KDQK6IU-Nx9EQdOEPkwnWMYjOYbNSa_AEfvHW0QcrHG0Q/Pel%C3%ADcula+Hook+2025.mp4?stream=1'
  },
  {
    id: '12',
    title: 'Película Los tipos malos 2 (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/j0moebdCWDjjwS6bz1ohrsRp1Vp.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'En está ocasión, los malos luchan por encontrar confianza y aceptación en sus nuevas vidas como buenos, cuando un escuadrón de criminales compuesto exclusivamente por mujeres las saca de su retiro y las obliga a hacer "un último trabajo".',
    duration: 'Duración: 1h 44m',
    cast: ['Timothée Chalamel', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://872367535.tapecontent.net/radosgw/rbgmqgdZeMub13r/heZMPb5Bs8gUAQ2ahMGAyqZ0kOSpFgX4p22xCLHZVa2PygPkMErbg4r8UT0wDHwaa-Y5eBYw0QhNa8nUi__dV3Lcpkat21mIg-dXSoJ9pZj5hcv4X93O8ZPJsApR-BFOfncxp9foIYdifMsFG9wFyEBGoxTMAKCbRtm4dYwyAtq9OXlCC-VuzXqKKBjcdWfY26-viodB6iygmNe3XQQzx0XTnuhG8_y9dAq_4ybTwE5Fm-USdFiOZJy4tdUeqRZt6oxBvutVG-MIx6-ytib3dJnbu6eq3SA72EGkajj00pISO-Sg3mfg2W5TvZ4/Pel%C3%ADcula+Los+tipos+malos+2+2025.mp4?stream=1'
  },
  {
    id: '13',
    title: 'Película Nudus (2024)',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/e3E3V7TJkB2znDC2LLJuy1Um45Z.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'Al despertar de un coma, una mujer se inquieta al descubrir todo lo que los doctores saben de ella, sin haberles dicho nada.',
    duration: 'Duración: 1h 34m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://861138102.tapecontent.net/radosgw/rJGyM0ebxjs80D/IZUpjobbxs3PiZXFAe7od2hFhoOm30LtBWd3--0K7MvAgVwVAxlV-i_qgrMRs0Odja85Nu8qXihXyBhiXjMIx1lcYhvxHbPSpYK0PReVFe3j1X1IFkmznV47_xsJ2q0YXvPE5B2TFphIqiudII25gXOjbH8vDLqdMgsw7K1G-ctAugH91qx0vVqO9j6FtgGpF93f0OL_H3jFYJJjpMk7CAf6bs4I3_Bj6GHOmfTazwbAhZNx0k6dkVEeSlQTvfldGIICgvCsTPIV4c0b3ARDrIImCzCYKLrw0cFmmA/Pel%C3%ADcula+Nudus+2024.mp4?stream=1'
  },
  {
    id: '14',
    title: 'Película Tiburones de cerca con Bertie Gregory (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/8zcrI1L3UJdaz1q1rOwl7igbHLx.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Bertie se dirige a Sudáfrica para emprender su misión más audaz hasta la fecha. Estas aguas albergan a uno de los depredadores más temidos y famosos del océano, el gran tiburón blanco. Bertie se sumergirá en las aguas poco profundas sin jaula de protección para filmar a los imponentes tiburones mientras cazan focas. En sus dominios descubrirá los desafíos a los que se enfrentan en el siempre cambiante hábitat.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://860718903.tapecontent.net/radosgw/M9VZpAjBM2ImOgL/-fzXJHK4bNSoOjB5YH1NWutDecRgC2cnJ6Tz7gcg91bdEqqIptQd_Oolna6O0B46ZkLFCwVmjUhXnFkSBIJvmJsv0OOAko-WwnhafU99uk-LlhKZLPzIlwnQBrH-eo2Oc3hHj0ucLd6Mv76Plsy-Ao1hkZ7Ie6iSQwxDCWsaW8lrtIreYknAV1ILPKNpHu8p1hOx6nKG6-r2JwIjIkysI-2RuH3_b6JT_CQAe4k4jPM3tNVUfB-uEgnB1eQ-dOCfSuKByxrzkfmKUWAs2SniYSLsZGaB4ljg0LTcBS3uuphBq6rH044FeADcbYJOFFXqchTXFgEJ0H9EDsem/Pel%C3%ADcula+Tiburones+de+cerca+con+Bertie+Gregory+2025.mp4?stream=1'
  },
  {
    id: '15',
    title: 'Película Superman (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"En sus primeros años, el joven reportero de Metrópolis y superhéroe se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Clark Kent.',
    duration: 'Duración: 2h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '16',
    title: 'Película ZOMBIES 4: El origen de los vampiros (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/6EHx7lOm1jvNTr6lqRxiqmnFFDt.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"Zed y Addison descubren los mundos enfrentados de Sunnyside y Shadyside en un viaje de verano por carretera, en el que se encuentran con monstruos.',
    duration: 'Duración: 1h 28m',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://908374512.tapecontent.net/radosgw/XWvVQ2AQBdFgYB/T8UKsW-7wW8laMNYyEF4avQ-4wT6AeBc6hT-rsAPtqRW5ojNUkog1E-NFd9OCF6mlVm5jeIo9k-E6DDAfG0SCJP4oEaLWf7nPIvG4-jmxMax0HD5_WWiT1xSZ0vvdDfDLBHmZjlqKt-u2TmqZtipKFAOnob26sFwd3YrHhSJwDPichjCitATYyW1YvJiGQPfL3OfZbZ2R0Io9bZsi2qbT9AD4hc0_nnjDNTP19A4URq6LO01RfEOkf6Bfpx8Yy6pJEr-SM6IM51akOjkfTfZbDnP5s9WIkGFSnI-Uz_RuvaW5SNqFvtauAr7ar8O6nm7EiknbBzgRk3PDvw9/Pel%C3%ADcula+ZOMBIES+4+El+origen+de+los+vampiros+2025.mp4?stream=1'
  },
  {
    id: '17',
    title: 'Película Larga Distancia (2024)',
    year: 1972,
    genre: 'Película Larga Distancia (2024)',
    image: 'https://image.tmdb.org/t/p/w200/reDAdPDDZs5diNTef6UNuRwHomW.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Tras un aterrizaje forzoso en un planeta alienígena, un minero de asteroides debe enfrentarse a los retos de su nuevo entorno, mientras atraviesa el duro terreno para llegar hasta la única superviviente: una mujer atrapada en su cápsula de escape.',
    duration: 'Duración: 1h 27m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://860567511.tapecontent.net/radosgw/8JVq6lYWepUog31/BzjnpQS09A60ZUAQFgbYzDCOtFCqV43iFIlZNaXR6HfvhdRGMUWEXxFfKQ_GvxRh-gLdK9PKs7iJIY4-68NIJwBtc--B4KcmAQNZ8T0Xrr9fkquUI85URmm5UcUqrQIQBn9DmKbX5uPE_ge0-dw0ehuBGDcCP0pJodZp-B6uEdMsXfLx4PhIJpqxYrCJ_RZeMrtjdKKDDT7uX9qTS0kJbwpUxv3ue8F7uHqvVfwoctVbJwXD322p6sfhLr7PAyWvbcUXqv02XoTSeD-COusROQUQE1mXIuI3NPB6FnIDfrk82difSZow9GsF9Qc/Pel%C3%ADcula+Larga+Distancia+2024.mp4?stream=1'
  },
  {
    id: '18',
    title: 'Película Elio (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/fGjwHlv8bCjZypi2bHbbSmyIGMV.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Elio, un niño fanático del espacio con una imaginación activa, se encuentra en una desventura cósmica en la que debe formar nuevos vínculos con excéntricas formas de vida alienígenas, navegar por una crisis de proporciones intergalácticas y, de alguna manera, descubrir quién está realmente destinado a ser.',
    duration: 'Duración: 1h 39m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://908480648.tapecontent.net/radosgw/9OaP3jWLqgU6y1/tLlkpoZdULEGARu7YJgHWjeMKKIon4nd8uXbdfvNPSISmYou8wT_wSIB127PrQVolYv6r-qco5MlCpiyeF_hDi7HjSmIKEP5XrMfjVtmfakhGDwItdRzi2QRr8khnwoamKV6lqYXpasmLLZxopevCMiPuUQlibvig6kJCxOIV45VHdajyMO089mZKpFvmujDdDPSX-0RgT0eRkjaCzCdPYYP99SDUtS-6LVlQqSuzS9C8OokArFPoG09UAOPhETx2XD2qMWT2Lcrt05hxsPeS-nQpbA_CFNOL26KUg/Pel%C3%ADcula+Elio+2025.mp4?stream=1'
  },
  {
    id: '19',
    title: 'Película Infiltrada en el búnker (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/1hmZfIhKl84b4z40Vl9F06p4eWd.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Esta es la historia de una investigadora encubierta que lo sacrificó todo y arriesgó su vida para mostrar al mundo la dura realidad que experimentó durante dos años en un laboratorio de experimentación con animales. Su investigación, a la que finalmente bautizó como "El Búnker", está capturada en cientos de horas de grabación con cámara oculta que revelan graves casos de maltrato animal. Infiltrada en el Búnker es un thriller que expone la infiltración más larga del mundo en un laboratorio farmacéutico y pone en perspectiva, a la vez que arroja luz sobre un debate social ineludible: el uso de animales en la experimentación científica.',
    duration: 'Duración: 1h 36m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://861113568.tapecontent.net/radosgw/0AxYjgmzazIgyy/Zr_NneRg8bk1Y3J48PCJntIkVSXPUfZtMtzG7-j9xZHazQN1ZH8aW16EcYb2kEixYwbgwf_mnX9OLiuR0tDwUVkAhIqkk5D5SPql58gQLOI8juDhl3Tfld96PqWAXU3TgW6x-x2pSUlF55J815P_prOqxEkifizt9o4ooseSmKwB9KnO_xH7przfIfUQrROxGSUgU3vaCf-1Og71fnIz9LieQTLp3ktqU09aF-ouxqDREzbALNSN6m8zdbNgkaWbAJTkAHkm0vI_MZQh_yv9etT2sqssJf0oZ72zIdne78Nga5d2US-lodz-WcE/Pel%C3%ADcula+Infiltrada+en+el+b%C3%BAnker+2025.mp4?stream=1'
  },
  {
    id: '20',
    title: 'Película Exterminio: La evolución (2025)',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/cn4PNK6FQnaUDDqu1vhfqZAZd39.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'Casi tres décadas desde que el virus de la ira escapó de un laboratorio de armas biológicas. Uno de los supervivientes abandona la pequeña isla en una misión hacía el oscuro corazón del continente, descubriendo secretos, maravillas y horrores que han mutado no sólo a los infectados, sino también a otros supervivientes.',
    duration: 'Duración: 1h 55m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://2448409171.tapecontent.net/radosgw/V6Ll2lB1O4tKpDJ/BwO7B5hEcXNoLW4fJhLna-Sv2BQbZ8umt6R2PfnfojVGZ62UUbzO9ewotjSGHpfbfx6gxbCOgB6khLnYcRC-qqRob5a-kjL5EBAU7FC_n3KE0YUGNcakqpnRIj6j0rxcWxj3LLubvk6XkT-yJ3-H2nKuDfiKexdd8jka00JwOBY0MNpd-36-_EeqkBbXdW_z6gd1fZbCPb_JL30cGXIpEgYV36dwGPMufDgsGr_cbP_UKFYIutEOPa5IHzZ6nhs4WJoCmw3AgVCwUbAhvtT9UVYIJwwOMUnazkJ06NB1A7z7eBOsOVh13FI-Ezw/Pel%C3%ADcula+Exterminio+La+evoluci%C3%B3n+2025.mp4?stream=1'
  },
  {
    id: '21',
    title: 'Película La Profecia del Guerrero (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/sV9vfQ6FneFt3x9FokKWAAqwWDq.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Un intrépido caballero se enfrenta a un reino mortal para salvar el alma de la Elegida. Enfrentándose a brujas, demonios y enemigos brutales, descubre que su regreso podría desatar el caos y condenar a la humanidad.',
    duration: 'Duración: 1h 43m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://908345029.tapecontent.net/radosgw/okBYLRLWXwcOrJ/C4po2XfKPgO91pLu9uNKEM9hzp8ebdZh-ME5lxC2LgwxL95HCXS6yCBbHmL3RwZGU388kCm5hE6kCEghZ0Sd9PfqJa74xvMaLVC_WeHLvH_33SeTWkQuX9rftVWdPjg6GozH4VNDNq6Db93c_mvooz1-i3E_XL_VpewFoZ0bLSAWJeRxX2j4deW1VSO_pK0Mx6_cIllmtV04Kk0KnS_o_PuGZUQOdOnDEvXxmz-pLqEF1lLiChegwR1WjrN-3fmm6Zgs3J2ievQruDsTDuxCZ4bHbUQRfFqCOi4U2UKkCd9c3DQZr-hBtFj7cec/Pel%C3%ADcula+La+Profecia+del+Guerrero+2025.mp4?stream=1'
  },
  {
    id: '22',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '23',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '24',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '25',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '26',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '27',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: '28',
    title: 'Nadie 2',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/aYPlrLJWjVkixwrJXA0f4V3D7Ab.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch sigue manteniendo con la organización criminal una deuda de 30 millones de dólares que trata de saldar poco a poco con una serie interminable de golpes contra matones internacionales. Pese a disfrutar como siempre de la faceta más trepidante y física de su «trabajo», Hutch y su esposa Becca se sienten agotados y distanciados. Para intentar remediarlo, deciden llevarse a sus hijos de escapada al mismo lugar al que Hutch iba de vacaciones con su hermano Harry cuando eran pequeños.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '29',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '30',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '31',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '32',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '33',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '34',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  }
];

export const mockSeries: ContentItem[] = [
  {
    id: 's1',
    title: 'Stranger Things',
    year: 2022,
    genre: 'Ciencia Ficción',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.7,
    synopsis: 'Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para recuperarlo.',
    duration: '4 temporadas',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'David Harbour']
  },
  {
    id: 's2',
    title: 'The Crown',
    year: 2022,
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.6,
    synopsis: 'Sigue la vida política y los romances de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.',
    duration: '6 temporadas',
    cast: ['Imelda Staunton', 'Jonathan Pryce', 'Lesley Manville']
  },
  {
    id: 's3',
    title: 'Wednesday',
    year: 2022,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.1,
    synopsis: 'Sigue a Wednesday Addams mientras navega por sus años como estudiante en la Academia Nevermore, intentando dominar su habilidad psíquica emergente.',
    duration: '1 temporada',
    cast: ['Jenna Ortega', 'Emma Myers', 'Enid Sinclair']
  },
  {
    id: 's4',
    title: 'House of the Dragon',
    year: 2022,
    genre: 'Fantasía',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.5,
    synopsis: 'Una precuela de Game of Thrones que se centra en la casa Targaryen 200 años antes de los eventos de la serie original.',
    duration: '1 temporada',
    cast: ['Paddy Considine', 'Emma D\'Arcy', 'Matt Smith']
  }
];

export const mockKidsContent: ContentItem[] = [
  {
    id: 'k1',
    title: 'Encanto',
    year: 2021,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.2,
    synopsis: 'Una niña colombiana puede ser la última esperanza de su familia cuando descubre que la magia que rodea el Encanto está en peligro.',
    duration: '1h 42min',
    cast: ['Stephanie Beatriz', 'María Cecilia Botero', 'John Leguizamo']
  },
  {
    id: 'k2',
    title: 'Turning Red',
    year: 2022,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.0,
    synopsis: 'Una niña de 13 años se convierte en un panda rojo gigante cada vez que se emociona demasiado.',
    duration: '1h 40min',
    cast: ['Rosalie Chiang', 'Sandra Oh', 'Ava Morse']
  }
];

export const mockComedyContent: ContentItem[] = [
  {
    id: 'c1',
    title: 'The Good Place',
    year: 2020,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.2,
    synopsis: 'Una mujer lucha por ser una mejor persona después de descubrir que está en el "lugar bueno".',
    duration: '4 temporadas',
    cast: ['Kristen Bell', 'Ted Danson', 'William Jackson Harper']
  },
  {
    id: 'c2',
    title: 'Brooklyn Nine-Nine',
    year: 2021,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.4,
    synopsis: 'Comedia sobre un grupo de detectives en una comisaría de Brooklyn.',
    duration: '8 temporadas',
    cast: ['Andy Samberg', 'Stephanie Beatriz', 'Terry Crews']
  }
];