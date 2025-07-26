import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render, prefix, layout } from "rwsdk/router";
import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { type User, db, setupDb } from "@/db";
import { env } from "cloudflare:workers";
import { BlogIndex } from "@/app/pages/BlogIndex";
import { BlogPost } from "@/app/pages/BlogPost";
import BlogPostPage from "@/app/pages/BlogPostPage";
import { BaseLayout } from "./app/Layout";
export { SessionDurableObject } from "./session/durableObject";
import { TagsPage } from "@/app/pages/TagsPage";
import { TagPage } from "./app/pages/TagPage";
import CoursePageLayout from "./app/layouts/CoursePageLayout";
import CourseHomePage from "./app/pages/BlogHomePage";
export type AppContext = {
  session: Session | null;
  user: User | null;
  pathname: string;
};

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    await setupDb(env);
    setupSessionStore(env);

    const path = new URL(request.url).pathname;
    ctx.pathname = path;

    try {
      ctx.session = await sessions.load(request);
    } catch (error) {
      if (error instanceof ErrorResponse && error.code === 401) {
        await sessions.remove(request, headers);
        headers.set("Location", "/user/login");

        return new Response(null, {
          status: 302,
          headers,
        });
      }

      throw error;
    }

    if (ctx.session?.userId) {
      ctx.user = await db.user.findUnique({
        where: {
          id: ctx.session.userId,
        },
      });
    }
  },
  render(Document, [
    layout(CoursePageLayout, [
      route("/", CourseHomePage),
      route("/blog/:slug", BlogPostPage),
    ]),
  ]),
]);
