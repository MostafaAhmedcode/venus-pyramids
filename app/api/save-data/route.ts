import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data', 'overrides');

async function ensureDir() {
  await mkdir(dataDir, { recursive: true });
}

// GET — load current overrides for a type
export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type'); // 'rooms' | 'tours' | 'staff'
  if (!type) return NextResponse.json({ success: false, message: 'Missing type' }, { status: 400 });
  try {
    await ensureDir();
    const file = path.join(dataDir, `${type}.json`);
    const raw = await readFile(file, 'utf-8').catch(() => '[]');
    return NextResponse.json({ success: true, data: JSON.parse(raw) });
  } catch (err) {
    return NextResponse.json({ success: false, message: String(err) }, { status: 500 });
  }
}

// POST — save one item (room, tour, or staff) into the overrides JSON
export async function POST(req: NextRequest) {
  try {
    const { type, item } = await req.json();
    if (!type || !item || !item.id) {
      return NextResponse.json({ success: false, message: 'Missing type or item' }, { status: 400 });
    }

    await ensureDir();
    const file = path.join(dataDir, `${type}.json`);
    const raw = await readFile(file, 'utf-8').catch(() => '[]');
    const list: any[] = JSON.parse(raw);

    const idx = list.findIndex((x: any) => x.id === item.id);
    if (idx >= 0) list[idx] = item;
    else list.push(item);

    await writeFile(file, JSON.stringify(list, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('save-data error:', err);
    return NextResponse.json({ success: false, message: String(err) }, { status: 500 });
  }
}
