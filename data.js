const eventsData = [
    {
        "id": "def162eb-eb1b-3f26-ac7d-1f4c004816a5",
        "name": "Blacksmiths Lounge Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-26",
        "startTime": "17:30:00",
        "endTime": "19:30:00"
    },
    {
        "id": "cbe648ca-1e1c-30da-a9f1-93ab6f4076cf",
        "name": "The Shakespeare Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-26",
        "startTime": "20:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "14c996bc-ed0b-3915-b133-1a3b31b306f4",
        "name": "The Royal Telegraph Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-27",
        "startTime": "19:00:00",
        "endTime": "22:00:00"
    },
    {
        "id": "d14a78dc-9fa1-3e4a-87a8-07f5fdb6b655",
        "name": "The Hawk and Buckle Etwall Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-27",
        "startTime": "20:00:00",
        "endTime": null
    },
    {
        "id": "ddc093f1-1425-3aae-b1bc-9ab67b8826b3",
        "name": "Love Your Sound Open Mic (Bunk)",
        "category": "Open Mic",
        "notes": "https://www.derbycathedralquarter.co.uk/events/love-your-sound-open-mic/",
        "date": "2025-10-28",
        "startTime": "19:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "f8a48b75-ae09-3239-a0d4-a3cce160ec65",
        "name": "The Greyhound Friar Gate Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-29",
        "startTime": "19:00:00",
        "endTime": null
    },
    {
        "id": "a52460ae-7595-377f-9ade-565292815831",
        "name": "The Royal Standard Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Ding",
        "date": "2025-10-29",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "219fc5a7-aee3-3936-9f40-2ef188e8402d",
        "name": "The Creaky Floorboard Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-29",
        "startTime": "19:30:00",
        "endTime": "23:00:00"
    },
    {
        "id": "4bfa743d-2786-34ae-892d-3f9c2142e0f4",
        "name": "Bless Open Mic",
        "category": "Open Mic",
        "notes": "Not sure of the time (recurring)",
        "date": "2025-10-30",
        "startTime": "00:00:00",
        "endTime": "00:00:00"
    },
    {
        "id": "8c77a90f-9003-35e0-ab49-743066ecc8c5",
        "name": "Darley Abbey Wines Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-10-30",
        "startTime": "17:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "c7597152-79f1-3678-b60e-b79218c1dc8b",
        "name": "Spondon Liberal Club Open Mic",
        "category": "Open Mic",
        "notes": "Not sure of the time (recurring)",
        "date": "2025-10-30",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "e114588c-6914-3515-9a9f-d314dc7ab683",
        "name": "The Prince Of Wales Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Ding & John",
        "date": "2025-10-30",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "5785fbec-f2e7-3740-8c3a-ab0c3c597b4e",
        "name": "Electric Daisy Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-02",
        "startTime": "16:00:00",
        "endTime": "19:30:00"
    },
    {
        "id": "9cdae28a-a932-33d8-b74b-f3783d71a9fc",
        "name": "Blacksmiths Lounge Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-02",
        "startTime": "17:30:00",
        "endTime": "19:30:00"
    },
    {
        "id": "5db48fd8-66f7-37fc-8c97-0401957c22e6",
        "name": "The Shakespeare Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-02",
        "startTime": "20:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "4f4a227d-37ea-3f73-912a-92a89e7fa72b",
        "name": "The Royal Telegraph Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-03",
        "startTime": "19:00:00",
        "endTime": "22:00:00"
    },
    {
        "id": "e395cb64-723f-3dee-ac1e-2cfa30824c29",
        "name": "The Hawk and Buckle Etwall Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-03",
        "startTime": "20:00:00",
        "endTime": null
    },
    {
        "id": "c6eeef28-7cb8-3daa-8d45-a461ded3711d",
        "name": "Love Your Sound Open Mic (Bunk)",
        "category": "Open Mic",
        "notes": "https://www.derbycathedralquarter.co.uk/events/love-your-sound-open-mic/",
        "date": "2025-11-04",
        "startTime": "19:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "3bcb5f56-bc57-3fff-ad8d-9b9c2fedccd1",
        "name": "The Creaky Floorboard Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-05",
        "startTime": "19:30:00",
        "endTime": "23:00:00"
    },
    {
        "id": "bac6af97-4a0f-33bd-988e-a31f0392259c",
        "name": "Darley Abbey Wines Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-06",
        "startTime": "17:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "92999c94-bac3-3995-a8a4-95e8342495c2",
        "name": "The Prince Of Wales Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Sam",
        "date": "2025-11-06",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "68257c00-73f0-3646-bb8a-4abef83636aa",
        "name": "Blacksmiths Lounge Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-09",
        "startTime": "17:30:00",
        "endTime": "19:30:00"
    },
    {
        "id": "b9167b63-0adf-3f30-b69b-54862bb9d170",
        "name": "The Shakespeare Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-09",
        "startTime": "20:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "a508d04b-1cd0-34b7-9e2c-6b8e2c0c58b7",
        "name": "The Royal Telegraph Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-10",
        "startTime": "19:00:00",
        "endTime": "22:00:00"
    },
    {
        "id": "3a5c3f9b-4e3e-3430-a180-3d4b1d0b5542",
        "name": "The Hawk and Buckle Etwall Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-10",
        "startTime": "20:00:00",
        "endTime": null
    },
    {
        "id": "cad874fa-2a03-33d3-a9ba-57049ef81e14",
        "name": "Love Your Sound Open Mic (Bunk)",
        "category": "Open Mic",
        "notes": "https://www.derbycathedralquarter.co.uk/events/love-your-sound-open-mic/",
        "date": "2025-11-11",
        "startTime": "19:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "3476713b-6612-333f-a1f1-9f1c48929a8b",
        "name": "The Greyhound Friar Gate Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-12",
        "startTime": "19:00:00",
        "endTime": null
    },
    {
        "id": "caf5d221-f78d-36e6-9023-481ea86db384",
        "name": "The Royal Standard Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Ding",
        "date": "2025-11-12",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "088a4dfd-261c-3c71-896a-08226b182661",
        "name": "The Creaky Floorboard Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-12",
        "startTime": "19:30:00",
        "endTime": "23:00:00"
    },
    {
        "id": "f8f3ce2f-c7f3-35c1-a9eb-468a0ea6fadc",
        "name": "Darley Abbey Wines Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-13",
        "startTime": "17:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "c5e7de2e-f319-396d-8ea3-53b8be65d729",
        "name": "The Prince Of Wales Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Ding & John",
        "date": "2025-11-13",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "ea491e72-99a9-308b-9d6c-ff8c9a91e954",
        "name": "Electric Daisy Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-16",
        "startTime": "16:00:00",
        "endTime": "19:30:00"
    },
    {
        "id": "64e4e17d-3e49-33f7-b489-5c0f685c4def",
        "name": "Blacksmiths Lounge Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-16",
        "startTime": "17:30:00",
        "endTime": "19:30:00"
    },
    {
        "id": "e706f109-afb5-38e3-abb0-7a20ffc26ba2",
        "name": "The Shakespeare Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-16",
        "startTime": "20:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "4d03cbba-7a91-321b-b64e-fe317bb71bca",
        "name": "The Royal Telegraph Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-17",
        "startTime": "19:00:00",
        "endTime": "22:00:00"
    },
    {
        "id": "2fc94f24-ae48-34f0-9872-b6e3c8d77f8e",
        "name": "The Hawk and Buckle Etwall Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-17",
        "startTime": "20:00:00",
        "endTime": null
    },
    {
        "id": "3a29d85b-a139-3ae3-a3e5-54860ced3312",
        "name": "Love Your Sound Open Mic (Bunk)",
        "category": "Open Mic",
        "notes": "https://www.derbycathedralquarter.co.uk/events/love-your-sound-open-mic/",
        "date": "2025-11-18",
        "startTime": "19:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "4d353fc9-8ef2-3d0a-86d9-d70e1f58f447",
        "name": "The Creaky Floorboard Open Mic",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-19",
        "startTime": "19:30:00",
        "endTime": "23:00:00"
    },
    {
        "id": "0bbff85b-46bb-3637-ae81-921a3b172cfe",
        "name": "Darley Abbey Wines Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-20",
        "startTime": "17:00:00",
        "endTime": "23:00:00"
    },
    {
        "id": "ef4ac782-8d3d-3d13-8b66-20e9de4b1299",
        "name": "The Prince Of Wales Open Mic Night",
        "category": "Open Mic",
        "notes": "Hosted by Sam",
        "date": "2025-11-20",
        "startTime": "19:30:00",
        "endTime": null
    },
    {
        "id": "64ecf5bd-03fc-37df-8b19-fc1e10378761",
        "name": "Blacksmiths Lounge Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-23",
        "startTime": "17:30:00",
        "endTime": "19:30:00"
    },
    {
        "id": "ebbb7fcc-2fc8-3686-9202-de8edae6ecae",
        "name": "The Shakespeare Open Mic Night",
        "category": "Open Mic",
        "notes": "",
        "date": "2025-11-23",
        "startTime": "20:00:00",
        "endTime": "23:00:00"
    }
];
