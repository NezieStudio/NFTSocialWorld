pragma solidity ^0.5.0;

contract CryptoSocialWorld {
    // state stored on the blockchain
    string public name = "CryptoSocialWorld";

    // Stores Images
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
        images[1] = Image(1, "abc123", "Hello, world!", 0, address(0x0));
    }

    // Tip Posts
}
