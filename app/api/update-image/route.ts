import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { type, id, imageUrl } = await req.json();

    if (!type || !id || !imageUrl) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', `${type}s.ts`);
    let content = await readFile(filePath, 'utf-8');

    // Find the entry by id and replace its image field
    // We look for the block containing `id: <id>,` and replace the image line within it
    const idPattern = new RegExp(
      `(id:\\s*${id},[\\s\\S]*?image:\\s*")[^"]*(")`
    );

    if (!idPattern.test(content)) {
      return NextResponse.json({ success: false, message: `Could not find ${type} with id ${id}` }, { status: 404 });
    }

    content = content.replace(idPattern, `$1${imageUrl}$2`);
    await writeFile(filePath, content, 'utf-8');

    return NextResponse.json({ success: true, message: 'Image updated', imageUrl });
  } catch (err) {
    console.error('Update image error:', err);
    return NextResponse.json({ success: false, message: 'Failed to update image' }, { status: 500 });
  }
}
