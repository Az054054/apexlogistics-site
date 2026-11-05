// Shipment tracking data. Edit this file by hand to update a shipment.
// Statuses: Picked up, In transit, Out for delivery, Delivered, On hold
// Add a new object to the list, or change the status and add an event.
window.SHIPMENTS = [
  {
    "tracking_number": "SHP-1002",
    "service": "Ocean freight",
    "origin": "Rotterdam",
    "destination": "Paris",
    "status": "In transit",
    "location": "Paris",
    "eta": "",
    "note": "Demo shipment, you can delete it",
    "updated": "2026-10-31T15:28:52+00:00",
    "events": [
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Picked up",
        "location": "Rotterdam",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "In transit",
        "location": "Paris",
        "note": "Demo update"
      }
    ]
  },
  {
    "tracking_number": "SHP-1003",
    "service": "USA door-to-door",
    "origin": "Madrid",
    "destination": "Lisbon",
    "status": "Out for delivery",
    "location": "Lisbon",
    "eta": "",
    "note": "Demo shipment, you can delete it",
    "updated": "2026-10-31T15:28:52+00:00",
    "events": [
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Picked up",
        "location": "Madrid",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "In transit",
        "location": "Lisbon",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Out for delivery",
        "location": "Lisbon",
        "note": "Demo update"
      }
    ]
  },
  {
    "tracking_number": "SHP-1004",
    "service": "Air freight",
    "origin": "Milan",
    "destination": "Rome",
    "status": "Delivered",
    "location": "Rome",
    "eta": "",
    "note": "Demo shipment, you can delete it",
    "updated": "2026-10-31T15:28:52+00:00",
    "events": [
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Picked up",
        "location": "Milan",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "In transit",
        "location": "Rome",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Out for delivery",
        "location": "Rome",
        "note": "Demo update"
      },
      {
        "time": "2026-10-31T15:28:52+00:00",
        "status": "Delivered",
        "location": "Rome",
        "note": "Demo update"
      }
    ]
  },
  {
    "tracking_number": "SHP-7791",
    "service": "Ocean freight",
    "origin": "Berlin, Germany",
    "destination": "Connecticut, USA",
    "status": "Picked up",
    "location": "Berlin, Germany",
    "eta": "",
    "note": "Shipment booked",
    "updated": "2026-10-31T15:47:15+00:00",
    "events": [
      {
        "time": "2026-10-31T15:47:15+00:00",
        "status": "Picked up",
        "location": "Berlin, Germany",
        "note": "Shipment booked"
      }
    ]
  },
  {
    "tracking_number": "SHP-73939",
    "service": "Ocean freight",
    "origin": "Germany",
    "destination": "Kentucky, USA",
    "status": "Picked up",
    "location": "Berlin, Germany",
    "eta": "About 1 week",
    "note": "Shipment booked",
    "updated": "2026-11-04T19:44:01+00:00",
    "events": [
      {
        "time": "2026-11-04T19:44:01+00:00",
        "status": "Picked up",
        "location": "Berlin, Germany",
        "note": "Shipment booked"
      }
    ],
    "shipper": "Glory James",
    "receiver": "Kent Throne"
  },
  {
    "tracking_number": "SHP-195098",
    "service": "Overnight delivery",
    "origin": "Borrego Springs, CA",
    "destination": "1830 Diplomat Pkwy W, Cape Coral, FL 33993",
    "status": "Delivered",
    "location": "Cape Coral, FL",
    "eta": "Delivered October 27, 2026 (received and signed)",
    "note": "Received and signed",
    "shipper": "Ken Bukowski",
    "receiver": "Jonathon David Matern",
    "updated": "2026-10-27T12:00:00+00:00",
    "events": [
      {
        "time": "2026-10-25T12:00:00+00:00",
        "status": "Picked up",
        "location": "Borrego Springs, CA",
        "note": "Sent out"
      },
      {
        "time": "2026-10-27T12:00:00+00:00",
        "status": "Delivered",
        "location": "Cape Coral, FL",
        "note": "Received and signed"
      }
    ],
    "receipt_date": "October 25, 2026",
    "route_states": [
      "California",
      "Arizona",
      "New Mexico",
      "Texas",
      "Louisiana",
      "Mississippi",
      "Alabama",
      "Florida"
    ]
  }
];
