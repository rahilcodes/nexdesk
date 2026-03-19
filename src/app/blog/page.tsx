import { posts } from '@/data/posts';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Blog | NEXDESK Coworking Space in Kondapur',
  description: 'Insights, guides, and tips on coworking, startups, and productivity in Hyderabad.',
};

export default function BlogList() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-zinc-50 text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">NEXDESK Insights</h1>
          <p className="text-lg text-zinc-600">Guides and strategies for startups, freelancers, and hybrid teams in Hyderabad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
              <Card className="h-full flex flex-col hover:border-black transition-colors overflow-hidden shadow-md">
                <div className="relative h-56 w-full overflow-hidden border-b border-zinc-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-accent-red transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-zinc-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-zinc-500 font-medium">
                  <span>{post.date}</span>
                  <span className="text-black group-hover:text-accent-red">Read Article &rarr;</span>
                </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
