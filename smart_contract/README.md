# web3-starter-kit

A little project to help you getting up and running with SEEN stack.

## Set up

1. Clone the repo and install the deps with `npm install`.

2. Compile the `Filet` contract with `npx hardhat compile`.

3. Then start the hardhat console and experiment

```shell
npx hardhat console
Welcome to Node.js v14.18.1.
Type ".help" for more information.
>
```

## Create a contract object

```shell
> const Filet = await ethers.getContractFactory('Filet');
> const filet = await Filet.deploy();
```

## Get accounts

```shell
> const [owner, user1, user2, ...users] = await ethers.getSigners();
> const ownerBalance = await filet.balanceOf(owner.address);
> ownerBalance.toNumber();
0
```

## Upload asset to NFT.Storage

Sign up with [nft.storage](https://nft.storage) and get the API key to use with the upload script to retrieve the IPFS URL.

```shell
> const { upload } = import("./scripts/upload.mjs");
> const apiKey = "<your-api-key>";
> const imagePath = "./assets/biscuit.png";
> const { url } = upload(apiKey, imagePath, "Biscuit", "Filecoin's favorite corgi NFT");
```

## Mint

Mint the first NFT to the first account.

```shell
> await filet.mintTo(owner.address, url);
> let newBalance = await filet.balanceOf(owner.address);
> newBalance
1
> const tokenId = 1;
> const ownerAddress = await filet.ownerOf(tokenId);
> ownerAddress === owner.address;
true
```

## Transfer to another account

```shell
> await filet.transfer(owner.address, user2.address);
> const updatedBalance = await filet.balanceOf(owner.address);
> updatedBalance
0
> const newOwnerAddress = await filet.ownerOf(tokenId);
> newOwnerAddress === user2.address;
true
```

## Get the token asset URI

```shell
> const uri = await filet.tokenURI(tokenId);
> uri
'ipfs://bafyreicb3ewk33keh77mwxhmhdafxsjlkflichr2mjnyim6tbq3qjkwcue/metadata.json'
```

## Convert to web2 URL

Convert the IPFS URL to the HTTP gateway URL to use with `fetch`

```shell
> const { toGatewayURL } = await import("nft.storage")
> const { href } = await toGatewayURL(ipfsURI)
> href
> 'https://nftstorage.link/ipfs/bafyreicb3ewk33keh77mwxhmhdafxsjlkflichr2mjnyim6tbq3qjkwcue/metadata.json'
```
