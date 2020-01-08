export interface UserInterface {
  name: string;
  username: string;
  password: string;
  email: string[];
}

const User: UserInterface[] = [
  {
    name: "Matheus",
    username: "paice",
    password: "123456",
    email: [
      "matheus@gmail.com",
      "matheus@mandeumzap.com.br",
      "mathes.paice@gmail.com"
    ]
  }
];

export default User;
