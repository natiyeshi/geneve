import { NextRequest, NextResponse } from 'next/server';
import Referral from '../../(models)/referral.model';

export async function GET(request: NextRequest) {
  try {
    // Create new referral record
    const referrals = await Referral.find();

    return NextResponse.json({ success: true, referrals });
  } catch (error) {
    console.error('Error getting referral:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
