const axios = require("axios");

module.exports = {
    async getQCPhotos(url) {
        // Tu później dodamy prawdziwe API QC (Weidian/Taobao)
        return {
            title: "Przykładowy produkt",
            price: "¥129",
            weight: "0.8kg",
            views: "3421",
            photos: [
                "https://i.imgur.com/Da8yH7K.jpeg",
                "https://i.imgur.com/9Jqv2N1.jpeg"
            ]
        };
    }
};
