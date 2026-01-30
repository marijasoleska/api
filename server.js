import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/artifacts", (req, res) => {
  res.json([
    {
      externalId: "2f7a8c9e-1f3b-4b9c-9a77-cc1c77df1a01",
      title: "Golden Mask",
      originCity: "Ohrid",
      yearFound: 1932,
      shortDescription: "Ancient ceremonial mask found near Ohrid.",
      collectionName: "Balkan Antiquities"
    }, // ✅ comma added

    {
      externalId: "d9c18d63-9d82-4e21-b7a2-6c4e2e17a902",
      title: "Roman Coin",
      originCity: "Rome",
      yearFound: 1880,
      shortDescription: "Roman denarius, well preserved.",
      collectionName: "Roman Era"
    },
    {
      externalId: "4b1f5c7a-8e0c-4d61-b2f6-91bdf7f7a311",
      title: "Bronze Helmet",
      originCity: "Athens",
      yearFound: 1921,
      shortDescription: "Ancient Greek bronze helmet used by hoplite warriors.",
      collectionName: "Ancient Greece"
    },
    {
      externalId: "91d3c4fa-6b5e-4e2b-9a2e-73c1f4b99a44",
      title: "Ottoman Sword",
      originCity: "Istanbul",
      yearFound: 1875,
      shortDescription: "Decorated Ottoman-era sword with Arabic inscriptions.",
      collectionName: "Ottoman Period"
    },
    {
      externalId: "7a2e3f8c-1c9b-4b12-9d5f-6f72d4b6b210",
      title: "Medieval Manuscript",
      originCity: "Bitola",
      yearFound: 1954,
      shortDescription: "Handwritten medieval manuscript discovered in a monastery.",
      collectionName: "Medieval Heritage"
    },
    {
      externalId: "e0a2b1c9-5d74-4a2a-bc1d-0a4d6d97f888",
      title: "Stone Idol",
      originCity: "Plovdiv",
      yearFound: 1910,
      shortDescription: "Prehistoric stone idol used in early ritual practices.",
      collectionName: "Prehistoric Artifacts"
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
