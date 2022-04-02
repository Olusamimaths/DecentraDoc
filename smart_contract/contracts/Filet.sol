// contract/Filet.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Filet is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public totalSupply = 1000000;

    constructor() ERC721("Filet", "FIT") {}

    function transfer(address from, address to, uint256 tokenId) 
        public
        returns (uint256)
    {
        _safeTransfer(from, to, tokenId, "");
        return tokenId;
    }

    function mintTo(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        require(_tokenIds.current() < totalSupply);

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}