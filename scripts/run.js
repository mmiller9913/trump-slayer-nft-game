//npx hardhat run scripts/run.js

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["AOC", "Joe Biden", "Nancy Pelosi"],
        ["https://i.imgur.com/jfLj0oI.png",
            "https://i.imgur.com/7rwfMCc.jpg",
            "https://i.imgur.com/WWCiZvv.jpeg"],
        [100, 200, 300],
        [100, 50, 25],
        "Donald Trump", // Boss name
        "https://i.imgur.com/WEknSq5.jpeg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    // Get the value of the NFT's URI.
    // .tokenURI() is something we get from the ERC721 contract
    // .tokenURI() returns the data of the NFT with the tokenId that was passed
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);


    //testing for attackBoss();
    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();