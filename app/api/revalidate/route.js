// app/api/revalidate/route.js
import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request) {
  // authorize
  const auth = request.headers.get('authorization') || '';
//   console.log("🚀 ~ POST ~ auth:", auth)
  const token = auth.split(' ')[1];
  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // parse payload
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }

  const { model, entry } = body;
  console.log("🚀 ~ POST ~ model:", model)
  if (!model) {
    return NextResponse.json({ message: 'Missing model' }, { status: 400 });
  }

  // revalidate based on content type
  switch (model) {
       case 'global':
      console.log('Global data updated — invalidating global cache');
      revalidateTag('global');
      revalidatePath('/');  // or use layout type if needed
      break;
    case 'home':
        console.log('home data is updated')
      revalidatePath('/');
      break;
    case 'about':
      revalidatePath('/about');
      break;
    case 'post':
      if (entry && entry.slug) {
        revalidatePath(`/posts/${entry.slug}`);
      }
      // also revalidate posts index
      revalidatePath('/posts');
      break;
    // add more cases as needed:
    // case 'contact': revalidatePath('/contact'); break;
      case 'cache':
      console.log(' Received `cache` model - no action taken');
      break;
    default:
      // fallback: revalidate a page named after the model
      revalidatePath(`/${model}`);
  }

  return NextResponse.json({ revalidated: true });
}
