import { Card } from './card';

// Assets
export const mutualFunds: Card   = { id: 1, imgSrc: 'https://doc.utimf.com/v1/AUTH_5b9dd00b-8132-4a21-a800-711111810cee/UTIContainer/Guide%20on%20How%20Mutual%20Funds%20Work%3F20200809-141343.jpg', name: 'Mutual Funds' };
export const stocks: Card        = { id: 2, imgSrc: 'https://upstox.com/app/themes/upstox/dist/img/home/stocks.png', name: 'Stocks' };
export const goldAndSilver: Card = { id: 3, imgSrc: 'https://www.investopedia.com/thmb/ShcVLzkb94tkwJQsnfD4-h8Uj0Y=/1600x1200/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-174072047-4ca848d55c1a4c26a799fa60ad80b32e.jpg', name: 'Gold & Silver' };
export const fixedDeposits: Card = { id: 4, imgSrc: 'https://i.ibb.co/M24MT4H/download.jpg', name: 'Fixed Deposits' }
// export const crypto: Card        = { id: 2, imgSrc: 'https://i.pinimg.com/originals/77/c2/05/77c205f27408688b643e1f332a586f53.gif', name: 'Crypto' };

// Liabilties
export const house: Card        = { id: 1, imgSrc: 'https://img.freepik.com/free-vector/facade-building-suburban-house-with-garage-green-lawn-vector-cartoon-illustration-games-animation_273525-323.jpg?size=626&ext=jpg', name: 'House' };
export const car: Card          = { id: 2, imgSrc: 'https://i.pinimg.com/originals/d1/2a/6e/d12a6e88e902ffabd87c63791522cfd8.gif', name: 'Car' };

// Assets + Liabilities

export const assets: Card[] = [ mutualFunds, stocks, goldAndSilver, fixedDeposits ];
export const liabilities: Card[] = [ house, car ];
