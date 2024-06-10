# SCANS-TS
An asyncronous Typescript library for interacting with all known block explorers

## Getting started
You can install the library with
```bash
npm install @blockcmd/scans-ts
```

Then import and initialize the Scans object with name of block explorer of your choice
```typescript
const scans = new Scans.Etherscan("INSERT_YOUR_API_KEY")
```

You can use both `.env` file or a `config.ts` file to set your API key. Examples are included.

## Supported explorers
- Etherscan
- OKLink `coming soon`
- Solana FM `coming soon`