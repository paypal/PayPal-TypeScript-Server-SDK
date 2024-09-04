/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShipmentCarrier
 */
export enum ShipmentCarrier {
  DPDRU = 'DPD_RU',
  BGBULGARIANPOST = 'BG_BULGARIAN_POST',
  KRKOREAPOST = 'KR_KOREA_POST',
  ZACOURIERIT = 'ZA_COURIERIT',
  FREXAPAQ = 'FR_EXAPAQ',
  AREEMIRATESPOST = 'ARE_EMIRATES_POST',
  GAC = 'GAC',
  GEIS = 'GEIS',
  SFEX = 'SF_EX',
  PAGO = 'PAGO',
  MYHERMES = 'MYHERMES',
  DIAMONDEUROGISTICS = 'DIAMOND_EUROGISTICS',
  CORPORATECOURIERSWEBHOOK = 'CORPORATECOURIERS_WEBHOOK',
  BOND = 'BOND',
  OMNIPARCEL = 'OMNIPARCEL',
  SKPOSTA = 'SK_POSTA',
  PUROLATOR = 'PUROLATOR',
  FETCHRWEBHOOK = 'FETCHR_WEBHOOK',
  THEDELIVERYGROUP = 'THEDELIVERYGROUP',
  CELLOSQUARE = 'CELLO_SQUARE',
  TARRIVE = 'TARRIVE',
  COLLIVERY = 'COLLIVERY',
  MAINFREIGHT = 'MAINFREIGHT',
  INDFIRSTFLIGHT = 'IND_FIRSTFLIGHT',
  ACSWORLDWIDE = 'ACSWORLDWIDE',
  AMSTAN = 'AMSTAN',
  OKAYPARCEL = 'OKAYPARCEL',
  ENVIALIAREFERENCE = 'ENVIALIA_REFERENCE',
  SEURES = 'SEUR_ES',
  CONTINENTAL = 'CONTINENTAL',
  FDSEXPRESS = 'FDSEXPRESS',
  AMAZONFBASWISHIP = 'AMAZON_FBA_SWISHIP',
  WYNGS = 'WYNGS',
  DHLACTIVETRACING = 'DHL_ACTIVE_TRACING',
  ZYLLEM = 'ZYLLEM',
  RUSTON = 'RUSTON',
  XPOST = 'XPOST',
  CORREOSES = 'CORREOS_ES',
  DHLFR = 'DHL_FR',
  PANASIA = 'PAN_ASIA',
  BRTIT = 'BRT_IT',
  SREKOREA = 'SRE_KOREA',
  SPEEDEE = 'SPEEDEE',
  TNTUK = 'TNT_UK',
  VENIPAK = 'VENIPAK',
  SHREENANDANCOURIER = 'SHREENANDANCOURIER',
  CROSHOT = 'CROSHOT',
  NIPOSTNG = 'NIPOST_NG',
  EPSTGLBL = 'EPST_GLBL',
  NEWGISTICS = 'NEWGISTICS',
  POSTSLOVENIA = 'POST_SLOVENIA',
  JERSEYPOST = 'JERSEY_POST',
  BOMBINOEXP = 'BOMBINOEXP',
  WMG = 'WMG',
  XQEXPRESS = 'XQ_EXPRESS',
  FURDECO = 'FURDECO',
  LHTEXPRESS = 'LHT_EXPRESS',
  SOUTHAFRICANPOSTOFFICE = 'SOUTH_AFRICAN_POST_OFFICE',
  SPOTON = 'SPOTON',
  DIMERCO = 'DIMERCO',
  CYPRUSPOSTCYP = 'CYPRUS_POST_CYP',
  ABCUSTOM = 'ABCUSTOM',
  INDDELIVREE = 'IND_DELIVREE',
  CNBESTEXPRESS = 'CN_BESTEXPRESS',
  DXSFTP = 'DX_SFTP',
  PICKUPPMYS = 'PICKUPP_MYS',
  FMX = 'FMX',
  HELLMANN = 'HELLMANN',
  SHIPITASIA = 'SHIP_IT_ASIA',
  KERRYECOMMERCE = 'KERRY_ECOMMERCE',
  FRETERAPIDO = 'FRETERAPIDO',
  PITNEYBOWES = 'PITNEY_BOWES',
  XPRESSENDK = 'XPRESSEN_DK',
  SEURSPAPI = 'SEUR_SP_API',
  DELIVERYONTIME = 'DELIVERYONTIME',
  JINSUNG = 'JINSUNG',
  TRANSKARGO = 'TRANS_KARGO',
  SWISHIPDE = 'SWISHIP_DE',
  IVOYWEBHOOK = 'IVOY_WEBHOOK',
  AIRMEEWEBHOOK = 'AIRMEE_WEBHOOK',
  DHLBENELUX = 'DHL_BENELUX',
  FIRSTMILE = 'FIRSTMILE',
  FASTWAYIR = 'FASTWAY_IR',
  HHEXP = 'HH_EXP',
  MYSMYPOSTONLINE = 'MYS_MYPOST_ONLINE',
  TNTNL = 'TNT_NL',
  TIPSA = 'TIPSA',
  TAQBINMY = 'TAQBIN_MY',
  KGMHUB = 'KGMHUB',
  INTEXPRESS = 'INTEXPRESS',
  OVERSEEXP = 'OVERSE_EXP',
  ONECLICK = 'ONECLICK',
  ROADRUNNERFREIGHT = 'ROADRUNNER_FREIGHT',
  GLSCROTIA = 'GLS_CROTIA',
  MRWFTP = 'MRW_FTP',
  BLUEX = 'BLUEX',
  DYLT = 'DYLT',
  DPDIR = 'DPD_IR',
  SINGLBL = 'SIN_GLBL',
  TUFFNELLSREFERENCE = 'TUFFNELLS_REFERENCE',
  CJPACKET = 'CJPACKET',
  MILKMAN = 'MILKMAN',
  ASIGNA = 'ASIGNA',
  ONEWORLDEXPRESS = 'ONEWORLDEXPRESS',
  ROYALMAIL = 'ROYAL_MAIL',
  VIAEXPRESS = 'VIA_EXPRESS',
  TIGFREIGHT = 'TIGFREIGHT',
  ZTOEXPRESS = 'ZTO_EXPRESS',
  TWOGO = 'TWO_GO',
  IML = 'IML',
  INTELVALLEY = 'INTEL_VALLEY',
  EFS = 'EFS',
  UKUKMAIL = 'UK_UK_MAIL',
  RAM = 'RAM',
  ALLIEDEXPRESS = 'ALLIEDEXPRESS',
  APCOVERNIGHT = 'APC_OVERNIGHT',
  SHIPPIT = 'SHIPPIT',
  TFM = 'TFM',
  MXPRESS = 'M_XPRESS',
  HDBBOX = 'HDB_BOX',
  CLEVYLINKS = 'CLEVY_LINKS',
  IBEONE = 'IBEONE',
  FIEGENL = 'FIEGE_NL',
  KWEGLOBAL = 'KWE_GLOBAL',
  CTCEXPRESS = 'CTC_EXPRESS',
  LAOPOST = 'LAO_POST',
  AMAZON = 'AMAZON',
  MORELINK = 'MORE_LINK',
  JX = 'JX',
  EASYMAIL = 'EASY_MAIL',
  ADUIEPYLE = 'ADUIEPYLE',
  GBPANTHER = 'GB_PANTHER',
  EXPRESSSALE = 'EXPRESSSALE',
  SGDETRACK = 'SG_DETRACK',
  TRUNKRSWEBHOOK = 'TRUNKRS_WEBHOOK',
  MATDESPATCH = 'MATDESPATCH',
  DICOM = 'DICOM',
  MBW = 'MBW',
  KHMCAMBODIAPOST = 'KHM_CAMBODIA_POST',
  SINOTRANS = 'SINOTRANS',
  BRTITPARCELID = 'BRT_IT_PARCELID',
  DHLSUPPLYCHAIN = 'DHL_SUPPLY_CHAIN',
  DHLPL = 'DHL_PL',
  TOPYOU = 'TOPYOU',
  PALEXPRESS = 'PALEXPRESS',
  DHLSG = 'DHL_SG',
  CNWEDO = 'CN_WEDO',
  FULFILLME = 'FULFILLME',
  DPDDELISTRACK = 'DPD_DELISTRACK',
  UPSREFERENCE = 'UPS_REFERENCE',
  CARIBOU = 'CARIBOU',
  LOCUSWEBHOOK = 'LOCUS_WEBHOOK',
  DSV = 'DSV',
  CNGOFLY = 'CN_GOFLY',
  P2PTRC = 'P2P_TRC',
  DIRECTPARCELS = 'DIRECTPARCELS',
  NOVAPOSHTAINT = 'NOVA_POSHTA_INT',
  FEDEXPOLAND = 'FEDEX_POLAND',
  CNJCEX = 'CN_JCEX',
  FARINTERNATIONAL = 'FAR_INTERNATIONAL',
  IDEXPRESS = 'IDEXPRESS',
  GANGBAO = 'GANGBAO',
  NEWAY = 'NEWAY',
  POSTNLINT3S = 'POSTNL_INT_3_S',
  RPXID = 'RPX_ID',
  DESIGNERTRANSPORTWEBHOOK = 'DESIGNERTRANSPORT_WEBHOOK',
  GLSSLOVEN = 'GLS_SLOVEN',
  PARCELLEDIN = 'PARCELLED_IN',
  GSIEXPRESS = 'GSI_EXPRESS',
  CONWAY = 'CON_WAY',
  BROUWERTRANSPORT = 'BROUWER_TRANSPORT',
  CPEX = 'CPEX',
  ISRAELPOST = 'ISRAEL_POST',
  DTDCIN = 'DTDC_IN',
  PTTPOST = 'PTT_POST',
  XDEWEBHOOK = 'XDE_WEBHOOK',
  TOLOS = 'TOLOS',
  GIAOHANG = 'GIAO_HANG',
  GEODISESPACE = 'GEODIS_ESPACE',
  MAGYARHU = 'MAGYAR_HU',
  DOORDASHWEBHOOK = 'DOORDASH_WEBHOOK',
  TIKIID = 'TIKI_ID',
  CJHKINTERNATIONAL = 'CJ_HK_INTERNATIONAL',
  STARTRACKEXPRESS = 'STAR_TRACK_EXPRESS',
  HELTHJEM = 'HELTHJEM',
  SFB2C = 'SFB2C',
  FREIGHTQUOTE = 'FREIGHTQUOTE',
  LANDMARKGLOBALREFERENCE = 'LANDMARK_GLOBAL_REFERENCE',
  PARCEL2GO = 'PARCEL2GO',
  DELNEXT = 'DELNEXT',
  RCL = 'RCL',
  CGSEXPRESS = 'CGS_EXPRESS',
  HKPOST = 'HK_POST',
  SAPEXPRESS = 'SAP_EXPRESS',
  PARCELPOSTSG = 'PARCELPOST_SG',
  HERMES = 'HERMES',
  INDSAFEEXPRESS = 'IND_SAFEEXPRESS',
  TOPHATTEREXPRESS = 'TOPHATTEREXPRESS',
  MGLOBAL = 'MGLOBAL',
  AVERITT = 'AVERITT',
  LEADER = 'LEADER',
  _2EBOX = '_2EBOX',
  SGSPEEDPOST = 'SG_SPEEDPOST',
  DBSCHENKERSE = 'DBSCHENKER_SE',
  ISRPOSTDOMESTIC = 'ISR_POST_DOMESTIC',
  BESTWAYPARCEL = 'BESTWAYPARCEL',
  ASENDIADE = 'ASENDIA_DE',
  NIGHTLINEUK = 'NIGHTLINE_UK',
  TAQBINSG = 'TAQBIN_SG',
  TCKEXPRESS = 'TCK_EXPRESS',
  ENDEAVOURDELIVERY = 'ENDEAVOUR_DELIVERY',
  NANJINGWOYUAN = 'NANJINGWOYUAN',
  HEPPNERFR = 'HEPPNER_FR',
  EMPSCN = 'EMPS_CN',
  FONSEN = 'FONSEN',
  PICKRR = 'PICKRR',
  APCOVERNIGHTCONNUM = 'APC_OVERNIGHT_CONNUM',
  STARTRACKNEXTFLIGHT = 'STAR_TRACK_NEXT_FLIGHT',
  DAJIN = 'DAJIN',
  UPSFREIGHT = 'UPS_FREIGHT',
  POSTAPLUS = 'POSTA_PLUS',
  CEVA = 'CEVA',
  ANSERX = 'ANSERX',
  JSEXPRESS = 'JS_EXPRESS',
  PADTF = 'PADTF',
  UPSMAILINNOVATIONS = 'UPS_MAIL_INNOVATIONS',
  EZSHIP = 'EZSHIP',
  SYPOST = 'SYPOST',
  AMAZONSHIPMCF = 'AMAZON_SHIP_MCF',
  YUSEN = 'YUSEN',
  BRING = 'BRING',
  SDAIT = 'SDA_IT',
  GBA = 'GBA',
  NEWEGGEXPRESS = 'NEWEGGEXPRESS',
  SPEEDCOURIERSGR = 'SPEEDCOURIERS_GR',
  FORRUN = 'FORRUN',
  PICKUP = 'PICKUP',
  ECMS = 'ECMS',
  INTELIPOST = 'INTELIPOST',
  FLASHEXPRESS = 'FLASHEXPRESS',
  CNSTO = 'CN_STO',
  SEKOSFTP = 'SEKO_SFTP',
  HOMEDELIVERYSOLUTIONS = 'HOME_DELIVERY_SOLUTIONS',
  DPDHGRY = 'DPD_HGRY',
  KERRYTTCVN = 'KERRYTTC_VN',
  JOYINGBOX = 'JOYING_BOX',
  TOTALEXPRESS = 'TOTAL_EXPRESS',
  ZJSEXPRESS = 'ZJS_EXPRESS',
  STARKEN = 'STARKEN',
  DEMANDSHIP = 'DEMANDSHIP',
  CNDPEX = 'CN_DPEX',
  AUPOSTCN = 'AUPOST_CN',
  LOGISTERS = 'LOGISTERS',
  GOGLOBALPOST = 'GOGLOBALPOST',
  GLSCZ = 'GLS_CZ',
  PAACKWEBHOOK = 'PAACK_WEBHOOK',
  GRABWEBHOOK = 'GRAB_WEBHOOK',
  PARCELPOINT = 'PARCELPOINT',
  ICUMULUS = 'ICUMULUS',
  DAIGLOBALTRACK = 'DAIGLOBALTRACK',
  GLOBALIPARCEL = 'GLOBAL_IPARCEL',
  YURTICIKARGO = 'YURTICI_KARGO',
  CNPAYPALPACKAGE = 'CN_PAYPAL_PACKAGE',
  PARCEL2POST = 'PARCEL_2_POST',
  GLSIT = 'GLS_IT',
  PILLOGISTICS = 'PIL_LOGISTICS',
  HEPPNER = 'HEPPNER',
  GENERALOVERNIGHT = 'GENERAL_OVERNIGHT',
  HAPPY2POINT = 'HAPPY2POINT',
  CHITCHATS = 'CHITCHATS',
  SMOOTH = 'SMOOTH',
  CLELOGISTICS = 'CLE_LOGISTICS',
  FIEGE = 'FIEGE',
  MXCARGO = 'MX_CARGO',
  ZIINGFINALMILE = 'ZIINGFINALMILE',
  DAYTONFREIGHT = 'DAYTON_FREIGHT',
  TCS = 'TCS',
  AEX = 'AEX',
  HERMESDE = 'HERMES_DE',
  ROUTIFICWEBHOOK = 'ROUTIFIC_WEBHOOK',
  GLOBAVEND = 'GLOBAVEND',
  CJLOGISTICS = 'CJ_LOGISTICS',
  PALLETNETWORK = 'PALLET_NETWORK',
  RAFPH = 'RAF_PH',
  UKXDP = 'UK_XDP',
  PAPEREXPRESS = 'PAPER_EXPRESS',
  LAPOSTESUIVI = 'LA_POSTE_SUIVI',
  PAQUETEXPRESS = 'PAQUETEXPRESS',
  LIEFERY = 'LIEFERY',
  STRECKTRANSPORT = 'STRECK_TRANSPORT',
  PONYEXPRESS = 'PONY_EXPRESS',
  ALWAYSEXPRESS = 'ALWAYS_EXPRESS',
  GBSBROKER = 'GBS_BROKER',
  CITYLINKMY = 'CITYLINK_MY',
  ALLJOY = 'ALLJOY',
  YODEL = 'YODEL',
  YODELDIR = 'YODEL_DIR',
  STONE3PL = 'STONE3PL',
  PARCELPALWEBHOOK = 'PARCELPAL_WEBHOOK',
  DHLECOMERCEASA = 'DHL_ECOMERCE_ASA',
  SIMPLYPOST = 'SIMPLYPOST',
  KYEXPRESS = 'KY_EXPRESS',
  SHENZHEN = 'SHENZHEN',
  USLASERSHIP = 'US_LASERSHIP',
  UCEXPRE = 'UC_EXPRE',
  DIDADI = 'DIDADI',
  CJKR = 'CJ_KR',
  DBSCHENKERB2B = 'DBSCHENKER_B2B',
  MXE = 'MXE',
  CAEDELIVERS = 'CAE_DELIVERS',
  PFCEXPRESS = 'PFCEXPRESS',
  WHISTL = 'WHISTL',
  WEPOST = 'WEPOST',
  DHLPARCELES = 'DHL_PARCEL_ES',
  DDEXPRESS = 'DDEXPRESS',
  ARAMEXAU = 'ARAMEX_AU',
  BNEED = 'BNEED',
  HKTGX = 'HK_TGX',
  LATVIJASPASTS = 'LATVIJAS_PASTS',
  VIAEUROPE = 'VIAEUROPE',
  CORREOUY = 'CORREO_UY',
  CHRONOPOSTFR = 'CHRONOPOST_FR',
  JNET = 'J_NET',
  _6LS = '_6LS',
  BLRBELPOST = 'BLR_BELPOST',
  BIRDSYSTEM = 'BIRDSYSTEM',
  DOBROPOST = 'DOBROPOST',
  WAHANAID = 'WAHANA_ID',
  WEASHIP = 'WEASHIP',
  SONICTL = 'SONICTL',
  KWT = 'KWT',
  AFLLOGFTP = 'AFLLOG_FTP',
  SKYNETWORLDWIDE = 'SKYNET_WORLDWIDE',
  NOVAPOSHTA = 'NOVA_POSHTA',
  SEINO = 'SEINO',
  SZENDEX = 'SZENDEX',
  BPOSTINT = 'BPOST_INT',
  DBSCHENKERSV = 'DBSCHENKER_SV',
  AODEUTSCHLAND = 'AO_DEUTSCHLAND',
  EUFLEETSOLUTIONS = 'EU_FLEET_SOLUTIONS',
  PCFCORP = 'PCFCORP',
  LINKBRIDGE = 'LINKBRIDGE',
  PRIMAMULTICIPTA = 'PRIMAMULTICIPTA',
  COUREX = 'COUREX',
  ZAJILEXPRESS = 'ZAJIL_EXPRESS',
  COLLECTCO = 'COLLECTCO',
  JTEXPRESS = 'JTEXPRESS',
  FEDEXUK = 'FEDEX_UK',
  USHIP = 'USHIP',
  PIXSELL = 'PIXSELL',
  SHIPTOR = 'SHIPTOR',
  CDEK = 'CDEK',
  VNMVIETTELPOST = 'VNM_VIETTELPOST',
  CJCENTURY = 'CJ_CENTURY',
  GSO = 'GSO',
  VIWO = 'VIWO',
  SKYBOX = 'SKYBOX',
  KERRYTJ = 'KERRYTJ',
  NTLOGISTICSVN = 'NTLOGISTICS_VN',
  SDHSCM = 'SDH_SCM',
  ZINC = 'ZINC',
  DPESOUTHAFRC = 'DPE_SOUTH_AFRC',
  CESKACZ = 'CESKA_CZ',
  ACSGR = 'ACS_GR',
  DEALERSEND = 'DEALERSEND',
  JOCOM = 'JOCOM',
  CSE = 'CSE',
  TFORCEFINALMILE = 'TFORCE_FINALMILE',
  SHIPGATE = 'SHIP_GATE',
  SHIPTER = 'SHIPTER',
  NATIONALSAMEDAY = 'NATIONAL_SAMEDAY',
  YUNEXPRESS = 'YUNEXPRESS',
  CAINIAO = 'CAINIAO',
  DMSMATRIX = 'DMS_MATRIX',
  DIRECTLOG = 'DIRECTLOG',
  ASENDIAUS = 'ASENDIA_US',
  _3JMSLOGISTICS = '_3JMSLOGISTICS',
  LICCARDIEXPRESS = 'LICCARDI_EXPRESS',
  SKYPOSTAL = 'SKY_POSTAL',
  CNWANGTONG = 'CNWANGTONG',
  POSTNORDLOGISTICSDK = 'POSTNORD_LOGISTICS_DK',
  LOGISTIKA = 'LOGISTIKA',
  CELERITAS = 'CELERITAS',
  PRESSIODE = 'PRESSIODE',
  SHREEMARUTI = 'SHREE_MARUTI',
  LOGISTICSWORLDWIDEHK = 'LOGISTICSWORLDWIDE_HK',
  EFEX = 'EFEX',
  LOTTE = 'LOTTE',
  LONESTAR = 'LONESTAR',
  APRISAEXPRESS = 'APRISAEXPRESS',
  BELRS = 'BEL_RS',
  OSMWORLDWIDE = 'OSM_WORLDWIDE',
  WESTGATEGL = 'WESTGATE_GL',
  FASTRACK = 'FASTRACK',
  DTDEXPR = 'DTD_EXPR',
  ALFATREX = 'ALFATREX',
  PROMEDDELIVERY = 'PROMEDDELIVERY',
  THABITLOGISTICS = 'THABIT_LOGISTICS',
  HCTLOGISTICS = 'HCT_LOGISTICS',
  CARRYFLAP = 'CARRY_FLAP',
  USOLDDOMINION = 'US_OLD_DOMINION',
  ANICAMBOX = 'ANICAM_BOX',
  WANBEXPRESS = 'WANBEXPRESS',
  ANPOST = 'AN_POST',
  DPDLOCAL = 'DPD_LOCAL',
  STALLIONEXPRESS = 'STALLIONEXPRESS',
  RAIDEREX = 'RAIDEREX',
  SHOPFANS = 'SHOPFANS',
  KYUNGDONGPARCEL = 'KYUNGDONG_PARCEL',
  CHAMPIONLOGISTICS = 'CHAMPION_LOGISTICS',
  PICKUPPSGP = 'PICKUPP_SGP',
  MORNINGEXPRESS = 'MORNING_EXPRESS',
  NACEX = 'NACEX',
  THENILEWEBHOOK = 'THENILE_WEBHOOK',
  HOLISOL = 'HOLISOL',
  LBCEXPRESSFTP = 'LBCEXPRESS_FTP',
  KURASI = 'KURASI',
  USFREDDAWAY = 'USF_REDDAWAY',
  APG = 'APG',
  CNBOXC = 'CN_BOXC',
  ECOSCOOTING = 'ECOSCOOTING',
  MAINWAY = 'MAINWAY',
  PAPERFLY = 'PAPERFLY',
  HOUNDEXPRESS = 'HOUNDEXPRESS',
  BOXBERRY = 'BOX_BERRY',
  EPBOX = 'EP_BOX',
  PLUSLOGUK = 'PLUS_LOG_UK',
  FULFILLA = 'FULFILLA',
  ASE = 'ASE',
  MAILPLUS = 'MAIL_PLUS',
  XPOLOGISTICS = 'XPO_LOGISTICS',
  WNDIRECT = 'WNDIRECT',
  CLOUDWISHASIA = 'CLOUDWISH_ASIA',
  ZELERIS = 'ZELERIS',
  GIOEXPRESS = 'GIO_EXPRESS',
  OCSWORLDWIDE = 'OCS_WORLDWIDE',
  ARKLOGISTICS = 'ARK_LOGISTICS',
  AQUILINE = 'AQUILINE',
  PILOTFREIGHT = 'PILOT_FREIGHT',
  QWINTRY = 'QWINTRY',
  DANSKEFRAGT = 'DANSKE_FRAGT',
  CARRIERS = 'CARRIERS',
  AIRCANADAGLOBAL = 'AIR_CANADA_GLOBAL',
  PRESIDENTTRANS = 'PRESIDENT_TRANS',
  STEPFORWARDFS = 'STEPFORWARDFS',
  SKYNETUK = 'SKYNET_UK',
  PITTOHIO = 'PITTOHIO',
  CORREOSEXPRESS = 'CORREOS_EXPRESS',
  RLUS = 'RL_US',
  MARAXPRESS = 'MARA_XPRESS',
  DESTINY = 'DESTINY',
  UKYODEL = 'UK_YODEL',
  COMETTECH = 'COMET_TECH',
  DHLPARCELRU = 'DHL_PARCEL_RU',
  TNTREFR = 'TNT_REFR',
  SHREEANJANICOURIER = 'SHREE_ANJANI_COURIER',
  MIKROPAKKETBE = 'MIKROPAKKET_BE',
  ETSEXPRESS = 'ETS_EXPRESS',
  COLISPRIVE = 'COLIS_PRIVE',
  CNYUNDA = 'CN_YUNDA',
  AAACOOPER = 'AAA_COOPER',
  ROCKETPARCEL = 'ROCKET_PARCEL',
  _360LION = '_360LION',
  PANDU = 'PANDU',
  PROFESSIONALCOURIERS = 'PROFESSIONAL_COURIERS',
  FLYTEXPRESS = 'FLYTEXPRESS',
  LOGISTICSWORLDWIDEMY = 'LOGISTICSWORLDWIDE_MY',
  CORREOSDEESPANA = 'CORREOS_DE_ESPANA',
  IMX = 'IMX',
  FOURPXEXPRESS = 'FOUR_PX_EXPRESS',
  XPRESSBEES = 'XPRESSBEES',
  PICKUPPVNM = 'PICKUPP_VNM',
  STARTRACKEXPRESS1 = 'STARTRACK_EXPRESS',
  FRCOLISSIMO = 'FR_COLISSIMO',
  NACEXSPAINREFERENCE = 'NACEX_SPAIN_REFERENCE',
  DHLSUPPLYCHAINAU = 'DHL_SUPPLY_CHAIN_AU',
  ESHIPPING = 'ESHIPPING',
  SHREETIRUPATI = 'SHREETIRUPATI',
  HXEXPRESS = 'HX_EXPRESS',
  INDOPAKET = 'INDOPAKET',
  CN17POST = 'CN_17POST',
  K1EXPRESS = 'K1_EXPRESS',
  CJGLS = 'CJ_GLS',
  MYSGDEX = 'MYS_GDEX',
  NATIONEX = 'NATIONEX',
  ANJUN = 'ANJUN',
  FARGOOD = 'FARGOOD',
  SMGEXPRESS = 'SMG_EXPRESS',
  RZYEXPRESS = 'RZYEXPRESS',
  SEFL = 'SEFL',
  TNTCLICKIT = 'TNT_CLICK_IT',
  HDB = 'HDB',
  HIPSHIPPER = 'HIPSHIPPER',
  RPXLOGISTICS = 'RPXLOGISTICS',
  KUEHNE = 'KUEHNE',
  ITNEXIVE = 'IT_NEXIVE',
  PTS = 'PTS',
  SWISSPOSTFTP = 'SWISS_POST_FTP',
  FASTRKSERV = 'FASTRK_SERV',
  _472 = '_4_72',
  USYRC = 'US_YRC',
  POSTNLINTL3S = 'POSTNL_INTL_3S',
  ELIANPOST = 'ELIAN_POST',
  CUBYN = 'CUBYN',
  SAUSAUDIPOST = 'SAU_SAUDI_POST',
  ABXEXPRESSMY = 'ABXEXPRESS_MY',
  HUAHANEXPRESS = 'HUAHAN_EXPRESS',
  INDJAYONEXPRESS = 'IND_JAYONEXPRESS',
  ZESEXPRESS = 'ZES_EXPRESS',
  ZEPTOEXPRESS = 'ZEPTO_EXPRESS',
  SKYNETZA = 'SKYNET_ZA',
  ZEEK2DOOR = 'ZEEK_2_DOOR',
  BLINKLASTMILE = 'BLINKLASTMILE',
  POSTAUKR = 'POSTA_UKR',
  CHROBINSON = 'CHROBINSON',
  CNPOST56 = 'CN_POST56',
  COURANTPLUS = 'COURANT_PLUS',
  SCUDEXEXPRESS = 'SCUDEX_EXPRESS',
  SHIPENTEGRA = 'SHIPENTEGRA',
  BTWOCEUROPE = 'B_TWO_C_EUROPE',
  COPE = 'COPE',
  INDGATI = 'IND_GATI',
  CNWISHPOST = 'CN_WISHPOST',
  NACEXES = 'NACEX_ES',
  TAQBINHK = 'TAQBIN_HK',
  GLOBALTRANZ = 'GLOBALTRANZ',
  HKD = 'HKD',
  BJSHOMEDELIVERY = 'BJSHOMEDELIVERY',
  OMNIVA = 'OMNIVA',
  SUTTON = 'SUTTON',
  PANTHERREFERENCE = 'PANTHER_REFERENCE',
  SFCSERVICE = 'SFCSERVICE',
  LTL = 'LTL',
  PARKNPARCEL = 'PARKNPARCEL',
  SPRINGGDS = 'SPRING_GDS',
  ECEXPRESS = 'ECEXPRESS',
  INTERPARCELAU = 'INTERPARCEL_AU',
  AGILITY = 'AGILITY',
  XLEXPRESS = 'XL_EXPRESS',
  ADERONLINE = 'ADERONLINE',
  DIRECTCOURIERS = 'DIRECTCOURIERS',
  PLANZER = 'PLANZER',
  SENDING = 'SENDING',
  NINJAVANWB = 'NINJAVAN_WB',
  NATIONWIDEMY = 'NATIONWIDE_MY',
  SENDIT = 'SENDIT',
  GBARROW = 'GB_ARROW',
  INDGOJAVAS = 'IND_GOJAVAS',
  KPOST = 'KPOST',
  DHLFREIGHT = 'DHL_FREIGHT',
  BLUECARE = 'BLUECARE',
  JINDOUYUN = 'JINDOUYUN',
  TRACKON = 'TRACKON',
  GBTUFFNELLS = 'GB_TUFFNELLS',
  TRUMPCARD = 'TRUMPCARD',
  ETOTAL = 'ETOTAL',
  SFPLUSWEBHOOK = 'SFPLUS_WEBHOOK',
  SEKOLOGISTICS = 'SEKOLOGISTICS',
  HERMES2MANNHANDLING = 'HERMES_2MANN_HANDLING',
  DPDLOCALREF = 'DPD_LOCAL_REF',
  UDS = 'UDS',
  ZASPECIALISEDFREIGHT = 'ZA_SPECIALISED_FREIGHT',
  THAKERRY = 'THA_KERRY',
  PRTINTSEUR = 'PRT_INT_SEUR',
  BRACORREIOS = 'BRA_CORREIOS',
  NZNZPOST = 'NZ_NZ_POST',
  CNEQUICK = 'CN_EQUICK',
  MYSEMS = 'MYS_EMS',
  GBNORSK = 'GB_NORSK',
  ESPMRW = 'ESP_MRW',
  ESPPACKLINK = 'ESP_PACKLINK',
  KANGAROOMY = 'KANGAROO_MY',
  RPX = 'RPX',
  XDPUKREFERENCE = 'XDP_UK_REFERENCE',
  NINJAVANMY = 'NINJAVAN_MY',
  ADICIONAL = 'ADICIONAL',
  NINJAVANID = 'NINJAVAN_ID',
  ROADBULL = 'ROADBULL',
  YAKIT = 'YAKIT',
  MAILAMERICAS = 'MAILAMERICAS',
  MIKROPAKKET = 'MIKROPAKKET',
  DYNALOGIC = 'DYNALOGIC',
  DHLES = 'DHL_ES',
  DHLPARCELNL = 'DHL_PARCEL_NL',
  DHLGLOBALMAILASIA = 'DHL_GLOBAL_MAIL_ASIA',
  DAWNWING = 'DAWN_WING',
  GENIKIGR = 'GENIKI_GR',
  HERMESWORLDUK = 'HERMESWORLD_UK',
  ALPHAFAST = 'ALPHAFAST',
  BUYLOGIC = 'BUYLOGIC',
  EKART = 'EKART',
  MEXSENDA = 'MEX_SENDA',
  SFCLOGISTICS = 'SFC_LOGISTICS',
  POSTSERBIA = 'POST_SERBIA',
  INDDELHIVERY = 'IND_DELHIVERY',
  DEDPDDELISTRACK = 'DE_DPD_DELISTRACK',
  RPD2MAN = 'RPD2MAN',
  CNSFEXPRESS = 'CN_SF_EXPRESS',
  YANWEN = 'YANWEN',
  MYSSKYNET = 'MYS_SKYNET',
  CORREOSDEMEXICO = 'CORREOS_DE_MEXICO',
  CBLLOGISTICA = 'CBL_LOGISTICA',
  MEXESTAFETA = 'MEX_ESTAFETA',
  AUAUSTRIANPOST = 'AU_AUSTRIAN_POST',
  RINCOS = 'RINCOS',
  NLDDHL = 'NLD_DHL',
  RUSSIANPOST = 'RUSSIAN_POST',
  COURIERSPLEASE = 'COURIERS_PLEASE',
  POSTNORDLOGISTICS = 'POSTNORD_LOGISTICS',
  FEDEX = 'FEDEX',
  DPEEXPRESS = 'DPE_EXPRESS',
  DPD = 'DPD',
  ADSONE = 'ADSONE',
  IDNJNE = 'IDN_JNE',
  THECOURIERGUY = 'THECOURIERGUY',
  CNEXPS = 'CNEXPS',
  PRTCHRONOPOST = 'PRT_CHRONOPOST',
  LANDMARKGLOBAL = 'LANDMARK_GLOBAL',
  ITDHLECOMMERCE = 'IT_DHL_ECOMMERCE',
  ESPNACEX = 'ESP_NACEX',
  PRTCTT = 'PRT_CTT',
  BEKIALA = 'BE_KIALA',
  ASENDIAUK = 'ASENDIA_UK',
  GLOBALTNT = 'GLOBAL_TNT',
  POSTURIS = 'POSTUR_IS',
  EPARCELKR = 'EPARCEL_KR',
  INPOSTPACZKOMATY = 'INPOST_PACZKOMATY',
  ITPOSTEITALIA = 'IT_POSTE_ITALIA',
  BEBPOST = 'BE_BPOST',
  PLPOCZTAPOLSKA = 'PL_POCZTA_POLSKA',
  MYSMYSPOST = 'MYS_MYS_POST',
  SGSGPOST = 'SG_SG_POST',
  THATHAILANDPOST = 'THA_THAILAND_POST',
  LEXSHIP = 'LEXSHIP',
  FASTWAYNZ = 'FASTWAY_NZ',
  DHLAU = 'DHL_AU',
  COSTMETICSNOW = 'COSTMETICSNOW',
  PFLOGISTICS = 'PFLOGISTICS',
  LOOMISEXPRESS = 'LOOMIS_EXPRESS',
  GLSITALY = 'GLS_ITALY',
  LINE = 'LINE',
  GELEXPRESS = 'GEL_EXPRESS',
  HUODULL = 'HUODULL',
  NINJAVANSG = 'NINJAVAN_SG',
  JANIO = 'JANIO',
  AOCOURIER = 'AO_COURIER',
  BRTITSENDERREF = 'BRT_IT_SENDER_REF',
  SAILPOST = 'SAILPOST',
  LALAMOVE = 'LALAMOVE',
  NEWZEALANDCOURIERS = 'NEWZEALAND_COURIERS',
  ETOMARS = 'ETOMARS',
  VIRTRANSPORT = 'VIRTRANSPORT',
  WIZMO = 'WIZMO',
  PALLETWAYS = 'PALLETWAYS',
  IDIKA = 'I_DIKA',
  CFLLOGISTICS = 'CFL_LOGISTICS',
  GEMWORLDWIDE = 'GEMWORLDWIDE',
  GLOBALEXPRESS = 'GLOBAL_EXPRESS',
  LOGISTYXTRANSGROUP = 'LOGISTYX_TRANSGROUP',
  WESTBANKCOURIER = 'WESTBANK_COURIER',
  ARCOSPEDIZIONI = 'ARCO_SPEDIZIONI',
  YDHEXPRESS = 'YDH_EXPRESS',
  PARCELINKLOGISTICS = 'PARCELINKLOGISTICS',
  CNDEXPRESS = 'CNDEXPRESS',
  NOXNIGHTTIMEEXPRESS = 'NOX_NIGHT_TIME_EXPRESS',
  AERONET = 'AERONET',
  LTIANEXP = 'LTIANEXP',
  INTEGRA2FTP = 'INTEGRA2_FTP',
  PARCELONE = 'PARCELONE',
  NOXNACHTEXPRESS = 'NOX_NACHTEXPRESS',
  CNCHINAPOSTEMS = 'CN_CHINA_POST_EMS',
  CHUKOU1 = 'CHUKOU1',
  GLSSLOV = 'GLS_SLOV',
  ORANGEDS = 'ORANGE_DS',
  JOOMLOGIS = 'JOOM_LOGIS',
  AUSSTARTRACK = 'AUS_STARTRACK',
  DHL = 'DHL',
  GBAPC = 'GB_APC',
  BONDSCOURIERS = 'BONDSCOURIERS',
  JPNJAPANPOST = 'JPN_JAPAN_POST',
  USPS = 'USPS',
  WINIT = 'WINIT',
  ARGOCA = 'ARG_OCA',
  TWTAIWANPOST = 'TW_TAIWAN_POST',
  DMMNETWORK = 'DMM_NETWORK',
  TNT = 'TNT',
  BHPOSTA = 'BH_POSTA',
  SWEPOSTNORD = 'SWE_POSTNORD',
  CACANADAPOST = 'CA_CANADA_POST',
  WISELOADS = 'WISELOADS',
  ASENDIAHK = 'ASENDIA_HK',
  NLDGLS = 'NLD_GLS',
  MEXREDPACK = 'MEX_REDPACK',
  JETSHIP = 'JET_SHIP',
  DEDHLEXPRESS = 'DE_DHL_EXPRESS',
  NINJAVANTHAI = 'NINJAVAN_THAI',
  RABENGROUP = 'RABEN_GROUP',
  ESPASM = 'ESP_ASM',
  HRVHRVATSKA = 'HRV_HRVATSKA',
  GLOBALESTES = 'GLOBAL_ESTES',
  LTULIETUVOS = 'LTU_LIETUVOS',
  BELDHL = 'BEL_DHL',
  AUAUPOST = 'AU_AU_POST',
  SPEEDEXCOURIER = 'SPEEDEXCOURIER',
  FRCOLIS = 'FR_COLIS',
  ARAMEX = 'ARAMEX',
  DPEX = 'DPEX',
  MYSAIRPAK = 'MYS_AIRPAK',
  CUCKOOEXPRESS = 'CUCKOOEXPRESS',
  DPDPOLAND = 'DPD_POLAND',
  NLDPOSTNL = 'NLD_POSTNL',
  NIMEXPRESS = 'NIM_EXPRESS',
  QUANTIUM = 'QUANTIUM',
  SENDLE = 'SENDLE',
  ESPREDUR = 'ESP_REDUR',
  MATKAHUOLTO = 'MATKAHUOLTO',
  CPACKET = 'CPACKET',
  POSTI = 'POSTI',
  HUNTEREXPRESS = 'HUNTER_EXPRESS',
  CHOIREXP = 'CHOIR_EXP',
  LEGIONEXPRESS = 'LEGION_EXPRESS',
  AUSTRIANPOSTEXPRESS = 'AUSTRIAN_POST_EXPRESS',
  GRUPO = 'GRUPO',
  POSTARO = 'POSTA_RO',
  INTERPARCELUK = 'INTERPARCEL_UK',
  GLOBALABF = 'GLOBAL_ABF',
  POSTENNORGE = 'POSTEN_NORGE',
  XPERTDELIVERY = 'XPERT_DELIVERY',
  DHLREFR = 'DHL_REFR',
  DHLHK = 'DHL_HK',
  SKYNETUAE = 'SKYNET_UAE',
  GOJEK = 'GOJEK',
  YODELINTNL = 'YODEL_INTNL',
  JANCO = 'JANCO',
  YTO = 'YTO',
  WISEEXPRESS = 'WISE_EXPRESS',
  JTEXPRESSVN = 'JTEXPRESS_VN',
  FEDEXINTLMLSERV = 'FEDEX_INTL_MLSERV',
  VAMOX = 'VAMOX',
  AMSGRP = 'AMS_GRP',
  DHLJP = 'DHL_JP',
  HRPARCEL = 'HRPARCEL',
  GESWL = 'GESWL',
  BLUESTAR = 'BLUESTAR',
  CDEKTR = 'CDEK_TR',
  DESCARTES = 'DESCARTES',
  DELTECUK = 'DELTEC_UK',
  DTDCEXPRESS = 'DTDC_EXPRESS',
  TOURLINE = 'TOURLINE',
  BHWORLDWIDE = 'BH_WORLDWIDE',
  OCS = 'OCS',
  YINGNUOLOGISTICS = 'YINGNUO_LOGISTICS',
  UPS = 'UPS',
  TOLL = 'TOLL',
  PRTSEUR = 'PRT_SEUR',
  DTDCAU = 'DTDC_AU',
  THADYNAMICLOGISTICS = 'THA_DYNAMIC_LOGISTICS',
  UBILOGISTICS = 'UBI_LOGISTICS',
  FEDEXCROSSBORDER = 'FEDEX_CROSSBORDER',
  A1POST = 'A1POST',
  TAZMANIANFREIGHT = 'TAZMANIAN_FREIGHT',
  CJINTMY = 'CJ_INT_MY',
  SAIAFREIGHT = 'SAIA_FREIGHT',
  SGQXPRESS = 'SG_QXPRESS',
  NHANSSOLUTIONS = 'NHANS_SOLUTIONS',
  DPDFR = 'DPD_FR',
  COORDINADORA = 'COORDINADORA',
  ANDREANI = 'ANDREANI',
  DOORA = 'DOORA',
  INTERPARCELNZ = 'INTERPARCEL_NZ',
  PHLJAMEXPRESS = 'PHL_JAMEXPRESS',
  BELBELGIUMPOST = 'BEL_BELGIUM_POST',
  USAPC = 'US_APC',
  IDNPOS = 'IDN_POS',
  FRMONDIAL = 'FR_MONDIAL',
  DEDHL = 'DE_DHL',
  HKRPX = 'HK_RPX',
  DHLPIECEID = 'DHL_PIECEID',
  VNPOSTEMS = 'VNPOST_EMS',
  RRDONNELLEY = 'RRDONNELLEY',
  DPDDE = 'DPD_DE',
  DELCARTIN = 'DELCART_IN',
  IMEXGLOBALSOLUTIONS = 'IMEXGLOBALSOLUTIONS',
  ACOMMERCE = 'ACOMMERCE',
  EURODIS = 'EURODIS',
  CANPAR = 'CANPAR',
  GLS = 'GLS',
  INDECOM = 'IND_ECOM',
  ESPENVIALIA = 'ESP_ENVIALIA',
  DHLUK = 'DHL_UK',
  SMSAEXPRESS = 'SMSA_EXPRESS',
  TNTFR = 'TNT_FR',
  DEXI = 'DEX_I',
  BUDBEEWEBHOOK = 'BUDBEE_WEBHOOK',
  COPACOURIER = 'COPA_COURIER',
  VNMVIETNAMPOST = 'VNM_VIETNAM_POST',
  DPDHK = 'DPD_HK',
  TOLLNZ = 'TOLL_NZ',
  ECHO = 'ECHO',
  FEDEXFR = 'FEDEX_FR',
  BORDEREXPRESS = 'BORDEREXPRESS',
  MAILPLUSJPN = 'MAILPLUS_JPN',
  TNTUKREFR = 'TNT_UK_REFR',
  KEC = 'KEC',
  DPDRO = 'DPD_RO',
  TNTJP = 'TNT_JP',
  THCJ = 'TH_CJ',
  ECCN = 'EC_CN',
  FASTWAYUK = 'FASTWAY_UK',
  FASTWAYUS = 'FASTWAY_US',
  GLSDE = 'GLS_DE',
  GLSES = 'GLS_ES',
  GLSFR = 'GLS_FR',
  MONDIALBE = 'MONDIAL_BE',
  SGTIT = 'SGT_IT',
  TNTCN = 'TNT_CN',
  TNTDE = 'TNT_DE',
  TNTES = 'TNT_ES',
  TNTPL = 'TNT_PL',
  PARCELFORCE = 'PARCELFORCE',
  SWISSPOST = 'SWISS_POST',
  TOLLIPEC = 'TOLL_IPEC',
  AIR21 = 'AIR_21',
  AIRSPEED = 'AIRSPEED',
  BERT = 'BERT',
  BLUEDART = 'BLUEDART',
  COLLECTPLUS = 'COLLECTPLUS',
  COURIERPLUS = 'COURIERPLUS',
  COURIERPOST = 'COURIER_POST',
  DHLGLOBALMAIL = 'DHL_GLOBAL_MAIL',
  DPDUK = 'DPD_UK',
  DELTECDE = 'DELTEC_DE',
  DEUTSCHEDE = 'DEUTSCHE_DE',
  DOTZOT = 'DOTZOT',
  ELTAGR = 'ELTA_GR',
  EMSCN = 'EMS_CN',
  ECARGO = 'ECARGO',
  ENSENDA = 'ENSENDA',
  FERCAMIT = 'FERCAM_IT',
  FASTWAYZA = 'FASTWAY_ZA',
  FASTWAYAU = 'FASTWAY_AU',
  FIRSTLOGISITCS = 'FIRST_LOGISITCS',
  GEODIS = 'GEODIS',
  GLOBEGISTICS = 'GLOBEGISTICS',
  GREYHOUND = 'GREYHOUND',
  JETSHIPMY = 'JETSHIP_MY',
  LIONPARCEL = 'LION_PARCEL',
  AEROFLASH = 'AEROFLASH',
  ONTRAC = 'ONTRAC',
  SAGAWA = 'SAGAWA',
  SIODEMKA = 'SIODEMKA',
  STARTRACK = 'STARTRACK',
  TNTAU = 'TNT_AU',
  TNTIT = 'TNT_IT',
  TRANSMISSION = 'TRANSMISSION',
  YAMATO = 'YAMATO',
  DHLIT = 'DHL_IT',
  DHLAT = 'DHL_AT',
  LOGISTICSWORLDWIDEKR = 'LOGISTICSWORLDWIDE_KR',
  GLSSPAIN = 'GLS_SPAIN',
  AMAZONUKAPI = 'AMAZON_UK_API',
  DPDFRREFERENCE = 'DPD_FR_REFERENCE',
  DHLPARCELUK = 'DHLPARCEL_UK',
  MEGASAVE = 'MEGASAVE',
  QUALITYPOST = 'QUALITYPOST',
  IDSLOGISTICS = 'IDS_LOGISTICS',
  JOYINGBOX1 = 'JOYINGBOX',
  PANTHERORDERNUMBER = 'PANTHER_ORDER_NUMBER',
  WATKINSSHEPARD = 'WATKINS_SHEPARD',
  FASTTRACK = 'FASTTRACK',
  UPEXPRESS = 'UP_EXPRESS',
  ELOGISTICA = 'ELOGISTICA',
  ECOURIER = 'ECOURIER',
  CJPHILIPPINES = 'CJ_PHILIPPINES',
  SPEEDEX = 'SPEEDEX',
  ORANGECONNEX = 'ORANGECONNEX',
  TECOR = 'TECOR',
  SAEE = 'SAEE',
  GLSITALYFTP = 'GLS_ITALY_FTP',
  DELIVERE = 'DELIVERE',
  YYCOM = 'YYCOM',
  ADICIONALPT = 'ADICIONAL_PT',
  DKSH = 'DKSH',
  NIPPONEXPRESSFTP = 'NIPPON_EXPRESS_FTP',
  GOLS = 'GOLS',
  FUJEXP = 'FUJEXP',
  QTRACK = 'QTRACK',
  OMLOGISTICSAPI = 'OMLOGISTICS_API',
  GDPHARM = 'GDPHARM',
  MISUMICN = 'MISUMI_CN',
  AIRCANADA = 'AIR_CANADA',
  CITY56WEBHOOK = 'CITY56_WEBHOOK',
  SAGAWAAPI = 'SAGAWA_API',
  KEDAEX = 'KEDAEX',
  PGEONAPI = 'PGEON_API',
  WEWORLDEXPRESS = 'WEWORLDEXPRESS',
  JTLOGISTICS = 'JT_LOGISTICS',
  TRUSK = 'TRUSK',
  VIAXPRESS = 'VIAXPRESS',
  DHLSUPPLYCHAINID = 'DHL_SUPPLYCHAIN_ID',
  ZUELLIGPHARMASFTP = 'ZUELLIGPHARMA_SFTP',
  MEEST = 'MEEST',
  TOLLPRIORITY = 'TOLL_PRIORITY',
  MOTHERSHIPAPI = 'MOTHERSHIP_API',
  CAPITAL = 'CAPITAL',
  EUROPAKETAPI = 'EUROPAKET_API',
  HFD = 'HFD',
  TOURLINEREFERENCE = 'TOURLINE_REFERENCE',
  GIOECOURIER = 'GIO_ECOURIER',
  CNLOGISTICS = 'CN_LOGISTICS',
  PANDION = 'PANDION',
  BPOSTAPI = 'BPOST_API',
  PASSPORTSHIPPING = 'PASSPORTSHIPPING',
  PAKAJO = 'PAKAJO',
  DACHSER = 'DACHSER',
  YUSENSFTP = 'YUSEN_SFTP',
  SHYPLITE = 'SHYPLITE',
  XYY = 'XYY',
  MWD = 'MWD',
  FAXECARGO = 'FAXECARGO',
  MAZET = 'MAZET',
  FIRSTLOGISTICSAPI = 'FIRST_LOGISTICS_API',
  SPRINTPACK = 'SPRINT_PACK',
  HERMESDEFTP = 'HERMES_DE_FTP',
  CONCISE = 'CONCISE',
  KERRYEXPRESSTWAPI = 'KERRY_EXPRESS_TW_API',
  EWE = 'EWE',
  FASTDESPATCH = 'FASTDESPATCH',
  ABCUSTOMSFTP = 'ABCUSTOM_SFTP',
  CHAZKI = 'CHAZKI',
  SHIPPIE = 'SHIPPIE',
  GEODISAPI = 'GEODIS_API',
  NAQELEXPRESS = 'NAQEL_EXPRESS',
  PAPAWEBHOOK = 'PAPA_WEBHOOK',
  FORWARDAIR = 'FORWARDAIR',
  DIALOGOLOGISTICAAPI = 'DIALOGO_LOGISTICA_API',
  LALAMOVEAPI = 'LALAMOVE_API',
  TOMYDOOR = 'TOMYDOOR',
  KRONOSWEBHOOK = 'KRONOS_WEBHOOK',
  JTCARGO = 'JTCARGO',
  TCAT = 'T_CAT',
  CONCISEWEBHOOK = 'CONCISE_WEBHOOK',
  TELEPORTWEBHOOK = 'TELEPORT_WEBHOOK',
  CUSTOMCOAPI = 'CUSTOMCO_API',
  SPXTH = 'SPX_TH',
  BOLLORELOGISTICS = 'BOLLORE_LOGISTICS',
  CLICKLINKSFTP = 'CLICKLINK_SFTP',
  M3LOGISTICS = 'M3LOGISTICS',
  VNPOSTAPI = 'VNPOST_API',
  AXLEHIREFTP = 'AXLEHIRE_FTP',
  SHADOWFAX = 'SHADOWFAX',
  MYHERMESUKAPI = 'MYHERMES_UK_API',
  DAIICHI = 'DAIICHI',
  MENSAJEROSURBANOSAPI = 'MENSAJEROSURBANOS_API',
  POLARSPEED = 'POLARSPEED',
  IDEXPRESSID = 'IDEXPRESS_ID',
  PAYO = 'PAYO',
  WHISTLSFTP = 'WHISTL_SFTP',
  INTEXDE = 'INTEX_DE',
  TRANS2U = 'TRANS2U',
  PRODUCTCAREGROUPSFTP = 'PRODUCTCAREGROUP_SFTP',
  BIGSMART = 'BIGSMART',
  EXPEDITORSAPIREF = 'EXPEDITORS_API_REF',
  AITWORLDWIDEAPI = 'AITWORLDWIDE_API',
  WORLDCOURIER = 'WORLDCOURIER',
  QUIQUP = 'QUIQUP',
  AGEDISSSFTP = 'AGEDISS_SFTP',
  ANDREANIAPI = 'ANDREANI_API',
  CRLEXPRESS = 'CRLEXPRESS',
  SMARTCAT = 'SMARTCAT',
  CROSSFLIGHT = 'CROSSFLIGHT',
  PROCARRIER = 'PROCARRIER',
  DHLREFERENCEAPI = 'DHL_REFERENCE_API',
  SEINOAPI = 'SEINO_API',
  WSPEXPRESS = 'WSPEXPRESS',
  KRONOS = 'KRONOS',
  TOTALEXPRESSAPI = 'TOTAL_EXPRESS_API',
  PARCLL = 'PARCLL',
  XPEDIGO = 'XPEDIGO',
  STARTRACKWEBHOOK = 'STAR_TRACK_WEBHOOK',
  GPOST = 'GPOST',
  UCS = 'UCS',
  DMFGROUP = 'DMFGROUP',
  COORDINADORAAPI = 'COORDINADORA_API',
  MARKEN = 'MARKEN',
  NTL = 'NTL',
  REDJEPAKKETJE = 'REDJEPAKKETJE',
  ALLIEDEXPRESSFTP = 'ALLIED_EXPRESS_FTP',
  MONDIALRELAYES = 'MONDIALRELAY_ES',
  NAEKOFTP = 'NAEKO_FTP',
  MHI = 'MHI',
  SHIPPIFY = 'SHIPPIFY',
  MALCAAMITAPI = 'MALCA_AMIT_API',
  JTEXPRESSSGAPI = 'JTEXPRESS_SG_API',
  DACHSERWEB = 'DACHSER_WEB',
  FLIGHTLG = 'FLIGHTLG',
  CAGO = 'CAGO',
  COM1EXPRESS = 'COM1EXPRESS',
  TONAMIFTP = 'TONAMI_FTP',
  PACKFLEET = 'PACKFLEET',
  PUROLATORINTERNATIONAL = 'PUROLATOR_INTERNATIONAL',
  WINESHIPPINGWEBHOOK = 'WINESHIPPING_WEBHOOK',
  DHLESSFTP = 'DHL_ES_SFTP',
  PCHOMEAPI = 'PCHOME_API',
  CESKAPOSTAAPI = 'CESKAPOSTA_API',
  GORUSH = 'GORUSH',
  HOMERUNNER = 'HOMERUNNER',
  AMAZONORDER = 'AMAZON_ORDER',
  EFWNOWAPI = 'EFWNOW_API',
  CBLLOGISTICAAPI = 'CBL_LOGISTICA_API',
  NIMBUSPOST = 'NIMBUSPOST',
  LOGWINLOGISTICS = 'LOGWIN_LOGISTICS',
  NOWLOGAPI = 'NOWLOG_API',
  DPDNL = 'DPD_NL',
  GODEPENDABLE = 'GODEPENDABLE',
  ESDEX = 'ESDEX',
  LOGISYSTEMSSFTP = 'LOGISYSTEMS_SFTP',
  EXPEDITORS = 'EXPEDITORS',
  SNTGLOBALAPI = 'SNTGLOBAL_API',
  SHIPX = 'SHIPX',
  QINTLAPI = 'QINTL_API',
  PACKS = 'PACKS',
  POSTNLINTERNATIONAL = 'POSTNL_INTERNATIONAL',
  AMAZONEMAILPUSH = 'AMAZON_EMAIL_PUSH',
  DHLAPI = 'DHL_API',
  SPX = 'SPX',
  AXLEHIRE = 'AXLEHIRE',
  ICSCOURIER = 'ICSCOURIER',
  DIALOGOLOGISTICA = 'DIALOGO_LOGISTICA',
  SHUNBANGEXPRESS = 'SHUNBANG_EXPRESS',
  TCSAPI = 'TCS_API',
  SFEXPRESSCN = 'SF_EXPRESS_CN',
  PACKETA = 'PACKETA',
  SICTELIWAY = 'SIC_TELIWAY',
  MONDIALRELAYFR = 'MONDIALRELAY_FR',
  INTIMEFTP = 'INTIME_FTP',
  JDEXPRESS = 'JD_EXPRESS',
  FASTBOX = 'FASTBOX',
  PATHEON = 'PATHEON',
  INDIAPOST = 'INDIA_POST',
  TIPSAREF = 'TIPSA_REF',
  ECOFREIGHT = 'ECOFREIGHT',
  VOX = 'VOX',
  DIRECTFREIGHTAUREF = 'DIRECTFREIGHT_AU_REF',
  BESTTRANSPORTSFTP = 'BESTTRANSPORT_SFTP',
  AUSTRALIAPOSTAPI = 'AUSTRALIA_POST_API',
  FRAGILEPAKSFTP = 'FRAGILEPAK_SFTP',
  FLIPXP = 'FLIPXP',
  VALUEWEBHOOK = 'VALUE_WEBHOOK',
  DAESHIN = 'DAESHIN',
  SHERPA = 'SHERPA',
  MWDAPI = 'MWD_API',
  SMARTKARGO = 'SMARTKARGO',
  DNJEXPRESS = 'DNJ_EXPRESS',
  GOPEOPLE = 'GOPEOPLE',
  MYSENDLEAPI = 'MYSENDLE_API',
  ARAMEXAPI = 'ARAMEX_API',
  PIDGE = 'PIDGE',
  THAIPARCELS = 'THAIPARCELS',
  PANTHERREFERENCEAPI = 'PANTHER_REFERENCE_API',
  POSTAPLUS1 = 'POSTAPLUS',
  BUFFALO = 'BUFFALO',
  UENVIOS = 'U_ENVIOS',
  ELITECO = 'ELITE_CO',
  BARQEXP = 'BARQEXP',
  ROCHEINTERNALSFTP = 'ROCHE_INTERNAL_SFTP',
  DBSCHENKERICELAND = 'DBSCHENKER_ICELAND',
  TNTFRREFERENCE = 'TNT_FR_REFERENCE',
  NEWGISTICSAPI = 'NEWGISTICSAPI',
  GLOVO = 'GLOVO',
  GWLOGISAPI = 'GWLOGIS_API',
  SPREETAILAPI = 'SPREETAIL_API',
  MOOVA = 'MOOVA',
  PLYCONGROUP = 'PLYCONGROUP',
  USPSWEBHOOK = 'USPS_WEBHOOK',
  REIMAGINEDELIVERY = 'REIMAGINEDELIVERY',
  EDFFTP = 'EDF_FTP',
  DAO365 = 'DAO365',
  BIOCAIRFTP = 'BIOCAIR_FTP',
  RANSAWEBHOOK = 'RANSA_WEBHOOK',
  SHIPXPRES = 'SHIPXPRES',
  COURANTPLUSAPI = 'COURANT_PLUS_API',
  SHIPA = 'SHIPA',
  HOMELOGISTICS = 'HOMELOGISTICS',
  DX = 'DX',
  POSTEITALIANEPACCOCELERE = 'POSTE_ITALIANE_PACCOCELERE',
  TOLLWEBHOOK = 'TOLL_WEBHOOK',
  LCTBRAPI = 'LCTBR_API',
  DXFREIGHT = 'DX_FREIGHT',
  DHLSFTP = 'DHL_SFTP',
  SHIPROCKET = 'SHIPROCKET',
  UBERWEBHOOK = 'UBER_WEBHOOK',
  STATOVERNIGHT = 'STATOVERNIGHT',
  BURD = 'BURD',
  FASTSHIP = 'FASTSHIP',
  IBVENTUREWEBHOOK = 'IBVENTURE_WEBHOOK',
  GATIKWEAPI = 'GATI_KWE_API',
  CRYOPDPFTP = 'CRYOPDP_FTP',
  HUBBED = 'HUBBED',
  TIPSAAPI = 'TIPSA_API',
  ARASKARGO = 'ARASKARGO',
  THIJSNL = 'THIJS_NL',
  ATSHEALTHCAREREFERENCE = 'ATSHEALTHCARE_REFERENCE',
  Enum99MINUTOS = '99MINUTOS',
  HELLENICPOST = 'HELLENIC_POST',
  HSMGLOBAL = 'HSM_GLOBAL',
  MNX = 'MNX',
  NMTRANSFER = 'NMTRANSFER',
  LOGYSTO = 'LOGYSTO',
  INDIAPOSTINT = 'INDIA_POST_INT',
  AMAZONFBASWISHIPIN = 'AMAZON_FBA_SWISHIP_IN',
  SRTTRANSPORT = 'SRT_TRANSPORT',
  BOMI = 'BOMI',
  DELIVERRSFTP = 'DELIVERR_SFTP',
  HSDEXPRESS = 'HSDEXPRESS',
  SIMPLETIREWEBHOOK = 'SIMPLETIRE_WEBHOOK',
  HUNTEREXPRESSSFTP = 'HUNTER_EXPRESS_SFTP',
  UPSAPI = 'UPS_API',
  WOOYOUNGLOGISTICSSFTP = 'WOOYOUNG_LOGISTICS_SFTP',
  PHSEAPI = 'PHSE_API',
  WISHEMAILPUSH = 'WISH_EMAIL_PUSH',
  NORTHLINE = 'NORTHLINE',
  MEDAFRICA = 'MEDAFRICA',
  DPDATSFTP = 'DPD_AT_SFTP',
  ANTERAJA = 'ANTERAJA',
  DHLGLOBALFORWARDINGAPI = 'DHL_GLOBAL_FORWARDING_API',
  LBCEXPRESSAPI = 'LBCEXPRESS_API',
  SIMSGLOBAL = 'SIMSGLOBAL',
  CDLDELIVERS = 'CDLDELIVERS',
  TYP = 'TYP',
  TESTINGCOURIERWEBHOOK = 'TESTING_COURIER_WEBHOOK',
  PANDAGOAPI = 'PANDAGO_API',
  ROYALMAILFTP = 'ROYAL_MAIL_FTP',
  THUNDEREXPRESS = 'THUNDEREXPRESS',
  SECRETLABWEBHOOK = 'SECRETLAB_WEBHOOK',
  SETEL = 'SETEL',
  JDWORLDWIDE = 'JD_WORLDWIDE',
  DPDRUAPI = 'DPD_RU_API',
  ARGENTSWEBHOOK = 'ARGENTS_WEBHOOK',
  POSTONE = 'POSTONE',
  TUSKLOGISTICS = 'TUSKLOGISTICS',
  RHENUSUKAPI = 'RHENUS_UK_API',
  TAQBINSGAPI = 'TAQBIN_SG_API',
  INNTRALOGSFTP = 'INNTRALOG_SFTP',
  DAYROSS = 'DAYROSS',
  CORREOSEXPRESSAPI = 'CORREOSEXPRESS_API',
  INTERNATIONALSEURAPI = 'INTERNATIONAL_SEUR_API',
  YODELAPI = 'YODEL_API',
  HEROEXPRESS = 'HEROEXPRESS',
  DHLSUPPLYCHAININ = 'DHL_SUPPLYCHAIN_IN',
  URGENTCARGUS = 'URGENT_CARGUS',
  FRONTDOORCORP = 'FRONTDOORCORP',
  JTEXPRESSPH = 'JTEXPRESS_PH',
  PARCELSTARSWEBHOOK = 'PARCELSTARS_WEBHOOK',
  DPDSKSFTP = 'DPD_SK_SFTP',
  MOVIANTO = 'MOVIANTO',
  OZEPARTSSHIPPING = 'OZEPARTS_SHIPPING',
  KARGOMKOLAY = 'KARGOMKOLAY',
  TRUNKRS = 'TRUNKRS',
  OMNIRPSWEBHOOK = 'OMNIRPS_WEBHOOK',
  CHILEXPRESS = 'CHILEXPRESS',
  TESTINGCOURIER = 'TESTING_COURIER',
  JNEAPI = 'JNE_API',
  BJSHOMEDELIVERYFTP = 'BJSHOMEDELIVERY_FTP',
  DEXPRESSWEBHOOK = 'DEXPRESS_WEBHOOK',
  USPSAPI = 'USPS_API',
  TRANSVIRTUAL = 'TRANSVIRTUAL',
  SOLISTICAAPI = 'SOLISTICA_API',
  CHIENVENTUREWEBHOOK = 'CHIENVENTURE_WEBHOOK',
  DPDUKSFTP = 'DPD_UK_SFTP',
  INPOSTUK = 'INPOST_UK',
  JAVIT = 'JAVIT',
  ZTODOMESTIC = 'ZTO_DOMESTIC',
  DHLGTAPI = 'DHL_GT_API',
  CEVATRACKING = 'CEVA_TRACKING',
  KOMONEXPRESS = 'KOMON_EXPRESS',
  EASTWESTCOURIERFTP = 'EASTWESTCOURIER_FTP',
  DANNIAO = 'DANNIAO',
  SPECTRAN = 'SPECTRAN',
  DELIVERIT = 'DELIVER_IT',
  RELAISCOLIS = 'RELAISCOLIS',
  GLSSPAINAPI = 'GLS_SPAIN_API',
  POSTPLUS = 'POSTPLUS',
  AIRTERRA = 'AIRTERRA',
  GIOECOURIERAPI = 'GIO_ECOURIER_API',
  DPDCHSFTP = 'DPD_CH_SFTP',
  FEDEXAPI = 'FEDEX_API',
  INTERSMARTTRANS = 'INTERSMARTTRANS',
  HERMESUKSFTP = 'HERMES_UK_SFTP',
  EXELOTFTP = 'EXELOT_FTP',
  DHLPAAPI = 'DHL_PA_API',
  VIRTRANSPORTSFTP = 'VIRTRANSPORT_SFTP',
  WORLDNET = 'WORLDNET',
  INSTABOXWEBHOOK = 'INSTABOX_WEBHOOK',
  KNG = 'KNG',
  FLASHEXPRESSWEBHOOK = 'FLASHEXPRESS_WEBHOOK',
  MAGYARPOSTAAPI = 'MAGYAR_POSTA_API',
  WESHIPAPI = 'WESHIP_API',
  OHIWEBHOOK = 'OHI_WEBHOOK',
  MUDITA = 'MUDITA',
  BLUEDARTAPI = 'BLUEDART_API',
  TCATAPI = 'T_CAT_API',
  ADS = 'ADS',
  HERMESIT = 'HERMES_IT',
  FITZMARKAPI = 'FITZMARK_API',
  POSTIAPI = 'POSTI_API',
  SMSAEXPRESSWEBHOOK = 'SMSA_EXPRESS_WEBHOOK',
  TAMERGROUPWEBHOOK = 'TAMERGROUP_WEBHOOK',
  LIVRAPIDE = 'LIVRAPIDE',
  NIPPONEXPRESS = 'NIPPON_EXPRESS',
  BETTERTRUCKS = 'BETTERTRUCKS',
  FAN = 'FAN',
  PBUSPSFLATSFTP = 'PB_USPSFLATS_FTP',
  PARCELRIGHT = 'PARCELRIGHT',
  ITHINKLOGISTICS = 'ITHINKLOGISTICS',
  KERRYEXPRESSTHWEBHOOK = 'KERRY_EXPRESS_TH_WEBHOOK',
  ECOUTIER = 'ECOUTIER',
  SHOWL = 'SHOWL',
  BRTITAPI = 'BRT_IT_API',
  RIXONHKAPI = 'RIXONHK_API',
  DBSCHENKERAPI = 'DBSCHENKER_API',
  ILYANGLOGIS = 'ILYANGLOGIS',
  MAILBOXETC = 'MAIL_BOX_ETC',
  WESHIP = 'WESHIP',
  DHLGLOBALMAILAPI = 'DHL_GLOBAL_MAIL_API',
  ACTIVOS24API = 'ACTIVOS24_API',
  ATSHEALTHCARE = 'ATSHEALTHCARE',
  LUWJISTIK = 'LUWJISTIK',
  GWWORLD = 'GW_WORLD',
  FAIRSENDENAPI = 'FAIRSENDEN_API',
  SERVIPWEBHOOK = 'SERVIP_WEBHOOK',
  SWISHIP = 'SWISHIP',
  TANET = 'TANET',
  HOTSINCARGO = 'HOTSIN_CARGO',
  DIREX = 'DIREX',
  HUANTONG = 'HUANTONG',
  IMILEAPI = 'IMILE_API',
  BDMNET = 'BDMNET',
  AUEXPRESS = 'AUEXPRESS',
  NYTLOGISTICS = 'NYTLOGISTICS',
  DSVREFERENCE = 'DSV_REFERENCE',
  NOVOFARMAWEBHOOK = 'NOVOFARMA_WEBHOOK',
  AITWORLDWIDESFTP = 'AITWORLDWIDE_SFTP',
  SHOPOLIVE = 'SHOPOLIVE',
  FNFZA = 'FNF_ZA',
  DHLECOMMERCEGC = 'DHL_ECOMMERCE_GC',
  FETCHR = 'FETCHR',
  STARLINKSAPI = 'STARLINKS_API',
  YYEXPRESS = 'YYEXPRESS',
  SERVIENTREGA = 'SERVIENTREGA',
  HANJIN = 'HANJIN',
  SPANISHSEURFTP = 'SPANISH_SEUR_FTP',
  DXB2BCONNUM = 'DX_B2B_CONNUM',
  HELTHJEMAPI = 'HELTHJEM_API',
  INEXPOST = 'INEXPOST',
  A2BBA = 'A2B_BA',
  RHENUSGROUP = 'RHENUS_GROUP',
  SBERLOGISTICSRU = 'SBERLOGISTICS_RU',
  MALCAAMIT = 'MALCA_AMIT',
  PPL = 'PPL',
  OSMWORLDWIDESFTP = 'OSM_WORLDWIDE_SFTP',
  ACILOGISTIX = 'ACILOGISTIX',
  OPTIMACOURIER = 'OPTIMACOURIER',
  NOVAPOSHTAAPI = 'NOVA_POSHTA_API',
  LOGGI = 'LOGGI',
  YIFAN = 'YIFAN',
  MYDYNALOGIC = 'MYDYNALOGIC',
  MORNINGLOBAL = 'MORNINGLOBAL',
  CONCISEAPI = 'CONCISE_API',
  FXTRAN = 'FXTRAN',
  DELIVERYOURPARCELZA = 'DELIVERYOURPARCEL_ZA',
  UPARCEL = 'UPARCEL',
  MOBIBR = 'MOBI_BR',
  LOGINEXTWEBHOOK = 'LOGINEXT_WEBHOOK',
  EMS = 'EMS',
  SPEEDY = 'SPEEDY',
}

/**
 * Schema for ShipmentCarrier
 */
export const shipmentCarrierSchema: Schema<ShipmentCarrier> = stringEnum(
  ShipmentCarrier,
  true
);
