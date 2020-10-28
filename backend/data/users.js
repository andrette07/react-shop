import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@andresfgomez.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Dosh",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
