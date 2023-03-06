/* ########################################### DATA ########################################### */
const countries = [
    {
        "name": "Afghanistan",
        "topLevelDomain": [".af"],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": ["93"],
        "capital": "Kabul",
        "altSpellings": ["AF", "AfÄ¡ÄnistÄn"],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 27657145,
        "latlng": [33.0, 65.0],
        "demonym": "Afghan",
        "area": 652230.0,
        "gini": 27.8,
        "timezones": ["UTC+04:30"],
        "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
        "nativeName": "Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†",
        "numericCode": "004",
        "currencies": [{ "code": "AFN", "name": "Afghan afghani", "symbol": "Ø‹" }],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "Ù¾ÚšØªÙˆ"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "OÊ»zbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "TÃ¼rkmen"
            }
        ],
        "translations": {
            "br": "AfeganistÃ£o",
            "pt": "AfeganistÃ£o",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†",
            "de": "Afghanistan",
            "es": "AfganistÃ¡n",
            "fr": "Afghanistan",
            "ja": "ã‚¢ãƒ•ã‚¬ãƒ‹ã‚¹ã‚¿ãƒ³",
            "it": "Afghanistan",
            "hu": "AfganisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/afg.svg",
            "https://restcountries.com/data/png/afg.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "AFG",
        "independent": true
    },
    {
        "name": "Albania",
        "topLevelDomain": [".al"],
        "alpha2Code": "AL",
        "alpha3Code": "ALB",
        "callingCodes": ["355"],
        "capital": "Tirana",
        "altSpellings": ["AL", "ShqipÃ«ri", "ShqipÃ«ria", "Shqipnia"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 2886026,
        "latlng": [41.0, 20.0],
        "demonym": "Albanian",
        "area": 28748.0,
        "gini": 34.5,
        "timezones": ["UTC+01:00"],
        "borders": ["MNE", "GRC", "MKD", "KOS"],
        "nativeName": "ShqipÃ«ria",
        "numericCode": "008",
        "currencies": [{ "code": "ALL", "name": "Albanian lek", "symbol": "L" }],
        "languages": [
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            }
        ],
        "translations": {
            "br": "AlbÃ¢nia",
            "pt": "AlbÃ¢nia",
            "nl": "AlbaniÃ«",
            "hr": "Albanija",
            "fa": "Ø¢Ù„Ø¨Ø§Ù†ÛŒ",
            "de": "Albanien",
            "es": "Albania",
            "fr": "Albanie",
            "ja": "ã‚¢ãƒ«ãƒãƒ‹ã‚¢",
            "it": "Albania",
            "hu": "AlbÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/alb.svg",
            "https://restcountries.com/data/png/alb.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "ALB",
        "independent": true
    },
    {
        "name": "Algeria",
        "topLevelDomain": [".dz"],
        "alpha2Code": "DZ",
        "alpha3Code": "DZA",
        "callingCodes": ["213"],
        "capital": "Algiers",
        "altSpellings": ["DZ", "Dzayer", "AlgÃ©rie"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 40400000,
        "latlng": [28.0, 3.0],
        "demonym": "Algerian",
        "area": 2381741.0,
        "gini": 35.3,
        "timezones": ["UTC+01:00"],
        "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
        "nativeName": "Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±",
        "numericCode": "012",
        "currencies": [
            { "code": "DZD", "name": "Algerian dinar", "symbol": "Ø¯.Ø¬" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "ArgÃ©lia",
            "pt": "ArgÃ©lia",
            "nl": "Algerije",
            "hr": "AlÅ¾ir",
            "fa": "Ø§Ù„Ø¬Ø²Ø§ÛŒØ±",
            "de": "Algerien",
            "es": "Argelia",
            "fr": "AlgÃ©rie",
            "ja": "ã‚¢ãƒ«ã‚¸ã‚§ãƒªã‚¢",
            "it": "Algeria",
            "hu": "AlgÃ©ria"
        },
        "flags": [
            "https://restcountries.com/data/dza.svg",
            "https://restcountries.com/data/png/dza.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "ALG",
        "independent": true
    },
    {
        "name": "American Samoa",
        "topLevelDomain": [".as"],
        "alpha2Code": "AS",
        "alpha3Code": "ASM",
        "callingCodes": ["1"],
        "capital": "Pago Pago",
        "altSpellings": ["AS", "Amerika SÄmoa", "Amelika SÄmoa", "SÄmoa Amelika"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 57100,
        "latlng": [-14.33333333, -170.0],
        "demonym": "American Samoan",
        "area": 199.0,
        "timezones": ["UTC-11:00"],
        "nativeName": "American Samoa",
        "numericCode": "016",
        "currencies": [
            { "code": "USD", "name": "United States Dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sm",
                "iso639_2": "smo",
                "name": "Samoan",
                "nativeName": "gagana fa'a Samoa"
            }
        ],
        "translations": {
            "br": "Samoa Americana",
            "pt": "Samoa Americana",
            "nl": "Amerikaans Samoa",
            "hr": "AmeriÄka Samoa",
            "fa": "Ø³Ø§Ù…ÙˆØ¢ÛŒ Ø¢Ù…Ø±ÛŒÚ©Ø§",
            "de": "Amerikanisch-Samoa",
            "es": "Samoa Americana",
            "fr": "Samoa amÃ©ricaines",
            "ja": "ã‚¢ãƒ¡ãƒªã‚«é ˜ã‚µãƒ¢ã‚¢",
            "it": "Samoa Americane",
            "hu": "Amerikai Szamoa"
        },
        "flags": [
            "https://restcountries.com/data/asm.svg",
            "https://restcountries.com/data/png/asm.png"
        ],
        "cioc": "ASA",
        "independent": false
    },
    {
        "name": "Andorra",
        "topLevelDomain": [".ad"],
        "alpha2Code": "AD",
        "alpha3Code": "AND",
        "callingCodes": ["376"],
        "capital": "Andorra la Vella",
        "altSpellings": ["AD", "Principality of Andorra", "Principat d'Andorra"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 78014,
        "latlng": [42.5, 1.5],
        "demonym": "Andorran",
        "area": 468.0,
        "timezones": ["UTC+01:00"],
        "borders": ["FRA", "ESP"],
        "nativeName": "Andorra",
        "numericCode": "020",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "ca",
                "iso639_2": "cat",
                "name": "Catalan",
                "nativeName": "catalÃ "
            }
        ],
        "translations": {
            "br": "Andorra",
            "pt": "Andorra",
            "nl": "Andorra",
            "hr": "Andora",
            "fa": "Ø¢Ù†Ø¯ÙˆØ±Ø§",
            "de": "Andorra",
            "es": "Andorra",
            "fr": "Andorre",
            "ja": "ã‚¢ãƒ³ãƒ‰ãƒ©",
            "it": "Andorra",
            "hu": "Andorra"
        },
        "flags": [
            "https://restcountries.com/data/and.svg",
            "https://restcountries.com/data/png/and.png"
        ],
        "cioc": "AND",
        "independent": true
    },
    {
        "name": "Angola",
        "topLevelDomain": [".ao"],
        "alpha2Code": "AO",
        "alpha3Code": "AGO",
        "callingCodes": ["244"],
        "capital": "Luanda",
        "altSpellings": ["AO", "RepÃºblica de Angola", "ÊÉ›publika de an'É¡É”la"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 25868000,
        "latlng": [-12.5, 18.5],
        "demonym": "Angolan",
        "area": 1246700.0,
        "gini": 58.6,
        "timezones": ["UTC+01:00"],
        "borders": ["COG", "COD", "ZMB", "NAM"],
        "nativeName": "Angola",
        "numericCode": "024",
        "currencies": [{ "code": "AOA", "name": "Angolan kwanza", "symbol": "Kz" }],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Angola",
            "pt": "Angola",
            "nl": "Angola",
            "hr": "Angola",
            "fa": "Ø¢Ù†Ú¯ÙˆÙ„Ø§",
            "de": "Angola",
            "es": "Angola",
            "fr": "Angola",
            "ja": "ã‚¢ãƒ³ã‚´ãƒ©",
            "it": "Angola",
            "hu": "Angola"
        },
        "flags": [
            "https://restcountries.com/data/ago.svg",
            "https://restcountries.com/data/png/ago.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "ANG",
        "independent": true
    },
    {
        "name": "Anguilla",
        "topLevelDomain": [".ai"],
        "alpha2Code": "AI",
        "alpha3Code": "AIA",
        "callingCodes": ["1"],
        "capital": "The Valley",
        "altSpellings": ["AI"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 13452,
        "latlng": [18.25, -63.16666666],
        "demonym": "Anguillian",
        "area": 91.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Anguilla",
        "numericCode": "660",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Anguila",
            "pt": "Anguila",
            "nl": "Anguilla",
            "hr": "Angvila",
            "fa": "Ø¢Ù†Ú¯ÙˆÛŒÙ„Ø§",
            "de": "Anguilla",
            "es": "Anguilla",
            "fr": "Anguilla",
            "ja": "ã‚¢ãƒ³ã‚®ãƒ©",
            "it": "Anguilla",
            "hu": "Anguilla"
        },
        "flags": [
            "https://restcountries.com/data/aia.svg",
            "https://restcountries.com/data/png/aia.png"
        ],
        "independent": false
    },
    {
        "name": "Antarctica",
        "topLevelDomain": [".aq"],
        "alpha2Code": "AQ",
        "alpha3Code": "ATA",
        "callingCodes": ["672"],
        "continent": "Polar",
        "population": 1000,
        "latlng": [-74.65, 4.48],
        "demonym": "Antarctic",
        "area": 1.4e7,
        "timezones": [
            "UTC-03:00",
            "UTC+03:00",
            "UTC+05:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "nativeName": "Antarctica",
        "numericCode": "010",
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "AntÃ¡rtida",
            "pt": "AntÃ¡rctida",
            "nl": "Antarctica",
            "hr": "Antarktika",
            "fa": "Ø¬Ù†ÙˆØ¨Ú¯Ø§Ù†",
            "de": "Antarktika",
            "es": "AntÃ¡rtida",
            "fr": "Antarctique",
            "ja": "å—æ¥µå¤§é™¸",
            "it": "Antartide",
            "hu": "Antarktisz"
        },
        "flags": [
            "https://restcountries.com/data/ata.svg",
            "https://restcountries.com/data/png/ata.png"
        ],
        "independent": false
    },
    {
        "name": "Antigua and Barbuda",
        "topLevelDomain": [".ag"],
        "alpha2Code": "AG",
        "alpha3Code": "ATG",
        "callingCodes": ["1"],
        "capital": "Saint John's",
        "altSpellings": ["AG"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 86295,
        "latlng": [17.05, -61.8],
        "demonym": "Antiguan, Barbudan",
        "area": 442.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Antigua and Barbuda",
        "numericCode": "028",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "AntÃ­gua e Barbuda",
            "pt": "AntÃ­gua e Barbuda",
            "nl": "Antigua en Barbuda",
            "hr": "Antigva i Barbuda",
            "fa": "Ø¢Ù†ØªÛŒÚ¯ÙˆØ§ Ùˆ Ø¨Ø§Ø±Ø¨ÙˆØ¯Ø§",
            "de": "Antigua und Barbuda",
            "es": "Antigua y Barbuda",
            "fr": "Antigua-et-Barbuda",
            "ja": "ã‚¢ãƒ³ãƒ†ã‚£ã‚°ã‚¢ãƒ»ãƒãƒ¼ãƒ–ãƒ¼ãƒ€",
            "it": "Antigua e Barbuda",
            "hu": "Antigua Ã©s Barbuda"
        },
        "flags": [
            "https://restcountries.com/data/atg.svg",
            "https://restcountries.com/data/png/atg.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "ANT",
        "independent": true
    },
    {
        "name": "Argentina",
        "topLevelDomain": [".ar"],
        "alpha2Code": "AR",
        "alpha3Code": "ARG",
        "callingCodes": ["54"],
        "capital": "Buenos Aires",
        "altSpellings": ["AR", "Argentine Republic", "RepÃºblica Argentina"],
        "region": "South America",
        "continent": "Americas",
        "population": 43590400,
        "latlng": [-34.0, -64.0],
        "demonym": "Argentinean",
        "area": 2780400.0,
        "gini": 44.5,
        "timezones": ["UTC-03:00"],
        "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
        "nativeName": "Argentina",
        "numericCode": "032",
        "currencies": [{ "code": "ARS", "name": "Argentine peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            },
            {
                "iso639_1": "gn",
                "iso639_2": "grn",
                "name": "GuaranÃ­",
                "nativeName": "AvaÃ±e'áº½"
            }
        ],
        "translations": {
            "br": "Argentina",
            "pt": "Argentina",
            "nl": "ArgentiniÃ«",
            "hr": "Argentina",
            "fa": "Ø¢Ø±Ú˜Ø§Ù†ØªÛŒÙ†",
            "de": "Argentinien",
            "es": "Argentina",
            "fr": "Argentine",
            "ja": "ã‚¢ãƒ«ã‚¼ãƒ³ãƒãƒ³",
            "it": "Argentina",
            "hu": "ArgentÃ­na"
        },
        "flags": [
            "https://restcountries.com/data/arg.svg",
            "https://restcountries.com/data/png/arg.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "ARG",
        "independent": true
    },
    {
        "name": "Armenia",
        "topLevelDomain": [".am"],
        "alpha2Code": "AM",
        "alpha3Code": "ARM",
        "callingCodes": ["374"],
        "capital": "Yerevan",
        "altSpellings": [
            "AM",
            "Hayastan",
            "Republic of Armenia",
            "Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶Õ« Õ€Õ¡Õ¶Ö€Õ¡ÕºÕ¥Õ¿Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 2994400,
        "latlng": [40.0, 45.0],
        "demonym": "Armenian",
        "area": 29743.0,
        "gini": 30.9,
        "timezones": ["UTC+04:00"],
        "borders": ["AZE", "GEO", "IRN", "TUR"],
        "nativeName": "Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶",
        "numericCode": "051",
        "currencies": [{ "code": "AMD", "name": "Armenian dram", "symbol": "Ö" }],
        "languages": [
            {
                "iso639_1": "hy",
                "iso639_2": "hye",
                "name": "Armenian",
                "nativeName": "Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"
            }
        ],
        "translations": {
            "br": "ArmÃªnia",
            "pt": "ArmÃ©nia",
            "nl": "ArmeniÃ«",
            "hr": "Armenija",
            "fa": "Ø§Ø±Ù…Ù†Ø³ØªØ§Ù†",
            "de": "Armenien",
            "es": "Armenia",
            "fr": "ArmÃ©nie",
            "ja": "ã‚¢ãƒ«ãƒ¡ãƒ‹ã‚¢",
            "it": "Armenia",
            "hu": "Ã–rmÃ©nyorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/arm.svg",
            "https://restcountries.com/data/png/arm.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": ["EAEU"]
            }
        ],
        "cioc": "ARM",
        "independent": true
    },
    {
        "name": "Aruba",
        "topLevelDomain": [".aw"],
        "alpha2Code": "AW",
        "alpha3Code": "ABW",
        "callingCodes": ["297"],
        "capital": "Oranjestad",
        "altSpellings": ["AW"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 107394,
        "latlng": [12.5, -69.96666666],
        "demonym": "Aruban",
        "area": 180.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Aruba",
        "numericCode": "533",
        "currencies": [{ "code": "AWG", "name": "Aruban florin", "symbol": "Æ’" }],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "pa",
                "iso639_2": "pan",
                "name": "(Eastern) Punjabi",
                "nativeName": "à¨ªà©°à¨œà¨¾à¨¬à©€"
            }
        ],
        "translations": {
            "br": "Aruba",
            "pt": "Aruba",
            "nl": "Aruba",
            "hr": "Aruba",
            "fa": "Ø¢Ø±ÙˆØ¨Ø§",
            "de": "Aruba",
            "es": "Aruba",
            "fr": "Aruba",
            "ja": "ã‚¢ãƒ«ãƒ",
            "it": "Aruba",
            "hu": "Aruba"
        },
        "flags": [
            "https://restcountries.com/data/abw.svg",
            "https://restcountries.com/data/png/abw.png"
        ],
        "cioc": "ARU",
        "independent": true
    },
    {
        "name": "Australia",
        "topLevelDomain": [".au"],
        "alpha2Code": "AU",
        "alpha3Code": "AUS",
        "callingCodes": ["61"],
        "capital": "Canberra",
        "altSpellings": ["AU"],
        "region": "Australia and New Zealand",
        "continent": "Oceania",
        "population": 24117360,
        "latlng": [-27.0, 133.0],
        "demonym": "Australian",
        "area": 7692024.0,
        "gini": 30.5,
        "timezones": [
            "UTC+05:00",
            "UTC+06:30",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+09:30",
            "UTC+10:00",
            "UTC+10:30",
            "UTC+11:30"
        ],
        "nativeName": "Australia",
        "numericCode": "036",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "AustrÃ¡lia",
            "pt": "AustrÃ¡lia",
            "nl": "AustraliÃ«",
            "hr": "Australija",
            "fa": "Ø§Ø³ØªØ±Ø§Ù„ÛŒØ§",
            "de": "Australien",
            "es": "Australia",
            "fr": "Australie",
            "ja": "ã‚ªãƒ¼ã‚¹ãƒˆãƒ©ãƒªã‚¢",
            "it": "Australia",
            "hu": "AusztrÃ¡lia"
        },
        "flags": [
            "https://restcountries.com/data/aus.svg",
            "https://restcountries.com/data/png/aus.png"
        ],
        "cioc": "AUS",
        "independent": true
    },
    {
        "name": "Austria",
        "topLevelDomain": [".at"],
        "alpha2Code": "AT",
        "alpha3Code": "AUT",
        "callingCodes": ["43"],
        "capital": "Vienna",
        "altSpellings": ["AT", "Ã–sterreich", "Osterreich", "Oesterreich"],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 8725931,
        "latlng": [47.33333333, 13.33333333],
        "demonym": "Austrian",
        "area": 83871.0,
        "gini": 26.0,
        "timezones": ["UTC+01:00"],
        "borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
        "nativeName": "Ã–sterreich",
        "numericCode": "040",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "translations": {
            "br": "Ãustria",
            "pt": "Ãustria",
            "nl": "Oostenrijk",
            "hr": "Austrija",
            "fa": "Ø§ØªØ±ÛŒØ´",
            "de": "Ã–sterreich",
            "es": "Austria",
            "fr": "Autriche",
            "ja": "ã‚ªãƒ¼ã‚¹ãƒˆãƒªã‚¢",
            "it": "Austria",
            "hu": "Ausztria"
        },
        "flags": [
            "https://restcountries.com/data/aut.svg",
            "https://restcountries.com/data/png/aut.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "AUT",
        "independent": true
    },
    {
        "name": "Azerbaijan",
        "topLevelDomain": [".az"],
        "alpha2Code": "AZ",
        "alpha3Code": "AZE",
        "callingCodes": ["994"],
        "capital": "Baku",
        "altSpellings": [
            "AZ",
            "Republic of Azerbaijan",
            "AzÉ™rbaycan RespublikasÄ±"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 9730500,
        "latlng": [40.5, 47.5],
        "area": 86600.0,
        "gini": 33.7,
        "timezones": ["UTC+04:00"],
        "borders": ["ARM", "GEO", "IRN", "RUS", "TUR"],
        "nativeName": "AzÉ™rbaycan",
        "numericCode": "031",
        "currencies": [
            { "code": "AZN", "name": "Azerbaijani manat", "symbol": "â‚¼" }
        ],
        "languages": [
            {
                "iso639_1": "az",
                "iso639_2": "aze",
                "name": "Azerbaijani",
                "nativeName": "azÉ™rbaycan dili"
            }
        ],
        "translations": {
            "br": "AzerbaijÃ£o",
            "pt": "AzerbaijÃ£o",
            "nl": "Azerbeidzjan",
            "hr": "AzerbajdÅ¾an",
            "fa": "Ø¢Ø°Ø±Ø¨Ø§ÛŒØ¬Ø§Ù†",
            "de": "Aserbaidschan",
            "es": "AzerbaiyÃ¡n",
            "fr": "AzerbaÃ¯djan",
            "ja": "ã‚¢ã‚¼ãƒ«ãƒã‚¤ã‚¸ãƒ£ãƒ³",
            "it": "Azerbaijan",
            "hu": "AzerbajdzsÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/aze.svg",
            "https://restcountries.com/data/png/aze.png"
        ],
        "cioc": "AZE",
        "independent": false
    },
    {
        "name": "Bahamas",
        "topLevelDomain": [".bs"],
        "alpha2Code": "BS",
        "alpha3Code": "BHS",
        "callingCodes": ["1"],
        "capital": "Nassau",
        "altSpellings": ["BS", "Commonwealth of the Bahamas"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 378040,
        "latlng": [24.25, -76.0],
        "demonym": "Bahamian",
        "area": 13943.0,
        "timezones": ["UTC-05:00"],
        "nativeName": "Bahamas",
        "numericCode": "044",
        "currencies": [{ "code": "BSD", "name": "Bahamian dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Bahamas",
            "pt": "Baamas",
            "nl": "Bahamaâ€™s",
            "hr": "Bahami",
            "fa": "Ø¨Ø§Ù‡Ø§Ù…Ø§",
            "de": "Bahamas",
            "es": "Bahamas",
            "fr": "Bahamas",
            "ja": "ãƒãƒãƒž",
            "it": "Bahamas",
            "hu": "Bahama-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/bhs.svg",
            "https://restcountries.com/data/png/bhs.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "BAH",
        "independent": true
    },
    {
        "name": "Bahrain",
        "topLevelDomain": [".bh"],
        "alpha2Code": "BH",
        "alpha3Code": "BHR",
        "callingCodes": ["973"],
        "capital": "Manama",
        "altSpellings": ["BH", "Kingdom of Bahrain", "Mamlakat al-Baá¸¥rayn"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 1404900,
        "latlng": [26.0, 50.55],
        "demonym": "Bahraini",
        "area": 765.0,
        "timezones": ["UTC+03:00"],
        "nativeName": "â€Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†",
        "numericCode": "048",
        "currencies": [
            { "code": "BHD", "name": "Bahraini dinar", "symbol": ".Ø¯.Ø¨" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Bahrein",
            "pt": "BarÃ©m",
            "nl": "Bahrein",
            "hr": "Bahrein",
            "fa": "Ø¨Ø­Ø±ÛŒÙ†",
            "de": "Bahrain",
            "es": "Bahrein",
            "fr": "BahreÃ¯n",
            "ja": "ãƒãƒ¼ãƒ¬ãƒ¼ãƒ³",
            "it": "Bahrein",
            "hu": "Bahrein"
        },
        "flags": [
            "https://restcountries.com/data/bhr.svg",
            "https://restcountries.com/data/png/bhr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "BRN",
        "independent": true
    },
    {
        "name": "Bangladesh",
        "topLevelDomain": [".bd"],
        "alpha2Code": "BD",
        "alpha3Code": "BGD",
        "callingCodes": ["880"],
        "capital": "Dhaka",
        "altSpellings": [
            "BD",
            "People's Republic of Bangladesh",
            "GÃ´nÃ´prÃ´jatÃ´ntri Bangladesh"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 161006790,
        "latlng": [24.0, 90.0],
        "demonym": "Bangladeshi",
        "area": 147570.0,
        "gini": 32.1,
        "timezones": ["UTC+06:00"],
        "borders": ["MMR", "IND"],
        "nativeName": "Bangladesh",
        "numericCode": "050",
        "currencies": [
            { "code": "BDT", "name": "Bangladeshi taka", "symbol": "à§³" }
        ],
        "languages": [
            {
                "iso639_1": "bn",
                "iso639_2": "ben",
                "name": "Bengali",
                "nativeName": "à¦¬à¦¾à¦‚à¦²à¦¾"
            }
        ],
        "translations": {
            "br": "Bangladesh",
            "pt": "Bangladeche",
            "nl": "Bangladesh",
            "hr": "BangladeÅ¡",
            "fa": "Ø¨Ù†Ú¯Ù„Ø§Ø¯Ø´",
            "de": "Bangladesch",
            "es": "Bangladesh",
            "fr": "Bangladesh",
            "ja": "ãƒãƒ³ã‚°ãƒ©ãƒ‡ã‚·ãƒ¥",
            "it": "Bangladesh",
            "hu": "Banglades"
        },
        "flags": [
            "https://restcountries.com/data/bgd.svg",
            "https://restcountries.com/data/png/bgd.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "BAN",
        "independent": true
    },
    {
        "name": "Barbados",
        "topLevelDomain": [".bb"],
        "alpha2Code": "BB",
        "alpha3Code": "BRB",
        "callingCodes": ["1"],
        "capital": "Bridgetown",
        "altSpellings": ["BB"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 285000,
        "latlng": [13.16666666, -59.53333333],
        "demonym": "Barbadian",
        "area": 430.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Barbados",
        "numericCode": "052",
        "currencies": [
            { "code": "BBD", "name": "Barbadian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Barbados",
            "pt": "Barbados",
            "nl": "Barbados",
            "hr": "Barbados",
            "fa": "Ø¨Ø§Ø±Ø¨Ø§Ø¯ÙˆØ³",
            "de": "Barbados",
            "es": "Barbados",
            "fr": "Barbade",
            "ja": "ãƒãƒ«ãƒãƒ‰ã‚¹",
            "it": "Barbados",
            "hu": "Barbados"
        },
        "flags": [
            "https://restcountries.com/data/brb.svg",
            "https://restcountries.com/data/png/brb.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "BAR",
        "independent": true
    },
    {
        "name": "Belarus",
        "topLevelDomain": [".by"],
        "alpha2Code": "BY",
        "alpha3Code": "BLR",
        "callingCodes": ["375"],
        "capital": "Minsk",
        "altSpellings": [
            "BY",
            "BielaruÅ›",
            "Republic of Belarus",
            "Ð‘ÐµÐ»Ð¾Ñ€ÑƒÑÑÐ¸Ñ",
            "Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ",
            "Belorussiya",
            "Respublika Belarusâ€™"
        ],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 9498700,
        "latlng": [53.0, 28.0],
        "demonym": "Belarusian",
        "area": 207600.0,
        "gini": 26.5,
        "timezones": ["UTC+03:00"],
        "borders": ["LVA", "LTU", "POL", "RUS", "UKR"],
        "nativeName": "Ð‘ÐµÐ»Ð°Ñ€ÑƒÌÑÑŒ",
        "numericCode": "112",
        "currencies": [
            { "code": "BYN", "name": "New Belarusian ruble", "symbol": "Br" },
            { "code": "BYR", "name": "Old Belarusian ruble", "symbol": "Br" }
        ],
        "languages": [
            {
                "iso639_1": "be",
                "iso639_2": "bel",
                "name": "Belarusian",
                "nativeName": "Ð±ÐµÐ»Ð°Ñ€ÑƒÑÐºÐ°Ñ Ð¼Ð¾Ð²Ð°"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "BielorrÃºssia",
            "pt": "BielorrÃºssia",
            "nl": "Wit-Rusland",
            "hr": "Bjelorusija",
            "fa": "Ø¨Ù„Ø§Ø±ÙˆØ³",
            "de": "WeiÃŸrussland",
            "es": "Bielorrusia",
            "fr": "BiÃ©lorussie",
            "ja": "ãƒ™ãƒ©ãƒ«ãƒ¼ã‚·",
            "it": "Bielorussia",
            "hu": "FehÃ©roroszorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/blr.svg",
            "https://restcountries.com/data/png/blr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": ["EAEU"]
            }
        ],
        "cioc": "BLR",
        "independent": true
    },
    {
        "name": "Belgium",
        "topLevelDomain": [".be"],
        "alpha2Code": "BE",
        "alpha3Code": "BEL",
        "callingCodes": ["32"],
        "capital": "Brussels",
        "altSpellings": [
            "BE",
            "BelgiÃ«",
            "Belgie",
            "Belgien",
            "Belgique",
            "Kingdom of Belgium",
            "Koninkrijk BelgiÃ«",
            "Royaume de Belgique",
            "KÃ¶nigreich Belgien"
        ],
        "region": "Western Europe",
        "continent": "Europe",
        "population": 11319511,
        "latlng": [50.83333333, 4.0],
        "demonym": "Belgian",
        "area": 30528.0,
        "gini": 33.0,
        "timezones": ["UTC+01:00"],
        "borders": ["FRA", "DEU", "LUX", "NLD"],
        "nativeName": "BelgiÃ«",
        "numericCode": "056",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "translations": {
            "br": "BÃ©lgica",
            "pt": "BÃ©lgica",
            "nl": "BelgiÃ«",
            "hr": "Belgija",
            "fa": "Ø¨Ù„Ú˜ÛŒÚ©",
            "de": "Belgien",
            "es": "BÃ©lgica",
            "fr": "Belgique",
            "ja": "ãƒ™ãƒ«ã‚®ãƒ¼",
            "it": "Belgio",
            "hu": "Belgium"
        },
        "flags": [
            "https://restcountries.com/data/bel.svg",
            "https://restcountries.com/data/png/bel.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "BEL",
        "independent": true
    },
    {
        "name": "Belize",
        "topLevelDomain": [".bz"],
        "alpha2Code": "BZ",
        "alpha3Code": "BLZ",
        "callingCodes": ["501"],
        "capital": "Belmopan",
        "altSpellings": ["BZ"],
        "region": "Central America",
        "continent": "Americas",
        "population": 370300,
        "latlng": [17.25, -88.75],
        "demonym": "Belizean",
        "area": 22966.0,
        "gini": 53.1,
        "timezones": ["UTC-06:00"],
        "borders": ["GTM", "MEX"],
        "nativeName": "Belize",
        "numericCode": "084",
        "currencies": [{ "code": "BZD", "name": "Belize dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Belize",
            "pt": "Belize",
            "nl": "Belize",
            "hr": "Belize",
            "fa": "Ø¨Ù„ÛŒØ²",
            "de": "Belize",
            "es": "Belice",
            "fr": "Belize",
            "ja": "ãƒ™ãƒªãƒ¼ã‚º",
            "it": "Belize",
            "hu": "Belize"
        },
        "flags": [
            "https://restcountries.com/data/blz.svg",
            "https://restcountries.com/data/png/blz.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "BIZ",
        "independent": true
    },
    {
        "name": "Benin",
        "topLevelDomain": [".bj"],
        "alpha2Code": "BJ",
        "alpha3Code": "BEN",
        "callingCodes": ["229"],
        "capital": "Porto-Novo",
        "altSpellings": ["BJ", "Republic of Benin", "RÃ©publique du BÃ©nin"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 10653654,
        "latlng": [9.5, 2.25],
        "demonym": "Beninese",
        "area": 112622.0,
        "gini": 38.6,
        "timezones": ["UTC+01:00"],
        "borders": ["BFA", "NER", "NGA", "TGO"],
        "nativeName": "BÃ©nin",
        "numericCode": "204",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Benin",
            "pt": "Benim",
            "nl": "Benin",
            "hr": "Benin",
            "fa": "Ø¨Ù†ÛŒÙ†",
            "de": "Benin",
            "es": "BenÃ­n",
            "fr": "BÃ©nin",
            "ja": "ãƒ™ãƒŠãƒ³",
            "it": "Benin"
        },
        "flags": [
            "https://restcountries.com/data/ben.svg",
            "https://restcountries.com/data/png/ben.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "BEN",
        "independent": true
    },
    {
        "name": "Bermuda",
        "topLevelDomain": [".bm"],
        "alpha2Code": "BM",
        "alpha3Code": "BMU",
        "callingCodes": ["1"],
        "capital": "Hamilton",
        "altSpellings": [
            "BM",
            "The Islands of Bermuda",
            "The Bermudas",
            "Somers Isles"
        ],
        "region": "Northern America",
        "continent": "Americas",
        "population": 61954,
        "latlng": [32.33333333, -64.75],
        "demonym": "Bermudian",
        "area": 54.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Bermuda",
        "numericCode": "060",
        "currencies": [
            { "code": "BMD", "name": "Bermudian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Bermudas",
            "pt": "Bermudas",
            "nl": "Bermuda",
            "hr": "Bermudi",
            "fa": "Ø¨Ø±Ù…ÙˆØ¯Ø§",
            "de": "Bermuda",
            "es": "Bermudas",
            "fr": "Bermudes",
            "ja": "ãƒãƒŸãƒ¥ãƒ¼ãƒ€",
            "it": "Bermuda",
            "hu": "Bermuda"
        },
        "flags": [
            "https://restcountries.com/data/bmu.svg",
            "https://restcountries.com/data/png/bmu.png"
        ],
        "cioc": "BER",
        "independent": false
    },
    {
        "name": "Bhutan",
        "topLevelDomain": [".bt"],
        "alpha2Code": "BT",
        "alpha3Code": "BTN",
        "callingCodes": ["975"],
        "capital": "Thimphu",
        "altSpellings": ["BT", "Kingdom of Bhutan"],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 775620,
        "latlng": [27.5, 90.5],
        "demonym": "Bhutanese",
        "area": 38394.0,
        "gini": 38.1,
        "timezones": ["UTC+06:00"],
        "borders": ["CHN", "IND"],
        "nativeName": "Ê¼brug-yul",
        "numericCode": "064",
        "currencies": [
            { "code": "BTN", "name": "Bhutanese ngultrum", "symbol": "Nu." },
            { "code": "INR", "name": "Indian rupee", "symbol": "â‚¹" }
        ],
        "languages": [
            {
                "iso639_1": "dz",
                "iso639_2": "dzo",
                "name": "Dzongkha",
                "nativeName": "à½¢à¾«à½¼à½„à¼‹à½"
            }
        ],
        "translations": {
            "br": "ButÃ£o",
            "pt": "ButÃ£o",
            "nl": "Bhutan",
            "hr": "Butan",
            "fa": "Ø¨ÙˆØªØ§Ù†",
            "de": "Bhutan",
            "es": "ButÃ¡n",
            "fr": "Bhoutan",
            "ja": "ãƒ–ãƒ¼ã‚¿ãƒ³",
            "it": "Bhutan",
            "hu": "BhutÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/btn.svg",
            "https://restcountries.com/data/png/btn.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "BHU",
        "independent": true
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "topLevelDomain": [".bo"],
        "alpha2Code": "BO",
        "alpha3Code": "BOL",
        "callingCodes": ["591"],
        "capital": "Sucre",
        "altSpellings": [
            "BO",
            "Buliwya",
            "Wuliwya",
            "Plurinational State of Bolivia",
            "Estado Plurinacional de Bolivia",
            "Buliwya Mamallaqta",
            "Wuliwya Suyu",
            "TetÃ£ VolÃ­via"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 10985059,
        "latlng": [-17.0, -65.0],
        "demonym": "Bolivian",
        "area": 1098581.0,
        "gini": 56.3,
        "timezones": ["UTC-04:00"],
        "borders": ["ARG", "BRA", "CHL", "PRY", "PER"],
        "nativeName": "Bolivia",
        "numericCode": "068",
        "currencies": [
            { "code": "BOB", "name": "Bolivian boliviano", "symbol": "Bs." }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            },
            {
                "iso639_1": "ay",
                "iso639_2": "aym",
                "name": "Aymara",
                "nativeName": "aymar aru"
            },
            {
                "iso639_1": "qu",
                "iso639_2": "que",
                "name": "Quechua",
                "nativeName": "Runa Simi"
            }
        ],
        "translations": {
            "br": "BolÃ­via",
            "pt": "BolÃ­via",
            "nl": "Bolivia",
            "hr": "Bolivija",
            "fa": "Ø¨ÙˆÙ„ÛŒÙˆÛŒ",
            "de": "Bolivien",
            "es": "Bolivia",
            "fr": "Bolivie",
            "ja": "ãƒœãƒªãƒ“ã‚¢å¤šæ°‘æ—å›½",
            "it": "Bolivia",
            "hu": "BolÃ­via"
        },
        "flags": [
            "https://restcountries.com/data/bol.svg",
            "https://restcountries.com/data/png/bol.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "BOL",
        "independent": true
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "topLevelDomain": [".an", ".nl"],
        "alpha2Code": "BQ",
        "alpha3Code": "BES",
        "callingCodes": ["599"],
        "capital": "Kralendijk",
        "altSpellings": ["BQ", "Boneiru"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 17408,
        "latlng": [12.15, -68.266667],
        "demonym": "Dutch",
        "area": 294.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Bonaire",
        "numericCode": "535",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "translations": {
            "br": "Bonaire",
            "pt": "Bonaire",
            "fa": "Ø¨ÙˆÙ†ÛŒØ±",
            "de": "Bonaire, Sint Eustatius und Saba",
            "fr": "Bonaire, Saint-Eustache et Saba",
            "it": "Bonaire, Saint-Eustache e Saba",
            "hu": "Bonaire"
        },
        "flags": [
            "https://restcountries.com/data/bes.svg",
            "https://restcountries.com/data/png/bes.png"
        ],
        "independent": true
    },
    {
        "name": "Bosnia and Herzegovina",
        "topLevelDomain": [".ba"],
        "alpha2Code": "BA",
        "alpha3Code": "BIH",
        "callingCodes": ["387"],
        "capital": "Sarajevo",
        "altSpellings": [
            "BA",
            "Bosnia-Herzegovina",
            "Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 3531159,
        "latlng": [44.0, 18.0],
        "demonym": "Bosnian, Herzegovinian",
        "area": 51209.0,
        "gini": 36.2,
        "timezones": ["UTC+01:00"],
        "borders": ["HRV", "MNE", "SRB"],
        "nativeName": "Bosna i Hercegovina",
        "numericCode": "070",
        "currencies": [
            {
                "code": "BAM",
                "name": "Bosnia and Herzegovina convertible mark",
                "symbol": "KM"
            }
        ],
        "languages": [
            {
                "iso639_1": "bs",
                "iso639_2": "bos",
                "name": "Bosnian",
                "nativeName": "bosanski jezik"
            },
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            },
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
            }
        ],
        "translations": {
            "br": "BÃ³snia e Herzegovina",
            "pt": "BÃ³snia e Herzegovina",
            "nl": "BosniÃ« en Herzegovina",
            "hr": "Bosna i Hercegovina",
            "fa": "Ø¨ÙˆØ³Ù†ÛŒ Ùˆ Ù‡Ø±Ø²Ú¯ÙˆÛŒÙ†",
            "de": "Bosnien und Herzegowina",
            "es": "Bosnia y Herzegovina",
            "fr": "Bosnie-HerzÃ©govine",
            "ja": "ãƒœã‚¹ãƒ‹ã‚¢ãƒ»ãƒ˜ãƒ«ãƒ„ã‚§ã‚´ãƒ“ãƒŠ",
            "it": "Bosnia ed Erzegovina",
            "hu": "Bosznia-Hercegovina"
        },
        "flags": [
            "https://restcountries.com/data/bih.svg",
            "https://restcountries.com/data/png/bih.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "BIH",
        "independent": true
    },
    {
        "name": "Botswana",
        "topLevelDomain": [".bw"],
        "alpha2Code": "BW",
        "alpha3Code": "BWA",
        "callingCodes": ["267"],
        "capital": "Gaborone",
        "altSpellings": ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 2141206,
        "latlng": [-22.0, 24.0],
        "demonym": "Motswana",
        "area": 582000.0,
        "gini": 61.0,
        "timezones": ["UTC+02:00"],
        "borders": ["NAM", "ZAF", "ZMB", "ZWE"],
        "nativeName": "Botswana",
        "numericCode": "072",
        "currencies": [{ "code": "BWP", "name": "Botswana pula", "symbol": "P" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "tn",
                "iso639_2": "tsn",
                "name": "Tswana",
                "nativeName": "Setswana"
            }
        ],
        "translations": {
            "br": "Botsuana",
            "pt": "Botsuana",
            "nl": "Botswana",
            "hr": "Bocvana",
            "fa": "Ø¨ÙˆØªØ³ÙˆØ§Ù†Ø§",
            "de": "Botswana",
            "es": "Botswana",
            "fr": "Botswana",
            "ja": "ãƒœãƒ„ãƒ¯ãƒŠ",
            "it": "Botswana",
            "hu": "Botswana"
        },
        "flags": [
            "https://restcountries.com/data/bwa.svg",
            "https://restcountries.com/data/png/bwa.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "BOT",
        "independent": true
    },
    {
        "name": "Bouvet Island",
        "topLevelDomain": [".bv"],
        "alpha2Code": "BV",
        "alpha3Code": "BVT",
        "callingCodes": ["47"],
        "altSpellings": ["BV", "BouvetÃ¸ya", "Bouvet-Ã¸ya"],
        "region": "South Antarctic Ocean",
        "continent": "Antarctic Ocean",
        "population": 0,
        "latlng": [-54.43333333, 3.4],
        "area": 49.0,
        "timezones": ["UTC+01:00"],
        "nativeName": "BouvetÃ¸ya",
        "numericCode": "074",
        "currencies": [
            { "code": "NOK", "name": "Norwegian krone", "symbol": "kr" }
        ],
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            },
            {
                "iso639_1": "nb",
                "iso639_2": "nob",
                "name": "Norwegian BokmÃ¥l",
                "nativeName": "Norsk bokmÃ¥l"
            },
            {
                "iso639_1": "nn",
                "iso639_2": "nno",
                "name": "Norwegian Nynorsk",
                "nativeName": "Norsk nynorsk"
            }
        ],
        "translations": {
            "br": "Ilha Bouvet",
            "pt": "Ilha Bouvet",
            "nl": "Bouveteiland",
            "hr": "Otok Bouvet",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ø¨ÙˆÙˆÙ‡",
            "de": "Bouvetinsel",
            "es": "Isla Bouvet",
            "fr": "ÃŽle Bouvet",
            "ja": "ãƒ–ãƒ¼ãƒ™å³¶",
            "it": "Isola Bouvet",
            "hu": "Bouvet-sziget"
        },
        "flags": [
            "https://restcountries.com/data/bvt.svg",
            "https://restcountries.com/data/png/bvt.png"
        ],
        "independent": false
    },
    {
        "name": "Brazil",
        "topLevelDomain": [".br"],
        "alpha2Code": "BR",
        "alpha3Code": "BRA",
        "callingCodes": ["55"],
        "capital": "BrasÃ­lia",
        "altSpellings": [
            "BR",
            "Brasil",
            "Federative Republic of Brazil",
            "RepÃºblica Federativa do Brasil"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 206135893,
        "latlng": [-10.0, -55.0],
        "demonym": "Brazilian",
        "area": 8515767.0,
        "gini": 54.7,
        "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
        "borders": [
            "ARG",
            "BOL",
            "COL",
            "FRA",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN"
        ],
        "nativeName": "Brasil",
        "numericCode": "076",
        "currencies": [{ "code": "BRL", "name": "Brazilian real", "symbol": "R" }],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Brasil",
            "pt": "Brasil",
            "nl": "BraziliÃ«",
            "hr": "Brazil",
            "fa": "Ø¨Ø±Ø²ÛŒÙ„",
            "de": "Brasilien",
            "es": "Brasil",
            "fr": "BrÃ©sil",
            "ja": "ãƒ–ãƒ©ã‚¸ãƒ«",
            "it": "Brasile",
            "hu": "BrazÃ­lia"
        },
        "flags": [
            "https://restcountries.com/data/bra.svg",
            "https://restcountries.com/data/png/bra.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "BRA",
        "independent": true
    },
    {
        "name": "British Indian Ocean Territory",
        "topLevelDomain": [".io"],
        "alpha2Code": "IO",
        "alpha3Code": "IOT",
        "callingCodes": ["246"],
        "capital": "Diego Garcia",
        "altSpellings": ["IO"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 3000,
        "latlng": [-6.0, 71.5],
        "demonym": "Indian",
        "area": 60.0,
        "timezones": ["UTC+06:00"],
        "nativeName": "British Indian Ocean Territory",
        "numericCode": "086",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "TerritÃ³rio BritÃ¢nico do Oceano Ã­Ãdico",
            "pt": "TerritÃ³rio BritÃ¢nico do Oceano Ãndico",
            "nl": "Britse Gebieden in de Indische Oceaan",
            "hr": "Britanski Indijskooceanski teritorij",
            "fa": "Ù‚Ù„Ù…Ø±Ùˆ Ø¨Ø±ÛŒØªØ§Ù†ÛŒØ§ Ø¯Ø± Ø§Ù‚ÛŒØ§Ù†ÙˆØ³ Ù‡Ù†Ø¯",
            "de": "Britisches Territorium im Indischen Ozean",
            "es": "Territorio BritÃ¡nico del OcÃ©ano Ãndico",
            "fr": "Territoire britannique de l'ocÃ©an Indien",
            "ja": "ã‚¤ã‚®ãƒªã‚¹é ˜ã‚¤ãƒ³ãƒ‰æ´‹åœ°åŸŸ",
            "it": "Territorio britannico dell'oceano indiano",
            "hu": "Brit Indiai-Ã³ceÃ¡ni TerÃ¼let"
        },
        "flags": [
            "https://restcountries.com/data/iot.svg",
            "https://restcountries.com/data/png/iot.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": true
    },
    {
        "name": "United States Minor Outlying Islands",
        "topLevelDomain": [".us"],
        "alpha2Code": "UM",
        "alpha3Code": "UMI",
        "callingCodes": ["1"],
        "altSpellings": ["UM"],
        "region": "Northern America",
        "continent": "Americas",
        "population": 300,
        "demonym": "American",
        "timezones": ["UTC-11:00", "UTC-10:00", "UTC+12:00"],
        "nativeName": "United States Minor Outlying Islands",
        "numericCode": "581",
        "currencies": [
            { "code": "USD", "name": "United States Dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Menores Distantes dos Estados Unidos",
            "pt": "Ilhas Menores Distantes dos Estados Unidos",
            "nl": "Kleine afgelegen eilanden van de Verenigde Staten",
            "hr": "Mali udaljeni otoci SAD-a",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ú©ÙˆÚ†Ú© Ø­Ø§Ø´ÛŒÙ‡â€ŒØ§ÛŒ Ø§ÛŒØ§Ù„Ø§Øª Ù…ØªØ­Ø¯Ù‡ Ø¢Ù…Ø±ÛŒÚ©Ø§",
            "de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
            "es": "Islas Ultramarinas Menores de Estados Unidos",
            "fr": "ÃŽles mineures Ã©loignÃ©es des Ã‰tats-Unis",
            "ja": "åˆè¡†å›½é ˜æœ‰å°é›¢å³¶",
            "it": "Isole minori esterne degli Stati Uniti d'America",
            "hu": "Amerikai EgyesÃ¼lt Ãllamok lakatlan kÃ¼lbirtokai"
        },
        "flags": [
            "https://restcountries.com/data/umi.svg",
            "https://restcountries.com/data/png/umi.png"
        ],
        "independent": false
    },
    {
        "name": "Virgin Islands (British)",
        "topLevelDomain": [".vg"],
        "alpha2Code": "VG",
        "alpha3Code": "VGB",
        "callingCodes": ["1"],
        "capital": "Road Town",
        "altSpellings": ["VG"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 28514,
        "latlng": [18.431383, -64.62305],
        "demonym": "Virgin Islander",
        "area": 151.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "British Virgin Islands",
        "numericCode": "092",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Virgens BritÃ¢nicas",
            "pt": "Ilhas Virgens BritÃ¢nicas",
            "nl": "Britse Maagdeneilanden",
            "hr": "Britanski DjeviÄanski Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± ÙˆÛŒØ±Ø¬ÛŒÙ† Ø¨Ø±ÛŒØªØ§Ù†ÛŒØ§",
            "de": "Britische Jungferninseln",
            "es": "Islas VÃ­rgenes del Reino Unido",
            "fr": "ÃŽles Vierges britanniques",
            "ja": "ã‚¤ã‚®ãƒªã‚¹é ˜ãƒ´ã‚¡ãƒ¼ã‚¸ãƒ³è«¸å³¶",
            "it": "Isole Vergini Britanniche",
            "hu": "Brit Virgin-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/vgb.svg",
            "https://restcountries.com/data/png/vgb.png"
        ],
        "cioc": "IVB",
        "independent": false
    },
    {
        "name": "Virgin Islands (U.S.)",
        "topLevelDomain": [".vi"],
        "alpha2Code": "VI",
        "alpha3Code": "VIR",
        "callingCodes": ["1 340"],
        "capital": "Charlotte Amalie",
        "altSpellings": [
            "VI",
            "USVI",
            "American Virgin Islands",
            "U.S. Virgin Islands"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 114743,
        "latlng": [18.34, -64.93],
        "demonym": "Virgin Islander",
        "area": 346.36,
        "timezones": ["UTC-04:00"],
        "nativeName": "Virgin Islands of the United States",
        "numericCode": "850",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Virgens Americanas",
            "pt": "Ilhas Virgens Americanas",
            "nl": "Verenigde Staten Maagdeneilanden",
            "fa": "Ø¬Ø²Ø§ÛŒØ± ÙˆÛŒØ±Ø¬ÛŒÙ† Ø¢Ù…Ø±ÛŒÚ©Ø§",
            "de": "Amerikanische Jungferninseln",
            "es": "Islas VÃ­rgenes de los Estados Unidos",
            "fr": "ÃŽles Vierges des Ã‰tats-Unis",
            "ja": "ã‚¢ãƒ¡ãƒªã‚«é ˜ãƒ´ã‚¡ãƒ¼ã‚¸ãƒ³è«¸å³¶",
            "it": "Isole Vergini americane",
            "hu": "Amerikai Virgin-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/vir.svg",
            "https://restcountries.com/data/png/vir.png"
        ],
        "cioc": "ISV",
        "independent": false
    },
    {
        "name": "Brunei Darussalam",
        "topLevelDomain": [".bn"],
        "alpha2Code": "BN",
        "alpha3Code": "BRN",
        "callingCodes": ["673"],
        "capital": "Bandar Seri Begawan",
        "altSpellings": ["BN", "Nation of Brunei", " the Abode of Peace"],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 411900,
        "latlng": [4.5, 114.66666666],
        "demonym": "Bruneian",
        "area": 5765.0,
        "timezones": ["UTC+08:00"],
        "borders": ["MYS"],
        "nativeName": "Negara Brunei Darussalam",
        "numericCode": "096",
        "currencies": [
            { "code": "BND", "name": "Brunei dollar", "symbol": "" },
            { "code": "SGD", "name": "Singapore dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "ms",
                "iso639_2": "msa",
                "name": "Malay",
                "nativeName": "bahasa Melayu"
            }
        ],
        "translations": {
            "br": "Brunei",
            "pt": "Brunei",
            "nl": "Brunei",
            "hr": "Brunej",
            "fa": "Ø¨Ø±ÙˆÙ†Ø¦ÛŒ",
            "de": "Brunei",
            "es": "Brunei",
            "fr": "Brunei",
            "ja": "ãƒ–ãƒ«ãƒã‚¤ãƒ»ãƒ€ãƒ«ã‚µãƒ©ãƒ¼ãƒ ",
            "it": "Brunei",
            "hu": "Brunei"
        },
        "flags": [
            "https://restcountries.com/data/brn.svg",
            "https://restcountries.com/data/png/brn.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "BRU",
        "independent": true
    },
    {
        "name": "Bulgaria",
        "topLevelDomain": [".bg"],
        "alpha2Code": "BG",
        "alpha3Code": "BGR",
        "callingCodes": ["359"],
        "capital": "Sofia",
        "altSpellings": [
            "BG",
            "Republic of Bulgaria",
            "Ð ÐµÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ"
        ],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 7153784,
        "latlng": [43.0, 25.0],
        "demonym": "Bulgarian",
        "area": 110879.0,
        "gini": 28.2,
        "timezones": ["UTC+02:00"],
        "borders": ["GRC", "MKD", "ROU", "SRB", "TUR"],
        "nativeName": "Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ",
        "numericCode": "100",
        "currencies": [
            { "code": "BGN", "name": "Bulgarian lev", "symbol": "Ð»Ð²" }
        ],
        "languages": [
            {
                "iso639_1": "bg",
                "iso639_2": "bul",
                "name": "Bulgarian",
                "nativeName": "Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸ ÐµÐ·Ð¸Ðº"
            }
        ],
        "translations": {
            "br": "BulgÃ¡ria",
            "pt": "BulgÃ¡ria",
            "nl": "Bulgarije",
            "hr": "Bugarska",
            "fa": "Ø¨Ù„ØºØ§Ø±Ø³ØªØ§Ù†",
            "de": "Bulgarien",
            "es": "Bulgaria",
            "fr": "Bulgarie",
            "ja": "ãƒ–ãƒ«ã‚¬ãƒªã‚¢",
            "it": "Bulgaria",
            "hu": "BulgÃ¡ria"
        },
        "flags": [
            "https://restcountries.com/data/bgr.svg",
            "https://restcountries.com/data/png/bgr.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "BUL",
        "independent": true
    },
    {
        "name": "Burkina Faso",
        "topLevelDomain": [".bf"],
        "alpha2Code": "BF",
        "alpha3Code": "BFA",
        "callingCodes": ["226"],
        "capital": "Ouagadougou",
        "altSpellings": ["BF"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 19034397,
        "latlng": [13.0, -2.0],
        "demonym": "Burkinabe",
        "area": 272967.0,
        "gini": 39.8,
        "timezones": ["UTC"],
        "borders": ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
        "nativeName": "Burkina Faso",
        "numericCode": "854",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ff",
                "iso639_2": "ful",
                "name": "Fula",
                "nativeName": "Fulfulde"
            }
        ],
        "translations": {
            "br": "Burkina Faso",
            "pt": "Burquina Faso",
            "nl": "Burkina Faso",
            "hr": "Burkina Faso",
            "fa": "Ø¨ÙˆØ±Ú©ÛŒÙ†Ø§ÙØ§Ø³Ùˆ",
            "de": "Burkina Faso",
            "es": "Burkina Faso",
            "fr": "Burkina Faso",
            "ja": "ãƒ–ãƒ«ã‚­ãƒŠãƒ•ã‚¡ã‚½",
            "it": "Burkina Faso",
            "hu": "Burkina Faso"
        },
        "flags": [
            "https://restcountries.com/data/bfa.svg",
            "https://restcountries.com/data/png/bfa.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "BUR",
        "independent": true
    },
    {
        "name": "Burundi",
        "topLevelDomain": [".bi"],
        "alpha2Code": "BI",
        "alpha3Code": "BDI",
        "callingCodes": ["257"],
        "capital": "Bujumbura",
        "altSpellings": [
            "BI",
            "Republic of Burundi",
            "Republika y'Uburundi",
            "RÃ©publique du Burundi"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 10114505,
        "latlng": [-3.5, 30.0],
        "demonym": "Burundian",
        "area": 27834.0,
        "gini": 33.3,
        "timezones": ["UTC+02:00"],
        "borders": ["COD", "RWA", "TZA"],
        "nativeName": "Burundi",
        "numericCode": "108",
        "currencies": [
            { "code": "BIF", "name": "Burundian franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "rn",
                "iso639_2": "run",
                "name": "Kirundi",
                "nativeName": "Ikirundi"
            }
        ],
        "translations": {
            "br": "Burundi",
            "pt": "BurÃºndi",
            "nl": "Burundi",
            "hr": "Burundi",
            "fa": "Ø¨ÙˆØ±ÙˆÙ†Ø¯ÛŒ",
            "de": "Burundi",
            "es": "Burundi",
            "fr": "Burundi",
            "ja": "ãƒ–ãƒ«ãƒ³ã‚¸",
            "it": "Burundi",
            "hu": "Burundi"
        },
        "flags": [
            "https://restcountries.com/data/bdi.svg",
            "https://restcountries.com/data/png/bdi.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "BDI",
        "independent": true
    },
    {
        "name": "Cambodia",
        "topLevelDomain": [".kh"],
        "alpha2Code": "KH",
        "alpha3Code": "KHM",
        "callingCodes": ["855"],
        "capital": "Phnom Penh",
        "altSpellings": ["KH", "Kingdom of Cambodia"],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 15626444,
        "latlng": [13.0, 105.0],
        "demonym": "Cambodian",
        "area": 181035.0,
        "gini": 37.9,
        "timezones": ["UTC+07:00"],
        "borders": ["LAO", "THA", "VNM"],
        "nativeName": "KÃ¢mpÅ­chÃ©a",
        "numericCode": "116",
        "currencies": [
            { "code": "KHR", "name": "Cambodian riel", "symbol": "áŸ›" },
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "km",
                "iso639_2": "khm",
                "name": "Khmer",
                "nativeName": "ážáŸ’áž˜áŸ‚ážš"
            }
        ],
        "translations": {
            "br": "Camboja",
            "pt": "Camboja",
            "nl": "Cambodja",
            "hr": "KambodÅ¾a",
            "fa": "Ú©Ø§Ù…Ø¨ÙˆØ¬",
            "de": "Kambodscha",
            "es": "Camboya",
            "fr": "Cambodge",
            "ja": "ã‚«ãƒ³ãƒœã‚¸ã‚¢",
            "it": "Cambogia",
            "hu": "Kambodzsa"
        },
        "flags": [
            "https://restcountries.com/data/khm.svg",
            "https://restcountries.com/data/png/khm.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "CAM",
        "independent": true
    },
    {
        "name": "Cameroon",
        "topLevelDomain": [".cm"],
        "alpha2Code": "CM",
        "alpha3Code": "CMR",
        "callingCodes": ["237"],
        "capital": "YaoundÃ©",
        "altSpellings": ["CM", "Republic of Cameroon", "RÃ©publique du Cameroun"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 22709892,
        "latlng": [6.0, 12.0],
        "demonym": "Cameroonian",
        "area": 475442.0,
        "gini": 38.9,
        "timezones": ["UTC+01:00"],
        "borders": ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
        "nativeName": "Cameroon",
        "numericCode": "120",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "CamarÃµes",
            "pt": "CamarÃµes",
            "nl": "Kameroen",
            "hr": "Kamerun",
            "fa": "Ú©Ø§Ù…Ø±ÙˆÙ†",
            "de": "Kamerun",
            "es": "CamerÃºn",
            "fr": "Cameroun",
            "ja": "ã‚«ãƒ¡ãƒ«ãƒ¼ãƒ³",
            "it": "Camerun",
            "hu": "Kamerun"
        },
        "flags": [
            "https://restcountries.com/data/cmr.svg",
            "https://restcountries.com/data/png/cmr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CMR",
        "independent": true
    },
    {
        "name": "Canada",
        "topLevelDomain": [".ca"],
        "alpha2Code": "CA",
        "alpha3Code": "CAN",
        "callingCodes": ["1"],
        "capital": "Ottawa",
        "altSpellings": ["CA"],
        "region": "Northern America",
        "continent": "Americas",
        "population": 36155487,
        "latlng": [60.0, -95.0],
        "demonym": "Canadian",
        "area": 9984670.0,
        "gini": 32.6,
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:30"
        ],
        "borders": ["USA"],
        "nativeName": "Canada",
        "numericCode": "124",
        "currencies": [{ "code": "CAD", "name": "Canadian dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "CanadÃ¡",
            "pt": "CanadÃ¡",
            "nl": "Canada",
            "hr": "Kanada",
            "fa": "Ú©Ø§Ù†Ø§Ø¯Ø§",
            "de": "Kanada",
            "es": "CanadÃ¡",
            "fr": "Canada",
            "ja": "ã‚«ãƒŠãƒ€",
            "it": "Canada",
            "hu": "Kanada"
        },
        "flags": [
            "https://restcountries.com/data/can.svg",
            "https://restcountries.com/data/png/can.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de AmÃ©rica del Norte",
                    "Accord de Libre-Ã©change Nord-AmÃ©ricain"
                ]
            }
        ],
        "cioc": "CAN",
        "independent": true
    },
    {
        "name": "Cabo Verde",
        "topLevelDomain": [".cv"],
        "alpha2Code": "CV",
        "alpha3Code": "CPV",
        "callingCodes": ["238"],
        "capital": "Praia",
        "altSpellings": [
            "CV",
            "Republic of Cabo Verde",
            "RepÃºblica de Cabo Verde"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 531239,
        "latlng": [16.0, -24.0],
        "demonym": "Cape Verdian",
        "area": 4033.0,
        "gini": 50.5,
        "timezones": ["UTC-01:00"],
        "nativeName": "Cabo Verde",
        "numericCode": "132",
        "currencies": [
            { "code": "CVE", "name": "Cape Verdean escudo", "symbol": "Esc" }
        ],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Cabo Verde",
            "pt": "Cabo Verde",
            "nl": "KaapverdiÃ«",
            "hr": "Zelenortska Republika",
            "fa": "Ú©ÛŒÙ¾ ÙˆØ±Ø¯",
            "de": "Kap Verde",
            "es": "Cabo Verde",
            "fr": "Cap Vert",
            "ja": "ã‚«ãƒ¼ãƒœãƒ™ãƒ«ãƒ‡",
            "it": "Capo Verde",
            "hu": "ZÃ¶ld-foki KÃ¶ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/cpv.svg",
            "https://restcountries.com/data/png/cpv.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CPV",
        "independent": true
    },
    {
        "name": "Cayman Islands",
        "topLevelDomain": [".ky"],
        "alpha2Code": "KY",
        "alpha3Code": "CYM",
        "callingCodes": ["1"],
        "capital": "George Town",
        "altSpellings": ["KY"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 58238,
        "latlng": [19.5, -80.5],
        "demonym": "Caymanian",
        "area": 264.0,
        "timezones": ["UTC-05:00"],
        "nativeName": "Cayman Islands",
        "numericCode": "136",
        "currencies": [
            { "code": "KYD", "name": "Cayman Islands dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Cayman",
            "pt": "Ilhas CaimÃ£o",
            "nl": "Caymaneilanden",
            "hr": "Kajmanski otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ú©ÛŒÙ…Ù†",
            "de": "Kaimaninseln",
            "es": "Islas CaimÃ¡n",
            "fr": "ÃŽles CaÃ¯mans",
            "ja": "ã‚±ã‚¤ãƒžãƒ³è«¸å³¶",
            "it": "Isole Cayman",
            "hu": "KajmÃ¡n-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/cym.svg",
            "https://restcountries.com/data/png/cym.png"
        ],
        "cioc": "CAY",
        "independent": false
    },
    {
        "name": "Central African Republic",
        "topLevelDomain": [".cf"],
        "alpha2Code": "CF",
        "alpha3Code": "CAF",
        "callingCodes": ["236"],
        "capital": "Bangui",
        "altSpellings": [
            "CF",
            "Central African Republic",
            "RÃ©publique centrafricaine"
        ],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 4998000,
        "latlng": [7.0, 21.0],
        "demonym": "Central African",
        "area": 622984.0,
        "gini": 56.3,
        "timezones": ["UTC+01:00"],
        "borders": ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
        "nativeName": "KÃ¶dÃ¶rÃ¶sÃªse tÃ® BÃªafrÃ®ka",
        "numericCode": "140",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "sg",
                "iso639_2": "sag",
                "name": "Sango",
                "nativeName": "yÃ¢ngÃ¢ tÃ® sÃ¤ngÃ¶"
            }
        ],
        "translations": {
            "br": "RepÃºblica Centro-Africana",
            "pt": "RepÃºblica Centro-Africana",
            "nl": "Centraal-Afrikaanse Republiek",
            "hr": "SrednjoafriÄka Republika",
            "fa": "Ø¬Ù…Ù‡ÙˆØ±ÛŒ Ø¢ÙØ±ÛŒÙ‚Ø§ÛŒ Ù…Ø±Ú©Ø²ÛŒ",
            "de": "Zentralafrikanische Republik",
            "es": "RepÃºblica Centroafricana",
            "fr": "RÃ©publique centrafricaine",
            "ja": "ä¸­å¤®ã‚¢ãƒ•ãƒªã‚«å…±å’Œå›½",
            "it": "Repubblica Centrafricana",
            "hu": "KÃ¶zÃ©p-afrikai KÃ¶ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/caf.svg",
            "https://restcountries.com/data/png/caf.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CAF",
        "independent": true
    },
    {
        "name": "Chad",
        "topLevelDomain": [".td"],
        "alpha2Code": "TD",
        "alpha3Code": "TCD",
        "callingCodes": ["235"],
        "capital": "N'Djamena",
        "altSpellings": ["TD", "Tchad", "Republic of Chad", "RÃ©publique du Tchad"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 14497000,
        "latlng": [15.0, 19.0],
        "demonym": "Chadian",
        "area": 1284000.0,
        "gini": 39.8,
        "timezones": ["UTC+01:00"],
        "borders": ["CMR", "CAF", "LBY", "NER", "NGA", "SSD"],
        "nativeName": "Tchad",
        "numericCode": "148",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Chade",
            "pt": "Chade",
            "nl": "Tsjaad",
            "hr": "ÄŒad",
            "fa": "Ú†Ø§Ø¯",
            "de": "Tschad",
            "es": "Chad",
            "fr": "Tchad",
            "ja": "ãƒãƒ£ãƒ‰",
            "it": "Ciad",
            "hu": "CsÃ¡d"
        },
        "flags": [
            "https://restcountries.com/data/tcd.svg",
            "https://restcountries.com/data/png/tcd.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CHA",
        "independent": true
    },
    {
        "name": "Chile",
        "topLevelDomain": [".cl"],
        "alpha2Code": "CL",
        "alpha3Code": "CHL",
        "callingCodes": ["56"],
        "capital": "Santiago",
        "altSpellings": ["CL", "Republic of Chile", "RepÃºblica de Chile"],
        "region": "South America",
        "continent": "Americas",
        "population": 18191900,
        "latlng": [-30.0, -71.0],
        "demonym": "Chilean",
        "area": 756102.0,
        "gini": 52.1,
        "timezones": ["UTC-06:00", "UTC-04:00"],
        "borders": ["ARG", "BOL", "PER"],
        "nativeName": "Chile",
        "numericCode": "152",
        "currencies": [{ "code": "CLP", "name": "Chilean peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Chile",
            "pt": "Chile",
            "nl": "Chili",
            "hr": "ÄŒile",
            "fa": "Ø´ÛŒÙ„ÛŒ",
            "de": "Chile",
            "es": "Chile",
            "fr": "Chili",
            "ja": "ãƒãƒª",
            "it": "Cile",
            "hu": "Chile"
        },
        "flags": [
            "https://restcountries.com/data/chl.svg",
            "https://restcountries.com/data/png/chl.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": ["Alianza del PacÃ­fico"]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "CHI",
        "independent": true
    },
    {
        "name": "China",
        "topLevelDomain": [".cn"],
        "alpha2Code": "CN",
        "alpha3Code": "CHN",
        "callingCodes": ["86"],
        "capital": "Beijing",
        "altSpellings": [
            "CN",
            "ZhÅngguÃ³",
            "Zhongguo",
            "Zhonghua",
            "People's Republic of China",
            "ä¸­åŽäººæ°‘å…±å’Œå›½",
            "ZhÅnghuÃ¡ RÃ©nmÃ­n GÃ²nghÃ©guÃ³"
        ],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 1377422166,
        "latlng": [35.0, 105.0],
        "demonym": "Chinese",
        "area": 9640011.0,
        "gini": 47.0,
        "timezones": ["UTC+08:00"],
        "borders": [
            "AFG",
            "BTN",
            "MMR",
            "HKG",
            "IND",
            "KAZ",
            "PRK",
            "KGZ",
            "LAO",
            "MAC",
            "MNG",
            "PAK",
            "RUS",
            "TJK",
            "VNM"
        ],
        "nativeName": "ä¸­å›½",
        "numericCode": "156",
        "currencies": [{ "code": "CNY", "name": "Chinese yuan", "symbol": "Â¥" }],
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "ä¸­æ–‡ (ZhÅngwÃ©n)"
            }
        ],
        "translations": {
            "br": "China",
            "pt": "China",
            "nl": "China",
            "hr": "Kina",
            "fa": "Ú†ÛŒÙ†",
            "de": "China",
            "es": "China",
            "fr": "Chine",
            "ja": "ä¸­å›½",
            "it": "Cina",
            "hu": "KÃ­na"
        },
        "flags": [
            "https://restcountries.com/data/chn.svg",
            "https://restcountries.com/data/png/chn.png"
        ],
        "cioc": "CHN",
        "independent": true
    },
    {
        "name": "Christmas Island",
        "topLevelDomain": [".cx"],
        "alpha2Code": "CX",
        "alpha3Code": "CXR",
        "callingCodes": ["61"],
        "capital": "Flying Fish Cove",
        "altSpellings": ["CX", "Territory of Christmas Island"],
        "region": "Australia and New Zealand",
        "continent": "Oceania",
        "population": 2072,
        "latlng": [-10.5, 105.66666666],
        "demonym": "Christmas Island",
        "area": 135.0,
        "timezones": ["UTC+07:00"],
        "nativeName": "Christmas Island",
        "numericCode": "162",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilha Christmas",
            "pt": "Ilha do Natal",
            "nl": "Christmaseiland",
            "hr": "BoÅ¾iÄ‡ni otok",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ú©Ø±ÛŒØ³Ù…Ø³",
            "de": "Weihnachtsinsel",
            "es": "Isla de Navidad",
            "fr": "ÃŽle Christmas",
            "ja": "ã‚¯ãƒªã‚¹ãƒžã‚¹å³¶",
            "it": "Isola di Natale",
            "hu": "KarÃ¡csony-sziget"
        },
        "flags": [
            "https://restcountries.com/data/cxr.svg",
            "https://restcountries.com/data/png/cxr.png"
        ],
        "independent": false
    },
    {
        "name": "Cocos (Keeling) Islands",
        "topLevelDomain": [".cc"],
        "alpha2Code": "CC",
        "alpha3Code": "CCK",
        "callingCodes": ["61"],
        "capital": "West Island",
        "altSpellings": [
            "CC",
            "Territory of the Cocos (Keeling) Islands",
            "Keeling Islands"
        ],
        "region": "Australia and New Zealand",
        "continent": "Oceania",
        "population": 550,
        "latlng": [-12.5, 96.83333333],
        "demonym": "Cocos Islander",
        "area": 14.0,
        "timezones": ["UTC+06:30"],
        "nativeName": "Cocos (Keeling) Islands",
        "numericCode": "166",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Cocos",
            "pt": "Ilhas dos Cocos",
            "nl": "Cocoseilanden",
            "hr": "Kokosovi Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ú©ÙˆÚ©ÙˆØ³",
            "de": "Kokosinseln",
            "es": "Islas Cocos o Islas Keeling",
            "fr": "ÃŽles Cocos",
            "ja": "ã‚³ã‚³ã‚¹ï¼ˆã‚­ãƒ¼ãƒªãƒ³ã‚°ï¼‰è«¸å³¶",
            "it": "Isole Cocos e Keeling",
            "hu": "KÃ³kusz-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/cck.svg",
            "https://restcountries.com/data/png/cck.png"
        ],
        "independent": false
    },
    {
        "name": "Colombia",
        "topLevelDomain": [".co"],
        "alpha2Code": "CO",
        "alpha3Code": "COL",
        "callingCodes": ["57"],
        "capital": "BogotÃ¡",
        "altSpellings": ["CO", "Republic of Colombia", "RepÃºblica de Colombia"],
        "region": "South America",
        "continent": "Americas",
        "population": 48759958,
        "latlng": [4.0, -72.0],
        "demonym": "Colombian",
        "area": 1141748.0,
        "gini": 55.9,
        "timezones": ["UTC-05:00"],
        "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
        "nativeName": "Colombia",
        "numericCode": "170",
        "currencies": [{ "code": "COP", "name": "Colombian peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "ColÃ´mbia",
            "pt": "ColÃ´mbia",
            "nl": "Colombia",
            "hr": "Kolumbija",
            "fa": "Ú©Ù„Ù…Ø¨ÛŒØ§",
            "de": "Kolumbien",
            "es": "Colombia",
            "fr": "Colombie",
            "ja": "ã‚³ãƒ­ãƒ³ãƒ“ã‚¢",
            "it": "Colombia",
            "hu": "Kolumbia"
        },
        "flags": [
            "https://restcountries.com/data/col.svg",
            "https://restcountries.com/data/png/col.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": ["Alianza del PacÃ­fico"]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "COL",
        "independent": true
    },
    {
        "name": "Comoros",
        "topLevelDomain": [".km"],
        "alpha2Code": "KM",
        "alpha3Code": "COM",
        "callingCodes": ["269"],
        "capital": "Moroni",
        "altSpellings": [
            "KM",
            "Union of the Comoros",
            "Union des Comores",
            "Udzima wa Komori",
            "al-Ittiá¸¥Äd al-QumurÄ«"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 806153,
        "latlng": [-12.16666666, 44.25],
        "demonym": "Comoran",
        "area": 1862.0,
        "gini": 64.3,
        "timezones": ["UTC+03:00"],
        "nativeName": "Komori",
        "numericCode": "174",
        "currencies": [{ "code": "KMF", "name": "Comorian franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Comores",
            "pt": "Comores",
            "nl": "Comoren",
            "hr": "Komori",
            "fa": "Ú©ÙˆÙ…ÙˆØ±",
            "de": "Union der Komoren",
            "es": "Comoras",
            "fr": "Comores",
            "ja": "ã‚³ãƒ¢ãƒ­",
            "it": "Comore",
            "hu": "Comore-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/com.svg",
            "https://restcountries.com/data/png/com.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "COM",
        "independent": true
    },
    {
        "name": "Congo",
        "topLevelDomain": [".cg"],
        "alpha2Code": "CG",
        "alpha3Code": "COG",
        "callingCodes": ["242"],
        "capital": "Brazzaville",
        "altSpellings": ["CG", "Congo-Brazzaville"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 4741000,
        "latlng": [-1.0, 15.0],
        "demonym": "Congolese",
        "area": 342000.0,
        "gini": 47.3,
        "timezones": ["UTC+01:00"],
        "borders": ["AGO", "CMR", "CAF", "COD", "GAB"],
        "nativeName": "RÃ©publique du Congo",
        "numericCode": "178",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ln",
                "iso639_2": "lin",
                "name": "Lingala",
                "nativeName": "LingÃ¡la"
            }
        ],
        "translations": {
            "br": "Congo",
            "pt": "Congo",
            "nl": "Congo [Republiek]",
            "hr": "Kongo",
            "fa": "Ú©Ù†Ú¯Ùˆ",
            "de": "Kongo",
            "es": "Congo",
            "fr": "Congo",
            "ja": "ã‚³ãƒ³ã‚´å…±å’Œå›½",
            "it": "Congo",
            "hu": "KongÃ³i KÃ³ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/cog.svg",
            "https://restcountries.com/data/png/cog.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CGO",
        "independent": true
    },
    {
        "name": "Congo (Democratic Republic of the)",
        "topLevelDomain": [".cd"],
        "alpha2Code": "CD",
        "alpha3Code": "COD",
        "callingCodes": ["243"],
        "capital": "Kinshasa",
        "altSpellings": ["CD", "DR Congo", "Congo-Kinshasa", "DRC"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 85026000,
        "latlng": [0.0, 25.0],
        "demonym": "Congolese",
        "area": 2344858.0,
        "timezones": ["UTC+01:00", "UTC+02:00"],
        "borders": ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
        "nativeName": "RÃ©publique dÃ©mocratique du Congo",
        "numericCode": "180",
        "currencies": [
            { "code": "CDF", "name": "Congolese franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ln",
                "iso639_2": "lin",
                "name": "Lingala",
                "nativeName": "LingÃ¡la"
            },
            {
                "iso639_1": "kg",
                "iso639_2": "kon",
                "name": "Kongo",
                "nativeName": "Kikongo"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            {
                "iso639_1": "lu",
                "iso639_2": "lub",
                "name": "Luba-Katanga",
                "nativeName": "Tshiluba"
            }
        ],
        "translations": {
            "br": "RD Congo",
            "pt": "RD Congo",
            "nl": "Congo [DRC]",
            "hr": "Kongo, Demokratska Republika",
            "fa": "Ø¬Ù…Ù‡ÙˆØ±ÛŒ Ú©Ù†Ú¯Ùˆ",
            "de": "Kongo (Dem. Rep.)",
            "es": "Congo (Rep. Dem.)",
            "fr": "Congo (RÃ©p. dÃ©m.)",
            "ja": "ã‚³ãƒ³ã‚´æ°‘ä¸»å…±å’Œå›½",
            "it": "Congo (Rep. Dem.)",
            "hu": "KongÃ³i Demokratikus KÃ¶ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/cod.svg",
            "https://restcountries.com/data/png/cod.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "COD",
        "independent": true
    },
    {
        "name": "Cook Islands",
        "topLevelDomain": [".ck"],
        "alpha2Code": "CK",
        "alpha3Code": "COK",
        "callingCodes": ["682"],
        "capital": "Avarua",
        "altSpellings": ["CK", "KÅ«ki 'Ä€irani"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 18100,
        "latlng": [-21.23333333, -159.76666666],
        "demonym": "Cook Islander",
        "area": 236.0,
        "timezones": ["UTC-10:00"],
        "nativeName": "Cook Islands",
        "numericCode": "184",
        "currencies": [
            { "code": "NZD", "name": "New Zealand dollar", "symbol": "" },
            { "code": "CKD", "name": "Cook Islands dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            { "iso639_2": "rar", "name": "Cook Islands MÄori", "nativeName": "MÄori" }
        ],
        "translations": {
            "br": "Ilhas Cook",
            "pt": "Ilhas Cook",
            "nl": "Cookeilanden",
            "hr": "Cookovo OtoÄje",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ú©ÙˆÚ©",
            "de": "Cookinseln",
            "es": "Islas Cook",
            "fr": "ÃŽles Cook",
            "ja": "ã‚¯ãƒƒã‚¯è«¸å³¶",
            "it": "Isole Cook",
            "hu": "Cook-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/cok.svg",
            "https://restcountries.com/data/png/cok.png"
        ],
        "cioc": "COK",
        "independent": true
    },
    {
        "name": "Costa Rica",
        "topLevelDomain": [".cr"],
        "alpha2Code": "CR",
        "alpha3Code": "CRI",
        "callingCodes": ["506"],
        "capital": "San JosÃ©",
        "altSpellings": [
            "CR",
            "Republic of Costa Rica",
            "RepÃºblica de Costa Rica"
        ],
        "region": "Central America",
        "continent": "Americas",
        "population": 4890379,
        "latlng": [10.0, -84.0],
        "demonym": "Costa Rican",
        "area": 51100.0,
        "gini": 50.7,
        "timezones": ["UTC-06:00"],
        "borders": ["NIC", "PAN"],
        "nativeName": "Costa Rica",
        "numericCode": "188",
        "currencies": [
            { "code": "CRC", "name": "Costa Rican colÃ³n", "symbol": "â‚¡" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Costa Rica",
            "pt": "Costa Rica",
            "nl": "Costa Rica",
            "hr": "Kostarika",
            "fa": "Ú©Ø§Ø³ØªØ§Ø±ÛŒÚ©Ø§",
            "de": "Costa Rica",
            "es": "Costa Rica",
            "fr": "Costa Rica",
            "ja": "ã‚³ã‚¹ã‚¿ãƒªã‚«",
            "it": "Costa Rica",
            "hu": "Costa Rica"
        },
        "flags": [
            "https://restcountries.com/data/cri.svg",
            "https://restcountries.com/data/png/cri.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "CRC",
        "independent": true
    },
    {
        "name": "Croatia",
        "topLevelDomain": [".hr"],
        "alpha2Code": "HR",
        "alpha3Code": "HRV",
        "callingCodes": ["385"],
        "capital": "Zagreb",
        "altSpellings": [
            "HR",
            "Hrvatska",
            "Republic of Croatia",
            "Republika Hrvatska"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 4190669,
        "latlng": [45.16666666, 15.5],
        "demonym": "Croatian",
        "area": 56594.0,
        "gini": 33.7,
        "timezones": ["UTC+01:00"],
        "borders": ["BIH", "HUN", "MNE", "SRB", "SVN"],
        "nativeName": "Hrvatska",
        "numericCode": "191",
        "currencies": [{ "code": "HRK", "name": "Croatian kuna", "symbol": "kn" }],
        "languages": [
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            }
        ],
        "translations": {
            "br": "CroÃ¡cia",
            "pt": "CroÃ¡cia",
            "nl": "KroatiÃ«",
            "hr": "Hrvatska",
            "fa": "Ú©Ø±ÙˆØ§Ø³ÛŒ",
            "de": "Kroatien",
            "es": "Croacia",
            "fr": "Croatie",
            "ja": "ã‚¯ãƒ­ã‚¢ãƒã‚¢",
            "it": "Croazia",
            "hu": "HorvÃ¡torszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/hrv.svg",
            "https://restcountries.com/data/png/hrv.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "CRO",
        "independent": true
    },
    {
        "name": "Cuba",
        "topLevelDomain": [".cu"],
        "alpha2Code": "CU",
        "alpha3Code": "CUB",
        "callingCodes": ["53"],
        "capital": "Havana",
        "altSpellings": ["CU", "Republic of Cuba", "RepÃºblica de Cuba"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 11239004,
        "latlng": [21.5, -80.0],
        "demonym": "Cuban",
        "area": 109884.0,
        "gini": 38.0,
        "timezones": ["UTC-05:00"],
        "nativeName": "Cuba",
        "numericCode": "192",
        "currencies": [
            { "code": "CUC", "name": "Cuban convertible peso", "symbol": "" },
            { "code": "CUP", "name": "Cuban peso", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Cuba",
            "pt": "Cuba",
            "nl": "Cuba",
            "hr": "Kuba",
            "fa": "Ú©ÙˆØ¨Ø§",
            "de": "Kuba",
            "es": "Cuba",
            "fr": "Cuba",
            "ja": "ã‚­ãƒ¥ãƒ¼ãƒ",
            "it": "Cuba",
            "hu": "Kuba"
        },
        "flags": [
            "https://restcountries.com/data/cub.svg",
            "https://restcountries.com/data/png/cub.png"
        ],
        "cioc": "CUB",
        "independent": true
    },
    {
        "name": "CuraÃ§ao",
        "topLevelDomain": [".cw"],
        "alpha2Code": "CW",
        "alpha3Code": "CUW",
        "callingCodes": ["599"],
        "capital": "Willemstad",
        "altSpellings": [
            "CW",
            "Curacao",
            "KÃ²rsou",
            "Country of CuraÃ§ao",
            "Land CuraÃ§ao",
            "Pais KÃ²rsou"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 154843,
        "latlng": [12.116667, -68.933333],
        "demonym": "Dutch",
        "area": 444.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "CuraÃ§ao",
        "numericCode": "531",
        "currencies": [
            { "code": "ANG", "name": "Netherlands Antillean guilder", "symbol": "Æ’" }
        ],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "pa",
                "iso639_2": "pan",
                "name": "(Eastern) Punjabi",
                "nativeName": "à¨ªà©°à¨œà¨¾à¨¬à©€"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "CuraÃ§ao",
            "pt": "CuraÃ§ao",
            "nl": "CuraÃ§ao",
            "fa": "Ú©ÙˆØ±Ø§Ø³Ø§Ø¦Ùˆ",
            "de": "CuraÃ§ao",
            "fr": "CuraÃ§ao",
            "it": "CuraÃ§ao",
            "hu": "Cura~ao"
        },
        "flags": [
            "https://restcountries.com/data/cuw.svg",
            "https://restcountries.com/data/png/cuw.png"
        ],
        "independent": false
    },
    {
        "name": "Cyprus",
        "topLevelDomain": [".cy"],
        "alpha2Code": "CY",
        "alpha3Code": "CYP",
        "callingCodes": ["357"],
        "capital": "Nicosia",
        "altSpellings": [
            "CY",
            "KÃ½pros",
            "KÄ±brÄ±s",
            "Republic of Cyprus",
            "ÎšÏ…Ï€ÏÎ¹Î±ÎºÎ® Î”Î·Î¼Î¿ÎºÏÎ±Ï„Î¯Î±",
            "KÄ±brÄ±s Cumhuriyeti"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 847000,
        "latlng": [35.0, 33.0],
        "demonym": "Cypriot",
        "area": 9251.0,
        "gini": 29.1,
        "timezones": ["UTC+02:00"],
        "borders": ["GBR"],
        "nativeName": "ÎšÏÏ€ÏÎ¿Ï‚",
        "numericCode": "196",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "el",
                "iso639_2": "ell",
                "name": "Greek (modern)",
                "nativeName": "ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬"
            },
            {
                "iso639_1": "tr",
                "iso639_2": "tur",
                "name": "Turkish",
                "nativeName": "TÃ¼rkÃ§e"
            },
            {
                "iso639_1": "hy",
                "iso639_2": "hye",
                "name": "Armenian",
                "nativeName": "Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶"
            }
        ],
        "translations": {
            "br": "Chipre",
            "pt": "Chipre",
            "nl": "Cyprus",
            "hr": "Cipar",
            "fa": "Ù‚Ø¨Ø±Ø³",
            "de": "Zypern",
            "es": "Chipre",
            "fr": "Chypre",
            "ja": "ã‚­ãƒ—ãƒ­ã‚¹",
            "it": "Cipro",
            "hu": "Ciprus"
        },
        "flags": [
            "https://restcountries.com/data/cyp.svg",
            "https://restcountries.com/data/png/cyp.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "CYP",
        "independent": true
    },
    {
        "name": "Czech Republic",
        "topLevelDomain": [".cz"],
        "alpha2Code": "CZ",
        "alpha3Code": "CZE",
        "callingCodes": ["420"],
        "capital": "Prague",
        "altSpellings": ["CZ", "ÄŒeskÃ¡ republika", "ÄŒesko"],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 10558524,
        "latlng": [49.75, 15.5],
        "demonym": "Czech",
        "area": 78865.0,
        "gini": 26.0,
        "timezones": ["UTC+01:00"],
        "nativeName": "ÄŒeskÃ¡ republika",
        "numericCode": "203",
        "currencies": [{ "code": "CZK", "name": "Czech koruna", "symbol": "KÄ" }],
        "languages": [
            {
                "iso639_1": "cs",
                "iso639_2": "ces",
                "name": "Czech",
                "nativeName": "ÄeÅ¡tina"
            },
            {
                "iso639_1": "sk",
                "iso639_2": "slk",
                "name": "Slovak",
                "nativeName": "slovenÄina"
            }
        ],
        "translations": {
            "br": "RepÃºblica Tcheca",
            "pt": "RepÃºblica Checa",
            "nl": "TsjechiÃ«",
            "hr": "ÄŒeÅ¡ka",
            "fa": "Ø¬Ù…Ù‡ÙˆØ±ÛŒ Ú†Ú©",
            "de": "Tschechische Republik",
            "es": "RepÃºblica Checa",
            "fr": "RÃ©publique tchÃ¨que",
            "ja": "ãƒã‚§ã‚³",
            "it": "Repubblica Ceca",
            "hu": "CsehorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/cze.svg",
            "https://restcountries.com/data/png/cze.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "CZE",
        "independent": true
    },
    {
        "name": "Denmark",
        "topLevelDomain": [".dk"],
        "alpha2Code": "DK",
        "alpha3Code": "DNK",
        "callingCodes": ["45"],
        "capital": "Copenhagen",
        "altSpellings": [
            "DK",
            "Danmark",
            "Kingdom of Denmark",
            "Kongeriget Danmark"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 5717014,
        "latlng": [56.0, 10.0],
        "demonym": "Danish",
        "area": 43094.0,
        "gini": 24.0,
        "timezones": ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC", "UTC+01:00"],
        "borders": ["DEU"],
        "nativeName": "Danmark",
        "numericCode": "208",
        "currencies": [{ "code": "DKK", "name": "Danish krone", "symbol": "kr" }],
        "languages": [
            {
                "iso639_1": "da",
                "iso639_2": "dan",
                "name": "Danish",
                "nativeName": "dansk"
            }
        ],
        "translations": {
            "br": "Dinamarca",
            "pt": "Dinamarca",
            "nl": "Denemarken",
            "hr": "Danska",
            "fa": "Ø¯Ø§Ù†Ù…Ø§Ø±Ú©",
            "de": "DÃ¤nemark",
            "es": "Dinamarca",
            "fr": "Danemark",
            "ja": "ãƒ‡ãƒ³ãƒžãƒ¼ã‚¯",
            "it": "Danimarca",
            "hu": "DÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/dnk.svg",
            "https://restcountries.com/data/png/dnk.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "DEN",
        "independent": true
    },
    {
        "name": "Djibouti",
        "topLevelDomain": [".dj"],
        "alpha2Code": "DJ",
        "alpha3Code": "DJI",
        "callingCodes": ["253"],
        "capital": "Djibouti",
        "altSpellings": [
            "DJ",
            "Jabuuti",
            "Gabuuti",
            "Republic of Djibouti",
            "RÃ©publique de Djibouti",
            "Gabuutih Ummuuno",
            "Jamhuuriyadda Jabuuti"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 900000,
        "latlng": [11.5, 43.0],
        "demonym": "Djibouti",
        "area": 23200.0,
        "gini": 40.0,
        "timezones": ["UTC+03:00"],
        "borders": ["ERI", "ETH", "SOM"],
        "nativeName": "Djibouti",
        "numericCode": "262",
        "currencies": [
            { "code": "DJF", "name": "Djiboutian franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Djibuti",
            "pt": "Djibuti",
            "nl": "Djibouti",
            "hr": "DÅ¾ibuti",
            "fa": "Ø¬ÛŒØ¨ÙˆØªÛŒ",
            "de": "Dschibuti",
            "es": "Yibuti",
            "fr": "Djibouti",
            "ja": "ã‚¸ãƒ–ãƒ",
            "it": "Gibuti",
            "hu": "Dzsibuti"
        },
        "flags": [
            "https://restcountries.com/data/dji.svg",
            "https://restcountries.com/data/png/dji.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "DJI",
        "independent": true
    },
    {
        "name": "Dominica",
        "topLevelDomain": [".dm"],
        "alpha2Code": "DM",
        "alpha3Code": "DMA",
        "callingCodes": ["1"],
        "capital": "Roseau",
        "altSpellings": [
            "DM",
            "Dominique",
            "Waiâ€˜tu kubuli",
            "Commonwealth of Dominica"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 71293,
        "latlng": [15.41666666, -61.33333333],
        "demonym": "Dominican",
        "area": 751.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Dominica",
        "numericCode": "212",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Dominica",
            "pt": "Dominica",
            "nl": "Dominica",
            "hr": "Dominika",
            "fa": "Ø¯ÙˆÙ…ÛŒÙ†ÛŒÚ©Ø§",
            "de": "Dominica",
            "es": "Dominica",
            "fr": "Dominique",
            "ja": "ãƒ‰ãƒŸãƒ‹ã‚«å›½",
            "it": "Dominica",
            "hu": "Dominikai KÃ¶zÃ¶ssÃ©g"
        },
        "flags": [
            "https://restcountries.com/data/dma.svg",
            "https://restcountries.com/data/png/dma.png"
        ],
        "cioc": "DMA",
        "independent": true
    },
    {
        "name": "Dominican Republic",
        "topLevelDomain": [".do"],
        "alpha2Code": "DO",
        "alpha3Code": "DOM",
        "callingCodes": ["1"],
        "capital": "Santo Domingo",
        "altSpellings": ["DO"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 10075045,
        "latlng": [19.0, -70.66666666],
        "demonym": "Dominican",
        "area": 48671.0,
        "gini": 47.2,
        "timezones": ["UTC-04:00"],
        "borders": ["HTI"],
        "nativeName": "RepÃºblica Dominicana",
        "numericCode": "214",
        "currencies": [{ "code": "DOP", "name": "Dominican peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "RepÃºblica Dominicana",
            "pt": "RepÃºblica Dominicana",
            "nl": "Dominicaanse Republiek",
            "hr": "Dominikanska Republika",
            "fa": "Ø¬Ù…Ù‡ÙˆØ±ÛŒ Ø¯ÙˆÙ…ÛŒÙ†ÛŒÚ©Ù†",
            "de": "Dominikanische Republik",
            "es": "RepÃºblica Dominicana",
            "fr": "RÃ©publique dominicaine",
            "ja": "ãƒ‰ãƒŸãƒ‹ã‚«å…±å’Œå›½",
            "it": "Repubblica Dominicana",
            "hu": "Dominikai KÃ¶ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/dom.svg",
            "https://restcountries.com/data/png/dom.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "DOM",
        "independent": true
    },
    {
        "name": "Ecuador",
        "topLevelDomain": [".ec"],
        "alpha2Code": "EC",
        "alpha3Code": "ECU",
        "callingCodes": ["593"],
        "capital": "Quito",
        "altSpellings": ["EC", "Republic of Ecuador", "RepÃºblica del Ecuador"],
        "region": "South America",
        "continent": "Americas",
        "population": 16545799,
        "latlng": [-2.0, -77.5],
        "demonym": "Ecuadorean",
        "area": 276841.0,
        "gini": 49.3,
        "timezones": ["UTC-06:00", "UTC-05:00"],
        "borders": ["COL", "PER"],
        "nativeName": "Ecuador",
        "numericCode": "218",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Equador",
            "pt": "Equador",
            "nl": "Ecuador",
            "hr": "Ekvador",
            "fa": "Ø§Ú©ÙˆØ§Ø¯ÙˆØ±",
            "de": "Ecuador",
            "es": "Ecuador",
            "fr": "Ã‰quateur",
            "ja": "ã‚¨ã‚¯ã‚¢ãƒ‰ãƒ«",
            "it": "Ecuador",
            "hu": "Ecuador"
        },
        "flags": [
            "https://restcountries.com/data/ecu.svg",
            "https://restcountries.com/data/png/ecu.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "ECU",
        "independent": true
    },
    {
        "name": "Egypt",
        "topLevelDomain": [".eg"],
        "alpha2Code": "EG",
        "alpha3Code": "EGY",
        "callingCodes": ["20"],
        "capital": "Cairo",
        "altSpellings": ["EG", "Arab Republic of Egypt"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 91290000,
        "latlng": [27.0, 30.0],
        "demonym": "Egyptian",
        "area": 1002450.0,
        "gini": 30.8,
        "timezones": ["UTC+02:00"],
        "borders": ["ISR", "LBY", "SDN"],
        "nativeName": "Ù…ØµØ±â€Ž",
        "numericCode": "818",
        "currencies": [{ "code": "EGP", "name": "Egyptian pound", "symbol": "Â£" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Egito",
            "pt": "Egipto",
            "nl": "Egypte",
            "hr": "Egipat",
            "fa": "Ù…ØµØ±",
            "de": "Ã„gypten",
            "es": "Egipto",
            "fr": "Ã‰gypte",
            "ja": "ã‚¨ã‚¸ãƒ—ãƒˆ",
            "it": "Egitto",
            "hu": "Egyiptom"
        },
        "flags": [
            "https://restcountries.com/data/egy.svg",
            "https://restcountries.com/data/png/egy.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "EGY",
        "independent": true
    },
    {
        "name": "El Salvador",
        "topLevelDomain": [".sv"],
        "alpha2Code": "SV",
        "alpha3Code": "SLV",
        "callingCodes": ["503"],
        "capital": "San Salvador",
        "altSpellings": [
            "SV",
            "Republic of El Salvador",
            "RepÃºblica de El Salvador"
        ],
        "region": "Central America",
        "continent": "Americas",
        "population": 6520675,
        "latlng": [13.83333333, -88.91666666],
        "demonym": "Salvadoran",
        "area": 21041.0,
        "gini": 48.3,
        "timezones": ["UTC-06:00"],
        "borders": ["GTM", "HND"],
        "nativeName": "El Salvador",
        "numericCode": "222",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "El Salvador",
            "pt": "El Salvador",
            "nl": "El Salvador",
            "hr": "Salvador",
            "fa": "Ø§Ù„Ø³Ø§Ù„ÙˆØ§Ø¯ÙˆØ±",
            "de": "El Salvador",
            "es": "El Salvador",
            "fr": "Salvador",
            "ja": "ã‚¨ãƒ«ã‚µãƒ«ãƒãƒ‰ãƒ«",
            "it": "El Salvador",
            "hu": "Salvador"
        },
        "flags": [
            "https://restcountries.com/data/slv.svg",
            "https://restcountries.com/data/png/slv.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "ESA",
        "independent": true
    },
    {
        "name": "Equatorial Guinea",
        "topLevelDomain": [".gq"],
        "alpha2Code": "GQ",
        "alpha3Code": "GNQ",
        "callingCodes": ["240"],
        "capital": "Malabo",
        "altSpellings": [
            "GQ",
            "Republic of Equatorial Guinea",
            "RepÃºblica de Guinea Ecuatorial",
            "RÃ©publique de GuinÃ©e Ã©quatoriale",
            "RepÃºblica da GuinÃ© Equatorial"
        ],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 1222442,
        "latlng": [2.0, 10.0],
        "demonym": "Equatorial Guinean",
        "area": 28051.0,
        "gini": 39.4,
        "timezones": ["UTC+01:00"],
        "borders": ["CMR", "GAB"],
        "nativeName": "Guinea Ecuatorial",
        "numericCode": "226",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            },
            { "iso639_2": "fan", "name": "Fang", "nativeName": "Fang" }
        ],
        "translations": {
            "br": "GuinÃ© Equatorial",
            "pt": "GuinÃ© Equatorial",
            "nl": "Equatoriaal-Guinea",
            "hr": "Ekvatorijalna Gvineja",
            "fa": "Ú¯ÛŒÙ†Ù‡ Ø§Ø³ØªÙˆØ§ÛŒÛŒ",
            "de": "Ã„quatorial-Guinea",
            "es": "Guinea Ecuatorial",
            "fr": "GuinÃ©e-Ã‰quatoriale",
            "ja": "èµ¤é“ã‚®ãƒ‹ã‚¢",
            "it": "Guinea Equatoriale",
            "hu": "EgyenlÃ­tÅ‘i-Guinea"
        },
        "flags": [
            "https://restcountries.com/data/gnq.svg",
            "https://restcountries.com/data/png/gnq.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GEQ",
        "independent": true
    },
    {
        "name": "Eritrea",
        "topLevelDomain": [".er"],
        "alpha2Code": "ER",
        "alpha3Code": "ERI",
        "callingCodes": ["291"],
        "capital": "Asmara",
        "altSpellings": [
            "ER",
            "State of Eritrea",
            "áˆƒáŒˆáˆ¨ áŠ¤áˆ­á‰µáˆ«",
            "Dawlat IritriyÃ¡",
            "Ê¾ErtrÄ",
            "IritriyÄ",
            ""
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 5352000,
        "latlng": [15.0, 39.0],
        "demonym": "Eritrean",
        "area": 117600.0,
        "timezones": ["UTC+03:00"],
        "borders": ["DJI", "ETH", "SDN"],
        "nativeName": "áŠ¤áˆ­á‰µáˆ«",
        "numericCode": "232",
        "currencies": [
            { "code": "ERN", "name": "Eritrean nakfa", "symbol": "Nfk" }
        ],
        "languages": [
            {
                "iso639_1": "ti",
                "iso639_2": "tir",
                "name": "Tigrinya",
                "nativeName": "á‰µáŒáˆ­áŠ›"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            { "iso639_2": "tig", "name": "Tigre", "nativeName": "á‰µáŒáˆ¨" },
            { "iso639_2": "kun", "name": "Kunama", "nativeName": "Kunama" },
            { "iso639_2": "ssy", "name": "Saho", "nativeName": "Saho" },
            { "iso639_2": "byn", "name": "Bilen", "nativeName": "á‰¥áˆŠáŠ“" },
            { "iso639_2": "nrb", "name": "Nara", "nativeName": "Nara" },
            {
                "iso639_1": "aa",
                "iso639_2": "aar",
                "name": "Afar",
                "nativeName": "Afar"
            }
        ],
        "translations": {
            "br": "Eritreia",
            "pt": "Eritreia",
            "nl": "Eritrea",
            "hr": "Eritreja",
            "fa": "Ø§Ø±ÛŒØªØ±Ù‡",
            "de": "Eritrea",
            "es": "Eritrea",
            "fr": "Ã‰rythrÃ©e",
            "ja": "ã‚¨ãƒªãƒˆãƒªã‚¢",
            "it": "Eritrea",
            "hu": "Eritrea"
        },
        "flags": [
            "https://restcountries.com/data/eri.svg",
            "https://restcountries.com/data/png/eri.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "ERI",
        "independent": true
    },
    {
        "name": "Estonia",
        "topLevelDomain": [".ee"],
        "alpha2Code": "EE",
        "alpha3Code": "EST",
        "callingCodes": ["372"],
        "capital": "Tallinn",
        "altSpellings": ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 1315944,
        "latlng": [59.0, 26.0],
        "demonym": "Estonian",
        "area": 45227.0,
        "gini": 36.0,
        "timezones": ["UTC+02:00"],
        "borders": ["LVA", "RUS"],
        "nativeName": "Eesti",
        "numericCode": "233",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "et",
                "iso639_2": "est",
                "name": "Estonian",
                "nativeName": "eesti"
            }
        ],
        "translations": {
            "br": "EstÃ´nia",
            "pt": "EstÃ³nia",
            "nl": "Estland",
            "hr": "Estonija",
            "fa": "Ø§Ø³ØªÙˆÙ†ÛŒ",
            "de": "Estland",
            "es": "Estonia",
            "fr": "Estonie",
            "ja": "ã‚¨ã‚¹ãƒˆãƒ‹ã‚¢",
            "it": "Estonia",
            "hu": "Ã‰sztorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/est.svg",
            "https://restcountries.com/data/png/est.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "EST",
        "independent": true
    },
    {
        "name": "Ethiopia",
        "topLevelDomain": [".et"],
        "alpha2Code": "ET",
        "alpha3Code": "ETH",
        "callingCodes": ["251"],
        "capital": "Addis Ababa",
        "altSpellings": [
            "ET",
            "Ê¾ÄªtyÅá¹—á¹—yÄ",
            "Federal Democratic Republic of Ethiopia",
            "á‹¨áŠ¢á‰µá‹®áŒµá‹« áŒá‹´áˆ«áˆ‹á‹Š á‹²áˆžáŠ­áˆ«áˆ²á‹«á‹Š áˆªáá‰¥áˆŠáŠ­"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 92206005,
        "latlng": [8.0, 38.0],
        "demonym": "Ethiopian",
        "area": 1104300.0,
        "gini": 29.8,
        "timezones": ["UTC+03:00"],
        "borders": ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
        "nativeName": "áŠ¢á‰µá‹®áŒµá‹«",
        "numericCode": "231",
        "currencies": [{ "code": "ETB", "name": "Ethiopian birr", "symbol": "Br" }],
        "languages": [
            {
                "iso639_1": "am",
                "iso639_2": "amh",
                "name": "Amharic",
                "nativeName": "áŠ áˆ›áˆ­áŠ›"
            }
        ],
        "translations": {
            "br": "EtiÃ³pia",
            "pt": "EtiÃ³pia",
            "nl": "EthiopiÃ«",
            "hr": "Etiopija",
            "fa": "Ø§ØªÛŒÙˆÙ¾ÛŒ",
            "de": "Ã„thiopien",
            "es": "EtiopÃ­a",
            "fr": "Ã‰thiopie",
            "ja": "ã‚¨ãƒã‚ªãƒ”ã‚¢",
            "it": "Etiopia",
            "hu": "EtiÃ³pia"
        },
        "flags": [
            "https://restcountries.com/data/eth.svg",
            "https://restcountries.com/data/png/eth.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "ETH",
        "independent": true
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "topLevelDomain": [".fk"],
        "alpha2Code": "FK",
        "alpha3Code": "FLK",
        "callingCodes": ["500"],
        "capital": "Stanley",
        "altSpellings": ["FK", "Islas Malvinas"],
        "region": "South America",
        "continent": "Americas",
        "population": 2563,
        "latlng": [-51.75, -59.0],
        "demonym": "Falkland Islander",
        "area": 12173.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Falkland Islands",
        "numericCode": "238",
        "currencies": [
            { "code": "FKP", "name": "Falkland Islands pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Malvinas",
            "pt": "Ilhas Falkland",
            "nl": "Falklandeilanden [Islas Malvinas]",
            "hr": "Falklandski Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± ÙØ§Ù„Ú©Ù„Ù†Ø¯",
            "de": "Falklandinseln",
            "es": "Islas Malvinas",
            "fr": "ÃŽles Malouines",
            "ja": "ãƒ•ã‚©ãƒ¼ã‚¯ãƒ©ãƒ³ãƒ‰ï¼ˆãƒžãƒ«ãƒ“ãƒŠã‚¹ï¼‰è«¸å³¶",
            "it": "Isole Falkland o Isole Malvine",
            "hu": "Falkland-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/flk.svg",
            "https://restcountries.com/data/png/flk.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Faroe Islands",
        "topLevelDomain": [".fo"],
        "alpha2Code": "FO",
        "alpha3Code": "FRO",
        "callingCodes": ["298"],
        "capital": "TÃ³rshavn",
        "altSpellings": ["FO", "FÃ¸royar", "FÃ¦rÃ¸erne"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 49376,
        "latlng": [62.0, -7.0],
        "demonym": "Faroese",
        "area": 1393.0,
        "timezones": ["UTC+00:00"],
        "nativeName": "FÃ¸royar",
        "numericCode": "234",
        "currencies": [
            { "code": "DKK", "name": "Danish krone", "symbol": "kr" },
            { "code": "(none)", "name": "Faroese krÃ³na", "symbol": "kr" }
        ],
        "languages": [
            {
                "iso639_1": "fo",
                "iso639_2": "fao",
                "name": "Faroese",
                "nativeName": "fÃ¸royskt"
            }
        ],
        "translations": {
            "br": "Ilhas FaroÃ©",
            "pt": "Ilhas FaroÃ©",
            "nl": "FaerÃ¶er",
            "hr": "Farski Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± ÙØ§Ø±Ùˆ",
            "de": "FÃ¤rÃ¶er-Inseln",
            "es": "Islas Faroe",
            "fr": "ÃŽles FÃ©roÃ©",
            "ja": "ãƒ•ã‚§ãƒ­ãƒ¼è«¸å³¶",
            "it": "Isole Far Oer",
            "hu": "FerÃ¶er"
        },
        "flags": [
            "https://restcountries.com/data/fro.svg",
            "https://restcountries.com/data/png/fro.png"
        ],
        "independent": false
    },
    {
        "name": "Fiji",
        "topLevelDomain": [".fj"],
        "alpha2Code": "FJ",
        "alpha3Code": "FJI",
        "callingCodes": ["679"],
        "capital": "Suva",
        "altSpellings": [
            "FJ",
            "Viti",
            "Republic of Fiji",
            "Matanitu ko Viti",
            "FijÄ« Gaá¹‡arÄjya"
        ],
        "region": "Melanesia",
        "continent": "Oceania",
        "population": 867000,
        "latlng": [-18.0, 175.0],
        "demonym": "Fijian",
        "area": 18272.0,
        "gini": 42.8,
        "timezones": ["UTC+12:00"],
        "nativeName": "Fiji",
        "numericCode": "242",
        "currencies": [{ "code": "FJD", "name": "Fijian dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fj",
                "iso639_2": "fij",
                "name": "Fijian",
                "nativeName": "vosa Vakaviti"
            },
            {
                "iso639_2": "hif",
                "name": "Fiji Hindi",
                "nativeName": "à¤«à¤¼à¤¿à¤œà¥€ à¤¬à¤¾à¤¤"
            },
            { "iso639_2": "rtm", "name": "Rotuman", "nativeName": "FÃ¤eag Rotuma" }
        ],
        "translations": {
            "br": "Fiji",
            "pt": "Fiji",
            "nl": "Fiji",
            "hr": "FiÄ‘i",
            "fa": "ÙÛŒØ¬ÛŒ",
            "de": "Fidschi",
            "es": "Fiyi",
            "fr": "Fidji",
            "ja": "ãƒ•ã‚£ã‚¸ãƒ¼",
            "it": "Figi",
            "hu": "Fidzsi-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/fji.svg",
            "https://restcountries.com/data/png/fji.png"
        ],
        "cioc": "FIJ",
        "independent": true
    },
    {
        "name": "Finland",
        "topLevelDomain": [".fi"],
        "alpha2Code": "FI",
        "alpha3Code": "FIN",
        "callingCodes": ["358"],
        "capital": "Helsinki",
        "altSpellings": [
            "FI",
            "Suomi",
            "Republic of Finland",
            "Suomen tasavalta",
            "Republiken Finland"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 5491817,
        "latlng": [64.0, 26.0],
        "demonym": "Finnish",
        "area": 338424.0,
        "gini": 26.9,
        "timezones": ["UTC+02:00"],
        "borders": ["NOR", "SWE", "RUS"],
        "nativeName": "Suomi",
        "numericCode": "246",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fi",
                "iso639_2": "fin",
                "name": "Finnish",
                "nativeName": "suomi"
            },
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "translations": {
            "br": "FinlÃ¢ndia",
            "pt": "FinlÃ¢ndia",
            "nl": "Finland",
            "hr": "Finska",
            "fa": "ÙÙ†Ù„Ø§Ù†Ø¯",
            "de": "Finnland",
            "es": "Finlandia",
            "fr": "Finlande",
            "ja": "ãƒ•ã‚£ãƒ³ãƒ©ãƒ³ãƒ‰",
            "it": "Finlandia",
            "hu": "FinnorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/fin.svg",
            "https://restcountries.com/data/png/fin.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "FIN",
        "independent": true
    },
    {
        "name": "France",
        "topLevelDomain": [".fr"],
        "alpha2Code": "FR",
        "alpha3Code": "FRA",
        "callingCodes": ["33"],
        "capital": "Paris",
        "altSpellings": ["FR", "French Republic", "RÃ©publique franÃ§aise"],
        "region": "Western Europe",
        "continent": "Europe",
        "population": 66710000,
        "latlng": [46.0, 2.0],
        "demonym": "French",
        "area": 640679.0,
        "gini": 32.7,
        "timezones": [
            "UTC-10:00",
            "UTC-09:30",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC+01:00",
            "UTC+02:00",
            "UTC+03:00",
            "UTC+04:00",
            "UTC+05:00",
            "UTC+10:00",
            "UTC+11:00",
            "UTC+12:00"
        ],
        "borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
        "nativeName": "France",
        "numericCode": "250",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "FranÃ§a",
            "pt": "FranÃ§a",
            "nl": "Frankrijk",
            "hr": "Francuska",
            "fa": "ÙØ±Ø§Ù†Ø³Ù‡",
            "de": "Frankreich",
            "es": "Francia",
            "fr": "France",
            "ja": "ãƒ•ãƒ©ãƒ³ã‚¹",
            "it": "Francia",
            "hu": "FranciaorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/fra.svg",
            "https://restcountries.com/data/png/fra.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "FRA",
        "independent": true
    },
    {
        "name": "French Guiana",
        "topLevelDomain": [".gf"],
        "alpha2Code": "GF",
        "alpha3Code": "GUF",
        "callingCodes": ["594"],
        "capital": "Cayenne",
        "altSpellings": ["GF", "Guiana", "Guyane"],
        "region": "South America",
        "continent": "Americas",
        "population": 254541,
        "latlng": [4.0, -53.0],
        "timezones": ["UTC-03:00"],
        "borders": ["BRA", "SUR"],
        "nativeName": "Guyane franÃ§aise",
        "numericCode": "254",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Guiana Francesa",
            "pt": "Guiana Francesa",
            "nl": "Frans-Guyana",
            "hr": "Francuska Gvajana",
            "fa": "Ú¯ÙˆÛŒØ§Ù† ÙØ±Ø§Ù†Ø³Ù‡",
            "de": "FranzÃ¶sisch Guyana",
            "es": "Guayana Francesa",
            "fr": "Guayane",
            "ja": "ãƒ•ãƒ©ãƒ³ã‚¹é ˜ã‚®ã‚¢ãƒŠ",
            "it": "Guyana francese",
            "hu": "Francia Guyana"
        },
        "flags": [
            "https://restcountries.com/data/guf.svg",
            "https://restcountries.com/data/png/guf.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            },
            { "acronym": "EU", "name": "European Union" }
        ],
        "independent": false
    },
    {
        "name": "French Polynesia",
        "topLevelDomain": [".pf"],
        "alpha2Code": "PF",
        "alpha3Code": "PYF",
        "callingCodes": ["689"],
        "capital": "PapeetÄ“",
        "altSpellings": [
            "PF",
            "PolynÃ©sie franÃ§aise",
            "French Polynesia",
            "PÅrÄ«netia FarÄni"
        ],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 271800,
        "latlng": [-15.0, -140.0],
        "demonym": "French Polynesian",
        "area": 4167.0,
        "timezones": ["UTC-10:00", "UTC-09:30", "UTC-09:00"],
        "nativeName": "PolynÃ©sie franÃ§aise",
        "numericCode": "258",
        "currencies": [{ "code": "XPF", "name": "CFP franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "PolinÃ©sia Francesa",
            "pt": "PolinÃ©sia Francesa",
            "nl": "Frans-PolynesiÃ«",
            "hr": "Francuska Polinezija",
            "fa": "Ù¾Ù„ÛŒâ€ŒÙ†Ø²ÛŒ ÙØ±Ø§Ù†Ø³Ù‡",
            "de": "FranzÃ¶sisch-Polynesien",
            "es": "Polinesia Francesa",
            "fr": "PolynÃ©sie franÃ§aise",
            "ja": "ãƒ•ãƒ©ãƒ³ã‚¹é ˜ãƒãƒªãƒã‚·ã‚¢",
            "it": "Polinesia Francese",
            "hu": "Francia PolinÃ©zia"
        },
        "flags": [
            "https://restcountries.com/data/pyf.svg",
            "https://restcountries.com/data/png/pyf.png"
        ],
        "independent": false
    },
    {
        "name": "French Southern Territories",
        "topLevelDomain": [".tf"],
        "alpha2Code": "TF",
        "alpha3Code": "ATF",
        "callingCodes": ["262"],
        "capital": "Port-aux-FranÃ§ais",
        "altSpellings": ["TF"],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 140,
        "latlng": [-49.25, 69.167],
        "demonym": "French",
        "area": 7747.0,
        "timezones": ["UTC+05:00"],
        "nativeName": "Territoire des Terres australes et antarctiques franÃ§aises",
        "numericCode": "260",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Terras Austrais e AntÃ¡rticas Francesas",
            "pt": "Terras Austrais e AntÃ¡rticas Francesas",
            "nl": "Franse Gebieden in de zuidelijke Indische Oceaan",
            "hr": "Francuski juÅ¾ni i antarktiÄki teritoriji",
            "fa": "Ø³Ø±Ø²Ù…ÛŒÙ†â€ŒÙ‡Ø§ÛŒ Ø¬Ù†ÙˆØ¨ÛŒ Ùˆ Ø¬Ù†ÙˆØ¨Ú¯Ø§Ù†ÛŒ ÙØ±Ø§Ù†Ø³Ù‡",
            "de": "FranzÃ¶sische SÃ¼d- und Antarktisgebiete",
            "es": "Tierras Australes y AntÃ¡rticas Francesas",
            "fr": "Terres australes et antarctiques franÃ§aises",
            "ja": "ãƒ•ãƒ©ãƒ³ã‚¹é ˜å—æ–¹ãƒ»å—æ¥µåœ°åŸŸ",
            "it": "Territori Francesi del Sud",
            "hu": "Francia dÃ©li Ã©s antarktiszi terÃ¼letek"
        },
        "flags": [
            "https://restcountries.com/data/atf.svg",
            "https://restcountries.com/data/png/atf.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Gabon",
        "topLevelDomain": [".ga"],
        "alpha2Code": "GA",
        "alpha3Code": "GAB",
        "callingCodes": ["241"],
        "capital": "Libreville",
        "altSpellings": ["GA", "Gabonese Republic", "RÃ©publique Gabonaise"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 1802278,
        "latlng": [-1.0, 11.75],
        "demonym": "Gabonese",
        "area": 267668.0,
        "gini": 41.5,
        "timezones": ["UTC+01:00"],
        "borders": ["CMR", "COG", "GNQ"],
        "nativeName": "Gabon",
        "numericCode": "266",
        "currencies": [
            { "code": "XAF", "name": "Central African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "GabÃ£o",
            "pt": "GabÃ£o",
            "nl": "Gabon",
            "hr": "Gabon",
            "fa": "Ú¯Ø§Ø¨Ù†",
            "de": "Gabun",
            "es": "GabÃ³n",
            "fr": "Gabon",
            "ja": "ã‚¬ãƒœãƒ³",
            "it": "Gabon",
            "hu": "Gabon"
        },
        "flags": [
            "https://restcountries.com/data/gab.svg",
            "https://restcountries.com/data/png/gab.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GAB",
        "independent": true
    },
    {
        "name": "Gambia",
        "topLevelDomain": [".gm"],
        "alpha2Code": "GM",
        "alpha3Code": "GMB",
        "callingCodes": ["220"],
        "capital": "Banjul",
        "altSpellings": ["GM", "Republic of the Gambia"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 1882450,
        "latlng": [13.46666666, -16.56666666],
        "demonym": "Gambian",
        "area": 11295.0,
        "timezones": ["UTC+00:00"],
        "borders": ["SEN"],
        "nativeName": "Gambia",
        "numericCode": "270",
        "currencies": [{ "code": "GMD", "name": "Gambian dalasi", "symbol": "D" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "GÃ¢mbia",
            "pt": "GÃ¢mbia",
            "nl": "Gambia",
            "hr": "Gambija",
            "fa": "Ú¯Ø§Ù…Ø¨ÛŒØ§",
            "de": "Gambia",
            "es": "Gambia",
            "fr": "Gambie",
            "ja": "ã‚¬ãƒ³ãƒ“ã‚¢",
            "it": "Gambia",
            "hu": "Gambia"
        },
        "flags": [
            "https://restcountries.com/data/gmb.svg",
            "https://restcountries.com/data/png/gmb.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GAM",
        "independent": true
    },
    {
        "name": "Georgia",
        "topLevelDomain": [".ge"],
        "alpha2Code": "GE",
        "alpha3Code": "GEO",
        "callingCodes": ["995"],
        "capital": "Tbilisi",
        "altSpellings": ["GE", "Sakartvelo"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 3720400,
        "latlng": [42.0, 43.5],
        "demonym": "Georgian",
        "area": 69700.0,
        "gini": 41.3,
        "timezones": ["UTC-04:00"],
        "borders": ["ARM", "AZE", "RUS", "TUR"],
        "nativeName": "áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ",
        "numericCode": "268",
        "currencies": [{ "code": "GEL", "name": "Georgian Lari", "symbol": "áƒš" }],
        "languages": [
            {
                "iso639_1": "ka",
                "iso639_2": "kat",
                "name": "Georgian",
                "nativeName": "áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜"
            }
        ],
        "translations": {
            "br": "GeÃ³rgia",
            "pt": "GeÃ³rgia",
            "nl": "GeorgiÃ«",
            "hr": "Gruzija",
            "fa": "Ú¯Ø±Ø¬Ø³ØªØ§Ù†",
            "de": "Georgien",
            "es": "Georgia",
            "fr": "GÃ©orgie",
            "ja": "ã‚°ãƒ«ã‚¸ã‚¢",
            "it": "Georgia",
            "hu": "GrÃºzia"
        },
        "flags": [
            "https://restcountries.com/data/geo.svg",
            "https://restcountries.com/data/png/geo.png"
        ],
        "cioc": "GEO",
        "independent": true
    },
    {
        "name": "Germany",
        "topLevelDomain": [".de"],
        "alpha2Code": "DE",
        "alpha3Code": "DEU",
        "callingCodes": ["49"],
        "capital": "Berlin",
        "altSpellings": [
            "DE",
            "Federal Republic of Germany",
            "Bundesrepublik Deutschland"
        ],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 81770900,
        "latlng": [51.0, 9.0],
        "demonym": "German",
        "area": 357114.0,
        "gini": 28.3,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
        "nativeName": "Deutschland",
        "numericCode": "276",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "translations": {
            "br": "Alemanha",
            "pt": "Alemanha",
            "nl": "Duitsland",
            "hr": "NjemaÄka",
            "fa": "Ø¢Ù„Ù…Ø§Ù†",
            "de": "Deutschland",
            "es": "Alemania",
            "fr": "Allemagne",
            "ja": "ãƒ‰ã‚¤ãƒ„",
            "it": "Germania",
            "hu": "GrÃºzia"
        },
        "flags": [
            "https://restcountries.com/data/deu.svg",
            "https://restcountries.com/data/png/deu.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "GER",
        "independent": true
    },
    {
        "name": "Ghana",
        "topLevelDomain": [".gh"],
        "alpha2Code": "GH",
        "alpha3Code": "GHA",
        "callingCodes": ["233"],
        "capital": "Accra",
        "altSpellings": ["GH"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 27670174,
        "latlng": [8.0, -2.0],
        "demonym": "Ghanaian",
        "area": 238533.0,
        "gini": 42.8,
        "timezones": ["UTC"],
        "borders": ["BFA", "CIV", "TGO"],
        "nativeName": "Ghana",
        "numericCode": "288",
        "currencies": [{ "code": "GHS", "name": "Ghanaian cedi", "symbol": "â‚µ" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Gana",
            "pt": "Gana",
            "nl": "Ghana",
            "hr": "Gana",
            "fa": "ØºÙ†Ø§",
            "de": "Ghana",
            "es": "Ghana",
            "fr": "Ghana",
            "ja": "ã‚¬ãƒ¼ãƒŠ",
            "it": "Ghana",
            "hu": "GhÃ¡na"
        },
        "flags": [
            "https://restcountries.com/data/gha.svg",
            "https://restcountries.com/data/png/gha.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GHA",
        "independent": true
    },
    {
        "name": "Gibraltar",
        "topLevelDomain": [".gi"],
        "alpha2Code": "GI",
        "alpha3Code": "GIB",
        "callingCodes": ["350"],
        "capital": "Gibraltar",
        "altSpellings": ["GI"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 33140,
        "latlng": [36.13333333, -5.35],
        "demonym": "Gibraltar",
        "area": 6.0,
        "timezones": ["UTC+01:00"],
        "borders": ["ESP"],
        "nativeName": "Gibraltar",
        "numericCode": "292",
        "currencies": [
            { "code": "GIP", "name": "Gibraltar pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Gibraltar",
            "pt": "Gibraltar",
            "nl": "Gibraltar",
            "hr": "Gibraltar",
            "fa": "Ø¬Ø¨Ù„â€ŒØ·Ø§Ø±Ù‚",
            "de": "Gibraltar",
            "es": "Gibraltar",
            "fr": "Gibraltar",
            "ja": "ã‚¸ãƒ–ãƒ©ãƒ«ã‚¿ãƒ«",
            "it": "Gibilterra",
            "hu": "GibraltÃ¡r"
        },
        "flags": [
            "https://restcountries.com/data/gib.svg",
            "https://restcountries.com/data/png/gib.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "independent": false
    },
    {
        "name": "Greece",
        "topLevelDomain": [".gr"],
        "alpha2Code": "GR",
        "alpha3Code": "GRC",
        "callingCodes": ["30"],
        "capital": "Athens",
        "altSpellings": [
            "GR",
            "EllÃ¡da",
            "Hellenic Republic",
            "Î•Î»Î»Î·Î½Î¹ÎºÎ® Î”Î·Î¼Î¿ÎºÏÎ±Ï„Î¯Î±"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 10858018,
        "latlng": [39.0, 22.0],
        "demonym": "Greek",
        "area": 131990.0,
        "gini": 34.3,
        "timezones": ["UTC+02:00"],
        "borders": ["ALB", "BGR", "TUR", "MKD"],
        "nativeName": "Î•Î»Î»Î¬Î´Î±",
        "numericCode": "300",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "el",
                "iso639_2": "ell",
                "name": "Greek (modern)",
                "nativeName": "ÎµÎ»Î»Î·Î½Î¹ÎºÎ¬"
            }
        ],
        "translations": {
            "br": "GrÃ©cia",
            "pt": "GrÃ©cia",
            "nl": "Griekenland",
            "hr": "GrÄka",
            "fa": "ÛŒÙˆÙ†Ø§Ù†",
            "de": "Griechenland",
            "es": "Grecia",
            "fr": "GrÃ¨ce",
            "ja": "ã‚®ãƒªã‚·ãƒ£",
            "it": "Grecia",
            "hu": "GÃ¶rÃ¶gorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/grc.svg",
            "https://restcountries.com/data/png/grc.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "GRE",
        "independent": true
    },
    {
        "name": "Greenland",
        "topLevelDomain": [".gl"],
        "alpha2Code": "GL",
        "alpha3Code": "GRL",
        "callingCodes": ["299"],
        "capital": "Nuuk",
        "altSpellings": ["GL", "GrÃ¸nland"],
        "region": "Northern America",
        "continent": "Americas",
        "population": 55847,
        "latlng": [72.0, -40.0],
        "demonym": "Greenlandic",
        "area": 2166086.0,
        "timezones": ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC+00:00"],
        "nativeName": "Kalaallit Nunaat",
        "numericCode": "304",
        "currencies": [{ "code": "DKK", "name": "Danish krone", "symbol": "kr" }],
        "languages": [
            {
                "iso639_1": "kl",
                "iso639_2": "kal",
                "name": "Kalaallisut",
                "nativeName": "kalaallisut"
            }
        ],
        "translations": {
            "br": "GroelÃ¢ndia",
            "pt": "GronelÃ¢ndia",
            "nl": "Groenland",
            "hr": "Grenland",
            "fa": "Ú¯Ø±ÛŒÙ†Ù„Ù†Ø¯",
            "de": "GrÃ¶nland",
            "es": "Groenlandia",
            "fr": "Groenland",
            "ja": "ã‚°ãƒªãƒ¼ãƒ³ãƒ©ãƒ³ãƒ‰",
            "it": "Groenlandia",
            "hu": "GrÃ¶nland"
        },
        "flags": [
            "https://restcountries.com/data/grl.svg",
            "https://restcountries.com/data/png/grl.png"
        ],
        "independent": false
    },
    {
        "name": "Grenada",
        "topLevelDomain": [".gd"],
        "alpha2Code": "GD",
        "alpha3Code": "GRD",
        "callingCodes": ["1"],
        "capital": "St. George's",
        "altSpellings": ["GD"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 103328,
        "latlng": [12.11666666, -61.66666666],
        "demonym": "Grenadian",
        "area": 344.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Grenada",
        "numericCode": "308",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Granada",
            "pt": "Granada",
            "nl": "Grenada",
            "hr": "Grenada",
            "fa": "Ú¯Ø±Ù†Ø§Ø¯Ø§",
            "de": "Grenada",
            "es": "Grenada",
            "fr": "Grenade",
            "ja": "ã‚°ãƒ¬ãƒŠãƒ€",
            "it": "Grenada",
            "hu": "Grenada"
        },
        "flags": [
            "https://restcountries.com/data/grd.svg",
            "https://restcountries.com/data/png/grd.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "GRN",
        "independent": true
    },
    {
        "name": "Guadeloupe",
        "topLevelDomain": [".gp"],
        "alpha2Code": "GP",
        "alpha3Code": "GLP",
        "callingCodes": ["590"],
        "capital": "Basse-Terre",
        "altSpellings": ["GP", "Gwadloup"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 400132,
        "latlng": [16.25, -61.583333],
        "demonym": "Guadeloupian",
        "timezones": ["UTC-04:00"],
        "nativeName": "Guadeloupe",
        "numericCode": "312",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Guadalupe",
            "pt": "Guadalupe",
            "nl": "Guadeloupe",
            "hr": "Gvadalupa",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ú¯ÙˆØ§Ø¯Ù„ÙˆÙ¾",
            "de": "Guadeloupe",
            "es": "Guadalupe",
            "fr": "Guadeloupe",
            "ja": "ã‚°ã‚¢ãƒ‰ãƒ«ãƒ¼ãƒ—",
            "it": "Guadeloupa",
            "hu": "Guadeloupe"
        },
        "flags": [
            "https://restcountries.com/data/glp.svg",
            "https://restcountries.com/data/png/glp.png"
        ],
        "independent": false
    },
    {
        "name": "Guam",
        "topLevelDomain": [".gu"],
        "alpha2Code": "GU",
        "alpha3Code": "GUM",
        "callingCodes": ["1"],
        "capital": "HagÃ¥tÃ±a",
        "altSpellings": ["GU", "GuÃ¥hÃ¥n"],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 184200,
        "latlng": [13.46666666, 144.78333333],
        "demonym": "Guamanian",
        "area": 549.0,
        "timezones": ["UTC+10:00"],
        "nativeName": "Guam",
        "numericCode": "316",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ch",
                "iso639_2": "cha",
                "name": "Chamorro",
                "nativeName": "Chamoru"
            },
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Guam",
            "pt": "Guame",
            "nl": "Guam",
            "hr": "Guam",
            "fa": "Ú¯ÙˆØ§Ù…",
            "de": "Guam",
            "es": "Guam",
            "fr": "Guam",
            "ja": "ã‚°ã‚¢ãƒ ",
            "it": "Guam",
            "hu": "Guam"
        },
        "flags": [
            "https://restcountries.com/data/gum.svg",
            "https://restcountries.com/data/png/gum.png"
        ],
        "cioc": "GUM",
        "independent": false
    },
    {
        "name": "Guatemala",
        "topLevelDomain": [".gt"],
        "alpha2Code": "GT",
        "alpha3Code": "GTM",
        "callingCodes": ["502"],
        "capital": "Guatemala City",
        "altSpellings": ["GT"],
        "region": "Central America",
        "continent": "Americas",
        "population": 16176133,
        "latlng": [15.5, -90.25],
        "demonym": "Guatemalan",
        "area": 108889.0,
        "gini": 55.9,
        "timezones": ["UTC-06:00"],
        "borders": ["BLZ", "SLV", "HND", "MEX"],
        "nativeName": "Guatemala",
        "numericCode": "320",
        "currencies": [
            { "code": "GTQ", "name": "Guatemalan quetzal", "symbol": "Q" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Guatemala",
            "pt": "Guatemala",
            "nl": "Guatemala",
            "hr": "Gvatemala",
            "fa": "Ú¯ÙˆØ§ØªÙ…Ø§Ù„Ø§",
            "de": "Guatemala",
            "es": "Guatemala",
            "fr": "Guatemala",
            "ja": "ã‚°ã‚¢ãƒ†ãƒžãƒ©",
            "it": "Guatemala",
            "hu": "Guatemala"
        },
        "flags": [
            "https://restcountries.com/data/gtm.svg",
            "https://restcountries.com/data/png/gtm.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "GUA",
        "independent": true
    },
    {
        "name": "Guernsey",
        "topLevelDomain": [".gg"],
        "alpha2Code": "GG",
        "alpha3Code": "GGY",
        "callingCodes": ["44"],
        "capital": "St. Peter Port",
        "altSpellings": ["GG", "Bailiwick of Guernsey", "Bailliage de Guernesey"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 62999,
        "latlng": [49.46666666, -2.58333333],
        "demonym": "Channel Islander",
        "area": 78.0,
        "timezones": ["UTC+00:00"],
        "nativeName": "Guernsey",
        "numericCode": "831",
        "currencies": [
            { "code": "GBP", "name": "British pound", "symbol": "Â£" },
            { "code": "(none)", "name": "Guernsey pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Guernsey",
            "pt": "Guernsey",
            "nl": "Guernsey",
            "hr": "Guernsey",
            "fa": "Ú¯Ø±Ù†Ø²ÛŒ",
            "de": "Guernsey",
            "es": "Guernsey",
            "fr": "Guernesey",
            "ja": "ã‚¬ãƒ¼ãƒ³ã‚¸ãƒ¼",
            "it": "Guernsey",
            "hu": "Guernsey"
        },
        "flags": [
            "https://restcountries.com/data/ggy.svg",
            "https://restcountries.com/data/png/ggy.png"
        ],
        "independent": false
    },
    {
        "name": "Guinea",
        "topLevelDomain": [".gn"],
        "alpha2Code": "GN",
        "alpha3Code": "GIN",
        "callingCodes": ["224"],
        "capital": "Conakry",
        "altSpellings": ["GN", "Republic of Guinea", "RÃ©publique de GuinÃ©e"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 12947000,
        "latlng": [11.0, -10.0],
        "demonym": "Guinean",
        "area": 245857.0,
        "gini": 39.4,
        "timezones": ["UTC"],
        "borders": ["CIV", "GNB", "LBR", "MLI", "SEN", "SLE"],
        "nativeName": "GuinÃ©e",
        "numericCode": "324",
        "currencies": [{ "code": "GNF", "name": "Guinean franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ff",
                "iso639_2": "ful",
                "name": "Fula",
                "nativeName": "Fulfulde"
            }
        ],
        "translations": {
            "br": "GuinÃ©",
            "pt": "GuinÃ©",
            "nl": "Guinee",
            "hr": "Gvineja",
            "fa": "Ú¯ÛŒÙ†Ù‡",
            "de": "Guinea",
            "es": "Guinea",
            "fr": "GuinÃ©e",
            "ja": "ã‚®ãƒ‹ã‚¢",
            "it": "Guinea",
            "hu": "Guinea"
        },
        "flags": [
            "https://restcountries.com/data/gin.svg",
            "https://restcountries.com/data/png/gin.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GUI",
        "independent": true
    },
    {
        "name": "Guinea-Bissau",
        "topLevelDomain": [".gw"],
        "alpha2Code": "GW",
        "alpha3Code": "GNB",
        "callingCodes": ["245"],
        "capital": "Bissau",
        "altSpellings": [
            "GW",
            "Republic of Guinea-Bissau",
            "RepÃºblica da GuinÃ©-Bissau"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 1547777,
        "latlng": [12.0, -15.0],
        "demonym": "Guinea-Bissauan",
        "area": 36125.0,
        "gini": 35.5,
        "timezones": ["UTC"],
        "borders": ["GIN", "SEN"],
        "nativeName": "GuinÃ©-Bissau",
        "numericCode": "624",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "GuinÃ©-Bissau",
            "pt": "GuinÃ©-Bissau",
            "nl": "Guinee-Bissau",
            "hr": "Gvineja Bisau",
            "fa": "Ú¯ÛŒÙ†Ù‡ Ø¨ÛŒØ³Ø§Ø¦Ùˆ",
            "de": "Guinea-Bissau",
            "es": "Guinea-BisÃ¡u",
            "fr": "GuinÃ©e-Bissau",
            "ja": "ã‚®ãƒ‹ã‚¢ãƒ“ã‚µã‚¦",
            "it": "Guinea-Bissau",
            "hu": "Bissau-Guinea"
        },
        "flags": [
            "https://restcountries.com/data/gnb.svg",
            "https://restcountries.com/data/png/gnb.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "GBS",
        "independent": true
    },
    {
        "name": "Guyana",
        "topLevelDomain": [".gy"],
        "alpha2Code": "GY",
        "alpha3Code": "GUY",
        "callingCodes": ["592"],
        "capital": "Georgetown",
        "altSpellings": ["GY", "Co-operative Republic of Guyana"],
        "region": "South America",
        "continent": "Americas",
        "population": 746900,
        "latlng": [5.0, -59.0],
        "demonym": "Guyanese",
        "area": 214969.0,
        "gini": 44.5,
        "timezones": ["UTC-04:00"],
        "borders": ["BRA", "SUR", "VEN"],
        "nativeName": "Guyana",
        "numericCode": "328",
        "currencies": [{ "code": "GYD", "name": "Guyanese dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Guiana",
            "pt": "Guiana",
            "nl": "Guyana",
            "hr": "Gvajana",
            "fa": "Ú¯ÙˆÛŒØ§Ù†",
            "de": "Guyana",
            "es": "Guyana",
            "fr": "Guyane",
            "ja": "ã‚¬ã‚¤ã‚¢ãƒŠ",
            "it": "Guyana",
            "hu": "Guyana"
        },
        "flags": [
            "https://restcountries.com/data/guy.svg",
            "https://restcountries.com/data/png/guy.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "GUY",
        "independent": true
    },
    {
        "name": "Haiti",
        "topLevelDomain": [".ht"],
        "alpha2Code": "HT",
        "alpha3Code": "HTI",
        "callingCodes": ["509"],
        "capital": "Port-au-Prince",
        "altSpellings": [
            "HT",
            "Republic of Haiti",
            "RÃ©publique d'HaÃ¯ti",
            "Repiblik Ayiti"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 11078033,
        "latlng": [19.0, -72.41666666],
        "demonym": "Haitian",
        "area": 27750.0,
        "gini": 59.2,
        "timezones": ["UTC-05:00"],
        "borders": ["DOM"],
        "nativeName": "HaÃ¯ti",
        "numericCode": "332",
        "currencies": [{ "code": "HTG", "name": "Haitian gourde", "symbol": "G" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "ht",
                "iso639_2": "hat",
                "name": "Haitian",
                "nativeName": "KreyÃ²l ayisyen"
            }
        ],
        "translations": {
            "br": "Haiti",
            "pt": "Haiti",
            "nl": "HaÃ¯ti",
            "hr": "Haiti",
            "fa": "Ù‡Ø§Ø¦ÛŒØªÛŒ",
            "de": "Haiti",
            "es": "Haiti",
            "fr": "HaÃ¯ti",
            "ja": "ãƒã‚¤ãƒ",
            "it": "Haiti",
            "hu": "Haiti"
        },
        "flags": [
            "https://restcountries.com/data/hti.svg",
            "https://restcountries.com/data/png/hti.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "HAI",
        "independent": true
    },
    {
        "name": "Heard Island and McDonald Islands",
        "topLevelDomain": [".hm", ".aq"],
        "alpha2Code": "HM",
        "alpha3Code": "HMD",
        "callingCodes": ["672"],
        "altSpellings": ["HM"],
        "population": 0,
        "latlng": [-53.1, 72.51666666],
        "demonym": "Heard and McDonald Islander",
        "area": 412.0,
        "timezones": ["UTC+05:00"],
        "nativeName": "Heard Island and McDonald Islands",
        "numericCode": "334",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilha Heard e Ilhas McDonald",
            "pt": "Ilha Heard e Ilhas McDonald",
            "nl": "Heard- en McDonaldeilanden",
            "hr": "Otok Heard i otoÄje McDonald",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ù‡Ø±Ø¯ Ùˆ Ø¬Ø²Ø§ÛŒØ± Ù…Ú©â€ŒØ¯ÙˆÙ†Ø§Ù„Ø¯",
            "de": "Heard und die McDonaldinseln",
            "es": "Islas Heard y McDonald",
            "fr": "ÃŽles Heard-et-MacDonald",
            "ja": "ãƒãƒ¼ãƒ‰å³¶ã¨ãƒžã‚¯ãƒ‰ãƒŠãƒ«ãƒ‰è«¸å³¶",
            "it": "Isole Heard e McDonald",
            "hu": "Heard-sziget Ã©s McDonald-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/hmd.svg",
            "https://restcountries.com/data/png/hmd.png"
        ],
        "independent": false
    },
    {
        "name": "Vatican City",
        "topLevelDomain": [".va"],
        "alpha2Code": "VA",
        "alpha3Code": "VAT",
        "callingCodes": ["379"],
        "capital": "Rome",
        "altSpellings": ["Vatican", "The Vatican"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 451,
        "latlng": [41.9, 12.45],
        "demonym": "Vatican",
        "area": 0.44,
        "timezones": ["UTC+01:00"],
        "borders": ["ITA"],
        "nativeName": "Status Civitatis Vaticanae",
        "numericCode": "336",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "la",
                "iso639_2": "lat",
                "name": "Latin",
                "nativeName": "latine"
            },
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "FranÃ§ais"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "translations": {
            "br": "Vaticano",
            "pt": "Vaticano",
            "nl": "Heilige Stoel",
            "hr": "Sveta Stolica",
            "fa": "Ø³Ø±ÛŒØ± Ù…Ù‚Ø¯Ø³",
            "de": "Heiliger Stuhl",
            "es": "Santa Sede",
            "fr": "voir Saint",
            "ja": "è–åº§",
            "it": "Santa Sede",
            "hu": "VatikÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/vat.svg",
            "https://restcountries.com/data/png/vat.png"
        ],
        "independent": true
    },
    {
        "name": "Honduras",
        "topLevelDomain": [".hn"],
        "alpha2Code": "HN",
        "alpha3Code": "HND",
        "callingCodes": ["504"],
        "capital": "Tegucigalpa",
        "altSpellings": ["HN", "Republic of Honduras", "RepÃºblica de Honduras"],
        "region": "Central America",
        "continent": "Americas",
        "population": 8576532,
        "latlng": [15.0, -86.5],
        "demonym": "Honduran",
        "area": 112492.0,
        "gini": 57.0,
        "timezones": ["UTC-06:00"],
        "borders": ["GTM", "SLV", "NIC"],
        "nativeName": "Honduras",
        "numericCode": "340",
        "currencies": [
            { "code": "HNL", "name": "Honduran lempira", "symbol": "L" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Honduras",
            "pt": "Honduras",
            "nl": "Honduras",
            "hr": "Honduras",
            "fa": "Ù‡Ù†Ø¯ÙˆØ±Ø§Ø³",
            "de": "Honduras",
            "es": "Honduras",
            "fr": "Honduras",
            "ja": "ãƒ›ãƒ³ã‚¸ãƒ¥ãƒ©ã‚¹",
            "it": "Honduras",
            "hu": "Honduras"
        },
        "flags": [
            "https://restcountries.com/data/hnd.svg",
            "https://restcountries.com/data/png/hnd.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "HON",
        "independent": true
    },
    {
        "name": "Hungary",
        "topLevelDomain": [".hu"],
        "alpha2Code": "HU",
        "alpha3Code": "HUN",
        "callingCodes": ["36"],
        "capital": "Budapest",
        "altSpellings": ["HU"],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 9823000,
        "latlng": [47.0, 20.0],
        "demonym": "Hungarian",
        "area": 93028.0,
        "gini": 31.2,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"],
        "nativeName": "MagyarorszÃ¡g",
        "numericCode": "348",
        "currencies": [
            { "code": "HUF", "name": "Hungarian forint", "symbol": "Ft" }
        ],
        "languages": [
            {
                "iso639_1": "hu",
                "iso639_2": "hun",
                "name": "Hungarian",
                "nativeName": "magyar"
            }
        ],
        "translations": {
            "br": "Hungria",
            "pt": "Hungria",
            "nl": "Hongarije",
            "hr": "MaÄ‘arska",
            "fa": "Ù…Ø¬Ø§Ø±Ø³ØªØ§Ù†",
            "de": "Ungarn",
            "es": "HungrÃ­a",
            "fr": "Hongrie",
            "ja": "ãƒãƒ³ã‚¬ãƒªãƒ¼",
            "it": "Ungheria",
            "hu": "MagyarorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/hun.svg",
            "https://restcountries.com/data/png/hun.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "HUN",
        "independent": true
    },
    {
        "name": "Iceland",
        "topLevelDomain": [".is"],
        "alpha2Code": "IS",
        "alpha3Code": "ISL",
        "callingCodes": ["354"],
        "capital": "ReykjavÃ­k",
        "altSpellings": [
            "IS",
            "Island",
            "Republic of Iceland",
            "LÃ½Ã°veldiÃ° Ãsland"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 334300,
        "latlng": [65.0, -18.0],
        "demonym": "Icelander",
        "area": 103000.0,
        "gini": 28.0,
        "timezones": ["UTC"],
        "nativeName": "Ãsland",
        "numericCode": "352",
        "currencies": [
            { "code": "ISK", "name": "Icelandic krÃ³na", "symbol": "kr" }
        ],
        "languages": [
            {
                "iso639_1": "is",
                "iso639_2": "isl",
                "name": "Icelandic",
                "nativeName": "Ãslenska"
            }
        ],
        "translations": {
            "br": "IslÃ¢ndia",
            "pt": "IslÃ¢ndia",
            "nl": "IJsland",
            "hr": "Island",
            "fa": "Ø§ÛŒØ³Ù„Ù†Ø¯",
            "de": "Island",
            "es": "Islandia",
            "fr": "Islande",
            "ja": "ã‚¢ã‚¤ã‚¹ãƒ©ãƒ³ãƒ‰",
            "it": "Islanda",
            "hu": "Izland"
        },
        "flags": [
            "https://restcountries.com/data/isl.svg",
            "https://restcountries.com/data/png/isl.png"
        ],
        "regionalBlocs": [
            { "acronym": "EFTA", "name": "European Free Trade Association" }
        ],
        "cioc": "ISL",
        "independent": true
    },
    {
        "name": "India",
        "topLevelDomain": [".in"],
        "alpha2Code": "IN",
        "alpha3Code": "IND",
        "callingCodes": ["91"],
        "capital": "New Delhi",
        "altSpellings": ["IN", "BhÄrat", "Republic of India", "Bharat Ganrajya"],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 1378712489,
        "latlng": [20.0, 77.0],
        "demonym": "Indian",
        "area": 3287590.0,
        "gini": 33.4,
        "timezones": ["UTC+05:30"],
        "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
        "nativeName": "à¤­à¤¾à¤°à¤¤",
        "numericCode": "356",
        "currencies": [{ "code": "INR", "name": "Indian rupee", "symbol": "â‚¹" }],
        "languages": [
            {
                "iso639_1": "hi",
                "iso639_2": "hin",
                "name": "Hindi",
                "nativeName": "à¤¹à¤¿à¤¨à¥à¤¦à¥€"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ãndia",
            "pt": "Ãndia",
            "nl": "India",
            "hr": "Indija",
            "fa": "Ù‡Ù†Ø¯",
            "de": "Indien",
            "es": "India",
            "fr": "Inde",
            "ja": "ã‚¤ãƒ³ãƒ‰",
            "it": "India",
            "hu": "India"
        },
        "flags": [
            "https://restcountries.com/data/ind.svg",
            "https://restcountries.com/data/png/ind.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "IND",
        "independent": true
    },
    {
        "name": "Indonesia",
        "topLevelDomain": [".id"],
        "alpha2Code": "ID",
        "alpha3Code": "IDN",
        "callingCodes": ["62"],
        "capital": "Jakarta",
        "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 258705000,
        "latlng": [-5.0, 120.0],
        "demonym": "Indonesian",
        "area": 1904569.0,
        "gini": 34.0,
        "timezones": ["UTC+07:00", "UTC+08:00", "UTC+09:00"],
        "borders": ["TLS", "MYS", "PNG"],
        "nativeName": "Indonesia",
        "numericCode": "360",
        "currencies": [
            { "code": "IDR", "name": "Indonesian rupiah", "symbol": "Rp" }
        ],
        "languages": [
            {
                "iso639_1": "id",
                "iso639_2": "ind",
                "name": "Indonesian",
                "nativeName": "Bahasa Indonesia"
            }
        ],
        "translations": {
            "br": "IndonÃ©sia",
            "pt": "IndonÃ©sia",
            "nl": "IndonesiÃ«",
            "hr": "Indonezija",
            "fa": "Ø§Ù†Ø¯ÙˆÙ†Ø²ÛŒ",
            "de": "Indonesien",
            "es": "Indonesia",
            "fr": "IndonÃ©sie",
            "ja": "ã‚¤ãƒ³ãƒ‰ãƒã‚·ã‚¢",
            "it": "Indonesia",
            "hu": "IndonÃ©zia"
        },
        "flags": [
            "https://restcountries.com/data/idn.svg",
            "https://restcountries.com/data/png/idn.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "INA",
        "independent": true
    },
    {
        "name": "Ivory Coast",
        "topLevelDomain": [".ci"],
        "alpha2Code": "CI",
        "alpha3Code": "CIV",
        "callingCodes": ["225"],
        "capital": "Yamoussoukro",
        "altSpellings": [
            "CI",
            "Ivory Coast",
            "Republic of CÃ´te d'Ivoire",
            "RÃ©publique de CÃ´te d'Ivoire"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 22671331,
        "latlng": [8.0, -5.0],
        "demonym": "Ivorian",
        "area": 322463.0,
        "gini": 41.5,
        "timezones": ["UTC"],
        "borders": ["BFA", "GHA", "GIN", "LBR", "MLI"],
        "nativeName": "CÃ´te d'Ivoire",
        "numericCode": "384",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Costa do Marfim",
            "pt": "Costa do Marfim",
            "nl": "Ivoorkust",
            "hr": "Obala Bjelokosti",
            "fa": "Ø³Ø§Ø­Ù„ Ø¹Ø§Ø¬",
            "de": "ElfenbeinkÃ¼ste",
            "es": "Costa de Marfil",
            "fr": "CÃ´te d'Ivoire",
            "ja": "ã‚³ãƒ¼ãƒˆã‚¸ãƒœãƒ¯ãƒ¼ãƒ«",
            "it": "Costa D'Avorio",
            "hu": "ElefÃ¡ntcsontpart"
        },
        "flags": [
            "https://restcountries.com/data/civ.svg",
            "https://restcountries.com/data/png/civ.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "CIV",
        "independent": true
    },
    {
        "name": "Iran (Islamic Republic of)",
        "topLevelDomain": [".ir"],
        "alpha2Code": "IR",
        "alpha3Code": "IRN",
        "callingCodes": ["98"],
        "capital": "Tehran",
        "altSpellings": [
            "IR",
            "Islamic Republic of Iran",
            "Jomhuri-ye EslÄmi-ye IrÄn"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 79369900,
        "latlng": [32.0, 53.0],
        "demonym": "Iranian",
        "area": 1648195.0,
        "gini": 38.3,
        "timezones": ["UTC+03:30"],
        "borders": ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
        "nativeName": "Ø§ÛŒØ±Ø§Ù†",
        "numericCode": "364",
        "currencies": [{ "code": "IRR", "name": "Iranian rial", "symbol": "ï·¼" }],
        "languages": [
            {
                "iso639_1": "fa",
                "iso639_2": "fas",
                "name": "Persian (Farsi)",
                "nativeName": "ÙØ§Ø±Ø³ÛŒ"
            }
        ],
        "translations": {
            "br": "IrÃ£",
            "pt": "IrÃ£o",
            "nl": "Iran",
            "hr": "Iran",
            "fa": "Ø§ÛŒØ±Ø§Ù†",
            "de": "Iran",
            "es": "Iran",
            "fr": "Iran",
            "ja": "ã‚¤ãƒ©ãƒ³ãƒ»ã‚¤ã‚¹ãƒ©ãƒ å…±å’Œå›½",
            "hu": "IrÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/irn.svg",
            "https://restcountries.com/data/png/irn.png"
        ],
        "cioc": "IRI",
        "independent": true
    },
    {
        "name": "Iraq",
        "topLevelDomain": [".iq"],
        "alpha2Code": "IQ",
        "alpha3Code": "IRQ",
        "callingCodes": ["964"],
        "capital": "Baghdad",
        "altSpellings": ["IQ", "Republic of Iraq", "JumhÅ«riyyat al-â€˜IrÄq"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 37883543,
        "latlng": [33.0, 44.0],
        "demonym": "Iraqi",
        "area": 438317.0,
        "gini": 30.9,
        "timezones": ["UTC+03:00"],
        "borders": ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
        "nativeName": "Ø§Ù„Ø¹Ø±Ø§Ù‚",
        "numericCode": "368",
        "currencies": [{ "code": "IQD", "name": "Iraqi dinar", "symbol": "Ø¹.Ø¯" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            },
            {
                "iso639_1": "ku",
                "iso639_2": "kur",
                "name": "Kurdish",
                "nativeName": "KurdÃ®"
            }
        ],
        "translations": {
            "br": "Iraque",
            "pt": "Iraque",
            "nl": "Irak",
            "hr": "Irak",
            "fa": "Ø¹Ø±Ø§Ù‚",
            "de": "Irak",
            "es": "Irak",
            "fr": "Irak",
            "ja": "ã‚¤ãƒ©ã‚¯",
            "it": "Iraq",
            "hu": "Irak"
        },
        "flags": [
            "https://restcountries.com/data/irq.svg",
            "https://restcountries.com/data/png/irq.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "IRQ",
        "independent": true
    },
    {
        "name": "Ireland",
        "topLevelDomain": [".ie"],
        "alpha2Code": "IE",
        "alpha3Code": "IRL",
        "callingCodes": ["353"],
        "capital": "Dublin",
        "altSpellings": [
            "IE",
            "Ã‰ire",
            "Republic of Ireland",
            "Poblacht na hÃ‰ireann"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 6378000,
        "latlng": [53.0, -8.0],
        "demonym": "Irish",
        "area": 70273.0,
        "gini": 34.3,
        "timezones": ["UTC"],
        "borders": ["GBR"],
        "nativeName": "Ã‰ire",
        "numericCode": "372",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "ga",
                "iso639_2": "gle",
                "name": "Irish",
                "nativeName": "Gaeilge"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Irlanda",
            "pt": "Irlanda",
            "nl": "Ierland",
            "hr": "Irska",
            "fa": "Ø§ÛŒØ±Ù„Ù†Ø¯",
            "de": "Irland",
            "es": "Irlanda",
            "fr": "Irlande",
            "ja": "ã‚¢ã‚¤ãƒ«ãƒ©ãƒ³ãƒ‰",
            "it": "Irlanda",
            "hu": "ÃrorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/irl.svg",
            "https://restcountries.com/data/png/irl.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "IRL",
        "independent": true
    },
    {
        "name": "Isle of Man",
        "topLevelDomain": [".im"],
        "alpha2Code": "IM",
        "alpha3Code": "IMN",
        "callingCodes": ["44"],
        "capital": "Douglas",
        "altSpellings": ["IM", "Ellan Vannin", "Mann", "Mannin"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 84497,
        "latlng": [54.25, -4.5],
        "demonym": "Manx",
        "area": 572.0,
        "timezones": ["UTC+00:00"],
        "nativeName": "Isle of Man",
        "numericCode": "833",
        "currencies": [
            { "code": "GBP", "name": "British pound", "symbol": "Â£" },
            { "code": "IMP[G]", "name": "Manx pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "gv",
                "iso639_2": "glv",
                "name": "Manx",
                "nativeName": "Gaelg"
            }
        ],
        "translations": {
            "br": "Ilha de Man",
            "pt": "Ilha de Man",
            "nl": "Isle of Man",
            "hr": "Otok Man",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ù…Ù†",
            "de": "Insel Man",
            "es": "Isla de Man",
            "fr": "ÃŽle de Man",
            "ja": "ãƒžãƒ³å³¶",
            "it": "Isola di Man",
            "hu": "Man"
        },
        "flags": [
            "https://restcountries.com/data/imn.svg",
            "https://restcountries.com/data/png/imn.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "independent": false
    },
    {
        "name": "Israel",
        "topLevelDomain": [".il"],
        "alpha2Code": "IL",
        "alpha3Code": "ISR",
        "callingCodes": ["972"],
        "capital": "Jerusalem",
        "altSpellings": ["IL", "State of Israel", "MedÄ«nat YisrÄ'el"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 8527400,
        "latlng": [31.5, 34.75],
        "demonym": "Israeli",
        "area": 20770.0,
        "gini": 39.2,
        "timezones": ["UTC+02:00"],
        "borders": ["EGY", "JOR", "LBN", "SYR"],
        "nativeName": "×™Ö´×©Ö°×‚×¨Ö¸×Öµ×œ",
        "numericCode": "376",
        "currencies": [
            { "code": "ILS", "name": "Israeli new shekel", "symbol": "â‚ª" }
        ],
        "languages": [
            {
                "iso639_1": "he",
                "iso639_2": "heb",
                "name": "Hebrew (modern)",
                "nativeName": "×¢×‘×¨×™×ª"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Israel",
            "pt": "Israel",
            "nl": "IsraÃ«l",
            "hr": "Izrael",
            "fa": "Ø§Ø³Ø±Ø§Ø¦ÛŒÙ„",
            "de": "Israel",
            "es": "Israel",
            "fr": "IsraÃ«l",
            "ja": "ã‚¤ã‚¹ãƒ©ã‚¨ãƒ«",
            "it": "Israele",
            "hu": "Izrael"
        },
        "flags": [
            "https://restcountries.com/data/isr.svg",
            "https://restcountries.com/data/png/isr.png"
        ],
        "cioc": "ISR",
        "independent": true
    },
    {
        "name": "Italy",
        "topLevelDomain": [".it"],
        "alpha2Code": "IT",
        "alpha3Code": "ITA",
        "callingCodes": ["39"],
        "capital": "Rome",
        "altSpellings": ["IT", "Italian Republic", "Repubblica italiana"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 60665551,
        "latlng": [42.83333333, 12.83333333],
        "demonym": "Italian",
        "area": 301336.0,
        "gini": 36.0,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
        "nativeName": "Italia",
        "numericCode": "380",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            }
        ],
        "translations": {
            "br": "ItÃ¡lia",
            "pt": "ItÃ¡lia",
            "nl": "ItaliÃ«",
            "hr": "Italija",
            "fa": "Ø§ÛŒØªØ§Ù„ÛŒØ§",
            "de": "Italien",
            "es": "Italia",
            "fr": "Italie",
            "ja": "ã‚¤ã‚¿ãƒªã‚¢",
            "it": "Italia",
            "hu": "OlaszorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/ita.svg",
            "https://restcountries.com/data/png/ita.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "ITA",
        "independent": true
    },
    {
        "name": "Jamaica",
        "topLevelDomain": [".jm"],
        "alpha2Code": "JM",
        "alpha3Code": "JAM",
        "callingCodes": ["1"],
        "capital": "Kingston",
        "altSpellings": ["JM"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 2723246,
        "latlng": [18.25, -77.5],
        "demonym": "Jamaican",
        "area": 10991.0,
        "gini": 45.5,
        "timezones": ["UTC-05:00"],
        "nativeName": "Jamaica",
        "numericCode": "388",
        "currencies": [{ "code": "JMD", "name": "Jamaican dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Jamaica",
            "pt": "Jamaica",
            "nl": "Jamaica",
            "hr": "Jamajka",
            "fa": "Ø¬Ø§Ù…Ø§Ø¦ÛŒÚ©Ø§",
            "de": "Jamaika",
            "es": "Jamaica",
            "fr": "JamaÃ¯que",
            "ja": "ã‚¸ãƒ£ãƒžã‚¤ã‚«",
            "it": "Giamaica",
            "hu": "Jamaica"
        },
        "flags": [
            "https://restcountries.com/data/jam.svg",
            "https://restcountries.com/data/png/jam.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "JAM",
        "independent": true
    },
    {
        "name": "Japan",
        "topLevelDomain": [".jp"],
        "alpha2Code": "JP",
        "alpha3Code": "JPN",
        "callingCodes": ["81"],
        "capital": "Tokyo",
        "altSpellings": ["JP", "Nippon", "Nihon"],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 126960000,
        "latlng": [36.0, 138.0],
        "demonym": "Japanese",
        "area": 377930.0,
        "gini": 38.1,
        "timezones": ["UTC+09:00"],
        "nativeName": "æ—¥æœ¬",
        "numericCode": "392",
        "currencies": [{ "code": "JPY", "name": "Japanese yen", "symbol": "Â¥" }],
        "languages": [
            {
                "iso639_1": "ja",
                "iso639_2": "jpn",
                "name": "Japanese",
                "nativeName": "æ—¥æœ¬èªž (ã«ã»ã‚“ã”)"
            }
        ],
        "translations": {
            "br": "JapÃ£o",
            "pt": "JapÃ£o",
            "nl": "Japan",
            "hr": "Japan",
            "fa": "Ú˜Ø§Ù¾Ù†",
            "de": "Japan",
            "es": "JapÃ³n",
            "fr": "Japon",
            "ja": "æ—¥æœ¬",
            "it": "Giappone",
            "hu": "JapÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/jpn.svg",
            "https://restcountries.com/data/png/jpn.png"
        ],
        "cioc": "JPN",
        "independent": true
    },
    {
        "name": "Jersey",
        "topLevelDomain": [".je"],
        "alpha2Code": "JE",
        "alpha3Code": "JEY",
        "callingCodes": ["44"],
        "capital": "Saint Helier",
        "altSpellings": [
            "JE",
            "Bailiwick of Jersey",
            "Bailliage de Jersey",
            "Bailliage dÃ© JÃ¨rri"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 100800,
        "latlng": [49.25, -2.16666666],
        "demonym": "Channel Islander",
        "area": 116.0,
        "timezones": ["UTC+01:00"],
        "nativeName": "Jersey",
        "numericCode": "832",
        "currencies": [
            { "code": "GBP", "name": "British pound", "symbol": "Â£" },
            { "code": "JEP[G]", "name": "Jersey pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Jersey",
            "pt": "Jersey",
            "nl": "Jersey",
            "hr": "Jersey",
            "fa": "Ø¬Ø±Ø²ÛŒ",
            "de": "Jersey",
            "es": "Jersey",
            "fr": "Jersey",
            "ja": "ã‚¸ãƒ£ãƒ¼ã‚¸ãƒ¼",
            "it": "Isola di Jersey",
            "hu": "Jersey"
        },
        "flags": [
            "https://restcountries.com/data/jey.svg",
            "https://restcountries.com/data/png/jey.png"
        ],
        "independent": false
    },
    {
        "name": "Jordan",
        "topLevelDomain": [".jo"],
        "alpha2Code": "JO",
        "alpha3Code": "JOR",
        "callingCodes": ["962"],
        "capital": "Amman",
        "altSpellings": [
            "JO",
            "Hashemite Kingdom of Jordan",
            "al-Mamlakah al-UrdunÄ«yah al-HÄshimÄ«yah"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 9531712,
        "latlng": [31.0, 36.0],
        "demonym": "Jordanian",
        "area": 89342.0,
        "gini": 35.4,
        "timezones": ["UTC+03:00"],
        "borders": ["IRQ", "ISR", "SAU", "SYR"],
        "nativeName": "Ø§Ù„Ø£Ø±Ø¯Ù†",
        "numericCode": "400",
        "currencies": [
            { "code": "JOD", "name": "Jordanian dinar", "symbol": "Ø¯.Ø§" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "JordÃ¢nia",
            "pt": "JordÃ¢nia",
            "nl": "JordaniÃ«",
            "hr": "Jordan",
            "fa": "Ø§Ø±Ø¯Ù†",
            "de": "Jordanien",
            "es": "Jordania",
            "fr": "Jordanie",
            "ja": "ãƒ¨ãƒ«ãƒ€ãƒ³",
            "it": "Giordania",
            "hu": "JordÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/jor.svg",
            "https://restcountries.com/data/png/jor.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "JOR",
        "independent": true
    },
    {
        "name": "Kazakhstan",
        "topLevelDomain": [".kz", ".Ò›Ð°Ð·"],
        "alpha2Code": "KZ",
        "alpha3Code": "KAZ",
        "callingCodes": ["76", "77"],
        "capital": "Nursultan",
        "altSpellings": [
            "KZ",
            "Qazaqstan",
            "ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½",
            "Republic of Kazakhstan",
            "ÒšÐ°Ð·Ð°Ò›ÑÑ‚Ð°Ð½ Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°ÑÑ‹",
            "Qazaqstan RespublÃ¯kasÄ±",
            "Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½",
            "Respublika Kazakhstan"
        ],
        "region": "Central Asia",
        "continent": "Asia",
        "population": 17753200,
        "latlng": [48.0, 68.0],
        "area": 2724900.0,
        "gini": 29.0,
        "timezones": ["UTC+05:00", "UTC+06:00"],
        "borders": ["CHN", "KGZ", "RUS", "TKM", "UZB"],
        "nativeName": "ÒšÐ°Ð·Ð°Ò›ÑÑ‚Ð°Ð½",
        "numericCode": "398",
        "currencies": [
            { "code": "KZT", "name": "Kazakhstani tenge", "symbol": "â‚¸" }
        ],
        "languages": [
            {
                "iso639_1": "kk",
                "iso639_2": "kaz",
                "name": "Kazakh",
                "nativeName": "Ò›Ð°Ð·Ð°Ò› Ñ‚Ñ–Ð»Ñ–"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "CazaquistÃ£o",
            "pt": "CazaquistÃ£o",
            "nl": "Kazachstan",
            "hr": "Kazahstan",
            "fa": "Ù‚Ø²Ø§Ù‚Ø³ØªØ§Ù†",
            "de": "Kasachstan",
            "es": "KazajistÃ¡n",
            "fr": "Kazakhstan",
            "ja": "ã‚«ã‚¶ãƒ•ã‚¹ã‚¿ãƒ³",
            "it": "Kazakistan",
            "hu": "KazahsztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/kaz.svg",
            "https://restcountries.com/data/png/kaz.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": ["EAEU"]
            }
        ],
        "cioc": "KAZ",
        "independent": false
    },
    {
        "name": "Kenya",
        "topLevelDomain": [".ke"],
        "alpha2Code": "KE",
        "alpha3Code": "KEN",
        "callingCodes": ["254"],
        "capital": "Nairobi",
        "altSpellings": ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 47251000,
        "latlng": [1.0, 38.0],
        "demonym": "Kenyan",
        "area": 580367.0,
        "gini": 47.7,
        "timezones": ["UTC+03:00"],
        "borders": ["ETH", "SOM", "SSD", "TZA", "UGA"],
        "nativeName": "Kenya",
        "numericCode": "404",
        "currencies": [
            { "code": "KES", "name": "Kenyan shilling", "symbol": "Sh" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            }
        ],
        "translations": {
            "br": "QuÃªnia",
            "pt": "QuÃ©nia",
            "nl": "Kenia",
            "hr": "Kenija",
            "fa": "Ú©Ù†ÛŒØ§",
            "de": "Kenia",
            "es": "Kenia",
            "fr": "Kenya",
            "ja": "ã‚±ãƒ‹ã‚¢",
            "it": "Kenya",
            "hu": "Kenya"
        },
        "flags": [
            "https://restcountries.com/data/ken.svg",
            "https://restcountries.com/data/png/ken.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "KEN",
        "independent": true
    },
    {
        "name": "Kiribati",
        "topLevelDomain": [".ki"],
        "alpha2Code": "KI",
        "alpha3Code": "KIR",
        "callingCodes": ["686"],
        "capital": "South Tarawa",
        "altSpellings": ["KI", "Republic of Kiribati", "Ribaberiki Kiribati"],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 113400,
        "latlng": [1.41666666, 173.0],
        "demonym": "I-Kiribati",
        "area": 811.0,
        "timezones": ["UTC+12:00", "UTC+13:00", "UTC+14:00"],
        "nativeName": "Kiribati",
        "numericCode": "296",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" },
            { "code": "(none)", "name": "Kiribati dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Kiribati",
            "pt": "QuiribÃ¡ti",
            "nl": "Kiribati",
            "hr": "Kiribati",
            "fa": "Ú©ÛŒØ±ÛŒØ¨Ø§ØªÛŒ",
            "de": "Kiribati",
            "es": "Kiribati",
            "fr": "Kiribati",
            "ja": "ã‚­ãƒªãƒã‚¹",
            "it": "Kiribati",
            "hu": "Kiribati"
        },
        "flags": [
            "https://restcountries.com/data/kir.svg",
            "https://restcountries.com/data/png/kir.png"
        ],
        "cioc": "KIR",
        "independent": true
    },
    {
        "name": "Kuwait",
        "topLevelDomain": [".kw"],
        "alpha2Code": "KW",
        "alpha3Code": "KWT",
        "callingCodes": ["965"],
        "capital": "Kuwait City",
        "altSpellings": ["KW", "State of Kuwait", "Dawlat al-Kuwait"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 4183658,
        "latlng": [29.5, 45.75],
        "demonym": "Kuwaiti",
        "area": 17818.0,
        "timezones": ["UTC+03:00"],
        "borders": ["IRN", "SAU"],
        "nativeName": "Ø§Ù„ÙƒÙˆÙŠØª",
        "numericCode": "414",
        "currencies": [
            { "code": "KWD", "name": "Kuwaiti dinar", "symbol": "Ø¯.Ùƒ" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Kuwait",
            "pt": "Kuwait",
            "nl": "Koeweit",
            "hr": "Kuvajt",
            "fa": "Ú©ÙˆÛŒØª",
            "de": "Kuwait",
            "es": "Kuwait",
            "fr": "KoweÃ¯t",
            "ja": "ã‚¯ã‚¦ã‚§ãƒ¼ãƒˆ",
            "it": "Kuwait",
            "hu": "Kuvait"
        },
        "flags": [
            "https://restcountries.com/data/kwt.svg",
            "https://restcountries.com/data/png/kwt.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "KUW",
        "independent": true
    },
    {
        "name": "Kyrgyzstan",
        "topLevelDomain": [".kg"],
        "alpha2Code": "KG",
        "alpha3Code": "KGZ",
        "callingCodes": ["996"],
        "capital": "Bishkek",
        "altSpellings": [
            "KG",
            "ÐšÐ¸Ñ€Ð³Ð¸Ð·Ð¸Ñ",
            "Kyrgyz Republic",
            "ÐšÑ‹Ñ€Ð³Ñ‹Ð· Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°ÑÑ‹",
            "Kyrgyz Respublikasy"
        ],
        "region": "Central Asia",
        "continent": "Asia",
        "population": 6047800,
        "latlng": [41.0, 75.0],
        "demonym": "Kirghiz",
        "area": 199951.0,
        "gini": 36.2,
        "timezones": ["UTC+06:00"],
        "borders": ["CHN", "KAZ", "TJK", "UZB"],
        "nativeName": "ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½",
        "numericCode": "417",
        "currencies": [{ "code": "KGS", "name": "Kyrgyzstani som", "symbol": "Ñ" }],
        "languages": [
            {
                "iso639_1": "ky",
                "iso639_2": "kir",
                "name": "Kyrgyz",
                "nativeName": "ÐšÑ‹Ñ€Ð³Ñ‹Ð·Ñ‡Ð°"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "QuirguistÃ£o",
            "pt": "QuirguizistÃ£o",
            "nl": "KirgiziÃ«",
            "hr": "Kirgistan",
            "fa": "Ù‚Ø±Ù‚ÛŒØ²Ø³ØªØ§Ù†",
            "de": "Kirgisistan",
            "es": "KirguizistÃ¡n",
            "fr": "Kirghizistan",
            "ja": "ã‚­ãƒ«ã‚®ã‚¹",
            "it": "Kirghizistan",
            "hu": "KirgizisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/kgz.svg",
            "https://restcountries.com/data/png/kgz.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": ["EAEU"]
            }
        ],
        "cioc": "KGZ",
        "independent": true
    },
    {
        "name": "Lao People's Democratic Republic",
        "topLevelDomain": [".la"],
        "alpha2Code": "LA",
        "alpha3Code": "LAO",
        "callingCodes": ["856"],
        "capital": "Vientiane",
        "altSpellings": [
            "LA",
            "Lao",
            "Laos",
            "Lao People's Democratic Republic",
            "Sathalanalat Paxathipatai Paxaxon Lao"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 6492400,
        "latlng": [18.0, 105.0],
        "demonym": "Laotian",
        "area": 236800.0,
        "gini": 36.7,
        "timezones": ["UTC+07:00"],
        "borders": ["MMR", "KHM", "CHN", "THA", "VNM"],
        "nativeName": "àºªàº²àº—àº²àº¥àº°àº™àº°àº¥àº±àº” àº›àº°àºŠàº²àº—àº´àº›àº°à»„àº• àº›àº°àºŠàº²àºŠàº»àº™àº¥àº²àº§",
        "numericCode": "418",
        "currencies": [{ "code": "LAK", "name": "Lao kip", "symbol": "â‚­" }],
        "languages": [
            {
                "iso639_1": "lo",
                "iso639_2": "lao",
                "name": "Lao",
                "nativeName": "àºžàº²àºªàº²àº¥àº²àº§"
            }
        ],
        "translations": {
            "br": "Laos",
            "pt": "Laos",
            "nl": "Laos",
            "hr": "Laos",
            "fa": "Ù„Ø§Ø¦ÙˆØ³",
            "de": "Laos",
            "es": "Laos",
            "fr": "Laos",
            "ja": "ãƒ©ã‚ªã‚¹äººæ°‘æ°‘ä¸»å…±å’Œå›½",
            "it": "Laos",
            "hu": "Laosz"
        },
        "flags": [
            "https://restcountries.com/data/lao.svg",
            "https://restcountries.com/data/png/lao.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "LAO",
        "independent": true
    },
    {
        "name": "Latvia",
        "topLevelDomain": [".lv"],
        "alpha2Code": "LV",
        "alpha3Code": "LVA",
        "callingCodes": ["371"],
        "capital": "Riga",
        "altSpellings": ["LV", "Republic of Latvia", "Latvijas Republika"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 1961600,
        "latlng": [57.0, 25.0],
        "demonym": "Latvian",
        "area": 64559.0,
        "gini": 36.6,
        "timezones": ["UTC+02:00"],
        "borders": ["BLR", "EST", "LTU", "RUS"],
        "nativeName": "Latvija",
        "numericCode": "428",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "lv",
                "iso639_2": "lav",
                "name": "Latvian",
                "nativeName": "latvieÅ¡u valoda"
            }
        ],
        "translations": {
            "br": "LetÃ´nia",
            "pt": "LetÃ³nia",
            "nl": "Letland",
            "hr": "Latvija",
            "fa": "Ù„ØªÙˆÙ†ÛŒ",
            "de": "Lettland",
            "es": "Letonia",
            "fr": "Lettonie",
            "ja": "ãƒ©ãƒˆãƒ“ã‚¢",
            "it": "Lettonia",
            "hu": "LettorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/lva.svg",
            "https://restcountries.com/data/png/lva.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "LAT",
        "independent": true
    },
    {
        "name": "Lebanon",
        "topLevelDomain": [".lb"],
        "alpha2Code": "LB",
        "alpha3Code": "LBN",
        "callingCodes": ["961"],
        "capital": "Beirut",
        "altSpellings": [
            "LB",
            "Lebanese Republic",
            "Al-JumhÅ«rÄ«yah Al-LibnÄnÄ«yah"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 5988000,
        "latlng": [33.83333333, 35.83333333],
        "demonym": "Lebanese",
        "area": 10452.0,
        "timezones": ["UTC+02:00"],
        "borders": ["ISR", "SYR"],
        "nativeName": "Ù„Ø¨Ù†Ø§Ù†",
        "numericCode": "422",
        "currencies": [
            { "code": "LBP", "name": "Lebanese pound", "symbol": "Ù„.Ù„" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "LÃ­bano",
            "pt": "LÃ­bano",
            "nl": "Libanon",
            "hr": "Libanon",
            "fa": "Ù„Ø¨Ù†Ø§Ù†",
            "de": "Libanon",
            "es": "LÃ­bano",
            "fr": "Liban",
            "ja": "ãƒ¬ãƒãƒŽãƒ³",
            "it": "Libano",
            "hu": "Libanon"
        },
        "flags": [
            "https://restcountries.com/data/lbn.svg",
            "https://restcountries.com/data/png/lbn.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "LIB",
        "independent": true
    },
    {
        "name": "Lesotho",
        "topLevelDomain": [".ls"],
        "alpha2Code": "LS",
        "alpha3Code": "LSO",
        "callingCodes": ["266"],
        "capital": "Maseru",
        "altSpellings": ["LS", "Kingdom of Lesotho", "Muso oa Lesotho"],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 1894194,
        "latlng": [-29.5, 28.5],
        "demonym": "Mosotho",
        "area": 30355.0,
        "gini": 52.5,
        "timezones": ["UTC+02:00"],
        "borders": ["ZAF"],
        "nativeName": "Lesotho",
        "numericCode": "426",
        "currencies": [
            { "code": "LSL", "name": "Lesotho loti", "symbol": "L" },
            { "code": "ZAR", "name": "South African rand", "symbol": "R" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "st",
                "iso639_2": "sot",
                "name": "Southern Sotho",
                "nativeName": "Sesotho"
            }
        ],
        "translations": {
            "br": "Lesoto",
            "pt": "Lesoto",
            "nl": "Lesotho",
            "hr": "Lesoto",
            "fa": "Ù„Ø³ÙˆØªÙˆ",
            "de": "Lesotho",
            "es": "Lesotho",
            "fr": "Lesotho",
            "ja": "ãƒ¬ã‚½ãƒˆ",
            "it": "Lesotho",
            "hu": "Lesotho"
        },
        "flags": [
            "https://restcountries.com/data/lso.svg",
            "https://restcountries.com/data/png/lso.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "LES",
        "independent": true
    },
    {
        "name": "Liberia",
        "topLevelDomain": [".lr"],
        "alpha2Code": "LR",
        "alpha3Code": "LBR",
        "callingCodes": ["231"],
        "capital": "Monrovia",
        "altSpellings": ["LR", "Republic of Liberia"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 4615000,
        "latlng": [6.5, -9.5],
        "demonym": "Liberian",
        "area": 111369.0,
        "gini": 38.2,
        "timezones": ["UTC"],
        "borders": ["GIN", "CIV", "SLE"],
        "nativeName": "Liberia",
        "numericCode": "430",
        "currencies": [{ "code": "LRD", "name": "Liberian dollar", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "LibÃ©ria",
            "pt": "LibÃ©ria",
            "nl": "Liberia",
            "hr": "Liberija",
            "fa": "Ù„ÛŒØ¨Ø±ÛŒØ§",
            "de": "Liberia",
            "es": "Liberia",
            "fr": "Liberia",
            "ja": "ãƒªãƒ™ãƒªã‚¢",
            "it": "Liberia",
            "hu": "LibÃ©ria"
        },
        "flags": [
            "https://restcountries.com/data/lbr.svg",
            "https://restcountries.com/data/png/lbr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "LBR",
        "independent": true
    },
    {
        "name": "Libya",
        "topLevelDomain": [".ly"],
        "alpha2Code": "LY",
        "alpha3Code": "LBY",
        "callingCodes": ["218"],
        "capital": "Tripoli",
        "altSpellings": ["LY", "State of Libya", "Dawlat Libya"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 6385000,
        "latlng": [25.0, 17.0],
        "demonym": "Libyan",
        "area": 1759540.0,
        "timezones": ["UTC+01:00"],
        "borders": ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
        "nativeName": "â€Ù„ÙŠØ¨ÙŠØ§",
        "numericCode": "434",
        "currencies": [
            { "code": "LYD", "name": "Libyan dinar", "symbol": "Ù„.Ø¯" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "LÃ­bia",
            "pt": "LÃ­bia",
            "nl": "LibiÃ«",
            "hr": "Libija",
            "fa": "Ù„ÛŒØ¨ÛŒ",
            "de": "Libyen",
            "es": "Libia",
            "fr": "Libye",
            "ja": "ãƒªãƒ“ã‚¢",
            "it": "Libia",
            "hu": "LÃ­bia"
        },
        "flags": [
            "https://restcountries.com/data/lby.svg",
            "https://restcountries.com/data/png/lby.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "LBA",
        "independent": true
    },
    {
        "name": "Liechtenstein",
        "topLevelDomain": [".li"],
        "alpha2Code": "LI",
        "alpha3Code": "LIE",
        "callingCodes": ["423"],
        "capital": "Vaduz",
        "altSpellings": [
            "LI",
            "Principality of Liechtenstein",
            "FÃ¼rstentum Liechtenstein"
        ],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 37623,
        "latlng": [47.26666666, 9.53333333],
        "demonym": "Liechtensteiner",
        "area": 160.0,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "CHE"],
        "nativeName": "Liechtenstein",
        "numericCode": "438",
        "currencies": [{ "code": "CHF", "name": "Swiss franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            }
        ],
        "translations": {
            "br": "Liechtenstein",
            "pt": "Listenstaine",
            "nl": "Liechtenstein",
            "hr": "LihtenÅ¡tajn",
            "fa": "Ù„ÛŒØ®ØªÙ†â€ŒØ§Ø´ØªØ§ÛŒÙ†",
            "de": "Liechtenstein",
            "es": "Liechtenstein",
            "fr": "Liechtenstein",
            "ja": "ãƒªãƒ’ãƒ†ãƒ³ã‚·ãƒ¥ã‚¿ã‚¤ãƒ³",
            "it": "Liechtenstein",
            "hu": "Liechtenstein"
        },
        "flags": [
            "https://restcountries.com/data/lie.svg",
            "https://restcountries.com/data/png/lie.png"
        ],
        "regionalBlocs": [
            { "acronym": "EFTA", "name": "European Free Trade Association" }
        ],
        "cioc": "LIE",
        "independent": true
    },
    {
        "name": "Lithuania",
        "topLevelDomain": [".lt"],
        "alpha2Code": "LT",
        "alpha3Code": "LTU",
        "callingCodes": ["370"],
        "capital": "Vilnius",
        "altSpellings": ["LT", "Republic of Lithuania", "Lietuvos Respublika"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 2872294,
        "latlng": [56.0, 24.0],
        "demonym": "Lithuanian",
        "area": 65300.0,
        "gini": 37.6,
        "timezones": ["UTC+02:00"],
        "borders": ["BLR", "LVA", "POL", "RUS"],
        "nativeName": "Lietuva",
        "numericCode": "440",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "lt",
                "iso639_2": "lit",
                "name": "Lithuanian",
                "nativeName": "lietuviÅ³ kalba"
            }
        ],
        "translations": {
            "br": "LituÃ¢nia",
            "pt": "LituÃ¢nia",
            "nl": "Litouwen",
            "hr": "Litva",
            "fa": "Ù„ÛŒØªÙˆØ§Ù†ÛŒ",
            "de": "Litauen",
            "es": "Lituania",
            "fr": "Lituanie",
            "ja": "ãƒªãƒˆã‚¢ãƒ‹ã‚¢",
            "it": "Lituania",
            "hu": "LitvÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/ltu.svg",
            "https://restcountries.com/data/png/ltu.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "LTU",
        "independent": true
    },
    {
        "name": "Luxembourg",
        "topLevelDomain": [".lu"],
        "alpha2Code": "LU",
        "alpha3Code": "LUX",
        "callingCodes": ["352"],
        "capital": "Luxembourg",
        "altSpellings": [
            "LU",
            "Grand Duchy of Luxembourg",
            "Grand-DuchÃ© de Luxembourg",
            "GroÃŸherzogtum Luxemburg",
            "Groussherzogtum LÃ«tzebuerg"
        ],
        "region": "Western Europe",
        "continent": "Europe",
        "population": 576200,
        "latlng": [49.75, 6.16666666],
        "demonym": "Luxembourger",
        "area": 2586.0,
        "gini": 30.8,
        "timezones": ["UTC+01:00"],
        "borders": ["BEL", "FRA", "DEU"],
        "nativeName": "Luxembourg",
        "numericCode": "442",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            },
            {
                "iso639_1": "lb",
                "iso639_2": "ltz",
                "name": "Luxembourgish",
                "nativeName": "LÃ«tzebuergesch"
            }
        ],
        "translations": {
            "br": "Luxemburgo",
            "pt": "Luxemburgo",
            "nl": "Luxemburg",
            "hr": "Luksemburg",
            "fa": "Ù„ÙˆÚ©Ø²Ø§Ù…Ø¨ÙˆØ±Ú¯",
            "de": "Luxemburg",
            "es": "Luxemburgo",
            "fr": "Luxembourg",
            "ja": "ãƒ«ã‚¯ã‚»ãƒ³ãƒ–ãƒ«ã‚¯",
            "it": "Lussemburgo",
            "hu": "Luxemburg"
        },
        "flags": [
            "https://restcountries.com/data/lux.svg",
            "https://restcountries.com/data/png/lux.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "LUX",
        "independent": true
    },
    {
        "name": "Macao",
        "topLevelDomain": [".mo"],
        "alpha2Code": "MO",
        "alpha3Code": "MAC",
        "callingCodes": ["853"],
        "altSpellings": [
            "MO",
            "æ¾³é—¨",
            "Macao Special Administrative Region of the People's Republic of China",
            "ä¸­è¯äººæ°‘å…±å’Œåœ‹æ¾³é–€ç‰¹åˆ¥è¡Œæ”¿å€",
            "RegiÃ£o Administrativa Especial de Macau da RepÃºblica Popular da China"
        ],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 649100,
        "latlng": [22.16666666, 113.55],
        "demonym": "Chinese",
        "area": 30.0,
        "timezones": ["UTC+08:00"],
        "borders": ["CHN"],
        "nativeName": "æ¾³é–€",
        "numericCode": "446",
        "currencies": [{ "code": "MOP", "name": "Macanese pataca", "symbol": "P" }],
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "ä¸­æ–‡ (ZhÅngwÃ©n)"
            },
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Macau",
            "pt": "Macau",
            "nl": "Macao",
            "hr": "Makao",
            "fa": "Ù…Ú©Ø§Ø¦Ùˆ",
            "de": "Macao",
            "es": "Macao",
            "fr": "Macao",
            "ja": "ãƒžã‚«ã‚ª",
            "it": "Macao",
            "hu": "MakaÃ³"
        },
        "flags": [
            "https://restcountries.com/data/mac.svg",
            "https://restcountries.com/data/png/mac.png"
        ],
        "independent": false
    },
    {
        "name": "Macedonia (the former Yugoslav Republic of)",
        "topLevelDomain": [".mk"],
        "alpha2Code": "MK",
        "alpha3Code": "MKD",
        "callingCodes": ["389"],
        "capital": "Skopje",
        "altSpellings": [
            "MK",
            "Republic of Macedonia",
            "Ð ÐµÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 2058539,
        "latlng": [41.83333333, 22.0],
        "demonym": "Macedonian",
        "area": 25713.0,
        "gini": 43.2,
        "timezones": ["UTC+01:00"],
        "borders": ["ALB", "BGR", "GRC", "KOS", "SRB"],
        "nativeName": "ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°",
        "numericCode": "807",
        "currencies": [
            { "code": "MKD", "name": "Macedonian denar", "symbol": "Ð´ÐµÐ½" }
        ],
        "languages": [
            {
                "iso639_1": "mk",
                "iso639_2": "mkd",
                "name": "Macedonian",
                "nativeName": "Ð¼Ð°ÐºÐµÐ´Ð¾Ð½ÑÐºÐ¸ Ñ˜Ð°Ð·Ð¸Ðº"
            }
        ],
        "translations": {
            "br": "MacedÃ´nia",
            "pt": "MacedÃ³nia",
            "nl": "MacedoniÃ«",
            "hr": "Makedonija",
            "de": "Mazedonien",
            "es": "Macedonia",
            "fr": "MacÃ©doine",
            "ja": "ãƒžã‚±ãƒ‰ãƒ‹ã‚¢æ—§ãƒ¦ãƒ¼ã‚´ã‚¹ãƒ©ãƒ“ã‚¢å…±å’Œå›½",
            "it": "Macedonia",
            "hu": "MacedÃ³nia"
        },
        "flags": [
            "https://restcountries.com/data/mkd.svg",
            "https://restcountries.com/data/png/mkd.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "MKD",
        "independent": true
    },
    {
        "name": "Madagascar",
        "topLevelDomain": [".mg"],
        "alpha2Code": "MG",
        "alpha3Code": "MDG",
        "callingCodes": ["261"],
        "capital": "Antananarivo",
        "altSpellings": [
            "MG",
            "Republic of Madagascar",
            "Repoblikan'i Madagasikara",
            "RÃ©publique de Madagascar"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 22434363,
        "latlng": [-20.0, 47.0],
        "demonym": "Malagasy",
        "area": 587041.0,
        "gini": 44.1,
        "timezones": ["UTC+03:00"],
        "nativeName": "Madagasikara",
        "numericCode": "450",
        "currencies": [
            { "code": "MGA", "name": "Malagasy ariary", "symbol": "Ar" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "mg",
                "iso639_2": "mlg",
                "name": "Malagasy",
                "nativeName": "fiteny malagasy"
            }
        ],
        "translations": {
            "br": "Madagascar",
            "pt": "MadagÃ¡scar",
            "nl": "Madagaskar",
            "hr": "Madagaskar",
            "fa": "Ù…Ø§Ø¯Ø§Ú¯Ø§Ø³Ú©Ø§Ø±",
            "de": "Madagaskar",
            "es": "Madagascar",
            "fr": "Madagascar",
            "ja": "ãƒžãƒ€ã‚¬ã‚¹ã‚«ãƒ«",
            "it": "Madagascar",
            "hu": "MadagaszkÃ¡r"
        },
        "flags": [
            "https://restcountries.com/data/mdg.svg",
            "https://restcountries.com/data/png/mdg.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "MAD",
        "independent": true
    },
    {
        "name": "Malawi",
        "topLevelDomain": [".mw"],
        "alpha2Code": "MW",
        "alpha3Code": "MWI",
        "callingCodes": ["265"],
        "capital": "Lilongwe",
        "altSpellings": ["MW", "Republic of Malawi"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 16832910,
        "latlng": [-13.5, 34.0],
        "demonym": "Malawian",
        "area": 118484.0,
        "gini": 39.0,
        "timezones": ["UTC+02:00"],
        "borders": ["MOZ", "TZA", "ZMB"],
        "nativeName": "Malawi",
        "numericCode": "454",
        "currencies": [
            { "code": "MWK", "name": "Malawian kwacha", "symbol": "MK" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ny",
                "iso639_2": "nya",
                "name": "Chichewa",
                "nativeName": "chiCheÅµa"
            }
        ],
        "translations": {
            "br": "Malawi",
            "pt": "MalÃ¡vi",
            "nl": "Malawi",
            "hr": "Malavi",
            "fa": "Ù…Ø§Ù„Ø§ÙˆÛŒ",
            "de": "Malawi",
            "es": "Malawi",
            "fr": "Malawi",
            "ja": "ãƒžãƒ©ã‚¦ã‚¤",
            "it": "Malawi",
            "hu": "Malawi"
        },
        "flags": [
            "https://restcountries.com/data/mwi.svg",
            "https://restcountries.com/data/png/mwi.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "MAW",
        "independent": true
    },
    {
        "name": "Malaysia",
        "topLevelDomain": [".my"],
        "alpha2Code": "MY",
        "alpha3Code": "MYS",
        "callingCodes": ["60"],
        "capital": "Kuala Lumpur",
        "altSpellings": ["MY"],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 31405416,
        "latlng": [2.5, 112.5],
        "demonym": "Malaysian",
        "area": 330803.0,
        "gini": 46.2,
        "timezones": ["UTC+08:00"],
        "borders": ["BRN", "IDN", "THA"],
        "nativeName": "Malaysia",
        "numericCode": "458",
        "currencies": [
            { "code": "MYR", "name": "Malaysian ringgit", "symbol": "RM" }
        ],
        "languages": [
            {
                "iso639_1": "ms",
                "iso639_2": "zsm",
                "name": "Malaysian",
                "nativeName": "Ø¨Ù‡Ø§Ø³ Ù…Ù„ÙŠØ³ÙŠØ§"
            }
        ],
        "translations": {
            "br": "MalÃ¡sia",
            "pt": "MalÃ¡sia",
            "nl": "MaleisiÃ«",
            "hr": "Malezija",
            "fa": "Ù…Ø§Ù„Ø²ÛŒ",
            "de": "Malaysia",
            "es": "Malasia",
            "fr": "Malaisie",
            "ja": "ãƒžãƒ¬ãƒ¼ã‚·ã‚¢",
            "it": "Malesia",
            "hu": "Malajzia"
        },
        "flags": [
            "https://restcountries.com/data/mys.svg",
            "https://restcountries.com/data/png/mys.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "MAS",
        "independent": true
    },
    {
        "name": "Maldives",
        "topLevelDomain": [".mv"],
        "alpha2Code": "MV",
        "alpha3Code": "MDV",
        "callingCodes": ["960"],
        "capital": "MalÃ©",
        "altSpellings": [
            "MV",
            "Maldive Islands",
            "Republic of the Maldives",
            "Dhivehi Raajjeyge Jumhooriyya"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 344023,
        "latlng": [3.25, 73.0],
        "demonym": "Maldivan",
        "area": 300.0,
        "gini": 37.4,
        "timezones": ["UTC+05:00"],
        "nativeName": "Maldives",
        "numericCode": "462",
        "currencies": [
            { "code": "MVR", "name": "Maldivian rufiyaa", "symbol": ".Þƒ" }
        ],
        "languages": [
            {
                "iso639_1": "dv",
                "iso639_2": "div",
                "name": "Divehi",
                "nativeName": "Þ‹Þ¨ÞˆÞ¬Þ€Þ¨"
            }
        ],
        "translations": {
            "br": "Maldivas",
            "pt": "Maldivas",
            "nl": "Maldiven",
            "hr": "Maldivi",
            "fa": "Ù…Ø§Ù„Ø¯ÛŒÙˆ",
            "de": "Malediven",
            "es": "Maldivas",
            "fr": "Maldives",
            "ja": "ãƒ¢ãƒ«ãƒ‡ã‚£ãƒ–",
            "it": "Maldive",
            "hu": "MaldÃ­v-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/mdv.svg",
            "https://restcountries.com/data/png/mdv.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "MDV",
        "independent": true
    },
    {
        "name": "Mali",
        "topLevelDomain": [".ml"],
        "alpha2Code": "ML",
        "alpha3Code": "MLI",
        "callingCodes": ["223"],
        "capital": "Bamako",
        "altSpellings": ["ML", "Republic of Mali", "RÃ©publique du Mali"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 18135000,
        "latlng": [17.0, -4.0],
        "demonym": "Malian",
        "area": 1240192.0,
        "gini": 33.0,
        "timezones": ["UTC"],
        "borders": ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
        "nativeName": "Mali",
        "numericCode": "466",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Mali",
            "pt": "Mali",
            "nl": "Mali",
            "hr": "Mali",
            "fa": "Ù…Ø§Ù„ÛŒ",
            "de": "Mali",
            "es": "Mali",
            "fr": "Mali",
            "ja": "ãƒžãƒª",
            "it": "Mali",
            "hu": "Mali"
        },
        "flags": [
            "https://restcountries.com/data/mli.svg",
            "https://restcountries.com/data/png/mli.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "MLI",
        "independent": true
    },
    {
        "name": "Malta",
        "topLevelDomain": [".mt"],
        "alpha2Code": "MT",
        "alpha3Code": "MLT",
        "callingCodes": ["356"],
        "capital": "Valletta",
        "altSpellings": ["MT", "Republic of Malta", "Repubblika ta' Malta"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 425384,
        "latlng": [35.83333333, 14.58333333],
        "demonym": "Maltese",
        "area": 316.0,
        "timezones": ["UTC+01:00"],
        "nativeName": "Malta",
        "numericCode": "470",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "mt",
                "iso639_2": "mlt",
                "name": "Maltese",
                "nativeName": "Malti"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Malta",
            "pt": "Malta",
            "nl": "Malta",
            "hr": "Malta",
            "fa": "Ù…Ø§Ù„Øª",
            "de": "Malta",
            "es": "Malta",
            "fr": "Malte",
            "ja": "ãƒžãƒ«ã‚¿",
            "it": "Malta",
            "hu": "MÃ¡lta"
        },
        "flags": [
            "https://restcountries.com/data/mlt.svg",
            "https://restcountries.com/data/png/mlt.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "MLT",
        "independent": true
    },
    {
        "name": "Marshall Islands",
        "topLevelDomain": [".mh"],
        "alpha2Code": "MH",
        "alpha3Code": "MHL",
        "callingCodes": ["692"],
        "capital": "Majuro",
        "altSpellings": [
            "MH",
            "Republic of the Marshall Islands",
            "AolepÄn AorÅkin MÌ§ajeÄ¼"
        ],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 54880,
        "latlng": [9.0, 168.0],
        "demonym": "Marshallese",
        "area": 181.0,
        "timezones": ["UTC+12:00"],
        "nativeName": "MÌ§ajeÄ¼",
        "numericCode": "584",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "mh",
                "iso639_2": "mah",
                "name": "Marshallese",
                "nativeName": "Kajin MÌ§ajeÄ¼"
            }
        ],
        "translations": {
            "br": "Ilhas Marshall",
            "pt": "Ilhas Marshall",
            "nl": "Marshalleilanden",
            "hr": "MarÅ¡alovi Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ù…Ø§Ø±Ø´Ø§Ù„",
            "de": "Marshallinseln",
            "es": "Islas Marshall",
            "fr": "ÃŽles Marshall",
            "ja": "ãƒžãƒ¼ã‚·ãƒ£ãƒ«è«¸å³¶",
            "it": "Isole Marshall",
            "hu": "Marshall-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/mhl.svg",
            "https://restcountries.com/data/png/mhl.png"
        ],
        "cioc": "MHL",
        "independent": true
    },
    {
        "name": "Martinique",
        "topLevelDomain": [".mq"],
        "alpha2Code": "MQ",
        "alpha3Code": "MTQ",
        "callingCodes": ["596"],
        "capital": "Fort-de-France",
        "altSpellings": ["MQ"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 378243,
        "latlng": [14.666667, -61.0],
        "demonym": "French",
        "timezones": ["UTC-04:00"],
        "nativeName": "Martinique",
        "numericCode": "474",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Martinica",
            "pt": "Martinica",
            "nl": "Martinique",
            "hr": "Martinique",
            "fa": "Ù…ÙˆÙ†ØªØ³Ø±Ø§Øª",
            "de": "Martinique",
            "es": "Martinica",
            "fr": "Martinique",
            "ja": "ãƒžãƒ«ãƒ†ã‚£ãƒ‹ãƒ¼ã‚¯",
            "it": "Martinica",
            "hu": "Martinique"
        },
        "flags": [
            "https://restcountries.com/data/mtq.svg",
            "https://restcountries.com/data/png/mtq.png"
        ],
        "independent": false
    },
    {
        "name": "Mauritania",
        "topLevelDomain": [".mr"],
        "alpha2Code": "MR",
        "alpha3Code": "MRT",
        "callingCodes": ["222"],
        "capital": "Nouakchott",
        "altSpellings": [
            "MR",
            "Islamic Republic of Mauritania",
            "al-JumhÅ«riyyah al-Ê¾IslÄmiyyah al-MÅ«rÄ«tÄniyyah"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 3718678,
        "latlng": [20.0, -12.0],
        "demonym": "Mauritanian",
        "area": 1030700.0,
        "gini": 40.5,
        "timezones": ["UTC"],
        "borders": ["DZA", "MLI", "SEN", "ESH"],
        "nativeName": "Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§",
        "numericCode": "478",
        "currencies": [
            { "code": "MRO", "name": "Mauritanian ouguiya", "symbol": "UM" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "MauritÃ¢nia",
            "pt": "MauritÃ¢nia",
            "nl": "MauritaniÃ«",
            "hr": "Mauritanija",
            "fa": "Ù…ÙˆØ±ÛŒØªØ§Ù†ÛŒ",
            "de": "Mauretanien",
            "es": "Mauritania",
            "fr": "Mauritanie",
            "ja": "ãƒ¢ãƒ¼ãƒªã‚¿ãƒ‹ã‚¢",
            "it": "Mauritania",
            "hu": "MauritÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/mrt.svg",
            "https://restcountries.com/data/png/mrt.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "MTN",
        "independent": true
    },
    {
        "name": "Mauritius",
        "topLevelDomain": [".mu"],
        "alpha2Code": "MU",
        "alpha3Code": "MUS",
        "callingCodes": ["230"],
        "capital": "Port Louis",
        "altSpellings": ["MU", "Republic of Mauritius", "RÃ©publique de Maurice"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 1262879,
        "latlng": [-20.28333333, 57.55],
        "demonym": "Mauritian",
        "area": 2040.0,
        "gini": 35.8,
        "timezones": ["UTC+04:00"],
        "nativeName": "Maurice",
        "numericCode": "480",
        "currencies": [
            { "code": "MUR", "name": "Mauritian rupee", "symbol": "â‚¨" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "MaurÃ­cio",
            "pt": "MaurÃ­cia",
            "nl": "Mauritius",
            "hr": "Mauricijus",
            "fa": "Ù…ÙˆØ±ÛŒØ³",
            "de": "Mauritius",
            "es": "Mauricio",
            "fr": "ÃŽle Maurice",
            "ja": "ãƒ¢ãƒ¼ãƒªã‚·ãƒ£ã‚¹",
            "it": "Mauritius",
            "hu": "Mauritius"
        },
        "flags": [
            "https://restcountries.com/data/mus.svg",
            "https://restcountries.com/data/png/mus.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "MRI",
        "independent": true
    },
    {
        "name": "Mayotte",
        "topLevelDomain": [".yt"],
        "alpha2Code": "YT",
        "alpha3Code": "MYT",
        "callingCodes": ["262"],
        "capital": "Mamoudzou",
        "altSpellings": ["YT", "Department of Mayotte", "DÃ©partement de Mayotte"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 226915,
        "latlng": [-12.83333333, 45.16666666],
        "demonym": "French",
        "timezones": ["UTC+03:00"],
        "nativeName": "Mayotte",
        "numericCode": "175",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Mayotte",
            "pt": "Mayotte",
            "nl": "Mayotte",
            "hr": "Mayotte",
            "fa": "Ù…Ø§ÛŒÙˆØª",
            "de": "Mayotte",
            "es": "Mayotte",
            "fr": "Mayotte",
            "ja": "ãƒžãƒ¨ãƒƒãƒˆ",
            "it": "Mayotte",
            "hu": "Mayotte"
        },
        "flags": [
            "https://restcountries.com/data/myt.svg",
            "https://restcountries.com/data/png/myt.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Mexico",
        "topLevelDomain": [".mx"],
        "alpha2Code": "MX",
        "alpha3Code": "MEX",
        "callingCodes": ["52"],
        "capital": "Mexico City",
        "altSpellings": [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        "region": "North America",
        "continent": "Americas",
        "population": 122273473,
        "latlng": [23.0, -102.0],
        "demonym": "Mexican",
        "area": 1964375.0,
        "gini": 47.0,
        "timezones": ["UTC-08:00", "UTC-07:00", "UTC-06:00"],
        "borders": ["BLZ", "GTM", "USA"],
        "nativeName": "MÃ©xico",
        "numericCode": "484",
        "currencies": [{ "code": "MXN", "name": "Mexican peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "MÃ©xico",
            "pt": "MÃ©xico",
            "nl": "Mexico",
            "hr": "Meksiko",
            "fa": "Ù…Ú©Ø²ÛŒÚ©",
            "de": "Mexiko",
            "es": "MÃ©xico",
            "fr": "Mexique",
            "ja": "ãƒ¡ã‚­ã‚·ã‚³",
            "it": "Messico",
            "hu": "MexikÃ³"
        },
        "flags": [
            "https://restcountries.com/data/mex.svg",
            "https://restcountries.com/data/png/mex.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": ["Alianza del PacÃ­fico"]
            },
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de AmÃ©rica del Norte",
                    "Accord de Libre-Ã©change Nord-AmÃ©ricain"
                ]
            }
        ],
        "cioc": "MEX",
        "independent": true
    },
    {
        "name": "Micronesia (Federated States of)",
        "topLevelDomain": [".fm"],
        "alpha2Code": "FM",
        "alpha3Code": "FSM",
        "callingCodes": ["691"],
        "capital": "Palikir",
        "altSpellings": ["FM", "Federated States of Micronesia"],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 102800,
        "latlng": [6.91666666, 158.25],
        "demonym": "Micronesian",
        "area": 702.0,
        "timezones": ["UTC+10:00", "UTC+11"],
        "nativeName": "Micronesia",
        "numericCode": "583",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "MicronÃ©sia",
            "pt": "MicronÃ©sia",
            "nl": "MicronesiÃ«",
            "hr": "Mikronezija",
            "fa": "Ø§ÛŒØ§Ù„Ø§Øª ÙØ¯Ø±Ø§Ù„ Ù…ÛŒÚ©Ø±ÙˆÙ†Ø²ÛŒ",
            "de": "Mikronesien",
            "es": "Micronesia",
            "fr": "MicronÃ©sie",
            "ja": "ãƒŸã‚¯ãƒ­ãƒã‚·ã‚¢é€£é‚¦",
            "it": "Micronesia",
            "hu": "MikronÃ©zia"
        },
        "flags": [
            "https://restcountries.com/data/fsm.svg",
            "https://restcountries.com/data/png/fsm.png"
        ],
        "cioc": "FSM",
        "independent": true
    },
    {
        "name": "Moldova (Republic of)",
        "topLevelDomain": [".md"],
        "alpha2Code": "MD",
        "alpha3Code": "MDA",
        "callingCodes": ["373"],
        "capital": "ChiÈ™inÄƒu",
        "altSpellings": ["MD", "Republic of Moldova", "Republica Moldova"],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 3553100,
        "latlng": [47.0, 29.0],
        "demonym": "Moldovan",
        "area": 33846.0,
        "gini": 33.0,
        "timezones": ["UTC+02:00"],
        "borders": ["ROU", "UKR"],
        "nativeName": "Moldova",
        "numericCode": "498",
        "currencies": [{ "code": "MDL", "name": "Moldovan leu", "symbol": "L" }],
        "languages": [
            {
                "iso639_1": "ro",
                "iso639_2": "ron",
                "name": "Romanian",
                "nativeName": "RomÃ¢nÄƒ"
            }
        ],
        "translations": {
            "br": "MoldÃ¡via",
            "pt": "MoldÃ¡via",
            "nl": "MoldaviÃ«",
            "hr": "Moldova",
            "fa": "Ù…ÙˆÙ„Ø¯Ø§ÙˆÛŒ",
            "de": "Moldawie",
            "es": "Moldavia",
            "fr": "Moldavie",
            "ja": "ãƒ¢ãƒ«ãƒ‰ãƒå…±å’Œå›½",
            "it": "Moldavia",
            "hu": "Moldova"
        },
        "flags": [
            "https://restcountries.com/data/mda.svg",
            "https://restcountries.com/data/png/mda.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "MDA",
        "independent": true
    },
    {
        "name": "Monaco",
        "topLevelDomain": [".mc"],
        "alpha2Code": "MC",
        "alpha3Code": "MCO",
        "callingCodes": ["377"],
        "capital": "Monaco",
        "altSpellings": ["MC", "Principality of Monaco", "PrincipautÃ© de Monaco"],
        "region": "Western Europe",
        "continent": "Europe",
        "population": 38400,
        "latlng": [43.73333333, 7.4],
        "demonym": "Monegasque",
        "area": 2.02,
        "timezones": ["UTC+01:00"],
        "borders": ["FRA"],
        "nativeName": "Monaco",
        "numericCode": "492",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "MÃ´naco",
            "pt": "MÃ³naco",
            "nl": "Monaco",
            "hr": "Monako",
            "fa": "Ù…ÙˆÙ†Ø§Ú©Ùˆ",
            "de": "Monaco",
            "es": "MÃ³naco",
            "fr": "Monaco",
            "ja": "ãƒ¢ãƒŠã‚³",
            "it": "Principato di Monaco",
            "hu": "Monaco"
        },
        "flags": [
            "https://restcountries.com/data/mco.svg",
            "https://restcountries.com/data/png/mco.png"
        ],
        "cioc": "MON",
        "independent": true
    },
    {
        "name": "Mongolia",
        "topLevelDomain": [".mn"],
        "alpha2Code": "MN",
        "alpha3Code": "MNG",
        "callingCodes": ["976"],
        "capital": "Ulan Bator",
        "altSpellings": ["MN"],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 3093100,
        "latlng": [46.0, 105.0],
        "demonym": "Mongolian",
        "area": 1564110.0,
        "gini": 36.5,
        "timezones": ["UTC+07:00", "UTC+08:00"],
        "borders": ["CHN", "RUS"],
        "nativeName": "ÐœÐ¾Ð½Ð³Ð¾Ð» ÑƒÐ»Ñ",
        "numericCode": "496",
        "currencies": [
            { "code": "MNT", "name": "Mongolian tÃ¶grÃ¶g", "symbol": "â‚®" }
        ],
        "languages": [
            {
                "iso639_1": "mn",
                "iso639_2": "mon",
                "name": "Mongolian",
                "nativeName": "ÐœÐ¾Ð½Ð³Ð¾Ð» Ñ…ÑÐ»"
            }
        ],
        "translations": {
            "br": "MongÃ³lia",
            "pt": "MongÃ³lia",
            "nl": "MongoliÃ«",
            "hr": "Mongolija",
            "fa": "Ù…ØºÙˆÙ„Ø³ØªØ§Ù†",
            "de": "Mongolei",
            "es": "Mongolia",
            "fr": "Mongolie",
            "ja": "ãƒ¢ãƒ³ã‚´ãƒ«",
            "it": "Mongolia",
            "hu": "MongÃ³lia"
        },
        "flags": [
            "https://restcountries.com/data/mng.svg",
            "https://restcountries.com/data/png/mng.png"
        ],
        "cioc": "MGL",
        "independent": true
    },
    {
        "name": "Montenegro",
        "topLevelDomain": [".me"],
        "alpha2Code": "ME",
        "alpha3Code": "MNE",
        "callingCodes": ["382"],
        "capital": "Podgorica",
        "altSpellings": ["ME", "Crna Gora"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 621810,
        "latlng": [42.5, 19.3],
        "demonym": "Montenegrin",
        "area": 13812.0,
        "gini": 30.0,
        "timezones": ["UTC+01:00"],
        "borders": ["ALB", "BIH", "HRV", "KOS", "SRB"],
        "nativeName": "Ð¦Ñ€Ð½Ð° Ð“Ð¾Ñ€Ð°",
        "numericCode": "499",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
            },
            {
                "iso639_1": "bs",
                "iso639_2": "bos",
                "name": "Bosnian",
                "nativeName": "bosanski jezik"
            },
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            },
            {
                "iso639_1": "hr",
                "iso639_2": "hrv",
                "name": "Croatian",
                "nativeName": "hrvatski jezik"
            }
        ],
        "translations": {
            "br": "Montenegro",
            "pt": "Montenegro",
            "nl": "Montenegro",
            "hr": "Crna Gora",
            "fa": "Ù…ÙˆÙ†ØªÙ‡â€ŒÙ†Ú¯Ø±Ùˆ",
            "de": "Montenegro",
            "es": "Montenegro",
            "fr": "MontÃ©nÃ©gro",
            "ja": "ãƒ¢ãƒ³ãƒ†ãƒã‚°ãƒ­",
            "it": "Montenegro",
            "hu": "MontenegrÃ³"
        },
        "flags": [
            "https://restcountries.com/data/mne.svg",
            "https://restcountries.com/data/png/mne.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "MNE",
        "independent": true
    },
    {
        "name": "Montserrat",
        "topLevelDomain": [".ms"],
        "alpha2Code": "MS",
        "alpha3Code": "MSR",
        "callingCodes": ["1"],
        "capital": "Plymouth",
        "altSpellings": ["MS"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 4922,
        "latlng": [16.75, -62.2],
        "demonym": "Montserratian",
        "area": 102.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Montserrat",
        "numericCode": "500",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Montserrat",
            "pt": "Monserrate",
            "nl": "Montserrat",
            "hr": "Montserrat",
            "fa": "Ù…Ø§ÛŒÙˆØª",
            "de": "Montserrat",
            "es": "Montserrat",
            "fr": "Montserrat",
            "ja": "ãƒ¢ãƒ³ãƒˆã‚»ãƒ©ãƒˆ",
            "it": "Montserrat",
            "hu": "Montserrat"
        },
        "flags": [
            "https://restcountries.com/data/msr.svg",
            "https://restcountries.com/data/png/msr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Morocco",
        "topLevelDomain": [".ma"],
        "alpha2Code": "MA",
        "alpha3Code": "MAR",
        "callingCodes": ["212"],
        "capital": "Rabat",
        "altSpellings": ["MA", "Kingdom of Morocco", "Al-Mamlakah al-MaÄ¡ribiyah"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 33337529,
        "latlng": [32.0, -5.0],
        "demonym": "Moroccan",
        "area": 446550.0,
        "gini": 40.9,
        "timezones": ["UTC"],
        "borders": ["DZA", "ESH", "ESP"],
        "nativeName": "Ø§Ù„Ù…ØºØ±Ø¨",
        "numericCode": "504",
        "currencies": [
            { "code": "MAD", "name": "Moroccan dirham", "symbol": "Ø¯.Ù…." }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Marrocos",
            "pt": "Marrocos",
            "nl": "Marokko",
            "hr": "Maroko",
            "fa": "Ø§Ù„Ù…ØºØ±Ø¨",
            "de": "Marokko",
            "es": "Marruecos",
            "fr": "Maroc",
            "ja": "ãƒ¢ãƒ­ãƒƒã‚³",
            "it": "Marocco",
            "hu": "MarokkÃ³"
        },
        "flags": [
            "https://restcountries.com/data/mar.svg",
            "https://restcountries.com/data/png/mar.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "MAR",
        "independent": true
    },
    {
        "name": "Mozambique",
        "topLevelDomain": [".mz"],
        "alpha2Code": "MZ",
        "alpha3Code": "MOZ",
        "callingCodes": ["258"],
        "capital": "Maputo",
        "altSpellings": [
            "MZ",
            "Republic of Mozambique",
            "RepÃºblica de MoÃ§ambique"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 26423700,
        "latlng": [-18.25, 35.0],
        "demonym": "Mozambican",
        "area": 801590.0,
        "gini": 45.7,
        "timezones": ["UTC+02:00"],
        "borders": ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
        "nativeName": "MoÃ§ambique",
        "numericCode": "508",
        "currencies": [
            { "code": "MZN", "name": "Mozambican metical", "symbol": "MT" }
        ],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "MoÃ§ambique",
            "pt": "MoÃ§ambique",
            "nl": "Mozambique",
            "hr": "Mozambik",
            "fa": "Ù…ÙˆØ²Ø§Ù…Ø¨ÛŒÚ©",
            "de": "Mosambik",
            "es": "Mozambique",
            "fr": "Mozambique",
            "ja": "ãƒ¢ã‚¶ãƒ³ãƒ“ãƒ¼ã‚¯",
            "it": "Mozambico",
            "hu": "Mozambik"
        },
        "flags": [
            "https://restcountries.com/data/moz.svg",
            "https://restcountries.com/data/png/moz.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "MOZ",
        "independent": true
    },
    {
        "name": "Myanmar",
        "topLevelDomain": [".mm"],
        "alpha2Code": "MM",
        "alpha3Code": "MMR",
        "callingCodes": ["95"],
        "capital": "Naypyidaw",
        "altSpellings": [
            "MM",
            "Burma",
            "Republic of the Union of Myanmar",
            "Pyidaunzu ThanmÄƒda MyÄƒma Nainngandaw"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 51419420,
        "latlng": [22.0, 98.0],
        "demonym": "Burmese",
        "area": 676578.0,
        "gini": 38.1,
        "timezones": ["UTC+06:30"],
        "borders": ["BGD", "CHN", "IND", "LAO", "THA"],
        "nativeName": "Myanma",
        "numericCode": "104",
        "currencies": [{ "code": "MMK", "name": "Burmese kyat", "symbol": "Ks" }],
        "languages": [
            {
                "iso639_1": "my",
                "iso639_2": "mya",
                "name": "Burmese",
                "nativeName": "á€—á€™á€¬á€…á€¬"
            }
        ],
        "translations": {
            "br": "Myanmar",
            "pt": "Myanmar",
            "nl": "Myanmar",
            "hr": "Mijanmar",
            "fa": "Ù…ÛŒØ§Ù†Ù…Ø§Ø±",
            "de": "Myanmar",
            "es": "Myanmar",
            "fr": "Myanmar",
            "ja": "ãƒŸãƒ£ãƒ³ãƒžãƒ¼",
            "it": "Birmania",
            "hu": "Mianmar"
        },
        "flags": [
            "https://restcountries.com/data/mmr.svg",
            "https://restcountries.com/data/png/mmr.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "MYA",
        "independent": true
    },
    {
        "name": "Namibia",
        "topLevelDomain": [".na"],
        "alpha2Code": "NA",
        "alpha3Code": "NAM",
        "callingCodes": ["264"],
        "capital": "Windhoek",
        "altSpellings": ["NA", "NamibiÃ«", "Republic of Namibia"],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 2324388,
        "latlng": [-22.0, 17.0],
        "demonym": "Namibian",
        "area": 825615.0,
        "gini": 63.9,
        "timezones": ["UTC+01:00"],
        "borders": ["AGO", "BWA", "ZAF", "ZMB"],
        "nativeName": "Namibia",
        "numericCode": "516",
        "currencies": [
            { "code": "NAD", "name": "Namibian dollar", "symbol": "" },
            { "code": "ZAR", "name": "South African rand", "symbol": "R" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "af",
                "iso639_2": "afr",
                "name": "Afrikaans",
                "nativeName": "Afrikaans"
            }
        ],
        "translations": {
            "br": "NamÃ­bia",
            "pt": "NamÃ­bia",
            "nl": "NamibiÃ«",
            "hr": "Namibija",
            "fa": "Ù†Ø§Ù…ÛŒØ¨ÛŒØ§",
            "de": "Namibia",
            "es": "Namibia",
            "fr": "Namibie",
            "ja": "ãƒŠãƒŸãƒ“ã‚¢",
            "it": "Namibia",
            "hu": "NamÃ­bia"
        },
        "flags": [
            "https://restcountries.com/data/nam.svg",
            "https://restcountries.com/data/png/nam.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "NAM",
        "independent": true
    },
    {
        "name": "Nauru",
        "topLevelDomain": [".nr"],
        "alpha2Code": "NR",
        "alpha3Code": "NRU",
        "callingCodes": ["674"],
        "capital": "Yaren",
        "altSpellings": [
            "NR",
            "Naoero",
            "Pleasant Island",
            "Republic of Nauru",
            "Ripublik Naoero"
        ],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 10084,
        "latlng": [-0.53333333, 166.91666666],
        "demonym": "Nauruan",
        "area": 21.0,
        "timezones": ["UTC+12:00"],
        "nativeName": "Nauru",
        "numericCode": "520",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "na",
                "iso639_2": "nau",
                "name": "Nauruan",
                "nativeName": "Dorerin Naoero"
            }
        ],
        "translations": {
            "br": "Nauru",
            "pt": "Nauru",
            "nl": "Nauru",
            "hr": "Nauru",
            "fa": "Ù†Ø§Ø¦ÙˆØ±Ùˆ",
            "de": "Nauru",
            "es": "Nauru",
            "fr": "Nauru",
            "ja": "ãƒŠã‚¦ãƒ«",
            "it": "Nauru",
            "hu": "Nauru"
        },
        "flags": [
            "https://restcountries.com/data/nru.svg",
            "https://restcountries.com/data/png/nru.png"
        ],
        "cioc": "NRU",
        "independent": true
    },
    {
        "name": "Nepal",
        "topLevelDomain": [".np"],
        "alpha2Code": "NP",
        "alpha3Code": "NPL",
        "callingCodes": ["977"],
        "capital": "Kathmandu",
        "altSpellings": [
            "NP",
            "Federal Democratic Republic of Nepal",
            "LoktÄntrik Ganatantra NepÄl"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 28431500,
        "latlng": [28.0, 84.0],
        "demonym": "Nepalese",
        "area": 147181.0,
        "gini": 32.8,
        "timezones": ["UTC+05:45"],
        "borders": ["CHN", "IND"],
        "nativeName": "à¤¨à¥‡à¤ªà¤¾à¤²",
        "numericCode": "524",
        "currencies": [
            { "code": "NPR", "name": "Nepalese rupee", "symbol": "â‚¨" }
        ],
        "languages": [
            {
                "iso639_1": "ne",
                "iso639_2": "nep",
                "name": "Nepali",
                "nativeName": "à¤¨à¥‡à¤ªà¤¾à¤²à¥€"
            }
        ],
        "translations": {
            "br": "Nepal",
            "pt": "Nepal",
            "nl": "Nepal",
            "hr": "Nepal",
            "fa": "Ù†Ù¾Ø§Ù„",
            "de": "NÃ©pal",
            "es": "Nepal",
            "fr": "NÃ©pal",
            "ja": "ãƒãƒ‘ãƒ¼ãƒ«",
            "it": "Nepal",
            "hu": "NepÃ¡l"
        },
        "flags": [
            "https://restcountries.com/data/npl.svg",
            "https://restcountries.com/data/png/npl.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "NEP",
        "independent": true
    },
    {
        "name": "Netherlands",
        "topLevelDomain": [".nl"],
        "alpha2Code": "NL",
        "alpha3Code": "NLD",
        "callingCodes": ["31"],
        "capital": "Amsterdam",
        "altSpellings": ["NL", "Holland", "Nederland"],
        "region": "Western Europe",
        "continent": "Europe",
        "population": 17019800,
        "latlng": [52.5, 5.75],
        "demonym": "Dutch",
        "area": 41850.0,
        "gini": 30.9,
        "timezones": ["UTC-04:00", "UTC+01:00"],
        "borders": ["BEL", "DEU"],
        "nativeName": "Nederland",
        "numericCode": "528",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "translations": {
            "br": "Holanda",
            "pt": "PaÃ­ses Baixos",
            "nl": "Nederland",
            "hr": "Nizozemska",
            "fa": "Ù¾Ø§Ø¯Ø´Ø§Ù‡ÛŒ Ù‡Ù„Ù†Ø¯",
            "de": "Niederlande",
            "es": "PaÃ­ses Bajos",
            "fr": "Pays-Bas",
            "ja": "ã‚ªãƒ©ãƒ³ãƒ€",
            "it": "Paesi Bassi",
            "hu": "Hollandia"
        },
        "flags": [
            "https://restcountries.com/data/nld.svg",
            "https://restcountries.com/data/png/nld.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "NED",
        "independent": true
    },
    {
        "name": "New Caledonia",
        "topLevelDomain": [".nc"],
        "alpha2Code": "NC",
        "alpha3Code": "NCL",
        "callingCodes": ["687"],
        "capital": "NoumÃ©a",
        "altSpellings": ["NC"],
        "region": "Melanesia",
        "continent": "Oceania",
        "population": 268767,
        "latlng": [-21.5, 165.5],
        "demonym": "New Caledonian",
        "area": 18575.0,
        "timezones": ["UTC+11:00"],
        "nativeName": "Nouvelle-CalÃ©donie",
        "numericCode": "540",
        "currencies": [{ "code": "XPF", "name": "CFP franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Nova CaledÃ´nia",
            "pt": "Nova CaledÃ³nia",
            "nl": "Nieuw-CaledoniÃ«",
            "hr": "Nova Kaledonija",
            "fa": "Ú©Ø§Ù„Ø¯ÙˆÙ†ÛŒØ§ÛŒ Ø¬Ø¯ÛŒØ¯",
            "de": "Neukaledonien",
            "es": "Nueva Caledonia",
            "fr": "Nouvelle-CalÃ©donie",
            "ja": "ãƒ‹ãƒ¥ãƒ¼ã‚«ãƒ¬ãƒ‰ãƒ‹ã‚¢",
            "it": "Nuova Caledonia",
            "hu": "Ãšj-KaledÃ³nia"
        },
        "flags": [
            "https://restcountries.com/data/ncl.svg",
            "https://restcountries.com/data/png/ncl.png"
        ],
        "independent": false
    },
    {
        "name": "New Zealand",
        "topLevelDomain": [".nz"],
        "alpha2Code": "NZ",
        "alpha3Code": "NZL",
        "callingCodes": ["64"],
        "capital": "Wellington",
        "altSpellings": ["NZ", "Aotearoa"],
        "region": "Australia and New Zealand",
        "continent": "Oceania",
        "population": 4697854,
        "latlng": [-41.0, 174.0],
        "demonym": "New Zealander",
        "area": 270467.0,
        "gini": 36.2,
        "timezones": [
            "UTC-11:00",
            "UTC-10:00",
            "UTC+12:00",
            "UTC+12:45",
            "UTC+13:00"
        ],
        "nativeName": "New Zealand",
        "numericCode": "554",
        "currencies": [
            { "code": "NZD", "name": "New Zealand dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "mi",
                "iso639_2": "mri",
                "name": "MÄori",
                "nativeName": "te reo MÄori"
            }
        ],
        "translations": {
            "br": "Nova ZelÃ¢ndia",
            "pt": "Nova ZelÃ¢ndia",
            "nl": "Nieuw-Zeeland",
            "hr": "Novi Zeland",
            "fa": "Ù†ÛŒÙˆØ²ÛŒÙ„Ù†Ø¯",
            "de": "Neuseeland",
            "es": "Nueva Zelanda",
            "fr": "Nouvelle-ZÃ©lande",
            "ja": "ãƒ‹ãƒ¥ãƒ¼ã‚¸ãƒ¼ãƒ©ãƒ³ãƒ‰",
            "it": "Nuova Zelanda",
            "hu": "Ãšj-ZÃ©land"
        },
        "flags": [
            "https://restcountries.com/data/nzl.svg",
            "https://restcountries.com/data/png/nzl.png"
        ],
        "cioc": "NZL",
        "independent": true
    },
    {
        "name": "Nicaragua",
        "topLevelDomain": [".ni"],
        "alpha2Code": "NI",
        "alpha3Code": "NIC",
        "callingCodes": ["505"],
        "capital": "Managua",
        "altSpellings": ["NI", "Republic of Nicaragua", "RepÃºblica de Nicaragua"],
        "region": "Central America",
        "continent": "Americas",
        "population": 6262703,
        "latlng": [13.0, -85.0],
        "demonym": "Nicaraguan",
        "area": 130373.0,
        "gini": 40.5,
        "timezones": ["UTC-06:00"],
        "borders": ["CRI", "HND"],
        "nativeName": "Nicaragua",
        "numericCode": "558",
        "currencies": [
            { "code": "NIO", "name": "Nicaraguan cÃ³rdoba", "symbol": "C" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "NicarÃ¡gua",
            "pt": "NicarÃ¡gua",
            "nl": "Nicaragua",
            "hr": "Nikaragva",
            "fa": "Ù†ÛŒÚ©Ø§Ø±Ø§Ú¯ÙˆØ¦Ù‡",
            "de": "Nicaragua",
            "es": "Nicaragua",
            "fr": "Nicaragua",
            "ja": "ãƒ‹ã‚«ãƒ©ã‚°ã‚¢",
            "it": "Nicaragua",
            "hu": "Nicaragua"
        },
        "flags": [
            "https://restcountries.com/data/nic.svg",
            "https://restcountries.com/data/png/nic.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "NCA",
        "independent": true
    },
    {
        "name": "Niger",
        "topLevelDomain": [".ne"],
        "alpha2Code": "NE",
        "alpha3Code": "NER",
        "callingCodes": ["227"],
        "capital": "Niamey",
        "altSpellings": [
            "NE",
            "Nijar",
            "Republic of Niger",
            "RÃ©publique du Niger"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 20715000,
        "latlng": [16.0, 8.0],
        "demonym": "Nigerien",
        "area": 1267000.0,
        "gini": 34.6,
        "timezones": ["UTC+01:00"],
        "borders": ["DZA", "BEN", "BFA", "TCD", "LBY", "MLI", "NGA"],
        "nativeName": "Niger",
        "numericCode": "562",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "NÃ­ger",
            "pt": "NÃ­ger",
            "nl": "Niger",
            "hr": "Niger",
            "fa": "Ù†ÛŒØ¬Ø±",
            "de": "Niger",
            "es": "NÃ­ger",
            "fr": "Niger",
            "ja": "ãƒ‹ã‚¸ã‚§ãƒ¼ãƒ«",
            "it": "Niger",
            "hu": "Niger"
        },
        "flags": [
            "https://restcountries.com/data/ner.svg",
            "https://restcountries.com/data/png/ner.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "NIG",
        "independent": true
    },
    {
        "name": "Nigeria",
        "topLevelDomain": [".ng"],
        "alpha2Code": "NG",
        "alpha3Code": "NGA",
        "callingCodes": ["234"],
        "capital": "Abuja",
        "altSpellings": [
            "NG",
            "Nijeriya",
            "NaÃ­jÃ­rÃ­Ã ",
            "Federal Republic of Nigeria"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 186988000,
        "latlng": [10.0, 8.0],
        "demonym": "Nigerian",
        "area": 923768.0,
        "gini": 48.8,
        "timezones": ["UTC+01:00"],
        "borders": ["BEN", "CMR", "TCD", "NER"],
        "nativeName": "Nigeria",
        "numericCode": "566",
        "currencies": [
            { "code": "NGN", "name": "Nigerian naira", "symbol": "â‚¦" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "NigÃ©ria",
            "pt": "NigÃ©ria",
            "nl": "Nigeria",
            "hr": "Nigerija",
            "fa": "Ù†ÛŒØ¬Ø±ÛŒÙ‡",
            "de": "Nigeria",
            "es": "Nigeria",
            "fr": "NigÃ©ria",
            "ja": "ãƒŠã‚¤ã‚¸ã‚§ãƒªã‚¢",
            "it": "Nigeria",
            "hu": "NigÃ©ria"
        },
        "flags": [
            "https://restcountries.com/data/nga.svg",
            "https://restcountries.com/data/png/nga.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "NGR",
        "independent": true
    },
    {
        "name": "Niue",
        "topLevelDomain": [".nu"],
        "alpha2Code": "NU",
        "alpha3Code": "NIU",
        "callingCodes": ["683"],
        "capital": "Alofi",
        "altSpellings": ["NU"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 1470,
        "latlng": [-19.03333333, -169.86666666],
        "demonym": "Niuean",
        "area": 260.0,
        "timezones": ["UTC-11:00"],
        "nativeName": "NiuÄ“",
        "numericCode": "570",
        "currencies": [
            { "code": "NZD", "name": "New Zealand dollar", "symbol": "" },
            { "code": "(none)", "name": "Niue dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Niue",
            "pt": "Niue",
            "nl": "Niue",
            "hr": "Niue",
            "fa": "Ù†ÛŒÙˆÙˆÛŒ",
            "de": "Niue",
            "es": "Niue",
            "fr": "Niue",
            "ja": "ãƒ‹ã‚¦ã‚¨",
            "it": "Niue",
            "hu": "Niue"
        },
        "flags": [
            "https://restcountries.com/data/niu.svg",
            "https://restcountries.com/data/png/niu.png"
        ],
        "independent": true
    },
    {
        "name": "Norfolk Island",
        "topLevelDomain": [".nf"],
        "alpha2Code": "NF",
        "alpha3Code": "NFK",
        "callingCodes": ["672"],
        "capital": "Kingston",
        "altSpellings": [
            "NF",
            "Territory of Norfolk Island",
            "Teratri of Norf'k Ailen"
        ],
        "region": "Australia and New Zealand",
        "continent": "Oceania",
        "population": 2302,
        "latlng": [-29.03333333, 167.95],
        "demonym": "Norfolk Islander",
        "area": 36.0,
        "timezones": ["UTC+11:30"],
        "nativeName": "Norfolk Island",
        "numericCode": "574",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilha Norfolk",
            "pt": "Ilha Norfolk",
            "nl": "Norfolkeiland",
            "hr": "Otok Norfolk",
            "fa": "Ø¬Ø²ÛŒØ±Ù‡ Ù†ÙˆØ±ÙÚ©",
            "de": "Norfolkinsel",
            "es": "Isla de Norfolk",
            "fr": "ÃŽle de Norfolk",
            "ja": "ãƒŽãƒ¼ãƒ•ã‚©ãƒ¼ã‚¯å³¶",
            "it": "Isola Norfolk",
            "hu": "Norfolk-sziget"
        },
        "flags": [
            "https://restcountries.com/data/nfk.svg",
            "https://restcountries.com/data/png/nfk.png"
        ],
        "independent": false
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "topLevelDomain": [".kp"],
        "alpha2Code": "KP",
        "alpha3Code": "PRK",
        "callingCodes": ["850"],
        "capital": "Pyongyang",
        "altSpellings": [
            "KP",
            "Democratic People's Republic of Korea",
            "ì¡°ì„ ë¯¼ì£¼ì£¼ì˜ì¸ë¯¼ê³µí™”êµ­",
            "ChosÅn MinjujuÅ­i Inmin Konghwaguk"
        ],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 25281000,
        "latlng": [40.0, 127.0],
        "demonym": "North Korean",
        "area": 120538.0,
        "timezones": ["UTC+09:00"],
        "borders": ["CHN", "KOR", "RUS"],
        "nativeName": "ë¶í•œ",
        "numericCode": "408",
        "currencies": [
            { "code": "KPW", "name": "North Korean won", "symbol": "â‚©" }
        ],
        "languages": [
            {
                "iso639_1": "ko",
                "iso639_2": "kor",
                "name": "Korean",
                "nativeName": "í•œêµ­ì–´"
            }
        ],
        "translations": {
            "br": "Coreia do Norte",
            "pt": "Coreia do Norte",
            "nl": "Noord-Korea",
            "hr": "Sjeverna Koreja",
            "fa": "Ú©Ø±Ù‡ Ø¬Ù†ÙˆØ¨ÛŒ",
            "de": "Nordkorea",
            "es": "Corea del Norte",
            "fr": "CorÃ©e du Nord",
            "ja": "æœé®®æ°‘ä¸»ä¸»ç¾©äººæ°‘å…±å’Œå›½",
            "it": "Corea del Nord",
            "hu": "Ã‰szak-Korea"
        },
        "flags": [
            "https://restcountries.com/data/prk.svg",
            "https://restcountries.com/data/png/prk.png"
        ],
        "cioc": "PRK",
        "independent": true
    },
    {
        "name": "Northern Mariana Islands",
        "topLevelDomain": [".mp"],
        "alpha2Code": "MP",
        "alpha3Code": "MNP",
        "callingCodes": ["1"],
        "capital": "Saipan",
        "altSpellings": [
            "MP",
            "Commonwealth of the Northern Mariana Islands",
            "Sankattan Siha Na Islas MariÃ¥nas"
        ],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 56940,
        "latlng": [15.2, 145.75],
        "demonym": "American",
        "area": 464.0,
        "timezones": ["UTC+10:00"],
        "nativeName": "Northern Mariana Islands",
        "numericCode": "580",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ch",
                "iso639_2": "cha",
                "name": "Chamorro",
                "nativeName": "Chamoru"
            }
        ],
        "translations": {
            "br": "Ilhas Marianas",
            "pt": "Ilhas Marianas",
            "nl": "Noordelijke Marianeneilanden",
            "hr": "Sjevernomarijanski otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ù…Ø§Ø±ÛŒØ§Ù†Ø§ÛŒ Ø´Ù…Ø§Ù„ÛŒ",
            "de": "NÃ¶rdliche Marianen",
            "es": "Islas Marianas del Norte",
            "fr": "ÃŽles Mariannes du Nord",
            "ja": "åŒ—ãƒžãƒªã‚¢ãƒŠè«¸å³¶",
            "it": "Isole Marianne Settentrionali",
            "hu": "Ã‰szaki-Mariana-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/mnp.svg",
            "https://restcountries.com/data/png/mnp.png"
        ],
        "independent": false
    },
    {
        "name": "Norway",
        "topLevelDomain": [".no"],
        "alpha2Code": "NO",
        "alpha3Code": "NOR",
        "callingCodes": ["47"],
        "capital": "Oslo",
        "altSpellings": [
            "NO",
            "Norge",
            "Noreg",
            "Kingdom of Norway",
            "Kongeriket Norge",
            "Kongeriket Noreg"
        ],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 5223256,
        "latlng": [62.0, 10.0],
        "demonym": "Norwegian",
        "area": 323802.0,
        "gini": 25.8,
        "timezones": ["UTC+01:00"],
        "borders": ["FIN", "SWE", "RUS"],
        "nativeName": "Norge",
        "numericCode": "578",
        "currencies": [
            { "code": "NOK", "name": "Norwegian krone", "symbol": "kr" }
        ],
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            },
            {
                "iso639_1": "nb",
                "iso639_2": "nob",
                "name": "Norwegian BokmÃ¥l",
                "nativeName": "Norsk bokmÃ¥l"
            },
            {
                "iso639_1": "nn",
                "iso639_2": "nno",
                "name": "Norwegian Nynorsk",
                "nativeName": "Norsk nynorsk"
            }
        ],
        "translations": {
            "br": "Noruega",
            "pt": "Noruega",
            "nl": "Noorwegen",
            "hr": "NorveÅ¡ka",
            "fa": "Ù†Ø±ÙˆÚ˜",
            "de": "Norwegen",
            "es": "Noruega",
            "fr": "NorvÃ¨ge",
            "ja": "ãƒŽãƒ«ã‚¦ã‚§ãƒ¼",
            "it": "Norvegia",
            "hu": "NorvÃ©gia"
        },
        "flags": [
            "https://restcountries.com/data/nor.svg",
            "https://restcountries.com/data/png/nor.png"
        ],
        "regionalBlocs": [
            { "acronym": "EFTA", "name": "European Free Trade Association" }
        ],
        "cioc": "NOR",
        "independent": true
    },
    {
        "name": "Oman",
        "topLevelDomain": [".om"],
        "alpha2Code": "OM",
        "alpha3Code": "OMN",
        "callingCodes": ["968"],
        "capital": "Muscat",
        "altSpellings": ["OM", "Sultanate of Oman", "Salá¹­anat Ê»UmÄn"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 4420133,
        "latlng": [21.0, 57.0],
        "demonym": "Omani",
        "area": 309500.0,
        "timezones": ["UTC+04:00"],
        "borders": ["SAU", "ARE", "YEM"],
        "nativeName": "Ø¹Ù…Ø§Ù†",
        "numericCode": "512",
        "currencies": [{ "code": "OMR", "name": "Omani rial", "symbol": "Ø±.Ø¹." }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "OmÃ£",
            "pt": "OmÃ£",
            "nl": "Oman",
            "hr": "Oman",
            "fa": "Ø¹Ù…Ø§Ù†",
            "de": "Oman",
            "es": "OmÃ¡n",
            "fr": "Oman",
            "ja": "ã‚ªãƒžãƒ¼ãƒ³",
            "it": "oman",
            "hu": "OmÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/omn.svg",
            "https://restcountries.com/data/png/omn.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "OMA",
        "independent": true
    },
    {
        "name": "Pakistan",
        "topLevelDomain": [".pk"],
        "alpha2Code": "PK",
        "alpha3Code": "PAK",
        "callingCodes": ["92"],
        "capital": "Islamabad",
        "altSpellings": [
            "PK",
            "PÄkistÄn",
            "Islamic Republic of Pakistan",
            "IslÄmÄ« JumhÅ«riya'eh PÄkistÄn"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 194125062,
        "latlng": [30.0, 70.0],
        "demonym": "Pakistani",
        "area": 881912.0,
        "gini": 30.0,
        "timezones": ["UTC+05:00"],
        "borders": ["AFG", "CHN", "IND", "IRN"],
        "nativeName": "Pakistan",
        "numericCode": "586",
        "currencies": [
            { "code": "PKR", "name": "Pakistani rupee", "symbol": "â‚¨" }
        ],
        "languages": [
            {
                "iso639_1": "ur",
                "iso639_2": "urd",
                "name": "Urdu",
                "nativeName": "Ø§Ø±Ø¯Ùˆ"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "PaquistÃ£o",
            "pt": "PaquistÃ£o",
            "nl": "Pakistan",
            "hr": "Pakistan",
            "fa": "Ù¾Ø§Ú©Ø³ØªØ§Ù†",
            "de": "Pakistan",
            "es": "PakistÃ¡n",
            "fr": "Pakistan",
            "ja": "ãƒ‘ã‚­ã‚¹ã‚¿ãƒ³",
            "it": "Pakistan",
            "hu": "PakisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/pak.svg",
            "https://restcountries.com/data/png/pak.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "PAK",
        "independent": true
    },
    {
        "name": "Palau",
        "topLevelDomain": [".pw"],
        "alpha2Code": "PW",
        "alpha3Code": "PLW",
        "callingCodes": ["680"],
        "capital": "Ngerulmud",
        "altSpellings": ["PW", "Republic of Palau", "Beluu er a Belau"],
        "region": "Micronesia",
        "continent": "Oceania",
        "population": 17950,
        "latlng": [7.5, 134.5],
        "demonym": "Palauan",
        "area": 459.0,
        "timezones": ["UTC+09:00"],
        "nativeName": "Palau",
        "numericCode": "585",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Palau",
            "pt": "Palau",
            "nl": "Palau",
            "hr": "Palau",
            "fa": "Ù¾Ø§Ù„Ø§Ø¦Ùˆ",
            "de": "Palau",
            "es": "Palau",
            "fr": "Palaos",
            "ja": "ãƒ‘ãƒ©ã‚ª",
            "it": "Palau",
            "hu": "Palau"
        },
        "flags": [
            "https://restcountries.com/data/plw.svg",
            "https://restcountries.com/data/png/plw.png"
        ],
        "cioc": "PLW",
        "independent": true
    },
    {
        "name": "Palestine, State of",
        "topLevelDomain": [".ps"],
        "alpha2Code": "PS",
        "alpha3Code": "PSE",
        "callingCodes": ["970"],
        "capital": "Ramallah",
        "altSpellings": ["PS", "State of Palestine", "Dawlat Filasá¹­in"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 4682467,
        "latlng": [31.9, 35.2],
        "demonym": "Palestinian",
        "gini": 35.5,
        "timezones": ["UTC+02:00"],
        "borders": ["ISR", "EGY", "JOR"],
        "nativeName": "ÙÙ„Ø³Ø·ÙŠÙ†",
        "numericCode": "275",
        "currencies": [
            { "code": "ILS", "name": "Israeli new sheqel", "symbol": "â‚ª" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Palestina",
            "pt": "Palestina",
            "nl": "Palestijnse gebieden",
            "hr": "Palestina",
            "fa": "ÙÙ„Ø³Ø·ÛŒÙ†",
            "de": "PalÃ¤stina",
            "es": "Palestina",
            "fr": "Palestine",
            "ja": "ãƒ‘ãƒ¬ã‚¹ãƒãƒŠ",
            "it": "Palestina",
            "hu": "Palesztina"
        },
        "flags": [
            "https://restcountries.com/data/pse.svg",
            "https://restcountries.com/data/png/pse.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "PLE",
        "independent": true
    },
    {
        "name": "Panama",
        "topLevelDomain": [".pa"],
        "alpha2Code": "PA",
        "alpha3Code": "PAN",
        "callingCodes": ["507"],
        "capital": "Panama City",
        "altSpellings": ["PA", "Republic of Panama", "RepÃºblica de PanamÃ¡"],
        "region": "Central America",
        "continent": "Americas",
        "population": 3814672,
        "latlng": [9.0, -80.0],
        "demonym": "Panamanian",
        "area": 75417.0,
        "gini": 51.9,
        "timezones": ["UTC-05:00"],
        "borders": ["COL", "CRI"],
        "nativeName": "PanamÃ¡",
        "numericCode": "591",
        "currencies": [
            { "code": "PAB", "name": "Panamanian balboa", "symbol": "B/." },
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "PanamÃ¡",
            "pt": "PanamÃ¡",
            "nl": "Panama",
            "hr": "Panama",
            "fa": "Ù¾Ø§Ù†Ø§Ù…Ø§",
            "de": "Panama",
            "es": "PanamÃ¡",
            "fr": "Panama",
            "ja": "ãƒ‘ãƒŠãƒž",
            "it": "Panama",
            "hu": "Panama"
        },
        "flags": [
            "https://restcountries.com/data/pan.svg",
            "https://restcountries.com/data/png/pan.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CAIS",
                "name": "Central American Integration System",
                "otherAcronyms": ["SICA"],
                "otherNames": ["Sistema de la IntegraciÃ³n Centroamericana,"]
            }
        ],
        "cioc": "PAN",
        "independent": true
    },
    {
        "name": "Papua New Guinea",
        "topLevelDomain": [".pg"],
        "alpha2Code": "PG",
        "alpha3Code": "PNG",
        "callingCodes": ["675"],
        "capital": "Port Moresby",
        "altSpellings": [
            "PG",
            "Independent State of Papua New Guinea",
            "Independen Stet bilong Papua Niugini"
        ],
        "region": "Melanesia",
        "continent": "Oceania",
        "population": 8083700,
        "latlng": [-6.0, 147.0],
        "demonym": "Papua New Guinean",
        "area": 462840.0,
        "gini": 50.9,
        "timezones": ["UTC+10:00"],
        "borders": ["IDN"],
        "nativeName": "Papua Niugini",
        "numericCode": "598",
        "currencies": [
            { "code": "PGK", "name": "Papua New Guinean kina", "symbol": "K" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Papua Nova GuinÃ©",
            "pt": "Papua Nova GuinÃ©",
            "nl": "Papoea-Nieuw-Guinea",
            "hr": "Papua Nova Gvineja",
            "fa": "Ù¾Ø§Ù¾ÙˆØ¢ Ú¯ÛŒÙ†Ù‡ Ù†Ùˆ",
            "de": "Papua-Neuguinea",
            "es": "PapÃºa Nueva Guinea",
            "fr": "Papouasie-Nouvelle-GuinÃ©e",
            "ja": "ãƒ‘ãƒ—ã‚¢ãƒ‹ãƒ¥ãƒ¼ã‚®ãƒ‹ã‚¢",
            "it": "Papua Nuova Guinea",
            "hu": "PÃ¡pua Ãšj-Guinea"
        },
        "flags": [
            "https://restcountries.com/data/png.svg",
            "https://restcountries.com/data/png/png.png"
        ],
        "cioc": "PNG",
        "independent": true
    },
    {
        "name": "Paraguay",
        "topLevelDomain": [".py"],
        "alpha2Code": "PY",
        "alpha3Code": "PRY",
        "callingCodes": ["595"],
        "capital": "AsunciÃ³n",
        "altSpellings": [
            "PY",
            "Republic of Paraguay",
            "RepÃºblica del Paraguay",
            "TetÃ£ ParaguÃ¡i"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 6854536,
        "latlng": [-23.0, -58.0],
        "demonym": "Paraguayan",
        "area": 406752.0,
        "gini": 52.4,
        "timezones": ["UTC-04:00"],
        "borders": ["ARG", "BOL", "BRA"],
        "nativeName": "Paraguay",
        "numericCode": "600",
        "currencies": [
            { "code": "PYG", "name": "Paraguayan guaranÃ­", "symbol": "â‚²" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            },
            {
                "iso639_1": "gn",
                "iso639_2": "grn",
                "name": "GuaranÃ­",
                "nativeName": "AvaÃ±e'áº½"
            }
        ],
        "translations": {
            "br": "Paraguai",
            "pt": "Paraguai",
            "nl": "Paraguay",
            "hr": "Paragvaj",
            "fa": "Ù¾Ø§Ø±Ø§Ú¯ÙˆØ¦Ù‡",
            "de": "Paraguay",
            "es": "Paraguay",
            "fr": "Paraguay",
            "ja": "ãƒ‘ãƒ©ã‚°ã‚¢ã‚¤",
            "it": "Paraguay",
            "hu": "Paraguay"
        },
        "flags": [
            "https://restcountries.com/data/pry.svg",
            "https://restcountries.com/data/png/pry.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "PAR",
        "independent": true
    },
    {
        "name": "Peru",
        "topLevelDomain": [".pe"],
        "alpha2Code": "PE",
        "alpha3Code": "PER",
        "callingCodes": ["51"],
        "capital": "Lima",
        "altSpellings": ["PE", "Republic of Peru", " RepÃºblica del PerÃº"],
        "region": "South America",
        "continent": "Americas",
        "population": 31488700,
        "latlng": [-10.0, -76.0],
        "demonym": "Peruvian",
        "area": 1285216.0,
        "gini": 48.1,
        "timezones": ["UTC-05:00"],
        "borders": ["BOL", "BRA", "CHL", "COL", "ECU"],
        "nativeName": "PerÃº",
        "numericCode": "604",
        "currencies": [{ "code": "PEN", "name": "Peruvian sol", "symbol": "S/." }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Peru",
            "pt": "Peru",
            "nl": "Peru",
            "hr": "Peru",
            "fa": "Ù¾Ø±Ùˆ",
            "de": "Peru",
            "es": "PerÃº",
            "fr": "PÃ©rou",
            "ja": "ãƒšãƒ«ãƒ¼",
            "it": "PerÃ¹",
            "hu": "Peru"
        },
        "flags": [
            "https://restcountries.com/data/per.svg",
            "https://restcountries.com/data/png/per.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": ["Alianza del PacÃ­fico"]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "PER",
        "independent": true
    },
    {
        "name": "Philippines",
        "topLevelDomain": [".ph"],
        "alpha2Code": "PH",
        "alpha3Code": "PHL",
        "callingCodes": ["63"],
        "capital": "Manila",
        "altSpellings": [
            "PH",
            "Republic of the Philippines",
            "RepÃºblika ng Pilipinas"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 103279800,
        "latlng": [13.0, 122.0],
        "demonym": "Filipino",
        "area": 342353.0,
        "gini": 43.0,
        "timezones": ["UTC+08:00"],
        "nativeName": "Pilipinas",
        "numericCode": "608",
        "currencies": [
            { "code": "PHP", "name": "Philippine peso", "symbol": "â‚±" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Filipinas",
            "pt": "Filipinas",
            "nl": "Filipijnen",
            "hr": "Filipini",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ø§Ù„Ù†Ø¯ÙÛŒÙ„ÛŒÙ¾ÛŒÙ†",
            "de": "Philippinen",
            "es": "Filipinas",
            "fr": "Philippines",
            "ja": "ãƒ•ã‚£ãƒªãƒ”ãƒ³",
            "it": "Filippine",
            "hu": "FÃ¼lÃ¶p-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/phl.svg",
            "https://restcountries.com/data/png/phl.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "PHI",
        "independent": true
    },
    {
        "name": "Pitcairn",
        "topLevelDomain": [".pn"],
        "alpha2Code": "PN",
        "alpha3Code": "PCN",
        "callingCodes": ["64"],
        "capital": "Adamstown",
        "altSpellings": ["PN", "Pitcairn Henderson Ducie and Oeno Islands"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 56,
        "latlng": [-25.06666666, -130.1],
        "demonym": "Pitcairn Islander",
        "area": 47.0,
        "timezones": ["UTC-08:00"],
        "nativeName": "Pitcairn Islands",
        "numericCode": "612",
        "currencies": [
            { "code": "NZD", "name": "New Zealand dollar", "symbol": "" },
            { "code": "PND", "name": "Pitcairn Islands dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Pitcairn",
            "pt": "Ilhas PicÃ¡rnia",
            "nl": "Pitcairneilanden",
            "hr": "Pitcairnovo otoÄje",
            "fa": "Ù¾ÛŒØªÚ©Ø±Ù†",
            "de": "Pitcairn",
            "es": "Islas Pitcairn",
            "fr": "ÃŽles Pitcairn",
            "ja": "ãƒ”ãƒˆã‚±ã‚¢ãƒ³",
            "it": "Isole Pitcairn",
            "hu": "Pitcairn-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/pcn.svg",
            "https://restcountries.com/data/png/pcn.png"
        ],
        "independent": true
    },
    {
        "name": "Poland",
        "topLevelDomain": [".pl"],
        "alpha2Code": "PL",
        "alpha3Code": "POL",
        "callingCodes": ["48"],
        "capital": "Warsaw",
        "altSpellings": ["PL", "Republic of Poland", "Rzeczpospolita Polska"],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 38437239,
        "latlng": [52.0, 20.0],
        "demonym": "Polish",
        "area": 312679.0,
        "gini": 34.1,
        "timezones": ["UTC+01:00"],
        "borders": ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
        "nativeName": "Polska",
        "numericCode": "616",
        "currencies": [{ "code": "PLN", "name": "Polish zÅ‚oty", "symbol": "zÅ‚" }],
        "languages": [
            {
                "iso639_1": "pl",
                "iso639_2": "pol",
                "name": "Polish",
                "nativeName": "jÄ™zyk polski"
            }
        ],
        "translations": {
            "br": "PolÃ´nia",
            "pt": "PolÃ³nia",
            "nl": "Polen",
            "hr": "Poljska",
            "fa": "Ù„Ù‡Ø³ØªØ§Ù†",
            "de": "Polen",
            "es": "Polonia",
            "fr": "Pologne",
            "ja": "ãƒãƒ¼ãƒ©ãƒ³ãƒ‰",
            "it": "Polonia",
            "hu": "LengyelorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/pol.svg",
            "https://restcountries.com/data/png/pol.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "POL",
        "independent": true
    },
    {
        "name": "Portugal",
        "topLevelDomain": [".pt"],
        "alpha2Code": "PT",
        "alpha3Code": "PRT",
        "callingCodes": ["351"],
        "capital": "Lisbon",
        "altSpellings": [
            "PT",
            "Portuguesa",
            "Portuguese Republic",
            "RepÃºblica Portuguesa"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 10374822,
        "latlng": [39.5, -8.0],
        "demonym": "Portuguese",
        "area": 92090.0,
        "gini": 38.5,
        "timezones": ["UTC-01:00", "UTC"],
        "borders": ["ESP"],
        "nativeName": "Portugal",
        "numericCode": "620",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Portugal",
            "pt": "Portugal",
            "nl": "Portugal",
            "hr": "Portugal",
            "fa": "Ù¾Ø±ØªØºØ§Ù„",
            "de": "Portugal",
            "es": "Portugal",
            "fr": "Portugal",
            "ja": "ãƒãƒ«ãƒˆã‚¬ãƒ«",
            "it": "Portogallo",
            "hu": "PortugÃ¡lia"
        },
        "flags": [
            "https://restcountries.com/data/prt.svg",
            "https://restcountries.com/data/png/prt.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "POR",
        "independent": true
    },
    {
        "name": "Puerto Rico",
        "topLevelDomain": [".pr"],
        "alpha2Code": "PR",
        "alpha3Code": "PRI",
        "callingCodes": ["1"],
        "capital": "San Juan",
        "altSpellings": [
            "PR",
            "Commonwealth of Puerto Rico",
            "Estado Libre Asociado de Puerto Rico"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 3474182,
        "latlng": [18.25, -66.5],
        "demonym": "Puerto Rican",
        "area": 8870.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Puerto Rico",
        "numericCode": "630",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Porto Rico",
            "pt": "Porto Rico",
            "nl": "Puerto Rico",
            "hr": "Portoriko",
            "fa": "Ù¾ÙˆØ±ØªÙˆ Ø±ÛŒÚ©Ùˆ",
            "de": "Puerto Rico",
            "es": "Puerto Rico",
            "fr": "Porto Rico",
            "ja": "ãƒ—ã‚¨ãƒ«ãƒˆãƒªã‚³",
            "it": "Porto Rico",
            "hu": "Puerto Rico"
        },
        "flags": [
            "https://restcountries.com/data/pri.svg",
            "https://restcountries.com/data/png/pri.png"
        ],
        "cioc": "PUR",
        "independent": false
    },
    {
        "name": "Qatar",
        "topLevelDomain": [".qa"],
        "alpha2Code": "QA",
        "alpha3Code": "QAT",
        "callingCodes": ["974"],
        "capital": "Doha",
        "altSpellings": ["QA", "State of Qatar", "Dawlat Qaá¹­ar"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 2587564,
        "latlng": [25.5, 51.25],
        "demonym": "Qatari",
        "area": 11586.0,
        "gini": 41.1,
        "timezones": ["UTC+03:00"],
        "borders": ["SAU"],
        "nativeName": "Ù‚Ø·Ø±",
        "numericCode": "634",
        "currencies": [
            { "code": "QAR", "name": "Qatari riyal", "symbol": "Ø±.Ù‚" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Catar",
            "pt": "Catar",
            "nl": "Qatar",
            "hr": "Katar",
            "fa": "Ù‚Ø·Ø±",
            "de": "Katar",
            "es": "Catar",
            "fr": "Qatar",
            "ja": "ã‚«ã‚¿ãƒ¼ãƒ«",
            "it": "Qatar",
            "hu": "Katar"
        },
        "flags": [
            "https://restcountries.com/data/qat.svg",
            "https://restcountries.com/data/png/qat.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "QAT",
        "independent": true
    },
    {
        "name": "Republic of Kosovo",
        "topLevelDomain": [""],
        "alpha2Code": "XK",
        "alpha3Code": "KOS",
        "callingCodes": ["383"],
        "capital": "Pristina",
        "altSpellings": ["XK", "Ð ÐµÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° ÐšÐ¾ÑÐ¾Ð²Ð¾"],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 1733842,
        "latlng": [42.666667, 21.166667],
        "demonym": "Kosovar",
        "area": 10908.0,
        "timezones": ["UTC+01:00"],
        "borders": ["ALB", "MKD", "MNE", "SRB"],
        "nativeName": "Republika e KosovÃ«s",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "sq",
                "iso639_2": "sqi",
                "name": "Albanian",
                "nativeName": "Shqip"
            },
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
            }
        ],
        "translations": {
            "br": "Kosovo",
            "pt": "Kosovo",
            "hr": "Kosovo",
            "fa": "Ú©ÙˆØ²ÙˆÙˆ",
            "es": "Kosovo",
            "hu": "KoszovÃ³"
        },
        "flags": [
            "https://restcountries.com/data/kos.svg",
            "https://restcountries.com/data/png/kos.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "independent": true
    },
    {
        "name": "RÃ©union",
        "topLevelDomain": [".re"],
        "alpha2Code": "RE",
        "alpha3Code": "REU",
        "callingCodes": ["262"],
        "capital": "Saint-Denis",
        "altSpellings": ["RE", "Reunion"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 840974,
        "latlng": [-21.15, 55.5],
        "demonym": "French",
        "timezones": ["UTC+04:00"],
        "nativeName": "La RÃ©union",
        "numericCode": "638",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "ReuniÃ£o",
            "pt": "ReuniÃ£o",
            "nl": "RÃ©union",
            "hr": "RÃ©union",
            "fa": "Ø±Ø¦ÙˆÙ†ÛŒÙˆÙ†",
            "de": "RÃ©union",
            "es": "ReuniÃ³n",
            "fr": "RÃ©union",
            "ja": "ãƒ¬ãƒ¦ãƒ‹ã‚ªãƒ³",
            "it": "Riunione",
            "hu": "RÃ©union"
        },
        "flags": [
            "https://restcountries.com/data/reu.svg",
            "https://restcountries.com/data/png/reu.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Romania",
        "topLevelDomain": [".ro"],
        "alpha2Code": "RO",
        "alpha3Code": "ROU",
        "callingCodes": ["40"],
        "capital": "Bucharest",
        "altSpellings": ["RO", "Rumania", "Roumania", "RomÃ¢nia"],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 19861408,
        "latlng": [46.0, 25.0],
        "demonym": "Romanian",
        "area": 238391.0,
        "gini": 30.0,
        "timezones": ["UTC+02:00"],
        "borders": ["BGR", "HUN", "MDA", "SRB", "UKR"],
        "nativeName": "RomÃ¢nia",
        "numericCode": "642",
        "currencies": [{ "code": "RON", "name": "Romanian leu", "symbol": "lei" }],
        "languages": [
            {
                "iso639_1": "ro",
                "iso639_2": "ron",
                "name": "Romanian",
                "nativeName": "RomÃ¢nÄƒ"
            }
        ],
        "translations": {
            "br": "RomÃªnia",
            "pt": "RomÃ©nia",
            "nl": "RoemeniÃ«",
            "hr": "Rumunjska",
            "fa": "Ø±ÙˆÙ…Ø§Ù†ÛŒ",
            "de": "RumÃ¤nien",
            "es": "Rumania",
            "fr": "Roumanie",
            "ja": "ãƒ«ãƒ¼ãƒžãƒ‹ã‚¢",
            "it": "Romania",
            "hu": "RomÃ¡nia"
        },
        "flags": [
            "https://restcountries.com/data/rou.svg",
            "https://restcountries.com/data/png/rou.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "ROU",
        "independent": true
    },
    {
        "name": "Russian Federation",
        "topLevelDomain": [".ru"],
        "alpha2Code": "RU",
        "alpha3Code": "RUS",
        "callingCodes": ["7"],
        "capital": "Moscow",
        "altSpellings": [
            "RU",
            "Rossiya",
            "Russian Federation",
            "Ð Ð¾ÑÑÐ¸Ð¹ÑÐºÐ°Ñ Ð¤ÐµÐ´ÐµÑ€Ð°Ñ†Ð¸Ñ",
            "Rossiyskaya Federatsiya"
        ],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 146599183,
        "latlng": [60.0, 100.0],
        "demonym": "Russian",
        "area": 1.7124442e7,
        "gini": 40.1,
        "timezones": [
            "UTC+03:00",
            "UTC+04:00",
            "UTC+06:00",
            "UTC+07:00",
            "UTC+08:00",
            "UTC+09:00",
            "UTC+10:00",
            "UTC+11:00",
            "UTC+12:00"
        ],
        "borders": [
            "AZE",
            "BLR",
            "CHN",
            "EST",
            "FIN",
            "GEO",
            "KAZ",
            "PRK",
            "LVA",
            "LTU",
            "MNG",
            "NOR",
            "POL",
            "UKR"
        ],
        "nativeName": "Ð Ð¾ÑÑÐ¸Ñ",
        "numericCode": "643",
        "currencies": [{ "code": "RUB", "name": "Russian ruble", "symbol": "â‚½" }],
        "languages": [
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "RÃºssia",
            "pt": "RÃºssia",
            "nl": "Rusland",
            "hr": "Rusija",
            "fa": "Ø±ÙˆØ³ÛŒÙ‡",
            "de": "Russland",
            "es": "Rusia",
            "fr": "Russie",
            "ja": "ãƒ­ã‚·ã‚¢é€£é‚¦",
            "it": "Russia",
            "hu": "OroszorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/rus.svg",
            "https://restcountries.com/data/png/rus.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "EEU",
                "name": "Eurasian Economic Union",
                "otherAcronyms": ["EAEU"]
            }
        ],
        "cioc": "RUS",
        "independent": true
    },
    {
        "name": "Rwanda",
        "topLevelDomain": [".rw"],
        "alpha2Code": "RW",
        "alpha3Code": "RWA",
        "callingCodes": ["250"],
        "capital": "Kigali",
        "altSpellings": [
            "RW",
            "Republic of Rwanda",
            "Repubulika y'u Rwanda",
            "RÃ©publique du Rwanda"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 11553188,
        "latlng": [-2.0, 30.0],
        "demonym": "Rwandan",
        "area": 26338.0,
        "gini": 50.8,
        "timezones": ["UTC+02:00"],
        "borders": ["BDI", "COD", "TZA", "UGA"],
        "nativeName": "Rwanda",
        "numericCode": "646",
        "currencies": [{ "code": "RWF", "name": "Rwandan franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "rw",
                "iso639_2": "kin",
                "name": "Kinyarwanda",
                "nativeName": "Ikinyarwanda"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Ruanda",
            "pt": "Ruanda",
            "nl": "Rwanda",
            "hr": "Ruanda",
            "fa": "Ø±ÙˆØ§Ù†Ø¯Ø§",
            "de": "Ruanda",
            "es": "Ruanda",
            "fr": "Rwanda",
            "ja": "ãƒ«ãƒ¯ãƒ³ãƒ€",
            "it": "Ruanda",
            "hu": "Ruanda"
        },
        "flags": [
            "https://restcountries.com/data/rwa.svg",
            "https://restcountries.com/data/png/rwa.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "RWA",
        "independent": true
    },
    {
        "name": "Saint BarthÃ©lemy",
        "topLevelDomain": [".bl"],
        "alpha2Code": "BL",
        "alpha3Code": "BLM",
        "callingCodes": ["590"],
        "capital": "Gustavia",
        "altSpellings": [
            "BL",
            "St. Barthelemy",
            "Collectivity of Saint BarthÃ©lemy",
            "CollectivitÃ© de Saint-BarthÃ©lemy"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 9417,
        "latlng": [18.5, -63.41666666],
        "demonym": "Saint BarthÃ©lemy Islander",
        "area": 21.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Saint-BarthÃ©lemy",
        "numericCode": "652",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "SÃ£o Bartolomeu",
            "pt": "SÃ£o Bartolomeu",
            "nl": "Saint BarthÃ©lemy",
            "hr": "Saint BarthÃ©lemy",
            "fa": "Ø³Ù†-Ø¨Ø§Ø±ØªÙ„Ù…ÛŒ",
            "de": "Saint-BarthÃ©lemy",
            "es": "San BartolomÃ©",
            "fr": "Saint-BarthÃ©lemy",
            "ja": "ã‚µãƒ³ãƒ»ãƒãƒ«ãƒ†ãƒ«ãƒŸãƒ¼",
            "it": "Antille Francesi",
            "hu": "Saint-BarthÃ©lemy"
        },
        "flags": [
            "https://restcountries.com/data/blm.svg",
            "https://restcountries.com/data/png/blm.png"
        ],
        "independent": false
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "topLevelDomain": [".sh"],
        "alpha2Code": "SH",
        "alpha3Code": "SHN",
        "callingCodes": ["290"],
        "capital": "Jamestown",
        "altSpellings": ["SH"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 4255,
        "latlng": [-15.95, -5.7],
        "demonym": "Saint Helenian",
        "timezones": ["UTC+00:00"],
        "nativeName": "Saint Helena",
        "numericCode": "654",
        "currencies": [
            { "code": "SHP", "name": "Saint Helena pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Santa Helena",
            "pt": "Santa Helena",
            "nl": "Sint-Helena",
            "hr": "Sveta Helena",
            "fa": "Ø³Ù†Øª Ù‡Ù„Ù†Ø§ØŒ Ø§Ø³Ù†Ø´Ù† Ùˆ ØªØ±ÛŒØ³ØªØ§Ù† Ø¯Ø§ Ú©ÙˆÙ†Ø§",
            "de": "Sankt Helena",
            "es": "Santa Helena",
            "fr": "Sainte-HÃ©lÃ¨ne",
            "ja": "ã‚»ãƒ³ãƒˆãƒ˜ãƒ¬ãƒŠãƒ»ã‚¢ã‚»ãƒ³ã‚·ãƒ§ãƒ³ãŠã‚ˆã³ãƒˆãƒªã‚¹ã‚¿ãƒ³ãƒ€ã‚¯ãƒ¼ãƒ‹ãƒ£",
            "it": "Sant'Elena",
            "hu": "Szent Ilona"
        },
        "flags": [
            "https://restcountries.com/data/shn.svg",
            "https://restcountries.com/data/png/shn.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Saint Kitts and Nevis",
        "topLevelDomain": [".kn"],
        "alpha2Code": "KN",
        "alpha3Code": "KNA",
        "callingCodes": ["1"],
        "capital": "Basseterre",
        "altSpellings": ["KN", "Federation of Saint Christopher and Nevis"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 46204,
        "latlng": [17.33333333, -62.75],
        "demonym": "Kittian and Nevisian",
        "area": 261.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Saint Kitts and Nevis",
        "numericCode": "659",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "SÃ£o CristÃ³vÃ£o e Neves",
            "pt": "SÃ£o CristÃ³vÃ£o e Neves",
            "nl": "Saint Kitts en Nevis",
            "hr": "Sveti Kristof i Nevis",
            "fa": "Ø³Ù†Øª Ú©ÛŒØªØ³ Ùˆ Ù†ÙˆÛŒØ³",
            "de": "St. Kitts und Nevis",
            "es": "San CristÃ³bal y Nieves",
            "fr": "Saint-Christophe-et-NiÃ©vÃ¨s",
            "ja": "ã‚»ãƒ³ãƒˆã‚¯ãƒªã‚¹ãƒˆãƒ•ã‚¡ãƒ¼ãƒ»ãƒã‚¤ãƒ“ã‚¹",
            "it": "Saint Kitts e Nevis",
            "hu": "Saint Kitts Ã©s Nevis"
        },
        "flags": [
            "https://restcountries.com/data/kna.svg",
            "https://restcountries.com/data/png/kna.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "SKN",
        "independent": true
    },
    {
        "name": "Saint Lucia",
        "topLevelDomain": [".lc"],
        "alpha2Code": "LC",
        "alpha3Code": "LCA",
        "callingCodes": ["1"],
        "capital": "Castries",
        "altSpellings": ["LC"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 186000,
        "latlng": [13.88333333, -60.96666666],
        "demonym": "Saint Lucian",
        "area": 616.0,
        "gini": 42.6,
        "timezones": ["UTC-04:00"],
        "nativeName": "Saint Lucia",
        "numericCode": "662",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Santa LÃºcia",
            "pt": "Santa LÃºcia",
            "nl": "Saint Lucia",
            "hr": "Sveta Lucija",
            "fa": "Ø³Ù†Øª Ù„ÙˆØ³ÛŒØ§",
            "de": "Saint Lucia",
            "es": "Santa LucÃ­a",
            "fr": "Saint-Lucie",
            "ja": "ã‚»ãƒ³ãƒˆãƒ«ã‚·ã‚¢",
            "it": "Santa Lucia",
            "hu": "Saint Lucia"
        },
        "flags": [
            "https://restcountries.com/data/lca.svg",
            "https://restcountries.com/data/png/lca.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "LCA",
        "independent": true
    },
    {
        "name": "Saint Martin (French part)",
        "topLevelDomain": [".mf", ".fr", ".gp"],
        "alpha2Code": "MF",
        "alpha3Code": "MAF",
        "callingCodes": ["590"],
        "capital": "Marigot",
        "altSpellings": [
            "MF",
            "Collectivity of Saint Martin",
            "CollectivitÃ© de Saint-Martin"
        ],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 36979,
        "latlng": [18.08333333, -63.95],
        "demonym": "Saint Martin Islander",
        "area": 53.0,
        "timezones": ["UTC-04:00"],
        "borders": ["SXM", "NLD"],
        "nativeName": "Saint-Martin",
        "numericCode": "663",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "translations": {
            "br": "Saint Martin",
            "pt": "Ilha SÃ£o Martinho",
            "nl": "Saint-Martin",
            "hr": "Sveti Martin",
            "fa": "Ø³ÛŒÙ†Øª Ù…Ø§Ø±ØªÙ†",
            "de": "Saint Martin",
            "es": "Saint Martin",
            "fr": "Saint-Martin",
            "ja": "ã‚µãƒ³ãƒ»ãƒžãƒ«ã‚¿ãƒ³ï¼ˆãƒ•ãƒ©ãƒ³ã‚¹é ˜ï¼‰",
            "it": "Saint Martin",
            "hu": "Saint-Martin"
        },
        "flags": [
            "https://restcountries.com/data/maf.svg",
            "https://restcountries.com/data/png/maf.png"
        ],
        "independent": false
    },
    {
        "name": "Saint Pierre and Miquelon",
        "topLevelDomain": [".pm"],
        "alpha2Code": "PM",
        "alpha3Code": "SPM",
        "callingCodes": ["508"],
        "capital": "Saint-Pierre",
        "altSpellings": [
            "PM",
            "CollectivitÃ© territoriale de Saint-Pierre-et-Miquelon"
        ],
        "region": "Northern America",
        "continent": "Americas",
        "population": 6069,
        "latlng": [46.83333333, -56.33333333],
        "demonym": "French",
        "area": 242.0,
        "timezones": ["UTC-03:00"],
        "nativeName": "Saint-Pierre-et-Miquelon",
        "numericCode": "666",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Saint-Pierre e Miquelon",
            "pt": "SÃ£o Pedro e Miquelon",
            "nl": "Saint Pierre en Miquelon",
            "hr": "Sveti Petar i Mikelon",
            "fa": "Ø³Ù† Ù¾ÛŒØ± Ùˆ Ù…ÛŒÚ©Ù„Ù†",
            "de": "Saint-Pierre und Miquelon",
            "es": "San Pedro y MiquelÃ³n",
            "fr": "Saint-Pierre-et-Miquelon",
            "ja": "ã‚µãƒ³ãƒ”ã‚¨ãƒ¼ãƒ«å³¶ãƒ»ãƒŸã‚¯ãƒ­ãƒ³å³¶",
            "it": "Saint-Pierre e Miquelon",
            "hu": "Saint-Pierre Ã©s Miquelon"
        },
        "flags": [
            "https://restcountries.com/data/spm.svg",
            "https://restcountries.com/data/png/spm.png"
        ],
        "independent": false
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "topLevelDomain": [".vc"],
        "alpha2Code": "VC",
        "alpha3Code": "VCT",
        "callingCodes": ["1"],
        "capital": "Kingstown",
        "altSpellings": ["VC"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 109991,
        "latlng": [13.25, -61.2],
        "demonym": "Saint Vincentian",
        "area": 389.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Saint Vincent and the Grenadines",
        "numericCode": "670",
        "currencies": [
            { "code": "XCD", "name": "East Caribbean dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "SÃ£o Vicente e Granadinas",
            "pt": "SÃ£o Vicente e Granadinas",
            "nl": "Saint Vincent en de Grenadines",
            "hr": "Sveti Vincent i Grenadini",
            "fa": "Ø³Ù†Øª ÙˆÛŒÙ†Ø³Ù†Øª Ùˆ Ú¯Ø±Ù†Ø§Ø¯ÛŒÙ†â€ŒÙ‡Ø§",
            "de": "Saint Vincent und die Grenadinen",
            "es": "San Vicente y Granadinas",
            "fr": "Saint-Vincent-et-les-Grenadines",
            "ja": "ã‚»ãƒ³ãƒˆãƒ“ãƒ³ã‚»ãƒ³ãƒˆãŠã‚ˆã³ã‚°ãƒ¬ãƒŠãƒ‡ã‚£ãƒ¼ãƒ³è«¸å³¶",
            "it": "Saint Vincent e Grenadine",
            "hu": "Saint Vincent Ã©s a Grenadine-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/vct.svg",
            "https://restcountries.com/data/png/vct.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "VIN",
        "independent": true
    },
    {
        "name": "Samoa",
        "topLevelDomain": [".ws"],
        "alpha2Code": "WS",
        "alpha3Code": "WSM",
        "callingCodes": ["685"],
        "capital": "Apia",
        "altSpellings": [
            "WS",
            "Independent State of Samoa",
            "Malo SaÊ»oloto TutoÊ»atasi o SÄmoa"
        ],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 194899,
        "latlng": [-13.58333333, -172.33333333],
        "demonym": "Samoan",
        "area": 2842.0,
        "timezones": ["UTC+13:00"],
        "nativeName": "Samoa",
        "numericCode": "882",
        "currencies": [{ "code": "WST", "name": "Samoan tÄlÄ", "symbol": "T" }],
        "languages": [
            {
                "iso639_1": "sm",
                "iso639_2": "smo",
                "name": "Samoan",
                "nativeName": "gagana fa'a Samoa"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Samoa",
            "pt": "Samoa",
            "nl": "Samoa",
            "hr": "Samoa",
            "fa": "Ø³Ø§Ù…ÙˆØ¢",
            "de": "Samoa",
            "es": "Samoa",
            "fr": "Samoa",
            "ja": "ã‚µãƒ¢ã‚¢",
            "it": "Samoa",
            "hu": "Szamoa"
        },
        "flags": [
            "https://restcountries.com/data/wsm.svg",
            "https://restcountries.com/data/png/wsm.png"
        ],
        "cioc": "SAM",
        "independent": true
    },
    {
        "name": "San Marino",
        "topLevelDomain": [".sm"],
        "alpha2Code": "SM",
        "alpha3Code": "SMR",
        "callingCodes": ["378"],
        "capital": "City of San Marino",
        "altSpellings": [
            "SM",
            "Republic of San Marino",
            "Repubblica di San Marino"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 33005,
        "latlng": [43.76666666, 12.41666666],
        "demonym": "Sammarinese",
        "area": 61.0,
        "timezones": ["UTC+01:00"],
        "borders": ["ITA"],
        "nativeName": "San Marino",
        "numericCode": "674",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            }
        ],
        "translations": {
            "br": "San Marino",
            "pt": "SÃ£o Marinho",
            "nl": "San Marino",
            "hr": "San Marino",
            "fa": "Ø³Ø§Ù† Ù…Ø§Ø±ÛŒÙ†Ùˆ",
            "de": "San Marino",
            "es": "San Marino",
            "fr": "Saint-Marin",
            "ja": "ã‚µãƒ³ãƒžãƒªãƒŽ",
            "it": "San Marino",
            "hu": "San Marino"
        },
        "flags": [
            "https://restcountries.com/data/smr.svg",
            "https://restcountries.com/data/png/smr.png"
        ],
        "cioc": "SMR",
        "independent": true
    },
    {
        "name": "Sao Tome and Principe",
        "topLevelDomain": [".st"],
        "alpha2Code": "ST",
        "alpha3Code": "STP",
        "callingCodes": ["239"],
        "capital": "SÃ£o TomÃ©",
        "altSpellings": [
            "ST",
            "Democratic Republic of SÃ£o TomÃ© and PrÃ­ncipe",
            "RepÃºblica DemocrÃ¡tica de SÃ£o TomÃ© e PrÃ­ncipe"
        ],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 187356,
        "latlng": [1.0, 7.0],
        "demonym": "Sao Tomean",
        "area": 964.0,
        "gini": 50.8,
        "timezones": ["UTC"],
        "nativeName": "SÃ£o TomÃ© e PrÃ­ncipe",
        "numericCode": "678",
        "currencies": [
            {
                "code": "STD",
                "name": "SÃ£o TomÃ© and PrÃ­ncipe dobra",
                "symbol": "Db"
            }
        ],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "SÃ£o TomÃ© e PrÃ­ncipe",
            "pt": "SÃ£o TomÃ© e PrÃ­ncipe",
            "nl": "Sao TomÃ© en Principe",
            "hr": "Sveti Toma i Princip",
            "fa": "Ú©ÙˆØ§ØªØ±Ùˆ Ø¯Ùˆ ÙØ±ÙˆÛŒØ±Ùˆ",
            "de": "SÃ£o TomÃ© und PrÃ­ncipe",
            "es": "Santo TomÃ© y PrÃ­ncipe",
            "fr": "Sao TomÃ©-et-Principe",
            "ja": "ã‚µãƒ³ãƒˆãƒ¡ãƒ»ãƒ—ãƒªãƒ³ã‚·ãƒš",
            "it": "SÃ£o TomÃ© e PrÃ­ncipe",
            "hu": "SÃ£o TomÃ© Ã©s PrÃ­ncipe"
        },
        "flags": [
            "https://restcountries.com/data/stp.svg",
            "https://restcountries.com/data/png/stp.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "STP",
        "independent": true
    },
    {
        "name": "Saudi Arabia",
        "topLevelDomain": [".sa"],
        "alpha2Code": "SA",
        "alpha3Code": "SAU",
        "callingCodes": ["966"],
        "capital": "Riyadh",
        "altSpellings": [
            "SA",
            "Kingdom of Saudi Arabia",
            "Al-Mamlakah al-â€˜Arabiyyah as-Suâ€˜Å«diyyah"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 32248200,
        "latlng": [25.0, 45.0],
        "demonym": "Saudi Arabian",
        "area": 2149690.0,
        "gini": 45.9,
        "timezones": ["UTC+03:00"],
        "borders": ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
        "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
        "numericCode": "682",
        "currencies": [{ "code": "SAR", "name": "Saudi riyal", "symbol": "Ø±.Ø³" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "ArÃ¡bia Saudita",
            "pt": "ArÃ¡bia Saudita",
            "nl": "Saoedi-ArabiÃ«",
            "hr": "Saudijska Arabija",
            "fa": "Ø¹Ø±Ø¨Ø³ØªØ§Ù† Ø³Ø¹ÙˆØ¯ÛŒ",
            "de": "Saudi-Arabien",
            "es": "Arabia SaudÃ­",
            "fr": "Arabie Saoudite",
            "ja": "ã‚µã‚¦ã‚¸ã‚¢ãƒ©ãƒ“ã‚¢",
            "it": "Arabia Saudita",
            "hu": "SzaÃºd-ArÃ¡bia"
        },
        "flags": [
            "https://restcountries.com/data/sau.svg",
            "https://restcountries.com/data/png/sau.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "KSA",
        "independent": true
    },
    {
        "name": "Senegal",
        "topLevelDomain": [".sn"],
        "alpha2Code": "SN",
        "alpha3Code": "SEN",
        "callingCodes": ["221"],
        "capital": "Dakar",
        "altSpellings": ["SN", "Republic of Senegal", "RÃ©publique du SÃ©nÃ©gal"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 14799859,
        "latlng": [14.0, -14.0],
        "demonym": "Senegalese",
        "area": 196722.0,
        "gini": 39.2,
        "timezones": ["UTC"],
        "borders": ["GMB", "GIN", "GNB", "MLI", "MRT"],
        "nativeName": "SÃ©nÃ©gal",
        "numericCode": "686",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Senegal",
            "pt": "Senegal",
            "nl": "Senegal",
            "hr": "Senegal",
            "fa": "Ø³Ù†Ú¯Ø§Ù„",
            "de": "Senegal",
            "es": "Senegal",
            "fr": "SÃ©nÃ©gal",
            "ja": "ã‚»ãƒã‚¬ãƒ«",
            "it": "Senegal",
            "hu": "SzenegÃ¡l"
        },
        "flags": [
            "https://restcountries.com/data/sen.svg",
            "https://restcountries.com/data/png/sen.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "SEN",
        "independent": true
    },
    {
        "name": "Serbia",
        "topLevelDomain": [".rs"],
        "alpha2Code": "RS",
        "alpha3Code": "SRB",
        "callingCodes": ["381"],
        "capital": "Belgrade",
        "altSpellings": [
            "RS",
            "Srbija",
            "Republic of Serbia",
            "Ð ÐµÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° Ð¡Ñ€Ð±Ð¸Ñ˜Ð°",
            "Republika Srbija"
        ],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 7076372,
        "latlng": [44.0, 21.0],
        "demonym": "Serbian",
        "area": 88361.0,
        "gini": 27.8,
        "timezones": ["UTC+01:00"],
        "borders": ["BIH", "BGR", "HRV", "HUN", "KOS", "MKD", "MNE", "ROU"],
        "nativeName": "Ð¡Ñ€Ð±Ð¸Ñ˜Ð°",
        "numericCode": "688",
        "currencies": [
            { "code": "RSD", "name": "Serbian dinar", "symbol": "Ð´Ð¸Ð½." }
        ],
        "languages": [
            {
                "iso639_1": "sr",
                "iso639_2": "srp",
                "name": "Serbian",
                "nativeName": "ÑÑ€Ð¿ÑÐºÐ¸ Ñ˜ÐµÐ·Ð¸Ðº"
            }
        ],
        "translations": {
            "br": "SÃ©rvia",
            "pt": "SÃ©rvia",
            "nl": "ServiÃ«",
            "hr": "Srbija",
            "fa": "ØµØ±Ø¨Ø³ØªØ§Ù†",
            "de": "Serbien",
            "es": "Serbia",
            "fr": "Serbie",
            "ja": "ã‚»ãƒ«ãƒ“ã‚¢",
            "it": "Serbia",
            "hu": "Szerbia"
        },
        "flags": [
            "https://restcountries.com/data/srb.svg",
            "https://restcountries.com/data/png/srb.png"
        ],
        "regionalBlocs": [
            { "acronym": "CEFTA", "name": "Central European Free Trade Agreement" }
        ],
        "cioc": "SRB",
        "independent": true
    },
    {
        "name": "Seychelles",
        "topLevelDomain": [".sc"],
        "alpha2Code": "SC",
        "alpha3Code": "SYC",
        "callingCodes": ["248"],
        "capital": "Victoria",
        "altSpellings": [
            "SC",
            "Republic of Seychelles",
            "Repiblik Sesel",
            "RÃ©publique des Seychelles"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 91400,
        "latlng": [-4.58333333, 55.66666666],
        "demonym": "Seychellois",
        "area": 452.0,
        "gini": 65.8,
        "timezones": ["UTC+04:00"],
        "nativeName": "Seychelles",
        "numericCode": "690",
        "currencies": [
            { "code": "SCR", "name": "Seychellois rupee", "symbol": "â‚¨" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Seicheles",
            "pt": "Seicheles",
            "nl": "Seychellen",
            "hr": "SejÅ¡eli",
            "fa": "Ø³ÛŒØ´Ù„",
            "de": "Seychellen",
            "es": "Seychelles",
            "fr": "Seychelles",
            "ja": "ã‚»ãƒ¼ã‚·ã‚§ãƒ«",
            "it": "Seychelles",
            "hu": "Seychelle-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/syc.svg",
            "https://restcountries.com/data/png/syc.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "SEY",
        "independent": true
    },
    {
        "name": "Sierra Leone",
        "topLevelDomain": [".sl"],
        "alpha2Code": "SL",
        "alpha3Code": "SLE",
        "callingCodes": ["232"],
        "capital": "Freetown",
        "altSpellings": ["SL", "Republic of Sierra Leone"],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 7075641,
        "latlng": [8.5, -11.5],
        "demonym": "Sierra Leonean",
        "area": 71740.0,
        "gini": 42.5,
        "timezones": ["UTC"],
        "borders": ["GIN", "LBR"],
        "nativeName": "Sierra Leone",
        "numericCode": "694",
        "currencies": [
            { "code": "SLL", "name": "Sierra Leonean leone", "symbol": "Le" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Serra Leoa",
            "pt": "Serra Leoa",
            "nl": "Sierra Leone",
            "hr": "Sijera Leone",
            "fa": "Ø³ÛŒØ±Ø§Ù„Ø¦ÙˆÙ†",
            "de": "Sierra Leone",
            "es": "Sierra Leone",
            "fr": "Sierra Leone",
            "ja": "ã‚·ã‚¨ãƒ©ãƒ¬ã‚ªãƒ",
            "it": "Sierra Leone",
            "hu": "Sierra Leone"
        },
        "flags": [
            "https://restcountries.com/data/sle.svg",
            "https://restcountries.com/data/png/sle.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "SLE",
        "independent": true
    },
    {
        "name": "Singapore",
        "topLevelDomain": [".sg"],
        "alpha2Code": "SG",
        "alpha3Code": "SGP",
        "callingCodes": ["65"],
        "capital": "Singapore",
        "altSpellings": [
            "SG",
            "Singapura",
            "Republik Singapura",
            "æ–°åŠ å¡å…±å’Œå›½"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 5535000,
        "latlng": [1.36666666, 103.8],
        "demonym": "Singaporean",
        "area": 710.0,
        "gini": 48.1,
        "timezones": ["UTC+08:00"],
        "nativeName": "Singapore",
        "numericCode": "702",
        "currencies": [
            { "code": "BND", "name": "Brunei dollar", "symbol": "" },
            { "code": "SGD", "name": "Singapore dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ms",
                "iso639_2": "msa",
                "name": "Malay",
                "nativeName": "bahasa Melayu"
            },
            {
                "iso639_1": "ta",
                "iso639_2": "tam",
                "name": "Tamil",
                "nativeName": "à®¤à®®à®¿à®´à¯"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "ä¸­æ–‡ (ZhÅngwÃ©n)"
            }
        ],
        "translations": {
            "br": "Singapura",
            "pt": "Singapura",
            "nl": "Singapore",
            "hr": "Singapur",
            "fa": "Ø³Ù†Ú¯Ø§Ù¾ÙˆØ±",
            "de": "Singapur",
            "es": "Singapur",
            "fr": "Singapour",
            "ja": "ã‚·ãƒ³ã‚¬ãƒãƒ¼ãƒ«",
            "it": "Singapore",
            "hu": "SzingapÃºr"
        },
        "flags": [
            "https://restcountries.com/data/sgp.svg",
            "https://restcountries.com/data/png/sgp.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "SIN",
        "independent": true
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "topLevelDomain": [".sx"],
        "alpha2Code": "SX",
        "alpha3Code": "SXM",
        "callingCodes": ["1"],
        "capital": "Philipsburg",
        "altSpellings": ["SX"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 38247,
        "latlng": [18.033333, -63.05],
        "demonym": "Dutch",
        "area": 34.0,
        "timezones": ["UTC-04:00"],
        "borders": ["MAF"],
        "nativeName": "Sint Maarten",
        "numericCode": "534",
        "currencies": [
            { "code": "ANG", "name": "Netherlands Antillean guilder", "symbol": "Æ’" }
        ],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Sint Maarten",
            "pt": "SÃ£o Martinho",
            "nl": "Sint Maarten",
            "fa": "Ø³ÛŒÙ†Øª Ù…Ø§Ø±ØªÙ†",
            "de": "Sint Maarten (niederl. Teil)",
            "fr": "Saint Martin (partie nÃ©erlandaise)",
            "it": "Saint Martin (parte olandese)",
            "hu": "Sint Maarten"
        },
        "flags": [
            "https://restcountries.com/data/sxm.svg",
            "https://restcountries.com/data/png/sxm.png"
        ],
        "independent": false
    },
    {
        "name": "Slovakia",
        "topLevelDomain": [".sk"],
        "alpha2Code": "SK",
        "alpha3Code": "SVK",
        "callingCodes": ["421"],
        "capital": "Bratislava",
        "altSpellings": ["SK", "Slovak Republic", "SlovenskÃ¡ republika"],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 5426252,
        "latlng": [48.66666666, 19.5],
        "demonym": "Slovak",
        "area": 49037.0,
        "gini": 26.0,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "CZE", "HUN", "POL", "UKR"],
        "nativeName": "Slovensko",
        "numericCode": "703",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "sk",
                "iso639_2": "slk",
                "name": "Slovak",
                "nativeName": "slovenÄina"
            }
        ],
        "translations": {
            "br": "EslovÃ¡quia",
            "pt": "EslovÃ¡quia",
            "nl": "Slowakije",
            "hr": "SlovaÄka",
            "fa": "Ø§Ø³Ù„ÙˆØ§Ú©ÛŒ",
            "de": "Slowakei",
            "es": "RepÃºblica Eslovaca",
            "fr": "Slovaquie",
            "ja": "ã‚¹ãƒ­ãƒã‚­ã‚¢",
            "it": "Slovacchia",
            "hu": "SzlovÃ¡kia"
        },
        "flags": [
            "https://restcountries.com/data/svk.svg",
            "https://restcountries.com/data/png/svk.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "SVK",
        "independent": true
    },
    {
        "name": "Slovenia",
        "topLevelDomain": [".si"],
        "alpha2Code": "SI",
        "alpha3Code": "SVN",
        "callingCodes": ["386"],
        "capital": "Ljubljana",
        "altSpellings": ["SI", "Republic of Slovenia", "Republika Slovenija"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 2064188,
        "latlng": [46.11666666, 14.81666666],
        "demonym": "Slovene",
        "area": 20273.0,
        "gini": 31.2,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "HRV", "ITA", "HUN"],
        "nativeName": "Slovenija",
        "numericCode": "705",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "sl",
                "iso639_2": "slv",
                "name": "Slovene",
                "nativeName": "slovenski jezik"
            }
        ],
        "translations": {
            "br": "EslovÃªnia",
            "pt": "EslovÃ©nia",
            "nl": "SloveniÃ«",
            "hr": "Slovenija",
            "fa": "Ø§Ø³Ù„ÙˆÙˆÙ†ÛŒ",
            "de": "Slowenien",
            "es": "Eslovenia",
            "fr": "SlovÃ©nie",
            "ja": "ã‚¹ãƒ­ãƒ™ãƒ‹ã‚¢",
            "it": "Slovenia",
            "hu": "SzlovÃ©nia"
        },
        "flags": [
            "https://restcountries.com/data/svn.svg",
            "https://restcountries.com/data/png/svn.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "SLO",
        "independent": true
    },
    {
        "name": "Solomon Islands",
        "topLevelDomain": [".sb"],
        "alpha2Code": "SB",
        "alpha3Code": "SLB",
        "callingCodes": ["677"],
        "capital": "Honiara",
        "altSpellings": ["SB"],
        "region": "Melanesia",
        "continent": "Oceania",
        "population": 642000,
        "latlng": [-8.0, 159.0],
        "demonym": "Solomon Islander",
        "area": 28896.0,
        "timezones": ["UTC+11:00"],
        "nativeName": "Solomon Islands",
        "numericCode": "090",
        "currencies": [
            { "code": "SBD", "name": "Solomon Islands dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas SalomÃ£o",
            "pt": "Ilhas SalomÃ£o",
            "nl": "Salomonseilanden",
            "hr": "Solomonski Otoci",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ø³Ù„ÛŒÙ…Ø§Ù†",
            "de": "Salomonen",
            "es": "Islas SalomÃ³n",
            "fr": "ÃŽles Salomon",
            "ja": "ã‚½ãƒ­ãƒ¢ãƒ³è«¸å³¶",
            "it": "Isole Salomone",
            "hu": "Salamon-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/slb.svg",
            "https://restcountries.com/data/png/slb.png"
        ],
        "cioc": "SOL",
        "independent": true
    },
    {
        "name": "Somalia",
        "topLevelDomain": [".so"],
        "alpha2Code": "SO",
        "alpha3Code": "SOM",
        "callingCodes": ["252"],
        "capital": "Mogadishu",
        "altSpellings": [
            "SO",
            "aá¹£-á¹¢Å«mÄl",
            "Federal Republic of Somalia",
            "Jamhuuriyadda Federaalka Soomaaliya",
            "JumhÅ«riyyat aá¹£-á¹¢Å«mÄl al-FiderÄliyya"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 11079000,
        "latlng": [10.0, 49.0],
        "demonym": "Somali",
        "area": 637657.0,
        "timezones": ["UTC+03:00"],
        "borders": ["DJI", "ETH", "KEN"],
        "nativeName": "Soomaaliya",
        "numericCode": "706",
        "currencies": [
            { "code": "SOS", "name": "Somali shilling", "symbol": "Sh" }
        ],
        "languages": [
            {
                "iso639_1": "so",
                "iso639_2": "som",
                "name": "Somali",
                "nativeName": "Soomaaliga"
            },
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "SomÃ¡lia",
            "pt": "SomÃ¡lia",
            "nl": "SomaliÃ«",
            "hr": "Somalija",
            "fa": "Ø³ÙˆÙ…Ø§Ù„ÛŒ",
            "de": "Somalia",
            "es": "Somalia",
            "fr": "Somalie",
            "ja": "ã‚½ãƒžãƒªã‚¢",
            "it": "Somalia",
            "hu": "SzomÃ¡lia"
        },
        "flags": [
            "https://restcountries.com/data/som.svg",
            "https://restcountries.com/data/png/som.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "SOM",
        "independent": true
    },
    {
        "name": "South Africa",
        "topLevelDomain": [".za"],
        "alpha2Code": "ZA",
        "alpha3Code": "ZAF",
        "callingCodes": ["27"],
        "capital": "Pretoria",
        "altSpellings": ["ZA", "RSA", "Suid-Afrika", "Republic of South Africa"],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 55653654,
        "latlng": [-29.0, 24.0],
        "demonym": "South African",
        "area": 1221037.0,
        "gini": 63.1,
        "timezones": ["UTC+02:00"],
        "borders": ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
        "nativeName": "South Africa",
        "numericCode": "710",
        "currencies": [
            { "code": "ZAR", "name": "South African rand", "symbol": "R" }
        ],
        "languages": [
            {
                "iso639_1": "af",
                "iso639_2": "afr",
                "name": "Afrikaans",
                "nativeName": "Afrikaans"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "nr",
                "iso639_2": "nbl",
                "name": "Southern Ndebele",
                "nativeName": "isiNdebele"
            },
            {
                "iso639_1": "st",
                "iso639_2": "sot",
                "name": "Southern Sotho",
                "nativeName": "Sesotho"
            },
            {
                "iso639_1": "ss",
                "iso639_2": "ssw",
                "name": "Swati",
                "nativeName": "SiSwati"
            },
            {
                "iso639_1": "tn",
                "iso639_2": "tsn",
                "name": "Tswana",
                "nativeName": "Setswana"
            },
            {
                "iso639_1": "ts",
                "iso639_2": "tso",
                "name": "Tsonga",
                "nativeName": "Xitsonga"
            },
            {
                "iso639_1": "ve",
                "iso639_2": "ven",
                "name": "Venda",
                "nativeName": "Tshivená¸“a"
            },
            {
                "iso639_1": "xh",
                "iso639_2": "xho",
                "name": "Xhosa",
                "nativeName": "isiXhosa"
            },
            {
                "iso639_1": "zu",
                "iso639_2": "zul",
                "name": "Zulu",
                "nativeName": "isiZulu"
            }
        ],
        "translations": {
            "br": "RepÃºblica Sul-Africana",
            "pt": "RepÃºblica Sul-Africana",
            "nl": "Zuid-Afrika",
            "hr": "JuÅ¾noafriÄka Republika",
            "fa": "Ø¢ÙØ±ÛŒÙ‚Ø§ÛŒ Ø¬Ù†ÙˆØ¨ÛŒ",
            "de": "Republik SÃ¼dafrika",
            "es": "RepÃºblica de SudÃ¡frica",
            "fr": "Afrique du Sud",
            "ja": "å—ã‚¢ãƒ•ãƒªã‚«",
            "it": "Sud Africa",
            "hu": "DÃ©l-afrikai KÃ¶ztÃ¡rsasÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/zaf.svg",
            "https://restcountries.com/data/png/zaf.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "RSA",
        "independent": true
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "topLevelDomain": [".gs"],
        "alpha2Code": "GS",
        "alpha3Code": "SGS",
        "callingCodes": ["500"],
        "capital": "King Edward Point",
        "altSpellings": ["GS", "South Georgia and the South Sandwich Islands"],
        "region": "South America",
        "continent": "Americas",
        "population": 30,
        "latlng": [-54.5, -37.0],
        "demonym": "South Georgia and the South Sandwich Islander",
        "timezones": ["UTC-02:00"],
        "nativeName": "South Georgia",
        "numericCode": "239",
        "currencies": [
            { "code": "FKP", "name": "Falkland Islands Pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas GeÃ³rgias do Sul e Sandwich do Sul",
            "pt": "Ilhas GeÃ³rgia do Sul e SanduÃ­che do Sul",
            "nl": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
            "hr": "JuÅ¾na Georgija i otoÄje JuÅ¾ni Sandwich",
            "fa": "Ø¬Ø²Ø§ÛŒØ± Ø¬ÙˆØ±Ø¬ÛŒØ§ÛŒ Ø¬Ù†ÙˆØ¨ÛŒ Ùˆ Ø³Ø§Ù†Ø¯ÙˆÛŒÚ† Ø¬Ù†ÙˆØ¨ÛŒ",
            "de": "SÃ¼dgeorgien und die SÃ¼dlichen Sandwichinseln",
            "es": "Islas Georgias del Sur y Sandwich del Sur",
            "fr": "GÃ©orgie du Sud-et-les ÃŽles Sandwich du Sud",
            "ja": "ã‚µã‚¦ã‚¹ã‚¸ãƒ§ãƒ¼ã‚¸ã‚¢ãƒ»ã‚µã‚¦ã‚¹ã‚µãƒ³ãƒ‰ã‚¦ã‚£ãƒƒãƒè«¸å³¶",
            "it": "Georgia del Sud e Isole Sandwich Meridionali",
            "hu": "DÃ­li-Georgia Ã­s DÃ­li-Sandwich-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/sgs.svg",
            "https://restcountries.com/data/png/sgs.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Korea (Republic of)",
        "topLevelDomain": [".kr"],
        "alpha2Code": "KR",
        "alpha3Code": "KOR",
        "callingCodes": ["82"],
        "capital": "Seoul",
        "altSpellings": ["KR", "Republic of Korea"],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 50801405,
        "latlng": [37.0, 127.5],
        "demonym": "South Korean",
        "area": 100210.0,
        "gini": 31.3,
        "timezones": ["UTC+09:00"],
        "borders": ["PRK"],
        "nativeName": "ëŒ€í•œë¯¼êµ­",
        "numericCode": "410",
        "currencies": [
            { "code": "KRW", "name": "South Korean won", "symbol": "â‚©" }
        ],
        "languages": [
            {
                "iso639_1": "ko",
                "iso639_2": "kor",
                "name": "Korean",
                "nativeName": "í•œêµ­ì–´"
            }
        ],
        "translations": {
            "br": "Coreia do Sul",
            "pt": "Coreia do Sul",
            "nl": "Zuid-Korea",
            "hr": "JuÅ¾na Koreja",
            "fa": "Ú©Ø±Ù‡ Ø´Ù…Ø§Ù„ÛŒ",
            "de": "SÃ¼dkorea",
            "es": "Corea del Sur",
            "fr": "CorÃ©e du Sud",
            "ja": "å¤§éŸ“æ°‘å›½",
            "it": "Corea del Sud",
            "hu": "DÃ­l-Korea"
        },
        "flags": [
            "https://restcountries.com/data/kor.svg",
            "https://restcountries.com/data/png/kor.png"
        ],
        "cioc": "KOR",
        "independent": true
    },
    {
        "name": "South Sudan",
        "topLevelDomain": [".ss"],
        "alpha2Code": "SS",
        "alpha3Code": "SSD",
        "callingCodes": ["211"],
        "capital": "Juba",
        "altSpellings": ["SS"],
        "region": "Middle Africa",
        "continent": "Africa",
        "population": 12131000,
        "latlng": [7.0, 30.0],
        "demonym": "South Sudanese",
        "area": 619745.0,
        "gini": 45.5,
        "timezones": ["UTC+03:00"],
        "borders": ["CAF", "COD", "ETH", "KEN", "SDN", "UGA"],
        "nativeName": "South Sudan",
        "numericCode": "728",
        "currencies": [
            { "code": "SSP", "name": "South Sudanese pound", "symbol": "Â£" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "SudÃ£o do Sul",
            "pt": "SudÃ£o do Sul",
            "nl": "Zuid-Soedan",
            "hr": "JuÅ¾ni Sudan",
            "fa": "Ø³ÙˆØ¯Ø§Ù† Ø¬Ù†ÙˆØ¨ÛŒ",
            "de": "SÃ¼dsudan",
            "es": "SudÃ¡n del Sur",
            "fr": "Soudan du Sud",
            "ja": "å—ã‚¹ãƒ¼ãƒ€ãƒ³",
            "it": "Sudan del sud",
            "hu": "DÃ­l-SzudÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/ssd.svg",
            "https://restcountries.com/data/png/ssd.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": true
    },
    {
        "name": "Spain",
        "topLevelDomain": [".es"],
        "alpha2Code": "ES",
        "alpha3Code": "ESP",
        "callingCodes": ["34"],
        "capital": "Madrid",
        "altSpellings": ["ES", "Kingdom of Spain", "Reino de EspaÃ±a"],
        "region": "Southern Europe",
        "continent": "Europe",
        "population": 46438422,
        "latlng": [40.0, -4.0],
        "demonym": "Spanish",
        "area": 505992.0,
        "gini": 34.7,
        "timezones": ["UTC", "UTC+01:00"],
        "borders": ["AND", "FRA", "GIB", "PRT", "MAR"],
        "nativeName": "EspaÃ±a",
        "numericCode": "724",
        "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "â‚¬" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Espanha",
            "pt": "Espanha",
            "nl": "Spanje",
            "hr": "Å panjolska",
            "fa": "Ø§Ø³Ù¾Ø§Ù†ÛŒØ§",
            "de": "Spanien",
            "es": "EspaÃ±a",
            "fr": "Espagne",
            "ja": "ã‚¹ãƒšã‚¤ãƒ³",
            "it": "Spagna",
            "hu": "SpanyolorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/esp.svg",
            "https://restcountries.com/data/png/esp.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "ESP",
        "independent": true
    },
    {
        "name": "Sri Lanka",
        "topLevelDomain": [".lk"],
        "alpha2Code": "LK",
        "alpha3Code": "LKA",
        "callingCodes": ["94"],
        "capital": "Sri Jayawardenepura Kotte",
        "altSpellings": [
            "LK",
            "ilaá¹…kai",
            "Democratic Socialist Republic of Sri Lanka"
        ],
        "region": "Southern Asia",
        "continent": "Asia",
        "population": 20966000,
        "latlng": [7.0, 81.0],
        "demonym": "Sri Lankan",
        "area": 65610.0,
        "gini": 40.3,
        "timezones": ["UTC+05:30"],
        "borders": ["IND"],
        "nativeName": "Å›rÄ« laá¹ƒkÄva",
        "numericCode": "144",
        "currencies": [
            { "code": "LKR", "name": "Sri Lankan rupee", "symbol": "Rs" }
        ],
        "languages": [
            {
                "iso639_1": "si",
                "iso639_2": "sin",
                "name": "Sinhalese",
                "nativeName": "à·ƒà·’à¶‚à·„à¶½"
            },
            {
                "iso639_1": "ta",
                "iso639_2": "tam",
                "name": "Tamil",
                "nativeName": "à®¤à®®à®¿à®´à¯"
            }
        ],
        "translations": {
            "br": "Sri Lanka",
            "pt": "Sri Lanka",
            "nl": "Sri Lanka",
            "hr": "Å ri Lanka",
            "fa": "Ø³Ø±ÛŒâ€ŒÙ„Ø§Ù†Ú©Ø§",
            "de": "Sri Lanka",
            "es": "Sri Lanka",
            "fr": "Sri Lanka",
            "ja": "ã‚¹ãƒªãƒ©ãƒ³ã‚«",
            "it": "Sri Lanka",
            "hu": "SrÃ­ Lanka"
        },
        "flags": [
            "https://restcountries.com/data/lka.svg",
            "https://restcountries.com/data/png/lka.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
        ],
        "cioc": "SRI",
        "independent": true
    },
    {
        "name": "Sudan",
        "topLevelDomain": [".sd"],
        "alpha2Code": "SD",
        "alpha3Code": "SDN",
        "callingCodes": ["249"],
        "capital": "Khartoum",
        "altSpellings": ["SD", "Republic of the Sudan", "JumhÅ«rÄ«yat as-SÅ«dÄn"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 39598700,
        "latlng": [15.0, 30.0],
        "demonym": "Sudanese",
        "area": 1886068.0,
        "gini": 35.3,
        "timezones": ["UTC+03:00"],
        "borders": ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
        "nativeName": "Ø§Ù„Ø³ÙˆØ¯Ø§Ù†",
        "numericCode": "729",
        "currencies": [
            { "code": "SDG", "name": "Sudanese pound", "symbol": "Ø¬.Ø³." }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "SudÃ£o",
            "pt": "SudÃ£o",
            "nl": "Soedan",
            "hr": "Sudan",
            "fa": "Ø³ÙˆØ¯Ø§Ù†",
            "de": "Sudan",
            "es": "SudÃ¡n",
            "fr": "Soudan",
            "ja": "ã‚¹ãƒ¼ãƒ€ãƒ³",
            "it": "Sudan",
            "hu": "SzudÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/sdn.svg",
            "https://restcountries.com/data/png/sdn.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "SUD",
        "independent": true
    },
    {
        "name": "Suriname",
        "topLevelDomain": [".sr"],
        "alpha2Code": "SR",
        "alpha3Code": "SUR",
        "callingCodes": ["597"],
        "capital": "Paramaribo",
        "altSpellings": [
            "SR",
            "Sarnam",
            "Sranangron",
            "Republic of Suriname",
            "Republiek Suriname"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 541638,
        "latlng": [4.0, -56.0],
        "demonym": "Surinamer",
        "area": 163820.0,
        "gini": 52.9,
        "timezones": ["UTC-03:00"],
        "borders": ["BRA", "FRA", "GUF", "GUY"],
        "nativeName": "Suriname",
        "numericCode": "740",
        "currencies": [
            { "code": "SRD", "name": "Surinamese dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "nl",
                "iso639_2": "nld",
                "name": "Dutch",
                "nativeName": "Nederlands"
            }
        ],
        "translations": {
            "br": "Suriname",
            "pt": "Suriname",
            "nl": "Suriname",
            "hr": "Surinam",
            "fa": "Ø³ÙˆØ±ÛŒÙ†Ø§Ù…",
            "de": "Suriname",
            "es": "Surinam",
            "fr": "Surinam",
            "ja": "ã‚¹ãƒªãƒŠãƒ ",
            "it": "Suriname",
            "hu": "Suriname"
        },
        "flags": [
            "https://restcountries.com/data/sur.svg",
            "https://restcountries.com/data/png/sur.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            },
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "SUR",
        "independent": true
    },
    {
        "name": "Svalbard and Jan Mayen",
        "topLevelDomain": [".sj"],
        "alpha2Code": "SJ",
        "alpha3Code": "SJM",
        "callingCodes": ["47"],
        "capital": "Longyearbyen",
        "altSpellings": ["SJ", "Svalbard and Jan Mayen Islands"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 2562,
        "latlng": [78.0, 20.0],
        "demonym": "Norwegian",
        "timezones": ["UTC+01:00"],
        "nativeName": "Svalbard og Jan Mayen",
        "numericCode": "744",
        "currencies": [
            { "code": "NOK", "name": "Norwegian krone", "symbol": "kr" }
        ],
        "languages": [
            {
                "iso639_1": "no",
                "iso639_2": "nor",
                "name": "Norwegian",
                "nativeName": "Norsk"
            }
        ],
        "translations": {
            "br": "Svalbard",
            "pt": "Svalbard",
            "nl": "Svalbard en Jan Mayen",
            "hr": "Svalbard i Jan Mayen",
            "fa": "Ø³ÙˆØ§Ù„Ø¨Ø§Ø±Ø¯ Ùˆ ÛŒØ§Ù† Ù…Ø§ÛŒÙ†",
            "de": "Svalbard und Jan Mayen",
            "es": "Islas Svalbard y Jan Mayen",
            "fr": "Svalbard et Jan Mayen",
            "ja": "ã‚¹ãƒ´ã‚¡ãƒ¼ãƒ«ãƒãƒ«è«¸å³¶ãŠã‚ˆã³ãƒ¤ãƒ³ãƒžã‚¤ã‚¨ãƒ³å³¶",
            "it": "Svalbard e Jan Mayen",
            "hu": "SpitzbergÃ¡k Ã­s Jan Mayen-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/sjm.svg",
            "https://restcountries.com/data/png/sjm.png"
        ],
        "independent": false
    },
    {
        "name": "Swaziland",
        "topLevelDomain": [".sz"],
        "alpha2Code": "SZ",
        "alpha3Code": "SWZ",
        "callingCodes": ["268"],
        "capital": "Lobamba",
        "altSpellings": [
            "SZ",
            "weSwatini",
            "Swatini",
            "Ngwane",
            "Kingdom of Swaziland",
            "Umbuso waseSwatini"
        ],
        "region": "Southern Africa",
        "continent": "Africa",
        "population": 1132657,
        "latlng": [-26.5, 31.5],
        "demonym": "Swazi",
        "area": 17364.0,
        "gini": 51.5,
        "timezones": ["UTC+02:00"],
        "borders": ["MOZ", "ZAF"],
        "nativeName": "Swaziland",
        "numericCode": "748",
        "currencies": [{ "code": "SZL", "name": "Swazi lilangeni", "symbol": "L" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "ss",
                "iso639_2": "ssw",
                "name": "Swati",
                "nativeName": "SiSwati"
            }
        ],
        "translations": {
            "br": "SuazilÃ¢ndia",
            "pt": "SuazilÃ¢ndia",
            "nl": "Swaziland",
            "hr": "Svazi",
            "fa": "Ø³ÙˆØ§Ø²ÛŒÙ„Ù†Ø¯",
            "de": "Swasiland",
            "es": "Suazilandia",
            "fr": "Swaziland",
            "ja": "ã‚¹ãƒ¯ã‚¸ãƒ©ãƒ³ãƒ‰",
            "it": "Swaziland",
            "hu": "SzvÃ¡zifÃ¶ld"
        },
        "flags": [
            "https://restcountries.com/data/swz.svg",
            "https://restcountries.com/data/png/swz.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "SWZ",
        "independent": true
    },
    {
        "name": "Sweden",
        "topLevelDomain": [".se"],
        "alpha2Code": "SE",
        "alpha3Code": "SWE",
        "callingCodes": ["46"],
        "capital": "Stockholm",
        "altSpellings": ["SE", "Kingdom of Sweden", "Konungariket Sverige"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 9894888,
        "latlng": [62.0, 15.0],
        "demonym": "Swedish",
        "area": 450295.0,
        "gini": 25.0,
        "timezones": ["UTC+01:00"],
        "borders": ["FIN", "NOR"],
        "nativeName": "Sverige",
        "numericCode": "752",
        "currencies": [{ "code": "SEK", "name": "Swedish krona", "symbol": "kr" }],
        "languages": [
            {
                "iso639_1": "sv",
                "iso639_2": "swe",
                "name": "Swedish",
                "nativeName": "svenska"
            }
        ],
        "translations": {
            "br": "SuÃ©cia",
            "pt": "SuÃ©cia",
            "nl": "Zweden",
            "hr": "Å vedska",
            "fa": "Ø³ÙˆØ¦Ø¯",
            "de": "Schweden",
            "es": "Suecia",
            "fr": "SuÃ¨de",
            "ja": "ã‚¹ã‚¦ã‚§ãƒ¼ãƒ‡ãƒ³",
            "it": "Svezia",
            "hu": "SvÃ­dorszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/swe.svg",
            "https://restcountries.com/data/png/swe.png"
        ],
        "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }],
        "cioc": "SWE",
        "independent": true
    },
    {
        "name": "Switzerland",
        "topLevelDomain": [".ch"],
        "alpha2Code": "CH",
        "alpha3Code": "CHE",
        "callingCodes": ["41"],
        "capital": "Bern",
        "altSpellings": [
            "CH",
            "Swiss Confederation",
            "Schweiz",
            "Suisse",
            "Svizzera",
            "Svizra"
        ],
        "region": "Central Europe",
        "continent": "Europe",
        "population": 8341600,
        "latlng": [47.0, 8.0],
        "demonym": "Swiss",
        "area": 41284.0,
        "gini": 33.7,
        "timezones": ["UTC+01:00"],
        "borders": ["AUT", "FRA", "ITA", "LIE", "DEU"],
        "nativeName": "Schweiz",
        "numericCode": "756",
        "currencies": [{ "code": "CHF", "name": "Swiss franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "de",
                "iso639_2": "deu",
                "name": "German",
                "nativeName": "Deutsch"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            },
            {
                "iso639_1": "it",
                "iso639_2": "ita",
                "name": "Italian",
                "nativeName": "Italiano"
            },
            { "iso639_2": "roh", "name": "Romansh" }
        ],
        "translations": {
            "br": "SuÃ­Ã§a",
            "pt": "SuÃ­Ã§a",
            "nl": "Zwitserland",
            "hr": "Å vicarska",
            "fa": "Ø³ÙˆØ¦ÛŒØ³",
            "de": "Schweiz",
            "es": "Suiza",
            "fr": "Suisse",
            "ja": "ã‚¹ã‚¤ã‚¹",
            "it": "Svizzera",
            "hu": "SvÃ¡jc"
        },
        "flags": [
            "https://restcountries.com/data/che.svg",
            "https://restcountries.com/data/png/che.png"
        ],
        "regionalBlocs": [
            { "acronym": "EFTA", "name": "European Free Trade Association" }
        ],
        "cioc": "SUI",
        "independent": true
    },
    {
        "name": "Syrian Arab Republic",
        "topLevelDomain": [".sy"],
        "alpha2Code": "SY",
        "alpha3Code": "SYR",
        "callingCodes": ["963"],
        "capital": "Damascus",
        "altSpellings": [
            "SY",
            "Syrian Arab Republic",
            "Al-JumhÅ«rÄ«yah Al-Ê»ArabÄ«yah As-SÅ«rÄ«yah"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 18564000,
        "latlng": [35.0, 38.0],
        "demonym": "Syrian",
        "area": 185180.0,
        "gini": 35.8,
        "timezones": ["UTC+02:00"],
        "borders": ["IRQ", "ISR", "JOR", "LBN", "TUR"],
        "nativeName": "Ø³ÙˆØ±ÙŠØ§",
        "numericCode": "760",
        "currencies": [{ "code": "SYP", "name": "Syrian pound", "symbol": "Â£" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "SÃ­ria",
            "pt": "SÃ­ria",
            "nl": "SyriÃ«",
            "hr": "Sirija",
            "fa": "Ø³ÙˆØ±ÛŒÙ‡",
            "de": "Syrien",
            "es": "Siria",
            "fr": "Syrie",
            "ja": "ã‚·ãƒªã‚¢ãƒ»ã‚¢ãƒ©ãƒ–å…±å’Œå›½",
            "it": "Siria",
            "hu": "SzÅ‘ria"
        },
        "flags": [
            "https://restcountries.com/data/syr.svg",
            "https://restcountries.com/data/png/syr.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "SYR",
        "independent": true
    },
    {
        "name": "Taiwan",
        "topLevelDomain": [".tw"],
        "alpha2Code": "TW",
        "alpha3Code": "TWN",
        "callingCodes": ["886"],
        "capital": "Taipei",
        "altSpellings": [
            "TW",
            "TÃ¡iwÄn",
            "Republic of China",
            "ä¸­è¯æ°‘åœ‹",
            "ZhÅnghuÃ¡ MÃ­nguÃ³"
        ],
        "region": "Eastern Asia",
        "continent": "Asia",
        "population": 23503349,
        "latlng": [23.5, 121.0],
        "demonym": "Taiwanese",
        "area": 36193.0,
        "gini": 33.6,
        "timezones": ["UTC+08:00"],
        "nativeName": "è‡ºç£",
        "numericCode": "158",
        "currencies": [
            { "code": "TWD", "name": "New Taiwan dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "ä¸­æ–‡ (ZhÅngwÃ©n)"
            }
        ],
        "translations": {
            "br": "Taiwan",
            "pt": "Taiwan",
            "nl": "Taiwan",
            "hr": "Tajvan",
            "fa": "ØªØ§ÛŒÙˆØ§Ù†",
            "de": "Taiwan",
            "es": "TaiwÃ¡n",
            "fr": "TaÃ¯wan",
            "ja": "å°æ¹¾ï¼ˆä¸­è¯æ°‘å›½ï¼‰",
            "it": "Taiwan",
            "hu": "Tajvan"
        },
        "flags": [
            "https://restcountries.com/data/twn.svg",
            "https://restcountries.com/data/png/twn.png"
        ],
        "cioc": "TPE",
        "independent": true
    },
    {
        "name": "Tajikistan",
        "topLevelDomain": [".tj"],
        "alpha2Code": "TJ",
        "alpha3Code": "TJK",
        "callingCodes": ["992"],
        "capital": "Dushanbe",
        "altSpellings": [
            "TJ",
            "ToÃ§ikiston",
            "Republic of Tajikistan",
            "Ò¶ÑƒÐ¼Ò³ÑƒÑ€Ð¸Ð¸ Ð¢Ð¾Ò·Ð¸ÐºÐ¸ÑÑ‚Ð¾Ð½",
            "Ã‡umhuriyi ToÃ§ikiston"
        ],
        "region": "Central Asia",
        "continent": "Asia",
        "population": 8593600,
        "latlng": [39.0, 71.0],
        "demonym": "Tadzhik",
        "area": 143100.0,
        "gini": 30.8,
        "timezones": ["UTC+05:00"],
        "borders": ["AFG", "CHN", "KGZ", "UZB"],
        "nativeName": "Ð¢Ð¾Ò·Ð¸ÐºÐ¸ÑÑ‚Ð¾Ð½",
        "numericCode": "762",
        "currencies": [
            { "code": "TJS", "name": "Tajikistani somoni", "symbol": "Ð…Ðœ" }
        ],
        "languages": [
            {
                "iso639_1": "tg",
                "iso639_2": "tgk",
                "name": "Tajik",
                "nativeName": "Ñ‚Ð¾Ò·Ð¸ÐºÓ£"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "TajiquistÃ£o",
            "pt": "TajiquistÃ£o",
            "nl": "Tadzjikistan",
            "hr": "TaÄ‘ikistan",
            "fa": "ØªØ§Ø¬ÛŒÚ©Ø³ØªØ§Ù†",
            "de": "Tadschikistan",
            "es": "TayikistÃ¡n",
            "fr": "Tadjikistan",
            "ja": "ã‚¿ã‚¸ã‚­ã‚¹ã‚¿ãƒ³",
            "it": "Tagikistan",
            "hu": "TÃ¡dzsikisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/tjk.svg",
            "https://restcountries.com/data/png/tjk.png"
        ],
        "cioc": "TJK",
        "independent": true
    },
    {
        "name": "Tanzania, United Republic of",
        "topLevelDomain": [".tz"],
        "alpha2Code": "TZ",
        "alpha3Code": "TZA",
        "callingCodes": ["255"],
        "capital": "Dodoma",
        "altSpellings": [
            "TZ",
            "United Republic of Tanzania",
            "Jamhuri ya Muungano wa Tanzania"
        ],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 55155000,
        "latlng": [-6.0, 35.0],
        "demonym": "Tanzanian",
        "area": 945087.0,
        "gini": 37.6,
        "timezones": ["UTC+03:00"],
        "borders": ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"],
        "nativeName": "Tanzania",
        "numericCode": "834",
        "currencies": [
            { "code": "TZS", "name": "Tanzanian shilling", "symbol": "Sh" }
        ],
        "languages": [
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "TanzÃ¢nia",
            "pt": "TanzÃ¢nia",
            "nl": "Tanzania",
            "hr": "Tanzanija",
            "fa": "ØªØ§Ù†Ø²Ø§Ù†ÛŒØ§",
            "de": "Tansania",
            "es": "Tanzania",
            "fr": "Tanzanie",
            "ja": "ã‚¿ãƒ³ã‚¶ãƒ‹ã‚¢",
            "it": "Tanzania",
            "hu": "TÃ¡dzsikisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/tza.svg",
            "https://restcountries.com/data/png/tza.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "TAN",
        "independent": true
    },
    {
        "name": "Thailand",
        "topLevelDomain": [".th"],
        "alpha2Code": "TH",
        "alpha3Code": "THA",
        "callingCodes": ["66"],
        "capital": "Bangkok",
        "altSpellings": [
            "TH",
            "Prathet",
            "Thai",
            "Kingdom of Thailand",
            "à¸£à¸²à¸Šà¸­à¸²à¸“à¸²à¸ˆà¸±à¸à¸£à¹„à¸—à¸¢",
            "Ratcha Anachak Thai"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 65327652,
        "latlng": [15.0, 100.0],
        "demonym": "Thai",
        "area": 513120.0,
        "gini": 40.0,
        "timezones": ["UTC+07:00"],
        "borders": ["MMR", "KHM", "LAO", "MYS"],
        "nativeName": "à¸›à¸£à¸°à¹€à¸—à¸¨à¹„à¸—à¸¢",
        "numericCode": "764",
        "currencies": [{ "code": "THB", "name": "Thai baht", "symbol": "à¸¿" }],
        "languages": [
            {
                "iso639_1": "th",
                "iso639_2": "tha",
                "name": "Thai",
                "nativeName": "à¹„à¸—à¸¢"
            }
        ],
        "translations": {
            "br": "TailÃ¢ndia",
            "pt": "TailÃ¢ndia",
            "nl": "Thailand",
            "hr": "Tajland",
            "fa": "ØªØ§ÛŒÙ„Ù†Ø¯",
            "de": "Thailand",
            "es": "Tailandia",
            "fr": "ThaÃ¯lande",
            "ja": "ã‚¿ã‚¤",
            "it": "Tailandia",
            "hu": "ThaifÃ¶ld"
        },
        "flags": [
            "https://restcountries.com/data/tha.svg",
            "https://restcountries.com/data/png/tha.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "THA",
        "independent": true
    },
    {
        "name": "Timor-Leste",
        "topLevelDomain": [".tl"],
        "alpha2Code": "TL",
        "alpha3Code": "TLS",
        "callingCodes": ["670"],
        "capital": "Dili",
        "altSpellings": [
            "TL",
            "East Timor",
            "Democratic Republic of Timor-Leste",
            "RepÃºblica DemocrÃ¡tica de Timor-Leste",
            "RepÃºblika DemokrÃ¡tika TimÃ³r-Leste"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 1167242,
        "latlng": [-8.83333333, 125.91666666],
        "demonym": "East Timorese",
        "area": 14874.0,
        "gini": 31.9,
        "timezones": ["UTC+09:00"],
        "borders": ["IDN"],
        "nativeName": "Timor-Leste",
        "numericCode": "626",
        "currencies": [{ "code": "THB", "name": "Thai baht", "symbol": "à¸¿" }],
        "languages": [
            {
                "iso639_1": "pt",
                "iso639_2": "por",
                "name": "Portuguese",
                "nativeName": "PortuguÃªs"
            }
        ],
        "translations": {
            "br": "Timor Leste",
            "pt": "Timor Leste",
            "nl": "Oost-Timor",
            "hr": "IstoÄni Timor",
            "fa": "ØªÛŒÙ…ÙˆØ± Ø´Ø±Ù‚ÛŒ",
            "de": "Timor-Leste",
            "es": "Timor Oriental",
            "fr": "Timor oriental",
            "ja": "æ±ãƒ†ã‚£ãƒ¢ãƒ¼ãƒ«",
            "it": "Timor Est",
            "hu": "Kelet-Timor"
        },
        "flags": [
            "https://restcountries.com/data/tls.svg",
            "https://restcountries.com/data/png/tls.png"
        ],
        "cioc": "TLS",
        "independent": true
    },
    {
        "name": "Togo",
        "topLevelDomain": [".tg"],
        "alpha2Code": "TG",
        "alpha3Code": "TGO",
        "callingCodes": ["228"],
        "capital": "LomÃ©",
        "altSpellings": [
            "TG",
            "Togolese",
            "Togolese Republic",
            "RÃ©publique Togolaise"
        ],
        "region": "Western Africa",
        "continent": "Africa",
        "population": 7143000,
        "latlng": [8.0, 1.16666666],
        "demonym": "Togolese",
        "area": 56785.0,
        "gini": 34.4,
        "timezones": ["UTC"],
        "borders": ["BEN", "BFA", "GHA"],
        "nativeName": "Togo",
        "numericCode": "768",
        "currencies": [
            { "code": "XOF", "name": "West African CFA franc", "symbol": "Fr" }
        ],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Togo",
            "pt": "Togo",
            "nl": "Togo",
            "hr": "Togo",
            "fa": "ØªÙˆÚ¯Ùˆ",
            "de": "Togo",
            "es": "Togo",
            "fr": "Togo",
            "ja": "ãƒˆãƒ¼ã‚´",
            "it": "Togo",
            "hu": "Togo"
        },
        "flags": [
            "https://restcountries.com/data/tgo.svg",
            "https://restcountries.com/data/png/tgo.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "TOG",
        "independent": true
    },
    {
        "name": "Tokelau",
        "topLevelDomain": [".tk"],
        "alpha2Code": "TK",
        "alpha3Code": "TKL",
        "callingCodes": ["690"],
        "capital": "Fakaofo",
        "altSpellings": ["TK"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 1411,
        "latlng": [-9.0, -172.0],
        "demonym": "Tokelauan",
        "area": 12.0,
        "timezones": ["UTC+13:00"],
        "nativeName": "Tokelau",
        "numericCode": "772",
        "currencies": [
            { "code": "NZD", "name": "New Zealand dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Tokelau",
            "pt": "Toquelau",
            "nl": "Tokelau",
            "hr": "Tokelau",
            "fa": "ØªÙˆÚ©Ù„Ø§Ø¦Ùˆ",
            "de": "Tokelau",
            "es": "Islas Tokelau",
            "fr": "Tokelau",
            "ja": "ãƒˆã‚±ãƒ©ã‚¦",
            "it": "Isole Tokelau",
            "hu": "Tokelau-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/tkl.svg",
            "https://restcountries.com/data/png/tkl.png"
        ],
        "independent": false
    },
    {
        "name": "Tonga",
        "topLevelDomain": [".to"],
        "alpha2Code": "TO",
        "alpha3Code": "TON",
        "callingCodes": ["676"],
        "capital": "Nuku'alofa",
        "altSpellings": ["TO"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 103252,
        "latlng": [-20.0, -175.0],
        "demonym": "Tongan",
        "area": 747.0,
        "timezones": ["UTC+13:00"],
        "nativeName": "Tonga",
        "numericCode": "776",
        "currencies": [
            { "code": "TOP", "name": "Tongan paÊ»anga", "symbol": "T" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "to",
                "iso639_2": "ton",
                "name": "Tonga (Tonga Islands)",
                "nativeName": "faka Tonga"
            }
        ],
        "translations": {
            "br": "Tonga",
            "pt": "Tonga",
            "nl": "Tonga",
            "hr": "Tonga",
            "fa": "ØªÙˆÙ†Ú¯Ø§",
            "de": "Tonga",
            "es": "Tonga",
            "fr": "Tonga",
            "ja": "ãƒˆãƒ³ã‚¬",
            "it": "Tonga",
            "hu": "Tonga"
        },
        "flags": [
            "https://restcountries.com/data/ton.svg",
            "https://restcountries.com/data/png/ton.png"
        ],
        "cioc": "TGA",
        "independent": true
    },
    {
        "name": "Trinidad and Tobago",
        "topLevelDomain": [".tt"],
        "alpha2Code": "TT",
        "alpha3Code": "TTO",
        "callingCodes": ["1"],
        "capital": "Port of Spain",
        "altSpellings": ["TT", "Republic of Trinidad and Tobago"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 1349667,
        "latlng": [11.0, -61.0],
        "demonym": "Trinidadian",
        "area": 5130.0,
        "gini": 40.3,
        "timezones": ["UTC-04:00"],
        "nativeName": "Trinidad and Tobago",
        "numericCode": "780",
        "currencies": [
            { "code": "TTD", "name": "Trinidad and Tobago dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Trinidad e Tobago",
            "pt": "Trindade e Tobago",
            "nl": "Trinidad en Tobago",
            "hr": "Trinidad i Tobago",
            "fa": "ØªØ±ÛŒÙ†ÛŒØ¯Ø§Ø¯ Ùˆ ØªÙˆØ¨Ø§Ú¯Ùˆ",
            "de": "Trinidad und Tobago",
            "es": "Trinidad y Tobago",
            "fr": "TrinitÃ© et Tobago",
            "ja": "ãƒˆãƒªãƒ‹ãƒ€ãƒ¼ãƒ‰ãƒ»ãƒˆãƒã‚´",
            "it": "Trinidad e Tobago",
            "hu": "Trinidad Ã­s Tobago"
        },
        "flags": [
            "https://restcountries.com/data/tto.svg",
            "https://restcountries.com/data/png/tto.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "CARICOM",
                "name": "Caribbean Community",
                "otherNames": [
                    "Comunidad del Caribe",
                    "CommunautÃ© CaribÃ©enne",
                    "Caribische Gemeenschap"
                ]
            }
        ],
        "cioc": "TTO",
        "independent": true
    },
    {
        "name": "Tunisia",
        "topLevelDomain": [".tn"],
        "alpha2Code": "TN",
        "alpha3Code": "TUN",
        "callingCodes": ["216"],
        "capital": "Tunis",
        "altSpellings": [
            "TN",
            "Republic of Tunisia",
            "al-JumhÅ«riyyah at-TÅ«nisiyyah"
        ],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 11154400,
        "latlng": [34.0, 9.0],
        "demonym": "Tunisian",
        "area": 163610.0,
        "gini": 41.4,
        "timezones": ["UTC+01:00"],
        "borders": ["DZA", "LBY"],
        "nativeName": "ØªÙˆÙ†Ø³",
        "numericCode": "788",
        "currencies": [
            { "code": "TND", "name": "Tunisian dinar", "symbol": "Ø¯.Øª" }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "TunÃ­sia",
            "pt": "TunÃ­sia",
            "nl": "TunesiÃ«",
            "hr": "Tunis",
            "fa": "ØªÙˆÙ†Ø³",
            "de": "Tunesien",
            "es": "TÃºnez",
            "fr": "Tunisie",
            "ja": "ãƒãƒ¥ãƒ‹ã‚¸ã‚¢",
            "it": "Tunisia",
            "hu": "TunÃ­zia"
        },
        "flags": [
            "https://restcountries.com/data/tun.svg",
            "https://restcountries.com/data/png/tun.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            },
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "TUN",
        "independent": true
    },
    {
        "name": "Turkey",
        "topLevelDomain": [".tr"],
        "alpha2Code": "TR",
        "alpha3Code": "TUR",
        "callingCodes": ["90"],
        "capital": "Ankara",
        "altSpellings": [
            "TR",
            "Turkiye",
            "Republic of Turkey",
            "TÃ¼rkiye Cumhuriyeti"
        ],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 78741053,
        "latlng": [39.0, 35.0],
        "area": 783562.0,
        "gini": 39.0,
        "timezones": ["UTC+03:00"],
        "borders": ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
        "nativeName": "TÃ¼rkiye",
        "numericCode": "792",
        "currencies": [{ "code": "TRY", "name": "Turkish lira", "symbol": "Ö" }],
        "languages": [
            {
                "iso639_1": "tr",
                "iso639_2": "tur",
                "name": "Turkish",
                "nativeName": "TÃ¼rkÃ§e"
            }
        ],
        "translations": {
            "br": "Turquia",
            "pt": "Turquia",
            "nl": "Turkije",
            "hr": "Turska",
            "fa": "ØªØ±Ú©ÛŒÙ‡",
            "de": "TÃ¼rkei",
            "es": "TurquÃ­a",
            "fr": "Turquie",
            "ja": "ãƒˆãƒ«ã‚³",
            "it": "Turchia",
            "hu": "TÃ¶rÃ¶korszÃ¡g"
        },
        "flags": [
            "https://restcountries.com/data/tur.svg",
            "https://restcountries.com/data/png/tur.png"
        ],
        "cioc": "TUR",
        "independent": false
    },
    {
        "name": "Turkmenistan",
        "topLevelDomain": [".tm"],
        "alpha2Code": "TM",
        "alpha3Code": "TKM",
        "callingCodes": ["993"],
        "capital": "Ashgabat",
        "altSpellings": ["TM"],
        "region": "Central Asia",
        "continent": "Asia",
        "population": 4751120,
        "latlng": [40.0, 60.0],
        "demonym": "Turkmen",
        "area": 488100.0,
        "gini": 40.8,
        "timezones": ["UTC+05:00"],
        "borders": ["AFG", "IRN", "KAZ", "UZB"],
        "nativeName": "TÃ¼rkmenistan",
        "numericCode": "795",
        "currencies": [
            { "code": "TMT", "name": "Turkmenistan manat", "symbol": "m" }
        ],
        "languages": [
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "TÃ¼rkmen"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "TurcomenistÃ£o",
            "pt": "TurquemenistÃ£o",
            "nl": "Turkmenistan",
            "hr": "Turkmenistan",
            "fa": "ØªØ±Ú©Ù…Ù†Ø³ØªØ§Ù†",
            "de": "Turkmenistan",
            "es": "TurkmenistÃ¡n",
            "fr": "TurkmÃ©nistan",
            "ja": "ãƒˆãƒ«ã‚¯ãƒ¡ãƒ‹ã‚¹ã‚¿ãƒ³",
            "it": "Turkmenistan",
            "hu": "TÃ¼rkmenisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/tkm.svg",
            "https://restcountries.com/data/png/tkm.png"
        ],
        "cioc": "TKM",
        "independent": true
    },
    {
        "name": "Turks and Caicos Islands",
        "topLevelDomain": [".tc"],
        "alpha2Code": "TC",
        "alpha3Code": "TCA",
        "callingCodes": ["1"],
        "capital": "Cockburn Town",
        "altSpellings": ["TC"],
        "region": "Caribbean",
        "continent": "Americas",
        "population": 31458,
        "latlng": [21.75, -71.58333333],
        "demonym": "Turks and Caicos Islander",
        "area": 948.0,
        "timezones": ["UTC-04:00"],
        "nativeName": "Turks and Caicos Islands",
        "numericCode": "796",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Ilhas Turcas e Caicos",
            "pt": "Ilhas Turcas e Caicos",
            "nl": "Turks- en Caicoseilanden",
            "hr": "Otoci Turks i Caicos",
            "fa": "Ø¬Ø²Ø§ÛŒØ± ØªÙˆØ±Ú©Ø³ Ùˆ Ú©Ø§ÛŒÚ©ÙˆØ³",
            "de": "Turks- und Caicosinseln",
            "es": "Islas Turks y Caicos",
            "fr": "ÃŽles Turques-et-CaÃ¯ques",
            "ja": "ã‚¿ãƒ¼ã‚¯ã‚¹ãƒ»ã‚«ã‚¤ã‚³ã‚¹è«¸å³¶",
            "it": "Isole Turks e Caicos",
            "hu": "Turks- Ã­s Caicos-szigetek"
        },
        "flags": [
            "https://restcountries.com/data/tca.svg",
            "https://restcountries.com/data/png/tca.png"
        ],
        "independent": false
    },
    {
        "name": "Tuvalu",
        "topLevelDomain": [".tv"],
        "alpha2Code": "TV",
        "alpha3Code": "TUV",
        "callingCodes": ["688"],
        "capital": "Funafuti",
        "altSpellings": ["TV"],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 10640,
        "latlng": [-8.0, 178.0],
        "demonym": "Tuvaluan",
        "area": 26.0,
        "timezones": ["UTC+12:00"],
        "nativeName": "Tuvalu",
        "numericCode": "798",
        "currencies": [
            { "code": "AUD", "name": "Australian dollar", "symbol": "" },
            { "code": "TVD[G]", "name": "Tuvaluan dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Tuvalu",
            "pt": "Tuvalu",
            "nl": "Tuvalu",
            "hr": "Tuvalu",
            "fa": "ØªÙˆÙˆØ§Ù„Ùˆ",
            "de": "Tuvalu",
            "es": "Tuvalu",
            "fr": "Tuvalu",
            "ja": "ãƒ„ãƒãƒ«",
            "it": "Tuvalu",
            "hu": "Tuvalu"
        },
        "flags": [
            "https://restcountries.com/data/tuv.svg",
            "https://restcountries.com/data/png/tuv.png"
        ],
        "cioc": "TUV",
        "independent": true
    },
    {
        "name": "Uganda",
        "topLevelDomain": [".ug"],
        "alpha2Code": "UG",
        "alpha3Code": "UGA",
        "callingCodes": ["256"],
        "capital": "Kampala",
        "altSpellings": ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 33860700,
        "latlng": [1.0, 32.0],
        "demonym": "Ugandan",
        "area": 241550.0,
        "gini": 44.3,
        "timezones": ["UTC+03:00"],
        "borders": ["COD", "KEN", "RWA", "SSD", "TZA"],
        "nativeName": "Uganda",
        "numericCode": "800",
        "currencies": [
            { "code": "UGX", "name": "Ugandan shilling", "symbol": "Sh" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            }
        ],
        "translations": {
            "br": "Uganda",
            "pt": "Uganda",
            "nl": "Oeganda",
            "hr": "Uganda",
            "fa": "Ø§ÙˆÚ¯Ø§Ù†Ø¯Ø§",
            "de": "Uganda",
            "es": "Uganda",
            "fr": "Uganda",
            "ja": "ã‚¦ã‚¬ãƒ³ãƒ€",
            "it": "Uganda",
            "hu": "Uganda"
        },
        "flags": [
            "https://restcountries.com/data/uga.svg",
            "https://restcountries.com/data/png/uga.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "UGA",
        "independent": true
    },
    {
        "name": "Ukraine",
        "topLevelDomain": [".ua"],
        "alpha2Code": "UA",
        "alpha3Code": "UKR",
        "callingCodes": ["380"],
        "capital": "Kiev",
        "altSpellings": ["UA", "Ukrayina"],
        "region": "Eastern Europe",
        "continent": "Europe",
        "population": 42692393,
        "latlng": [49.0, 32.0],
        "demonym": "Ukrainian",
        "area": 603700.0,
        "gini": 26.4,
        "timezones": ["UTC+02:00"],
        "borders": ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
        "nativeName": "Ð£ÐºÑ€Ð°Ñ—Ð½Ð°",
        "numericCode": "804",
        "currencies": [
            { "code": "UAH", "name": "Ukrainian hryvnia", "symbol": "â‚´" }
        ],
        "languages": [
            {
                "iso639_1": "uk",
                "iso639_2": "ukr",
                "name": "Ukrainian",
                "nativeName": "Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°"
            }
        ],
        "translations": {
            "br": "UcrÃ¢nia",
            "pt": "UcrÃ¢nia",
            "nl": "OekraÃ¯ne",
            "hr": "Ukrajina",
            "fa": "ÙˆÚ©Ø±Ø§ÛŒÙ†",
            "de": "Ukraine",
            "es": "Ucrania",
            "fr": "Ukraine",
            "ja": "ã‚¦ã‚¯ãƒ©ã‚¤ãƒŠ",
            "it": "Ucraina",
            "hu": "Ukrajna"
        },
        "flags": [
            "https://restcountries.com/data/ukr.svg",
            "https://restcountries.com/data/png/ukr.png"
        ],
        "cioc": "UKR",
        "independent": true
    },
    {
        "name": "United Arab Emirates",
        "topLevelDomain": [".ae"],
        "alpha2Code": "AE",
        "alpha3Code": "ARE",
        "callingCodes": ["971"],
        "capital": "Abu Dhabi",
        "altSpellings": ["AE", "UAE"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 9856000,
        "latlng": [24.0, 54.0],
        "demonym": "Emirati",
        "area": 83600.0,
        "gini": 45.9,
        "timezones": ["UTC+04"],
        "borders": ["OMN", "SAU"],
        "nativeName": "Ø¯ÙˆÙ„Ø© Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©",
        "numericCode": "784",
        "currencies": [
            {
                "code": "AED",
                "name": "United Arab Emirates dirham",
                "symbol": "Ø¯.Ø¥"
            }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "Emirados Ã¡rabes Unidos",
            "pt": "Emirados Ã¡rabes Unidos",
            "nl": "Verenigde Arabische Emiraten",
            "hr": "Ujedinjeni Arapski Emirati",
            "fa": "Ø§Ù…Ø§Ø±Ø§Øª Ù…ØªØ­Ø¯Ù‡ Ø¹Ø±Ø¨ÛŒ",
            "de": "Vereinigte Arabische Emirate",
            "es": "Emiratos Ãrabes Unidos",
            "fr": "Ã‰mirats arabes unis",
            "ja": "ã‚¢ãƒ©ãƒ–é¦–é•·å›½é€£é‚¦",
            "it": "Emirati Arabi Uniti",
            "hu": "EgyesÃ¼lt Arab EmÅ‘rsÃ­gek"
        },
        "flags": [
            "https://restcountries.com/data/are.svg",
            "https://restcountries.com/data/png/are.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "UAE",
        "independent": true
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "topLevelDomain": [".uk"],
        "alpha2Code": "GB",
        "alpha3Code": "GBR",
        "callingCodes": ["44"],
        "capital": "London",
        "altSpellings": ["GB", "UK", "Great Britain"],
        "region": "Northern Europe",
        "continent": "Europe",
        "population": 65110000,
        "latlng": [54.0, -2.0],
        "demonym": "British",
        "area": 242900.0,
        "gini": 34.0,
        "timezones": [
            "UTC-08:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC-02:00",
            "UTC",
            "UTC+01:00",
            "UTC+02:00",
            "UTC+06:00"
        ],
        "borders": ["IRL"],
        "nativeName": "United Kingdom",
        "numericCode": "826",
        "currencies": [{ "code": "GBP", "name": "British pound", "symbol": "Â£" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Reino Unido",
            "pt": "Reino Unido",
            "nl": "Verenigd Koninkrijk",
            "hr": "Ujedinjeno Kraljevstvo",
            "fa": "Ø¨Ø±ÛŒØªØ§Ù†ÛŒØ§ÛŒ Ú©Ø¨ÛŒØ± Ùˆ Ø§ÛŒØ±Ù„Ù†Ø¯ Ø´Ù…Ø§Ù„ÛŒ",
            "de": "Vereinigtes KÃ¶nigreich",
            "es": "Reino Unido",
            "fr": "Royaume-Uni",
            "ja": "ã‚¤ã‚®ãƒªã‚¹",
            "it": "Regno Unito",
            "hu": "Nagy-Britannia"
        },
        "flags": [
            "https://restcountries.com/data/gbr.svg",
            "https://restcountries.com/data/png/gbr.png"
        ],
        "cioc": "GBR",
        "independent": true
    },
    {
        "name": "United States of America",
        "topLevelDomain": [".us"],
        "alpha2Code": "US",
        "alpha3Code": "USA",
        "callingCodes": ["1"],
        "capital": "Washington, D.C.",
        "altSpellings": ["US", "USA", "United States of America"],
        "region": "Northern America",
        "continent": "Americas",
        "population": 323947000,
        "latlng": [38.0, -97.0],
        "demonym": "American",
        "area": 9629091.0,
        "gini": 48.0,
        "timezones": [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "borders": ["CAN", "MEX"],
        "nativeName": "United States",
        "numericCode": "840",
        "currencies": [
            { "code": "USD", "name": "United States dollar", "symbol": "" }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Estados Unidos",
            "pt": "Estados Unidos",
            "nl": "Verenigde Staten",
            "hr": "Sjedinjene AmeriÄke DrÅ¾ave",
            "fa": "Ø§ÛŒØ§Ù„Ø§Øª Ù…ØªØ­Ø¯Ù‡ Ø¢Ù…Ø±ÛŒÚ©Ø§",
            "de": "Vereinigte Staaten von Amerika",
            "es": "Estados Unidos",
            "fr": "Ã‰tats-Unis",
            "ja": "ã‚¢ãƒ¡ãƒªã‚«åˆè¡†å›½",
            "it": "Stati Uniti D'America",
            "hu": "Amerikai EgyesÃ¼lt Ãllamok"
        },
        "flags": [
            "https://restcountries.com/data/usa.svg",
            "https://restcountries.com/data/png/usa.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de AmÃ©rica del Norte",
                    "Accord de Libre-Ã©change Nord-AmÃ©ricain"
                ]
            }
        ],
        "cioc": "USA",
        "independent": true
    },
    {
        "name": "Uruguay",
        "topLevelDomain": [".uy"],
        "alpha2Code": "UY",
        "alpha3Code": "URY",
        "callingCodes": ["598"],
        "capital": "Montevideo",
        "altSpellings": [
            "UY",
            "Oriental Republic of Uruguay",
            "RepÃºblica Oriental del Uruguay"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 3480222,
        "latlng": [-33.0, -56.0],
        "demonym": "Uruguayan",
        "area": 181034.0,
        "gini": 39.7,
        "timezones": ["UTC-03:00"],
        "borders": ["ARG", "BRA"],
        "nativeName": "Uruguay",
        "numericCode": "858",
        "currencies": [{ "code": "UYU", "name": "Uruguayan peso", "symbol": "" }],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Uruguai",
            "pt": "Uruguai",
            "nl": "Uruguay",
            "hr": "Urugvaj",
            "fa": "Ø§Ø±ÙˆÚ¯ÙˆØ¦Ù‡",
            "de": "Uruguay",
            "es": "Uruguay",
            "fr": "Uruguay",
            "ja": "ã‚¦ãƒ«ã‚°ã‚¢ã‚¤",
            "it": "Uruguay",
            "hu": "Uruguay"
        },
        "flags": [
            "https://restcountries.com/data/ury.svg",
            "https://restcountries.com/data/png/ury.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "URU",
        "independent": true
    },
    {
        "name": "Uzbekistan",
        "topLevelDomain": [".uz"],
        "alpha2Code": "UZ",
        "alpha3Code": "UZB",
        "callingCodes": ["998"],
        "capital": "Tashkent",
        "altSpellings": [
            "UZ",
            "Republic of Uzbekistan",
            "Oâ€˜zbekiston Respublikasi",
            "ÐŽÐ·Ð±ÐµÐºÐ¸ÑÑ‚Ð¾Ð½ Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°ÑÐ¸"
        ],
        "region": "Central Asia",
        "continent": "Asia",
        "population": 31576400,
        "latlng": [41.0, 64.0],
        "area": 447400.0,
        "gini": 36.7,
        "timezones": ["UTC+05:00"],
        "borders": ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
        "nativeName": "Oâ€˜zbekiston",
        "numericCode": "860",
        "currencies": [
            { "code": "UZS", "name": "Uzbekistani so'm", "symbol": "so'm" }
        ],
        "languages": [
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "OÊ»zbek"
            },
            {
                "iso639_1": "ru",
                "iso639_2": "rus",
                "name": "Russian",
                "nativeName": "Ð ÑƒÑÑÐºÐ¸Ð¹"
            }
        ],
        "translations": {
            "br": "UzbequistÃ£o",
            "pt": "UsbequistÃ£o",
            "nl": "Oezbekistan",
            "hr": "Uzbekistan",
            "fa": "Ø§Ø²Ø¨Ú©Ø³ØªØ§Ù†",
            "de": "Usbekistan",
            "es": "UzbekistÃ¡n",
            "fr": "OuzbÃ©kistan",
            "ja": "ã‚¦ã‚ºãƒ™ã‚­ã‚¹ã‚¿ãƒ³",
            "it": "Uzbekistan",
            "hu": "ÃœzbegisztÃ¡n"
        },
        "flags": [
            "https://restcountries.com/data/uzb.svg",
            "https://restcountries.com/data/png/uzb.png"
        ],
        "cioc": "UZB",
        "independent": false
    },
    {
        "name": "Vanuatu",
        "topLevelDomain": [".vu"],
        "alpha2Code": "VU",
        "alpha3Code": "VUT",
        "callingCodes": ["678"],
        "capital": "Port Vila",
        "altSpellings": [
            "VU",
            "Republic of Vanuatu",
            "Ripablik blong Vanuatu",
            "RÃ©publique de Vanuatu"
        ],
        "region": "Melanesia",
        "continent": "Oceania",
        "population": 277500,
        "latlng": [-16.0, 167.0],
        "demonym": "Ni-Vanuatu",
        "area": 12189.0,
        "timezones": ["UTC+11:00"],
        "nativeName": "Vanuatu",
        "numericCode": "548",
        "currencies": [{ "code": "VUV", "name": "Vanuatu vatu", "symbol": "Vt" }],
        "languages": [
            {
                "iso639_1": "bi",
                "iso639_2": "bis",
                "name": "Bislama",
                "nativeName": "Bislama"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Vanuatu",
            "pt": "Vanuatu",
            "nl": "Vanuatu",
            "hr": "Vanuatu",
            "fa": "ÙˆØ§Ù†ÙˆØ§ØªÙˆ",
            "de": "Vanuatu",
            "es": "Vanuatu",
            "fr": "Vanuatu",
            "ja": "ãƒãƒŒã‚¢ãƒ„",
            "it": "Vanuatu",
            "hu": "Vanuatu"
        },
        "flags": [
            "https://restcountries.com/data/vut.svg",
            "https://restcountries.com/data/png/vut.png"
        ],
        "cioc": "VAN",
        "independent": true
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "topLevelDomain": [".ve"],
        "alpha2Code": "VE",
        "alpha3Code": "VEN",
        "callingCodes": ["58"],
        "capital": "Caracas",
        "altSpellings": [
            "VE",
            "Bolivarian Republic of Venezuela",
            "RepÃºblica Bolivariana de Venezuela"
        ],
        "region": "South America",
        "continent": "Americas",
        "population": 31028700,
        "latlng": [8.0, -66.0],
        "demonym": "Venezuelan",
        "area": 916445.0,
        "gini": 44.8,
        "timezones": ["UTC-04:00"],
        "borders": ["BRA", "COL", "GUY"],
        "nativeName": "Venezuela",
        "numericCode": "862",
        "currencies": [
            { "code": "VEF", "name": "Venezuelan bolÃ­var", "symbol": "Bs S" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Venezuela",
            "pt": "Venezuela",
            "nl": "Venezuela",
            "hr": "Venezuela",
            "fa": "ÙˆÙ†Ø²ÙˆØ¦Ù„Ø§",
            "de": "Venezuela",
            "es": "Venezuela",
            "fr": "Venezuela",
            "ja": "ãƒ™ãƒã‚ºã‚¨ãƒ©ãƒ»ãƒœãƒªãƒãƒ«å…±å’Œå›½",
            "it": "Venezuela",
            "hu": "Venezuela"
        },
        "flags": [
            "https://restcountries.com/data/ven.svg",
            "https://restcountries.com/data/png/ven.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "USAN",
                "name": "Union of South American Nations",
                "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
                "otherNames": [
                    "UniÃ³n de Naciones Suramericanas",
                    "UniÃ£o de NaÃ§Ãµes Sul-Americanas",
                    "Unie van Zuid-Amerikaanse Naties",
                    "South American Union"
                ]
            }
        ],
        "cioc": "VEN",
        "independent": true
    },
    {
        "name": "Vietnam",
        "topLevelDomain": [".vn"],
        "alpha2Code": "VN",
        "alpha3Code": "VNM",
        "callingCodes": ["84"],
        "capital": "Hanoi",
        "altSpellings": [
            "VN",
            "Socialist Republic of Vietnam",
            "Cá»™ng hÃ²a XÃ£ há»™i chá»§ nghÄ©a Viá»‡t Nam"
        ],
        "region": "South-Eastern Asia",
        "continent": "Asia",
        "population": 92700000,
        "latlng": [16.16666666, 107.83333333],
        "demonym": "Vietnamese",
        "area": 331212.0,
        "gini": 35.6,
        "timezones": ["UTC+07:00"],
        "borders": ["KHM", "CHN", "LAO"],
        "nativeName": "Viá»‡t Nam",
        "numericCode": "704",
        "currencies": [
            { "code": "VND", "name": "Vietnamese Ä‘á»“ng", "symbol": "â‚«" }
        ],
        "languages": [
            {
                "iso639_1": "vi",
                "iso639_2": "vie",
                "name": "Vietnamese",
                "nativeName": "Tiáº¿ng Viá»‡t"
            }
        ],
        "translations": {
            "br": "VietnÃ£",
            "pt": "Vietname",
            "nl": "Vietnam",
            "hr": "Vijetnam",
            "fa": "ÙˆÛŒØªÙ†Ø§Ù…",
            "de": "Vietnam",
            "es": "Vietnam",
            "fr": "ViÃªt Nam",
            "ja": "ãƒ™ãƒˆãƒŠãƒ ",
            "it": "Vietnam",
            "hu": "VietnÃ¡m"
        },
        "flags": [
            "https://restcountries.com/data/vnm.svg",
            "https://restcountries.com/data/png/vnm.png"
        ],
        "regionalBlocs": [
            { "acronym": "ASEAN", "name": "Association of Southeast Asian Nations" }
        ],
        "cioc": "VIE",
        "independent": true
    },
    {
        "name": "Wallis and Futuna",
        "topLevelDomain": [".wf"],
        "alpha2Code": "WF",
        "alpha3Code": "WLF",
        "callingCodes": ["681"],
        "capital": "Mata-Utu",
        "altSpellings": [
            "WF",
            "Territory of the Wallis and Futuna Islands",
            "Territoire des Ã®les Wallis et Futuna"
        ],
        "region": "Polynesia",
        "continent": "Oceania",
        "population": 11750,
        "latlng": [-13.3, -176.2],
        "demonym": "Wallis and Futuna Islander",
        "area": 142.0,
        "timezones": ["UTC+12:00"],
        "nativeName": "Wallis et Futuna",
        "numericCode": "876",
        "currencies": [{ "code": "XPF", "name": "CFP franc", "symbol": "Fr" }],
        "languages": [
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "franÃ§ais"
            }
        ],
        "translations": {
            "br": "Wallis e Futuna",
            "pt": "Wallis e Futuna",
            "nl": "Wallis en Futuna",
            "hr": "Wallis i Fortuna",
            "fa": "ÙˆØ§Ù„ÛŒØ³ Ùˆ ÙÙˆØªÙˆÙ†Ø§",
            "de": "Wallis und Futuna",
            "es": "Wallis y Futuna",
            "fr": "Wallis-et-Futuna",
            "ja": "ã‚¦ã‚©ãƒªã‚¹ãƒ»ãƒ•ãƒ„ãƒŠ",
            "it": "Wallis e Futuna",
            "hu": "Wallis Ã©s Futuna"
        },
        "flags": [
            "https://restcountries.com/data/wlf.svg",
            "https://restcountries.com/data/png/wlf.png"
        ],
        "independent": false
    },
    {
        "name": "Western Sahara",
        "topLevelDomain": [".eh"],
        "alpha2Code": "EH",
        "alpha3Code": "ESH",
        "callingCodes": ["212"],
        "capital": "El AaiÃºn",
        "altSpellings": ["EH", "Taneáº“roft Tutrimt"],
        "region": "Northern Africa",
        "continent": "Africa",
        "population": 510713,
        "latlng": [24.5, -13.0],
        "demonym": "Sahrawi",
        "area": 266000.0,
        "timezones": ["UTC+00:00"],
        "borders": ["DZA", "MRT", "MAR"],
        "nativeName": "Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©",
        "numericCode": "732",
        "currencies": [
            { "code": "MAD", "name": "Moroccan dirham", "symbol": "Ø¯.Ù…." },
            { "code": "DZD", "name": "Algerian dinar", "symbol": "Ø¯.Ø¬" }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "EspaÃ±ol"
            }
        ],
        "translations": {
            "br": "Saara Ocidental",
            "pt": "Saara Ocidental",
            "nl": "Westelijke Sahara",
            "hr": "Zapadna Sahara",
            "fa": "Ø¬Ù…Ù‡ÙˆØ±ÛŒ Ø¯Ù…ÙˆÚ©Ø±Ø§ØªÛŒÚ© Ø¹Ø±Ø¨ÛŒ ØµØ­Ø±Ø§",
            "de": "Westsahara",
            "es": "Sahara Occidental",
            "fr": "Sahara Occidental",
            "ja": "è¥¿ã‚µãƒãƒ©",
            "it": "Sahara Occidentale",
            "hu": "Nyugat-Szahara"
        },
        "flags": [
            "https://restcountries.com/data/esh.svg",
            "https://restcountries.com/data/png/esh.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "independent": false
    },
    {
        "name": "Yemen",
        "topLevelDomain": [".ye"],
        "alpha2Code": "YE",
        "alpha3Code": "YEM",
        "callingCodes": ["967"],
        "capital": "Sana'a",
        "altSpellings": ["YE", "Yemeni Republic", "al-JumhÅ«riyyah al-Yamaniyyah"],
        "region": "Western Asia",
        "continent": "Asia",
        "population": 27478000,
        "latlng": [15.0, 48.0],
        "demonym": "Yemeni",
        "area": 527968.0,
        "gini": 37.7,
        "timezones": ["UTC+03:00"],
        "borders": ["OMN", "SAU"],
        "nativeName": "Ø§Ù„ÙŠÙŽÙ…ÙŽÙ†",
        "numericCode": "887",
        "currencies": [{ "code": "YER", "name": "Yemeni rial", "symbol": "ï·¼" }],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©"
            }
        ],
        "translations": {
            "br": "IÃªmen",
            "pt": "IÃ©men",
            "nl": "Jemen",
            "hr": "Jemen",
            "fa": "ÛŒÙ…Ù†",
            "de": "Jemen",
            "es": "Yemen",
            "fr": "YÃ©men",
            "ja": "ã‚¤ã‚¨ãƒ¡ãƒ³",
            "it": "Yemen",
            "hu": "Jemen"
        },
        "flags": [
            "https://restcountries.com/data/yem.svg",
            "https://restcountries.com/data/png/yem.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø¯ÙˆÙ„ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
                    "JÄmiÊ»at ad-Duwal al-Ê»ArabÄ«yah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "YEM",
        "independent": true
    },
    {
        "name": "Zambia",
        "topLevelDomain": [".zm"],
        "alpha2Code": "ZM",
        "alpha3Code": "ZMB",
        "callingCodes": ["260"],
        "capital": "Lusaka",
        "altSpellings": ["ZM", "Republic of Zambia"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 15933883,
        "latlng": [-15.0, 30.0],
        "demonym": "Zambian",
        "area": 752612.0,
        "gini": 54.6,
        "timezones": ["UTC+02:00"],
        "borders": ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
        "nativeName": "Zambia",
        "numericCode": "894",
        "currencies": [{ "code": "ZMW", "name": "Zambian kwacha", "symbol": "ZK" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "ZÃ¢mbia",
            "pt": "ZÃ¢mbia",
            "nl": "Zambia",
            "hr": "Zambija",
            "fa": "Ø²Ø§Ù…Ø¨ÛŒØ§",
            "de": "Sambia",
            "es": "Zambia",
            "fr": "Zambie",
            "ja": "ã‚¶ãƒ³ãƒ“ã‚¢",
            "it": "Zambia",
            "hu": "Zambia"
        },
        "flags": [
            "https://restcountries.com/data/zmb.svg",
            "https://restcountries.com/data/png/zmb.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "ZAM",
        "independent": true
    },
    {
        "name": "Zimbabwe",
        "topLevelDomain": [".zw"],
        "alpha2Code": "ZW",
        "alpha3Code": "ZWE",
        "callingCodes": ["263"],
        "capital": "Harare",
        "altSpellings": ["ZW", "Republic of Zimbabwe"],
        "region": "Eastern Africa",
        "continent": "Africa",
        "population": 14240168,
        "latlng": [-20.0, 30.0],
        "demonym": "Zimbabwean",
        "area": 390757.0,
        "gini": 57.1,
        "timezones": ["UTC+02:00"],
        "borders": ["BWA", "MOZ", "ZAF", "ZMB"],
        "nativeName": "Zimbabwe",
        "numericCode": "716",
        "currencies": [{ "code": "ZMW", "name": "Zambian kwacha", "symbol": "K" }],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "sn",
                "iso639_2": "sna",
                "name": "Shona",
                "nativeName": "chiShona"
            },
            {
                "iso639_1": "nd",
                "iso639_2": "nde",
                "name": "Northern Ndebele",
                "nativeName": "isiNdebele"
            }
        ],
        "translations": {
            "br": "Zimbabwe",
            "pt": "ZimbabuÃ©",
            "nl": "Zimbabwe",
            "hr": "Zimbabve",
            "fa": "Ø²ÛŒÙ…Ø¨Ø§ÙˆÙ‡",
            "de": "Simbabwe",
            "es": "Zimbabue",
            "fr": "Zimbabwe",
            "ja": "ã‚¸ãƒ³ãƒãƒ–ã‚¨",
            "it": "Zimbabwe",
            "hu": "Zimbabwe"
        },
        "flags": [
            "https://restcountries.com/data/zwe.svg",
            "https://restcountries.com/data/png/zwe.png"
        ],
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "Ø§Ù„Ø§ØªØ­Ø§Ø¯ Ø§Ù„Ø£ÙØ±ÙŠÙ‚ÙŠ",
                    "Union africaine",
                    "UniÃ£o Africana",
                    "UniÃ³n Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "ZIM",
        "independent": true
    }
]

/* ########################################### CLASSE COUNTRY ########################################### */
all_countries = []; // tableau associatif d'objets Country
all_currencies = []; // tableau associatif d'objets Currency


class Country {

    constructor(codeAlpha3, superficie, paysFrontaliers, capitale, continent, gentile, drapeau, nom, population, topLevelDomains, monnaies) {
        this.codeAlpha3 = codeAlpha3;
        this.superficie = superficie;
        this.paysFrontaliers = paysFrontaliers;
        this.capitale = capitale;
        this.continent = continent;
        this.gentile = gentile;
        this.drapeau = drapeau;
        this.nom = nom;
        this.population = population;
        this.topLevelDomains = topLevelDomains;
        this.monnaies = monnaies;
        this.langues = null;
    }


    // Methods 
    toString() {
        return "Nom du pays : " + this.nom;
    }

    // -------------------- METHODS --------------------
    add_country() {
        all_countries[this.get_codeAlpha3()] = this;
    }

    remove_country() {
        // TODO
    }

    getPopDensity() {
        return this.population / this.superficie;
    }

    getBorders() {
        let bordersObject = [];
        for (const value in this.paysFrontaliers) {
            bordersObject.push(all_countries[value]);
        }
        return bordersObject;
    }

    getCurencies() {

    }

    getLanguages() {

    }

    // -------------------- GETTER & SETTER --------------------
    set_codeAlpha3(codeAlpha3) {
        this.codeAlpha3 = codeAlpha3;
    }

    get_codeAlpha3() {
        return this.codeAlpha3;
    }

    set_superficie(superficie) {
        this.superficie = superficie;
    }

    get_superficie() {
        return this.superficie;
    }

    set_paysFrontaliers(paysFrontaliers) {
        this.paysFrontaliers = paysFrontaliers;
    }

    get_paysFrontaliers() {
        return this.paysFrontaliers;
    }

    set_capitale(capitale) {
        this.capitale = capitale;
    }

    get_capitale() {
        return this.capitale;
    }

    set_continent(continent) {
        this.continent = continent;
    }

    get_continent() {
        return this.continent;
    }

    set_gentile(gentile) {
        this.gentile = gentile;
    }

    get_gentile() {
        return this.gentile;
    }

    set_drapeau(drapeau) {
        this.drapeau = drapeau;
    }

    get_drapeau() {
        return this.drapeau;
    }

    set_nom(nom) {
        this.nom = nom;
    }

    get_nom() {
        return this.nom;
    }

    set_population(population) {
        this.population = population;
    }

    get_population() {
        return this.population;
    }

    set_topLevelDomains(topLevelDomains) {
        this.topLevelDomains = topLevelDomains;
    }

    get_topLevelDomains() {
        return this.topLevelDomains;
    }

    set_monnaies(monnaies) {
        this.monnaies = monnaies;
    }

    get_monnaies() {
        return this.monnaies;
    }

    set_langues(langues) {
        this.langues = langues;
    }

    get_langues() {
        return this.langues;
    }
}

/* ########################################### CLASSE CURRENCY ########################################### */
class Currency {

    // Constructor
    constructor(currency) {
        this._currency = currency;
    }

    // Methods
    toString() {
        return "Monnaie du pays : " + this._currency;
    }

    addCurrency() {
        all_currencies.push(this);
    }

    // Methods GETTER & SETTER
    set_currency(currency) {
        this._currency = currency;
    }

    get_currency() {
        return this._currency;
    }
}

/* ########################################### CLASSE LANGUAGE ########################################### */
all_languages = [];
class Language {

    // Constructeur
    constructor(language) {
        this.language = language;
    }

    addLanguage(language) {
        all_languages.push(language);
    }
}

function fill_db() {

    countries.forEach(value => {

        if (value.hasOwnProperty("area")) {
            superficie = value.area;
        } else {
            superficie = null;
        }

        if (value.hasOwnProperty("borders")) {
            paysFrontaliers = value.borders;
        } else {
            paysFrontaliers = null;
        }

        if (value.hasOwnProperty("capital")) {
            capitale = value.capital;
        } else {
            capitale = null;
        }

        if (value.hasOwnProperty("continent")) {
            continent = value.continent;
        } else {
            continent = null;
        }

        if (value.languages[0].hasOwnProperty("nativeName")) {
            gentile = value.languages[0].nativeName;
        } else {
            gentile = null;
        }

        codeAlpha3 = value.alpha3Code;
        drapeau = value.flags[0];
        nom = value.name;
        population = value.population;
        topLevelDomains = value.topLevelDomain;

        let tab_monnaies = [];

        // S'il existe le champ "currencies" dans le pays
        if (value.hasOwnProperty("currencies")) {
            // S'il a au moins 1 dans currencies
            if(value.currencies.length >= 1) {
                for (let i = 0; i < value.currencies.length; i++) {
                    let cpt = 0;
                    // Boucle qui vérifie la monnaie existe déjà dans all_currencies
                    for (let j = 0; j < all_currencies.length; j++) {
                        // console.log(all_currencies[j].get_currency());
                        if(all_currencies[j].get_currency() === value.currencies[i].code) {
                            break;
                        }
                        cpt++;
                    }
                    // Si on n'a pas trouvé la monnaie dans all_currencies
                    if(cpt == all_currencies.length) {
                        let monnaie = new Currency(value.currencies[i].code);
                        tab_monnaies.push(monnaie);
                        monnaie.addCurrency();
                    }
                }
            }
        } else {
            monnaies = null;
        }

        let country = new Country(codeAlpha3, superficie, paysFrontaliers, capitale, continent, gentile, drapeau, nom, population, topLevelDomains, tab_monnaies);

        country.add_country();

        return;
    });

    return;
}

fill_db();

// console.log(all_currencies);