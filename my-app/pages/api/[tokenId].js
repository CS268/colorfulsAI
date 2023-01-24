export default function handler(req, res) {
    // Get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // Generate the tokenURI based on the tokenId
    const tokenURI = `https://colorfuls-ai.vercel.app/api/tokenId?tokenId=${tokenId}`;
    // Generate the image_url based on the tokenId
    const image_url = `https://ipfs.io/ipfs/QmYPS6pTMPBz7ibZgxBvyi5bqDGs5oGNRFijnACB2Lux53/colorful${tokenId}.png';
`;
    // Send back the metadata for the NFT
    return res.status(200).json({
        name: `colorfulAI #${tokenId}`,
        description: "colorfulAI is a collection of AI Art for supporters in crypto",
        image: image_url
    });
}
