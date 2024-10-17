import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { contractFile } from './compile.js';

const contractAbi = contractFile.abi;

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const api = process.env.API;

const contractAddress = '0x5059b326aDc3e2Bf4eC887cA2ad55c618C2902Bb';

// Ethereum provider
const provider = new ethers.JsonRpcProvider(api);
const wallet = new ethers.Wallet(privateKey, provider);



async function writeContractData() {
  try {
  
    const MyToken = new ethers.Contract(contractAddress, contractAbi, wallet);

    // Current data
    const recipientAddress = '0x70F480b7EbC27e8CE127B910Ce89035B8fE50EB5'; // Replace with the recipient's address
    const tokenURI = 'https://example.com/token/1'; // Replace with the token URI



// Call the safeMint function api method
const tx = await MyToken.safeMint(recipientAddress, tokenURI);
    var receipt = await tx.wait();

//api method
    const data = await MyToken.tokensOfOwner("0x70F480b7EbC27e8CE127B910Ce89035B8fE50EB5");
    console.log('The current data stored on blockchain is:', data);




  } catch (error) {
    console.error('Error reading contract data:', error);
  }
}

writeContractData();
