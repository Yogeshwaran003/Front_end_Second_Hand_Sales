import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13 Pro - 256GB",
    price: 699.99,
    description: "Used iPhone 13 Pro in excellent condition. Comes with original charger and box. Minor scratches on the back.",
    category: "Electronics",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "2022-01-15",
        event: "Original Purchase",
        description: "Purchased new from Apple Store",
      },
      {
        id: 2,
        date: "2023-05-20",
        event: "Screen Replacement",
        description: "Screen replaced due to minor crack at authorized service center",
      }
    ],
    originalOwner: {
      id: 101,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "555-123-4567",
      rating: 4.8,
      joinedDate: "2020-03-12"
    },
    currentOwner: {
      id: 101,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "555-123-4567",
      rating: 4.8,
      joinedDate: "2020-03-12"
    },
    location: "San Francisco, CA",
    listedDate: "2023-11-05"
  },
  {
    id: 2,
    name: "Sony PlayStation 5",
    price: 399.99,
    description: "PS5 Digital Edition in great condition. Includes two controllers and 3 games.",
    category: "Gaming",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "2022-06-10",
        event: "Original Purchase",
        description: "Purchased new from Best Buy",
      }
    ],
    originalOwner: {
      id: 102,
      name: "Emily Johnson",
      email: "emily.j@example.com",
      phone: "555-987-6543",
      rating: 4.9,
      joinedDate: "2021-01-05"
    },
    currentOwner: {
      id: 102,
      name: "Emily Johnson",
      email: "emily.j@example.com",
      phone: "555-987-6543",
      rating: 4.9,
      joinedDate: "2021-01-05"
    },
    location: "Austin, TX",
    listedDate: "2023-10-28"
  },
  {
    id: 3,
    name: "MacBook Pro 16\" (2022)",
    price: 1599.99,
    description: "M1 Pro MacBook with 16GB RAM and 512GB SSD. Includes AppleCare+ until 2025.",
    category: "Electronics",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "2022-03-20",
        event: "Original Purchase",
        description: "Purchased new from Apple Store",
      },
      {
        id: 2,
        date: "2022-03-25",
        event: "AppleCare+ Added",
        description: "Extended warranty purchased",
      }
    ],
    originalOwner: {
      id: 103,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "555-456-7890",
      rating: 4.7,
      joinedDate: "2019-11-18"
    },
    currentOwner: {
      id: 103,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "555-456-7890",
      rating: 4.7,
      joinedDate: "2019-11-18"
    },
    location: "Seattle, WA",
    listedDate: "2023-11-10"
  },
  {
    id: 4,
    name: "Canon EOS R5 Camera",
    price: 2499.99,
    description: "Professional mirrorless camera with 45MP sensor. Includes 24-105mm lens and extra battery.",
    category: "Photography",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "2021-08-15",
        event: "Original Purchase",
        description: "Purchased new from B&H Photo",
      },
      {
        id: 2,
        date: "2022-02-10",
        event: "Sensor Cleaning",
        description: "Professional sensor cleaning at Canon service center",
      },
      {
        id: 3,
        date: "2022-09-05",
        event: "Firmware Update",
        description: "Updated to latest firmware v1.5.0",
      }
    ],
    originalOwner: {
      id: 104,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      phone: "555-234-5678",
      rating: 4.9,
      joinedDate: "2020-05-22"
    },
    currentOwner: {
      id: 104,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      phone: "555-234-5678",
      rating: 4.9,
      joinedDate: "2020-05-22"
    },
    location: "Denver, CO",
    listedDate: "2023-10-15"
  },
  {
    id: 5,
    name: "Vintage Leather Jacket",
    price: 189.99,
    description: "Genuine leather jacket from the 90s. Size M. Well maintained with natural patina.",
    category: "Fashion",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "1998-11-20",
        event: "Original Purchase",
        description: "Purchased new from Nordstrom",
      },
      {
        id: 2,
        date: "2010-03-15",
        event: "Ownership Transfer",
        description: "Passed down from original owner to family member",
        previousOwner: {
          id: 105,
          name: "Robert Taylor",
          email: "robert.t@example.com",
          phone: "555-876-5432",
          rating: 4.6,
          joinedDate: "2018-09-30"
        }
      },
      {
        id: 3,
        date: "2020-08-10",
        event: "Professional Cleaning",
        description: "Leather conditioning and cleaning",
      }
    ],
    originalOwner: {
      id: 105,
      name: "Robert Taylor",
      email: "robert.t@example.com",
      phone: "555-876-5432",
      rating: 4.6,
      joinedDate: "2018-09-30"
    },
    currentOwner: {
      id: 106,
      name: "Jessica Taylor",
      email: "jessica.t@example.com",
      phone: "555-876-1234",
      rating: 4.8,
      joinedDate: "2019-02-15"
    },
    location: "Chicago, IL",
    listedDate: "2023-11-01"
  },
  {
    id: 6,
    name: "Specialized Road Bike",
    price: 899.99,
    description: "Carbon frame road bike, Shimano 105 groupset. Recently serviced with new tires.",
    category: "Sports",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    history: [
      {
        id: 1,
        date: "2020-04-10",
        event: "Original Purchase",
        description: "Purchased new from Trek Bicycle Store",
      },
      {
        id: 2,
        date: "2021-06-15",
        event: "Component Upgrade",
        description: "Upgraded to Shimano 105 groupset",
      },
      {
        id: 3,
        date: "2023-02-20",
        event: "Full Service",
        description: "Complete bike service including new chain and tires",
      }
    ],
    originalOwner: {
      id: 107,
      name: "David Wilson",
      email: "david.w@example.com",
      phone: "555-345-6789",
      rating: 4.7,
      joinedDate: "2019-08-12"
    },
    currentOwner: {
      id: 107,
      name: "David Wilson",
      email: "david.w@example.com",
      phone: "555-345-6789",
      rating: 4.7,
      joinedDate: "2019-08-12"
    },
    location: "Portland, OR",
    listedDate: "2023-10-05"
  }
];