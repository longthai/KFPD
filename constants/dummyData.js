import images from "./images"
import icons from "./icons"

const restaurantList = [
    {
        id: 1,
        name: "Kauppakeskus Ratina",
        image: images.ratina,
        distance: "171",
        location: "Tampere",
        isBookmark: false,
        address: "Vuolteenkatu 1, 33100 Tampere",
        hour:"MA-PE 10:30 - 20:00\nLA 11:00 - 19:00 \nSU 12:00 - 18:00",
        ingredients: [
            {
                id: 1,
                icon: icons.tofu,
                description: "",
                description: "Tofua ja kasviksia"
            },
            {
                id: 2,
                icon: icons.kevat,
                description: "",
                description: "Pienet Kevätrullat"
            },
            {
                id: 3,
                icon: icons.dynamiitti,
                description: "",
                description: "Dynamiitti-kanaa"
            },
            {
                id: 4,
                icon: icons.mandariini,
                description: "",
                description: "Mandariini-kanaa"
            },
            {
                id: 5,
                icon: icons.kungpo,
                description: "",
                description: "Kung Po-kanaa"
            },
            {
                id: 6,
                icon: icons.kala,
                description: "",
                description: "Chilipippuri-kalaa"
            },
            {
                id: 7,
                icon: icons.sweetchili,
                description: "",
                description: "Crispy Chili-kanaa"
            },
            {
                id: 8,
                icon: icons.teriyaki,
                description: "",
                description: "Teriyaki-kanaa"
            },


        ],
        viewers: [
            {
                id: 1,
                profilePic: images.foodora
            },
            {
                id: 2,
                profilePic: images.wolt
            }
        ]
    },
    {
        id: 2,
        name: "Kauppakeskus Sello",
        image: images.sello,
        distance: "2.7",
        location: "Espoo",
        isBookmark: true,
        address: "Leppävaarankatu 3-9, 02600 Espoo",
        hour:"MA-PE 10:30 - 20:00\nLA 11:00 - 19:00 \nSU 12:00 - 18:00",
        ingredients: [
            {
                id: 1,
                icon: icons.tofu,
                description: "Tofua ja kasviksia"
            },
            {
                id: 2,
                icon: icons.kevat,
                description: "Pienet Kevätrullat"
            },
            {
                id: 3,
                icon: icons.dynamiitti,
                description: "Dynamiitti-kanaa"
            },
            {
                id: 4,
                icon: icons.sweetchili,
                description: "Crispy Chili-kanaa"
            },
            {
                id: 5,
                icon: icons.teriyaki,
                description: "Teriyaki-kanaa"
            },


        ],
        viewers: [
            {
                id: 1,
                profilePic: images.foodora
            },
            {
                id: 2,
                profilePic: images.wolt
            }
        ]
    },
    {
        id: 3,
        name: "Kauppakeskus Iso Omena",
        image: images.isoomena,
        distance: "12.5",
        location: "Espoo",
        isBookmark: true,
        address: "Piispansilta 11, 02230 Espoo",
        hour:"MA-PE 10:30 - 21:00\nLA 11:00 - 21:00 \nSU 12:00 - 20:00",
        ingredients: [
            {
                id: 1,
                icon: icons.tofu,
                description: "Tofua ja kasviksia"
            },
            {
                id: 2,
                icon: icons.kevat,
                description: "Pienet Kevätrullat"
            },
            {
                id: 3,
                icon: icons.dynamiitti,
                description: "Dynamiitti-kanaa"
            },
            {
                id: 4,
                icon: icons.mandariini,
                description: "Mandariini-kanaa"
            },
            {
                id: 5,
                icon: icons.kungpo,
                description: "Kung Po-kanaa"
            },
            {
                id: 6,
                icon: icons.kala,
                description: "Chilipippuri-kalaa"
            },
            {
                id: 7,
                icon: icons.sweetchili,
                description: "Crispy Chili-kanaa"
            },
            {
                id: 8,
                icon: icons.teriyaki,
                description: "Teriyaki-kanaa"
            },



        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.foodora
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.wolt
            }
        ]
    },
    {
        id: 4,
        name: "Kauppakeskus Columbus",
        image: images.columbus,
        distance: "22.3",
        location: "Helsinki",
        isBookmark: false,
        address: "Vuotie 45, 00980 Helsinki",
        hour:"MA-PE 10:30 - 20:00\nLA 11:00 - 19:00 \nSU 12:00 - 18:00",
        ingredients: [
            {
                id: 3,
                icon: icons.dynamiitti,
                description: "Dynamiitti-kanaa"
            },
            {
                id: 6,
                icon: icons.teriyaki,
                description: "Teriyaki-kanaa"
            },

        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.foodora
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.wolt
            }

        ]
    },
    {
        id: 5,
        name: "Kauppakeskus Myyrmanni",
        image: images.myyrmanni,
        distance: "4.5",
        location: "Vantaa",
        isBookmark: false,
        address: "Iskoskuja 3, 01600 Vantaa",
        hour:"MA-PE 10:30 - 20:00\nLA 11:00 - 19:00 \nSU 12:00 - 18:00",
        ingredients: [
            {
                id: 1,
                icon: icons.tofu,
                description: "Tofua ja kasviksia"
            },
            {
                id: 2,
                icon: icons.kevat,
                description: "Pienet Kevätrullat"
            },
            {
                id: 3,
                icon: icons.dynamiitti,
                description: "Dynamiitti-kanaa"
            },
            {
                id: 4,
                icon: icons.teriyaki,
                description: "Teriyaki-kanaa"
            },


        ],
        viewers: [
            {
                id: 1,
                profilePic: images.foodora
            },
            {
                id: 2,
                profilePic: images.wolt
            }
        ]
    },

]

const categories = restaurantList


export default {
    restaurantList,
    categories
}