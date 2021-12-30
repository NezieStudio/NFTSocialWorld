pragma solidity ^0.5.0;

contract CryptoSocialWorld {
    // state stored on the blockchain
    string public name = "CryptoSocialWorld";

    // stores Images
    uint256 public imageCount = 0;
    mapping(uint256 => Image) public images;

    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable auther;
    }

    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable auther
    );

    // Create Posts
    function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        // increment image id
        imageCount = imageCount++;

        // add image to contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            address(0x0),
            msg.sender
        );

        // Trigger event
        emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
    }

    // Tip Posts
}
