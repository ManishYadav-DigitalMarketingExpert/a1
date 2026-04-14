export interface Provider {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  rating: number;
  plans: string;
}

export const providers: Provider[] = [
  { id: "airalo", name: "Airalo", description: "World's first eSIM store with coverage in 200+ countries. Affordable data plans for travelers.", logo: "✈️", website: "https://airalo.com", rating: 4.8, plans: "From $4.50" },
  { id: "holafly", name: "Holafly", description: "Unlimited data eSIM plans for international travelers. No speed caps, simple activation.", logo: "🌎", website: "https://holafly.com", rating: 4.7, plans: "From $6.00" },
  { id: "nomad", name: "Nomad eSIM", description: "Budget-friendly eSIMs with flexible data options for digital nomads and travelers.", logo: "🏕️", website: "https://nomad.com", rating: 4.5, plans: "From $3.00" },
  { id: "gigsky", name: "GigSky", description: "Premium global connectivity with high-speed data plans across 200 countries.", logo: "🛰️", website: "https://gigsky.com", rating: 4.3, plans: "From $5.00" },
  { id: "alosim", name: "Alosim", description: "Simple and affordable eSIM data plans for international travel with easy setup.", logo: "📱", website: "https://alosim.com", rating: 4.4, plans: "From $4.00" },
  { id: "maya", name: "Maya Mobile", description: "Eco-friendly eSIM provider planting trees with every purchase. Global coverage.", logo: "🌿", website: "https://maya.net", rating: 4.6, plans: "From $3.50" },
  { id: "ubigi", name: "Ubigi", description: "Trusted eSIM partner of major device manufacturers. Reliable worldwide coverage.", logo: "🔗", website: "https://ubigi.com", rating: 4.2, plans: "From $4.00" },
  { id: "truphone", name: "Truphone", description: "Enterprise-grade eSIM connectivity for business and personal travelers.", logo: "🏢", website: "https://truphone.com", rating: 4.1, plans: "From $6.00" },
  { id: "flexiroam", name: "Flexiroam", description: "Flexible roaming solutions with global eSIM plans and physical SIM options.", logo: "🔄", website: "https://flexiroam.com", rating: 4.0, plans: "From $3.00" },
  { id: "simOptions", name: "SimOptions", description: "Comparison platform offering eSIMs from multiple providers at best prices.", logo: "⚡", website: "https://simoptions.com", rating: 4.3, plans: "From $2.50" },
  { id: "keepgo", name: "KeepGo", description: "Lifetime eSIM with data that never expires. Perfect for frequent travelers.", logo: "♾️", website: "https://keepgo.com", rating: 4.2, plans: "From $5.00" },
  { id: "drimsim", name: "Drimsim", description: "Smart international SIM with eSIM support. Automatic best rate selection.", logo: "💡", website: "https://drimsim.com", rating: 4.0, plans: "From $3.50" },
  { id: "esimdb", name: "eSIMDB", description: "Comprehensive eSIM comparison database helping find the best deals worldwide.", logo: "📊", website: "https://esimdb.com", rating: 4.5, plans: "Comparison" },
  { id: "knowroaming", name: "KnowRoaming", description: "Smart roaming solutions with automatic connectivity in 200+ countries.", logo: "🧭", website: "https://knowroaming.com", rating: 4.1, plans: "From $3.00" },
  { id: "mogo", name: "MOGO eSIM", description: "Fast-activating eSIM plans with transparent pricing and no hidden fees.", logo: "⚡", website: "https://mogoesim.com", rating: 4.3, plans: "From $4.50" },
  { id: "redteago", name: "RedteaGO", description: "Global eSIM marketplace backed by leading eSIM technology provider Redtea Mobile.", logo: "🍵", website: "https://redteago.com", rating: 4.2, plans: "From $2.00" },
  { id: "globalesim", name: "Global eSIM", description: "Worldwide eSIM connectivity with simple plans and instant digital delivery.", logo: "🌐", website: "https://globalesim.com", rating: 4.0, plans: "From $5.00" },
  { id: "jetpac", name: "Jetpac", description: "Travel-focused eSIM with regional and country-specific data plans.", logo: "✨", website: "https://jetpac.com", rating: 4.1, plans: "From $4.00" },
  { id: "yesim", name: "Yesim", description: "International calling and data eSIM with built-in VPN protection.", logo: "🔐", website: "https://yesim.app", rating: 4.4, plans: "From $3.50" },
  { id: "simly", name: "Simly", description: "User-friendly eSIM app with instant activation and affordable global plans.", logo: "🎯", website: "https://simly.io", rating: 4.3, plans: "From $3.00" },
  { id: "esimplus", name: "eSIM Plus", description: "Virtual phone numbers and eSIM data plans for travelers and businesses.", logo: "➕", website: "https://esimplus.me", rating: 4.1, plans: "From $4.00" },
  { id: "instabridge", name: "Instabridge", description: "Free WiFi finder app now offering affordable eSIM data plans worldwide.", logo: "📶", website: "https://instabridge.com", rating: 4.2, plans: "From $2.50" },
  { id: "saily", name: "Saily", description: "eSIM by NordVPN team. Secure, private, and reliable global connectivity.", logo: "🛡️", website: "https://saily.com", rating: 4.6, plans: "From $3.50" },
  { id: "roamless", name: "Roamless", description: "Pay-as-you-go eSIM with no subscription required. Only pay for data used.", logo: "💰", website: "https://roamless.com", rating: 4.0, plans: "Pay-as-you-go" },
  { id: "airhub", name: "Airhub", description: "Regional eSIM plans optimized for multi-country trips across continents.", logo: "🌍", website: "https://airhub.com", rating: 4.1, plans: "From $5.00" },
  { id: "orange", name: "Orange Holiday", description: "European eSIM by Orange telecom. Reliable network with EU-wide coverage.", logo: "🍊", website: "https://orange.com", rating: 4.4, plans: "From $8.00" },
  { id: "three", name: "Three UK", description: "UK-based eSIM with inclusive roaming in 71 destinations worldwide.", logo: "3️⃣", website: "https://three.co.uk", rating: 4.3, plans: "From $10.00" },
  { id: "tmobile", name: "T-Mobile", description: "Major US carrier offering international eSIM roaming with Magenta plans.", logo: "📱", website: "https://t-mobile.com", rating: 4.5, plans: "Included" },
  { id: "att", name: "AT&T", description: "International day pass eSIM for AT&T customers traveling abroad.", logo: "📡", website: "https://att.com", rating: 4.2, plans: "From $10/day" },
  { id: "verizon", name: "Verizon", description: "TravelPass eSIM for Verizon users with daily international roaming.", logo: "📲", website: "https://verizon.com", rating: 4.1, plans: "From $10/day" },
  { id: "google-fi", name: "Google Fi", description: "Google's wireless service with built-in international data in 200+ countries.", logo: "🔵", website: "https://fi.google.com", rating: 4.6, plans: "From $20/mo" },
  { id: "visible", name: "Visible", description: "Verizon-powered all-inclusive plans with international calling features.", logo: "👁️", website: "https://visible.com", rating: 4.0, plans: "From $25/mo" },
  { id: "mint", name: "Mint Mobile", description: "Budget-friendly US carrier now supporting eSIM with international add-ons.", logo: "🌿", website: "https://mintmobile.com", rating: 4.3, plans: "From $15/mo" },
  { id: "dent", name: "DENT eSIM", description: "Blockchain-powered mobile data marketplace with global eSIM plans.", logo: "⛓️", website: "https://dentwireless.com", rating: 3.9, plans: "From $3.00" },
  { id: "travelsim", name: "TravelSim", description: "Veteran travel SIM provider with eSIM options for international travelers.", logo: "🧳", website: "https://travelsim.com", rating: 4.0, plans: "From $5.00" },
  { id: "worldsim", name: "WorldSIM", description: "International eSIM with free incoming calls in 100+ countries.", logo: "🌏", website: "https://worldsim.com", rating: 4.1, plans: "From $4.00" },
  { id: "mtx", name: "MTX Connect", description: "Luxembourg-based eSIM with data plans for Europe and worldwide.", logo: "🔌", website: "https://mtxc.eu", rating: 4.0, plans: "From $3.50" },
  { id: "surfroam", name: "Surfroam", description: "Cloud SIM technology with eSIM support for seamless global roaming.", logo: "🏄", website: "https://surfroam.com", rating: 3.8, plans: "From $3.00" },
  { id: "cellhire", name: "Cellhire", description: "Corporate and personal eSIM solutions with managed connectivity services.", logo: "🏛️", website: "https://cellhire.com", rating: 4.0, plans: "Custom" },
  { id: "1global", name: "1Global", description: "Business-focused eSIM solutions with centralized management platform.", logo: "1️⃣", website: "https://1global.com", rating: 4.1, plans: "Custom" },
  { id: "chatSim", name: "ChatSim", description: "eSIM optimized for messaging apps with unlimited chat data plans.", logo: "💬", website: "https://chatsim.com", rating: 3.7, plans: "From $5.00" },
  { id: "connectPhone", name: "ConnectPhone", description: "Multi-number eSIM allowing multiple phone numbers on one device.", logo: "📞", website: "https://connectphone.com", rating: 4.0, plans: "From $6.00" },
  { id: "mobal", name: "Mobal", description: "International eSIM with free incoming calls and charity donations included.", logo: "❤️", website: "https://mobal.com", rating: 4.2, plans: "From $7.00" },
  { id: "simcorner", name: "SimCorner", description: "Australian-based eSIM provider specializing in Asia-Pacific coverage.", logo: "🦘", website: "https://simcorner.com", rating: 4.1, plans: "From $5.00" },
  { id: "moshi", name: "Moshi Moshi", description: "Japan-focused eSIM with unlimited data plans for visitors to Japan.", logo: "🗾", website: "https://moshimoshi.com", rating: 4.5, plans: "From $4.00" },
  { id: "etecsa", name: "eSIM Go", description: "White-label eSIM platform enabling businesses to offer their own eSIM service.", logo: "🚀", website: "https://esimgo.com", rating: 4.2, plans: "From $3.00" },
  { id: "firsty", name: "Firsty", description: "Free basic eSIM data with premium upgrade options for international travelers.", logo: "🆓", website: "https://firsty.app", rating: 4.0, plans: "Free / Premium" },
  { id: "bnesim", name: "BNESIM", description: "Swiss eSIM provider with privacy-focused international data plans.", logo: "🇨🇭", website: "https://bnesim.com", rating: 4.1, plans: "From $4.50" },
  { id: "gigago", name: "Gigago", description: "Vietnamese eSIM provider with competitive Asia-Pacific data plans.", logo: "🌏", website: "https://gigago.com", rating: 4.0, plans: "From $3.00" },
  { id: "eskimo", name: "eSKIMO", description: "Cool and affordable eSIM plans with instant delivery and easy activation.", logo: "❄️", website: "https://eskimo.travel", rating: 4.1, plans: "From $3.50" },
];
