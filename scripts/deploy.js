// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");

  // await greeter.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  
  // deploy token for reward
  const token = await ethers.getContractFactory("RewardsToken");
  rewardToken = await token.deploy("Reward Token", "RTK");
  await rewardToken.deployed();
  // deploy nft contract
  const nft = await ethers.getContractFactory("NFT");
  nftContract = await nft.deploy("Test NFT", "TNFTs");
  await nftContract.deployed();
  // deployments
  const stake = await ethers.getContractFactory("NFTStaking");
  stakeContract = await stake.deploy(rewardToken.address);
  await stakeContract.deployed();

  console.log({
    rewardToken: rewardToken.address,
    nftContract: nftContract.address,
    stakeContract: stakeContract.address
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
