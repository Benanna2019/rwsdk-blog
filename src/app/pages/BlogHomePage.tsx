import { ContentLink } from "@/app/components/content-link";
import { Logo } from "@/app/components/logo";
import { PageSection } from "@/app/components/page-section";
import { getAllBlogPosts, type BlogPost } from "@/app/data/blog-posts";
import { BookIcon } from "@/app/icons/book-icon";
import { ClockIcon } from "@/app/icons/clock-icon";
import { LessonsIcon } from "@/app/icons/lessons-icon";
import { PlayIcon } from "@/app/icons/play-icon";

export default function BlogHomePage() {
    let posts = getAllBlogPosts();
    let totalPosts = posts.length;
    let totalCategories = new Set(posts.flatMap(post => post.categories)).size;
    return (
        <div className="relative mx-auto max-w-7xl">
            <div
                className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128"
            >
                <img
                    alt=""
                    src="/family.jpeg"
                    className="absolute inset-0 h-full w-full mask-l-from-60% object-cover object-[center_35%] opacity-40"
                />
                <div
                    className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                >
                </div>
            </div>
            <div className="mx-auto max-w-6xl">
                <div className="relative">
                    <div className="px-4 pt-48 pb-12 lg:py-24">
                        <h1 className="sr-only">Blog overview</h1>
                        <p
                            className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400"
                        >
                            Hi, I'm Ben. I love connecting people and ideas to help others succeed.
                        </p>
                        {/* <div
                            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white"
                        >
                            <div className="flex items-center gap-1.5">
                                <BookIcon
                                    className="stroke-gray-950/40 dark:stroke-white/40"
                                />
                                {totalPosts} posts
                            </div>
                            <span
                                className="hidden text-gray-950/25 sm:inline dark:text-white/25"
                            >
                                &middot;
                            </span>
                            <div className="flex items-center gap-1.5">
                                <LessonsIcon
                                    className="stroke-gray-950/40 dark:stroke-white/40"
                                />
                                {totalCategories} categories
                            </div>
                        </div> */}
                        <div className="mt-10">
                            <a
                                href={`/blog/${posts[0].slug}`}
                                className="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                <PlayIcon className="fill-white" />
                                Read latest post
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
                        <PageSection
                            id="about"
                            title="About"
                        >
                            <div className="max-w-2xl">
                                <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                                I'm a Software Developer with a passion for developer experience and technical education. Outside of that fancy title, I'm a counselor-turned-coder, educator, and problem-solver on the internet. I enjoy building developer tools, creating educational content, mentoring teams through technical challenges, and helping people feel heard and understood. In my free time, I work on side projects, teach courses on egghead, and look for connections between companies, products, and people.
                                </p>
                            </div>
                        </PageSection>

                        <PageSection
                            id="blog-posts"
                            title="Latest Posts"
                        >
                            <div className="max-w-2xl">
                                <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">
                                    Recent Blog Posts
                                </h2>
                                <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                                    Explore my latest thoughts on web development, technology, and personal growth.
                                </p>

                                <ol className="mt-6 space-y-4">
                                    {posts.slice(0, 3).map((post) => (
                                        <li key={post._id}>
                                            <ContentLink
                                                title={post.title}
                                                description={post.description}
                                                href={`/blog/${post.slug}`}
                                                type="article"
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </PageSection>
                    </div>
                </div>
            </div>
        </div>
    )
}
