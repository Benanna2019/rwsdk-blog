// src/layouts/CoursePageLayout.tsx
import { SidebarLayout, SidebarLayoutContent } from "@/app/components/sidebar-layout";
import { getAllBlogPosts } from "@/app/data/blog-posts";
import { LayoutProps } from "rwsdk/router";

interface CoursePageLayoutProps extends LayoutProps {
}

export default function CoursePageLayout({ children, requestInfo }: CoursePageLayoutProps) {

    let posts = getAllBlogPosts();
    const pathSegments = requestInfo?.ctx?.pathname?.split('/').filter(Boolean) || [];
    
    // Create appropriate breadcrumbs
    let breadcrumbs: string[] = [];
    
    if (pathSegments.length > 0) {
        // Always start with "Blog" for blog-related pages
        breadcrumbs.push('Blog');
        
        // If we're on a specific blog post (has slug), add the post title
        if (pathSegments.length > 1 && pathSegments[0] === 'blog') {
            const slug = pathSegments[1];
            const post = posts.find(p => p.slug === slug);
            if (post) {
                breadcrumbs.push(post.title);
            }
        }
    }    

    return (
        <main className="fontscroll-pt-16 font-sans antialiased dark:bg-gray-950">
            <div className="isolate">
                <SidebarLayout posts={posts}>
                    <SidebarLayoutContent breadcrumbs={breadcrumbs}>
                        {children}
                    </SidebarLayoutContent>
                </SidebarLayout>
            </div>
        </main>
    );
}