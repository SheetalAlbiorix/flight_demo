const flightsData = Array.from({ length: 30 }, (_, i) => {
    const airlines = ['Delta', 'United', 'American Airlines', 'JetBlue', 'Southwest'];
    const airports = ['JFK', 'LAX', 'ORD', 'ATL', 'DFW', 'SFO', 'SEA', 'DEN', 'MIA', 'BOS'];
    const statuses = ['Upcoming', 'Boarding Soon', 'Delayed', 'Cancelled'];
  
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const pad = (n) => n.toString().padStart(2, '0');
  
    const flightNum = `${random(airlines).slice(0, 2).toUpperCase()} ${Math.floor(Math.random() * 900) + 100}`;
    const date = new Date();
    date.setDate(date.getDate() + i); // Add i days to today
    const formattedDate = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  
    return {
      airline: random(airlines),
      flightNumber: flightNum,
      departure: random(airports),
      arrival: random(airports),
      time: `${Math.floor(Math.random() * 12) + 1}:${pad(Math.floor(Math.random() * 60))} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      date: formattedDate,
      status: random(statuses),
    };
  });
  
  export default flightsData;
  