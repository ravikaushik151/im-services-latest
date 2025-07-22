'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../app/styles/blog-cards.css';

export default function BlogCards({ posts }) {
  return (
    <section className="py-5" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="row">
          <p className="text-uppercase text-muted text-center mb-2">Our Blog</p>
          <h2 className="fw-bold mb-5 text-center text-uppercase">
            Inspiring Ideas, Expert Insights, Creative Perspectives
          </h2>
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="blog-card position-relative overflow-hidden rounded-4 shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={400}
                  className="w-100 h-100 object-fit-cover"
                  style={{ maxHeight: '350px' }}
                />

                <div className="blog-card-overlay"></div>

                {post.category && (
                  <div className="blog-card-tag">{post.category}</div>
                )}

                <div className="blog-card-title">
                  <Link href={`/blog/${post.id}`} className="text-white text-decoration-none">
                    {post.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
