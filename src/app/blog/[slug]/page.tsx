import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const post = posts.find((post) => post.slug === p.slug);
  if (!post) {
    return {
      title: 'Post Not Found | NEXDESK',
    };
  }

  return {
    title: `${post.title} | NEXDESK Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const post = posts.find((post) => post.slug === p.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white text-black">
      <div className="container mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition-colors mb-10 font-medium">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-500 font-medium pb-8 border-b border-zinc-100">
            <span>By <strong>{post.author}</strong></span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
        </div>

        <article className="prose prose-lg md:prose-xl prose-zinc max-w-none prose-a:text-accent-red hover:prose-a:text-black">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <div className="mt-16 pt-10 border-t border-zinc-100">
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 text-center border border-zinc-200">
            <h3 className="text-2xl font-bold mb-4">Looking for a premium workspace in Kondapur?</h3>
            <p className="text-zinc-600 mb-8 max-w-lg mx-auto">
              Join startups, freelancers, and growing teams at NEXDESK. Book a visit today and elevate your productivity.
            </p>
            <Link 
              href="/#pricing" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-accent-red text-white font-bold hover:bg-black transition-colors text-lg"
            >
              View Our Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
