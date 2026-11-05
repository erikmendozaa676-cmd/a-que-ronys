// ============================================================================
// 1. PANEL DE CONFIGURACIÓN GENERAL (NÚMEROS, PAGO MÓVIL Y COMISIÓN SEMANAL)
// ============================================================================
const CONFIG_TIENDA = {
    // Números con 58 adelante y sin el 0 inicial
    telefonoCaja: "584124543592",     // 👈 Recibe el pedido y el capture del cliente
    telefonoDelivery: "584124277839", // 👈 Recibe la orden y el GPS desde Caja

    // Configuración de Cierre Semanal Automático
    porcentajeComisionWeb: 10,        // 👈 Tu % de ganancia semanal sobre productos vendidos
    pinAdmin: "2026",                 // 👈 PIN secreto para reiniciar la cuenta el lunes

    // Datos bancarios para el Pago Móvil
    pagoMovil: {
        banco: "0134 - Banesco Banco Universal",
        telefono: "0414-5959761",
        rifCedula: "V-10.730.943",
        titular: "A qué Ronys 24/7"
    }
};

// ============================================================================
// 2. CATÁLOGO UNIFICADO DE PRODUCTOS VENEZOLANOS (ESTILO TU ZONA MARKET)
// ============================================================================
const CATALOGO_PRODUCTOS = [
    // --- HARINAS, AVENAS Y CEREALES ---
    {
        id: "prod_harina_pan",
        nombre: "Harina de Maíz Blanco P.A.N. 1Kg",
        precioUsd: 1.10,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Harina+Maiz+Blanco+Libre+de+Gluten+Pan+1+Kg+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_harina_dona_belen",
        nombre: "Harina de Maíz Doña Belén 900g",
        precioUsd: 0.89,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Harina+de+Maiz+Dona+Belen+900g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_harina_maiz_mary",
        nombre: "Harina de Maíz Blanco Precocida Mary 900g",
        precioUsd: 1.12,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Harina+de+Maiz+Blanco+Precocida+Mary+900g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_harina_leudante_mary",
        nombre: "Harina de Trigo Leudante Mary 900g",
        precioUsd: 1.10,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Harina+de+Trigo+Leudante+Mary+900g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_harina_todouso_mary",
        nombre: "Harina de Trigo Todo Uso Mary 900g",
        precioUsd: 1.01,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Harina+de+Trigo+Todo+Uso+Mary+900g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_avena_gravenca",
        nombre: "Avena en Hojuelas Gravenca 400g",
        precioUsd: 1.22,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Avena+en+Hojuelas+Gravenca+400g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_cronch_flakes",
        nombre: "Cereal Cronch Flakes Maizoritos 300g",
        precioUsd: 3.10,
        categoria: "despensa",
        img: "https://tse1.mm.bing.net/th?q=Cereal+Cronch+Flakes+Maizoritos+300g+tuzonamarket&w=600&h=600&c=7"
    },

    // --- ANTOJOS, CHOCOLATES, HELADOS Y POSTRES ---
    {
        id: "prod_flips_28g",
        nombre: "Flips de Chocolate 28g",
        precioUsd: 0.58,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Flips+de+Chocolate+28g+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_chocolate_savoy",
        nombre: "Chocolate Savoy con Leche",
        precioUsd: 1.50,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Chocolate+Savoy+con+Leche+Venezuela+empaque&w=600&h=600&c=7"
    },
    {
        id: "prod_helado_sundae",
        nombre: "Helado Mega Sundae de Chocolate Crema Helados 160ml",
        precioUsd: 0.86,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Helado+Mega+Sundae+de+Chocolate+con+Sirop+de+Chocolate+Crema+Helados+160ml+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_helado_tinita",
        nombre: "Helado Mega Tinita de Mantecado Crema Helados 160ml",
        precioUsd: 0.81,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Helado+Mega+Tinita+de+Mantecado+Crema+Helados+160ml+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_helado_tiorico_mix",
        nombre: "Helado Mix Mantecado y Chocolate Tío Rico 750ml",
        precioUsd: 5.80,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Helado+Mix+Mantecado+y+Chocolate+Tio+Rico+750ml+tuzonamarket&w=600&h=600&c=7"
    },
    {
        id: "prod_quesillo_sapori",
        nombre: "Quesillo Tradicional Sapori 150g",
        precioUsd: 2.59,
        categoria: "antojos",
        img: "https://tse1.mm.bing.net/th?q=Quesillo+Tradicional+Sapori+150g+tuzonamarket&w=600&h=600&c=7"
    },

    // --- BEBIDAS Y OTROS VÍVERES ---
    {
        id: "prod_refresco",
        nombre: "Refresco Coca-Cola 2L",
        precioUsd: 2.20,
        categoria: "bebidas",
        img: "https://tse1.mm.bing.net/th?q=Coca+Cola+Original+2+Litros+botella+plastica&w=600&h=600&c=7"
    },
    {
        id: "prod_papas",
        nombre: "Papas Fritas Clásicas 150g",
        precioUsd: 1.80,
        categoria: "antojos",
        img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=70"
    },
    {
        id: "prod_queso",
        nombre: "Queso Blanco Duro 500g",
        precioUsd: 3.20,
        categoria: "despensa",
        img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=70"
    },
    {
        id: "prod_cafe",
        nombre: "Café Molido Premium 250g",
        precioUsd: 2.80,
        categoria: "despensa",
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=70"
    },
    {
        id: "prod_huevos",
        nombre: "Huevos Medio Cartón (15 und)",
        precioUsd: 2.90,
        categoria: "despensa",
        img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=70"
    }
];

// ============================================================================
// 3. ESTADO GENERAL: CARRITO, MONEDA Y GEOCERCAS DE VALENCIA
// ============================================================================
const paramsURL = new URLSearchParams(window.location.search);
const esAdmin =
    paramsURL.get("admin") === "ronys" ||
    window.location.search.includes("admin=ronys") ||
    localStorage.getItem("modo_admin_ronys") === "true";

let carrito = [];
let monedaActual = "USD"; // "USD" o "BS"
let tasaCambio = parseFloat(localStorage.getItem("tasa_ronys")) || 891.10;
let categoriaActual = "todo";
let tipoEntrega = "Delivery";

let entregaSeleccionada = {
    lugarNombre: "",
    direccionDetalle: "",
    sectorTarifa: "",
    precioUSD: 0,
    lat: null,
    lon: null,
    fueraDeRango: false,
    motivo: ""
};

// CÍRCULOS DE COORDENADAS GPS DE VALENCIA (De Puente Bárbula a Av. Cedeño)
const circulosTarifas = [
    // --- RADIO $2.00 ---
    { sector: "Los Colorados", precio: 2.00, lat: 10.1965, lon: -68.0085 },
    { sector: "Terrazas de los Nísperos", precio: 2.00, lat: 10.2018, lon: -68.0135 },
    { sector: "Los Nísperos", precio: 2.00, lat: 10.2005, lon: -68.0110 },
    { sector: "Agua Blanca", precio: 2.00, lat: 10.2035, lon: -68.0085 },
    { sector: "Santa Cecilia", precio: 2.00, lat: 10.2045, lon: -68.0035 },
    { sector: "Kerdell", precio: 2.00, lat: 10.1935, lon: -68.0045 },
    { sector: "El Bosque", precio: 2.00, lat: 10.2065, lon: -68.0145 },
    { sector: "Las Acacias", precio: 2.00, lat: 10.2080, lon: -68.0040 },

    // --- RADIO $3.00 ---
    { sector: "Los Mangos", precio: 3.00, lat: 10.2115, lon: -68.0135 },
    { sector: "Av. Cedeño", precio: 3.00, lat: 10.1875, lon: -68.0040 },
    { sector: "Prebo 1", precio: 3.00, lat: 10.2150, lon: -68.0145 },
    { sector: "Prebo 2", precio: 3.00, lat: 10.2175, lon: -68.0175 },
    { sector: "Prebo 3", precio: 3.00, lat: 10.2195, lon: -68.0205 },
    { sector: "El Viñedo", precio: 3.00, lat: 10.2125, lon: -68.0075 },
    { sector: "El Parral", precio: 3.00, lat: 10.2235, lon: -68.0185 },
    { sector: "El Mirador", precio: 3.00, lat: 10.2180, lon: -68.0105 },
    { sector: "Valle Blanco", precio: 3.00, lat: 10.2155, lon: -68.0095 },
    { sector: "La Viña", precio: 3.00, lat: 10.2215, lon: -68.0080 },
    { sector: "Valles de Camoruco", precio: 3.00, lat: 10.2175, lon: -68.0050 },
    { sector: "Los Sauces", precio: 3.00, lat: 10.2130, lon: -68.0015 },
    { sector: "Tarbes", precio: 3.00, lat: 10.2095, lon: -68.0025 },
    { sector: "La Trigaleña", precio: 3.00, lat: 10.2285, lon: -68.0020 },
    { sector: "Las Chimeneas", precio: 3.00, lat: 10.2245, lon: -67.9965 },
    { sector: "La Ceiba", precio: 3.00, lat: 10.2090, lon: -68.0065 },
    { sector: "Av. Bolívar Norte", precio: 3.00, lat: 10.2060, lon: -68.0055 },

    // --- RADIO $4.00 ---
    { sector: "Lomas del Este", precio: 4.00, lat: 10.1930, lon: -67.9910 },
    { sector: "Lomas del Country", precio: 4.00, lat: 10.2275, lon: -68.0235 },
    { sector: "Guataparo", precio: 4.00, lat: 10.2190, lon: -68.0340 },
    { sector: "Colinas de Guataparo", precio: 4.00, lat: 10.2220, lon: -68.0285 },
    { sector: "Altos de Guataparo", precio: 4.00, lat: 10.2200, lon: -68.0410 },
    { sector: "Terrazas del Country", precio: 4.00, lat: 10.2295, lon: -68.0255 },
    { sector: "Trigal Norte", precio: 4.00, lat: 10.2280, lon: -67.9920 },
    { sector: "Trigal Centro", precio: 4.00, lat: 10.2215, lon: -67.9920 },
    { sector: "Trigal Sur", precio: 4.00, lat: 10.2155, lon: -67.9920 },
    { sector: "Patio Trigal", precio: 4.00, lat: 10.2260, lon: -67.9985 },
    { sector: "Guaparo", precio: 4.00, lat: 10.2285, lon: -68.0105 },

    // --- RADIO $5.00 ---
    { sector: "El Solar", precio: 5.00, lat: 10.2330, lon: -68.0195 },
    { sector: "Guaparo Country Club", precio: 5.00, lat: 10.2315, lon: -68.0225 },
    { sector: "Santa María del Campo", precio: 5.00, lat: 10.2355, lon: -68.0300 },
    { sector: "Club Internacional Guataparo", precio: 5.00, lat: 10.2150, lon: -68.0450 },
    { sector: "Mañongo", precio: 5.00, lat: 10.2435, lon: -67.9980 },
    { sector: "Tazajal", precio: 5.00, lat: 10.2515, lon: -67.9965 },
    { sector: "El Rincón", precio: 5.00, lat: 10.2485, lon: -67.9920 },
    { sector: "Guayabitos", precio: 5.00, lat: 10.2555, lon: -68.0055 },
    { sector: "El Manantial", precio: 5.00, lat: 10.2585, lon: -68.0085 },
    { sector: "Naguanagua", precio: 5.00, lat: 10.2600, lon: -68.0105 },
    { sector: "Free Market", precio: 5.00, lat: 10.2525, lon: -68.0065 },
    { sector: "Las Quintas", precio: 5.00, lat: 10.2590, lon: -68.0135 },
    { sector: "El Naranjal", precio: 5.00, lat: 10.2655, lon: -68.0155 },
    { sector: "Rotafe", precio: 5.00, lat: 10.2630, lon: -68.0120 }
];

const reglasTextoTarifa = [
    { precio: 5.00, sector: "Mañongo / Naguanagua / Country", patrones: ["mañongo", "manongo", "sambil", "tazajal", "el rincon", "guayabitos", "el manantial", "naguanagua", "puente barbula", "free market", "freemarket", "la granja", "las quintas", "el naranjal", "rotafe", "el solar", "guaparo country club", "guataparo country club", "santa maria del campo", "club internacional"] },
    { precio: 4.00, sector: "Guataparo / Trigal / Lomas", patrones: ["colinas de guataparo", "altos de guataparo", "guataparo", "lomas del country", "terrazas del country", "lomas del este", "trigal norte", "trigal centro", "trigal sur", "patio trigal", "el trigal", "trigal", "guaparo"] },
    { precio: 3.00, sector: "Prebo / El Parral / El Viñedo / Norte", patrones: ["el parral", "parral", "prebo", "el viñedo", "vinedo", "la viña", "la vina", "valles de camoruco", "camoruco", "los mangos", "cedeño", "cedeno", "el mirador", "valle blanco", "los sauces", "tarbes", "la trigaleña", "trigalena", "las chimeneas", "chimeneas", "la ceiba", "avenida bolivar", "av bolivar", "rojas queipo", "andres eloy blanco", "rio orinoco", "rio chama", "rio capanaparo", "sabana larga"] },
    { precio: 2.00, sector: "Colorados / Nísperos / Agua Blanca", patrones: ["terrazas de los nisperos", "los nisperos", "nisperos", "los colorados", "colorados", "navas spinola", "navas espinola", "arismendi", "soublette", "la pastora", "agua blanca", "aguablanca", "santa cecilia", "kerdell", "el bosque", "las acacias", "acacias", "cuatricentenario"] }
];

const lugaresPredictivosValencia = [
    // --- LOS COLORADOS / NÍSPEROS / AGUA BLANCA / KERDELL ($2.00) ---
    { nombre: "Posada Nahomi", direccion: "Calle 107 Navas Spinola, Los Colorados, Valencia", alias: "posada nahomi naomi hotel colorados navas espinola", lat: 10.1912, lon: -68.0068 },
    { nombre: "Centro Clínico Quirúrgico La Pastora", direccion: "Calle 106 Arismendi con Av. 104 Soublette, Los Colorados, Valencia", alias: "clinica la pastora centro clinico quirurgico colorados", lat: 10.1903, lon: -68.0055 },
    { nombre: "Museo de Arte Valencia (MUVA)", direccion: "Av. 101 Díaz Moreno con Calle 107 Navas Spinola, Los Colorados", alias: "museo de arte valencia muva colorados", lat: 10.1918, lon: -68.0045 },
    { nombre: "Salumeria Il Contadino", direccion: "Calle 104 Vargas, Los Colorados, Valencia", alias: "salumeria il contadino colorados", lat: 10.1892, lon: -68.0060 },
    { nombre: "Hotel Palace", direccion: "Av. 104 Soublette, Los Colorados, Valencia", alias: "hotel palace colorados", lat: 10.1942, lon: -68.0058 },
    { nombre: "Conjunto Residencial Terrazas de los Nísperos", direccion: "Urb. Los Nísperos, Valencia", alias: "terrazas de los nisperos conjunto residencial", lat: 10.2018, lon: -68.0135 },
    { nombre: "Edificio Vircris", direccion: "Av. Miranda, Los Colorados, Valencia", alias: "edificio vircris bircris colorados", lat: 10.1972, lon: -68.0088 },
    { nombre: "Residencias Los Nísperos", direccion: "Av. Cuatricentenario, Los Nísperos, Valencia", alias: "residencias los nisperos", lat: 10.2006, lon: -68.0112 },
    { nombre: "Farmatodo Cuatricentenario", direccion: "Av. Cuatricentenario, Los Nísperos / Agua Blanca", alias: "farmatodo cuatricentenario nisperos", lat: 10.2012, lon: -68.0102 },
    { nombre: "Supermercado Luxor Cuatricentenario", direccion: "Av. Cuatricentenario, Los Nísperos / Agua Blanca, Valencia", alias: "luxor cuatricentenario supermercado", lat: 10.2020, lon: -68.0118 },
    { nombre: "Residencias Agua Blanca", direccion: "Urb. Agua Blanca, Valencia", alias: "residencias agua blanca aguablanca", lat: 10.2036, lon: -68.0088 },
    { nombre: "Residencias El Bosque", direccion: "Urb. El Bosque, Valencia", alias: "residencias el bosque", lat: 10.2066, lon: -68.0142 },
    { nombre: "Residencias Las Acacias", direccion: "Urb. Las Acacias, Valencia", alias: "residencias las acacias acasias", lat: 10.2082, lon: -68.0042 },
    { nombre: "Residencias Santa Cecilia", direccion: "Urb. Santa Cecilia, Valencia", alias: "residencias santa cecilia", lat: 10.2046, lon: -68.0036 },
    { nombre: "Edificio Kerdell", direccion: "Urb. Kerdell, Valencia", alias: "edificio kerdell kerdel", lat: 10.1938, lon: -68.0048 },

    // --- EL PARRAL ($3.00) ---
    { nombre: "Residencias Gilma", direccion: "Calle Río Chama / Av. Río Orinoco, Urb. El Parral, Valencia", alias: "gilma residencias el parral", lat: 10.2248, lon: -68.0195 },
    { nombre: "Residencias La Montaña", direccion: "Calle Cabriales con Río Chama, Urb. El Parral, Valencia", alias: "la montana residencias el parral", lat: 10.2262, lon: -68.0202 },
    { nombre: "Residencias Cronus Country Club", direccion: "Av. Río Orinoco con Río Apure, Urb. El Parral, Valencia", alias: "cronus country club residencias el parral", lat: 10.2222, lon: -68.0196 },
    { nombre: "Residencias Imola Casa", direccion: "Urb. El Parral, Valencia", alias: "imola casa residencias el parral", lat: 10.2239, lon: -68.0210 },
    { nombre: "C.C. Piazza", direccion: "Av. Río Orinoco, Urb. El Parral, Valencia", alias: "piazza piaza centro comercial el parral", lat: 10.2238, lon: -68.0180 },
    { nombre: "Residencias El Parral", direccion: "Av. Río Orinoco, Urb. El Parral, Valencia", alias: "residencias el parral", lat: 10.2235, lon: -68.0185 },

    // --- PREBO ($3.00) ---
    { nombre: "C.C. Shopping Center", direccion: "Av. Andrés Eloy Blanco, Urb. Prebo, Valencia", alias: "shopin shopping center chopin prebo centro comercial", lat: 10.2158, lon: -68.0142 },
    { nombre: "Residencias San Andrés", direccion: "Urb. Prebo 1, Valencia", alias: "san andres edificio residencia prebo", lat: 10.2162, lon: -68.0158 },
    { nombre: "C.C. Mediterranean Plaza", direccion: "Sabana Larga, Urb. Prebo, Valencia", alias: "mediterranean plaza mediterraneo prebo", lat: 10.2192, lon: -68.0152 },
    { nombre: "Edificio Don Pelayo", direccion: "Urb. Prebo 2, Valencia", alias: "don pelayo edificio prebo", lat: 10.2178, lon: -68.0172 },
    { nombre: "Residencias Shangri-La", direccion: "Urb. Prebo, Valencia", alias: "shangri la shangrila residencias prebo", lat: 10.2165, lon: -68.0160 },
    { nombre: "Residencias Camoruco (Prebo)", direccion: "Av. Rojas Queipo, Urb. Prebo, Valencia", alias: "residencias camoruco rojas queipo prebo", lat: 10.2145, lon: -68.0120 },

    // --- EL VIÑEDO / LA VIÑA / CAMORUCO / TRIGALEÑA / CHIMENEAS ($3.00) ---
    { nombre: "Torre Banaven (Cubo Negro)", direccion: "Av. Bolívar Norte, El Viñedo, Valencia", alias: "cubo negro torre banaven vinedo", lat: 10.2132, lon: -68.0072 },
    { nombre: "C.C. Camoruco", direccion: "Av. Bolívar Norte, Valles de Camoruco, Valencia", alias: "centro comercial camoruco", lat: 10.2165, lon: -68.0055 },
    { nombre: "C.C. La Viña Siglo XXI", direccion: "Urb. La Viña, Valencia", alias: "siglo xxi 21 la vina centro comercial", lat: 10.2218, lon: -68.0085 },
    { nombre: "Residencias Los Mangos", direccion: "Urb. Los Mangos, Valencia", alias: "residencias los mangos", lat: 10.2116, lon: -68.0134 },
    { nombre: "Residencias La Trigaleña Plaza", direccion: "Urb. La Trigaleña, Valencia", alias: "trigalena plaza residencias", lat: 10.2285, lon: -68.0020 },
    { nombre: "Parque Residencial Las Chimeneas", direccion: "Urb. Las Chimeneas, Valencia", alias: "parque residencial las chimeneas", lat: 10.2246, lon: -67.9968 },
    { nombre: "Estación Cedeño / Av. Cedeño", direccion: "Av. Cedeño con Av. Bolívar, Valencia", alias: "avenida cedeno estacion", lat: 10.1878, lon: -68.0040 },

    // --- TRIGAL / GUATAPARO / GUAPARO / LOMAS ($4.00) ---
    { nombre: "Residencias Luna Style", direccion: "Colinas de Guataparo, Valencia", alias: "luna style residencias colinas de guataparo", lat: 10.2215, lon: -68.0275 },
    { nombre: "C.C. Patio Trigal", direccion: "Urb. El Trigal, Valencia", alias: "patio trigal centro comercial", lat: 10.2260, lon: -67.9985 },
    { nombre: "Redoma de Guaparo", direccion: "Av. Bolívar Norte, Guaparo, Valencia", alias: "redoma de guaparo", lat: 10.2285, lon: -68.0105 },
    { nombre: "Colinas de Guataparo", direccion: "Urb. Colinas de Guataparo, Valencia", alias: "colinas de guataparo", lat: 10.2220, lon: -68.0285 },
    { nombre: "Residencias Lomas del Este", direccion: "Urb. Lomas del Este, Valencia", alias: "lomas del este residencias", lat: 10.1930, lon: -67.9910 },

    // --- MAÑONGO / NAGUANAGUA / TAZAJAL ($5.00) ---
    { nombre: "C.C. Sambil Valencia", direccion: "Urb. Mañongo, Naguanagua", alias: "sambil valencia centro comercial manongo", lat: 10.2452, lon: -67.9988 },
    { nombre: "Kromi Market Mañongo", direccion: "Urb. Mañongo, Naguanagua", alias: "kromi market cromi manongo", lat: 10.2425, lon: -67.9975 },
    { nombre: "Bio Mercados Mañongo", direccion: "Urb. Mañongo, Naguanagua", alias: "bio mercados biomercados manongo", lat: 10.2415, lon: -67.9982 },
    { nombre: "C.C. Free Market", direccion: "Av. Universidad, Naguanagua", alias: "free market freemarket frimarket naguanagua", lat: 10.2525, lon: -68.0065 }
];

const palabrasFueraDeCobertura = [
    "san diego", "los guayos", "tocuyito", "isabelica", "la isabelica",
    "flor amarillo", "parque valencia", "santa rosa", "candelaria",
    "san blas", "miguel peña", "miguel pena", "ruiz pineda", "bella florida",
    "guacara", "zona industrial", "la quizanda", "trincheras", "puerto cabello", "metropolis"
];

const palabrasGenericasEdificio = [
    "residencias", "residencia", "res", "edificio", "edif", "conjunto",
    "residencial", "torre", "torres", "urbanizacion", "urb", "centro",
    "comercial", "cc", "calle", "avenida", "av", "sector", "casa", "villa",
    "posada", "hotel", "clinica", "quinta", "local", "plaza", "parque",
    "el", "la", "los", "las", "de", "del"
];

const spanCantidad = document.getElementById("cantidad-carrito");
const strongTotal = document.getElementById("total-carrito");
const btnVerCarrito = document.getElementById("btn-ver-carrito");
const barraCarrito = document.querySelector(".barra-carrito");
const contenedorCatalogo = document.getElementById("lista-productos") || document.querySelector(".contenedor-productos");

const tituloCabecera = document.querySelector(".logo-estado h1");
if (tituloCabecera) {
    tituloCabecera.innerHTML = `🛒 A qué Ronys <span style="display:block; font-size:0.75rem; font-weight:normal; color:#00E676;">24/7 • Delivery y Retiro en tienda</span>`;
}

document.body.style.setProperty("padding-bottom", "140px", "important");

function limpiarTextoBase(texto) {
    return (texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizarFonetico(texto) {
    return limpiarTextoBase(texto)
        .replace(/shopping/g, "shopin")
        .replace(/shoping/g, "shopin")
        .replace(/chopin/g, "shopin")
        .replace(/nahomi/g, "naomi")
        .replace(/ch/g, "sh")
        .replace(/pp/g, "p")
        .replace(/ll/g, "y")
        .replace(/ss/g, "s")
        .replace(/cc/g, "c")
        .replace(/nn/g, "n")
        .replace(/tt/g, "t")
        .replace(/v/g, "b")
        .replace(/z/g, "s")
        .replace(/h/g, "");
}

function extraerPalabrasEspecificas(textoUsuario) {
    const limpio = limpiarTextoBase(textoUsuario);
    const todas = limpio.split(" ").filter((p) => p.length >= 2);
    return todas.filter((p) => !palabrasGenericasEdificio.includes(p));
}

function formatearMonto(montoUSD) {
    const valor = Number(montoUSD) || 0;
    if (monedaActual === "USD") {
        return `$${valor.toFixed(2)}`;
    } else {
        return `Bs. ${(valor * tasaCambio).toFixed(2)}`;
    }
}

function distanciaEnKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function calcularTarifaPorCoordenadas(lat, lon, textoDireccion = "") {
    const limpio = limpiarTextoBase(textoDireccion);

    for (const prohibida of palabrasFueraDeCobertura) {
        if (limpio.includes(limpiarTextoBase(prohibida))) {
            return {
                fueraDeRango: true,
                motivo: `La zona "${prohibida.toUpperCase()}" está fuera de nuestro círculo de cobertura (Operamos desde Puente Bárbula hasta Av. Cedeño).`
            };
        }
    }

    if (lat !== null && lon !== null) {
        if (lat < 10.1835 || lat > 10.2785 || lon > -67.9810 || lon < -68.0550) {
            return {
                fueraDeRango: true,
                motivo: "Esta ubicación queda fuera de nuestro círculo de entrega 24/7 (Cobertura: Puente Bárbula hasta Av. Cedeño)."
            };
        }
    }

    for (const regla of reglasTextoTarifa) {
        for (const patron of regla.patrones) {
            if (limpio.includes(limpiarTextoBase(patron))) {
                return {
                    fueraDeRango: false,
                    precioUSD: regla.precio,
                    sectorTarifa: regla.sector
                };
            }
        }
    }

    let circuloMasCercano = null;
    let menorDistanciaKm = Infinity;

    circulosTarifas.forEach((c) => {
        const km = distanciaEnKm(lat, lon, c.lat, c.lon);
        if (km < menorDistanciaKm) {
            menorDistanciaKm = km;
            circuloMasCercano = c;
        }
    });

    if (!circuloMasCercano || menorDistanciaKm > 2.8) {
        return {
            fueraDeRango: true,
            motivo: "Esta ubicación se sale del radio de cobertura permitido para delivery."
        };
    }

    return {
        fueraDeRango: false,
        precioUSD: circuloMasCercano.precio,
        sectorTarifa: circuloMasCercano.sector
    };
}

// ============================================================================
// 4. RENDERIZAR CATÁLOGO UNIFICADO (SIN DUPLICADOS NI ALERTAS)
// ============================================================================
let tarjetasProductos = [];

function obtenerStockAgotado() {
    try {
        return JSON.parse(localStorage.getItem("ronys_stock_agotado") || "{}");
    } catch (e) {
        return {};
    }
}

function guardarStockAgotado(mapaStock) {
    localStorage.setItem("ronys_stock_agotado", JSON.stringify(mapaStock));
}

function construirCatalogoUnificado() {
    if (!contenedorCatalogo) return;
    const mapaAgotados = obtenerStockAgotado();
    contenedorCatalogo.innerHTML = "";

    CATALOGO_PRODUCTOS.forEach((prod, index) => {
        const estaAgotado = !!mapaAgotados[prod.id];
        const card = document.createElement("div");
        card.className = "tarjeta-producto" + (estaAgotado ? " agotado" : "");
        card.dataset.idProd = prod.id;
        card.dataset.nombreProd = prod.nombre;
        card.dataset.precioUsd = prod.precioUsd;
        card.dataset.categoria = prod.categoria;
        card.style.pointerEvents = "auto";

        card.innerHTML = `
            <div class="icono-prod" style="width:100%; height:130px; margin-bottom:10px; border-radius:10px; overflow:hidden; background:#FFFFFF; padding:6px; display:flex; align-items:center; justify-content:center;">
                <img src="${prod.img}" alt="${prod.nombre}" loading="lazy" style="width:100%; height:100%; object-fit:contain;">
            </div>
            <h3>${prod.nombre}</h3>
            <p class="precio">${formatearMonto(prod.precioUsd)}</p>
            <button type="button" class="btn-agregar" ${estaAgotado ? "disabled" : ""}>
                ${estaAgotado ? "🚫 Agotado" : "+ Agregar"}
            </button>
            ${
                esAdmin
                    ? `<div class="control-admin-stock" style="width:100%; margin-top:8px; padding:6px; background:#222; border-radius:6px; display:flex; justify-content:space-between; align-items:center; pointer-events:auto;">
                        <span style="font-size:0.75rem; color:#AAA;">Stock:</span>
                        <button type="button" onclick="alternarStockProducto(${index})" id="admin-prod-${index}" style="background:${estaAgotado ? "#FF5252" : "#00E676"}; color:${estaAgotado ? "#FFF" : "#000"}; border:none; padding:4px 8px; border-radius:4px; font-weight:bold; font-size:0.75rem; cursor:pointer; pointer-events:auto;">
                            ${estaAgotado ? "🔴 Agotado" : "🟢 Disponible"}
                        </button>
                    </div>`
                    : ""
            }
        `;

        const btnAgregar = card.querySelector(".btn-agregar");
        btnAgregar.addEventListener("click", () => {
            const stockActual = obtenerStockAgotado();
            if (stockActual[prod.id]) return;

            const itemExistente = carrito.find((item) => item.nombre === prod.nombre);
            if (itemExistente) {
                itemExistente.cantidad += 1;
            } else {
                carrito.push({ id: prod.id, nombre: prod.nombre, precio: prod.precioUsd, cantidad: 1 });
            }
            sincronizarTodo();
        });

        contenedorCatalogo.appendChild(card);
    });

    tarjetasProductos = Array.from(contenedorCatalogo.querySelectorAll(".tarjeta-producto"));
}

window.alternarStockProducto = function (index) {
    const prod = CATALOGO_PRODUCTOS[index];
    if (!prod) return;
    const mapaAgotados = obtenerStockAgotado();
    mapaAgotados[prod.id] = !mapaAgotados[prod.id];
    guardarStockAgotado(mapaAgotados);

    if (mapaAgotados[prod.id]) {
        carrito = carrito.filter((item) => item.nombre !== prod.nombre);
    }
    construirCatalogoUnificado();
    filtrarCatalogo();
    sincronizarTodo();
};

construirCatalogoUnificado();

// ============================================================================
// 5. BOTÓN DE MONEDA ($ / Bs.), TASA Y MENÚ COMPACTO DE CATEGORÍAS
// ============================================================================
function insertarSelectorMoneda() {
    const contenedorLogo = document.querySelector(".logo-estado");
    if (!contenedorLogo) return;

    const viejo = document.getElementById("contenedor-controles-moneda");
    if (viejo) viejo.remove();

    const barraMoneda = document.createElement("div");
    barraMoneda.id = "contenedor-controles-moneda";
    barraMoneda.style.cssText = "margin-left:auto; display:flex; flex-direction:column; align-items:flex-end; text-align:right; gap:6px;";

    barraMoneda.innerHTML = `
        <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
            <button id="btn-cambiar-tasa" title="Cambiar tasa del día" style="background:#262626; color:#AAA; border:1px solid #444; padding:5px 10px; border-radius:20px; font-size:0.78rem; cursor:pointer;">
                ⚙️ Tasa: Bs. <span id="texto-tasa">${tasaCambio.toFixed(2)}</span>
            </button>
            <button id="btn-moneda" style="background:#00E676; color:#000; border:none; padding:5px 12px; border-radius:20px; font-size:0.82rem; font-weight:800; cursor:pointer;">
                💱 Ver en Bs.
            </button>
        </div>
    `;

    const badgeAbierto = contenedorLogo.querySelector(".estado-abierto");
    if (badgeAbierto) {
        barraMoneda.appendChild(badgeAbierto);
    }
    contenedorLogo.style.cssText += "; display:flex; justify-content:space-between; align-items:flex-start; width:100%;";
    contenedorLogo.appendChild(barraMoneda);

    const btnMoneda = document.getElementById("btn-moneda");
    btnMoneda.addEventListener("click", () => {
        monedaActual = monedaActual === "USD" ? "BS" : "USD";
        btnMoneda.innerText = monedaActual === "USD" ? "💱 Ver en Bs." : "💱 Ver en USD ($)";
        sincronizarTodo();
    });

    document.getElementById("btn-cambiar-tasa").addEventListener("click", () => {
        const nuevaTasa = prompt("Ingresa la tasa BCV del día (Bs. por cada $1):", tasaCambio);
        const valorNumerico = parseFloat(nuevaTasa);
        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            tasaCambio = valorNumerico;
            localStorage.setItem("tasa_ronys", tasaCambio);
            document.getElementById("texto-tasa").innerText = tasaCambio.toFixed(2);
            sincronizarTodo();
        }
    });
}

insertarSelectorMoneda();

// Filtros de categorías y buscador
const botonesCategorias = document.querySelectorAll(".categorias button, .btn-cat, nav button");
const inputBuscador = document.querySelector(".cabecera input, #input-buscar, #buscador");

function filtrarCatalogo() {
    const textoBusqueda = inputBuscador ? inputBuscador.value.toLowerCase().trim() : "";

    tarjetasProductos.forEach((tarjeta) => {
        const nombreProd = (tarjeta.dataset.nombreProd || "").toLowerCase();
        const catProd = tarjeta.dataset.categoria;

        const coincideTexto = nombreProd.includes(textoBusqueda);
        const coincideCategoria = (categoriaActual === "todo") || (catProd === categoriaActual);

        tarjeta.style.display = (coincideTexto && coincideCategoria) ? "flex" : "none";
    });
}

botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesCategorias.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");

        const textoBoton = boton.innerText.toLowerCase();
        if (textoBoton.includes("antojos") || textoBoton.includes("helado")) {
            categoriaActual = "antojos";
        } else if (textoBoton.includes("bebida")) {
            categoriaActual = "bebidas";
        } else if (textoBoton.includes("almuerzo") || textoBoton.includes("despensa")) {
            categoriaActual = "despensa";
        } else {
            categoriaActual = "todo";
        }

        filtrarCatalogo();
    });
});

if (inputBuscador) {
    inputBuscador.addEventListener("input", filtrarCatalogo);
}

// Menú desplegable móvil (3 rayitas)
function inicializarMenuHamburguesa() {
    const cabecera = document.querySelector(".cabecera") || document.querySelector("header");
    if (!cabecera || document.getElementById("btn-menu-hamburguesa")) return;

    const categoriasViejas = document.querySelector(".categorias");
    if (categoriasViejas) categoriasViejas.style.display = "none";

    const btnHamburguesa = document.createElement("button");
    btnHamburguesa.id = "btn-menu-hamburguesa";
    btnHamburguesa.innerHTML = "☰ Todo el Catálogo";
    btnHamburguesa.style.cssText = "background:#262626; color:#00E676; border:1px solid #00E676; padding:6px 12px; border-radius:8px; font-weight:bold; font-size:0.85rem; cursor:pointer; margin-top:8px; display:inline-flex; align-items:center; gap:6px;";

    const desplegable = document.createElement("div");
    desplegable.id = "panel-desplegable-categorias";
    desplegable.style.cssText = "display:none; position:absolute; top:100%; left:16px; right:16px; background:#181818; border:1px solid #00E676; border-radius:10px; padding:10px; z-index:99999; box-shadow:0 10px 25px rgba(0,0,0,0.8);";
    desplegable.innerHTML = `
        <div style="font-size:0.8rem; color:#AAA; margin-bottom:6px; border-bottom:1px solid #333; padding-bottom:4px;">Selecciona una categoría:</div>
        <button class="opcion-cat" data-cat="todo" style="width:100%; text-align:left; background:none; border:none; color:#FFF; padding:8px; font-size:0.9rem; cursor:pointer; border-radius:6px;">🔥 Todo el Catálogo</button>
        <button class="opcion-cat" data-cat="antojos" style="width:100%; text-align:left; background:none; border:none; color:#FFF; padding:8px; font-size:0.9rem; cursor:pointer; border-radius:6px;">🍫 Antojos, Helados y Postres</button>
        <button class="opcion-cat" data-cat="bebidas" style="width:100%; text-align:left; background:none; border:none; color:#FFF; padding:8px; font-size:0.9rem; cursor:pointer; border-radius:6px;">🥤 Bebidas y Refrescos</button>
        <button class="opcion-cat" data-cat="despensa" style="width:100%; text-align:left; background:none; border:none; color:#FFF; padding:8px; font-size:0.9rem; cursor:pointer; border-radius:6px;">🛒 Harinas, Cereales y Despensa</button>
    `;

    cabecera.style.position = "relative";
    cabecera.appendChild(btnHamburguesa);
    cabecera.appendChild(desplegable);

    btnHamburguesa.addEventListener("click", (e) => {
        e.stopPropagation();
        desplegable.style.display = desplegable.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
        desplegable.style.display = "none";
    });

    desplegable.querySelectorAll(".opcion-cat").forEach((btn) => {
        btn.addEventListener("click", () => {
            categoriaActual = btn.dataset.cat;
            filtrarCatalogo();
            desplegable.style.display = "none";
            btnHamburguesa.innerHTML = `☰ ${btn.innerText.replace("🔥 ", "").replace("🍫 ", "").replace("🥤 ", "").replace("🛒 ", "")}`;
        });
    });
}

inicializarMenuHamburguesa();

// ============================================================================
// 6. CARRITO FLOTANTE COMPACTO Y SINCRONIZACIÓN DE TOTALES
// ============================================================================
function configurarBotonCarritoFlotante() {
    if (!barraCarrito || !btnVerCarrito) return;

    barraCarrito.style.cssText += "; background:transparent !important; border:none !important; box-shadow:none !important; padding:0 !important; pointer-events:none !important; display:flex !important; justify-content:flex-start !important;";

    Array.from(barraCarrito.children).forEach((el) => {
        if (el !== btnVerCarrito) el.style.display = "none";
    });

    btnVerCarrito.style.cssText = "pointer-events:auto !important; position:fixed !important; bottom:18px !important; left:16px !important; z-index:99998 !important; background:#00E676 !important; color:#000 !important; border:2px solid #000 !important; border-radius:50px !important; padding:10px 18px !important; font-weight:800 !important; font-size:0.95rem !important; box-shadow:0 6px 20px rgba(0,0,0,0.6) !important; display:inline-flex !important; align-items:center !important; gap:8px !important; cursor:pointer !important; width:auto !important;";
}

configurarBotonCarritoFlotante();

function sincronizarTodo() {
    const mapaAgotados = obtenerStockAgotado();

    tarjetasProductos.forEach((tarjeta) => {
        const idProd = tarjeta.dataset.idProd;
        const precioUsd = parseFloat(tarjeta.dataset.precioUsd);
        const nombre = tarjeta.dataset.nombreProd;
        const boton = tarjeta.querySelector(".btn-agregar");
        const estaAgotado = !!mapaAgotados[idProd];

        tarjeta.querySelector(".precio").innerText = formatearMonto(precioUsd);

        if (estaAgotado) {
            boton.disabled = true;
            boton.innerText = "🚫 Agotado";
            boton.style.backgroundColor = "#555";
            boton.style.color = "#AAA";
            boton.style.borderColor = "#555";
            return;
        }

        boton.disabled = false;
        const itemEnCarrito = carrito.find((i) => i.nombre === nombre);
        if (itemEnCarrito) {
            boton.innerText = `🛒 Llevas ${itemEnCarrito.cantidad} (+1)`;
            boton.style.backgroundColor = "#00E676";
            boton.style.color = "#000000";
            boton.style.borderColor = "#00E676";
        } else {
            boton.innerText = "+ Agregar";
            boton.style.backgroundColor = "#141414";
            boton.style.color = "#00E676";
            boton.style.borderColor = "#00E676";
        }
    });

    const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const subtotalUSD = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const costoDeliveryUSD = (tipoEntrega === "Delivery" && !entregaSeleccionada.fueraDeRango && entregaSeleccionada.precioUSD > 0)
        ? entregaSeleccionada.precioUSD
        : 0;
    const totalConDeliveryUSD = subtotalUSD + costoDeliveryUSD;

    if (spanCantidad) spanCantidad.innerText = `${totalUnidades} ${totalUnidades === 1 ? "producto" : "productos"}`;
    if (strongTotal) strongTotal.innerText = `Total: ${formatearMonto(totalConDeliveryUSD)}`;

    if (btnVerCarrito) {
        btnVerCarrito.innerHTML = `🛒 <span>${formatearMonto(totalConDeliveryUSD)}</span> <span style="background:#111; color:#00E676; border-radius:50px; padding:2px 8px; font-size:0.8rem;">${totalUnidades}</span>`;
    }

    renderizarModal();
}

// ============================================================================
// 7. MAPA INTERACTIVO GOOGLE MAPS
// ============================================================================
let mapaValencia = null;
let marcadorCliente = null;

function cargarLibreriaMapa() {
    if (document.getElementById("leaflet-css")) return;
    const link = document.createElement("link");
    link.id = "leaflet-css";
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => inicializarMapaInteractivo();
    document.body.appendChild(script);
}

function inicializarMapaInteractivo() {
    const contenedorMapa = document.getElementById("mapa-interactivo-ronys");
    if (!contenedorMapa || !window.L || mapaValencia) return;

    mapaValencia = L.map("mapa-interactivo-ronys").setView([10.2050, -68.0085], 14);

    L.tileLayer("https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=es", {
        maxZoom: 20,
        attribution: "© Google Maps"
    }).addTo(mapaValencia);

    marcadorCliente = L.marker([10.2050, -68.0085], { draggable: true }).addTo(mapaValencia);

    mapaValencia.on("click", (e) => {
        fijarUbicacionEnMapa(e.latlng.lat, e.latlng.lng, "", "");
    });

    marcadorCliente.on("dragend", () => {
        const pos = marcadorCliente.getLatLng();
        fijarUbicacionEnMapa(pos.lat, pos.lng, "", "");
    });
}

async function fijarUbicacionEnMapa(lat, lon, nombreFijo = "", direccionFija = "") {
    if (mapaValencia && marcadorCliente) {
        marcadorCliente.setLatLng([lat, lon]);
        mapaValencia.setView([lat, lon], 17);
    }

    let nombreLugar = nombreFijo;
    let direccionDetalle = direccionFija;

    if (!nombreLugar) {
        try {
            const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
            const d = await r.json();
            const a = d.address || {};
            nombreLugar = d.name || a.building || a.amenity || a.shop || a.road || "Punto fijado en Google Maps";
            direccionDetalle = [a.road, a.suburb || a.neighbourhood || a.residential, "Valencia"].filter(Boolean).join(", ");
        } catch (err) {
            nombreLugar = "Ubicación fijada en el mapa";
            direccionDetalle = "Valencia, Carabobo";
        }
    }

    const evaluacion = calcularTarifaPorCoordenadas(lat, lon, `${nombreLugar} ${direccionDetalle}`);

    if (evaluacion.fueraDeRango) {
        entregaSeleccionada = {
            lugarNombre: nombreLugar,
            direccionDetalle: direccionDetalle,
            sectorTarifa: "",
            precioUSD: 0,
            lat,
            lon,
            fueraDeRango: true,
            motivo: evaluacion.motivo
        };
    } else {
        entregaSeleccionada = {
            lugarNombre: nombreLugar,
            direccionDetalle: direccionDetalle || `Sector ${evaluacion.sectorTarifa}, Valencia`,
            sectorTarifa: evaluacion.sectorTarifa,
            precioUSD: evaluacion.precioUSD,
            lat,
            lon,
            fueraDeRango: false,
            motivo: ""
        };
        inputBuscadorEdificio.value = nombreLugar;
    }

    mostrarEstadoZona();
}

// ============================================================================
// 8. VENTANA MODAL DEL CARRITO Y 3 BOTONES LIMPIOS DE PAGO MÓVIL
// ============================================================================
function crearModalCheckout() {
    const modalViejo = document.getElementById("modal-carrito");
    if (modalViejo) modalViejo.remove();

    const modalHTML = `
        <div id="modal-carrito" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:999; justify-content:center; align-items:flex-end; padding:12px;">
            <div style="background:#1E1E1E; width:100%; max-width:500px; border-radius:16px; border:1px solid #00E676; padding:18px; color:#FFF; max-height:94vh; overflow-y:auto;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #333; padding-bottom:10px;">
                    <h2 style="font-size:1.15rem; color:#00E676;">🛒 Tu Pedido - A qué Ronys</h2>
                    <button id="cerrar-modal" style="background:none; border:none; color:#AAA; font-size:1.4rem; cursor:pointer;">✕</button>
                </div>

                <label style="font-size:0.8rem; color:#AAA; display:block; margin-bottom:6px;">Productos que llevas:</label>
                <div id="lista-items-modal" style="margin-bottom:14px; font-size:0.9rem; background:#141414; padding:10px; border-radius:10px; border:1px solid #2A2A2A;"></div>

                <div style="margin-bottom:12px;">
                    <label style="font-size:0.85rem; color:#00E676; font-weight:bold; display:block; margin-bottom:4px;">📞 Tu número de WhatsApp (Para confirmarte el pedido):</label>
                    <input id="input-telefono" type="tel" placeholder="Ej: 0412-1234567" style="width:100%; padding:10px; border-radius:8px; background:#262626; color:#FFF; border:1px solid #444;">
                </div>

                <label style="font-size:0.85rem; color:#AAA; display:block; margin-bottom:6px;">Método de entrega:</label>
                <div style="display:flex; gap:8px; margin-bottom:12px;">
                    <button type="button" id="modo-delivery" style="flex:1; padding:10px; border-radius:8px; border:1px solid #00E676; background:#00E676; color:#000; font-weight:bold; cursor:pointer;">🛵 Delivery</button>
                    <button type="button" id="modo-retiro" style="flex:1; padding:10px; border-radius:8px; border:1px solid #444; background:#262626; color:#FFF; font-weight:bold; cursor:pointer;">🏪 Retiro en tienda</button>
                </div>

                <div id="bloque-delivery" style="margin-bottom:12px; background:#161616; padding:12px; border-radius:12px; border:1px solid #2C2C2C;">
                    <button type="button" id="btn-usar-gps" style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px dashed #00E676; background:rgba(0,230,118,0.1); color:#00E676; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
                        📍 Usar mi ubicación GPS actual (Automático)
                    </button>

                    <label style="font-size:0.83rem; color:#FFF; font-weight:bold; display:block; margin-bottom:4px;">
                        🔍 Escribe tu Edificio, Residencia, Posada o Calle:
                    </label>
                    <div style="position:relative; z-index:9999;">
                        <input id="input-buscador-edificio" type="text" autocomplete="off" placeholder="Ej: Posada Nahomi, Residencias Gilma, Shopping Center..." style="width:100%; padding:11px; border-radius:8px; background:#262626; color:#FFF; border:1px solid #00E676; font-size:0.92rem;">
                        <div id="sugerencias-edificios" style="display:none; position:absolute; top:100%; left:0; right:0; background:#181818; border:2px solid #00E676; border-radius:0 0 10px 10px; max-height:260px; overflow-y:auto; z-index:99999; box-shadow:0 14px 32px rgba(0,0,0,0.98);"></div>
                    </div>

                    <div style="margin-top:10px; margin-bottom:10px; position:relative; z-index:1;">
                        <small style="color:#AAA; font-size:0.75rem; display:block; margin-bottom:4px;">
                            🗺️ Mapa Google Maps en vivo (Puedes tocar tu edificio o arrastrar el pin):
                        </small>
                        <div id="mapa-interactivo-ronys" style="width:100%; height:180px; border-radius:10px; border:1px solid #00E676; overflow:hidden; position:relative; z-index:1;"></div>
                    </div>

                    <div id="estado-zona-detectada" style="display:none; padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.85rem;"></div>

                    <label style="font-size:0.82rem; color:#AAA; display:block; margin-bottom:4px;">👀 Nombre de Casa / Edificio y Referencia (Entregamos en la entrada):</label>
                    <input id="input-referencia" type="text" placeholder="Ej: Portón negro diagonal a la panadería..." style="width:100%; padding:10px; border-radius:8px; background:#262626; color:#FFF; border:1px solid #444;">
                </div>

                <div style="margin-bottom:12px;">
                    <label id="label-pago" style="font-size:0.85rem; color:#AAA; display:block; margin-bottom:4px;">Método de pago:</label>
                    <select id="select-pago" style="width:100%; padding:10px; border-radius:8px; background:#262626; color:#FFF; border:1px solid #444;"></select>
                </div>

                <!-- CUADRO DE PAGO MÓVIL CON 3 BOTONES INDIVIDUALES PARA COPIAR -->
                <div id="caja-datos-pago-movil" style="display:block; background:#121F17; border:1px solid #00E676; border-radius:10px; padding:12px; margin-bottom:14px; font-size:0.84rem;">
                    <strong style="color:#00E676; font-size:0.9rem; display:block; margin-bottom:6px;">📲 Datos para tu Pago Móvil:</strong>
                    <div style="color:#EEE; line-height:1.55;">
                        <div>🏦 <strong>Banco:</strong> ${CONFIG_TIENDA.pagoMovil.banco}</div>
                        <div>📞 <strong>Teléfono:</strong> ${CONFIG_TIENDA.pagoMovil.telefono}</div>
                        <div>🪪 <strong>RIF / Cédula:</strong> ${CONFIG_TIENDA.pagoMovil.rifCedula}</div>
                        <div style="margin-top:4px; padding-top:4px; border-top:1px dashed #2E4E3A; color:#00E676; font-size:0.92rem;">
                            💰 <strong>Monto exacto a pagar: <span id="monto-exacto-pm">Bs. 0.00</span></strong>
                        </div>
                    </div>

                    <div style="display:flex; gap:6px; flex-wrap:wrap; margin:10px 0;">
                        <button type="button" id="btn-copiar-tel" style="flex:1; min-width:92px; background:#00E676; color:#000; border:none; border-radius:8px; padding:8px 6px; font-weight:800; font-size:0.78rem; cursor:pointer;">
                            📱 Teléfono
                        </button>
                        <button type="button" id="btn-copiar-ced" style="flex:1; min-width:92px; background:#00E676; color:#000; border:none; border-radius:8px; padding:8px 6px; font-weight:800; font-size:0.78rem; cursor:pointer;">
                            🪪 Cédula
                        </button>
                        <button type="button" id="btn-copiar-monto" style="flex:1; min-width:92px; background:#00E676; color:#000; border:none; border-radius:8px; padding:8px 6px; font-weight:800; font-size:0.78rem; cursor:pointer;">
                            💰 Monto Bs.
                        </button>
                    </div>

                    <div style="margin-top:8px;">
                        <label style="font-size:0.78rem; color:#AAA; display:block; margin-bottom:3px;">🔢 Últimos 4 dígitos del Pago Móvil (+ envías capture en WhatsApp):</label>
                        <input id="input-ref-bancaria" type="text" placeholder="Ej: 8492" style="width:100%; padding:8px; border-radius:6px; background:#262626; color:#FFF; border:1px solid #444; font-size:0.84rem;">
                    </div>
                </div>

                <div id="resumen-cuentas" style="background:#141414; padding:12px; border-radius:10px; margin-bottom:14px; font-size:0.9rem; line-height:1.6; border:1px solid #2A2A2A;"></div>

                <button id="btn-enviar-ws" style="width:100%; padding:14px; background:#00E676; color:#000; border:none; border-radius:10px; font-weight:800; font-size:0.98rem; cursor:pointer;">
                    📲 Enviar Pedido por WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}

crearModalCheckout();
cargarLibreriaMapa();

const modal = document.getElementById("modal-carrito");
const btnModoDelivery = document.getElementById("modo-delivery");
const btnModoRetiro = document.getElementById("modo-retiro");
const bloqueDelivery = document.getElementById("bloque-delivery");
const selectPago = document.getElementById("select-pago");
const labelPago = document.getElementById("label-pago");
const cajaDatosPagoMovil = document.getElementById("caja-datos-pago-movil");
const spanMontoExactoPM = document.getElementById("monto-exacto-pm");

const inputBuscadorEdificio = document.getElementById("input-buscador-edificio");
const cajaSugerencias = document.getElementById("sugerencias-edificios");
const estadoZonaDiv = document.getElementById("estado-zona-detectada");
const inputReferencia = document.getElementById("input-referencia");
const btnUsarGps = document.getElementById("btn-usar-gps");

function configurarCopiaRapida(idBoton, obtenerValor) {
    const btn = document.getElementById(idBoton);
    if (!btn) return;
    btn.addEventListener("click", () => {
        const valor = obtenerValor();
        navigator.clipboard.writeText(valor);
        const original = btn.innerHTML;
        btn.innerHTML = `✅ ${valor}`;
        setTimeout(() => {
            btn.innerHTML = original;
        }, 1500);
    });
}

configurarCopiaRapida("btn-copiar-tel", () => CONFIG_TIENDA.pagoMovil.telefono.replace(/\D/g, ""));
configurarCopiaRapida("btn-copiar-ced", () => CONFIG_TIENDA.pagoMovil.rifCedula.replace(/\D/g, ""));
configurarCopiaRapida("btn-copiar-monto", () => {
    const subtotalUSD = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const costoDelUSD = (tipoEntrega === "Delivery" && !entregaSeleccionada.fueraDeRango && entregaSeleccionada.precioUSD > 0)
        ? entregaSeleccionada.precioUSD
        : 0;
    return ((subtotalUSD + costoDelUSD) * tasaCambio).toFixed(2);
});

selectPago.addEventListener("change", () => {
    const mostrarPM = selectPago.value.includes("Pago Móvil");
    cajaDatosPagoMovil.style.display = mostrarPM ? "block" : "none";
});

function mostrarEstadoZona() {
    if (entregaSeleccionada.fueraDeRango) {
        estadoZonaDiv.style.display = "block";
        estadoZonaDiv.style.background = "rgba(255, 82, 82, 0.15)";
        estadoZonaDiv.style.border = "1px solid #FF5252";
        estadoZonaDiv.style.color = "#FF8A80";
        estadoZonaDiv.innerHTML = `🚫 <strong>Fuera de cobertura:</strong> ${entregaSeleccionada.motivo}`;
    } else if (entregaSeleccionada.precioUSD > 0) {
        estadoZonaDiv.style.display = "block";
        estadoZonaDiv.style.background = "rgba(0, 230, 118, 0.12)";
        estadoZonaDiv.style.border = "1px solid #00E676";
        estadoZonaDiv.style.color = "#FFFFFF";
        estadoZonaDiv.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong>✅ ${entregaSeleccionada.lugarNombre}</strong>
                    <small style="display:block; color:#AAA;">📍 ${entregaSeleccionada.direccionDetalle}</small>
                </div>
                <strong style="color:#00E676; font-size:1rem; white-space:nowrap; margin-left:8px;">
                    Delivery: $${entregaSeleccionada.precioUSD.toFixed(2)}<br>
                    <small style="color:#CCC; font-weight:normal;">(Bs. ${(entregaSeleccionada.precioUSD * tasaCambio).toFixed(2)})</small>
                </strong>
            </div>
            <small style="color:#00E676; display:block; margin-top:4px;">🗺️ Link directo de Google Maps listo para el motorizado.</small>
        `;
    } else {
        estadoZonaDiv.style.display = "none";
    }
    sincronizarTodo();
}

window.seleccionarPrediccion = function (nombre, direccion, lat, lon) {
    cajaSugerencias.style.display = "none";
    inputBuscadorEdificio.value = nombre;
    if (!inputReferencia.value.trim()) {
        inputReferencia.value = `${nombre} (${direccion})`;
    }
    fijarUbicacionEnMapa(parseFloat(lat), parseFloat(lon), nombre, direccion);
};

window.asignarSectorManual = function (nombreEscrito, sectorNombre, precio, lat, lon) {
    cajaSugerencias.style.display = "none";
    entregaSeleccionada = {
        lugarNombre: nombreEscrito,
        direccionDetalle: `${sectorNombre}, Valencia`,
        sectorTarifa: sectorNombre,
        precioUSD: parseFloat(precio),
        lat: parseFloat(lat),
        lon: parseFloat(lon),
        fueraDeRango: false,
        motivo: ""
    };
    if (!inputReferencia.value.trim()) {
        inputReferencia.value = `${nombreEscrito} (${sectorNombre})`;
    }
    if (mapaValencia && marcadorCliente) {
        marcadorCliente.setLatLng([lat, lon]);
        mapaValencia.setView([lat, lon], 16);
    }
    mostrarEstadoZona();
};

function coincideConBusquedaEspecifica(textoCandidato, palabrasEspecificas, textoCompletoUsuario) {
    const baseFonetica = normalizarFonetico(textoCandidato);
    if (palabrasEspecificas.length === 0) {
        return baseFonetica.includes(normalizarFonetico(textoCompletoUsuario));
    }
    return palabrasEspecificas.some((palabra) => baseFonetica.includes(normalizarFonetico(palabra)));
}

let temporizadorPredictivo = null;

inputBuscadorEdificio.addEventListener("input", (e) => {
    const textoOriginal = e.target.value.trim();
    if (textoOriginal.length < 2) {
        cajaSugerencias.style.display = "none";
        return;
    }

    const textoMin = limpiarTextoBase(textoOriginal);

    for (const prohibida of palabrasFueraDeCobertura) {
        if (textoMin.includes(limpiarTextoBase(prohibida))) {
            entregaSeleccionada = {
                lugarNombre: textoOriginal,
                direccionDetalle: "",
                sectorTarifa: "",
                precioUSD: 0,
                lat: null,
                lon: null,
                fueraDeRango: true,
                motivo: `No realizamos delivery hacia "${prohibida.toUpperCase()}". Cubrimos desde Puente Bárbula hasta Av. Cedeño.`
            };
            cajaSugerencias.style.display = "none";
            mostrarEstadoZona();
            return;
        }
    }

    const palabrasEspecificas = extraerPalabrasEspecificas(textoOriginal);

    const prediccionesLocales = lugaresPredictivosValencia.filter((lugar) => {
        const todoElLugar = `${lugar.nombre} ${lugar.direccion} ${lugar.alias || ""}`;
        return coincideConBusquedaEspecifica(todoElLugar, palabrasEspecificas, textoOriginal);
    });

    function dibujarSugerencias(lista, cargandoSatelite = false) {
        let html = "";

        lista.forEach((item) => {
            const evalTarifa = calcularTarifaPorCoordenadas(item.lat, item.lon, `${item.nombre} ${item.direccion}`);
            if (!evalTarifa.fueraDeRango) {
                const nomLimpio = item.nombre.replace(/'/g, "");
                const dirLimpia = (item.direccion || "Valencia").replace(/'/g, "");
                html += `
                    <div onclick="seleccionarPrediccion('${nomLimpio}', '${dirLimpia}', ${item.lat}, ${item.lon})" style="padding:10px 12px; border-bottom:1px solid #2C2C2C; cursor:pointer; display:flex; justify-content:space-between; align-items:center; background:#181818;">
                        <div style="padding-right:10px;">
                            <strong style="color:#FFF; font-size:0.9rem;">🏢 ${item.nombre}</strong>
                            <small style="display:block; color:#00E676; font-size:0.76rem;">📍 ${item.direccion}</small>
                        </div>
                        <div style="text-align:right; white-space:nowrap;">
                            <span style="background:#00E676; color:#000; padding:3px 8px; border-radius:12px; font-weight:800; font-size:0.8rem;">
                                $${evalTarifa.precioUSD.toFixed(2)}
                            </span>
                            <small style="display:block; color:#AAA; font-size:0.7rem; margin-top:2px;">
                                Bs. ${(evalTarifa.precioUSD * tasaCambio).toFixed(2)}
                            </small>
                        </div>
                    </div>
                `;
            }
        });

        if (cargandoSatelite) {
            html += `<div style="padding:8px 12px; color:#00E676; font-size:0.76rem; background:#121212;">🛰️ Buscando "${textoOriginal}" en Valencia...</div>`;
        } else {
            const nomSeguro = textoOriginal.replace(/'/g, "");
            html += `
                <div style="padding:10px 12px; background:#121A15; border-top:1px solid #00E676;">
                    <small style="color:#00E676; font-weight:bold; display:block; margin-bottom:6px;">
                        📌 ¿Usar "${textoOriginal}" y enviarlo al Google Maps del motorizado? Toca en qué zona queda:
                    </small>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                        <button type="button" onclick="asignarSectorManual('${nomSeguro}', 'Los Colorados / Nísperos / Agua Blanca', 2.00, 10.1985, -68.0095)" style="padding:7px; background:#262626; color:#FFF; border:1px solid #00E676; border-radius:6px; font-size:0.74rem; cursor:pointer; text-align:left;">
                            🟢 <strong>$2.00</strong> Colorados / Nísperos / Agua Blanca
                        </button>
                        <button type="button" onclick="asignarSectorManual('${nomSeguro}', 'Prebo / El Viñedo / El Parral / Cedeño', 3.00, 10.2155, -68.0140)" style="padding:7px; background:#262626; color:#FFF; border:1px solid #00E676; border-radius:6px; font-size:0.74rem; cursor:pointer; text-align:left;">
                            🟢 <strong>$3.00</strong> Prebo / Viñedo / Parral / Cedeño
                        </button>
                        <button type="button" onclick="asignarSectorManual('${nomSeguro}', 'El Trigal / Guataparo / Guaparo', 4.00, 10.2230, -68.0050)" style="padding:7px; background:#262626; color:#FFF; border:1px solid #00E676; border-radius:6px; font-size:0.74rem; cursor:pointer; text-align:left;">
                            🟢 <strong>$4.00</strong> Trigal / Guataparo / Lomas
                        </button>
                        <button type="button" onclick="asignarSectorManual('${nomSeguro}', 'Mañongo / Naguanagua / Tazajal', 5.00, 10.2460, -68.0020)" style="padding:7px; background:#262626; color:#FFF; border:1px solid #00E676; border-radius:6px; font-size:0.74rem; cursor:pointer; text-align:left;">
                            🟢 <strong>$5.00</strong> Mañongo / Naguanagua
                        </button>
                    </div>
                </div>
            `;
        }

        cajaSugerencias.innerHTML = html;
        cajaSugerencias.style.display = "block";
    }

    if (palabrasEspecificas.length === 0) {
        cajaSugerencias.innerHTML = `
            <div style="padding:10px 12px; color:#00E676; font-size:0.82rem; background:#181818;">
                ✍️ Escribe el nombre específico del lugar (Ej: <strong>Posada Nahomi</strong>, <strong>Residencias Gilma</strong>, <strong>Shopping Center</strong>...)
            </div>
        `;
        cajaSugerencias.style.display = "block";
        return;
    }

    dibujarSugerencias(prediccionesLocales, true);

    clearTimeout(temporizadorPredictivo);
    temporizadorPredictivo = setTimeout(async () => {
        const combinados = [...prediccionesLocales];
        const terminoClave = palabrasEspecificas.join(" ")
            .replace(/shopin/gi, "shopping")
            .replace(/chopin/gi, "shopping")
            .replace(/frimarket/gi, "free market");

        try {
            const urlArcgis = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${encodeURIComponent(terminoClave + ", Valencia, Carabobo, Venezuela")}&location=-68.0125,10.2155&searchExtent=-68.06,10.18,-67.97,10.28&outFields=PlaceName,Place_addr,StAddr,Nbrhd,District&maxLocations=6`;
            const urlPhoton = `https://photon.komoot.io/api/?q=${encodeURIComponent(terminoClave + " Valencia")}&lat=10.2155&lon=-68.0125&limit=6`;

            const [resArcgis, resPhoton] = await Promise.allSettled([
                fetch(urlArcgis).then((r) => r.json()),
                fetch(urlPhoton).then((r) => r.json())
            ]);

            if (resArcgis.status === "fulfilled" && resArcgis.value && Array.isArray(resArcgis.value.candidates)) {
                resArcgis.value.candidates.forEach((cand) => {
                    const lat = cand.location ? cand.location.y : null;
                    const lon = cand.location ? cand.location.x : null;
                    if (!lat || !lon) return;
                    const attr = cand.attributes || {};
                    const nombre = attr.PlaceName || cand.address.split(",")[0];
                    const dir = attr.Place_addr || cand.address;
                    if (coincideConBusquedaEspecifica(`${nombre} ${dir}`, palabrasEspecificas, textoOriginal)) {
                        if (!combinados.some((c) => Math.abs(c.lat - lat) < 0.0009 && Math.abs(c.lon - lon) < 0.0009)) {
                            combinados.push({ nombre, direccion: dir || "Valencia, Carabobo", lat, lon });
                        }
                    }
                });
            }

            if (resPhoton.status === "fulfilled" && resPhoton.value && Array.isArray(resPhoton.value.features)) {
                resPhoton.value.features.forEach((f) => {
                    const [lon, lat] = f.geometry.coordinates;
                    const p = f.properties || {};
                    const nombre = p.name || p.street;
                    if (!nombre) return;
                    const dir = [p.street, p.suburb || p.district || p.locality, "Valencia"].filter(Boolean).join(", ");
                    if (coincideConBusquedaEspecifica(`${nombre} ${dir}`, palabrasEspecificas, textoOriginal)) {
                        if (!combinados.some((c) => Math.abs(c.lat - lat) < 0.0009 && Math.abs(c.lon - lon) < 0.0009)) {
                            combinados.push({ nombre, direccion: dir || "Valencia, Carabobo", lat, lon });
                        }
                    }
                });
            }
        } catch (e) {}

        dibujarSugerencias(combinados, false);
    }, 250);
});

btnUsarGps.addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Tu navegador no soporta GPS. Busca tu edificio o tócalo en el mapa.");
        return;
    }

    btnUsarGps.innerText = "⏳ Obteniendo tu ubicación GPS exacta...";
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            btnUsarGps.innerText = "✅ Ubicación GPS detectada con éxito";
            fijarUbicacionEnMapa(pos.coords.latitude, pos.coords.longitude, "", "");
        },
        () => {
            btnUsarGps.innerText = "📍 Usar mi ubicación GPS actual (Automático)";
            alert("Activa el permiso de ubicación o escribe tu edificio en el buscador.");
        },
        { enableHighAccuracy: true, timeout: 8000 }
    );
});

function actualizarOpcionesPago() {
    if (tipoEntrega === "Delivery") {
        labelPago.innerText = "Método de pago (Por Delivery solo Pago Móvil):";
        selectPago.innerHTML = `<option value="Pago Móvil (Bs.)">📲 Pago Móvil (Bs.) - Único disponible para Delivery</option>`;
        cajaDatosPagoMovil.style.display = "block";
    } else {
        labelPago.innerText = "Método de pago en Tienda:";
        selectPago.innerHTML = `
            <option value="Pago Móvil (Bs.)">📲 Pago Móvil (Bs.)</option>
            <option value="Punto de Venta (En tienda)">💳 Punto de Venta (Tarjeta en tienda)</option>
            <option value="Efectivo (En tienda)">💵 Efectivo ($ / Bs. en tienda)</option>
        `;
        cajaDatosPagoMovil.style.display = selectPago.value.includes("Pago Móvil") ? "block" : "none";
    }
}

actualizarOpcionesPago();

function renderizarModal() {
    const contenedorItems = document.getElementById("lista-items-modal");
    const contenedorResumen = document.getElementById("resumen-cuentas");
    if (!contenedorItems || !contenedorResumen) return;

    if (carrito.length === 0) {
        contenedorItems.innerHTML = `<p style="color:#AAA; text-align:center; padding:8px 0;">Tu carrito está vacío.</p>`;
        contenedorResumen.innerHTML = "";
        if (spanMontoExactoPM) spanMontoExactoPM.innerText = "Bs. 0.00";
        return;
    }

    contenedorItems.innerHTML = carrito.map((item, idx) => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #262626;">
            <div>
                <strong style="color:#00E676;">${item.cantidad}x</strong> ${item.nombre}
                <small style="display:block; color:#888;">Precio unitario: $${item.precio.toFixed(2)} (Bs. ${(item.precio * tasaCambio).toFixed(2)})</small>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <strong style="color:#FFF;">${formatearMonto(item.precio * item.cantidad)}</strong>
                <button onclick="cambiarCantidad(${idx}, -1)" style="background:#333; color:#FFF; border:none; padding:2px 8px; border-radius:4px; cursor:pointer;">-</button>
                <button onclick="cambiarCantidad(${idx}, 1)" style="background:#00E676; color:#000; border:none; padding:2px 8px; border-radius:4px; cursor:pointer; font-weight:bold;">+</button>
            </div>
        </div>
    `).join("");

    const subtotalLocalUSD = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const costoDeliveryUSD = (tipoEntrega === "Delivery" && !entregaSeleccionada.fueraDeRango && entregaSeleccionada.precioUSD > 0)
        ? entregaSeleccionada.precioUSD
        : 0;
    const totalGeneralUSD = subtotalLocalUSD + costoDeliveryUSD;
    const totalGeneralBs = (totalGeneralUSD * tasaCambio).toFixed(2);

    if (spanMontoExactoPM) {
        spanMontoExactoPM.innerText = `Bs. ${totalGeneralBs} ($${totalGeneralUSD.toFixed(2)})`;
    }

    const textoDelivery = tipoEntrega === "Delivery"
        ? (entregaSeleccionada.precioUSD > 0
            ? `$${costoDeliveryUSD.toFixed(2)} (Bs. ${(costoDeliveryUSD * tasaCambio).toFixed(2)})`
            : `<span style="color:#FFB74D;">Elige tu edificio arriba o en el mapa</span>`)
        : "$0.00 (Retiro en tienda)";

    contenedorResumen.innerHTML = `
        <div style="display:flex; justify-content:space-between;">
            <span>🏪 Subtotal Productos:</span>
            <strong>$${subtotalLocalUSD.toFixed(2)} (Bs. ${(subtotalLocalUSD * tasaCambio).toFixed(2)})</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
            <span>🛵 Costo Delivery:</span>
            <strong>${textoDelivery}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; border-top:1px solid #333; margin-top:8px; padding-top:8px; font-size:1.05rem; color:#00E676;">
            <strong>TOTAL A PAGAR:</strong>
            <strong>$${totalGeneralUSD.toFixed(2)} / Bs. ${totalGeneralBs}</strong>
        </div>
    `;
}

window.cambiarCantidad = function (index, delta) {
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    sincronizarTodo();
};

btnVerCarrito.addEventListener("click", () => {
    renderizarModal();
    modal.style.display = "flex";
    setTimeout(() => {
        if (!mapaValencia) inicializarMapaInteractivo();
        if (mapaValencia) mapaValencia.invalidateSize();
    }, 200);
});

document.getElementById("cerrar-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

btnModoDelivery.addEventListener("click", () => {
    tipoEntrega = "Delivery";
    bloqueDelivery.style.display = "block";
    btnModoDelivery.style.background = "#00E676";
    btnModoDelivery.style.color = "#000";
    btnModoRetiro.style.background = "#262626";
    btnModoRetiro.style.color = "#FFF";
    actualizarOpcionesPago();
    sincronizarTodo();
    setTimeout(() => {
        if (mapaValencia) mapaValencia.invalidateSize();
    }, 150);
});

btnModoRetiro.addEventListener("click", () => {
    tipoEntrega = "Retiro en tienda";
    bloqueDelivery.style.display = "none";
    btnModoRetiro.style.background = "#00E676";
    btnModoRetiro.style.color = "#000";
    btnModoDelivery.style.background = "#262626";
    btnModoDelivery.style.color = "#FFF";
    actualizarOpcionesPago();
    sincronizarTodo();
});

// ============================================================================
// 9. ENVÍO DE PEDIDO A CAJA CON FACTURA ÚNICA Y LINK ÚNICO DE CONFIRMACIÓN
// ============================================================================
function validarFormularioPedido() {
    if (carrito.length === 0) {
        alert("Agrega al menos un producto al carrito primero.");
        return false;
    }

    const telefonoCliente = document.getElementById("input-telefono").value.trim();
    if (!telefonoCliente || telefonoCliente.replace(/\D/g, "").length < 10) {
        alert("📞 Por favor ingresa tu número de teléfono completo (Ej: 04121234567) para confirmarte tu pedido.");
        document.getElementById("input-telefono").focus();
        return false;
    }

    if (tipoEntrega === "Delivery") {
        if (entregaSeleccionada.fueraDeRango) {
            alert("🚫 Esa ubicación está fuera de nuestro círculo de cobertura.");
            return false;
        }
        if (!entregaSeleccionada.precioUSD || !entregaSeleccionada.lat) {
            alert("📍 Por favor selecciona tu edificio en las sugerencias o tócalo en el mapa.");
            inputBuscadorEdificio.focus();
            return false;
        }
    }

    const metodoPago = selectPago.value;
    const refBancaria = document.getElementById("input-ref-bancaria").value.trim();
    if (metodoPago.includes("Pago Móvil") && refBancaria.length < 4) {
        alert("🔢 Por favor escribe al menos los últimos 4 dígitos de tu Pago Móvil.");
        document.getElementById("input-ref-bancaria").focus();
        return false;
    }

    return true;
}

function formatearTelefonoWhatsApp(tel) {
    let soloNumeros = (tel || "").replace(/\D/g, "");
    if (soloNumeros.startsWith("0")) {
        soloNumeros = "58" + soloNumeros.substring(1);
    } else if (soloNumeros && !soloNumeros.startsWith("58")) {
        soloNumeros = "58" + soloNumeros;
    }
    return soloNumeros;
}

document.getElementById("btn-enviar-ws").addEventListener("click", () => {
    if (!validarFormularioPedido()) return;

    const idFactura = Math.floor(1000 + Math.random() * 9000);
    const telefonoCliente = document.getElementById("input-telefono").value.trim();
    const referencia = inputReferencia.value.trim() || inputBuscadorEdificio.value.trim();
    const refBancaria = document.getElementById("input-ref-bancaria").value.trim();

    const subtotalLocalUSD = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const costoDeliveryUSD = tipoEntrega === "Delivery" ? entregaSeleccionada.precioUSD : 0;
    const totalGeneralUSD = subtotalLocalUSD + costoDeliveryUSD;
    const totalGeneralBs = (totalGeneralUSD * tasaCambio).toFixed(2);

    const resumenItems = carrito.map((item) => `${item.cantidad}x ${item.nombre}`).join(", ");
    const linkCoordenadasMaps = tipoEntrega === "Delivery"
        ? `https://www.google.com/maps/search/?api=1&query=${entregaSeleccionada.lat},${entregaSeleccionada.lon}`
        : "";

    let msgDelivery = `*🛵 ORDEN DE DESPACHO - FACTURA #${idFactura}*\n`;
    msgDelivery += `📞 *Cliente:* ${telefonoCliente}\n`;
    msgDelivery += `🏢 *Destino:* ${entregaSeleccionada.lugarNombre} (${entregaSeleccionada.direccionDetalle})\n`;
    msgDelivery += `👀 *Referencia:* ${referencia || "Entregar en entrada principal"}\n`;
    msgDelivery += `💵 *Pago Delivery:* $${costoDeliveryUSD.toFixed(2)} (Bs. ${(costoDeliveryUSD * tasaCambio).toFixed(2)})\n`;
    msgDelivery += `📦 *Pedido:* ${resumenItems}\n`;
    if (linkCoordenadasMaps) {
        msgDelivery += `\n🗺️ *ABRIR RUTA GPS EN GOOGLE MAPS:*\n${linkCoordenadasMaps}`;
    }

    const baseUrl = window.location.href.split("?")[0].split("#")[0];
    const linkUnicoCajero =
        `${baseUrl}?admin=ronys` +
        `&pid=${idFactura}` +
        `&sumarProd=${subtotalLocalUSD.toFixed(2)}` +
        `&sumarDel=${costoDeliveryUSD.toFixed(2)}` +
        `&tel=${encodeURIComponent(telefonoCliente)}` +
        `&ref=${encodeURIComponent(refBancaria)}` +
        `&resumen=${encodeURIComponent(resumenItems)}` +
        `&envio=${encodeURIComponent(msgDelivery)}`;

    let mensajeCaja = `*🧾 FACTURA #${idFactura} - A QUÉ RONYS 24/7*\n\n`;
    mensajeCaja += `👤 *Cliente:* ${telefonoCliente}\n`;
    mensajeCaja += `🔢 *Ref. Pago Móvil (4 dígitos):* #${refBancaria}\n`;
    mensajeCaja += `💰 *Total Pagado:* Bs. ${totalGeneralBs} ($${totalGeneralUSD.toFixed(2)})\n\n`;

    mensajeCaja += `*🛒 Detalle del Pedido:*\n`;
    carrito.forEach((item) => {
        mensajeCaja += `• ${item.cantidad}x ${item.nombre} ($${(item.precio * item.cantidad).toFixed(2)})\n`;
    });

    mensajeCaja += `\n🏪 *Subtotal Productos:* $${subtotalLocalUSD.toFixed(2)}\n`;
    if (tipoEntrega === "Delivery") {
        mensajeCaja += `🛵 *Delivery (${entregaSeleccionada.sectorTarifa}):* $${costoDeliveryUSD.toFixed(2)}\n`;
        mensajeCaja += `📍 *Destino:* ${entregaSeleccionada.lugarNombre} - ${referencia || "Entrada principal"}\n`;
    } else {
        mensajeCaja += `🏪 *Entrega:* Retiro en tienda\n`;
    }

    mensajeCaja += `\n📎 *(Adjunto capture del Pago Móvil)*\n`;
    mensajeCaja += `━━━━━━━━━━━━━━━━━━━━\n`;
    mensajeCaja += `⚡ *CAJERO: Toca aquí para Confirmar Pago, Sumar Venta a la Semana y Despachar a Delivery:*\n`;
    mensajeCaja += `${linkUnicoCajero}`;

    const urlWhatsAppCaja = `https://wa.me/${CONFIG_TIENDA.telefonoCaja}?text=${encodeURIComponent(mensajeCaja)}`;
    window.open(urlWhatsAppCaja, "_blank");
});

// ============================================================================
// 10. CONTABILIDAD SEMANAL AUTOMÁTICA Y PANTALLA DE DESPACHO DEL CAJERO
// ============================================================================
function obtenerHistorialVentas() {
    try {
        return JSON.parse(localStorage.getItem("ronys_historial_ventas") || "[]");
    } catch (e) {
        return [];
    }
}

function registrarVentaAutomatica(idFactura, montoProd, montoDel, clienteTel) {
    const ventas = obtenerHistorialVentas();
    if (ventas.some((v) => String(v.factura) === String(idFactura))) {
        return false;
    }

    const ahora = new Date();
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const fechaHora = `${dias[ahora.getDay()]} ${ahora.toLocaleDateString()} ${ahora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

    ventas.unshift({
        factura: idFactura,
        hora: fechaHora,
        productos: parseFloat(montoProd) || 0,
        delivery: parseFloat(montoDel) || 0,
        cliente: clienteTel || "WhatsApp"
    });

    localStorage.setItem("ronys_historial_ventas", JSON.stringify(ventas));
    return true;
}

if (paramsURL.has("sumarProd") || paramsURL.has("sumarDel")) {
    const p = parseFloat(paramsURL.get("sumarProd")) || 0;
    const d = parseFloat(paramsURL.get("sumarDel")) || 0;
    const idFactura = paramsURL.get("pid") || String(Math.floor(1000 + Math.random() * 9000));
    const telCliente = paramsURL.get("tel") || "";
    const refPago = paramsURL.get("ref") || "";
    const resumenPedido = paramsURL.get("resumen") || "";
    const detalleDelivery = paramsURL.get("envio") || "";

    if (p > 0 || d > 0) {
        registrarVentaAutomatica(idFactura, p, d, telCliente);
    }

    window.addEventListener("DOMContentLoaded", () => {
        const modalCajero = document.createElement("div");
        modalCajero.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:999999; display:flex; align-items:center; justify-content:center; padding:16px;";
        modalCajero.innerHTML = `
            <div style="background:#141414; border:2px solid #00E676; border-radius:16px; padding:22px; width:100%; max-width:400px; color:#fff; text-align:center; font-family:sans-serif; box-shadow:0 10px 30px rgba(0,0,0,0.8);">
                <div style="background:#00E67622; color:#00E676; font-weight:800; font-size:0.78rem; padding:6px 12px; border-radius:20px; display:inline-block; margin-bottom:10px;">
                    ✅ SUMADO AUTOMÁTICAMENTE AL CIERRE SEMANAL
                </div>
                <h3 style="margin:0 0 6px 0; color:#fff; font-size:1.3rem;">Factura #${idFactura}</h3>
                <p style="font-size:0.9rem; color:#ccc; margin-bottom:18px;">
                    Productos: <b style="color:#00E676;">$${p.toFixed(2)}</b> &nbsp;|&nbsp; Delivery: <b style="color:#FFC107;">$${d.toFixed(2)}</b>
                </p>
                <button id="btn-cajero-confirmar" style="width:100%; background:#00E676; color:#000; font-weight:800; font-size:0.95rem; border:none; border-radius:10px; padding:14px; margin-bottom:12px; cursor:pointer;">
                    ✅ 1. Confirmar Pago al Cliente (con su Factura)
                </button>
                <button id="btn-cajero-delivery" style="width:100%; background:#FFC107; color:#000; font-weight:800; font-size:0.95rem; border:none; border-radius:10px; padding:14px; margin-bottom:14px; cursor:pointer;">
                    🛵 2. Enviar Orden y GPS a Empresa Delivery
                </button>
                <button id="btn-cajero-cerrar" style="background:transparent; color:#aaa; border:1px solid #444; border-radius:8px; padding:8px 18px; cursor:pointer;">
                    Cerrar e ir a la tienda
                </button>
            </div>
        `;
        document.body.appendChild(modalCajero);

        document.getElementById("btn-cajero-confirmar").onclick = () => {
            const telWA = formatearTelefonoWhatsApp(telCliente);
            const msgCliente =
                `✅ *¡PAGO CONFIRMADO! - A QUÉ RONYS 24/7*\n` +
                `🧾 *Factura:* #${idFactura}\n` +
                `⏱️ *Tiempo estimado:* Tu pedido estará llegando en aproximadamente *15 minutos*.\n\n` +
                (resumenPedido ? `📦 *Tu Pedido:* ${resumenPedido}\n` : "") +
                `💰 *Total Pagado:* $${(p + d).toFixed(2)} (Ref: #${refPago || "Verificada"})\n\n` +
                `¡Gracias por tu compra! Nuestro motorizado ya va saliendo con tu pedido. 🛵💨`;

            const urlWa = telWA
                ? `https://wa.me/${telWA}?text=${encodeURIComponent(msgCliente)}`
                : `https://wa.me/?text=${encodeURIComponent(msgCliente)}`;
            window.open(urlWa, "_blank");
        };

        document.getElementById("btn-cajero-delivery").onclick = () => {
            const textoDel = detalleDelivery || `🛵 *DESPACHO FACTURA #${idFactura}*\nCliente: ${telCliente}\nDelivery: $${d.toFixed(2)}`;
            window.open(`https://wa.me/${CONFIG_TIENDA.telefonoDelivery}?text=${encodeURIComponent(textoDel)}`, "_blank");
        };

        document.getElementById("btn-cajero-cerrar").onclick = () => modalCajero.remove();
    });
}

// ============================================================================
// 11. BOTÓN DE LIQUIDACIÓN SEMANAL (SOLO VISIBLE EN MODO ADMIN)
// ============================================================================
function inicializarPanelAdminYCierre() {
    if (!esAdmin) return;

    const btnAdmin = document.createElement("div");
    btnAdmin.id = "btn-panel-admin";
    btnAdmin.innerText = "🛠️ Modo Admin: ON";
    btnAdmin.style.cssText = "position:fixed; bottom:72px; right:16px; background:#FF5252; color:#FFF; padding:6px 12px; border-radius:30px; font-weight:800; font-size:0.78rem; z-index:99999; box-shadow:0 4px 14px rgba(0,0,0,0.5);";
    document.body.appendChild(btnAdmin);

    const btnHistorial = document.createElement("button");
    btnHistorial.id = "ronys-btn-ventas";
    btnHistorial.innerHTML = "📊 Cierre Semanal";
    btnHistorial.style.cssText = "position:fixed; bottom:18px; right:16px; z-index:99999; background:#111; color:#00E676; border:2px solid #00E676; border-radius:50px; padding:10px 16px; font-weight:800; font-size:0.9rem; box-shadow:0 6px 20px rgba(0,0,0,0.6); cursor:pointer;";
    document.body.appendChild(btnHistorial);

    const abrirModalVentas = () => {
        const existente = document.getElementById("modal-historial-ronys");
        if (existente) existente.remove();

        const ventas = obtenerHistorialVentas();
        const totalProd = ventas.reduce((acc, v) => acc + (parseFloat(v.productos) || 0), 0);
        const totalDel = ventas.reduce((acc, v) => acc + (parseFloat(v.delivery) || 0), 0);
        const porc = CONFIG_TIENDA.porcentajeComisionWeb || 10;
        const miComision = totalProd * (porc / 100);
        const netoLocal = totalProd - miComision;

        const filasHtml = ventas.length
            ? ventas.map((v) => `
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid #2a2a2a; padding:7px 0; font-size:0.8rem;">
                    <span>🧾 <b>#${v.factura}</b> (${v.hora})</span>
                    <span>Prod: <b style="color:#00E676;">$${Number(v.productos).toFixed(2)}</b> | Del: <b style="color:#FFC107;">$${Number(v.delivery).toFixed(2)}</b></span>
                </div>
            `).join("")
            : `<p style="color:#777; font-size:0.85rem; text-align:center; padding:12px 0;">Aún no hay facturas confirmadas en esta semana.</p>`;

        const modalHist = document.createElement("div");
        modalHist.id = "modal-historial-ronys";
        modalHist.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.88); z-index:999999; display:flex; align-items:center; justify-content:center; padding:16px;";
        modalHist.innerHTML = `
            <div style="background:#181818; border:2px solid #00E676; border-radius:16px; padding:18px; width:100%; max-width:430px; color:#fff; font-family:sans-serif; max-height:88vh; overflow-y:auto;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <h3 style="margin:0; color:#00E676;">📊 Liquidación Semanal</h3>
                    <button id="cerrar-hist" style="background:none; border:none; color:#fff; font-size:1.2rem; cursor:pointer;">✖</button>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:14px; text-align:center;">
                    <div style="background:#222; padding:10px; border-radius:10px;">
                        <div style="font-size:0.72rem; color:#aaa;">VENTA PRODUCTOS</div>
                        <div style="font-size:1.15rem; font-weight:800; color:#00E676;">$${totalProd.toFixed(2)}</div>
                    </div>
                    <div style="background:#222; padding:10px; border-radius:10px;">
                        <div style="font-size:0.72rem; color:#aaa;">PAGO A DELIVERY</div>
                        <div style="font-size:1.15rem; font-weight:800; color:#FFC107;">$${totalDel.toFixed(2)}</div>
                    </div>
                    <div style="background:#16291e; border:1px solid #00E67666; padding:10px; border-radius:10px;">
                        <div style="font-size:0.72rem; color:#00E676;">COMISIÓN WEB (${porc}%)</div>
                        <div style="font-size:1.15rem; font-weight:800; color:#fff;">$${miComision.toFixed(2)}</div>
                    </div>
                    <div style="background:#222; padding:10px; border-radius:10px;">
                        <div style="font-size:0.72rem; color:#aaa;">NETO TIENDA</div>
                        <div style="font-size:1.15rem; font-weight:800; color:#fff;">$${netoLocal.toFixed(2)}</div>
                    </div>
                </div>

                <div style="max-height:180px; overflow-y:auto; margin-bottom:14px; padding:0 4px; background:#121212; border-radius:8px;">
                    ${filasHtml}
                </div>

                <button id="btn-limpiar-hist" style="width:100%; background:#ff3b30; color:#fff; border:none; border-radius:8px; padding:11px; font-weight:800; cursor:pointer;">
                    🔒 Reiniciar Semana a $0.00 (Requiere PIN)
                </button>
            </div>
        `;
        document.body.appendChild(modalHist);

        document.getElementById("cerrar-hist").onclick = () => modalHist.remove();
        document.getElementById("btn-limpiar-hist").onclick = () => {
            const pin = prompt("Ingresa tu PIN de Administrador para reiniciar la cuenta de la semana:");
            if (pin === CONFIG_TIENDA.pinAdmin) {
                localStorage.removeItem("ronys_historial_ventas");
                abrirModalVentas();
            } else if (pin !== null) {
                alert("❌ PIN incorrecto.");
            }
        };
    };

    btnHistorial.onclick = abrirModalVentas;
}

inicializarPanelAdminYCierre();
sincronizarTodo();