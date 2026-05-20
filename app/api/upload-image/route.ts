import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file provided' }, { status: 400 });
    }

    // Validate type
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ success: false, message: 'Only JPG, PNG, WEBP images allowed' }, { status: 400 });
    }

    // Max 10 MB
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ success: false, message: 'File too large (max 10 MB)' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/images/
    const dir = path.join(process.cwd(), 'public', 'images');
    await mkdir(dir, { recursive: true });

    // Sanitize filename
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
    const filePath = path.join(dir, safeName);

    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/images/${safeName}`,
      filename: safeName,
    });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
  }
}
