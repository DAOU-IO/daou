// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const SBT = await ethers.getContractFactory("SBT");
  // We get the contract to deploy
  const SocialOracle = await ethers.getContractFactory("SocialOracle");
  const sbt = await SBT.deploy("Soulbound Token","SBT");
  const so = await SocialOracle.deploy("DAOU Social Oracle");
  
  await sbt.deployed();
  await so.deployed();

  console.log("Soulbound Token deployed to:", sbt.address);
  console.log("DAOU Social Oracle deployed to:", sbt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
