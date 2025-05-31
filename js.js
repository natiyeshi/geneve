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

allPackages.forEach((pkg, idx) => {
    fetch('http://localhost:3000/api/packages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pkg)
    })
    .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            console.error(`Error for package ${idx + 2}:`, response.status, data);
        } else {
            console.log(`Success for package ${idx + 2}:`, data);
        }
    })
    .catch(error => {
        console.error(`Network Error for package ${idx + 2}:`, error);
    });
});