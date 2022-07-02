import mock from "/src/@fake-db/mock";
/* eslint-disable global-require */
const data = {
  airlineBase: [
    {
      id: 1,
      nameAirline: 'Latam Airlines',
      imageAirline: 'https://www.aeroermo.com/home/wp-content/uploads/2019/02/LATAM-Airlines-horizontal-positivo-CMYK.jpg',
      hometown: "Guayaquil",
      destination: "Quito",
      targetTooltip: "gye-uio",
      scale: "1 escala",
      price: "500",
      titlePrice: 'Precio por Adulto',
      timeFly: [
        {
          id: 1,
          exitAt: "23:59",
          returnAt: "11:04",
          time: "10h 05min"
        },
        {
          id: 2,
          exitAt: "8:00",
          returnAt: "13:05",
          time: "6h 05min"
        },
      ]
    },
    {
      id: 2,
      nameAirline: 'Avianca',
      imageAirline: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/LogoAvianca.png',
      hometown: "Quito",
      destination: "Cuenca",
      targetTooltip: "uio-uea",
      scale: "2 escalas",
      price: "400",
      titlePrice: 'Precio por niño',
      timeFly: [
        {
          id: 1,
          exitAt: "23:59",
          returnAt: "11:04",
          time: "10h 05min"
        },
      ]

    },
    {
      id: 3,
      nameAirline: 'Copa Airlines',
      imageAirline: 'https://i.pinimg.com/originals/f4/9c/b4/f49cb4a163101efd1f9aed0eef28dfbf.jpg',
      hometown: "Cuenca",
      destination: "Medellín",
      targetTooltip: "uea-mel",
      scale: "3 escalas",
      price: "300",
      titlePrice: 'Precio por parejas',
      timeFly: [
        {
          id: 1,
          exitAt: "23:59",
          returnAt: "11:04",
          time: "10h 05min"
        },
        {
          id: 2,
          exitAt: "8:00",
          returnAt: "13:05",
          time: "1h 05min"
        },
      ]

    },
  ],
}
/* eslint-disable global-require */
mock.onGet('/airline/data').reply(() => [200, data.airlineBase])
