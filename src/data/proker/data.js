import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook";
import imagesData from "../imgImports";

const prokerData = [
    {
        id: 1,
        logo: imagesData.Logo_ccdt, 
        img: imagesData.ccdt_foto, 
        name: "Computer Club Digital Talent",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/programkerja/ccdt",
        singkatan: "ccdt",
        periode: "Tahun 2023",
        videoYoutube: "aKnbYeBE6ug",  // id video youtube aja ex: https://youtu.be/{{{{{{aKnbYeBE6ug}}}}}}?si=aipoH73HByviFGUA
        deskripsiDetail: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        items: [
            {
                icon: faAddressBook, // fontawesomeicon
                text: "Web Development",
            },
            {
                icon: faAddressBook,
                text: "Design Competition",
            },
        ],
        facts: [
            {
                head: "210+",
                text: "Total Participants",
            },
            {
                head: "67",
                text: "Total Committee",
            },
            {
                head: "100+",
                text: "Day of Progress",
            },
        ],
        deskripsiDokumentasi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        dokumentasi: [
            {
                path: imagesData.ccdt_foto,
                alt: "Juara 1",
            },
            {
                path: imagesData.ccdt_foto,
                alt: "Juara 1",
            },
            {
                path: imagesData.ccdt_foto,
                alt: "Juara 1",
            },
            {
                path: imagesData.ccdt_foto,
                alt: "Juara 1",
            },
            {
                path: imagesData.ccdt_foto,
                alt: "Juara 1",
            },
        ],
    },
    {
        id: 2,
        logo: imagesData.logo_intech, 
        img: imagesData.intech_foto, 
        name: "Intechfest",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/programkerja/intechfest",
    },
    {
        id: 3,
        logo: imagesData.Logo_Eagles_hitam,  
        img: imagesData.eagles_foto, 
        name: "Eagles",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/programkerja/eagles",
    },
]

export default prokerData
