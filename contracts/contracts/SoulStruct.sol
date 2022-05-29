// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Soul {
    // Name of the soul owner.
    string identity;
    // Reputation activity metadata in DAOs.
    string url;
    // The reputation score of the Soul in DAOs.
    int256 score;
    // The time of the soul last updated.
    uint256 timestamp;
}
