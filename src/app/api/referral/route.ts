import { NextRequest, NextResponse } from 'next/server';
import Referral from '../(models)/referral.model';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ref = searchParams.get('ref');
    
    if (!ref) {
      return NextResponse.json({ error: 'No referral code provided' }, { status: 400 });
    }

    // Determine the source based on the referral code
    let source = 'unknown';
    if (ref === '564') {
      source = 'tiktok';
    } else if (ref === '875') {
      source = 'facebook';
    }

    // Create new referral record
    const referral = await Referral.create({
      source,
      referralCode: ref,
    });

    return NextResponse.json({ success: true, referral });
  } catch (error) {
    console.error('Error tracking referral:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// API endpoint to get referral statistics
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { startDate, endDate } = body || {};

    const query: any = {};
    if (startDate) {
      query.createdAt = { $gte: new Date(startDate) };
    }
    if (endDate) {
      query.createdAt = { 
        ...query.createdAt,
        $lte: new Date(endDate)
      };
    }

    const stats = await Referral.aggregate([
      { $match: query },
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          source: '$_id',
          count: 1,
          _id: 0,
        },
      },
    ]);

    return NextResponse.json({ success: true, stats });
  } catch (error) {
    console.error('Error fetching referral stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 