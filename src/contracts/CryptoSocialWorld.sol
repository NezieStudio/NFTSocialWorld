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

    // Create Posts
    function uploadImage() public {
        // increment image id
        imageCount = imageCount++;

        // add image to contract
        images[1] = Image(1, "abc123", "Hello, world!", 0, address(0x0));
    }

    // Tip Posts
}
