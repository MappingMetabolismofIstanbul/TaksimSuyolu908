var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Taksim Suyolu / Taksim Waterway',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.986, 41.190],
                zoom:10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'twentysix',
            alignment: 'centered',
            hidden:false,
            title: '',
            image: 'https://i.ibb.co/XZRLtZfk/MEF-AAP-027-BAP-2025-08-09-13-40-02.png',
            description: '',
            location: {
                center: [28.986, 41.190],
                zoom:14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/zVX3tHsv/MEF-AAP-027-BAP-2025-07-17-10-40-39.png',
            description: 'Yeni Bend, Taksim Suyolları’na bağlıdır.',
            location: {
                center: [28.986, 41.190],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hxwY9RRH/MEF-AAP-027-BAP-2025-07-17-10-42-06.png',
            description: '',
            location: {
                center: [28.986, 41.190],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'five-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/gMwWD8nk/MEF-AAP-027-BAP-2025-07-17-10-57-39.png',
            description: 'Valide Bendi, Taksim Suyolları’na bağlıdır.',
            location: {
                center: [28.988, 41.192],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'six-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/sdzPG4mN/MEF-AAP-027-BAP-2025-07-15-11-21-40.png',
            description: '',
            location: {
                center: [28.988, 41.192],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'seven-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/JW2NYxqB/MEF-AAP-027-BAP-2025-07-17-10-53-34.png',
            description: 'Topuzlu Bend, Taksim Suyolları’na bağlıdır.',
            location: {
                center: [28.994, 41.184],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/5X0sK5yg/MEF-AAP-027-BAP-2025-07-15-11-15-36.png',
            description: '',
            location: {
                center: [28.994, 41.184],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'nine-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.990, 41.169],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'ten-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.006, 41.163],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'eleven-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.026, 41.137],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelve-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.022, 41.108],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'thirteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.005, 41.093],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    
        },
        {
            id: 'fifteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.012, 41.069],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [29.001, 41.060],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteen-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/MyL9Yhdz/MEF-AAP-027-BAP-2025-07-17-11-17-18.png',
            description: 'Valideçeşme, Tophane Çeşmesi, Topçubaşı İsmailağa Çeşmesi  Taksim Suyolları’na bağlı çeşmelerdir.',
            location: {
                center: [28.998, 41.043],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'nineteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/LXK3D0Sf/MEF-AAP-027-BAP-2025-07-19-19-15-34.png',
            description: 'Taksim Su Terazisi Taksim Suyolları’na bağlı bir terazidir.',
            location: {
                center: [28.987, 41.041],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twenty-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Rt5QWnY/MEF-AAP-027-BAP-2025-07-17-10-47-18.png',
            description: 'Taksim Maksemi Taksim Suyolları’na bağlıdır.',
            location: {
                center: [28.984, 41.037],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twenty-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/zwcBpcf/MEF-AAP-027-BAP-2025-07-15-10-52-12.png',
            description: '.',
            location: {
                center: [28.984, 41.037],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twentyone-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/pjqJ3XV2/MEF-AAP-027-BAP-2025-08-09-18-45-19.png',
            description: '.',
            location: {
                center: [28.984, 41.037],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twentytwo-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/F4swmCcP/MEF-AAP-027-BAP-2025-07-17-11-28-16.png',
            description: '.',
            location: {
                center: [28.980, 41.030],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twentythree-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/0p0GXcsW/MEF-AAP-027-BAP-2025-07-17-11-23-18.png',
            description: '.',
            location: {
                center: [28.981, 41.027],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'twentyfour-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Z1MJT5Mb/MEF-AAP-027-BAP-2025-08-09-13-13-09.png',
            description: '.',
            location: {
                center: [28.981, 41.027],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyfive-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/svVDYv8K/MEF-AAP-027-BAP-2025-08-09-19-07-17.png',
            description: '.',
            location: {
                center: [28.981, 41.027],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
      
      
    ]
};
