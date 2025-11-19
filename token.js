import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const userquery = 'Write a poem about a lonely computer.';

const tokens = enc.encode(userquery);
console.log(`Number of tokens: ${tokens.length}`);
console.log(`Tokens: ${tokens}`);
