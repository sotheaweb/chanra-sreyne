/* ====== EDIT HERE ====== */
export const CONFIG = {
  qrs: [
    { label: "ABA", name: "ស៊ុំផន ស្រីណេ", account: "", image: "images/qr.jpg" },
  ],
  fram: "images/frame.png",
  telegramUser: "Choeun_rane", // without @
  openingPhoto: "images/opening.jpg",        // full-screen photo on the open
  coverPhoto: "images/cover.jpg",                          // example: "images/cover.jpg"  (file in public/images)
  gallery: ["images/11.jpg", "images/12.jpg", "images/welcome.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/1.jpg", "images/2.jpg"], // example: ["images/1.jpg", "images/2.jpg"]
  music: "music/song.mp3",                               // example: "music/song.mp3"   (file in public/music)
  weddingTime: "2027-01-24T15:00:00+07:00",
  mapUrl: "https://maps.app.goo.gl/8pL3VcWM4QZmsdkt9",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1105.2356622363516!2d104.43888371782792!3d11.402373701564969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI0JzA4LjUiTiAxMDTCsDI2JzIwLjciRQ!5e1!3m2!1sen!2skh!4v1793981984006!5m2!1sen!2skh",
  welcomePhoto: "images/welcome.jpg",       // portrait photo for the arch, example: "images/welcome.jpg"
  welcomeFocus: "50% 30%", // which part of the photo to show
  parents: { groom: ["លោក ផន ភន", "អ្នកស្រី ស៊ីវ សុខា"], bride: ["លោក សុខ សន", "អ្នកស្រី ហែម ស៊ីណាន"] }, // optional
  venueText: "ភូមិព្រះខែ ឃុំធម្មតាអរ ស្រុកសំរោងទង ខេត្តកំពង់ស្ពឺ ដោយមេត្រីភាព។",          // optional line for the venue
};
/* ======================= */

export const DAYS = [
 {kh:"កម្មវិធីថ្ងែទី១ ថ្ងៃសៅរ៍ ទី២៣ ខែមករា ឆ្នាំ២០២៧", en:"Day 1 · Saturday 23 January 2027", ev:[
  ["ម៉ោង ០៣:០០ រសៀល","3:00 PM","ពិធីសែនក្រុងពាលី","Sen Krong Peali — offering to the guardian spirits"],
  ["ម៉ោង ០៤:០០ រសៀល","4:00 PM","ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត","Monks chant the blessing (Soth Mon)"],
  ["ម៉ោង ០៥:០០ ល្ងាច","5:00 PM","ពិធីជុំពេលា និងជាវខាន់ស្លា","Chum Pelea and Chav Khan Sla ceremonies"],
  ["ម៉ោង ០៦:៣០ ល្ងាច","6:30 PM","អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច","Dinner for honoured guests"]]},
 {kh:"កម្មវិធីថ្ងែទី២ ថ្ងៃអាទិត្យ ទី២៤ ខែមករា ឆ្នាំ២០២៧", en:"Day 2 · Sunday 24 January 2027", ev:[
  ["ម៉ោង ០៦:៣០ ព្រឹក","6:30 AM","ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំហែជំនូន","Guests gather for the Hae Chamnoun procession"],
  ["ម៉ោង ០៧:០០ ព្រឹក","7:00 AM","ពិធីហែជំនូនកំណត់ចូលរោងជ័យ","Hae Chamnoun — the gift procession enters the wedding pavilion"],
  ["ម៉ោង ០៧:៣០ ព្រឹក","7:30 AM","ពិធីចៅមហានិយាយជើងការ សែនព្រេន រៀបរាប់ផ្លែឈើនិងពិសាភោជនាហារពេលព្រឹក","The master of ceremonies presents the proposal, Sen Pren offering, presentation of fruits, and breakfast"],
  ["ម៉ោង ០៨:០០ ព្រឹក","8:00 AM","ពិធីបំពាក់ចិញ្ចៀន","Exchange of rings"],
  ["ម៉ោង ០៩:០០ ព្រឹក","9:00 AM","ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី","Kat Sak — hair-cutting blessing for the bride and groom"],
  ["ម៉ោង ១១:០០ ព្រឹក","11:00 AM","ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល និងព្រះថោងតោងស្បៃ","Sampeah Ptem, wrist-tying, Bongvil Popil and Preah Thong holding the scarf"],
  ["ម៉ោង ១២:០០ ថ្ងៃត្រង់","12:00 PM","អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់ បញ្ចប់កិច្ចអាពាហ៍ពិពាហ៍","Lunch for honoured guests; the wedding rites conclude"],
  ["ម៉ោង ០៤:០០ ល្ងាច","4:00 PM","អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព ។ សូមអរគុណ !","Dinner reception at the bride’s house. Thank you!"]]}
];


