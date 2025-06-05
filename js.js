 const allPackages = [
    {
      name: "Italian Splendor",
      tagline: "Experience the Art, Culture, and Cuisine of Italy",
      locations: ["Rome", "Florence", "Venice", "Amalfi Coast"],
      mapUrl: "https://maps.google.com/...",
      duration: "14 Days / 13 Nights",
      inclusions: {
        flights: true,
        accommodation: "5-Star Luxury Hotels",
        airportTransfers: true,
        guidedTours: true,
        meals: "Breakfast & Dinner",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Rome, Welcome Dinner" },
        { day: 2, description: "Vatican City & Colosseum Tour" },
        { day: 3, description: "Roman Forum & City Exploration" },
        { day: 4, description: "Transfer to Florence, Uffizi Gallery" }
      ],
      pricing: {
        pricePerPerson: 12500,
        doubleOccupancy: 11500,
        tripleOccupancy: 10500,
        earlyBirdDiscount: 1000,
        groupDiscount: 1500,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "Sarah Johnson",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/italian-splendor"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "Schengen visa required for non-EU citizens"
      },
      images:[],
      activityIcons: ["culture", "food", "history", "shopping"],
      category: "cultural",
      featured: true
    },
    {
      name: "African Safari Adventure",
      tagline: "Experience the magic of East Africa",
      locations: ["Kenya", "Tanzania"],
      mapUrl: "https://maps.google.com/...",
      duration: "10 Days / 9 Nights",
      inclusions: {
        flights: true,
        accommodation: "Luxury Safari Lodges",
        airportTransfers: true,
        guidedTours: true,
        meals: "Full Board",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Nairobi" },
        { day: 2, description: "Transfer to Masai Mara" }
      ],
      pricing: {
        pricePerPerson: 9800,
        doubleOccupancy: 8800,
        tripleOccupancy: 7800,
        earlyBirdDiscount: 800,
        groupDiscount: 1200,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "John Smith",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/african-safari"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "East African visa required"
      },
      images:[],
      activityIcons: ["safari", "wildlife", "adventure"],
      category: "adventure",
      featured: false
    },
    {
      name: "Japan Journey",
      tagline: "Discover the perfect balance of ancient traditions and modern wonders",
      locations: ["Tokyo", "Kyoto", "Hakone"],
      mapUrl: "https://maps.google.com/...",
      duration: "12 Days / 11 Nights",
      inclusions: {
        flights: true,
        accommodation: "4-Star Hotels & Ryokan",
        airportTransfers: true,
        guidedTours: true,
        meals: "Breakfast & Select Dinners",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Tokyo" },
        { day: 2, description: "Tokyo City Tour" }
      ],
      pricing: {
        pricePerPerson: 10500,
        doubleOccupancy: 9500,
        tripleOccupancy: 8500,
        earlyBirdDiscount: 900,
        groupDiscount: 1300,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "Emma Wilson",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/japan-journey"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "Visa-free for most countries"
      },
      images:[],
      activityIcons: ["culture", "food", "history"],
      category: "cultural",
      featured: false
    },
    {
      name: "Greek Islands Escape",
      tagline: "Indulge in the beauty of the Greek Islands",
      locations: ["Athens", "Santorini", "Mykonos"],
      mapUrl: "https://maps.google.com/...",
      duration: "9 Days / 8 Nights",
      inclusions: {
        flights: true,
        accommodation: "Luxury Boutique Hotels",
        airportTransfers: true,
        guidedTours: true,
        meals: "Breakfast & Select Dinners",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Athens" },
        { day: 2, description: "Athens City Tour" }
      ],
      pricing: {
        pricePerPerson: 8900,
        doubleOccupancy: 7900,
        tripleOccupancy: 6900,
        earlyBirdDiscount: 700,
        groupDiscount: 1100,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "Michael Brown",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/greek-islands"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "Schengen visa required for non-EU citizens"
      },
      images:[],
      activityIcons: ["beach", "culture", "relaxation"],
      category: "wellness",
      featured: false
    },
    {
      name: "Peruvian Expedition",
      tagline: "Journey through Peru&apos;s most iconic destinations",
      locations: ["Lima", "Cusco", "Machu Picchu"],
      mapUrl: "https://maps.google.com/...",
      duration: "11 Days / 10 Nights",
      inclusions: {
        flights: true,
        accommodation: "Boutique Hotels & Luxury Lodge",
        airportTransfers: true,
        guidedTours: true,
        meals: "Breakfast & Select Meals",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Lima" },
        { day: 2, description: "Lima City Tour" }
      ],
      pricing: {
        pricePerPerson: 7900,
        doubleOccupancy: 6900,
        tripleOccupancy: 5900,
        earlyBirdDiscount: 600,
        groupDiscount: 1000,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "David Lee",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/peruvian-expedition"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "Visa-free for most countries"
      },
      images:[],
      activityIcons: ["adventure", "culture", "history"],
      category: "adventure",
      featured: false
    },
    {
      name: "Thai Wellness Retreat",
      tagline: "Rejuvenate your mind, body, and soul",
      locations: ["Bangkok", "Chiang Mai", "Phuket"],
      mapUrl: "https://maps.google.com/...",
      duration: "13 Days / 12 Nights",
      inclusions: {
        flights: true,
        accommodation: "Luxury Wellness Resorts",
        airportTransfers: true,
        guidedTours: true,
        meals: "Full Board with Wellness Menu",
        travelInsurance: true
      },
      exclusions: [
        "Visa fees",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities"
      ],
      itinerary: [
        { day: 1, description: "Arrival in Bangkok" },
        { day: 2, description: "Bangkok Temple Tour" }
      ],
      pricing: {
        pricePerPerson: 9200,
        doubleOccupancy: 8200,
        tripleOccupancy: 7200,
        earlyBirdDiscount: 800,
        groupDiscount: 1200,
        paymentPlans: ["Full Payment", "50% Deposit + Balance"]
      },
      bookingInfo: {
        bookingMethods: ["Website", "Phone", "Email"],
        consultantName: "Lisa Chen",
        officeAddress: "123 Travel Street, New York",
        bookingLink: "https://booking.example.com/thai-wellness"
      },
      termsAndConditions: {
        cancellationPolicy: "Free cancellation up to 30 days before departure",
        refundPolicy: "Full refund minus processing fees",
        passportRequirements: "Valid passport with 6 months validity",
        visaRequirements: "Visa-free for most countries"
      },
      images:[],
      activityIcons: ["wellness", "spa", "relaxation"],
      category: "wellness",
      featured: false
    }
  ]
  const sampleBlogs = [
    {
      topic: "Discovering the Hidden Gems of Ethiopia: A Journey Through History",
      image : null,
      desc: "Explore the ancient wonders of Ethiopia, from the rock-hewn churches of Lalibela to the historic castles of Gondar.",
      content: `
        <div class="prose max-w-none">
          <h2>The Cradle of Civilization</h2>
          <p>Ethiopia, often referred to as the cradle of civilization, offers an unparalleled journey through time. From the ancient Axumite Empire to the medieval castles of Gondar, every corner of this remarkable country tells a story of resilience, faith, and cultural richness.</p>
          
          <h3>The Rock-Hewn Churches of Lalibela</h3>
          <p>Often called the "Eighth Wonder of the World," the rock-hewn churches of Lalibela stand as a testament to human ingenuity and devotion. Carved entirely from solid rock in the 12th century, these magnificent structures continue to serve as active places of worship today.</p>
          
          <blockquote>
            "The churches of Lalibela are not just architectural marvels; they are living monuments to Ethiopia's enduring Christian heritage."
          </blockquote>
          
          <h3>Gondar: The Camelot of Africa</h3>
          <p>The Royal Enclosure in Gondar, often called the "Camelot of Africa," features a collection of castles and palaces built between the 17th and 18th centuries. These structures showcase a unique blend of Ethiopian, European, and Indian architectural styles.</p>
          
          <h3>Practical Travel Tips</h3>
          <ul>
            <li>Best time to visit: October to February (dry season)</li>
            <li>Recommended duration: 10-14 days for a comprehensive tour</li>
            <li>Local customs: Respect religious sites and dress modestly</li>
            <li>Must-try: Traditional coffee ceremony and injera with various stews</li>
          </ul>
        </div>
      `,
      createdAt: "2024-03-15T10:00:00Z",
      updatedAt: "2024-03-15T10:00:00Z"
    },
    {
      topic: "Luxury Travel in Dubai: Beyond the Skyscrapers",
      image : null,
      desc: "Experience the epitome of luxury in Dubai, from desert safaris to world-class shopping and dining.",
      content: `
        <div class="prose max-w-none">
          <h2>Dubai: Where Modern Luxury Meets Traditional Charm</h2>
          <p>Dubai has transformed itself into a global luxury destination, offering experiences that blend modern opulence with traditional Arabian hospitality. From the world's tallest building to man-made islands, Dubai continues to push the boundaries of what's possible in travel and tourism.</p>
          
          <h3>Luxury Accommodations</h3>
          <p>Dubai is home to some of the world's most luxurious hotels, including the iconic Burj Al Arab, often called the world's only 7-star hotel. These properties offer unparalleled service, stunning architecture, and amenities that cater to the most discerning travelers.</p>
          
          <h3>Desert Experiences</h3>
          <p>Beyond the city's glittering skyline lies the vast Arabian Desert, offering unique luxury experiences:</p>
          <ul>
            <li>Private desert safaris with gourmet dining under the stars</li>
            <li>Luxury desert resorts with private pools</li>
            <li>Hot air balloon rides at sunrise</li>
            <li>Traditional Bedouin experiences with modern comforts</li>
          </ul>
          
          <h3>Shopping and Dining</h3>
          <p>Dubai's shopping scene is legendary, from the traditional souks to the world's largest shopping mall. The city's dining scene is equally impressive, with restaurants helmed by celebrity chefs and offering cuisines from around the world.</p>
          
          <blockquote>
            "Dubai offers a unique blend of luxury, adventure, and cultural experiences that can't be found anywhere else in the world."
          </blockquote>
        </div>
      `,
      createdAt: "2024-03-10T15:30:00Z",
      updatedAt: "2024-03-10T15:30:00Z"
    },
    {
      topic: "Spiritual Journey to Jerusalem: A Pilgrim's Guide",
      image : null,
      desc: "Navigate the sacred sites of Jerusalem, understanding the significance of this holy city for three major religions.",
      content: `
        <div class="prose max-w-none">
          <h2>The Eternal City: A Crossroads of Faith</h2>
          <p>Jerusalem stands as one of the world's most significant spiritual destinations, sacred to Judaism, Christianity, and Islam. This ancient city offers visitors a profound journey through history, faith, and cultural heritage.</p>
          
          <h3>Sacred Sites</h3>
          <p>The Old City of Jerusalem, a UNESCO World Heritage site, contains numerous sacred locations:</p>
          <ul>
            <li>The Western Wall (Wailing Wall)</li>
            <li>The Church of the Holy Sepulchre</li>
            <li>The Dome of the Rock</li>
            <li>The Al-Aqsa Mosque</li>
          </ul>
          
          <h3>Planning Your Visit</h3>
          <p>To make the most of your spiritual journey to Jerusalem, consider these tips:</p>
          <ul>
            <li>Best times to visit: Spring (March-May) and Fall (September-November)</li>
            <li>Respect local customs and dress codes</li>
            <li>Consider hiring a knowledgeable guide</li>
            <li>Allow time for quiet reflection at sacred sites</li>
          </ul>
          
          <blockquote>
            "Jerusalem is not just a city of stone and history; it's a living testament to faith, hope, and the human spirit."
          </blockquote>
          
          <h3>Cultural Experiences</h3>
          <p>Beyond the religious sites, Jerusalem offers rich cultural experiences through its markets, museums, and local cuisine. The city's diverse population creates a unique atmosphere where ancient traditions meet modern life.</p>
        </div>
      `,
      createdAt: "2024-03-05T09:15:00Z",
      updatedAt: "2024-03-05T09:15:00Z"
    },
    {
      topic: "Exploring China's Ancient Silk Road: A Modern Adventure",
      image : null,
      desc: "Follow the historic Silk Road through China, discovering ancient trade routes, cultural heritage, and modern developments.",
      content: `
        <div class="prose max-w-none">
          <h2>The Silk Road: Where History Meets Modernity</h2>
          <p>The ancient Silk Road, a network of trade routes connecting China with the Mediterranean, offers modern travelers an incredible journey through history, culture, and breathtaking landscapes. Today, this historic route provides a unique perspective on China's past and present.</p>
          
          <h3>Key Destinations</h3>
          <p>The Chinese section of the Silk Road includes several must-visit locations:</p>
          <ul>
            <li>Xi'an: Home of the Terracotta Warriors</li>
            <li>Dunhuang: Famous for the Mogao Caves</li>
            <li>Turpan: Known for its ancient ruins and grape valleys</li>
            <li>Kashgar: A vibrant trading city with rich Uyghur culture</li>
          </ul>
          
          <h3>Cultural Experiences</h3>
          <p>Traveling the Silk Road offers unique cultural experiences:</p>
          <ul>
            <li>Traditional bazaars and markets</li>
            <li>Local cuisine reflecting diverse influences</li>
            <li>Ancient Buddhist cave art</li>
            <li>Traditional crafts and workshops</li>
          </ul>
          
          <blockquote>
            "The Silk Road is not just a journey through space, but through time, connecting us with the traders, pilgrims, and explorers of centuries past."
          </blockquote>
          
          <h3>Practical Travel Tips</h3>
          <p>To make the most of your Silk Road adventure:</p>
          <ul>
            <li>Best time to visit: Spring and Fall</li>
            <li>Consider a guided tour for better access to remote sites</li>
            <li>Learn about local customs and etiquette</li>
            <li>Be prepared for varying climates and altitudes</li>
          </ul>
        </div>
      `,
      createdAt: "2024-02-28T14:45:00Z",
      updatedAt: "2024-02-28T14:45:00Z"
    },
    {
      topic: "The Art of French Travel: Beyond Paris",
      image : null,
      desc: "Discover the hidden treasures of France, from charming villages to world-renowned wine regions and cultural festivals.",
      content: `
        <div class="prose max-w-none">
          <h2>France: A Tapestry of Culture and Elegance</h2>
          <p>While Paris often steals the spotlight, France offers countless treasures beyond its capital. From the lavender fields of Provence to the vineyards of Bordeaux, each region tells its own unique story of French culture and heritage.</p>
          
          <h3>Regional Highlights</h3>
          <p>Explore these remarkable regions:</p>
          <ul>
            <li>Provence: Lavender fields and historic villages</li>
            <li>Bordeaux: World-class wine regions</li>
            <li>Normandy: Historic D-Day beaches and charming coastal towns</li>
            <li>Alsace: German-French fusion culture and Christmas markets</li>
          </ul>
          
          <h3>Cultural Experiences</h3>
          <p>Immerse yourself in French culture through:</p>
          <ul>
            <li>Wine tasting in prestigious vineyards</li>
            <li>Cooking classes with local chefs</li>
            <li>Art festivals and cultural events</li>
            <li>Historic château visits</li>
          </ul>
          
          <blockquote>
            "France is not just a country; it's a celebration of art, culture, and the art de vivre (art of living)."
          </blockquote>
          
          <h3>Travel Tips</h3>
          <p>Make the most of your French adventure:</p>
          <ul>
            <li>Best seasons: Spring and Fall for pleasant weather</li>
            <li>Learn basic French phrases</li>
            <li>Book accommodations in advance during peak season</li>
            <li>Consider regional train passes for easy travel</li>
          </ul>
          
          <h3>Local Cuisine</h3>
          <p>Each region of France offers its own culinary specialties, from the seafood of Brittany to the rich dishes of Burgundy. Don't miss the opportunity to experience local markets and traditional restaurants.</p>
        </div>
      `,
      createdAt: "2024-02-20T11:20:00Z",
      updatedAt: "2024-02-20T11:20:00Z"
    }
  ];

  sampleBlogs.forEach(async (blog) => {
    try {
      const response = await fetch('http://localhost:3000/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formData : {...blog,image : "http://res.cloudinary.com/de7yugvwl/image/upload/v1748708726/Cloudinary-React/jp2_ujolad.jpg"}})
      });
      const result = await response.json();
      console.log('Blog post result:', result);
    } catch (error) {
      console.error('Error posting blog:', error);
    }
  });
