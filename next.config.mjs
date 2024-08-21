/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // or http
                hostname: "mganxioedyylooccjfyj.supabase.co"
            },
        ]
    }
};

export default nextConfig;
