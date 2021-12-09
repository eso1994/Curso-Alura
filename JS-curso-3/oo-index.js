import {Client} from "./oo-Client.js";

const client1 = new Client ("José Cristo", 63);
const client2 = new Client ("Maria de Nazaré", 13);

client1.deposit(100);
client1.withdraw(10);
client1.transfer(50, client2);
client2.balanceClient();
client1.balanceClient();

