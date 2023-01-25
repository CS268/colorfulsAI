const fs = require('fs');

function updateMetadata(tokenId) {
  // Read the contents of the metadata file
  const data = fs.readFileSync(`metadata/colorful${tokenId}.json`);

  // Parse the contents of the file as a JSON object
  const metadata = JSON.parse(data);

  // Update the "name" property to the actual number
  metadata.name = `colorfulAI${tokenId}`;

  // Write the updated metadata back to the file
  fs.writeFileSync(`metadata/colorful${tokenId}.json`, JSON.stringify(metadata));
}

export default function handler(req, res) {
    // Get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // Generate the tokenURI based on the tokenId
    const tokenURI = `https://colorfuls-ai.vercel.app/api/tokenId?tokenId=${tokenId}`;
    // Generate the image_url based on the tokenId
    const image_url = `https://ipfs.io/ipfs/QmYPS6pTMPBz7ibZgxBvyi5bqDGs5oGNRFijnACB2Lux53/colorful${tokenId}.png`;
    // update the metadata
    updateMetadata(tokenId)
    // Send back the metadata for the NFT
    return res.status(200).json({
        name: `colorfulAI #${tokenId}`,
        description: "colorfulAI is a collection of
