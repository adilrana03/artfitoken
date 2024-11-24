import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Email from '@/models/Email';

export async function POST(request: Request) {
  console.log('Starting subscription process...');
  
  try {
    // Parse request body
    const body = await request.json();
    const { email, isArtinals } = body;

    console.log('Attempting to connect to database...');
    await connectToDatabase();
    console.log('Database connected successfully');

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for existing email
    const existingEmail = await Email.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create new subscription
    const newEmail = new Email({
      email: email.toLowerCase(),
      isArtinals: isArtinals ?? true,
      createdAt: new Date()
    });

    await newEmail.save();
    console.log('Email saved successfully:', newEmail);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed',
        data: newEmail 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Subscription error:', error);
    
    // Specific error handling
    if (error.name === 'MongooseError' || error.name === 'MongoError') {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 500 }
      );
    }

    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Invalid data provided' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}