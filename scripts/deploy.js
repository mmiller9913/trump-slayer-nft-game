// npx hardhat run scripts/deploy.js --network rinkeby

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

    // let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // console.log("Done deploying and minting!");
    // console.log("Attacking boss");

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

};

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