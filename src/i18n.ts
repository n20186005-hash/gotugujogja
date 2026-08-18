// Design reminder: “Malam di Pal Putih” — indigo editorial heritage, real photography, restrained brass accents.
export const languages = ['id', 'en', 'zh'] as const;
export type Language = (typeof languages)[number];

type Milestone = { year: string; title: string; body: string };
type Guide = { title: string; body: string };
type Nearby = { title: string; body: string };
type Knowledge = { title: string; body: string };
type Service = { tag: string; title: string; body: string };
type Faq = { question: string; answer: string };

export type PageContent = {
  lang: Language;
  locale: string;
  label: string;
  title: string;
  description: string;
  brandKicker: string;
  heroKicker: string;
  heroTitle: string;
  heroDek: string;
  heroButtons: [string, string];
  heroFacts: Array<[string, string]>;
  nav: Array<[string, string]>;
  introKicker: string;
  introTitle: string;
  introBody: string;
  introAxis: string;
  storyKicker: string;
  storyTitle: string;
  storyBody: string;
  milestones: Milestone[];
  knowledgeKicker: string;
  knowledgeTitle: string;
  knowledgeBody: string;
  knowledge: Knowledge[];
  guideKicker: string;
  guideTitle: string;
  guideBody: string;
  guide: Guide[];
  visitKicker: string;
  visitTitle: string;
  visitBody: string;
  visitList: Array<[string, string]>;
  servicesKicker: string;
  servicesTitle: string;
  servicesIntro: string;
  services: Service[];
  servicesNote: string;
  nearbyKicker: string;
  nearbyTitle: string;
  foodsTitle: string;
  foods: Nearby[];
  sightsTitle: string;
  sights: Nearby[];
  responsibleKicker: string;
  responsibleTitle: string;
  responsibleBody: string;
  responsible: Guide[];
  sourcesTitle: string;
  sourceLinks: [string, string, string];
  mapKicker: string;
  mapTitle: string;
  mapBody: string;
  mapLink: string;
  faqKicker: string;
  faqTitle: string;
  faq: Faq[];
  disclaimer: string;
  photoCredit: string;
  directionsLabel: string;
  sourceLabel: string;
};

const shared = {
  address: 'Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233, Indonesia',
  map: 'https://maps.app.goo.gl/mHgdxqz8Cif4mhDM8',
  photoSource: 'https://commons.wikimedia.org/wiki/File:Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg',
};

export const content: Record<Language, PageContent> = {
  id: {
    lang: 'id', locale: 'id-ID', label: 'Bahasa Indonesia', title: 'Tugu Jogja — Penanda Sumbu Kota',
    description: 'Panduan ringkas untuk membaca sejarah, ritme jalan, dan pengalaman berkunjung ke Tugu Jogja atau Tugu Pal Putih.',
    brandKicker: 'Yogyakarta, Indonesia', heroKicker: 'Tugu Pal Putih · Penanda Sumbu Filosofis',
    heroTitle: 'Di titik kota menemukan arah.', heroDek: 'Tugu Jogja bukan hanya latar foto. Ia berdiri di simpang jalan sebagai penanda memori, arah, dan percakapan panjang antara keraton dengan kota.',
    heroButtons: ['Rencanakan kunjungan', 'Baca kisahnya'], heroFacts: [['Lokasi', 'Persimpangan Jl. Jend. Sudirman'], ['Akses', 'Ruang luar, terbuka sepanjang hari'], ['Waktu terbaik', 'Menjelang senja hingga malam awal']],
    nav: [['cerita', 'Cerita'], ['panduan', 'Panduan'], ['sekitar', 'Di sekitar'], ['peta', 'Peta']],
    introKicker: 'Sebuah landmark, bukan pulau', introTitle: 'Tugu adalah titik awal untuk membaca Yogyakarta.',
    introBody: 'Berada di utara Keraton Yogyakarta, Tugu Pal Putih menandai simpang yang mengantar ke Jalan Margo Utomo, Malioboro, dan kawasan kota lama. Berhentilah beberapa menit untuk melihat ritme kendaraan, bangunan kolonial, dan arah garis kota yang bertemu di sini.',
    introAxis: 'Merapi — Tugu — Keraton — Panggung Krapyak — Laut Selatan',
    storyKicker: 'Jejak waktu', storyTitle: 'Dari Golong Gilig ke Pal Putih.',
    storyBody: 'Bentuk yang terlihat sekarang adalah lapisan sejarah. Nama Tugu Pal Putih mengingatkan warna dan wujud baru monumen, sementara bentuk awalnya—Golong Gilig—tetap hidup sebagai gagasan persatuan dalam ingatan kota.',
    milestones: [
      { year: '1756', title: 'Tugu Golong Gilig didirikan', body: 'Monumen awal dibangun pada masa Hamengku Buwana I. Bentuk silinder dan bola di puncaknya menjadi lambang golong-gilig dan persatuan rakyat dengan raja.' },
      { year: '1867', title: 'Gempa besar merusak tugu', body: 'Gempa pada 10 Juni merobohkan bentuk awal Tugu Golong Gilig.' },
      { year: '1889', title: 'Tugu dibangun kembali', body: 'Monumen diresmikan kembali pada masa Hamengku Buwana VII dengan wujud persegi yang meruncing—sosok Tugu Pal Putih yang dikenal kini.' }
    ],
    knowledgeKicker: 'Membaca tempat', knowledgeTitle: 'Satu tugu, beberapa lapisan makna.', knowledgeBody: 'Tugu lebih tepat dipahami sebagai bagian dari lanskap budaya yang lebih luas. Penjelasan berikut membedakan catatan sejarah, tafsir budaya, dan cerita yang hidup di ruang publik agar kunjungan tidak berhenti pada satu foto.',
    knowledge: [
      { title: 'Poros kota dan kosmologi', body: 'Tugu berada pada jalur utara–selatan yang menghubungkan Merapi, Keraton, Panggung Krapyak, dan Laut Selatan. Dalam penjelasan warisan budaya, susunan ini dibaca sebagai perwujudan gagasan Jawa tentang hubungan manusia, alam, dan Sang Pencipta.' },
      { title: 'Golong Gilig sebagai ingatan', body: 'Bentuk awal berupa silinder dan bola dikenal sebagai Golong Gilig. Sumber Keraton menjelaskannya sebagai lambang persatuan rakyat dan raja, sekaligus dikaitkan dengan gagasan Manunggaling Kawula Gusti.' },
      { title: 'Cerita, tafsir, dan bukti', body: 'Beragam cerita lokal memberi warna pada kunjungan. Gunakan cerita tersebut sebagai pintu untuk bertanya, bukan sebagai kepastian sejarah; untuk tanggal, bentuk bangunan, dan perubahan fisik, rujuk catatan lembaga budaya.' }
    ],
    guideKicker: 'Catatan lapangan', guideTitle: 'Kunjungan yang sederhana, tetapi perlu ritme.', guideBody: 'Tugu berada di tengah perempatan aktif. Nikmati sebagai titik pandang dan lanjutkan perjalanan dengan berjalan kaki atau becak menuju kawasan pusat kota.',
    guide: [
      { title: 'Waktu & durasi', body: 'Datang menjelang senja untuk cahaya yang lebih lembut, atau malam awal untuk melihat suasana simpang yang hidup. Rencanakan sekitar 10–20 menit di area tugu, lalu lanjutkan ke tujuan berikutnya.' },
      { title: 'Biaya masuk', body: 'Tidak ada loket atau tiket untuk melihat monumen dari ruang publik. Biaya dapat berlaku pada museum, tur, atau tempat lain yang Anda pilih sesudahnya.' },
      { title: 'Parkir', body: 'Tidak tersedia area parkir khusus di bundaran tugu. Gunakan parkir resmi di hotel, restoran, atau tempat tujuan terdekat; jangan berhenti di bahu simpang yang padat.' },
      { title: 'Transportasi', body: 'Naik taksi daring, becak, atau kendaraan pribadi ke titik sekitar tugu. Dari Stasiun Yogyakarta, kawasan ini dapat dicapai dengan perjalanan singkat ke arah utara.' }
    ],
    visitKicker: 'Sebelum berangkat', visitTitle: 'Berjalan cermat di simpang yang terus bergerak.', visitBody: 'Tugu paling baik dinikmati dari tepi jalan yang aman. Perhatikan arus kendaraan, gunakan jalur pejalan kaki bila tersedia, dan jangan menyeberang mendadak demi foto.',
    visitList: [['Akses', 'Area monumen berada di tengah perempatan; nikmati dari trotoar dan titik pandang di sekelilingnya.'], ['Fotografi', 'Gunakan lensa sudut lebar dari sisi jalan yang aman; jangan memasuki pulau jalan.'], ['Etika', 'Tugu adalah cagar budaya dan simpul lalu lintas. Jaga ruang publik tetap nyaman untuk semua orang.']],
    servicesKicker: 'Kebutuhan praktis', servicesTitle: 'Layanan di sekitar: pilih berdasarkan fungsi, bukan nama usaha.', servicesIntro: 'Tugu sendiri tidak dikelola sebagai kompleks wisata berpagar. Kebutuhan harian umumnya dipenuhi oleh fasilitas publik atau fasilitas milik tempat usaha di koridor sekitar. Daftar ini hanya menjelaskan jenis layanan yang lazim dicari, tanpa mengurutkan atau merekomendasikan penyedia tertentu.',
    services: [
      { tag: 'WC', title: 'Toilet & kebersihan', body: 'Carilah toilet umum yang jelas penandaannya atau fasilitas yang disediakan oleh tempat yang sedang Anda gunakan. Periksa jam akses, biaya, dan kebersihan pada hari kunjungan.' },
      { tag: 'P', title: 'Parkir & titik turun', body: 'Gunakan fasilitas parkir resmi atau titik turun yang aman di luar ruang persimpangan. Ketersediaan untuk mobil, motor, bus, dan sepeda dapat berbeda menurut pengelola dan waktu.' },
      { tag: 'M', title: 'Makan & minum', body: 'Di koridor pusat kota terdapat jenis layanan seperti warung, rumah makan, kafe, dan jajanan. Pilih berdasarkan kebutuhan diet, anggaran, akses, dan informasi higiene yang Anda nilai sendiri.' },
      { tag: 'H', title: 'Akomodasi', body: 'Pilihan menginap di area pusat kota umumnya mencakup hotel, penginapan sederhana, dan homestay. Bandingkan akses pejalan kaki, kebijakan check-in, keamanan, dan aksesibilitas tanpa menganggap satu tipe selalu lebih baik.' },
      { tag: 'S', title: 'Belanja kebutuhan harian', body: 'Tersedia kategori ritel kebutuhan dasar, seperti minimarket, pasar, dan apotek. Konfirmasikan stok, jam buka, serta metode pembayaran secara langsung.' },
      { tag: 'E', title: 'BBM & pengisian daya', body: 'Untuk kendaraan bermotor atau listrik, cari fasilitas yang berizin dan cocok dengan jenis kendaraan Anda. Ketersediaan konektor, daya, antrean, dan cara bayar dapat berubah.' },
      { tag: 'A', title: 'Aksesibilitas & ruang istirahat', body: 'Permukaan jalan, trotoar, kursi tunggu, ruang ibadah, dan akses bebas hambatan tidak seragam di setiap blok. Rencanakan rute yang paling sesuai dengan kebutuhan mobilitas Anda.' }
    ],
    servicesNote: 'Catatan netral: ketersediaan layanan, tarif, aksesibilitas, dan jam buka berubah sewaktu-waktu. Situs ini tidak berafiliasi dengan, menerima kompensasi dari, atau memberi peringkat kepada penyedia layanan mana pun.',
    nearbyKicker: 'Lanjutkan rute', nearbyTitle: 'Rasa, jalan, dan landmark dalam satu lintasan.',
    foodsTitle: 'Kuliner di sekitar', foods: [
      { title: 'Gudeg', body: 'Cicipi sajian nangka muda khas Yogyakarta di kawasan pusat kota; pilih tempat makan dengan akses dan parkir yang sesuai rute Anda.' },
      { title: 'Kopi & jajanan malam', body: 'Koridor menuju Malioboro dan Margo Utomo memiliki banyak kafe serta tempat makan untuk jeda setelah melihat tugu.' }
    ],
    sightsTitle: 'Tempat untuk disambungkan', sights: [
      { title: 'Jalan Malioboro', body: 'Arah selatan dari Tugu mengantar ke koridor belanja dan jalan kaki paling dikenal di kota ini.' },
      { title: 'Keraton Yogyakarta', body: 'Lanjutkan ke selatan untuk membaca hubungan Tugu dengan Sumbu Filosofis keraton.' },
      { title: 'Stasiun Yogyakarta', body: 'Stasiun kereta utama yang menjadi titik praktis untuk memulai atau menutup perjalanan kota.' }
    ],
    responsibleKicker: 'Kunjungan bertanggung jawab', responsibleTitle: 'Perlakukan tugu sebagai warisan hidup.', responsibleBody: 'Nilai Tugu tidak hanya berada pada bentuk fisiknya, tetapi juga pada jalan, ritual, ingatan, dan kehidupan kota yang mengelilinginya. Pilihan kecil pengunjung membantu menjaga tempat ini tetap aman dan bermakna.',
    responsible: [
      { title: 'Dahulukan keselamatan', body: 'Jangan memasuki pulau jalan, menghalangi trotoar, atau menghentikan kendaraan di titik yang tidak diizinkan demi mengambil gambar.' },
      { title: 'Jangan mengubah situs', body: 'Hindari memanjat, menyentuh hiasan, meninggalkan tulisan, atau menempelkan benda pada monumen dan elemen jalan di sekitarnya.' },
      { title: 'Baca sumber, bukan hanya unggahan', body: 'Pisahkan informasi yang terdokumentasi dari opini dan cerita populer. Gunakan pranala institusi budaya di footer untuk memperdalam konteks.' }
    ],
    sourcesTitle: 'Tugu dalam konteks budaya yang lebih luas.', sourceLinks: ['UNESCO · Poros Kosmologis Yogyakarta dan Lanskap Bersejarah', 'Kraton Yogyakarta · Tugu Golong Gilig', 'Jogja Cagar · Tugu Pal Putih'],
    mapKicker: 'Temukan titiknya', mapTitle: 'Tugu di persimpangan Jalan Sudirman.', mapBody: `Alamat: ${shared.address}`, mapLink: 'Buka di Google Maps',
    faqKicker: 'Pertanyaan umum', faqTitle: 'Sebelum berhenti di Tugu.',
    faq: [
      { question: 'Apakah Tugu Jogja bisa dikunjungi kapan saja?', answer: 'Monumen berada di ruang terbuka di tengah persimpangan. Area pandang di sekelilingnya dapat diakses sepanjang hari, tetapi tetap ikuti kondisi lalu lintas dan aturan setempat.' },
      { question: 'Apakah ada tiket masuk?', answer: 'Tidak ada loket atau tiket untuk melihat Tugu dari ruang publik. Biaya dapat berlaku untuk atraksi lain di rute Anda.' },
      { question: 'Di mana tempat parkirnya?', answer: 'Tidak ada parkir khusus di pulau jalan tugu. Gunakan fasilitas parkir resmi milik tempat usaha atau tujuan lain di sekitar kawasan.' },
      { question: 'Mengapa Tugu Pal Putih penting?', answer: 'Tugu merupakan komponen penting Sumbu Filosofis Yogyakarta dan menyimpan sejarah bentuk Golong Gilig, gempa 1867, serta pembangunan kembali pada 1889.' }
    ],
    disclaimer: 'Situs informasi independen dan tidak berafiliasi dengan Keraton Yogyakarta, Pemerintah Kota Yogyakarta, atau Google.',
    photoCredit: 'Foto Tugu: CEphoto, Uwe Aranas · CC BY-SA 3.0', directionsLabel: 'Petunjuk perjalanan', sourceLabel: 'Sumber sejarah'
  },
  en: {
    lang: 'en', locale: 'en-US', label: 'English', title: 'Tugu Jogja — The City’s Axis Marker',
    description: 'A concise guide to the history, street rhythm, and visitor experience of Tugu Jogja, also known as Tugu Pal Putih.',
    brandKicker: 'Yogyakarta, Indonesia', heroKicker: 'Tugu Pal Putih · Marker of the Philosophical Axis',
    heroTitle: 'Where the city finds its bearing.', heroDek: 'Tugu Jogja is more than a photo backdrop. It stands at a crossroads as a marker of memory, direction, and a long conversation between the palace and the city.',
    heroButtons: ['Plan a visit', 'Read its story'], heroFacts: [['Location', 'Jend. Sudirman crossroads'], ['Access', 'Outdoor landmark, open all day'], ['Best light', 'Late afternoon to early evening']],
    nav: [['cerita', 'Story'], ['panduan', 'Visit'], ['sekitar', 'Nearby'], ['peta', 'Map']],
    introKicker: 'A landmark, not an island', introTitle: 'Tugu is a starting point for reading Yogyakarta.',
    introBody: 'North of the Yogyakarta Palace, Tugu Pal Putih marks the junction that leads toward Margo Utomo, Malioboro, and the older city districts. Pause for a few minutes and observe the traffic rhythm, colonial-era streetscape, and urban lines that meet here.',
    introAxis: 'Merapi — Tugu — Palace — Panggung Krapyak — Southern Sea',
    storyKicker: 'A trace of time', storyTitle: 'From Golong Gilig to Pal Putih.',
    storyBody: 'The monument visible today is a layer of history. Its Pal Putih name recalls its white appearance and later form, while its earlier Golong Gilig shape remains a civic memory of unity.',
    milestones: [
      { year: '1756', title: 'Tugu Golong Gilig is erected', body: 'The first monument was built under Hamengku Buwana I. Its cylinder and sphere formed the golong-gilig symbol and expressed unity between ruler and people.' },
      { year: '1867', title: 'An earthquake damages the monument', body: 'The major earthquake of 10 June damaged the original Golong Gilig monument.' },
      { year: '1889', title: 'The monument is rebuilt', body: 'It was inaugurated again under Hamengku Buwana VII in a square, tapering form—the Pal Putih silhouette recognised today.' }
    ],
    knowledgeKicker: 'Reading the place', knowledgeTitle: 'One monument, several layers of meaning.', knowledgeBody: 'Tugu is best understood as part of a larger cultural landscape. These notes distinguish historical record, cultural interpretation, and stories circulating in public space, so a visit need not end with a single photograph.',
    knowledge: [
      { title: 'City axis and cosmology', body: 'Tugu sits on the north–south line that connects Merapi, the Palace, Panggung Krapyak, and the Southern Sea. Heritage interpretation reads this arrangement as a Javanese expression of relationships among people, nature, and the Creator.' },
      { title: 'Golong Gilig as memory', body: 'The earlier cylindrical-and-spherical form was known as Golong Gilig. The Palace’s account describes it as a symbol of unity between people and ruler, and relates it to the idea of Manunggaling Kawula Gusti.' },
      { title: 'Stories, interpretations, and evidence', body: 'Local stories add texture to a visit. Treat them as an invitation to ask questions rather than as settled fact; for dates, architecture, and physical change, consult cultural-institution records.' }
    ],
    guideKicker: 'Field notes', guideTitle: 'A simple stop that needs good timing.', guideBody: 'Tugu sits inside an active intersection. Treat it as a viewpoint, then continue on foot or by becak toward the central city districts.',
    guide: [
      { title: 'Time & duration', body: 'Arrive near sunset for softer light, or in the early evening for the movement of the crossroads. Allow about 10–20 minutes around the monument before continuing your route.' },
      { title: 'Tickets & fees', body: 'There is no ticket booth for viewing the monument from public space. Fees may apply at museums, tours, or other places you choose to visit afterward.' },
      { title: 'Parking', body: 'There is no dedicated parking on the monument roundabout. Use an official facility at a hotel, restaurant, or nearby destination; do not stop on the busy approach roads.' },
      { title: 'Getting there', body: 'Use ride-hailing, becak, or a private vehicle to reach a safe point nearby. From Yogyakarta Station, it is a short ride north toward the monument.' }
    ],
    visitKicker: 'Before you go', visitTitle: 'Walk carefully through a crossroads in motion.', visitBody: 'Tugu is best appreciated from a safe edge of the street. Watch traffic, use pedestrian routes where available, and never cross suddenly for a photograph.',
    visitList: [['Access', 'The monument is in the middle of the intersection; enjoy it from surrounding pavements and viewing points.'], ['Photography', 'Use a wide angle from a safe roadside position; do not enter the traffic island.'], ['Respect', 'Tugu is both heritage and a traffic node. Keep the public space comfortable for everyone.']],
    servicesKicker: 'Practical needs', servicesTitle: 'Nearby services: choose by function, not by business name.', servicesIntro: 'Tugu itself is not a gated visitor complex. Everyday needs are generally met by public facilities or facilities provided by venues along the surrounding corridors. This guide describes the types of service visitors commonly look for; it does not rank, link to, or endorse individual providers.',
    services: [
      { tag: 'WC', title: 'Toilets & hygiene', body: 'Look for clearly signed public toilets or facilities provided by a venue you are using. Check access hours, fees, and condition on the day of your visit.' },
      { tag: 'P', title: 'Parking & drop-off', body: 'Use lawful parking facilities or a safe drop-off point outside the intersection. Capacity for cars, motorbikes, coaches, and bicycles can vary by operator and time.' },
      { tag: 'F', title: 'Food & drink', body: 'Central-city corridors contain service types such as food stalls, restaurants, cafés, and snack vendors. Choose according to dietary needs, budget, access, and hygiene information you can assess yourself.' },
      { tag: 'H', title: 'Accommodation', body: 'Central areas generally include hotels, simple guesthouses, and homestays. Compare walking access, check-in policies, security, and accessibility without assuming any one category is always preferable.' },
      { tag: 'S', title: 'Daily supplies', body: 'Basic retail categories can include convenience stores, markets, and pharmacies. Confirm stock, opening hours, and payment methods directly.' },
      { tag: 'E', title: 'Fuel & charging', body: 'For combustion or electric vehicles, use licensed facilities compatible with your vehicle. Connector type, power, queues, and payment arrangements can change.' },
      { tag: 'A', title: 'Accessibility & rest', body: 'Pavements, crossings, seating, prayer spaces, and step-free access are not consistent on every block. Plan the route that best matches your mobility needs.' }
    ],
    servicesNote: 'Neutrality note: availability, fees, accessibility, and hours can change. This non-profit site is not affiliated with, compensated by, or ranking any service provider.',
    nearbyKicker: 'Continue the route', nearbyTitle: 'Flavour, streets, and landmarks on one line.',
    foodsTitle: 'Food nearby', foods: [
      { title: 'Gudeg', body: 'Try Yogyakarta’s young-jackfruit specialty in the central city; select a place whose access and parking suit your route.' },
      { title: 'Coffee & evening bites', body: 'The corridors toward Malioboro and Margo Utomo offer cafés and food stops for a pause after visiting the monument.' }
    ],
    sightsTitle: 'Places to connect', sights: [
      { title: 'Malioboro Street', body: 'Head south from Tugu to reach the city’s best-known shopping and walking corridor.' },
      { title: 'Yogyakarta Palace', body: 'Continue south to understand Tugu’s relationship with the palace’s Philosophical Axis.' },
      { title: 'Yogyakarta Station', body: 'The main railway station is a practical place to begin or end a city route.' }
    ],
    responsibleKicker: 'Responsible visiting', responsibleTitle: 'Treat Tugu as living heritage.', responsibleBody: 'Tugu’s significance lies not only in its fabric, but also in the streets, rituals, memories, and daily urban life around it. Small choices by visitors help keep this place safe and meaningful.',
    responsible: [
      { title: 'Put safety first', body: 'Do not enter the traffic island, obstruct pavements, or stop vehicles in an unauthorised place for a photograph.' },
      { title: 'Do not alter the site', body: 'Avoid climbing, handling ornament, leaving marks, or attaching objects to the monument and surrounding street infrastructure.' },
      { title: 'Read sources, not only posts', body: 'Separate documented information from opinion and popular stories. Use the cultural-institution links in the footer to explore the context further.' }
    ],
    sourcesTitle: 'Tugu within a wider cultural landscape.', sourceLinks: ['UNESCO · The Cosmological Axis of Yogyakarta and its Historic Landmarks', 'Kraton Yogyakarta · Tugu Golong Gilig', 'Jogja Cagar · Tugu Pal Putih'],
    mapKicker: 'Find the point', mapTitle: 'Tugu at the Sudirman crossroads.', mapBody: `Address: ${shared.address}`, mapLink: 'Open in Google Maps',
    faqKicker: 'Common questions', faqTitle: 'Before you pause at Tugu.',
    faq: [
      { question: 'Can I visit Tugu Jogja at any time?', answer: 'The monument is in open public space at an intersection. Viewing areas around it can be accessed all day, subject to local conditions and traffic rules.' },
      { question: 'Is there an entry ticket?', answer: 'There is no ticket booth to see Tugu from public space. Other stops on your route may charge their own fees.' },
      { question: 'Where can I park?', answer: 'There is no dedicated parking on the monument island. Use an official facility at a business or destination in the surrounding area.' },
      { question: 'Why is Tugu Pal Putih important?', answer: 'It is a key component of Yogyakarta’s Philosophical Axis and carries the history of the Golong Gilig form, the 1867 earthquake, and its rebuilding in 1889.' }
    ],
    disclaimer: 'This is an independent information site and is not affiliated with the Yogyakarta Palace, the City of Yogyakarta, or Google.',
    photoCredit: 'Tugu photo: CEphoto, Uwe Aranas · CC BY-SA 3.0', directionsLabel: 'Directions', sourceLabel: 'Historical source'
  },
  zh: {
    lang: 'zh', locale: 'zh-CN', label: '中文', title: '日惹纪念碑 — 城市轴线的坐标',
    description: '一份关于日惹纪念碑（Tugu Jogja／Tugu Pal Putih）的历史、街区节奏与实用参观信息的简明指南。',
    brandKicker: '印度尼西亚·日惹', heroKicker: 'Tugu Pal Putih · 哲学轴线的地标',
    heroTitle: '在城市中央，找到方向。', heroDek: '日惹纪念碑不只是一处拍照背景。它矗立在十字路口，标记着记忆、方向，以及王宫与城市之间延续至今的对话。',
    heroButtons: ['规划参观', '阅读故事'], heroFacts: [['位置', '苏迪曼路十字路口'], ['到访', '室外地标，全天可见'], ['最佳光线', '傍晚至夜幕初临']],
    nav: [['cerita', '故事'], ['panduan', '参观'], ['sekitar', '周边'], ['peta', '地图']],
    introKicker: '不只是孤立的地标', introTitle: '从这里开始，读懂日惹。',
    introBody: 'Tugu Pal Putih 位于日惹王宫北侧，标记着通往 Margo Utomo、马利奥波罗街与老城区的交汇点。停留数分钟，看看车流、殖民时期街景，以及在此相遇的城市线条。',
    introAxis: '默拉皮火山 — 纪念碑 — 王宫 — Panggung Krapyak — 南海',
    storyKicker: '时间的痕迹', storyTitle: '从 Golong Gilig 到 Pal Putih。',
    storyBody: '今日所见的纪念碑是一层历史。Pal Putih 之名指向它洁白的新形制；更早的 Golong Gilig 形态，则仍作为城市记忆中的团结理念而存在。',
    milestones: [
      { year: '1756', title: 'Golong Gilig 初建', body: '第一座纪念碑建于哈孟古布沃诺一世时期。圆柱与顶部圆球构成 golong-gilig 的形态，象征君民之间的团结。' },
      { year: '1867', title: '地震损毁纪念碑', body: '6 月 10 日的大地震损坏了最初的 Golong Gilig 纪念碑。' },
      { year: '1889', title: '纪念碑重建', body: '在哈孟古布沃诺七世时期，纪念碑以方形、向上收束的形态重新落成，成为今日熟悉的 Pal Putih 轮廓。' }
    ],
    knowledgeKicker: '读懂这处地方', knowledgeTitle: '一座纪念碑，多重意义。', knowledgeBody: '将日惹纪念碑放在更大的文化景观中理解，比把它视为孤立景点更接近其价值。以下内容区分历史记录、文化阐释与公共空间中流传的故事，使参观不止于拍下一张照片。',
    knowledge: [
      { title: '城市轴线与宇宙观', body: '纪念碑位于连接默拉皮火山、王宫、Panggung Krapyak 与南海的南北轴线上。文化遗产阐释将这一布局视为爪哇思想中人与自然、与造物主关系的空间表达。' },
      { title: 'Golong Gilig 作为记忆', body: '早期圆柱与顶部圆球的形态称为 Golong Gilig。王宫资料将其解释为君民团结的象征，并与“Manunggaling Kawula Gusti”的思想相联系。' },
      { title: '故事、阐释与证据', body: '地方传说会让参观更有层次，但应把它们视为继续提问的入口，而非已被证实的历史。日期、建筑形制与物理变化，应以文化机构的记录为准。' }
    ],
    guideKicker: '实地笔记', guideTitle: '一次简单停留，也需要合适节奏。', guideBody: '纪念碑位于繁忙路口中央。将它视为一个观景点，再以步行或三轮车继续前往市中心街区。',
    guide: [
      { title: '时段与停留', body: '可在日落前抵达，获得更柔和的光线；也可在入夜初期感受路口的城市节奏。建议在周边停留约 10–20 分钟，再继续行程。' },
      { title: '门票与费用', body: '从公共空间观赏纪念碑无需购票。之后选择参观的博物馆、导览或其他场所可能另有收费。' },
      { title: '停车信息', body: '纪念碑环岛没有专用停车场。请使用酒店、餐厅或附近目的地的正规停车设施，不要在繁忙路口的进出道路临停。' },
      { title: '交通方式', body: '可乘网约车、人力三轮车或自驾前往附近安全位置。从日惹火车站向北短程车程即可抵达。' }
    ],
    visitKicker: '出发之前', visitTitle: '在持续流动的路口，谨慎步行。', visitBody: '从安全的人行道边缘欣赏纪念碑最合适。留意车流，优先使用可用的人行路线，不要为了拍照突然横穿。',
    visitList: [['到访方式', '纪念碑位于路口中央；请从周边人行道与安全观景点欣赏。'], ['摄影', '可从安全路边使用广角镜头拍摄；不要进入车流环岛。'], ['公共礼仪', '这里既是文化遗产，也是交通节点。请让公共空间对所有人保持舒适。']],
    servicesKicker: '实用需求', servicesTitle: '周边服务：按功能选择，不按商户名称推荐。', servicesIntro: '纪念碑本身并非设有围栏和统一服务台的旅游综合体。日常需求通常由周边走廊内的公共设施或场所自有设施满足。本指南只说明游客常寻找的服务类型，不对任何具体商户作排名、链接或背书。',
    services: [
      { tag: 'WC', title: '卫生间与清洁', body: '请寻找标识清晰的公共卫生间，或使用您正在消费、参观或停留场所提供的设施。到访当天请自行确认开放时段、费用与清洁状况。' },
      { tag: 'P', title: '停车与临时上下客', body: '请使用路口外的正规停车设施或安全上下客点。汽车、摩托车、旅游巴士和自行车的容量与规则可能因管理方和时段而不同。' },
      { tag: 'F', title: '餐饮与饮水', body: '市中心走廊内常见小吃摊、餐馆、咖啡馆等服务类型。请根据饮食需求、预算、出入条件与您能自行判断的卫生信息选择。' },
      { tag: 'H', title: '住宿', body: '市中心一般包含酒店、简易旅馆和民宿等类别。建议比较步行可达性、入住规则、安全性与无障碍条件，不预设某一类别一定更适合。' },
      { tag: 'S', title: '日常补给', body: '附近可能有便利零售、市场和药房等基本供应类别。库存、营业时间与支付方式应以当日现场信息为准。' },
      { tag: 'E', title: '加油与充电', body: '燃油车或电动车应使用符合车辆要求的合规设施。接口类型、功率、排队情况和支付方式都可能变化。' },
      { tag: 'A', title: '无障碍与休息', body: '不同街段的人行道、过街、座椅、祈祷空间与无障碍通行条件并不一致。请按自身行动需求规划更合适的路线。' }
    ],
    servicesNote: '中立说明：服务可用性、收费、无障碍条件与营业时间可能随时变化。本非营利网站不隶属于、不接受报酬于、也不对任何服务提供者进行排名。',
    nearbyKicker: '继续这条路线', nearbyTitle: '味道、街道与地标，在同一条线上展开。',
    foodsTitle: '周边美食', foods: [
      { title: 'Gudeg', body: '可在市中心品尝日惹特色的嫩菠萝蜜料理；请根据路线选择出入与停车方便的餐厅。' },
      { title: '咖啡与夜间小食', body: '通往马利奥波罗与 Margo Utomo 的街道分布着咖啡馆和餐饮点，适合在看完纪念碑后小憩。' }
    ],
    sightsTitle: '可串联的去处', sights: [
      { title: '马利奥波罗街', body: '从纪念碑向南，可抵达这座城市最知名的购物与步行走廊。' },
      { title: '日惹王宫', body: '继续向南，便能理解纪念碑与王宫“哲学轴线”之间的关系。' },
      { title: '日惹火车站', body: '主要铁路车站，是开启或结束城市路线的实用节点。' }
    ],
    responsibleKicker: '负责任地参观', responsibleTitle: '把纪念碑视作仍在运作的文化遗产。', responsibleBody: '纪念碑的价值不只在实体形制，也在于围绕它的街道、仪式、记忆与城市日常。访客的细小选择，能帮助这里持续保持安全与意义。',
    responsible: [
      { title: '安全优先', body: '不要为了拍照进入车流环岛、阻塞人行道，或在未获许可的位置停车。' },
      { title: '不改变遗产现场', body: '避免攀爬、触摸装饰、留下刻画，或把物品系挂于纪念碑和周边街道设施。' },
      { title: '阅读来源，不只看帖文', body: '请区分有据可查的信息、个人观点与流行故事。可通过页脚的文化机构链接进一步了解背景。' }
    ],
    sourcesTitle: '在更广阔的文化景观中理解纪念碑。', sourceLinks: ['UNESCO · 日惹宇宙轴线及其历史地标', '日惹王宫 · Tugu Golong Gilig', '日惹文化遗产系统 · Tugu Pal Putih'],
    mapKicker: '找到这个坐标', mapTitle: '苏迪曼路交汇处的纪念碑。', mapBody: `地址：${shared.address}`, mapLink: '在 Google 地图打开',
    faqKicker: '常见问答', faqTitle: '在纪念碑前驻足之前。',
    faq: [
      { question: '日惹纪念碑可以随时参观吗？', answer: '纪念碑坐落在十字路口的公共室外空间。周边观景区域全天可到达，但请始终遵守当地条件与交通规则。' },
      { question: '需要购买门票吗？', answer: '在公共空间观赏纪念碑无需购票。路线中的其他景点可能各自收费。' },
      { question: '在哪里停车？', answer: '纪念碑环岛没有专用停车场。请使用周边商户或目的地提供的正规停车设施。' },
      { question: '为什么 Tugu Pal Putih 很重要？', answer: '它是日惹哲学轴线的重要组成部分，承载着 Golong Gilig 形态、1867 年地震以及 1889 年重建的历史。' }
    ],
    disclaimer: '本网站为独立信息网站，与日惹王宫、日惹市政府或 Google 均无隶属关系。',
    photoCredit: '纪念碑照片：CEphoto, Uwe Aranas · CC BY-SA 3.0', directionsLabel: '路线指引', sourceLabel: '历史来源'
  }
};

export function getContent(lang: Language) { return content[lang]; }
export function getPath(lang: Language) { return lang === 'id' ? '/' : `/${lang}/`; }
export function getUrl(path: string) { return path; }
export { shared };
