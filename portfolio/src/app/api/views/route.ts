import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize Redis directly
const redis = Redis.fromEnv();

export async function POST() {
  try {
    // If Redis is not configured, fall back to initial value
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ views: 1248 }, { status: 200 });
    }

    const views = await redis.incr('portfolio-views');
    
    // Set a baseline if the db is fresh
    if (views === 1) {
      await redis.set('portfolio-views', 1248);
      return NextResponse.json({ views: 1248 });
    }

    return NextResponse.json({ views });
  } catch (error) {
    console.error('Failed to update views in KV:', error);
    return NextResponse.json({ views: 1248 }, { status: 500 });
  }
}
