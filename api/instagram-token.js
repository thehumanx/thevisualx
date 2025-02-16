export default function handler(req, res) {
    res.status(200).json({ instagramAccessToken: process.env.INSTAGRAM_ACCESS_TOKEN });
}