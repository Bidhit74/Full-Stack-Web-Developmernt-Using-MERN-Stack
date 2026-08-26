import connectDB from "./db.js";
import { Chat } from "../models/chat.js";

// Connect Databases
await connectDB();

const chats = [
  {
    from: "Bidhit",
    to: "Priya",
    message: "Hello Priya, how are you?",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Bidhit",
    message: "I am good, how about you?",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Neha",
    message: "Are you free this evening?",
    created_at: new Date(),
  },
  {
    from: "Neha",
    to: "Rahul",
    message: "Yes, I am free after 7 PM.",
    created_at: new Date(),
  },
  {
    from: "Aman",
    to: "Riya",
    message: "Did you finish your homework?",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Aman",
    message: "Yes, I finished it yesterday.",
    created_at: new Date(),
  },
  {
    from: "Arjun",
    to: "Sneha",
    message: "What are you doing now?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Arjun",
    message: "I am studying for tomorrow's test.",
    created_at: new Date(),
  },
  {
    from: "Vikas",
    to: "Anjali",
    message: "Have you had lunch?",
    created_at: new Date(),
  },
  {
    from: "Anjali",
    to: "Vikas",
    message: "Yes, I just finished lunch.",
    created_at: new Date(),
  },
  {
    from: "Rohit",
    to: "Kavya",
    message: "Can you send me the notes?",
    created_at: new Date(),
  },
  {
    from: "Kavya",
    to: "Rohit",
    message: "Sure, I will send them soon.",
    created_at: new Date(),
  },
  {
    from: "Karan",
    to: "Pooja",
    message: "Are you coming to college?",
    created_at: new Date(),
  },
  {
    from: "Pooja",
    to: "Karan",
    message: "Yes, I will be there at 10.",
    created_at: new Date(),
  },
  {
    from: "Mohit",
    to: "Simran",
    message: "Let's meet near the library.",
    created_at: new Date(),
  },
  {
    from: "Simran",
    to: "Mohit",
    message: "Okay, I will reach in ten minutes.",
    created_at: new Date(),
  },
  {
    from: "Nikhil",
    to: "Isha",
    message: "Did you watch the new movie?",
    created_at: new Date(),
  },
  {
    from: "Isha",
    to: "Nikhil",
    message: "Yes, it was really good.",
    created_at: new Date(),
  },
  {
    from: "Sahil",
    to: "Meera",
    message: "Can we talk later tonight?",
    created_at: new Date(),
  },
  {
    from: "Meera",
    to: "Sahil",
    message: "Sure, message me when you are free.",
    created_at: new Date(),
  },
  {
    from: "Varun",
    to: "Tanya",
    message: "How was your exam today?",
    created_at: new Date(),
  },
  {
    from: "Tanya",
    to: "Varun",
    message: "It went better than I expected.",
    created_at: new Date(),
  },
  {
    from: "Dev",
    to: "Aisha",
    message: "Good morning, have a nice day!",
    created_at: new Date(),
  },
  {
    from: "Aisha",
    to: "Dev",
    message: "Good morning, you too!",
    created_at: new Date(),
  },
  {
    from: "Yash",
    to: "Nandini",
    message: "See you tomorrow at college.",
    created_at: new Date(),
  },
];

//Create Collection
Chat.insertMany(chats);
