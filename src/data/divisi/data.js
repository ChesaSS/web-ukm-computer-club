import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import imagesData from "../imgImports";

const divisiData = [
    {
        id: 1,
        img: imagesData.test,
        singkatan: "office", 
        divisi: "Office",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/divisi/office",
    },
    {
        id: 2,
        img: imagesData.test, 
        singkatan: "vcd",
        divisi: "Visual Comunication Desain",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/divisi/vcd",
    },
    {
        id: 3,
        img: imagesData.test, 
        singkatan: "web",
        divisi: "Web Development",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/divisi/web",
        imgCover: imagesData.cover_divisi_web,
        deskripsiKegiatan: "Berfokus pada pengembangan website, terutama Front-End Development, dan bertujuan mengajarkan keterampilan untuk merancang, mengembangkan, dan memelihara antarmuka pengguna (UI).",
        deskripsiMateri: "Berfokus pada pengembangan website, terutama Front-End Development, dan bertujuan mengajarkan keterampilan untuk merancang, mengembangkan, dan memelihara antarmuka pengguna (UI).",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.test,
                altGambar: "fotobersama1",
                judul: "Foto Bersama1",
                deskripsi: "Foto bersama fungsionarsi dalam kegiatan serah terima bersama sama gila",
            },
            {
                id: 2,
                gambar: imagesData.bersama2,
                altGambar: "fotobersama2",
                judul: "Foto Bersama2",
                deskripsi: "Foto bersama fungsionarsi dalam kegiatan serah terima bersama sama gila",
            },
            {
                id: 3,
                gambar: imagesData.test,
                altGambar: "fotobersama3",
                judul: "Foto Bersama3",
                deskripsi: "Foto bersama fungsionarsi dalam kegiatan serah terima bersama sama gila",
            },
            {
                id: 4,
                gambar: imagesData.bersama2,
                altGambar: "fotobersama4",
                judul: "Foto Bersama4",
                deskripsi: "Foto bersama fungsionarsi dalam kegiatan serah terima bersama sama gila",
            },
        ],
        itemsMateri: [
            {
                icon: faAppleAlt,
                judul: "HTML",
                deskripsi: "HTML adalah bahasa pemrograman yang digunakan untuk membuat halaman web.",
            },
            {
                icon: faAppleAlt,
                judul: "HTML",
                deskripsi: "HTML adalah bahasa pemrograman yang digunakan untuk membuat halaman web.",
            },
            {
                icon: faAppleAlt,
                judul: "HTML",
                deskripsi: "HTML adalah bahasa pemrograman yang digunakan untuk membuat halaman web.",
            },
        ],
    },
    {
        id: 4,
        img: imagesData.test, 
        singkatan: "game",
        divisi: "Game Development",
        deskripsi: "Lorem ipsum dolor sit amet consectetur. Arcu platea sagittis lacus a consequat aenean ac eget tellus. Id ut ornare et montes urna. Velit iaculis pellentesque vel cras gravida eget",
        href: "/divisi/game",
    },
]


export default divisiData;
