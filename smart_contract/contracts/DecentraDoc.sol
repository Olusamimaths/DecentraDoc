// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DecentraDoc {
    string public name;
    uint256 public documentCount = 0;
    mapping(uint256 => Document) public documents;

    struct Document {
        uint256 id;
        string hash;
        string description;
    }

    event DocumentCreated(uint256 id, string hash, string description);

    constructor() {
        name = "DecentraDoc";
    }

    function uploadDocument(string memory _docHash, string memory _description)
        public
    {
        // Make sure the document hash exists
        require(bytes(_docHash).length > 0);
        // Make sure document description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment document id
        documentCount++;

        // Add Document to the contract
        documents[documentCount] = Document(
            documentCount,
            _docHash,
            _description
        );
        // Trigger an event
        emit DocumentCreated(documentCount, _docHash, _description);
    }
}
