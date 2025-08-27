import { faBookOpen, faFontAwesome, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub, faCss,  faHtml5, faInstagram, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import imagesData from "../imgImports";

const divisiData = [
    {
        id: 1,
        img: imagesData.cover_divisi_office,
        singkatan: "office",
        divisi: "Office",
        deskripsi: "Divisi Office merupakan divisi yang berfokus mempelajari aplikasi perkantoran dari Microsoft Office hingga Google Workspace.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Akuntansi <br>
            • Administrasi Bisnis <br>
            • Pariwisata <br>
            • Manajemen`,
        href: "/divisi/office",
        imgCover: imagesData.cover_divisi_office,
        deskripsiKegiatan: "Divisi Office merupakan divisi yang berfokus pada pengembangan keterampilan penggunaan aplikasi perkantoran, baik berbasis desktop maupun cloud. Divisi ini menjadi wadah bagi anggota yang ingin menguasai tools digital yang sangat dibutuhkan di dunia kerja dan akademik.",
        deskripsiMateri: "Berfokus dalam mempelajari berbagai fitur dan fungsi pada aplikasi Microsoft Office dan Google Workspace yang bertujuan untuk membentuk soft skill dan hard skill anggota sebagai bekal untuk bekerja di dunia perkantoran.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.office,
                altGambar: "Fungsionaris Office",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.office_dokumen1,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",
            },
            {
                id: 3,
                gambar: imagesData.office_dokumen2,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",

            },
            {
                id: 4,
                gambar: imagesData.office_dokumen3,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",

            },
            {
                id: 5,
                gambar: imagesData.office_dokumen4,
                altGambar: "Dokumentasi Divisi Office",
                judul: "Dokumentasi Divisi Office",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Office",

            },
        ],
        itemsMateri: [
            {
                icon: faBookOpen ,
                judul: "Microsoft Office",
                deskripsi: "Divisi office akan mengajarkan bagaimana menggunakan Microsoft Office seperti Word, Excel, PowerPoint, dan Access.",
            },
            {
                icon: faBookOpen,
                judul: "Google Workspace",
                deskripsi: "Divisi office akan mengajarkan bagaimana menggunakan Google Workspace seperti Google Docs, Google Sheets, dan Google Slides.",
            },
        ],
    },
    {
        id: 2,
        img: imagesData.cover_divisi_vcd, 
        singkatan: "VCD",
        divisi: "Visual Communication Design",
        deskripsi: "Divisi Visual Communication Design (VCD)  merupakan divisi yang berfokus  mempelajari design, editing foto dan membuat desain tampilan antarmuka aplikasi website yang menarik.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Administrasi Bisnis <br>
            • Bisnis Digital <br>
            • Multimedia <br>
            • DKV`,
        href: "/divisi/vcd",
        imgCover: imagesData.cover_divisi_vcd,
        deskripsiKegiatan: "Divisi ini berfokus pada pengembangan keterampilan desain visual menggunakan software desain populer, baik untuk kebutuhan kreatif maupun profesional. Di sini, anggota akan belajar mengolah gambar, mengatur komposisi, hingga membuat desain UI/UX yang siap digunakan untuk website atau aplikasi.",
        deskripsiMateri: "Berfokus dalam editing foto dan membuat desain tampilan antarmuka aplikasi atau website dengan tujuan menjadi designer yang bisa mengkomunikasikan ide - ide melalui media visual dan media cetak.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.vcd,
                altGambar: "Fungsionaris Visual Communication Design",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.vcd_dokumen1,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
            {
                id: 3,
                gambar: imagesData.vcd_dokumen2,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Cominucation Design",
            },
            {
                id: 4,
                gambar: imagesData.vcd_dokumen3,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
            {
                id: 5,
                gambar: imagesData.vcd_dokumen4,
                altGambar: "Dokumentasi Divisi Visual Communication Design",
                judul: "Dokumentasi Divisi Visual Communication Design",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Visual Communication Design",
            },
        ],
        itemsMateri: [
            {
                icon: faFontAwesome,
                judul: "Adobe Photoshop",
                deskripsi: "Adobe Photoshop merupakan software grafis berbasis raster (Bitmap), untuk mengedit, membuat gambar dan menyimpannya dengan berbagai format.",
            },
            {
                icon: faFigma,
                judul: "Figma",
                deskripsi: "Figma merupakan tools desain berbasis cloud yang memungkinkan tim untuk bekerja bersama secara kolaboratif dalam satu lingkungan desain.",
            },
        ],
    },
    {
        id: 3,
        img: imagesData.cover_divisi_web, 
        singkatan: "web",
        divisi: "Web Development",
        deskripsi: "Divisi Web Development merupakan divisi yang berfokus mempelajari cara membuat atau mengembangkan tampilan suatu website dengan mark-up language.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Teknologi Informasi <br>
            • Teknik Elektro <br>
            • Web Developer <br>
            • Manajemen Informasi`,
        href: "/divisi/web",
        imgCover: imagesData.cover_divisi_web,
        deskripsiKegiatan: "Divisi Web Development merupakan divisi yang berfokus pada pembelajaran dan pengembangan keterampilan dalam membangun tampilan serta struktur website. Kegiatan dalam divisi ini mencakup pemahaman dasar HTML dan CSS, hingga penerapan framework modern untuk menciptakan website yang rapi, responsif, dan estetis. Divisi ini dirancang untuk memberikan bekal keterampilan yang relevan di era digital, sekaligus membuka peluang dalam dunia teknologi dan industri kreatif.",
        deskripsiMateri: "Berfokus pada pengembangan website, terutama Front End Developer dan bertujuan mengajarkan keterampilan untuk merancang, mengembangkan, dan memelihara antarmuka pengguna (UI).",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.web,
                altGambar: "Fungsionaris Web Development",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.web_dokumen1,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 3,
                gambar: imagesData.web_dokumen2,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 4,
                gambar: imagesData.web_dokumen3,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
            {
                id: 5,
                gambar: imagesData.web_dokumen4,
                altGambar: "Dokumentasi Divisi Web Development",
                judul: "Dokumentasi Divisi Web Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Web Development",
            },
        ],
        itemsMateri: [
            {
                icon: faHtml5,
                judul: "HTML",
                deskripsi: "HTML (Hypertext Markup Language) adalah bahasa standar yang digunakan untuk membuat dan menyusun halaman web. Dapat dikatakan bahwa HTML merupakan kerangka dari sebuah web.",
            },
            {
                icon: faCss,
                judul: "CSS",
                deskripsi: "CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk menentukan tampilan dan gaya elemen-elemen pada halaman web yang dibuat dengan HTML.",
            },
            {
                icon: faScrewdriverWrench,
                judul: "Framework",
                deskripsi: "Framework adalah kerangka kerja yang membantu dalam mempermudah membuat sebuah tampilan web. Framework yang diajarkan adalah framework CSS.",
            },
        ],
    },
    {
        id: 4,
        img: imagesData.cover_divisi_game, 
        singkatan: "game",
        divisi: "Game Development",
        deskripsi: "Mempelajari tentang membuat game platformer 2D dengan menggunakan game engine berbasis website yaitu Construct 3.",
        rekomendasi: `<b>
            Rekomendasi :</b><br>
            • Pecinta E-Sports <br>
            • Game Developer <br>
            • Indie Developer <br>
            • Tech Enthusiast`,
        href: "/divisi/game",
        imgCover: imagesData.cover_divisi_game,
        deskripsiKegiatan: "Divisi Game Development merupakan divisi yang berfokus pada pembuatan game platformer 2D, yang juga mewadahi minat anggota dalam memainkan berbagai game mobile seperti Mobile Legends, PUBG Mobile, dan lainnya.",
        deskripsiMateri: "Berfokus pada pembuatan dan pengembangan game platformer 2D dengan menggunakan game engine berbasis website yang bertujuan mengembangkan suatu game hingga menjadi game developer.",
        itemsKegiatan: [
            {
                id: 1,
                gambar: imagesData.game,
                altGambar: "Fungsionaris Game Development",
                judul: "",
                deskripsi: "",
            },
            {
                id: 2,
                gambar: imagesData.game_dokumen1,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 3,
                gambar: imagesData.game_dokumen2,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 4,
                gambar: imagesData.game_dokumen3,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
            {
                id: 5,
                gambar: imagesData.game_dokumen4,
                altGambar: "Dokumentasi Divisi Game Development",
                judul: "Dokumentasi Divisi Game Development",
                deskripsi: "Dokumentasi Pelatihan UKM Computer Club Divisi Game Development",
            },
        ],
        itemsMateri: [
            {
                icon: faBookOpen,
                judul: "Platformer",
                deskripsi: "Genre game dimana karakter yang dimainkan akan melewati berbagai platform, melewati berbagai rintangan dan mengumpulkan item sampai ke tujuan akhir. Contoh game platformer adalah Super Mario Bros.",
            },
            {
                icon: faBookOpen,
                judul: "Construct 3",
                deskripsi: "Construct 3 merupakan software game engine berbasis visual yang digunakan untuk membuat game 2D tanpa perlu menulis kode secara langsung.",
            },
        ],
    },
]


export default divisiData;
