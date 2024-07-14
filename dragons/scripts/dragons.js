const dragons = [
    {
        type: "Conventional",
        subtype: "light",
        name: "Mountain Red",
        info: "Medium sized dragon. Its scales are various shades of reds, ranging from dark to light and anything in between. They have tusks located just underneath the eyes, and are capable of breathing fire. Their large wings enable them to soar well, and can often be spotted flying through the canyons of their natural mountainous habitat. Excellent hunters, they can easily hunt far more prey than they need, which leads to a more social behavior compared to other dragons.",
        imageMain: "resources/dragon_images/quincy.png",
        image2: ""
    },
    {
        type: "Conventional",
        subtype: "light",
        name: "Forest Grey",
        info: "Small sized dragon. They're only slightly taller than the average human. Covered in a coat of fur and feathers, they're more likely to be found on the ground, weaving between the trees, than they are in the air. Generally solitary, but it's not unusual to find packs of them as well.",
        imageMain: "resources/dragon_images/storm_scene.jpg",
        image2: "resources/dragon_images/storm.png"
    },
    {
        type: "Conventional",
        subtype: "heavy",
        name: "Plains Strider",
        info: "Small sized dragon. Incapable of flight. These dragons can be found in large family groups, and have an omnivorous diet. Their main habitat is in open fields and sparse forests, and they will eat anything from the plants and fruits around them, to small and medium sized forest animals.",
        imageMain: "resources/dragon_images/snapper.png",
        image2: ""
    },
    {
        type: "Conventional",
        subtype: "heavy",
        name: "Lightning Flier",
        info: "Medium sized dragon. These dragons build up static and can use it as an elemental attack. Capable of flight, though they may prefer to stay on the ground and within caves.",
        imageMain: "resources/dragon_images/alphys_scene.jpg",
        image2: ""
    },
    {
        type: "Unconventional",
        subtype: "aquatic",
        name: "LandWalker",
        info: "Medium sized dragon. Capable of living on both land and water. Their legs are built for relatively efficient walking as well as swimming, and they have both gills as well as lungs. They have large, jagged teeth they use to latch onto prey.",
        imageMain: "resources/dragon_images/undyne.png",
        image2: "resources/dragon_images/undyne_head.png"
    },
    {
        type: "Unconventional",
        subtype: "nonaquatic",
        name: "Forest Goliath",
        info: "Gigantic sized dragon. This dragon has three pairs of legs; one pair of what could be considered arms, forelegs, and hindlegs. Despite its size, it is still capable of flight. These dragons may be found in ancient forests and near the foothills of mountains.",
        imageMain: "resources/dragon_images/fern.png",
        image2: ""
    },
    {
        type: "Unconventional",
        subtype: "nonaquatic",
        name: "Cave-Settler",
        info: "Small sized dragon. Its wings are diaphanous, visually similar to insect wings. These dragons can be found within large cave systems and caverns, though they are known to surface at night. Particularly curious ones may be found at the edges of human settlements, investigating the people and buildings.",
        imageMain: "resources/dragon_images/queen.png",
        image2: ""
    },
    {
        type: "Unconventional",
        subtype: "nonaquatic",
        name: "Mountain Goliath",
        info: "Gigantic sized dragon. Closely related to the Forest Goliath, they live in simliar habitats, though they are far more likely to be found in mountains than their counterpart. They have two pairs of wings, a smaller secondary pair located directly underneath the main pair.",
        imageMain: "resources/dragon_images/wings.png",
        image2: ""
    },
    {
        type: "Unconventional",
        subtype: "aquatic",
        name: "Leviathan",
        info: "Large sized dragon. Little is known about this variety of dragon, as they are primarily found in the deep ocean. They have bioluminescent spots, and there are reports of them surfacing during violent storms.",
        imageMain: "resources/dragon_images/leviathan.png",
        image2: ""
    },
    {
        type: "Unconventional",
        subtype: "aquatic",
        name: "Guidewind",
        info: "Small sized dragon. Despite being designated as an aquatic dragon, this species lives almost entirley in the air, only coming to land to raise their young and occasionally feed. They survive almost entirely off of arieal creatures such as birds. It is suspected that they share a common ancestor with Leviathans.",
        imageMain: "resources/dragon_images/guide1.png",
        image2: ""
    }
];
    // ,{
    //     type: "",
    //     subtype: "",
    //     name: "",
    //     info: "",
    //     imageMain: "",
    //     image2: ""
    // }
    // etc

const conLight = [ 
    {
        name: "Mountain Red",
        info: "Medium sized dragon. Its scales are various shades of reds, ranging from dark to light and anything in between. They have tusks located just underneath the eyes, and are capable of breathing fire. Their large wings enable them to soar well, and can often be spotted flying through the canyons of their natural mountainous habitat. Excellent hunters, they can easily hunt far more prey than they need, which leads to a more social behavior compared to other dragons.",
        imageMain: "resources/dragon_images/quincy.png",
        image2: ""
    },
    {
        name: "Forest Grey",
        info: "Small sized dragon. They're only slightly taller than the average human. Covered in a coat of fur and feathers, they're more likely to be found on the ground, weaving between the trees, than they are in the air. Generally solitary, but it's not unusual to find packs of them as well.",
        imageMain: "resources/dragon_images/storm_scene.jpg",
        image2: "resources/dragon_images/storm.png"
    }
];

const conHeav = [
    {
        name: "Plains Strider",
        info: "Small sized dragon. Incapable of flight. These dragons can be found in large family groups, and have an omnivorous diet. Their main habitat is in open fields and sparse forests, and they will eat anything from the plants and fruits around them, to small and medium sized forest animals.",
        imageMain: "resources/dragon_images/snapper.png",
        image2: ""
    },
    {
        name: "Lightning Flier",
        info: "Medium sized dragon. These dragons build up static and can use it as an elemental attack. Capable of flight, though they may prefer to stay on the ground and within caves.",
        imageMain: "resources/dragon_images/alphys_scene.jpg",
        image2: ""
    }
];

const unconAq = [
    {
        name: "LandWalker",
        info: "Medium sized dragon. Capable of living on both land and water. Their legs are built for relatively efficient walking as well as swimming, and they have both gills as well as lungs. They have large, jagged teeth they use to latch onto prey.",
        imageMain: "resources/dragon_images/undyne.png",
        image2: "resources/dragon_images/undyne_head.png"
    },
    {
        name: "Leviathan",
        info: "Large sized dragon. Little is known about this variety of dragon, as they are primarily found in the deep ocean. They have bioluminescent spots, and there are reports of them surfacing during violent storms.",
        imageMain: "resources/dragon_images/leviathan.png",
        image2: ""

    },
    {
        name: "Guidewind",
        info: "Small sized dragon. Despite being designated as an aquatic dragon, this species lives almost entirley in the air, only coming to land to raise their young and occasionally feed. They survive almost entirely off of arieal creatures such as birds. It is suspected that they share a common ancestor with Leviathans.",
        imageMain: "resources/dragon_images/guide1.png",
        image2: ""
    }
]

const unconNonAq = [
    {
        name: "Forest Goliath",
        info: "Gigantic sized dragon. This dragon has three pairs of legs; one pair of what could be considered arms, forelegs, and hindlegs. Despite its size, it is still capable of flight. These dragons may be found in ancient forests and near the foothills of mountains.",
        imageMain: "resources/dragon_images/fern.png",
        image2: ""
    },
    {
        name: "Mountain Goliath",
        info: "Gigantic sized dragon. Closely related to the Forest Goliath, they live in simliar habitats, though they are far more likely to be found in mountains than their counterpart. They have two pairs of wings, a smaller secondary pair located directly underneath the main pair.",
        imageMain: "resources/dragon_images/wings.png",
        image2: ""
    },
    {
        name: "Cave-Settler",
        info: "Small sized dragon. Its wings are diaphanous, visually similar to insect wings. These dragons can be found within large cave systems and caverns, though they are known to surface at night. Particularly curious ones may be found at the edges of human settlements, investigating the people and buildings.",
        imageMain: "resources/dragon_images/queen.png",
        image2: ""
    }

];

export { dragons };
export { conLight };
export { conHeav };
export { unconAq };
export { unconNonAq };