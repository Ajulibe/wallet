export interface CountryInterface {
   flag: string;
   name: string;
   dial_code: string;
   code: string;
}

export class CountryData {
   // get country from phone number
   static countryFromPhone = (phone: string) =>
      CountryData.allCountries.find((item) => phone!.includes(item.dial_code));

   //  get country from code (eg NativeViewGestureHandler, US etc)
   static countryFromCode = (code: string) =>
      CountryData.allCountries.find(
         (item) => item.code.toLocaleLowerCase() == code.toLocaleLowerCase()
      );

   //get country from dial code (eg +234, +1 etc)
   static countryFromDialCode = (dialCode: string) =>
      CountryData.allCountries.find((item) => item.dial_code == dialCode);

   //get NIG phone number format from full phone code(eg '+2349021324321' will give '9021324321')
   static nigPhoneFormat = (completePhone: string) => {
      if (!completePhone.includes("+")) return completePhone;

      let country = CountryData.countryFromPhone(completePhone);
      let phone = completePhone?.replace(country!.dial_code, ""); //trim off the country phone code
      return "0" + phone; //prepend 0 to get NIG format
   };

   static africaCountries: CountryInterface[] = [
      {
         name: "Nigeria",
         dial_code: "+234",
         code: "NG",
         flag: "https://restcountries.eu/data/nga.svg"
      },
      {
         name: "Ghana",
         dial_code: "+233",
         code: "GH",
         flag: "https://restcountries.eu/data/gha.svg"
      },
      {
         name: "Rwanda",
         dial_code: "+250",
         code: "RW",
         flag: "https://restcountries.eu/data/rwa.svg"
      },
      {
         name: "Benin",
         dial_code: "+229",
         code: "BJ",
         flag: "https://restcountries.eu/data/ben.svg"
      },
      {
         name: "Cameroon",
         dial_code: "+237",
         code: "CM",
         flag: "https://restcountries.eu/data/cmr.svg"
      },
      {
         name: "Liberia",
         dial_code: "+231",
         code: "LR",
         flag: "https://restcountries.eu/data/lbr.svg"
      },
      {
         name: "Kenya",
         dial_code: "+254",
         code: "KE",
         flag: "https://restcountries.eu/data/ken.svg"
      }
   ];

   static allCountries: CountryInterface[] = [
      {
         flag: "https://restcountries.eu/data/afg.svg",
         name: "Afghanistan",
         code: "AF",
         dial_code: "+93"
      },
      {
         flag: "https://restcountries.eu/data/ala.svg",
         name: "Åland Islands",
         code: "AX",
         dial_code: "+358"
      },
      {
         flag: "https://restcountries.eu/data/alb.svg",
         name: "Albania",
         code: "AL",
         dial_code: "+355"
      },
      {
         flag: "https://restcountries.eu/data/dza.svg",
         name: "Algeria",
         code: "DZ",
         dial_code: "+213"
      },
      {
         flag: "https://restcountries.eu/data/asm.svg",
         name: "American Samoa",
         code: "AS",
         dial_code: "+1684"
      },
      {
         flag: "https://restcountries.eu/data/and.svg",
         name: "Andorra",
         code: "AD",
         dial_code: "+376"
      },
      {
         flag: "https://restcountries.eu/data/ago.svg",
         name: "Angola",
         code: "AO",
         dial_code: "+244"
      },
      {
         flag: "https://restcountries.eu/data/aia.svg",
         name: "Anguilla",
         code: "AI",
         dial_code: "+1264"
      },
      {
         flag: "https://restcountries.eu/data/ata.svg",
         name: "Antarctica",
         code: "AQ",
         dial_code: "+672"
      },
      {
         flag: "https://restcountries.eu/data/atg.svg",
         name: "Antigua and Barbuda",
         code: "AG",
         dial_code: "+1268"
      },
      {
         flag: "https://restcountries.eu/data/arg.svg",
         name: "Argentina",
         code: "AR",
         dial_code: "+54"
      },
      {
         flag: "https://restcountries.eu/data/arm.svg",
         name: "Armenia",
         code: "AM",
         dial_code: "+374"
      },
      {
         flag: "https://restcountries.eu/data/abw.svg",
         name: "Aruba",
         code: "AW",
         dial_code: "+297"
      },
      {
         flag: "https://restcountries.eu/data/aus.svg",
         name: "Australia",
         code: "AU",
         dial_code: "+61"
      },
      {
         flag: "https://restcountries.eu/data/aut.svg",
         name: "Austria",
         code: "AT",
         dial_code: "+43"
      },
      {
         flag: "https://restcountries.eu/data/aze.svg",
         name: "Azerbaijan",
         code: "AZ",
         dial_code: "+994"
      },
      {
         flag: "https://restcountries.eu/data/bhs.svg",
         name: "Bahamas",
         code: "BS",
         dial_code: "+1242"
      },
      {
         flag: "https://restcountries.eu/data/bhr.svg",
         name: "Bahrain",
         code: "BH",
         dial_code: "+973"
      },
      {
         flag: "https://restcountries.eu/data/bgd.svg",
         name: "Bangladesh",
         code: "BD",
         dial_code: "+880"
      },
      {
         flag: "https://restcountries.eu/data/brb.svg",
         name: "Barbados",
         code: "BB",
         dial_code: "+1246"
      },
      {
         flag: "https://restcountries.eu/data/blr.svg",
         name: "Belarus",
         code: "BY",
         dial_code: "+375"
      },
      {
         flag: "https://restcountries.eu/data/bel.svg",
         name: "Belgium",
         code: "BE",
         dial_code: "+32"
      },
      {
         flag: "https://restcountries.eu/data/blz.svg",
         name: "Belize",
         code: "BZ",
         dial_code: "+501"
      },
      {
         flag: "https://restcountries.eu/data/ben.svg",
         name: "Benin",
         code: "BJ",
         dial_code: "+229"
      },
      {
         flag: "https://restcountries.eu/data/bmu.svg",
         name: "Bermuda",
         code: "BM",
         dial_code: "+1441"
      },
      {
         flag: "https://restcountries.eu/data/btn.svg",
         name: "Bhutan",
         code: "BT",
         dial_code: "+975"
      },
      {
         flag: "https://restcountries.eu/data/bol.svg",
         name: "Bolivia (Plurinational State of)",
         code: "BO",
         dial_code: "+591"
      },
      {
         flag: "https://restcountries.eu/data/bes.svg",
         name: "Bonaire, Sint Eustatius and Saba",
         code: "BQ",
         dial_code: "+5997"
      },
      {
         flag: "https://restcountries.eu/data/bih.svg",
         name: "Bosnia and Herzegovina",
         code: "BA",
         dial_code: "+387"
      },
      {
         flag: "https://restcountries.eu/data/bwa.svg",
         name: "Botswana",
         code: "BW",
         dial_code: "+267"
      },
      {
         flag: "https://restcountries.eu/data/bra.svg",
         name: "Brazil",
         code: "BR",
         dial_code: "+55"
      },
      {
         flag: "https://restcountries.eu/data/iot.svg",
         name: "British Indian Ocean Territory",
         code: "IO",
         dial_code: "+246"
      },
      {
         flag: "https://restcountries.eu/data/vgb.svg",
         name: "Virgin Islands (British)",
         code: "VG",
         dial_code: "+1284"
      },
      {
         flag: "https://restcountries.eu/data/vir.svg",
         name: "Virgin Islands (U.S.)",
         code: "VI",
         dial_code: "+1 340"
      },
      {
         flag: "https://restcountries.eu/data/brn.svg",
         name: "Brunei Darussalam",
         code: "BN",
         dial_code: "+673"
      },
      {
         flag: "https://restcountries.eu/data/bgr.svg",
         name: "Bulgaria",
         code: "BG",
         dial_code: "+359"
      },
      {
         flag: "https://restcountries.eu/data/bfa.svg",
         name: "Burkina Faso",
         code: "BF",
         dial_code: "+226"
      },
      {
         flag: "https://restcountries.eu/data/bdi.svg",
         name: "Burundi",
         code: "BI",
         dial_code: "+257"
      },
      {
         flag: "https://restcountries.eu/data/khm.svg",
         name: "Cambodia",
         code: "KH",
         dial_code: "+855"
      },
      {
         flag: "https://restcountries.eu/data/cmr.svg",
         name: "Cameroon",
         code: "CM",
         dial_code: "+237"
      },
      {
         flag: "https://restcountries.eu/data/can.svg",
         name: "Canada",
         code: "CA",
         dial_code: "+1"
      },
      {
         flag: "https://restcountries.eu/data/cpv.svg",
         name: "Cabo Verde",
         code: "CV",
         dial_code: "+238"
      },
      {
         flag: "https://restcountries.eu/data/cym.svg",
         name: "Cayman Islands",
         code: "KY",
         dial_code: "+1345"
      },
      {
         flag: "https://restcountries.eu/data/caf.svg",
         name: "Central African Republic",
         code: "CF",
         dial_code: "+236"
      },
      {
         flag: "https://restcountries.eu/data/tcd.svg",
         name: "Chad",
         code: "TD",
         dial_code: "+235"
      },
      {
         flag: "https://restcountries.eu/data/chl.svg",
         name: "Chile",
         code: "CL",
         dial_code: "+56"
      },
      {
         flag: "https://restcountries.eu/data/chn.svg",
         name: "China",
         code: "CN",
         dial_code: "+86"
      },
      {
         flag: "https://restcountries.eu/data/cxr.svg",
         name: "Christmas Island",
         code: "CX",
         dial_code: "+61"
      },
      {
         flag: "https://restcountries.eu/data/cck.svg",
         name: "Cocos (Keeling) Islands",
         code: "CC",
         dial_code: "+61"
      },
      {
         flag: "https://restcountries.eu/data/col.svg",
         name: "Colombia",
         code: "CO",
         dial_code: "+57"
      },
      {
         flag: "https://restcountries.eu/data/com.svg",
         name: "Comoros",
         code: "KM",
         dial_code: "+269"
      },
      {
         flag: "https://restcountries.eu/data/cog.svg",
         name: "Congo",
         code: "CG",
         dial_code: "+242"
      },
      {
         flag: "https://restcountries.eu/data/cod.svg",
         name: "Congo (Democratic Republic of the)",
         code: "CD",
         dial_code: "+243"
      },
      {
         flag: "https://restcountries.eu/data/cok.svg",
         name: "Cook Islands",
         code: "CK",
         dial_code: "+682"
      },
      {
         flag: "https://restcountries.eu/data/cri.svg",
         name: "Costa Rica",
         code: "CR",
         dial_code: "+506"
      },
      {
         flag: "https://restcountries.eu/data/hrv.svg",
         name: "Croatia",
         code: "HR",
         dial_code: "+385"
      },
      {
         flag: "https://restcountries.eu/data/cub.svg",
         name: "Cuba",
         code: "CU",
         dial_code: "+53"
      },
      {
         flag: "https://restcountries.eu/data/cuw.svg",
         name: "Curaçao",
         code: "CW",
         dial_code: "+599"
      },
      {
         flag: "https://restcountries.eu/data/cyp.svg",
         name: "Cyprus",
         code: "CY",
         dial_code: "+357"
      },
      {
         flag: "https://restcountries.eu/data/cze.svg",
         name: "Czech Republic",
         code: "CZ",
         dial_code: "+420"
      },
      {
         flag: "https://restcountries.eu/data/dnk.svg",
         name: "Denmark",
         code: "DK",
         dial_code: "+45"
      },
      {
         flag: "https://restcountries.eu/data/dji.svg",
         name: "Djibouti",
         code: "DJ",
         dial_code: "+253"
      },
      {
         flag: "https://restcountries.eu/data/dma.svg",
         name: "Dominica",
         code: "DM",
         dial_code: "+1767"
      },
      {
         flag: "https://restcountries.eu/data/dom.svg",
         name: "Dominican Republic",
         code: "DO",
         dial_code: "+1809"
      },
      {
         flag: "https://restcountries.eu/data/ecu.svg",
         name: "Ecuador",
         code: "EC",
         dial_code: "+593"
      },
      {
         flag: "https://restcountries.eu/data/egy.svg",
         name: "Egypt",
         code: "EG",
         dial_code: "+20"
      },
      {
         flag: "https://restcountries.eu/data/slv.svg",
         name: "El Salvador",
         code: "SV",
         dial_code: "+503"
      },
      {
         flag: "https://restcountries.eu/data/gnq.svg",
         name: "Equatorial Guinea",
         code: "GQ",
         dial_code: "+240"
      },
      {
         flag: "https://restcountries.eu/data/eri.svg",
         name: "Eritrea",
         code: "ER",
         dial_code: "+291"
      },
      {
         flag: "https://restcountries.eu/data/est.svg",
         name: "Estonia",
         code: "EE",
         dial_code: "+372"
      },
      {
         flag: "https://restcountries.eu/data/eth.svg",
         name: "Ethiopia",
         code: "ET",
         dial_code: "+251"
      },
      {
         flag: "https://restcountries.eu/data/flk.svg",
         name: "Falkland Islands (Malvinas)",
         code: "FK",
         dial_code: "+500"
      },
      {
         flag: "https://restcountries.eu/data/fro.svg",
         name: "Faroe Islands",
         code: "FO",
         dial_code: "+298"
      },
      {
         flag: "https://restcountries.eu/data/fji.svg",
         name: "Fiji",
         code: "FJ",
         dial_code: "+679"
      },
      {
         flag: "https://restcountries.eu/data/fin.svg",
         name: "Finland",
         code: "FI",
         dial_code: "+358"
      },
      {
         flag: "https://restcountries.eu/data/fra.svg",
         name: "France",
         code: "FR",
         dial_code: "+33"
      },
      {
         flag: "https://restcountries.eu/data/guf.svg",
         name: "French Guiana",
         code: "GF",
         dial_code: "+594"
      },
      {
         flag: "https://restcountries.eu/data/pyf.svg",
         name: "French Polynesia",
         code: "PF",
         dial_code: "+689"
      },
      {
         flag: "https://restcountries.eu/data/gab.svg",
         name: "Gabon",
         code: "GA",
         dial_code: "+241"
      },
      {
         flag: "https://restcountries.eu/data/gmb.svg",
         name: "Gambia",
         code: "GM",
         dial_code: "+220"
      },
      {
         flag: "https://restcountries.eu/data/geo.svg",
         name: "Georgia",
         code: "GE",
         dial_code: "+995"
      },
      {
         flag: "https://restcountries.eu/data/deu.svg",
         name: "Germany",
         code: "DE",
         dial_code: "+49"
      },
      {
         flag: "https://restcountries.eu/data/gha.svg",
         name: "Ghana",
         code: "GH",
         dial_code: "+233"
      },
      {
         flag: "https://restcountries.eu/data/gib.svg",
         name: "Gibraltar",
         code: "GI",
         dial_code: "+350"
      },
      {
         flag: "https://restcountries.eu/data/grc.svg",
         name: "Greece",
         code: "GR",
         dial_code: "+30"
      },
      {
         flag: "https://restcountries.eu/data/grl.svg",
         name: "Greenland",
         code: "GL",
         dial_code: "+299"
      },
      {
         flag: "https://restcountries.eu/data/grd.svg",
         name: "Grenada",
         code: "GD",
         dial_code: "+1473"
      },
      {
         flag: "https://restcountries.eu/data/glp.svg",
         name: "Guadeloupe",
         code: "GP",
         dial_code: "+590"
      },
      {
         flag: "https://restcountries.eu/data/gum.svg",
         name: "Guam",
         code: "GU",
         dial_code: "+1671"
      },
      {
         flag: "https://restcountries.eu/data/gtm.svg",
         name: "Guatemala",
         code: "GT",
         dial_code: "+502"
      },
      {
         flag: "https://restcountries.eu/data/ggy.svg",
         name: "Guernsey",
         code: "GG",
         dial_code: "+44"
      },
      {
         flag: "https://restcountries.eu/data/gin.svg",
         name: "Guinea",
         code: "GN",
         dial_code: "+224"
      },
      {
         flag: "https://restcountries.eu/data/gnb.svg",
         name: "Guinea-Bissau",
         code: "GW",
         dial_code: "+245"
      },
      {
         flag: "https://restcountries.eu/data/guy.svg",
         name: "Guyana",
         code: "GY",
         dial_code: "+592"
      },
      {
         flag: "https://restcountries.eu/data/hti.svg",
         name: "Haiti",
         code: "HT",
         dial_code: "+509"
      },
      {
         flag: "https://restcountries.eu/data/vat.svg",
         name: "Holy See",
         code: "VA",
         dial_code: "+379"
      },
      {
         flag: "https://restcountries.eu/data/hnd.svg",
         name: "Honduras",
         code: "HN",
         dial_code: "+504"
      },
      {
         flag: "https://restcountries.eu/data/hkg.svg",
         name: "Hong Kong",
         code: "HK",
         dial_code: "+852"
      },
      {
         flag: "https://restcountries.eu/data/hun.svg",
         name: "Hungary",
         code: "HU",
         dial_code: "+36"
      },
      {
         flag: "https://restcountries.eu/data/isl.svg",
         name: "Iceland",
         code: "IS",
         dial_code: "+354"
      },
      {
         flag: "https://restcountries.eu/data/ind.svg",
         name: "India",
         code: "IN",
         dial_code: "+91"
      },
      {
         flag: "https://restcountries.eu/data/idn.svg",
         name: "Indonesia",
         code: "ID",
         dial_code: "+62"
      },
      {
         flag: "https://restcountries.eu/data/civ.svg",
         name: "Côte d'Ivoire",
         code: "CI",
         dial_code: "+225"
      },
      {
         flag: "https://restcountries.eu/data/irn.svg",
         name: "Iran (Islamic Republic of)",
         code: "IR",
         dial_code: "+98"
      },
      {
         flag: "https://restcountries.eu/data/irq.svg",
         name: "Iraq",
         code: "IQ",
         dial_code: "+964"
      },
      {
         flag: "https://restcountries.eu/data/irl.svg",
         name: "Ireland",
         code: "IE",
         dial_code: "+353"
      },
      {
         flag: "https://restcountries.eu/data/imn.svg",
         name: "Isle of Man",
         code: "IM",
         dial_code: "+44"
      },
      {
         flag: "https://restcountries.eu/data/isr.svg",
         name: "Israel",
         code: "IL",
         dial_code: "+972"
      },
      {
         flag: "https://restcountries.eu/data/ita.svg",
         name: "Italy",
         code: "IT",
         dial_code: "+39"
      },
      {
         flag: "https://restcountries.eu/data/jam.svg",
         name: "Jamaica",
         code: "JM",
         dial_code: "+1876"
      },
      {
         flag: "https://restcountries.eu/data/jpn.svg",
         name: "Japan",
         code: "JP",
         dial_code: "+81"
      },
      {
         flag: "https://restcountries.eu/data/jey.svg",
         name: "Jersey",
         code: "JE",
         dial_code: "+44"
      },
      {
         flag: "https://restcountries.eu/data/jor.svg",
         name: "Jordan",
         code: "JO",
         dial_code: "+962"
      },
      {
         flag: "https://restcountries.eu/data/kaz.svg",
         name: "Kazakhstan",
         code: "KZ",
         dial_code: "+76"
      },
      {
         flag: "https://restcountries.eu/data/ken.svg",
         name: "Kenya",
         code: "KE",
         dial_code: "+254"
      },
      {
         flag: "https://restcountries.eu/data/kir.svg",
         name: "Kiribati",
         code: "KI",
         dial_code: "+686"
      },
      {
         flag: "https://restcountries.eu/data/kwt.svg",
         name: "Kuwait",
         code: "KW",
         dial_code: "+965"
      },
      {
         flag: "https://restcountries.eu/data/kgz.svg",
         name: "Kyrgyzstan",
         code: "KG",
         dial_code: "+996"
      },
      {
         flag: "https://restcountries.eu/data/lao.svg",
         name: "Lao People's Democratic Republic",
         code: "LA",
         dial_code: "+856"
      },
      {
         flag: "https://restcountries.eu/data/lva.svg",
         name: "Latvia",
         code: "LV",
         dial_code: "+371"
      },
      {
         flag: "https://restcountries.eu/data/lbn.svg",
         name: "Lebanon",
         code: "LB",
         dial_code: "+961"
      },
      {
         flag: "https://restcountries.eu/data/lso.svg",
         name: "Lesotho",
         code: "LS",
         dial_code: "+266"
      },
      {
         flag: "https://restcountries.eu/data/lbr.svg",
         name: "Liberia",
         code: "LR",
         dial_code: "+231"
      },
      {
         flag: "https://restcountries.eu/data/lby.svg",
         name: "Libya",
         code: "LY",
         dial_code: "+218"
      },
      {
         flag: "https://restcountries.eu/data/lie.svg",
         name: "Liechtenstein",
         code: "LI",
         dial_code: "+423"
      },
      {
         flag: "https://restcountries.eu/data/ltu.svg",
         name: "Lithuania",
         code: "LT",
         dial_code: "+370"
      },
      {
         flag: "https://restcountries.eu/data/lux.svg",
         name: "Luxembourg",
         code: "LU",
         dial_code: "+352"
      },
      {
         flag: "https://restcountries.eu/data/mac.svg",
         name: "Macao",
         code: "MO",
         dial_code: "+853"
      },
      {
         flag: "https://restcountries.eu/data/mkd.svg",
         name: "Macedonia (the former Yugoslav Republic of)",
         code: "MK",
         dial_code: "+389"
      },
      {
         flag: "https://restcountries.eu/data/mdg.svg",
         name: "Madagascar",
         code: "MG",
         dial_code: "+261"
      },
      {
         flag: "https://restcountries.eu/data/mwi.svg",
         name: "Malawi",
         code: "MW",
         dial_code: "+265"
      },
      {
         flag: "https://restcountries.eu/data/mys.svg",
         name: "Malaysia",
         code: "MY",
         dial_code: "+60"
      },
      {
         flag: "https://restcountries.eu/data/mdv.svg",
         name: "Maldives",
         code: "MV",
         dial_code: "+960"
      },
      {
         flag: "https://restcountries.eu/data/mli.svg",
         name: "Mali",
         code: "ML",
         dial_code: "+223"
      },
      {
         flag: "https://restcountries.eu/data/mlt.svg",
         name: "Malta",
         code: "MT",
         dial_code: "+356"
      },
      {
         flag: "https://restcountries.eu/data/mhl.svg",
         name: "Marshall Islands",
         code: "MH",
         dial_code: "+692"
      },
      {
         flag: "https://restcountries.eu/data/mtq.svg",
         name: "Martinique",
         code: "MQ",
         dial_code: "+596"
      },
      {
         flag: "https://restcountries.eu/data/mrt.svg",
         name: "Mauritania",
         code: "MR",
         dial_code: "+222"
      },
      {
         flag: "https://restcountries.eu/data/mus.svg",
         name: "Mauritius",
         code: "MU",
         dial_code: "+230"
      },
      {
         flag: "https://restcountries.eu/data/myt.svg",
         name: "Mayotte",
         code: "YT",
         dial_code: "+262"
      },
      {
         flag: "https://restcountries.eu/data/mex.svg",
         name: "Mexico",
         code: "MX",
         dial_code: "+52"
      },
      {
         flag: "https://restcountries.eu/data/fsm.svg",
         name: "Micronesia (Federated States of)",
         code: "FM",
         dial_code: "+691"
      },
      {
         flag: "https://restcountries.eu/data/mda.svg",
         name: "Moldova (Republic of)",
         code: "MD",
         dial_code: "+373"
      },
      {
         flag: "https://restcountries.eu/data/mco.svg",
         name: "Monaco",
         code: "MC",
         dial_code: "+377"
      },
      {
         flag: "https://restcountries.eu/data/mng.svg",
         name: "Mongolia",
         code: "MN",
         dial_code: "+976"
      },
      {
         flag: "https://restcountries.eu/data/mne.svg",
         name: "Montenegro",
         code: "ME",
         dial_code: "+382"
      },
      {
         flag: "https://restcountries.eu/data/msr.svg",
         name: "Montserrat",
         code: "MS",
         dial_code: "+1664"
      },
      {
         flag: "https://restcountries.eu/data/mar.svg",
         name: "Morocco",
         code: "MA",
         dial_code: "+212"
      },
      {
         flag: "https://restcountries.eu/data/moz.svg",
         name: "Mozambique",
         code: "MZ",
         dial_code: "+258"
      },
      {
         flag: "https://restcountries.eu/data/mmr.svg",
         name: "Myanmar",
         code: "MM",
         dial_code: "+95"
      },
      {
         flag: "https://restcountries.eu/data/nam.svg",
         name: "Namibia",
         code: "NA",
         dial_code: "+264"
      },
      {
         flag: "https://restcountries.eu/data/nru.svg",
         name: "Nauru",
         code: "NR",
         dial_code: "+674"
      },
      {
         flag: "https://restcountries.eu/data/npl.svg",
         name: "Nepal",
         code: "NP",
         dial_code: "+977"
      },
      {
         flag: "https://restcountries.eu/data/nld.svg",
         name: "Netherlands",
         code: "NL",
         dial_code: "+31"
      },
      {
         flag: "https://restcountries.eu/data/ncl.svg",
         name: "New Caledonia",
         code: "NC",
         dial_code: "+687"
      },
      {
         flag: "https://restcountries.eu/data/nzl.svg",
         name: "New Zealand",
         code: "NZ",
         dial_code: "+64"
      },
      {
         flag: "https://restcountries.eu/data/nic.svg",
         name: "Nicaragua",
         code: "NI",
         dial_code: "+505"
      },
      {
         flag: "https://restcountries.eu/data/ner.svg",
         name: "Niger",
         code: "NE",
         dial_code: "+227"
      },
      {
         flag: "https://restcountries.eu/data/nga.svg",
         name: "Nigeria",
         code: "NG",
         dial_code: "+234"
      },
      {
         flag: "https://restcountries.eu/data/niu.svg",
         name: "Niue",
         code: "NU",
         dial_code: "+683"
      },
      {
         flag: "https://restcountries.eu/data/nfk.svg",
         name: "Norfolk Island",
         code: "NF",
         dial_code: "+672"
      },
      {
         flag: "https://restcountries.eu/data/prk.svg",
         name: "Korea (Democratic People's Republic of)",
         code: "KP",
         dial_code: "+850"
      },
      {
         flag: "https://restcountries.eu/data/mnp.svg",
         name: "Northern Mariana Islands",
         code: "MP",
         dial_code: "+1670"
      },
      {
         flag: "https://restcountries.eu/data/nor.svg",
         name: "Norway",
         code: "NO",
         dial_code: "+47"
      },
      {
         flag: "https://restcountries.eu/data/omn.svg",
         name: "Oman",
         code: "OM",
         dial_code: "+968"
      },
      {
         flag: "https://restcountries.eu/data/pak.svg",
         name: "Pakistan",
         code: "PK",
         dial_code: "+92"
      },
      {
         flag: "https://restcountries.eu/data/plw.svg",
         name: "Palau",
         code: "PW",
         dial_code: "+680"
      },
      {
         flag: "https://restcountries.eu/data/pse.svg",
         name: "Palestine, State of",
         code: "PS",
         dial_code: "+970"
      },
      {
         flag: "https://restcountries.eu/data/pan.svg",
         name: "Panama",
         code: "PA",
         dial_code: "+507"
      },
      {
         flag: "https://restcountries.eu/data/png.svg",
         name: "Papua New Guinea",
         code: "PG",
         dial_code: "+675"
      },
      {
         flag: "https://restcountries.eu/data/pry.svg",
         name: "Paraguay",
         code: "PY",
         dial_code: "+595"
      },
      {
         flag: "https://restcountries.eu/data/per.svg",
         name: "Peru",
         code: "PE",
         dial_code: "+51"
      },
      {
         flag: "https://restcountries.eu/data/phl.svg",
         name: "Philippines",
         code: "PH",
         dial_code: "+63"
      },
      {
         flag: "https://restcountries.eu/data/pcn.svg",
         name: "Pitcairn",
         code: "PN",
         dial_code: "+64"
      },
      {
         flag: "https://restcountries.eu/data/pol.svg",
         name: "Poland",
         code: "PL",
         dial_code: "+48"
      },
      {
         flag: "https://restcountries.eu/data/prt.svg",
         name: "Portugal",
         code: "PT",
         dial_code: "+351"
      },
      {
         flag: "https://restcountries.eu/data/pri.svg",
         name: "Puerto Rico",
         code: "PR",
         dial_code: "+1787"
      },
      {
         flag: "https://restcountries.eu/data/qat.svg",
         name: "Qatar",
         code: "QA",
         dial_code: "+974"
      },
      {
         flag: "https://restcountries.eu/data/kos.svg",
         name: "Republic of Kosovo",
         code: "XK",
         dial_code: "+383"
      },
      {
         flag: "https://restcountries.eu/data/reu.svg",
         name: "Réunion",
         code: "RE",
         dial_code: "+262"
      },
      {
         flag: "https://restcountries.eu/data/rou.svg",
         name: "Romania",
         code: "RO",
         dial_code: "+40"
      },
      {
         flag: "https://restcountries.eu/data/rus.svg",
         name: "Russian Federation",
         code: "RU",
         dial_code: "+7"
      },
      {
         flag: "https://restcountries.eu/data/rwa.svg",
         name: "Rwanda",
         code: "RW",
         dial_code: "+250"
      },
      {
         flag: "https://restcountries.eu/data/blm.svg",
         name: "Saint Barthélemy",
         code: "BL",
         dial_code: "+590"
      },
      {
         flag: "https://restcountries.eu/data/shn.svg",
         name: "Saint Helena, Ascension and Tristan da Cunha",
         code: "SH",
         dial_code: "+290"
      },
      {
         flag: "https://restcountries.eu/data/kna.svg",
         name: "Saint Kitts and Nevis",
         code: "KN",
         dial_code: "+1869"
      },
      {
         flag: "https://restcountries.eu/data/lca.svg",
         name: "Saint Lucia",
         code: "LC",
         dial_code: "+1758"
      },
      {
         flag: "https://restcountries.eu/data/maf.svg",
         name: "Saint Martin (French part)",
         code: "MF",
         dial_code: "+590"
      },
      {
         flag: "https://restcountries.eu/data/spm.svg",
         name: "Saint Pierre and Miquelon",
         code: "PM",
         dial_code: "+508"
      },
      {
         flag: "https://restcountries.eu/data/vct.svg",
         name: "Saint Vincent and the Grenadines",
         code: "VC",
         dial_code: "+1784"
      },
      {
         flag: "https://restcountries.eu/data/wsm.svg",
         name: "Samoa",
         code: "WS",
         dial_code: "+685"
      },
      {
         flag: "https://restcountries.eu/data/smr.svg",
         name: "San Marino",
         code: "SM",
         dial_code: "+378"
      },
      {
         flag: "https://restcountries.eu/data/stp.svg",
         name: "Sao Tome and Principe",
         code: "ST",
         dial_code: "+239"
      },
      {
         flag: "https://restcountries.eu/data/sau.svg",
         name: "Saudi Arabia",
         code: "SA",
         dial_code: "+966"
      },
      {
         flag: "https://restcountries.eu/data/sen.svg",
         name: "Senegal",
         code: "SN",
         dial_code: "+221"
      },
      {
         flag: "https://restcountries.eu/data/srb.svg",
         name: "Serbia",
         code: "RS",
         dial_code: "+381"
      },
      {
         flag: "https://restcountries.eu/data/syc.svg",
         name: "Seychelles",
         code: "SC",
         dial_code: "+248"
      },
      {
         flag: "https://restcountries.eu/data/sle.svg",
         name: "Sierra Leone",
         code: "SL",
         dial_code: "+232"
      },
      {
         flag: "https://restcountries.eu/data/sgp.svg",
         name: "Singapore",
         code: "SG",
         dial_code: "+65"
      },
      {
         flag: "https://restcountries.eu/data/sxm.svg",
         name: "Sint Maarten (Dutch part)",
         code: "SX",
         dial_code: "+1721"
      },
      {
         flag: "https://restcountries.eu/data/svk.svg",
         name: "Slovakia",
         code: "SK",
         dial_code: "+421"
      },
      {
         flag: "https://restcountries.eu/data/svn.svg",
         name: "Slovenia",
         code: "SI",
         dial_code: "+386"
      },
      {
         flag: "https://restcountries.eu/data/slb.svg",
         name: "Solomon Islands",
         code: "SB",
         dial_code: "+677"
      },
      {
         flag: "https://restcountries.eu/data/som.svg",
         name: "Somalia",
         code: "SO",
         dial_code: "+252"
      },
      {
         flag: "https://restcountries.eu/data/zaf.svg",
         name: "South Africa",
         code: "ZA",
         dial_code: "+27"
      },
      {
         flag: "https://restcountries.eu/data/sgs.svg",
         name: "South Georgia and the South Sandwich Islands",
         code: "GS",
         dial_code: "+500"
      },
      {
         flag: "https://restcountries.eu/data/kor.svg",
         name: "Korea (Republic of)",
         code: "KR",
         dial_code: "+82"
      },
      {
         flag: "https://restcountries.eu/data/ssd.svg",
         name: "South Sudan",
         code: "SS",
         dial_code: "+211"
      },
      {
         flag: "https://restcountries.eu/data/esp.svg",
         name: "Spain",
         code: "ES",
         dial_code: "+34"
      },
      {
         flag: "https://restcountries.eu/data/lka.svg",
         name: "Sri Lanka",
         code: "LK",
         dial_code: "+94"
      },
      {
         flag: "https://restcountries.eu/data/sdn.svg",
         name: "Sudan",
         code: "SD",
         dial_code: "+249"
      },
      {
         flag: "https://restcountries.eu/data/sur.svg",
         name: "Suriname",
         code: "SR",
         dial_code: "+597"
      },
      {
         flag: "https://restcountries.eu/data/sjm.svg",
         name: "Svalbard and Jan Mayen",
         code: "SJ",
         dial_code: "+4779"
      },
      {
         flag: "https://restcountries.eu/data/swz.svg",
         name: "Swaziland",
         code: "SZ",
         dial_code: "+268"
      },
      {
         flag: "https://restcountries.eu/data/swe.svg",
         name: "Sweden",
         code: "SE",
         dial_code: "+46"
      },
      {
         flag: "https://restcountries.eu/data/che.svg",
         name: "Switzerland",
         code: "CH",
         dial_code: "+41"
      },
      {
         flag: "https://restcountries.eu/data/syr.svg",
         name: "Syrian Arab Republic",
         code: "SY",
         dial_code: "+963"
      },
      {
         flag: "https://restcountries.eu/data/twn.svg",
         name: "Taiwan",
         code: "TW",
         dial_code: "+886"
      },
      {
         flag: "https://restcountries.eu/data/tjk.svg",
         name: "Tajikistan",
         code: "TJ",
         dial_code: "+992"
      },
      {
         flag: "https://restcountries.eu/data/tza.svg",
         name: "Tanzania, United Republic of",
         code: "TZ",
         dial_code: "+255"
      },
      {
         flag: "https://restcountries.eu/data/tha.svg",
         name: "Thailand",
         code: "TH",
         dial_code: "+66"
      },
      {
         flag: "https://restcountries.eu/data/tls.svg",
         name: "Timor-Leste",
         code: "TL",
         dial_code: "+670"
      },
      {
         flag: "https://restcountries.eu/data/tgo.svg",
         name: "Togo",
         code: "TG",
         dial_code: "+228"
      },
      {
         flag: "https://restcountries.eu/data/tkl.svg",
         name: "Tokelau",
         code: "TK",
         dial_code: "+690"
      },
      {
         flag: "https://restcountries.eu/data/ton.svg",
         name: "Tonga",
         code: "TO",
         dial_code: "+676"
      },
      {
         flag: "https://restcountries.eu/data/tto.svg",
         name: "Trinidad and Tobago",
         code: "TT",
         dial_code: "+1868"
      },
      {
         flag: "https://restcountries.eu/data/tun.svg",
         name: "Tunisia",
         code: "TN",
         dial_code: "+216"
      },
      {
         flag: "https://restcountries.eu/data/tur.svg",
         name: "Turkey",
         code: "TR",
         dial_code: "+90"
      },
      {
         flag: "https://restcountries.eu/data/tkm.svg",
         name: "Turkmenistan",
         code: "TM",
         dial_code: "+993"
      },
      {
         flag: "https://restcountries.eu/data/tca.svg",
         name: "Turks and Caicos Islands",
         code: "TC",
         dial_code: "+1649"
      },
      {
         flag: "https://restcountries.eu/data/tuv.svg",
         name: "Tuvalu",
         code: "TV",
         dial_code: "+688"
      },
      {
         flag: "https://restcountries.eu/data/uga.svg",
         name: "Uganda",
         code: "UG",
         dial_code: "+256"
      },
      {
         flag: "https://restcountries.eu/data/ukr.svg",
         name: "Ukraine",
         code: "UA",
         dial_code: "+380"
      },
      {
         flag: "https://restcountries.eu/data/are.svg",
         name: "United Arab Emirates",
         code: "AE",
         dial_code: "+971"
      },
      {
         flag: "https://restcountries.eu/data/gbr.svg",
         name: "United Kingdom of Great Britain and Northern Ireland",
         code: "GB",
         dial_code: "+44"
      },
      {
         flag: "https://restcountries.eu/data/usa.svg",
         name: "United States of America",
         code: "US",
         dial_code: "+1"
      },
      {
         flag: "https://restcountries.eu/data/ury.svg",
         name: "Uruguay",
         code: "UY",
         dial_code: "+598"
      },
      {
         flag: "https://restcountries.eu/data/uzb.svg",
         name: "Uzbekistan",
         code: "UZ",
         dial_code: "+998"
      },
      {
         flag: "https://restcountries.eu/data/vut.svg",
         name: "Vanuatu",
         code: "VU",
         dial_code: "+678"
      },
      {
         flag: "https://restcountries.eu/data/ven.svg",
         name: "Venezuela (Bolivarian Republic of)",
         code: "VE",
         dial_code: "+58"
      },
      {
         flag: "https://restcountries.eu/data/vnm.svg",
         name: "Viet Nam",
         code: "VN",
         dial_code: "+84"
      },
      {
         flag: "https://restcountries.eu/data/wlf.svg",
         name: "Wallis and Futuna",
         code: "WF",
         dial_code: "+681"
      },
      {
         flag: "https://restcountries.eu/data/esh.svg",
         name: "Western Sahara",
         code: "EH",
         dial_code: "+212"
      },
      {
         flag: "https://restcountries.eu/data/yem.svg",
         name: "Yemen",
         code: "YE",
         dial_code: "+967"
      },
      {
         flag: "https://restcountries.eu/data/zmb.svg",
         name: "Zambia",
         code: "ZM",
         dial_code: "+260"
      },
      {
         flag: "https://restcountries.eu/data/zwe.svg",
         name: "Zimbabwe",
         code: "ZW",
         dial_code: "+263"
      }
   ];
}
