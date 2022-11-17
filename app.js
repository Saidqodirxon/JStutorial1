let ism = prompt("Ismingizni Kiriting : ");
let yil = prompt("Yilingizni Kiriting : ");
let yasashJoy = prompt("Tug`ilgan Joyingizni Kiriting : ");
let hozirgiJoy = prompt("Yashab Turgan Joyingizni Kiriting : ");
let pasportSeriya = prompt("Pasport Seriyangizni kiriting : ");
let pasportRaqam = prompt("Pasport Raqamingizni kiriting : ");
let qiziqish = prompt("Qiziqishingizni kiriting : ");
let millat = prompt("Millatingizni kiriting : ");

let yosh = 2022 - yil;

document.write(
  " Sizning Ismingiz  " + ism,
  " Siz " + yosh + " yosh dasiz ",
  " Siz " + yasashJoy + " da tugilgansiz ",
  " Siz " + hozirgiJoy + " dasiz  yashaysiz",
  " Sizning Pasport Seriya va raqamingiz " + pasportSeriya + pasportRaqam,
  " Siz " + qiziqish + " ga Qiziqasiz ",
  " Siz " + millat + "siz "
);
