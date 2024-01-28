/** @type {import('next').NextConfig} */

import path from 'path';

require('dotenv').config({ path: path.resolve(process.cwd(),'.vercel/env.production.local') });

module.exports = nextConfig
