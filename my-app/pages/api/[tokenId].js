export default function handler(req, res) {
    const tokenId = req.query.tokenId;
    const tokenURI = "https://colorfuls-ai.vercel.app/api/tokenId?tokenId=" + tokenId;
    const image_url = "https://ipfs.io/ipfs/QmdG8iJvTHbCz55hKNgwfVchSsKFhGhcGCUYiFpH9aMkeR/"+tokenId;
    res.status(200).json({
      name: "colorfulAI #" + tokenId,
      description: "colorfulAI is a collection of AI Art for supporters in crypto",
      image: image_url,
    });
}